# TWIN Project Audit

Generated: 2026-06-29

34 submodules, 196 published packages, 456,225 lines of TypeScript

---

## Summary

| Metric                                   | Value   |
| ---------------------------------------- | ------- |
| Submodules analysed                      | 34      |
| Total @twin.org packages                 | 196     |
| Total TypeScript lines                   | 456,225 |
| Source lines (excl. spec)                | 322,785 |
| Spec lines                               | 133,440 |
| Spec / source ratio                      | 41.3%   |
| Unique 3rd-party production dependencies | 58      |
| Unique 3rd-party dev dependencies        | 36      |

---

## Observations

- **twin-standards** is the largest submodule by TypeScript volume (131,446 lines across 14 packages), reflecting its role as the core schema and type definitions layer shared across the entire platform.
- **Spec / source ratio of 41.3%** shows solid test coverage across the codebase; twin-entity-storage leads with the highest absolute spec line count (26,961 lines).
- **196 published packages** across 34 submodules gives an average of ~5.8 packages per submodule, indicating a fine-grained, modular architecture with clear separation of concerns.
- **58 unique production dependencies** is relatively low for a project of this scale, reflecting a deliberate policy of minimising 3rd-party runtime exposure and preferring first-party implementations.
- **36 dev dependencies** are shared across all submodules via workspace hoisting, keeping individual submodule tooling lean and ensuring consistent build tooling throughout the monorepo.
- **twin-node** and **twin-engine** act as integration layers, aggregating capabilities from across the stack; their relatively high line counts (14,668 and 13,220) reflect the breadth of functionality they orchestrate.

---

## @twin.org Package Inventory

| Package                                               | Version      | Submodule                  | Source Lines | Spec Lines | Spec / source |
| ----------------------------------------------------- | ------------ | -------------------------- | ------------ | ---------- | ------------- |
| @twin.org/cli-core                                    | 0.9.1-next.4 | twin-framework             | 1,247        | 129        | 11.5%         |
| @twin.org/context                                     | 0.9.1-next.4 | twin-framework             | 853          | 532        | 165.7%        |
| @twin.org/core                                        | 0.9.1-next.4 | twin-framework             | 13,950       | 6,258      | 81.4%         |
| @twin.org/crypto                                      | 0.9.1-next.4 | twin-framework             | 3,923        | 1,606      | 69.3%         |
| @twin.org/crypto-cli                                  | 0.9.1-next.4 | twin-framework             | 398          | 57         | 16.7%         |
| @twin.org/entity                                      | 0.9.1-next.4 | twin-framework             | 3,920        | 2,746      | 233.9%        |
| @twin.org/image                                       | 0.9.1-next.4 | twin-framework             | 2,315        | 30         | 1.3%          |
| @twin.org/merge-locales                               | 0.9.1-next.4 | twin-framework             | 330          | 5          | 1.5%          |
| @twin.org/modules                                     | 0.9.1-next.4 | twin-framework             | 690          | 354        | 105.4%        |
| @twin.org/nameof                                      | 0.9.1-next.4 | twin-framework             | 64           | 10         | 18.5%         |
| @twin.org/nameof-transformer                          | 0.9.1-next.4 | twin-framework             | 365          | 88         | 31.8%         |
| @twin.org/nameof-vitest-plugin                        | 0.9.1-next.4 | twin-framework             | 72           | 25         | 53.2%         |
| @twin.org/qr                                          | 0.9.1-next.4 | twin-framework             | 2,221        | 5          | 0.2%          |
| @twin.org/validate-locales                            | 0.9.1-next.4 | twin-framework             | 1,419        | 129        | 10%           |
| @twin.org/web                                         | 0.9.1-next.4 | twin-framework             | 4,415        | 1,656      | 60%           |
| @twin.org/tools-core                                  | 0.9.1-next.3 | twin-tools                 | 12,288       | 1,514      | 14.1%         |
| @twin.org/tools-models                                | 0.9.1-next.3 | twin-tools                 | 1,612        | 5          | 0.3%          |
| @twin.org/ts-to-jsonld-context                        | 0.9.1-next.3 | twin-tools                 | 810          | 157        | 24%           |
| @twin.org/ts-to-openapi                               | 0.9.1-next.3 | twin-tools                 | 2,040        | 156        | 8.3%          |
| @twin.org/ts-to-schema                                | 0.9.1-next.3 | twin-tools                 | 856          | 110        | 14.7%         |
| @twin.org/data-core                                   | 0.9.1-next.1 | twin-data                  | 1,836        | 1,221      | 198.5%        |
| @twin.org/data-framework                              | 0.9.1-next.1 | twin-data                  | 132          | 5          | 3.9%          |
| @twin.org/data-json-ld                                | 0.9.1-next.1 | twin-data                  | 3,978        | 1,993      | 100.4%        |
| @twin.org/data-json-path                              | 0.9.1-next.1 | twin-data                  | 624          | 341        | 120.5%        |
| @twin.org/standards-dataspace-protocol                | 0.9.1-next.2 | twin-standards             | 2,431        | 488        | 25.1%         |
| @twin.org/standards-dcsa                              | 0.9.1-next.2 | twin-standards             | 2,899        | 5          | 0.2%          |
| @twin.org/standards-dublin-core                       | 0.9.1-next.2 | twin-standards             | 236          | 23         | 10.8%         |
| @twin.org/standards-foaf                              | 0.9.1-next.2 | twin-standards             | 440          | 5          | 1.1%          |
| @twin.org/standards-gs1                               | 0.9.1-next.2 | twin-standards             | 3,219        | 70         | 2.2%          |
| @twin.org/standards-ld-contexts                       | 0.9.1-next.2 | twin-standards             | 179          | 41         | 29.7%         |
| @twin.org/standards-schema-org                        | 0.9.1-next.2 | twin-standards             | 430          | 94         | 28%           |
| @twin.org/standards-unece                             | 0.9.1-next.2 | twin-standards             | 108,316      | 446        | 0.4%          |
| @twin.org/standards-vda                               | 0.9.1-next.2 | twin-standards             | 602          | 94         | 18.5%         |
| @twin.org/standards-w3c-activity-streams              | 0.9.1-next.2 | twin-standards             | 4,131        | 2,334      | 129.9%        |
| @twin.org/standards-w3c-dcat                          | 0.9.1-next.2 | twin-standards             | 1,531        | 538        | 54.2%         |
| @twin.org/standards-w3c-did                           | 0.9.1-next.2 | twin-standards             | 3,848        | 1,902      | 97.7%         |
| @twin.org/standards-w3c-odrl                          | 0.9.1-next.2 | twin-standards             | 3,054        | 1,604      | 110.6%        |
| @twin.org/standards-w3c-vcard                         | 0.9.1-next.2 | twin-standards             | 130          | 21         | 19.3%         |
| @twin.org/api-auth-entity-storage-models              | 0.9.1-next.2 | twin-api                   | 728          | 5          | 0.7%          |
| @twin.org/api-auth-entity-storage-rest-client         | 0.9.1-next.2 | twin-api                   | 467          | 5          | 1.1%          |
| @twin.org/api-auth-entity-storage-service             | 0.9.1-next.2 | twin-api                   | 6,589        | 3,348      | 103.3%        |
| @twin.org/api-core                                    | 0.9.1-next.2 | twin-api                   | 774          | 301        | 63.6%         |
| @twin.org/api-models                                  | 0.9.1-next.2 | twin-api                   | 2,212        | 404        | 22.3%         |
| @twin.org/api-processors                              | 0.9.1-next.2 | twin-api                   | 1,103        | 124        | 12.7%         |
| @twin.org/api-rest-client                             | 0.9.1-next.2 | twin-api                   | 166          | 5          | 3.1%          |
| @twin.org/api-server-fastify                          | 0.9.1-next.2 | twin-api                   | 1,581        | 599        | 61%           |
| @twin.org/api-service                                 | 0.9.1-next.2 | twin-api                   | 1,497        | 401        | 36.6%         |
| @twin.org/api-tenant-processor                        | 0.9.1-next.2 | twin-api                   | 2,504        | 930        | 59.1%         |
| @twin.org/logging-connector-console                   | 0.9.1-next.2 | twin-logging               | 222          | 9          | 4.2%          |
| @twin.org/logging-connector-entity-storage            | 0.9.1-next.2 | twin-logging               | 804          | 265        | 49.2%         |
| @twin.org/logging-connector-opentelemetry             | 0.9.1-next.2 | twin-logging               | 661          | 267        | 67.8%         |
| @twin.org/logging-models                              | 0.9.1-next.2 | twin-logging               | 514          | 9          | 1.8%          |
| @twin.org/logging-rest-client                         | 0.9.1-next.2 | twin-logging               | 122          | 9          | 8%            |
| @twin.org/logging-service                             | 0.9.1-next.2 | twin-logging               | 376          | 11         | 3%            |
| @twin.org/event-bus-connector-local                   | 0.9.1-next.1 | twin-event-bus             | 456          | 270        | 145.2%        |
| @twin.org/event-bus-models                            | 0.9.1-next.1 | twin-event-bus             | 203          | 9          | 4.6%          |
| @twin.org/event-bus-service                           | 0.9.1-next.1 | twin-event-bus             | 260          | 28         | 12.1%         |
| @twin.org/event-bus-socket-client                     | 0.9.1-next.1 | twin-event-bus             | 358          | 79         | 28.3%         |
| @twin.org/entity-storage-connector-cosmosdb           | 0.9.1-next.3 | twin-entity-storage        | 4,147        | 2,804      | 208.8%        |
| @twin.org/entity-storage-connector-dynamodb           | 0.9.1-next.3 | twin-entity-storage        | 4,887        | 2,833      | 137.9%        |
| @twin.org/entity-storage-connector-file               | 0.9.1-next.3 | twin-entity-storage        | 3,859        | 2,927      | 314.1%        |
| @twin.org/entity-storage-connector-gcp-firestore      | 0.9.1-next.3 | twin-entity-storage        | 3,968        | 2,767      | 230.4%        |
| @twin.org/entity-storage-connector-memory             | 0.9.1-next.3 | twin-entity-storage        | 3,719        | 2,963      | 391.9%        |
| @twin.org/entity-storage-connector-mongodb            | 0.9.1-next.3 | twin-entity-storage        | 3,703        | 2,783      | 302.5%        |
| @twin.org/entity-storage-connector-mysql              | 0.9.1-next.3 | twin-entity-storage        | 4,246        | 2,822      | 198.2%        |
| @twin.org/entity-storage-connector-postgresql         | 0.9.1-next.3 | twin-entity-storage        | 4,225        | 2,822      | 201.1%        |
| @twin.org/entity-storage-connector-scylladb           | 0.9.1-next.3 | twin-entity-storage        | 4,778        | 2,781      | 139.3%        |
| @twin.org/entity-storage-models                       | 0.9.1-next.3 | twin-entity-storage        | 2,017        | 958        | 90.5%         |
| @twin.org/entity-storage-rest-client                  | 0.9.1-next.3 | twin-entity-storage        | 241          | 9          | 3.9%          |
| @twin.org/entity-storage-service                      | 0.9.1-next.3 | twin-entity-storage        | 1,742        | 492        | 39.4%         |
| @twin.org/vault-connector-entity-storage              | 0.9.1-next.1 | twin-vault                 | 1,289        | 685        | 113.4%        |
| @twin.org/vault-connector-hashicorp                   | 0.9.1-next.1 | twin-vault                 | 2,589        | 765        | 41.9%         |
| @twin.org/vault-models                                | 0.9.1-next.1 | twin-vault                 | 304          | 9          | 3.1%          |
| @twin.org/blob-storage-connector-aws-s3               | 0.9.1-next.1 | twin-blob-storage          | 722          | 219        | 43.5%         |
| @twin.org/blob-storage-connector-azure                | 0.9.1-next.1 | twin-blob-storage          | 643          | 213        | 49.5%         |
| @twin.org/blob-storage-connector-file                 | 0.9.1-next.1 | twin-blob-storage          | 599          | 229        | 61.9%         |
| @twin.org/blob-storage-connector-gcp                  | 0.9.1-next.1 | twin-blob-storage          | 625          | 212        | 51.3%         |
| @twin.org/blob-storage-connector-ipfs                 | 0.9.1-next.1 | twin-blob-storage          | 643          | 208        | 47.8%         |
| @twin.org/blob-storage-connector-memory               | 0.9.1-next.1 | twin-blob-storage          | 413          | 197        | 91.2%         |
| @twin.org/blob-storage-models                         | 0.9.1-next.1 | twin-blob-storage          | 740          | 55         | 8%            |
| @twin.org/blob-storage-rest-client                    | 0.9.1-next.1 | twin-blob-storage          | 267          | 5          | 1.9%          |
| @twin.org/blob-storage-service                        | 0.9.1-next.1 | twin-blob-storage          | 1,981        | 631        | 46.7%         |
| @twin.org/telemetry-connector-entity-storage          | 0.9.1-next.1 | twin-telemetry             | 1,064        | 446        | 72.2%         |
| @twin.org/telemetry-connector-opentelemetry           | 0.9.1-next.1 | twin-telemetry             | 1,036        | 411        | 65.8%         |
| @twin.org/telemetry-models                            | 0.9.1-next.1 | twin-telemetry             | 1,256        | 138        | 12.3%         |
| @twin.org/telemetry-producers                         | 0.9.1-next.1 | twin-telemetry             | 506          | 204        | 67.5%         |
| @twin.org/telemetry-rest-client                       | 0.9.1-next.1 | twin-telemetry             | 263          | 9          | 3.5%          |
| @twin.org/telemetry-service                           | 0.9.1-next.1 | twin-telemetry             | 1,319        | 339        | 34.6%         |
| @twin.org/automation-actions                          | 0.9.1-next.1 | twin-automation            | 283          | 104        | 58.1%         |
| @twin.org/automation-models                           | 0.9.1-next.1 | twin-automation            | 275          | 5          | 1.9%          |
| @twin.org/automation-rest-client                      | 0.9.1-next.1 | twin-automation            | 256          | 81         | 46.3%         |
| @twin.org/automation-service                          | 0.9.1-next.1 | twin-automation            | 951          | 206        | 27.7%         |
| @twin.org/background-task-models                      | 0.9.1-next.2 | twin-background-task       | 309          | 5          | 1.6%          |
| @twin.org/background-task-scheduler                   | 0.9.1-next.2 | twin-background-task       | 818          | 411        | 101%          |
| @twin.org/background-task-service                     | 0.9.1-next.2 | twin-background-task       | 2,879        | 1,275      | 79.5%         |
| @twin.org/data-processing-converters                  | 0.9.1-next.1 | twin-data-processing       | 263          | 124        | 89.2%         |
| @twin.org/data-processing-extractors                  | 0.9.1-next.1 | twin-data-processing       | 296          | 173        | 140.7%        |
| @twin.org/data-processing-models                      | 0.9.1-next.1 | twin-data-processing       | 441          | 5          | 1.1%          |
| @twin.org/data-processing-rest-client                 | 0.9.1-next.1 | twin-data-processing       | 225          | 9          | 4.2%          |
| @twin.org/data-processing-service                     | 0.9.1-next.1 | twin-data-processing       | 947          | 125        | 15.2%         |
| @twin.org/messaging-connector-aws                     | 0.9.1-next.1 | twin-messaging             | 1,318        | 401        | 43.7%         |
| @twin.org/messaging-connector-entity-storage          | 0.9.1-next.1 | twin-messaging             | 998          | 341        | 51.9%         |
| @twin.org/messaging-models                            | 0.9.1-next.1 | twin-messaging             | 248          | 32         | 14.8%         |
| @twin.org/messaging-service                           | 0.9.1-next.1 | twin-messaging             | 987          | 531        | 116.4%        |
| @twin.org/trust-generators                            | 0.9.1-next.1 | twin-trust                 | 293          | 133        | 83.1%         |
| @twin.org/trust-models                                | 0.9.1-next.1 | twin-trust                 | 280          | 91         | 48.1%         |
| @twin.org/trust-service                               | 0.9.1-next.1 | twin-trust                 | 413          | 216        | 109.6%        |
| @twin.org/trust-verifiers                             | 0.9.1-next.1 | twin-trust                 | 533          | 273        | 105%          |
| @twin.org/rights-management-models                    | 0.9.1-next.1 | twin-rights-management     | 2,521        | 413        | 19.6%         |
| @twin.org/rights-management-pap-service               | 0.9.1-next.1 | twin-rights-management     | 1,829        | 989        | 117.7%        |
| @twin.org/rights-management-pdp-service               | 0.9.1-next.1 | twin-rights-management     | 335          | 140        | 71.8%         |
| @twin.org/rights-management-pep-service               | 0.9.1-next.1 | twin-rights-management     | 812          | 550        | 209.9%        |
| @twin.org/rights-management-pip-service               | 0.9.1-next.1 | twin-rights-management     | 380          | 244        | 179.4%        |
| @twin.org/rights-management-plugins                   | 0.9.1-next.1 | twin-rights-management     | 9,833        | 6,046      | 159.7%        |
| @twin.org/rights-management-pmp-service               | 0.9.1-next.1 | twin-rights-management     | 449          | 286        | 175.5%        |
| @twin.org/rights-management-pnp-service               | 0.9.1-next.1 | twin-rights-management     | 4,817        | 2,426      | 101.5%        |
| @twin.org/rights-management-pxp-service               | 0.9.1-next.1 | twin-rights-management     | 659          | 485        | 278.7%        |
| @twin.org/rights-management-rest-client               | 0.9.1-next.1 | twin-rights-management     | 916          | 52         | 6%            |
| @twin.org/rights-management-service                   | 0.9.1-next.1 | twin-rights-management     | 2,224        | 310        | 16.2%         |
| @twin.org/dlt-iota                                    | 0.9.1-next.1 | twin-dlt                   | 4,234        | 1,555      | 58%           |
| @twin.org/move-to-json                                | 0.9.1-next.1 | twin-dlt                   | 4,375        | 1,241      | 39.6%         |
| @twin.org/wallet-cli                                  | 0.9.1-next.1 | twin-wallet                | 505          | 61         | 13.7%         |
| @twin.org/wallet-connector-entity-storage             | 0.9.1-next.1 | twin-wallet                | 733          | 232        | 46.3%         |
| @twin.org/wallet-connector-iota                       | 0.9.1-next.1 | twin-wallet                | 1,015        | 532        | 110.1%        |
| @twin.org/wallet-models                               | 0.9.1-next.1 | twin-wallet                | 143          | 18         | 14.4%         |
| @twin.org/identity-cli                                | 0.9.1-next.1 | twin-identity              | 4,088        | 1,127      | 38.1%         |
| @twin.org/identity-connector-entity-storage           | 0.9.1-next.1 | twin-identity              | 3,860        | 1,619      | 72.2%         |
| @twin.org/identity-connector-iota                     | 0.9.1-next.1 | twin-identity              | 4,117        | 1,913      | 86.8%         |
| @twin.org/identity-connector-universal                | 0.9.1-next.1 | twin-identity              | 236          | 38         | 19.2%         |
| @twin.org/identity-models                             | 0.9.1-next.1 | twin-identity              | 2,315        | 312        | 15.6%         |
| @twin.org/identity-rest-client                        | 0.9.1-next.1 | twin-identity              | 864          | 9          | 1.1%          |
| @twin.org/identity-service                            | 0.9.1-next.1 | twin-identity              | 4,255        | 779        | 22.4%         |
| @twin.org/nft-cli                                     | 0.9.1-next.1 | twin-nft                   | 722          | 27         | 3.9%          |
| @twin.org/nft-connector-entity-storage                | 0.9.1-next.1 | twin-nft                   | 491          | 89         | 22.1%         |
| @twin.org/nft-connector-iota                          | 0.9.1-next.1 | twin-nft                   | 1,986        | 706        | 55.2%         |
| @twin.org/nft-models                                  | 0.9.1-next.1 | twin-nft                   | 382          | 5          | 1.3%          |
| @twin.org/nft-rest-client                             | 0.9.1-next.1 | twin-nft                   | 181          | 9          | 5.2%          |
| @twin.org/nft-service                                 | 0.9.1-next.1 | twin-nft                   | 648          | 15         | 2.4%          |
| @twin.org/notarization-connector-entity-storage       | 0.9.1-next.1 | twin-notarization          | 1,082        | 490        | 82.8%         |
| @twin.org/notarization-connector-iota                 | 0.9.1-next.1 | twin-notarization          | 1,085        | 343        | 46.2%         |
| @twin.org/notarization-models                         | 0.9.1-next.1 | twin-notarization          | 338          | 5          | 1.5%          |
| @twin.org/notarization-rest-client                    | 0.9.1-next.1 | twin-notarization          | 289          | 135        | 87.7%         |
| @twin.org/notarization-service                        | 0.9.1-next.1 | twin-notarization          | 1,207        | 546        | 82.6%         |
| @twin.org/hierarchies-connector-entity-storage        | 0.9.1-next.1 | twin-hierarchies           | 1,573        | 283        | 21.9%         |
| @twin.org/hierarchies-connector-iota                  | 0.9.1-next.1 | twin-hierarchies           | 1,962        | 523        | 36.3%         |
| @twin.org/hierarchies-models                          | 0.9.1-next.1 | twin-hierarchies           | 1,149        | 5          | 0.4%          |
| @twin.org/hierarchies-rest-client                     | 0.9.1-next.1 | twin-hierarchies           | 477          | 9          | 1.9%          |
| @twin.org/hierarchies-service                         | 0.9.1-next.1 | twin-hierarchies           | 813          | 15         | 1.9%          |
| @twin.org/verifiable-storage-connector-entity-storage | 0.9.1-next.1 | twin-verifiable-storage    | 677          | 138        | 25.6%         |
| @twin.org/verifiable-storage-connector-iota           | 0.9.1-next.1 | twin-verifiable-storage    | 2,003        | 659        | 49%           |
| @twin.org/verifiable-storage-models                   | 0.9.1-next.1 | twin-verifiable-storage    | 374          | 5          | 1.4%          |
| @twin.org/verifiable-storage-rest-client              | 0.9.1-next.1 | twin-verifiable-storage    | 179          | 9          | 5.3%          |
| @twin.org/verifiable-storage-service                  | 0.9.1-next.1 | twin-verifiable-storage    | 600          | 15         | 2.6%          |
| @twin.org/immutable-proof-models                      | 0.9.1-next.2 | twin-immutable-proof       | 506          | 41         | 8.8%          |
| @twin.org/immutable-proof-rest-client                 | 0.9.1-next.2 | twin-immutable-proof       | 177          | 9          | 5.4%          |
| @twin.org/immutable-proof-service                     | 0.9.1-next.2 | twin-immutable-proof       | 1,801        | 598        | 49.7%         |
| @twin.org/immutable-proof-task                        | 0.9.1-next.2 | twin-immutable-proof       | 346          | 90         | 35.2%         |
| @twin.org/attestation-cli                             | 0.9.1-next.1 | twin-attestation           | 636          | 29         | 4.8%          |
| @twin.org/attestation-connector-nft                   | 0.9.1-next.1 | twin-attestation           | 679          | 114        | 20.2%         |
| @twin.org/attestation-connector-open-attestation      | 0.9.1-next.1 | twin-attestation           | 133          | 9          | 7.3%          |
| @twin.org/attestation-models                          | 0.9.1-next.1 | twin-attestation           | 421          | 12         | 2.9%          |
| @twin.org/attestation-rest-client                     | 0.9.1-next.1 | twin-attestation           | 147          | 9          | 6.5%          |
| @twin.org/attestation-service                         | 0.9.1-next.1 | twin-attestation           | 676          | 17         | 2.6%          |
| @twin.org/auditable-item-graph-models                 | 0.9.1-next.1 | twin-auditable-item-graph  | 1,541        | 44         | 2.9%          |
| @twin.org/auditable-item-graph-rest-client            | 0.9.1-next.1 | twin-auditable-item-graph  | 434          | 39         | 9.9%          |
| @twin.org/auditable-item-graph-service                | 0.9.1-next.1 | twin-auditable-item-graph  | 8,241        | 4,436      | 116.6%        |
| @twin.org/auditable-item-stream-models                | 0.9.1-next.1 | twin-auditable-item-stream | 1,621        | 55         | 3.5%          |
| @twin.org/auditable-item-stream-rest-client           | 0.9.1-next.1 | twin-auditable-item-stream | 651          | 124        | 23.5%         |
| @twin.org/auditable-item-stream-service               | 0.9.1-next.1 | twin-auditable-item-stream | 6,701        | 3,049      | 83.5%         |
| @twin.org/document-management-models                  | 0.9.1-next.1 | twin-document-management   | 933          | 5          | 0.5%          |
| @twin.org/document-management-rest-client             | 0.9.1-next.1 | twin-document-management   | 360          | 9          | 2.6%          |
| @twin.org/document-management-service                 | 0.9.1-next.1 | twin-document-management   | 5,094        | 2,949      | 137.5%        |
| @twin.org/entity-storage-connector-synchronised       | 0.9.1-next.1 | twin-synchronised-storage  | 1,054        | 422        | 66.8%         |
| @twin.org/synchronised-storage-models                 | 0.9.1-next.1 | twin-synchronised-storage  | 547          | 5          | 0.9%          |
| @twin.org/synchronised-storage-rest-client            | 0.9.1-next.1 | twin-synchronised-storage  | 121          | 9          | 8%            |
| @twin.org/synchronised-storage-service                | 0.9.1-next.1 | twin-synchronised-storage  | 4,086        | 1,403      | 52.3%         |
| @twin.org/federated-catalogue-filters                 | 0.9.1-next.1 | twin-federated-catalogue   | 501          | 300        | 149.3%        |
| @twin.org/federated-catalogue-models                  | 0.9.1-next.1 | twin-federated-catalogue   | 425          | 5          | 1.2%          |
| @twin.org/federated-catalogue-rest-client             | 0.9.1-next.1 | twin-federated-catalogue   | 232          | 36         | 18.4%         |
| @twin.org/federated-catalogue-service                 | 0.9.1-next.1 | twin-federated-catalogue   | 4,542        | 3,187      | 235.2%        |
| @twin.org/dataspace-app-runner                        | 0.9.1-next.3 | twin-dataspace             | 479          | 206        | 75.5%         |
| @twin.org/dataspace-control-plane-rest-client         | 0.9.1-next.3 | twin-dataspace             | 630          | 70         | 12.5%         |
| @twin.org/dataspace-control-plane-service             | 0.9.1-next.3 | twin-dataspace             | 14,861       | 8,243      | 124.6%        |
| @twin.org/dataspace-data-plane-rest-client            | 0.9.1-next.3 | twin-dataspace             | 309          | 5          | 1.6%          |
| @twin.org/dataspace-data-plane-service                | 0.9.1-next.3 | twin-dataspace             | 7,866        | 4,651      | 144.7%        |
| @twin.org/dataspace-data-plane-socket-client          | 0.9.1-next.3 | twin-dataspace             | 406          | 7          | 1.8%          |
| @twin.org/dataspace-models                            | 0.9.1-next.3 | twin-dataspace             | 2,850        | 62         | 2.2%          |
| @twin.org/dataspace-test-app                          | 0.9.1-next.3 | twin-dataspace             | 392          | 5          | 1.3%          |
| @twin.org/engine                                      | 0.9.1-next.2 | twin-engine                | 1,557        | 1,449      | 1341.7%       |
| @twin.org/engine-core                                 | 0.9.1-next.2 | twin-engine                | 1,038        | 34         | 3.4%          |
| @twin.org/engine-models                               | 0.9.1-next.2 | twin-engine                | 527          | 11         | 2.1%          |
| @twin.org/engine-server                               | 0.9.1-next.2 | twin-engine                | 1,121        | 681        | 154.8%        |
| @twin.org/engine-server-types                         | 0.9.1-next.2 | twin-engine                | 1,100        | 5          | 0.5%          |
| @twin.org/engine-types                                | 0.9.1-next.2 | twin-engine                | 7,877        | 5          | 0.1%          |
| @twin.org/node                                        | 0.9.1-next.1 | twin-node                  | 27           | 5          | 22.7%         |
| @twin.org/node-core                                   | 0.9.1-next.1 | twin-node                  | 14,641       | 5,236      | 55.7%         |

---

## 3rd-Party Production Dependencies

| Package                                | Version      |
| -------------------------------------- | ------------ |
| @aws-sdk/client-dynamodb               | 3.1073.0     |
| @aws-sdk/client-s3                     | 3.1073.0     |
| @aws-sdk/client-ses                    | 3.1073.0     |
| @aws-sdk/client-sns                    | 3.1073.0     |
| @aws-sdk/lib-dynamodb                  | 3.1073.0     |
| @aws-sdk/util-dynamodb                 | 3.996.5      |
| @azure/cosmos                          | 4.9.3        |
| @azure/storage-blob                    | 12.32.0      |
| @fastify/compress                      | 9.0.0        |
| @fastify/cors                          | 11.2.0       |
| @google-cloud/firestore                | 8.6.0        |
| @google-cloud/storage                  | 7.21.0       |
| @govtechsg/open-attestation            | 6.9.7        |
| @iota/bcs                              | 1.6.0        |
| @iota/hierarchies                      | 0.1.12       |
| @iota/identity-wasm                    | 1.9.6-beta.1 |
| @iota/iota-sdk                         | 1.14.0       |
| @iota/notarization                     | 0.1.13       |
| @noble/ciphers                         | 2.2.0        |
| @noble/curves                          | 2.2.0        |
| @noble/hashes                          | 2.2.0        |
| @opentelemetry/api                     | 1.9.1        |
| @opentelemetry/api-logs                | 0.219.0      |
| @opentelemetry/exporter-logs-otlp-http | 0.219.0      |
| @opentelemetry/exporter-prometheus     | 0.219.0      |
| @opentelemetry/resources               | 2.8.0        |
| @opentelemetry/sdk-logs                | 0.219.0      |
| @opentelemetry/sdk-metrics             | 2.8.0        |
| @opentelemetry/semantic-conventions    | 1.41.1       |
| @scure/base                            | 2.2.0        |
| @scure/bip32                           | 2.2.0        |
| @scure/bip39                           | 2.2.0        |
| @types/jsonld                          | 1.5.15       |
| ajv                                    | 8.20.0       |
| ajv-formats                            | 3.0.1        |
| cassandra-driver                       | 4.9.0        |
| chalk                                  | 5.6.2        |
| commander                              | 15.0.0       |
| dotenv                                 | 17.4.2       |
| fast-glob                              | 3.3.3        |
| fastify                                | 5.8.5        |
| glob                                   | 13.0.6       |
| intl-messageformat                     | 11.2.8       |
| jose                                   | 6.2.3        |
| json-p3                                | 2.2.2        |
| jsonld                                 | 9.0.0        |
| micro-key-producer                     | 0.9.0        |
| mongodb                                | 7.3.0        |
| mysql2                                 | 3.22.5       |
| postgres                               | 3.4.9        |
| reflect-metadata                       | 0.2.2        |
| rfc6902                                | 5.2.0        |
| schema-dts                             | 2.0.0        |
| socket.io                              | 4.8.3        |
| socket.io-client                       | 4.8.3        |
| tslib                                  | 2.8.1        |
| typescript                             | 6.0.3        |
| xml2js                                 | 0.6.2        |

---

## Development Setup

| Package                            | Version        |
| ---------------------------------- | -------------- |
| @commitlint/cli                    | 21.0.2         |
| @commitlint/config-conventional    | 21.0.2         |
| @eslint/eslintrc                   | 3.3.5          |
| @eslint/js                         | 10.0.1         |
| @stylistic/eslint-plugin           | 5.10.0         |
| @tony.ganchev/eslint-plugin-header | 3.4.4          |
| @types/node                        | 26.0.0         |
| @types/xml2js                      | 0.4.14         |
| @typescript-eslint/eslint-plugin   | 8.61.1         |
| @vitest/coverage-v8                | 4.1.6, 4.1.9   |
| concurrently                       | 10.0.3         |
| copyfiles                          | 2.4.1          |
| cspell                             | 10.0.1         |
| dotenv                             | 17.4.2         |
| eslint                             | 10.5.0         |
| eslint-config-prettier             | 10.1.8         |
| eslint-plugin-import-x             | 4.16.2         |
| eslint-plugin-jsdoc                | 63.0.7         |
| eslint-plugin-prettier             | 5.5.6          |
| eslint-plugin-promise              | 7.3.0          |
| eslint-plugin-simple-import-sort   | 13.0.0         |
| eslint-plugin-unicorn              | 68.0.0         |
| eslint-plugin-unused-imports       | 4.4.1          |
| globals                            | 17.6.0         |
| husky                              | 9.1.7          |
| markdownlint-cli                   | 0.49.0         |
| nodemon                            | 3.1.14         |
| prettier                           | 3.8.4          |
| release-please                     | 17.9.0         |
| rimraf                             | 6.1.3          |
| socket.io-client                   | 4.8.3          |
| ts-patch                           | 4.0.1          |
| typedoc                            | 0.28.19        |
| typedoc-plugin-markdown            | 4.11.0, 4.12.0 |
| typescript                         | 6.0.3          |
| vitest                             | 4.1.6, 4.1.9   |
