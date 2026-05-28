# Changelog

All notable changes to CarbonChain are documented here.
Format follows [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).

---

## 1.0.0 (2026-05-28)


### Features

* **#100:** Implement bulk credit query endpoint ([21b4576](https://github.com/legend-esc/carbonchain/commit/21b4576b499b3c879cc69f061e0b9295224ec296))
* **#102:** Implement verifier dashboard API endpoints ([3649d77](https://github.com/legend-esc/carbonchain/commit/3649d77b9ffc29c7805c76a80b3e7b20fc679755))
* **#103:** Implement public retirement certificate verification endpoint ([2a8a363](https://github.com/legend-esc/carbonchain/commit/2a8a363d9f17ea260a312e1de046f46ab236253e))
* **#84-85-86-87:** Add verifier reputation, credit transfer, batch retirement, and credit splitting ([e73de0d](https://github.com/legend-esc/carbonchain/commit/e73de0d9813f7547efc3857eed60191aacd17928))
* **#88-91:** Implement credit merging, dispute resolution, vintage expiry, and project registry ([97fe63c](https://github.com/legend-esc/carbonchain/commit/97fe63c90a3ecc95bfa7730c153124e79cfcf4f7))
* **#91:** Add project validation to submit_credit and update tests ([347123a](https://github.com/legend-esc/carbonchain/commit/347123a19418935466e4073a96ed43e38428f1ad))
* **#96:** Add marketplace fee collection mechanism ([81ad846](https://github.com/legend-esc/carbonchain/commit/81ad846cda2cec22e761b152fea033e5cef33c3d))
* **#97:** Implement MRV data aggregation view function ([4e42630](https://github.com/legend-esc/carbonchain/commit/4e42630fd4ed3c5bc968a6012fc704e8a1613062))
* **#98:** Implement Soroban events indexer in NestJS API ([d6566e1](https://github.com/legend-esc/carbonchain/commit/d6566e122cd29c4dc26654256edf5fbc91ffda39))
* **#99:** Implement webhook delivery for credit status changes ([10e11a9](https://github.com/legend-esc/carbonchain/commit/10e11a9ad973c0670c3ed38ac58cdc7686e7dfb1))
* accept reading ([84478fe](https://github.com/legend-esc/carbonchain/commit/84478fe2d8cc29162d625241f16cee2d5e09bc80))
* accept reading ([706d486](https://github.com/legend-esc/carbonchain/commit/706d486e3f0985ab4211f04597ec3dec653159bb))
* add dark mode with ThemeService and toggle button ([ecbe160](https://github.com/legend-esc/carbonchain/commit/ecbe1604df41ebeaa59772bca57540981800add0)), closes [#109](https://github.com/legend-esc/carbonchain/issues/109)
* Add Dependabot Config for Automated Dependency Updates ([8b4fa8b](https://github.com/legend-esc/carbonchain/commit/8b4fa8be335e91f5bd429b5ab02785a545cc3077))
* add Dockerfile for NestJS API ([#115](https://github.com/legend-esc/carbonchain/issues/115)) ([3247636](https://github.com/legend-esc/carbonchain/commit/3247636b8ea261f745d9d4dd10f3d290ed0f763e))
* add Dockerfile for NestJS API ([#115](https://github.com/legend-esc/carbonchain/issues/115)) ([5edc29e](https://github.com/legend-esc/carbonchain/commit/5edc29ee2521b50d7b1c98425e4bc6ebe7bdfd94))
* Add GitHub Actions CI — Run Angular Frontend Tests ([e55de79](https://github.com/legend-esc/carbonchain/commit/e55de7950125c18c4baaa549e95f1b395ee19d78))
* add i18n support with runtime locale switcher (en/es/fr) ([639be49](https://github.com/legend-esc/carbonchain/commit/639be493d1c993fa6744bcf96b2c04fb93288f59)), closes [#110](https://github.com/legend-esc/carbonchain/issues/110)
* add pause/unpause emergency mechanism to all four contracts ([cfc7e60](https://github.com/legend-esc/carbonchain/commit/cfc7e607e2ab8c691e55e9da87aea9bb8d879065))
* add persistent storage TTL extension for all contracts ([3442292](https://github.com/legend-esc/carbonchain/commit/344229247c55b74ac10c60559e7b59e4e799b85d))
* add post-deploy smoke tests for testnet ([#117](https://github.com/legend-esc/carbonchain/issues/117)) ([1e8151e](https://github.com/legend-esc/carbonchain/commit/1e8151e1433ae5971227ce7248e330fe8bb8f981))
* add post-deploy smoke tests for testnet ([#117](https://github.com/legend-esc/carbonchain/issues/117)) ([f92f360](https://github.com/legend-esc/carbonchain/commit/f92f3601da8c5b65156161e2e7dc36bfe82a6375))
* admin API endpoints, auth guard, credit/project detail components ([80d0e35](https://github.com/legend-esc/carbonchain/commit/80d0e3596b8bc71ea8e627f6cf07a99c06402205))
* admin API endpoints, auth guard, credit/project detail components ([f78f2b3](https://github.com/legend-esc/carbonchain/commit/f78f2b34188ecc79a691c54b92eb31fbcbd11d0c))
* **admin:** implement verifier management UI ([9b65725](https://github.com/legend-esc/carbonchain/commit/9b657252532a7e17459526df9a256819c41f807f))
* **admin:** implement verifier management UI ([8b9c1f0](https://github.com/legend-esc/carbonchain/commit/8b9c1f0a294aa0af45ba4748f785ac9c30093687))
* **api:** add database indexes for credits table and TypeORM migration ([87ebc81](https://github.com/legend-esc/carbonchain/commit/87ebc816cc9e106657eee411ca91615405824316))
* **api:** add marketplace module + credits issue endpoint ([9341a7d](https://github.com/legend-esc/carbonchain/commit/9341a7df2bf2b62776f8f13e8d8c1c8c3341bb7a))
* **api:** add Redis CacheService with TTL, cache credits responses, invalidate on status change ([c435519](https://github.com/legend-esc/carbonchain/commit/c43551924d27f499f70a32ac16f272db5ce18ef2))
* **api:** add retirement module ([a86169f](https://github.com/legend-esc/carbonchain/commit/a86169f312ed7bbc7b3904ff5210703f56d2b366))
* **api:** add verifiers module ([d1a171b](https://github.com/legend-esc/carbonchain/commit/d1a171b133c6e29b454ea7387a9093fd22b5d2d6))
* **api:** implement credits and projects modules with Soroban read-calls ([59ae1b9](https://github.com/legend-esc/carbonchain/commit/59ae1b9133ecf730545dd4624fd59b9913c941fe))
* **api:** implement retirement certificate PDF generation ([7c2627a](https://github.com/legend-esc/carbonchain/commit/7c2627a89b3c20f149d8af27d4472debce292f83))
* **api:** implement Stellar service layer with Soroban RPC and simulation support ([583b170](https://github.com/legend-esc/carbonchain/commit/583b1701b751ec9c79e1ab18f5d5b49558a5de2b))
* **auth:** add auth module scaffold ([5b5d61f](https://github.com/legend-esc/carbonchain/commit/5b5d61f9de4573aa6d326eaafd4f03518c9d202b))
* **auth:** implement JWT strategy for wallet-based auth ([13215b1](https://github.com/legend-esc/carbonchain/commit/13215b1544a8275b0ba9173cf0d7b41124f54848))
* **auth:** implement SEP-10 challenge generation ([fb5454b](https://github.com/legend-esc/carbonchain/commit/fb5454be31844d1ffe9ad18c914651a4c1826f6d))
* **auth:** implement SEP-10 challenge verification ([e0e5154](https://github.com/legend-esc/carbonchain/commit/e0e5154a375c4becbc7bec9a81ccd85c3b201e9f))
* **auth:** wire AuthModule into AppModule ([e6fe334](https://github.com/legend-esc/carbonchain/commit/e6fe334133e5d118108a695d84f72581f36338cf))
* **ci:** add cargo audit for dependency vulnerability scanning ([a68b83f](https://github.com/legend-esc/carbonchain/commit/a68b83f489b7767868326cf07e5b5a54447685b1))
* **ci:** add cargo audit for dependency vulnerability scanning ([fdbd7fe](https://github.com/legend-esc/carbonchain/commit/fdbd7fe9faf663c1a4aa5b4e4d8235e83635402c))
* **contract:** implement credit submission flow and event emission ([9b9d262](https://github.com/legend-esc/carbonchain/commit/9b9d262746f9c8bc6fa01ee5efdf8dfdaf991f03))
* **contract:** implement retirement record storage and logic ([e5f59b8](https://github.com/legend-esc/carbonchain/commit/e5f59b8523eddee96a308e31e02226e43ad98673))
* **contract:** implement storage helpers and initialization for credit_registry ([3355006](https://github.com/legend-esc/carbonchain/commit/3355006a8d7284f74de7dcb6031cc6c1de5706af))
* **contracts:** complete credit_registry — verifier mgmt + approve_and_mint ([34af89d](https://github.com/legend-esc/carbonchain/commit/34af89dcb543cd839480ef3d7f9fee2add88b58d))
* **contracts:** implement fractional credit support (0.1 tonne resolution) ([b1a4ac9](https://github.com/legend-esc/carbonchain/commit/b1a4ac94ab8f97c1f7ea9bd6f02273af49bff11f))
* **contracts:** implement marketplace offer CRUD ([a8f3195](https://github.com/legend-esc/carbonchain/commit/a8f319545f4e85ca50956c208d5dab2636b54310))
* **contracts:** implement mrv_oracle update with anomaly detection ([8cf93c6](https://github.com/legend-esc/carbonchain/commit/8cf93c657b3ddb711557c5f25a1d27cfc9c44756))
* **contracts:** implement retirement burn + cross-contract mark_retired + event ([be57774](https://github.com/legend-esc/carbonchain/commit/be57774042785f7641bf9cd2d7894624c2e71dd8))
* **credit_registry:** add get_credit_status() lightweight view function ([2cda3fa](https://github.com/legend-esc/carbonchain/commit/2cda3fa50658f75431218c93c0cfdeda9bbcd76b))
* **credit_registry:** add get_verifier_count() view function ([3ead664](https://github.com/legend-esc/carbonchain/commit/3ead664305ae8f6aa46addfc4333406824855c11))
* dark mode with ThemeService and toggle button ([ca5d272](https://github.com/legend-esc/carbonchain/commit/ca5d27209aa7bfaae8dcf2fec080f9534b7f62eb))
* document tonnes unit convention ([1f2ffab](https://github.com/legend-esc/carbonchain/commit/1f2ffab7668f554ac0fa9cdcc5cef9a8434e8669))
* document tonnes unit convention ([d6cbc2f](https://github.com/legend-esc/carbonchain/commit/d6cbc2fe2f9d60a193ecde0160d8de07b0393197))
* expose is_verifier as public contract function ([0488ff9](https://github.com/legend-esc/carbonchain/commit/0488ff937f52dcbc52e4182db4714a6cc50a7e14))
* **frontend:** add core services for Freighter wallet and API client ([5683ffe](https://github.com/legend-esc/carbonchain/commit/5683ffebad2a12ba7d8178b46e9af0055a4c5096))
* **frontend:** add credit store and dashboard component ([91a4895](https://github.com/legend-esc/carbonchain/commit/91a4895b6259cc447d9eed91e63a4e3b80dc98a7))
* **frontend:** add GlobalErrorHandler with toast notifications and error reporting ([e3751ac](https://github.com/legend-esc/carbonchain/commit/e3751acfbe7358aef0b1ea60df9bd2489d0159d6))
* **frontend:** marketplace browse page ([bd24d7b](https://github.com/legend-esc/carbonchain/commit/bd24d7bacbd56346b656c1e566a79b32e54c27b5))
* **frontend:** retire wizard ([fb54637](https://github.com/legend-esc/carbonchain/commit/fb546379dde7a3aec7d354fe668c5abf9f77898d))
* **frontend:** wallet connect + SEP-10 auth flow ([77ec995](https://github.com/legend-esc/carbonchain/commit/77ec995af8469ebccfeef0f36896f2fa4e3ba87f))
* i18n support with runtime locale switcher (en/es/fr) ([4cf9c48](https://github.com/legend-esc/carbonchain/commit/4cf9c485f088b499a61c40a03dc82de4d68c673e))
* implement contract upgrade mechanism (WASM hash update) ([3178ce1](https://github.com/legend-esc/carbonchain/commit/3178ce182b2d5dba2c19de1f45289a0a28606fa6))
* implement issuer allowlist, methodology registry, and offer expiry ([dd8b4ec](https://github.com/legend-esc/carbonchain/commit/dd8b4ec45200b06c85960345ee6db01b50c4b531))
* implement issuer allowlist, methodology registry, and offer expiry ([4e356b6](https://github.com/legend-esc/carbonchain/commit/4e356b6befcfd426a15a5d47cb066c9bbe6ff4de))
* implement issues  Implement Swagger/OpenAPI Documentation for All Endpoints,Implement Freighter Wallet Connection in Angular Frontend ([ca90f1a](https://github.com/legend-esc/carbonchain/commit/ca90f1a72d26dd4dae9f103dc931e5ccc917be46))
* implement issues [#34](https://github.com/legend-esc/carbonchain/issues/34), [#40](https://github.com/legend-esc/carbonchain/issues/40), [#42](https://github.com/legend-esc/carbonchain/issues/42), [#44](https://github.com/legend-esc/carbonchain/issues/44) ([61bc9be](https://github.com/legend-esc/carbonchain/commit/61bc9be2952823ebbaf88e040d92d7376c1630be))
* implement issues [#35](https://github.com/legend-esc/carbonchain/issues/35), [#36](https://github.com/legend-esc/carbonchain/issues/36), [#37](https://github.com/legend-esc/carbonchain/issues/37), [#21](https://github.com/legend-esc/carbonchain/issues/21) ([ce7251f](https://github.com/legend-esc/carbonchain/commit/ce7251f91c7489bb423ad018180b7e23c166251d))
* implement issues [#35](https://github.com/legend-esc/carbonchain/issues/35), [#36](https://github.com/legend-esc/carbonchain/issues/36), [#37](https://github.com/legend-esc/carbonchain/issues/37), [#21](https://github.com/legend-esc/carbonchain/issues/21) ([b69f8f3](https://github.com/legend-esc/carbonchain/commit/b69f8f333d89747a76dc6244f2a9da2a29055649))
* implement issues [#38](https://github.com/legend-esc/carbonchain/issues/38) [#39](https://github.com/legend-esc/carbonchain/issues/39) [#41](https://github.com/legend-esc/carbonchain/issues/41) [#43](https://github.com/legend-esc/carbonchain/issues/43) ([093a531](https://github.com/legend-esc/carbonchain/commit/093a5312a668c90a41daeb3afe08f3576310e0e0))
* implement issues Implement Dashboard Portfolio Overview,Implement Marketplace Browse UI,Add Rate Limiting to Auth and Credit Issuance Endpoints ([d7cee94](https://github.com/legend-esc/carbonchain/commit/d7cee9400cb20c7cdd062fe7ddb744dde7327538))
* implement replay attack protection with nonce-based verification ([1cc477a](https://github.com/legend-esc/carbonchain/commit/1cc477a8dbb88b19a7c45ba7f0b5fbc085fe7f63))
* implement session management in credit registry ([52f5ca7](https://github.com/legend-esc/carbonchain/commit/52f5ca72ef736d82933ab5ce8eaed0b16eeb73eb))
* implement two-step admin transfer for all contracts ([5ed3db6](https://github.com/legend-esc/carbonchain/commit/5ed3db64f48d060eb06553c3b10dd93f60375245))
* implement verifier multi-sig approval for credit minting ([18805ce](https://github.com/legend-esc/carbonchain/commit/18805ce9268005f31d9d79c6204d1f8967f5db70))
* **infra:** add docker-compose with api, frontend, redis, postgres services and health checks ([2275b07](https://github.com/legend-esc/carbonchain/commit/2275b07ca7ca6c220eba8e6eddf5d2b761499d93))
* initialize CarbonChain project structure ([ecea906](https://github.com/legend-esc/carbonchain/commit/ecea9060903f2b80c54b13abe296ea0244adfe42))
* **shared:** add RetirementRecord, Offer, MrvDataPoint, AuditLog types ([0535a98](https://github.com/legend-esc/carbonchain/commit/0535a989b6166628cf4a487a735b45a5bf5c4e09))
* **shared:** define core types and contract error codes ([e9e53c9](https://github.com/legend-esc/carbonchain/commit/e9e53c9825083869c808a85b826071371d7b0119))


### Bug Fixes

* **#64:** add nonce parameter to approve_and_mint for replay protection ([13794e3](https://github.com/legend-esc/carbonchain/commit/13794e35ce5761a2d6a90817fed9ec92dd067ee5))
* **#65:** ensure get_credit returns Result instead of panicking ([812a531](https://github.com/legend-esc/carbonchain/commit/812a531f9148671d886c0f6609aca49ab9a14a12))
* **#66:** ensure price_per_tonne validation is comprehensive ([822fea1](https://github.com/legend-esc/carbonchain/commit/822fea1945bf96fe2f77c78d988cfd9f5d289508))
* **#67:** validate project_id exists in credit registry before accepting MRV data ([38d4f26](https://github.com/legend-esc/carbonchain/commit/38d4f268a23cfa475fcaaa4ec68f8682b97434ae))
* **#72:** standardize event topics to use Symbol::new for consistent formatting ([dcb96d4](https://github.com/legend-esc/carbonchain/commit/dcb96d4eb0834af0dae02da8d0b5762f68c1e316))
* **#73:** add list_credits_by_status function for filtered credit queries ([76f2a59](https://github.com/legend-esc/carbonchain/commit/76f2a5984e11c812c016470a7a6867c68804d2a1))
* **#74:** add admin and pause capabilities to retirement contract ([4e4817e](https://github.com/legend-esc/carbonchain/commit/4e4817ec5ba23180424f934f6ea1761ca65cd393))
* **#75:** add deregister_oracle function to remove compromised oracles ([d7e4afe](https://github.com/legend-esc/carbonchain/commit/d7e4afe571167f04054dc116a51a854b5f0ee0cd))
* **#76:** Add vintage_year range validation ([df8c33e](https://github.com/legend-esc/carbonchain/commit/df8c33e4fe63e91205d81f8929d860d047d05961))
* **#77:** Implement token refund in cancel_offer ([d58367a](https://github.com/legend-esc/carbonchain/commit/d58367a4a70a4b2c95b6c9e20e6a945094bc8a1d))
* **#78:** Add geography field validation ([b570e27](https://github.com/legend-esc/carbonchain/commit/b570e271b419a20366fe7c86cf2a3380f3cfb01f))
* **#79:** Add clear_anomaly_flag function for MRV data re-verification ([32917a0](https://github.com/legend-esc/carbonchain/commit/32917a00082d6c2f59df5e471e7c03d062b9ae35))
* **#80:** Add IPFS hash format validation ([25af1f2](https://github.com/legend-esc/carbonchain/commit/25af1f2f697dfc145d166b0019ba1d2fcfca7926))
* **#81:** Add offer expiry support with created_at and expires_at ([a8b3e01](https://github.com/legend-esc/carbonchain/commit/a8b3e01696876b1fe7001603758571dbe2784b54))
* **#82:** Include project_id and credit_id in CreditSubmitted event ([60086cd](https://github.com/legend-esc/carbonchain/commit/60086cd1a20d36c1996a21a09c20d932728ad9a7))
* **#83:** Prevent double-retirement race condition ([eba6e53](https://github.com/legend-esc/carbonchain/commit/eba6e53d474fe3c9997189693d432c0accea0b8d))
* 68: Verify credit ownership before retirement ([af45bec](https://github.com/legend-esc/carbonchain/commit/af45becb16403d8df38e95cf5356946c0d798974))
* 69: Add incremental verifier service management ([cfb9c58](https://github.com/legend-esc/carbonchain/commit/cfb9c58598dc520b1fd04feb5ca3249fe0f8c0ac))
* 70: OfferCount overflow protection ([30a9393](https://github.com/legend-esc/carbonchain/commit/30a9393d5f2b856a27d5f6576b17d73c6b440548))
* 71: get_latest_reading returns Result to distinguish project not found ([8aecbb0](https://github.com/legend-esc/carbonchain/commit/8aecbb02736ff385a6363fb7215c46729d23db60))
* add get_active_offers_by_seller to filter cancelled offers in marketplace ([ee9e832](https://github.com/legend-esc/carbonchain/commit/ee9e832723153a35ee5eda3ec41a4e662e819677))
* add helmet/CORS, env validation, and CI improvements ([#45](https://github.com/legend-esc/carbonchain/issues/45) [#46](https://github.com/legend-esc/carbonchain/issues/46) [#47](https://github.com/legend-esc/carbonchain/issues/47) [#48](https://github.com/legend-esc/carbonchain/issues/48)) ([b983a3a](https://github.com/legend-esc/carbonchain/commit/b983a3a395804909bd433679930c05a6a9ff65b4))
* add helmet/CORS, env validation, and CI improvements ([#45](https://github.com/legend-esc/carbonchain/issues/45) [#46](https://github.com/legend-esc/carbonchain/issues/46) [#47](https://github.com/legend-esc/carbonchain/issues/47) [#48](https://github.com/legend-esc/carbonchain/issues/48)) ([add5ca6](https://github.com/legend-esc/carbonchain/commit/add5ca6d45b99eb88328d87cd9322dc161fe9109))
* address security bugs in retirement, marketplace, and mrv_oracle contracts ([719ad84](https://github.com/legend-esc/carbonchain/commit/719ad841c9a93bc76f32065ce28fc30e4b485b73))
* address security bugs in retirement, marketplace, and mrv_oracle… ([ff3dc90](https://github.com/legend-esc/carbonchain/commit/ff3dc9014b9778e6c3cc651c26bcc079ae859f4b))
* block remove_verifier when verifier has pending credits ([db42c12](https://github.com/legend-esc/carbonchain/commit/db42c12cbde1410bb35c44754dd3e63d1e40d334))
* **ci:** resolve all lint errors and failing tests across API and frontend ([6fd9563](https://github.com/legend-esc/carbonchain/commit/6fd95638a4709bae259a1124ce590c9cd65d709e))
* **ci:** resolve all three failing CI jobs ([2a65818](https://github.com/legend-esc/carbonchain/commit/2a65818bf41cdd6652554bc77e01711933b34a43))
* Contract issues [#80](https://github.com/legend-esc/carbonchain/issues/80), [#81](https://github.com/legend-esc/carbonchain/issues/81), [#82](https://github.com/legend-esc/carbonchain/issues/82), [#83](https://github.com/legend-esc/carbonchain/issues/83) ([1773be9](https://github.com/legend-esc/carbonchain/commit/1773be9a9d1eaa62f8daf9efcb2bdda7ba63355a))
* contract security and correctness issues ([4b2cebb](https://github.com/legend-esc/carbonchain/commit/4b2cebb92640f038112700e64ee77a92bad9cc9e))
* contract security and correctness issues ([d455369](https://github.com/legend-esc/carbonchain/commit/d4553698916cfd3cdaa156a44256429723134d83))
* contract security and operational improvements ([4e0d031](https://github.com/legend-esc/carbonchain/commit/4e0d031bd52e07152f4aa23cff6b177492d82e71))
* **contracts:** commit missing storage and events functions for credit_registry ([2cb3f7f](https://github.com/legend-esc/carbonchain/commit/2cb3f7f62d7d44a1e7ad6662adfa1be27d081e0d))
* **contracts:** double-flag guard, pagination, MRV history cap ([eba2c7b](https://github.com/legend-esc/carbonchain/commit/eba2c7bbcbfb4af1a3666c4822fc096457fc5a98))
* **contracts:** double-flag guard, pagination, MRV history cap ([20af9bd](https://github.com/legend-esc/carbonchain/commit/20af9bd2782c4dd7cd665f0f31cf96aff4b4c16f))
* **contracts:** resolve ID collisions, add missing events, and improv… ([96f4f1c](https://github.com/legend-esc/carbonchain/commit/96f4f1c3d911e62f9d40bd8f01eca6b2c236eb18))
* **contracts:** resolve ID collisions, add missing events, and improve test coverage ([d30fcd0](https://github.com/legend-esc/carbonchain/commit/d30fcd017ab2e414734c7669080137c3f1a0aa06))
* **credit_registry:** enforce pending status for approve_and_mint and add regression tests ([2f19918](https://github.com/legend-esc/carbonchain/commit/2f19918170649f4c4e2bd4c5edb28f360cccd151))
* **credit_registry:** enforce pending status for approve_and_mint and… ([7e1eb5c](https://github.com/legend-esc/carbonchain/commit/7e1eb5c9df6771d04b8d77d59071f049674e0b52))
* **credit_registry:** reject duplicate project/vintage credits for pending/active submissions ([6b9e6b7](https://github.com/legend-esc/carbonchain/commit/6b9e6b7e72b864d0be5667c8a2cc280757073a7a))
* get_session_operation_count returns SessionNotFound for missing sessions ([e9b129d](https://github.com/legend-esc/carbonchain/commit/e9b129d98530d56be4e131ae750ac20d9d1a3e0e))
* mrv_oracle register_oracle returns bool and emits distinct event for duplicates ([1c0e78d](https://github.com/legend-esc/carbonchain/commit/1c0e78d12370ab7d1226b576fef359472a540a75))
* resolve API build — local shared types, disable incremental, fix rootDir ([a3883bd](https://github.com/legend-esc/carbonchain/commit/a3883bd205ef4f650db649b2d23c75dd05645f18))
* resolve build and test failures across contracts and frontend ([27c8ff5](https://github.com/legend-esc/carbonchain/commit/27c8ff5f3b18c79425be889c5712ea2199d5f4d7))
* resolve failing API tests and build errors ([eb0ea5b](https://github.com/legend-esc/carbonchain/commit/eb0ea5bed476c9f5aa498a9e16d5e5781921e959))
* resolve failing API tests and build errors ([870738f](https://github.com/legend-esc/carbonchain/commit/870738f8af8fadeb4f03d56aa68e5c46d48907f4))
* security and validation improvements ([1c5fefa](https://github.com/legend-esc/carbonchain/commit/1c5fefa661159dafa07cb37501d2d88e456bbd3a))
* validate admin address in credit_registry initialize ([20aba4d](https://github.com/legend-esc/carbonchain/commit/20aba4d6c060a9bd4dc50e5786d6673ec789fcc9))
* Validation and anomaly flag clearing ([e46b7d4](https://github.com/legend-esc/carbonchain/commit/e46b7d4274fdb446f4c9b10cdab8ecbb62f59035))
* wire dev proxy, Freighter install prompt, complete .env.example ([da72b32](https://github.com/legend-esc/carbonchain/commit/da72b329b967b65aeaf41053d664d19b79fb52ab))

## [Unreleased]

### Added

**Smart Contracts**
- `credit_registry`: verifier management (`register_verifier`, `remove_verifier`, `list_verifiers`), `approve_and_mint`, `flag_credit`, `mark_retired`, `get_credit`, `list_credits_by_project` — 11 tests
- `retirement`: `retire` with cross-contract `mark_retired` call, `get_retirement`, `get_retirements_by_account` — 3 tests
- `marketplace`: `create_offer`, `cancel_offer`, `get_offer`, `get_offers_by_seller`, `offer_count` — 7 tests
- `mrv_oracle`: `initialize`, `register_oracle`, `update_mrv_data` with >20% anomaly detection, `get_latest`, `get_history` — 5 tests

**API (NestJS)**
- `VerifiersModule` — `GET /verifiers`, `GET /verifiers/:address`
- `RetirementModule` — `POST /retirement`, `GET /retirement/:id`, `GET /retirement/account/:address`
- `MarketplaceModule` — `POST /marketplace/offer`, `GET /marketplace/offer/:id`, `GET /marketplace/seller/:address`, `DELETE /marketplace/offer/:id/seller/:address`
- `CreditsModule` — `POST /credits/issue`
- SEP-10 auth (`/auth/challenge`, `/auth/token`, `/auth/me`)

**Frontend (Angular)**
- `AuthService` — full SEP-10 wallet login flow
- `ConnectWalletComponent` — Freighter connect button with install prompt
- Marketplace page (`/marketplace`) — browse and display active listings
- Retire wizard (`/retire`) — 3-step credit retirement form
- Angular dev proxy — `/api` routes to `http://localhost:3000`

### Open for contributors
- Buy / fill offer flow (contract + API + UI)
- Browse all marketplace listings (requires `list_all_offers` contract function)
- Retirement certificate viewer (`/certificates/:id`)
- Admin panel — verifier approval and credit minting UI
- JWT auth guards on state-mutating API endpoints
- `docker-compose.yml` for local PostgreSQL
- `deploy-testnet.sh` implementation
- Mobile-responsive layout
