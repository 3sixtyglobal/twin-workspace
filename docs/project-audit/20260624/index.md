# TWIN Project Audit

Generated: 2026-06-24

34 submodules, 195 published packages, 454,509 lines of TypeScript

---

## Summary

| Metric                                   | Value   |
| ---------------------------------------- | ------- |
| Submodules analysed                      | 34      |
| Total @twin.org packages                 | 195     |
| Total TypeScript lines                   | 454,509 |
| Source lines (excl. spec)                | 322,004 |
| Spec lines                               | 132,505 |
| Spec / source ratio                      | 41.2%   |
| Unique 3rd-party production dependencies | 52      |
| Unique 3rd-party dev dependencies        | 37      |

---

## Observations

- The codebase ships 195 independently versioned `@twin.org/` packages across 34 submodules, averaging roughly 5-6 packages per submodule, reflecting a strong commitment to composable, single-responsibility modules.
- At 41.2% spec-to-source ratio, the project has meaningful test coverage: for every 100 lines of source code there are 41 lines of spec. Coverage is uneven across submodules; standards and data packages tend to have near-zero spec lines since they are primarily type/schema declarations.
- The production dependency footprint is lean: just 52 unique third-party packages serve the entire platform. AWS SDK, Azure, GCP, IOTA, and OpenTelemetry are the dominant vendor groups, reflecting the multi-cloud and distributed-ledger design goals.
- All cryptographic primitives are sourced from the `@noble` and `@scure` families (curves, hashes, ciphers, bip32, bip39, base encodings), avoiding mixed crypto provenance and simplifying security auditing.
- TypeScript 6.0.3 is used as both a production runtime dependency (for transformer/compiler tooling) and a dev dependency, and the codebase targets ESM-first output throughout as evidenced by `type: module` in every root manifest.
- The toolchain is highly consistent: every submodule uses the same ESLint stack (unicorn, jsdoc, import-x, prettier, unused-imports), vitest with v8 coverage, ts-patch for decorator transforms, and release-please for versioning; this uniformity lowers onboarding friction significantly.

---

## @twin.org Package Inventory

| Package                                               | Version      | Submodule                  | Source Lines | Spec Lines | Spec / source |
| ----------------------------------------------------- | ------------ | -------------------------- | ------------ | ---------- | ------------- |
| @twin.org/cli-core                                    | 0.9.1-next.0 | twin-framework             | 1,118        | 129        | 11.5%         |
| @twin.org/context                                     | 0.9.1-next.0 | twin-framework             | 323          | 498        | 154.2%        |
| @twin.org/core                                        | 0.9.1-next.0 | twin-framework             | 7,694        | 6,224      | 80.9%         |
| @twin.org/crypto                                      | 0.9.1-next.0 | twin-framework             | 2,317        | 1,606      | 69.3%         |
| @twin.org/crypto-cli                                  | 0.9.1-next.0 | twin-framework             | 341          | 57         | 16.7%         |
| @twin.org/entity                                      | 0.9.1-next.0 | twin-framework             | 1,174        | 2,626      | 223.7%        |
| @twin.org/image                                       | 0.9.1-next.0 | twin-framework             | 2,285        | 30         | 1.3%          |
| @twin.org/merge-locales                               | 0.9.1-next.0 | twin-framework             | 325          | 5          | 1.5%          |
| @twin.org/modules                                     | 0.9.1-next.0 | twin-framework             | 336          | 354        | 105.4%        |
| @twin.org/nameof                                      | 0.9.1-next.0 | twin-framework             | 54           | 10         | 18.5%         |
| @twin.org/nameof-transformer                          | 0.9.1-next.0 | twin-framework             | 277          | 88         | 31.8%         |
| @twin.org/nameof-vitest-plugin                        | 0.9.1-next.0 | twin-framework             | 47           | 25         | 53.2%         |
| @twin.org/qr                                          | 0.9.1-next.0 | twin-framework             | 2,216        | 5          | 0.2%          |
| @twin.org/validate-locales                            | 0.9.1-next.0 | twin-framework             | 1,290        | 129        | 10%           |
| @twin.org/web                                         | 0.9.1-next.0 | twin-framework             | 2,759        | 1,656      | 60%           |
| @twin.org/tools-core                                  | 0.9.1-next.0 | twin-tools                 | 10,774       | 1,514      | 14.1%         |
| @twin.org/tools-models                                | 0.9.1-next.0 | twin-tools                 | 1,607        | 5          | 0.3%          |
| @twin.org/ts-to-jsonld-context                        | 0.9.1-next.0 | twin-tools                 | 653          | 157        | 24%           |
| @twin.org/ts-to-openapi                               | 0.9.1-next.0 | twin-tools                 | 1,884        | 156        | 8.3%          |
| @twin.org/ts-to-schema                                | 0.9.1-next.0 | twin-tools                 | 746          | 110        | 14.7%         |
| @twin.org/data-core                                   | 0.9.1-next.0 | twin-data                  | 615          | 1,207      | 196.3%        |
| @twin.org/data-framework                              | 0.9.1-next.0 | twin-data                  | 127          | 5          | 3.9%          |
| @twin.org/data-json-ld                                | 0.9.1-next.0 | twin-data                  | 1,995        | 1,993      | 99.9%         |
| @twin.org/data-json-path                              | 0.9.1-next.0 | twin-data                  | 283          | 341        | 120.5%        |
| @twin.org/standards-dataspace-protocol                | 0.9.1-next.0 | twin-standards             | 1,767        | 488        | 27.6%         |
| @twin.org/standards-dcsa                              | 0.9.1-next.0 | twin-standards             | 2,894        | 5          | 0.2%          |
| @twin.org/standards-dublin-core                       | 0.9.1-next.0 | twin-standards             | 213          | 23         | 10.8%         |
| @twin.org/standards-foaf                              | 0.9.1-next.0 | twin-standards             | 435          | 5          | 1.1%          |
| @twin.org/standards-gs1                               | 0.9.1-next.0 | twin-standards             | 3,149        | 70         | 2.2%          |
| @twin.org/standards-ld-contexts                       | 0.9.1-next.0 | twin-standards             | 138          | 41         | 29.7%         |
| @twin.org/standards-schema-org                        | 0.9.1-next.0 | twin-standards             | 336          | 94         | 28%           |
| @twin.org/standards-unece                             | 0.9.1-next.0 | twin-standards             | 107,870      | 446        | 0.4%          |
| @twin.org/standards-vda                               | 0.9.1-next.0 | twin-standards             | 508          | 94         | 18.5%         |
| @twin.org/standards-w3c-activity-streams              | 0.9.1-next.0 | twin-standards             | 1,797        | 2,334      | 129.9%        |
| @twin.org/standards-w3c-dcat                          | 0.9.1-next.0 | twin-standards             | 993          | 538        | 54.2%         |
| @twin.org/standards-w3c-did                           | 0.9.1-next.0 | twin-standards             | 1,946        | 1,902      | 97.7%         |
| @twin.org/standards-w3c-odrl                          | 0.9.1-next.0 | twin-standards             | 1,450        | 1,604      | 110.6%        |
| @twin.org/standards-w3c-vcard                         | 0.9.1-next.0 | twin-standards             | 109          | 21         | 19.3%         |
| @twin.org/api-auth-entity-storage-models              | 0.9.0-next.1 | twin-api                   | 723          | 5          | 0.7%          |
| @twin.org/api-auth-entity-storage-rest-client         | 0.9.0-next.1 | twin-api                   | 462          | 5          | 1.1%          |
| @twin.org/api-auth-entity-storage-service             | 0.9.0-next.1 | twin-api                   | 3,241        | 3,348      | 103.3%        |
| @twin.org/api-core                                    | 0.9.0-next.1 | twin-api                   | 455          | 245        | 53.8%         |
| @twin.org/api-models                                  | 0.9.0-next.1 | twin-api                   | 1,808        | 404        | 22.3%         |
| @twin.org/api-processors                              | 0.9.0-next.1 | twin-api                   | 979          | 124        | 12.7%         |
| @twin.org/api-rest-client                             | 0.9.0-next.1 | twin-api                   | 161          | 5          | 3.1%          |
| @twin.org/api-server-fastify                          | 0.9.0-next.1 | twin-api                   | 982          | 599        | 61%           |
| @twin.org/api-service                                 | 0.9.0-next.1 | twin-api                   | 1,096        | 401        | 36.6%         |
| @twin.org/api-tenant-processor                        | 0.9.0-next.1 | twin-api                   | 1,574        | 930        | 59.1%         |
| @twin.org/logging-connector-console                   | 0.9.0-next.1 | twin-logging               | 213          | 9          | 4.2%          |
| @twin.org/logging-connector-entity-storage            | 0.9.0-next.1 | twin-logging               | 539          | 265        | 49.2%         |
| @twin.org/logging-models                              | 0.9.0-next.1 | twin-logging               | 505          | 9          | 1.8%          |
| @twin.org/logging-rest-client                         | 0.9.0-next.1 | twin-logging               | 113          | 9          | 8%            |
| @twin.org/logging-service                             | 0.9.0-next.1 | twin-logging               | 365          | 11         | 3%            |
| @twin.org/event-bus-connector-local                   | 0.9.0-next.1 | twin-event-bus             | 186          | 270        | 145.2%        |
| @twin.org/event-bus-models                            | 0.9.0-next.1 | twin-event-bus             | 194          | 9          | 4.6%          |
| @twin.org/event-bus-service                           | 0.9.0-next.1 | twin-event-bus             | 232          | 28         | 12.1%         |
| @twin.org/event-bus-socket-client                     | 0.9.0-next.1 | twin-event-bus             | 279          | 79         | 28.3%         |
| @twin.org/entity-storage-connector-cosmosdb           | 0.9.0-next.1 | twin-entity-storage        | 1,343        | 2,785      | 207.4%        |
| @twin.org/entity-storage-connector-dynamodb           | 0.9.0-next.1 | twin-entity-storage        | 2,054        | 2,814      | 137%          |
| @twin.org/entity-storage-connector-file               | 0.9.0-next.1 | twin-entity-storage        | 932          | 2,908      | 312%          |
| @twin.org/entity-storage-connector-gcp-firestore      | 0.9.0-next.1 | twin-entity-storage        | 1,201        | 2,748      | 228.8%        |
| @twin.org/entity-storage-connector-memory             | 0.9.0-next.1 | twin-entity-storage        | 756          | 2,944      | 389.4%        |
| @twin.org/entity-storage-connector-mongodb            | 0.9.0-next.1 | twin-entity-storage        | 920          | 2,764      | 300.4%        |
| @twin.org/entity-storage-connector-mysql              | 0.9.0-next.1 | twin-entity-storage        | 1,424        | 2,803      | 196.8%        |
| @twin.org/entity-storage-connector-postgresql         | 0.9.0-next.1 | twin-entity-storage        | 1,403        | 2,803      | 199.8%        |
| @twin.org/entity-storage-connector-scylladb           | 0.9.0-next.1 | twin-entity-storage        | 1,997        | 2,762      | 138.3%        |
| @twin.org/entity-storage-models                       | 0.9.0-next.1 | twin-entity-storage        | 1,059        | 958        | 90.5%         |
| @twin.org/entity-storage-rest-client                  | 0.9.0-next.1 | twin-entity-storage        | 232          | 9          | 3.9%          |
| @twin.org/entity-storage-service                      | 0.9.0-next.1 | twin-entity-storage        | 1,250        | 492        | 39.4%         |
| @twin.org/vault-connector-entity-storage              | 0.9.0-next.1 | twin-vault                 | 604          | 685        | 113.4%        |
| @twin.org/vault-connector-hashicorp                   | 0.9.0-next.1 | twin-vault                 | 1,824        | 765        | 41.9%         |
| @twin.org/vault-models                                | 0.9.0-next.1 | twin-vault                 | 295          | 9          | 3.1%          |
| @twin.org/blob-storage-connector-aws-s3               | 0.9.0-next.1 | twin-blob-storage          | 503          | 219        | 43.5%         |
| @twin.org/blob-storage-connector-azure                | 0.9.0-next.1 | twin-blob-storage          | 430          | 213        | 49.5%         |
| @twin.org/blob-storage-connector-file                 | 0.9.0-next.1 | twin-blob-storage          | 370          | 229        | 61.9%         |
| @twin.org/blob-storage-connector-gcp                  | 0.9.0-next.1 | twin-blob-storage          | 413          | 212        | 51.3%         |
| @twin.org/blob-storage-connector-ipfs                 | 0.9.0-next.1 | twin-blob-storage          | 435          | 208        | 47.8%         |
| @twin.org/blob-storage-connector-memory               | 0.9.0-next.1 | twin-blob-storage          | 216          | 197        | 91.2%         |
| @twin.org/blob-storage-models                         | 0.9.0-next.1 | twin-blob-storage          | 685          | 55         | 8%            |
| @twin.org/blob-storage-rest-client                    | 0.9.0-next.1 | twin-blob-storage          | 262          | 5          | 1.9%          |
| @twin.org/blob-storage-service                        | 0.9.0-next.1 | twin-blob-storage          | 1,350        | 631        | 46.7%         |
| @twin.org/telemetry-connector-entity-storage          | 0.9.0-next.1 | twin-telemetry             | 618          | 446        | 72.2%         |
| @twin.org/telemetry-connector-opentelemetry           | 0.9.0-next.1 | twin-telemetry             | 628          | 411        | 65.4%         |
| @twin.org/telemetry-models                            | 0.9.0-next.1 | twin-telemetry             | 1,118        | 138        | 12.3%         |
| @twin.org/telemetry-producers                         | 0.9.0-next.1 | twin-telemetry             | 302          | 204        | 67.5%         |
| @twin.org/telemetry-rest-client                       | 0.9.0-next.1 | twin-telemetry             | 254          | 9          | 3.5%          |
| @twin.org/telemetry-service                           | 0.9.0-next.1 | twin-telemetry             | 980          | 339        | 34.6%         |
| @twin.org/automation-actions                          | 0.9.0-next.1 | twin-automation            | 179          | 104        | 58.1%         |
| @twin.org/automation-models                           | 0.9.0-next.1 | twin-automation            | 270          | 5          | 1.9%          |
| @twin.org/automation-rest-client                      | 0.9.0-next.1 | twin-automation            | 175          | 81         | 46.3%         |
| @twin.org/automation-service                          | 0.9.0-next.1 | twin-automation            | 745          | 206        | 27.7%         |
| @twin.org/background-task-models                      | 0.9.0-next.1 | twin-background-task       | 304          | 5          | 1.6%          |
| @twin.org/background-task-scheduler                   | 0.9.0-next.1 | twin-background-task       | 407          | 411        | 101%          |
| @twin.org/background-task-service                     | 0.9.0-next.1 | twin-background-task       | 1,604        | 1,275      | 79.5%         |
| @twin.org/data-processing-converters                  | 0.9.0-next.1 | twin-data-processing       | 139          | 124        | 89.2%         |
| @twin.org/data-processing-extractors                  | 0.9.0-next.1 | twin-data-processing       | 123          | 173        | 140.7%        |
| @twin.org/data-processing-models                      | 0.9.0-next.1 | twin-data-processing       | 436          | 5          | 1.1%          |
| @twin.org/data-processing-rest-client                 | 0.9.0-next.1 | twin-data-processing       | 216          | 9          | 4.2%          |
| @twin.org/data-processing-service                     | 0.9.0-next.1 | twin-data-processing       | 822          | 125        | 15.2%         |
| @twin.org/messaging-connector-aws                     | 0.9.0-next.1 | twin-messaging             | 917          | 401        | 43.7%         |
| @twin.org/messaging-connector-entity-storage          | 0.9.0-next.1 | twin-messaging             | 657          | 341        | 51.9%         |
| @twin.org/messaging-models                            | 0.9.0-next.1 | twin-messaging             | 216          | 32         | 14.8%         |
| @twin.org/messaging-service                           | 0.9.0-next.1 | twin-messaging             | 456          | 531        | 116.4%        |
| @twin.org/trust-generators                            | 0.9.0-next.1 | twin-trust                 | 160          | 133        | 83.1%         |
| @twin.org/trust-models                                | 0.9.0-next.1 | twin-trust                 | 189          | 91         | 48.1%         |
| @twin.org/trust-service                               | 0.9.0-next.1 | twin-trust                 | 197          | 216        | 109.6%        |
| @twin.org/trust-verifiers                             | 0.9.0-next.1 | twin-trust                 | 260          | 273        | 105%          |
| @twin.org/rights-management-models                    | 0.9.0-next.1 | twin-rights-management     | 2,108        | 413        | 19.6%         |
| @twin.org/rights-management-pap-service               | 0.9.0-next.1 | twin-rights-management     | 840          | 989        | 117.7%        |
| @twin.org/rights-management-pdp-service               | 0.9.0-next.1 | twin-rights-management     | 195          | 140        | 71.8%         |
| @twin.org/rights-management-pep-service               | 0.9.0-next.1 | twin-rights-management     | 262          | 550        | 209.9%        |
| @twin.org/rights-management-pip-service               | 0.9.0-next.1 | twin-rights-management     | 136          | 244        | 179.4%        |
| @twin.org/rights-management-plugins                   | 0.9.0-next.1 | twin-rights-management     | 3,787        | 6,046      | 159.7%        |
| @twin.org/rights-management-pmp-service               | 0.9.0-next.1 | twin-rights-management     | 163          | 286        | 175.5%        |
| @twin.org/rights-management-pnp-service               | 0.9.0-next.1 | twin-rights-management     | 2,391        | 2,426      | 101.5%        |
| @twin.org/rights-management-pxp-service               | 0.9.0-next.1 | twin-rights-management     | 174          | 485        | 278.7%        |
| @twin.org/rights-management-rest-client               | 0.9.0-next.1 | twin-rights-management     | 864          | 52         | 6%            |
| @twin.org/rights-management-service                   | 0.9.0-next.1 | twin-rights-management     | 1,914        | 310        | 16.2%         |
| @twin.org/dlt-iota                                    | 0.9.0-next.1 | twin-dlt                   | 2,679        | 1,555      | 58%           |
| @twin.org/move-to-json                                | 0.9.0-next.1 | twin-dlt                   | 3,134        | 1,241      | 39.6%         |
| @twin.org/wallet-cli                                  | 0.9.0-next.1 | twin-wallet                | 444          | 61         | 13.7%         |
| @twin.org/wallet-connector-entity-storage             | 0.9.0-next.1 | twin-wallet                | 501          | 232        | 46.3%         |
| @twin.org/wallet-connector-iota                       | 0.9.0-next.1 | twin-wallet                | 483          | 532        | 110.1%        |
| @twin.org/wallet-models                               | 0.9.0-next.1 | twin-wallet                | 125          | 18         | 14.4%         |
| @twin.org/identity-cli                                | 0.9.0-next.1 | twin-identity              | 2,961        | 1,127      | 38.1%         |
| @twin.org/identity-connector-entity-storage           | 0.9.0-next.1 | twin-identity              | 2,241        | 1,619      | 72.2%         |
| @twin.org/identity-connector-iota                     | 0.9.0-next.1 | twin-identity              | 2,204        | 1,913      | 86.8%         |
| @twin.org/identity-connector-universal                | 0.9.0-next.1 | twin-identity              | 198          | 38         | 19.2%         |
| @twin.org/identity-models                             | 0.9.0-next.1 | twin-identity              | 2,003        | 312        | 15.6%         |
| @twin.org/identity-rest-client                        | 0.9.0-next.1 | twin-identity              | 855          | 9          | 1.1%          |
| @twin.org/identity-service                            | 0.9.0-next.1 | twin-identity              | 3,476        | 779        | 22.4%         |
| @twin.org/nft-cli                                     | 0.9.0-next.1 | twin-nft                   | 695          | 27         | 3.9%          |
| @twin.org/nft-connector-entity-storage                | 0.9.0-next.1 | twin-nft                   | 402          | 89         | 22.1%         |
| @twin.org/nft-connector-iota                          | 0.9.0-next.1 | twin-nft                   | 1,280        | 706        | 55.2%         |
| @twin.org/nft-models                                  | 0.9.0-next.1 | twin-nft                   | 377          | 5          | 1.3%          |
| @twin.org/nft-rest-client                             | 0.9.0-next.1 | twin-nft                   | 172          | 9          | 5.2%          |
| @twin.org/nft-service                                 | 0.9.0-next.1 | twin-nft                   | 633          | 15         | 2.4%          |
| @twin.org/notarization-connector-entity-storage       | 0.9.0-next.1 | twin-notarization          | 592          | 490        | 82.8%         |
| @twin.org/notarization-connector-iota                 | 0.9.0-next.1 | twin-notarization          | 742          | 343        | 46.2%         |
| @twin.org/notarization-models                         | 0.9.0-next.1 | twin-notarization          | 333          | 5          | 1.5%          |
| @twin.org/notarization-rest-client                    | 0.9.0-next.1 | twin-notarization          | 154          | 135        | 87.7%         |
| @twin.org/notarization-service                        | 0.9.0-next.1 | twin-notarization          | 661          | 546        | 82.6%         |
| @twin.org/hierarchies-connector-entity-storage        | 0.9.0-next.1 | twin-hierarchies           | 1,290        | 283        | 21.9%         |
| @twin.org/hierarchies-connector-iota                  | 0.9.0-next.1 | twin-hierarchies           | 1,439        | 523        | 36.3%         |
| @twin.org/hierarchies-models                          | 0.9.0-next.1 | twin-hierarchies           | 1,144        | 5          | 0.4%          |
| @twin.org/hierarchies-rest-client                     | 0.9.0-next.1 | twin-hierarchies           | 468          | 9          | 1.9%          |
| @twin.org/hierarchies-service                         | 0.9.0-next.1 | twin-hierarchies           | 798          | 15         | 1.9%          |
| @twin.org/verifiable-storage-connector-entity-storage | 0.9.0-next.1 | twin-verifiable-storage    | 539          | 138        | 25.6%         |
| @twin.org/verifiable-storage-connector-iota           | 0.9.0-next.1 | twin-verifiable-storage    | 1,344        | 659        | 49%           |
| @twin.org/verifiable-storage-models                   | 0.9.0-next.1 | twin-verifiable-storage    | 369          | 5          | 1.4%          |
| @twin.org/verifiable-storage-rest-client              | 0.9.0-next.1 | twin-verifiable-storage    | 170          | 9          | 5.3%          |
| @twin.org/verifiable-storage-service                  | 0.9.0-next.1 | twin-verifiable-storage    | 585          | 15         | 2.6%          |
| @twin.org/immutable-proof-models                      | 0.9.0-next.1 | twin-immutable-proof       | 465          | 41         | 8.8%          |
| @twin.org/immutable-proof-rest-client                 | 0.9.0-next.1 | twin-immutable-proof       | 168          | 9          | 5.4%          |
| @twin.org/immutable-proof-service                     | 0.9.0-next.1 | twin-immutable-proof       | 1,203        | 592        | 49.2%         |
| @twin.org/immutable-proof-task                        | 0.9.0-next.1 | twin-immutable-proof       | 256          | 90         | 35.2%         |
| @twin.org/attestation-cli                             | 0.9.0-next.1 | twin-attestation           | 607          | 29         | 4.8%          |
| @twin.org/attestation-connector-nft                   | 0.9.0-next.1 | twin-attestation           | 565          | 114        | 20.2%         |
| @twin.org/attestation-connector-open-attestation      | 0.9.0-next.1 | twin-attestation           | 124          | 9          | 7.3%          |
| @twin.org/attestation-models                          | 0.9.0-next.1 | twin-attestation           | 409          | 12         | 2.9%          |
| @twin.org/attestation-rest-client                     | 0.9.0-next.1 | twin-attestation           | 138          | 9          | 6.5%          |
| @twin.org/attestation-service                         | 0.9.0-next.1 | twin-attestation           | 659          | 17         | 2.6%          |
| @twin.org/auditable-item-graph-models                 | 0.9.0-next.1 | twin-auditable-item-graph  | 1,497        | 44         | 2.9%          |
| @twin.org/auditable-item-graph-rest-client            | 0.9.0-next.1 | twin-auditable-item-graph  | 395          | 39         | 9.9%          |
| @twin.org/auditable-item-graph-service                | 0.9.0-next.1 | twin-auditable-item-graph  | 3,790        | 4,290      | 113.2%        |
| @twin.org/auditable-item-stream-models                | 0.9.0-next.1 | twin-auditable-item-stream | 1,566        | 55         | 3.5%          |
| @twin.org/auditable-item-stream-rest-client           | 0.9.0-next.1 | twin-auditable-item-stream | 527          | 124        | 23.5%         |
| @twin.org/auditable-item-stream-service               | 0.9.0-next.1 | twin-auditable-item-stream | 3,652        | 3,049      | 83.5%         |
| @twin.org/document-management-models                  | 0.9.0-next.1 | twin-document-management   | 928          | 5          | 0.5%          |
| @twin.org/document-management-rest-client             | 0.9.0-next.1 | twin-document-management   | 351          | 9          | 2.6%          |
| @twin.org/document-management-service                 | 0.9.0-next.1 | twin-document-management   | 2,145        | 2,949      | 137.5%        |
| @twin.org/entity-storage-connector-synchronised       | 0.9.0-next.1 | twin-synchronised-storage  | 632          | 422        | 66.8%         |
| @twin.org/synchronised-storage-models                 | 0.9.0-next.1 | twin-synchronised-storage  | 542          | 5          | 0.9%          |
| @twin.org/synchronised-storage-rest-client            | 0.9.0-next.1 | twin-synchronised-storage  | 112          | 9          | 8%            |
| @twin.org/synchronised-storage-service                | 0.9.0-next.1 | twin-synchronised-storage  | 2,683        | 1,404      | 52.3%         |
| @twin.org/federated-catalogue-filters                 | 0.9.0-next.1 | twin-federated-catalogue   | 201          | 300        | 149.3%        |
| @twin.org/federated-catalogue-models                  | 0.9.0-next.1 | twin-federated-catalogue   | 420          | 5          | 1.2%          |
| @twin.org/federated-catalogue-rest-client             | 0.9.0-next.1 | twin-federated-catalogue   | 196          | 36         | 18.4%         |
| @twin.org/federated-catalogue-service                 | 0.9.0-next.1 | twin-federated-catalogue   | 1,355        | 3,187      | 235.2%        |
| @twin.org/dataspace-app-runner                        | 0.9.0-next.1 | twin-dataspace             | 273          | 206        | 75.5%         |
| @twin.org/dataspace-control-plane-rest-client         | 0.9.0-next.1 | twin-dataspace             | 544          | 70         | 12.9%         |
| @twin.org/dataspace-control-plane-service             | 0.9.0-next.1 | twin-dataspace             | 6,524        | 8,201      | 125.7%        |
| @twin.org/dataspace-data-plane-rest-client            | 0.9.0-next.1 | twin-dataspace             | 304          | 5          | 1.6%          |
| @twin.org/dataspace-data-plane-service                | 0.9.0-next.1 | twin-dataspace             | 3,219        | 4,607      | 143.1%        |
| @twin.org/dataspace-data-plane-socket-client          | 0.9.0-next.1 | twin-dataspace             | 399          | 7          | 1.8%          |
| @twin.org/dataspace-models                            | 0.9.0-next.1 | twin-dataspace             | 2,764        | 62         | 2.2%          |
| @twin.org/dataspace-test-app                          | 0.9.0-next.1 | twin-dataspace             | 387          | 5          | 1.3%          |
| @twin.org/engine                                      | 0.9.0-next.1 | twin-engine                | 108          | 1,449      | 1341.7%       |
| @twin.org/engine-core                                 | 0.9.0-next.1 | twin-engine                | 1,004        | 34         | 3.4%          |
| @twin.org/engine-models                               | 0.9.0-next.1 | twin-engine                | 516          | 11         | 2.1%          |
| @twin.org/engine-server                               | 0.9.0-next.1 | twin-engine                | 440          | 680        | 154.5%        |
| @twin.org/engine-server-types                         | 0.9.0-next.1 | twin-engine                | 1,095        | 5          | 0.5%          |
| @twin.org/engine-types                                | 0.9.0-next.1 | twin-engine                | 7,856        | 5          | 0.1%          |
| @twin.org/node                                        | 0.9.0-next.1 | twin-node                  | 22           | 5          | 22.7%         |
| @twin.org/node-core                                   | 0.9.0-next.1 | twin-node                  | 9,356        | 5,235      | 56%           |

---

## 3rd-Party Production Dependencies

| Package                     | Version      |
| --------------------------- | ------------ |
| @aws-sdk/client-dynamodb    | 3.1073.0     |
| @aws-sdk/client-s3          | 3.1073.0     |
| @aws-sdk/client-ses         | 3.1073.0     |
| @aws-sdk/client-sns         | 3.1073.0     |
| @aws-sdk/lib-dynamodb       | 3.1073.0     |
| @aws-sdk/util-dynamodb      | 3.996.5      |
| @azure/cosmos               | 4.9.3        |
| @azure/storage-blob         | 12.32.0      |
| @fastify/compress           | 9.0.0        |
| @fastify/cors               | 11.2.0       |
| @google-cloud/firestore     | 8.6.0        |
| @google-cloud/storage       | 7.21.0       |
| @govtechsg/open-attestation | 6.9.7        |
| @iota/bcs                   | 1.6.0        |
| @iota/hierarchies           | 0.1.12       |
| @iota/identity-wasm         | 1.9.6-beta.1 |
| @iota/iota-sdk              | 1.14.0       |
| @iota/notarization          | 0.1.13       |
| @noble/ciphers              | 2.2.0        |
| @noble/curves               | 2.2.0        |
| @noble/hashes               | 2.2.0        |
| @opentelemetry/api          | 1.9.1        |
| @opentelemetry/sdk-metrics  | 2.8.0        |
| @scure/base                 | 2.2.0        |
| @scure/bip32                | 2.2.0        |
| @scure/bip39                | 2.2.0        |
| @types/jsonld               | 1.5.15       |
| ajv                         | 8.20.0       |
| ajv-formats                 | 3.0.1        |
| cassandra-driver            | 4.9.0        |
| chalk                       | 5.6.2        |
| commander                   | 15.0.0       |
| dotenv                      | 17.4.2       |
| fast-glob                   | 3.3.3        |
| fastify                     | 5.8.5        |
| glob                        | 13.0.6       |
| intl-messageformat          | 11.2.8       |
| jose                        | 6.2.3        |
| json-p3                     | 2.2.2        |
| jsonld                      | 9.0.0        |
| micro-key-producer          | 0.9.0        |
| mongodb                     | 7.3.0        |
| mysql2                      | 3.22.5       |
| postgres                    | 3.4.9        |
| reflect-metadata            | 0.2.2        |
| rfc6902                     | 5.2.0        |
| schema-dts                  | 2.0.0        |
| socket.io                   | 4.8.3        |
| socket.io-client            | 4.8.3        |
| tslib                       | 2.8.1        |
| typescript                  | 6.0.3        |
| xml2js                      | 0.6.2        |

---

## Development Setup

| Package                            | Version |
| ---------------------------------- | ------- |
| @commitlint/cli                    | 21.0.2  |
| @commitlint/config-conventional    | 21.0.2  |
| @eslint/eslintrc                   | 3.3.5   |
| @eslint/js                         | 10.0.1  |
| @opentelemetry/exporter-prometheus | 0.219.0 |
| @stylistic/eslint-plugin           | 5.10.0  |
| @tony.ganchev/eslint-plugin-header | 3.4.4   |
| @types/node                        | 26.0.0  |
| @types/xml2js                      | 0.4.14  |
| @typescript-eslint/eslint-plugin   | 8.61.1  |
| @vitest/coverage-v8                | 4.1.9   |
| concurrently                       | 10.0.3  |
| copyfiles                          | 2.4.1   |
| cspell                             | 10.0.1  |
| dotenv                             | 17.4.2  |
| eslint                             | 10.5.0  |
| eslint-config-prettier             | 10.1.8  |
| eslint-plugin-import-x             | 4.16.2  |
| eslint-plugin-jsdoc                | 63.0.7  |
| eslint-plugin-prettier             | 5.5.6   |
| eslint-plugin-promise              | 7.3.0   |
| eslint-plugin-simple-import-sort   | 13.0.0  |
| eslint-plugin-unicorn              | 68.0.0  |
| eslint-plugin-unused-imports       | 4.4.1   |
| globals                            | 17.6.0  |
| husky                              | 9.1.7   |
| markdownlint-cli                   | 0.49.0  |
| nodemon                            | 3.1.14  |
| prettier                           | 3.8.4   |
| release-please                     | 17.9.0  |
| rimraf                             | 6.1.3   |
| socket.io-client                   | 4.8.3   |
| ts-patch                           | 4.0.1   |
| typedoc                            | 0.28.19 |
| typedoc-plugin-markdown            | 4.12.0  |
| typescript                         | 6.0.3   |
| vitest                             | 4.1.9   |
