---
repo: openclaw/openclaw
cluster_id: pr-inventory-maintainer_owned-20260615T223445-013
mode: plan
allowed_actions:
  - comment
  - label
  - close
blocked_actions:
  - force_push
  - bypass_checks
  - merge
  - fix
  - raise_pr
require_human_for:
  - security_sensitive
  - maintainer_signal
  - active_author_followup
  - technical_correctness_judgment
canonical: []
candidates:
  - "#89880"
  - "#89886"
  - "#89888"
  - "#89898"
  - "#89907"
  - "#89911"
  - "#89917"
  - "#89929"
  - "#89931"
  - "#89933"
  - "#89968"
  - "#89969"
  - "#89970"
  - "#89973"
  - "#89977"
  - "#89979"
  - "#89980"
  - "#89988"
  - "#89990"
  - "#89991"
  - "#89993"
  - "#90002"
  - "#88931"
  - "#89295"
  - "#93209"
cluster_refs:
  - "#89880"
  - "#89886"
  - "#89888"
  - "#89898"
  - "#89907"
  - "#89911"
  - "#89917"
  - "#89929"
  - "#89931"
  - "#89933"
  - "#89968"
  - "#89969"
  - "#89970"
  - "#89973"
  - "#89977"
  - "#89979"
  - "#89980"
  - "#89988"
  - "#89990"
  - "#89991"
  - "#89993"
  - "#90002"
  - "#88931"
  - "#89295"
  - "#93209"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "This is a PR inventory classification shard, not a dedupe cluster. Classify each PR independently and do not invent a shared canonical."
notes: "Generated from local gitcrawl open PR inventory on 2026-06-15T22:34:45.788Z; bucket=maintainer_owned; no GitHub mutation is possible in plan mode."
---

# PR Inventory maintainer_owned 13

This is a high-volume classification shard over open pull requests. It is not a dedupe cluster.

## Goal

Hydrate live GitHub state for each listed PR and emit one conservative action per PR. Prefer `keep_related`, `keep_independent`, `needs_human`, or `route_security`. Emit close-style planned actions only when fresh live evidence makes the PR boringly superseded, duplicate, abandoned, or low-signal under existing policies. For `target_updated_at`, copy only the hydrated value from the Cluster preflight artifact; do not use gitcrawl snapshot timestamps from this job body.

## Inventory

### #89880 fix(plugins): guard model catalog registration metadata

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: maintainer, size: S, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T11:45:39Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - snapshot model catalog provider registration descriptors once before registry insertion/merging - turn unreadable model catalog provider registration metadata into a plugin diagnostic instead of a registry crash - snapshot synthesized text catalog

### #89886 fix(context-engine): forward abortSignal through delegation bridge to runtime compaction

- bucket: maintainer_owned
- author: openperf
- author association: MEMBER
- draft: no
- assignees: none
- labels: size: XS, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T11:45:52Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ### Summary - **Problem**: Issue #89868 reports that pressing stop during auto-compaction cancels the wait but allows the compaction LLM call to finish and write its result to the session. The next message sees a compacted session the user did not consent to (

### #89888 fix(plugins): guard active runtime registry metadata

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: maintainer, size: S, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T11:45:56Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - guard active runtime registry compatibility checks against unreadable plugin record metadata - guard unreadable runtime registration `pluginId` metadata without treating it as an empty registry - keep fail-closed behavior for explicit empty scopes

### #89898 fix(plugins): guard plugin service registration metadata

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: maintainer, size: S, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look, merge-risk: 🚨 other
- gitcrawl snapshot updated: 2026-06-15T11:46:11Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Guard plugin service registration reads before startup so malformed service rows cannot abort later healthy services. - Preserve existing lifecycle behavior by calling `start`/`stop` with the original service receiver and reading `stop` after star

### #89907 fix(plugins): guard config contract metadata

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: maintainer, size: S, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T11:46:34Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Guard config contract registry and bundled fallback reads so one malformed plugin metadata row cannot abort config-contract resolution. - Preserve healthy plugin config contracts and bundled fallback contracts after unreadable registry rows. - Add

### #89911 refactor: migrate bundled transcript target lookups

- bucket: maintainer_owned
- author: jalehman
- author association: MEMBER
- draft: no
- assignees: none
- labels: docs, channel: discord, channel: telegram, gateway, scripts, agents, maintainer, size: XL, plugin: file-transfer, mantis: telegram-visible-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T11:46:41Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## What Migrates bundled Discord and Telegram transcript target lookup paths onto the scoped transcript runtime APIs, while preserving current file-backed behavior and Telegram command `sessionFile` compatibility where that remains part of the command context.

### #89917 fix(agents): guard provider auth alias metadata

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: agents, maintainer, size: S, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T11:46:45Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Guard provider auth alias resolution against unreadable plugin manifest metadata rows. - Keep healthy auth aliases resolvable when a neighboring plugin row throws during alias metadata reads. - Narrow the workspace trust helper type to the `id` fi

### #89929 fix(plugins): guard setup backend metadata

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: maintainer, size: S, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T11:47:42Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - isolate unreadable setup CLI backend manifest metadata to the affected plugin row - preserve enabled-plugin and bundled-only filtering for setup backend descriptor/runtime fallback lookup - add regression coverage for both descriptor lookup and ru

### #89931 fix(plugins): guard manifest contract metadata

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: maintainer, size: S, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T11:47:47Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - isolate unreadable manifest contract metadata to the affected plugin row during runtime contract plugin resolution - preserve existing contract matching, bundled compatibility ids, enabled-plugin filtering, and stable sorting - add regression cove

### #89933 fix(plugins): guard synthetic auth metadata

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: maintainer, size: S, P2, rating: 🦐 gold shrimp, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T11:48:01Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Skip unreadable plugin metadata rows when resolving synthetic auth provider refs. - Apply the same guard to `contracts.externalAuthProviders` resolution for persisted manifest metadata and the active runtime registry. - Add regression coverage for

### #89968 fix(config): isolate channel metadata rows

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: maintainer, size: M, P2, rating: 🦪 silver shellfish, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T11:49:28Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - isolate unreadable plugin manifest rows while collecting plugin/channel schema metadata - preserve existing origin-rank dedupe and channel config merge behavior for healthy rows - add focused regressions for poisoned plugin-level and channel-level

### #89969 fix(plugins): isolate setup manifest rows

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: maintainer, size: M, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T11:49:33Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - isolate unreadable setup manifest rows while collecting setup providers, CLI backends, migrations, and auto-enable probes - keep setup owner lookup from crashing when an unrelated plugin row has a bad setup descriptor - add focused regressions for

### #89970 fix(plugins): normalize setup probe reasons

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: maintainer, size: S, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T11:49:40Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - normalize plugin setup auto-enable probe output before using string methods - ignore malformed non-string probe reasons while preserving trimming and de-duplication for valid strings - add a focused regression for mixed malformed probe output ## V

### #89973 fix(plugins): isolate doctor contract rows

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: maintainer, size: S, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T11:49:48Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - isolate per-row failures while resolving plugin doctor contracts - preserve scoped doctor contract matching by plugin id, channel id, and provider id - add regressions for unreadable manifest rows in unscoped and scoped doctor lookup ## Verificati

### #89977 fix(plugins): isolate bundle config rows

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: maintainer, size: S, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T11:50:18Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - isolate unreadable manifest registry rows while loading enabled bundle config - preserve existing bundle activation, config loading, merge, and diagnostic behavior for readable rows - add a provided-registry MCP regression with poisoned bundle met

### #89979 fix(config): isolate provider auto-enable rows

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: maintainer, size: S, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T11:50:23Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - isolate unreadable provider auto-enable manifest rows - preserve first-owner wins behavior for readable provider auto-enable metadata - add a provider auth auto-enable regression with a poisoned manifest row before a healthy provider plugin row ##

### #89980 fix(trajectory): isolate manifest metadata rows

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: maintainer, size: S, P2, rating: 🧂 unranked krab, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T11:50:27Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - isolate unreadable manifest snapshot rows while building trajectory support metadata - preserve sorted plugin support metadata for healthy rows - add a trajectory metadata regression with a poisoned manifest row before a healthy plugin row ## Veri

### #89988 fix(gateway): isolate control UI descriptor rows

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: gateway, maintainer, size: S, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T11:51:12Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Guard `plugins.uiDescriptors` projection so one unreadable plugin-owned Control UI descriptor row cannot abort the whole Gateway response. - Preserve healthy Control UI descriptor rows in the same response. - Add a contract regression for a poison

### #89990 fix(gateway): isolate web login descriptor rows

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: gateway, maintainer, size: S, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look, merge-risk: 🚨 other
- gitcrawl snapshot updated: 2026-06-15T11:51:26Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - isolate plugin-owned web login gateway method discovery so malformed descriptor rows do not hide later healthy providers - add a regression covering a throwing descriptor `name` getter and an unreadable descriptor array row before a valid web-logi

### #89991 fix(gateway): isolate method list rows

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: gateway, maintainer, size: S, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look, merge-risk: 🚨 other
- gitcrawl snapshot updated: 2026-06-15T11:51:33Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - isolate plugin-owned gateway method list rows so malformed channel metadata does not break advertised method catalogs - share the guarded projection with gateway runtime startup so the live `gatewayMethods` list and method-list APIs behave consist

### #89993 fix(plugins): isolate inspect gateway descriptor rows

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: maintainer, size: S, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T11:51:47Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - isolate plugin-owned gateway method descriptors used by plugin inspect/status reporting - share the guarded descriptor projection between shape classification and inspect output - add a regression for unreadable descriptor rows and descriptor owne

### #90002 fix(plugins): isolate CLI metadata rows

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: maintainer, size: M, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T11:52:07Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - isolate plugin-owned CLI metadata rows during `api.registerCli()` normalization - preserve healthy descriptor-backed CLI commands when sibling descriptor rows or fields throw - reject unreadable CLI parent paths instead of registering commands und

### #88931 fix(agents): cap tool search fanout in lean mode

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: docs, agents, maintainer, size: S, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T11:52:42Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Summary: - make Tool Search config resolution agent/session-aware so localModelLean agents get smaller implicit search fanout - default lean Tool Search results to 4 and max to 8 while preserving explicit searchDefaultLimit/maxSearchLimit - cover resolver and

### #89295 docs: document command auth compatibility contracts

- bucket: maintainer_owned
- author: steipete
- author association: MEMBER
- draft: no
- assignees: none
- labels: maintainer, size: M, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T11:52:55Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Documents the deprecated command authorization SDK compatibility params. - Captures the direct-DM pairing-store versus group allowlist boundary and authorizer-list fallback behavior. - Continues the inline contract-comment work after #88554 was al

### #93209 test: prefer auto-cleaning temp dir helper

- bucket: maintainer_owned
- author: hxy91819
- author association: MEMBER
- draft: no
- assignees: steipete
- labels: docs, scripts, maintainer, size: L, clawsweeper:human-review, P3, rating: 🦞 diamond lobster, merge-risk: 🚨 automation, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T12:14:36Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - add `useTempDirTracker()` to `test/helpers/temp-dir.ts`, with Vitest-owned automatic cleanup after each test and no exposed `cleanup()` method - keep the existing lower-level temp-dir helpers for historical unmigrated tests, while warning on new d
