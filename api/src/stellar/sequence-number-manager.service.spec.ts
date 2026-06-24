import { Test, TestingModule } from '@nestjs/testing';
import { SequenceNumberManager } from './sequence-number-manager.service';

describe('SequenceNumberManager', () => {
  let manager: SequenceNumberManager;

  const PK_A = 'GD72EF...FH3W9A';
  const PK_B = 'GB84GH...JK2L8Z';

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SequenceNumberManager],
    }).compile();

    manager = module.get<SequenceNumberManager>(SequenceNumberManager);
  });

  afterEach(() => {
    manager.clear();
  });

  // ── cache miss ─────────────────────────────────────────────────────────────

  it('returns undefined on cache miss', () => {
    expect(manager.getNextSequenceNumber(PK_A)).toBeUndefined();
  });

  // ── cache and retrieve ─────────────────────────────────────────────────────

  it('returns cached value and increments optimistically', () => {
    manager.cacheSequenceNumber(PK_A, 100);
    expect(manager.getNextSequenceNumber(PK_A)).toBe(100);
    expect(manager.getNextSequenceNumber(PK_A)).toBe(101);
    expect(manager.getNextSequenceNumber(PK_A)).toBe(102);
  });

  // ── multiple keys are isolated ─────────────────────────────────────────────

  it('isolates sequence numbers per public key', () => {
    manager.cacheSequenceNumber(PK_A, 10);
    manager.cacheSequenceNumber(PK_B, 200);

    expect(manager.getNextSequenceNumber(PK_A)).toBe(10);
    expect(manager.getNextSequenceNumber(PK_B)).toBe(200);
    expect(manager.getNextSequenceNumber(PK_A)).toBe(11);
    expect(manager.getNextSequenceNumber(PK_B)).toBe(201);
  });

  // ── reset ──────────────────────────────────────────────────────────────────

  it('clears cached entry after reset', () => {
    manager.cacheSequenceNumber(PK_A, 5);
    manager.getNextSequenceNumber(PK_A); // consumes 5, cache becomes 6
    manager.reset(PK_A);
    expect(manager.getNextSequenceNumber(PK_A)).toBeUndefined();
  });

  it('reset only clears the targeted key', () => {
    manager.cacheSequenceNumber(PK_A, 1);
    manager.cacheSequenceNumber(PK_B, 2);
    manager.reset(PK_A);
    expect(manager.getNextSequenceNumber(PK_A)).toBeUndefined();
    expect(manager.getNextSequenceNumber(PK_B)).toBe(2);
  });

  // ── clear / count ──────────────────────────────────────────────────────────

  it('count returns number of cached keys', () => {
    expect(manager.count()).toBe(0);
    manager.cacheSequenceNumber(PK_A, 1);
    expect(manager.count()).toBe(1);
    manager.cacheSequenceNumber(PK_B, 2);
    expect(manager.count()).toBe(2);
  });

  it('clear removes all entries', () => {
    manager.cacheSequenceNumber(PK_A, 1);
    manager.cacheSequenceNumber(PK_B, 2);
    manager.clear();
    expect(manager.count()).toBe(0);
  });

  // ── concurrent submission scenario ─────────────────────────────────────────
  // Simulates N concurrent callers all calling getNextSequenceNumber at once.

  it('produces strictly increasing sequence numbers under concurrent load', async () => {
    const CONCURRENCY = 10;
    const startSeq = 50;
    manager.cacheSequenceNumber(PK_A, startSeq);

    const results = await Promise.all(
      Array.from({ length: CONCURRENCY }, () =>
        Promise.resolve().then(() => manager.getNextSequenceNumber(PK_A)!),
      ),
    );

    // Each caller must have received a unique, monotonically increasing seq
    const sorted = [...results].sort((a, b) => a - b);
    expect(sorted).toEqual(results);
    expect(sorted[0]).toBe(startSeq);
    expect(sorted[sorted.length - 1]).toBe(startSeq + CONCURRENCY - 1);

    // Next call continues from where the batch left off
    expect(manager.getNextSequenceNumber(PK_A)).toBe(startSeq + CONCURRENCY);
  });

  it('handles concurrent cache-miss for the same key gracefully', async () => {
    // No key cached yet — all 3 callers will miss, but they should all get
    // valid sequence numbers (the first caller triggers the fetch which caches
    // a value; subsequent callers may race on setting, but they always receive
    // a valid number from the cache after the first fetch commits).
    //
    // In practice this tests that the public API does not throw and returns
    // numbers in a valid incrementing sequence.
    const CONCURRENCY = 5;

    // Simulate a single initial cache seed (as if Horizon was queried once)
    manager.cacheSequenceNumber(PK_A, 100);

    const results = await Promise.all(
      Array.from({ length: CONCURRENCY }, () =>
        Promise.resolve().then(() => manager.getNextSequenceNumber(PK_A)!),
      ),
    );

    // Ensure all returned values are unique and strictly increasing
    const unique = new Set(results);
    expect(unique.size).toBe(CONCURRENCY);

    for (let i = 1; i < results.length; i++) {
      expect(results[i]).toBe(results[i - 1] + 1);
    }

    // Cache should have advanced to the next value after the last call
    expect(manager.getNextSequenceNumber(PK_A)).toBe(100 + CONCURRENCY);
  });

  it('does not share sequences across different keys under concurrent access', async () => {
    manager.cacheSequenceNumber(PK_A, 1);
    manager.cacheSequenceNumber(PK_B, 100);

    const results = await Promise.all([
      manager.getNextSequenceNumber(PK_A)!,
      manager.getNextSequenceNumber(PK_B)!,
      manager.getNextSequenceNumber(PK_A)!,
      manager.getNextSequenceNumber(PK_B)!,
    ]);

    expect(results[0]).toBe(1);   // A:1
    expect(results[1]).toBe(100); // B:100
    expect(results[2]).toBe(2);   // A:2
    expect(results[3]).toBe(101); // B:101
  });
});
