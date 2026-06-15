---
repo: openclaw/openclaw
cluster_id: pr-inventory-maintainer_owned-20260615T154534-025
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
  - "#89292"
  - "#89295"
  - "#89317"
  - "#89320"
  - "#89624"
  - "#89819"
  - "#89820"
  - "#89821"
  - "#89823"
  - "#89826"
  - "#89831"
  - "#89853"
  - "#89865"
  - "#93209"
  - "#89875"
  - "#89878"
  - "#89880"
  - "#89886"
  - "#89888"
  - "#89898"
  - "#89904"
  - "#89907"
  - "#89911"
  - "#89917"
  - "#84709"
cluster_refs:
  - "#89292"
  - "#89295"
  - "#89317"
  - "#89320"
  - "#89624"
  - "#89819"
  - "#89820"
  - "#89821"
  - "#89823"
  - "#89826"
  - "#89831"
  - "#89853"
  - "#89865"
  - "#93209"
  - "#89875"
  - "#89878"
  - "#89880"
  - "#89886"
  - "#89888"
  - "#89898"
  - "#89904"
  - "#89907"
  - "#89911"
  - "#89917"
  - "#84709"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "This is a PR inventory classification shard, not a dedupe cluster. Classify each PR independently and do not invent a shared canonical."
notes: "Generated from local gitcrawl open PR inventory on 2026-06-15T15:45:34.199Z; bucket=maintainer_owned; no GitHub mutation is possible in plan mode."
---

# PR Inventory maintainer_owned 25

This is a high-volume classification shard over open pull requests. It is not a dedupe cluster.

## Goal

Hydrate live GitHub state for each listed PR and emit one conservative action per PR. Prefer `keep_related`, `keep_independent`, `needs_human`, or `route_security`. Emit close-style planned actions only when fresh live evidence makes the PR boringly superseded, duplicate, abandoned, or low-signal under existing policies. For `target_updated_at`, copy only the hydrated value from the Cluster preflight artifact; do not use gitcrawl snapshot timestamps from this job body.

## Inventory

### #89292 fix(auto-reply): guard context prompt tool names

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: maintainer, size: S, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T11:41:23Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - harden the command system-prompt bundle against tool descriptors whose `name` property throws - return the same readable-name tool set used for prompt generation so `/context` and `/export-session` metadata readers do not re-hit a poisoned descrip

### #89295 docs: document command auth compatibility contracts

- bucket: maintainer_owned
- author: steipete
- author association: MEMBER
- draft: no
- assignees: none
- labels: maintainer, size: M, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 compatibility, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T11:41:29Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Documents the deprecated command authorization SDK compatibility params. - Captures the direct-DM pairing-store versus group allowlist boundary and authorizer-list fallback behavior. - Continues the inline contract-comment work after #88554 was al

### #89317 fix(bedrock): guard tool config projection

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: maintainer, size: S, extensions: amazon-bedrock, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 compatibility, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T11:41:47Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Summary - Guard Bedrock Converse tool-config projection against unreadable tool descriptor fields. - Preserve healthy sibling tools when one descriptor is unreadable. - Fail closed for pinned or required tool choices when the selected/required tool cannot be p

### #89320 docs: document acp stateful target contracts

- bucket: maintainer_owned
- author: steipete
- author association: MEMBER
- draft: no
- assignees: none
- labels: app: web-ui, gateway, maintainer, size: XL, proof: sufficient, P3, rating: 🦐 gold shrimp, status: 👀 ready for maintainer look, merge-risk: 🚨 other
- gitcrawl snapshot updated: 2026-06-15T11:41:54Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Document ACP stateful target resolution, readiness, session creation, and in-place reset handoffs. - Document the shared Gateway session reset authority and lifecycle helper contracts around target validation, cleanup, store mutation, ACP metadata

### #89624 fix(ollama): guard tool schema normalization

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: maintainer, size: S, extensions: ollama, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 availability, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T11:42:18Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - guard Ollama tool-schema normalization around unreadable schema objects and arrays - fall back to an empty object schema for unreadable root/properties containers and skip unreadable union arrays - add a regression that proves request construction

### #89819 fix(node-host): guard plugin command metadata

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: maintainer, size: S, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 availability, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T11:42:48Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Snapshot plugin node-host command registration metadata before listing or dispatching commands. - Skip malformed command rows so one stale plugin registration cannot hide healthy node-host commands. - Preserve handler receiver context for valid co

### #89820 feat(mobile): D-1+D-2 — hamburger nav + viewport-responsive layout

- bucket: maintainer_owned
- author: BunsDev
- author association: MEMBER
- draft: no
- assignees: BunsDev
- labels: app: web-ui, maintainer, size: S, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T11:43:00Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary **What problem does this PR solve?** - Nav was inaccessible on small screens (hidden with `display:none` below 900px) and workboard columns overflowed the viewport on phones. **Why does this matter now?** - Mobile users have no navigation path and w

### #89821 feat(ux): UX-007 + UX-008 — board drag + shortcut legend [sprint 2 closeout]

- bucket: maintainer_owned
- author: BunsDev
- author association: MEMBER
- draft: no
- assignees: BunsDev
- labels: app: web-ui, maintainer, size: L, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T11:43:05Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Changes ### UX-007 — Board card drag between columns - Adds `workboard-card--dragging` class (opacity 0.4 + purple box-shadow) to the source card during drag - Activates existing `.workboard-column--drop` dashed-outline styling on all valid drop targets - N

### #89823 fix(ui): C-1+C-2 — glass consistency + skeleton loading states

- bucket: maintainer_owned
- author: BunsDev
- author association: MEMBER
- draft: no
- assignees: BunsDev
- labels: app: web-ui, maintainer, size: M, P3, rating: 🦪 silver shellfish, status: ⏳ waiting on author, merge-risk: 🚨 other
- gitcrawl snapshot updated: 2026-06-15T11:43:09Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Visual Polish ### C-1 — ChatSidePanel glass fix - Panel was using a solid background, breaking the two-tier glass depth language - Now uses backdrop-filter blur matching the .glass recipe ### C-2 — Skeleton states - MemoryTiers and RoleContracts now shimmer

### #89826 feat(chat): UX-012 — token usage progress meter

- bucket: maintainer_owned
- author: BunsDev
- author association: MEMBER
- draft: no
- assignees: none
- labels: app: web-ui, maintainer, size: S, P3, rating: 🦐 gold shrimp, merge-risk: 🚨 session-state, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T11:43:16Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Adds a 2px progress bar at the base of the chat composer showing context usage. - Green <60%, blue 60–85%, red >85% - Smooth animated width transition (400ms ease-out) - Only visible when token data is present - Accessible: role=progressbar with aria-valuenow/

### #89831 fix(diagnostic): gate stuck-session fallback on fresh progress

- bucket: maintainer_owned
- author: openperf
- author association: MEMBER
- draft: no
- assignees: none
- labels: size: XS, P1, rating: 🐚 platinum hermit, merge-risk: 🚨 session-state, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T11:43:27Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ### Summary - **Problem**: Issue #89766 reports that long-running gateways running cron `sessionTarget: isolated` jobs on the `claude-cli` backend repeatedly emit `[diagnostic] stuck session: ... reason=queued_work_without_active_run ... lastProgress=cli_live:

### #89853 fix(agents): verify delegated write results

- bucket: maintainer_owned
- author: ai-hpc
- author association: MEMBER
- draft: no
- assignees: none
- labels: agents, size: M, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 compatibility, merge-risk: 🚨 availability, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T11:44:14Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - fixes #67136 by verifying delegated write results before reporting success - adds shared write verification for missing files, non-file paths, byte-size mismatches, and stale same-size content - keeps edit recovery from converting write-verificati

### #89865 fix(channels): guard startup maintenance metadata

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: maintainer, size: S, proof: sufficient, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T11:44:36Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - guard channel plugin startup maintenance against unreadable `lifecycle` metadata so one malformed channel cannot stop later startup maintenance hooks - keep startup maintenance warning logs best-effort when a plugin `id` getter is unreadable - add

### #93209 test: prefer auto-cleaning temp dir helper

- bucket: maintainer_owned
- author: hxy91819
- author association: MEMBER
- draft: no
- assignees: steipete
- labels: docs, scripts, maintainer, size: L, clawsweeper:human-review, P3, rating: 🦞 diamond lobster, merge-risk: 🚨 automation, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T11:44:49Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - add `useTempDirTracker()` to `test/helpers/temp-dir.ts`, with Vitest-owned automatic cleanup after each test and no exposed `cleanup()` method - keep the existing lower-level temp-dir helpers for historical unmigrated tests, while warning on new d

### #89875 fix(channels): guard loaded plugin metadata

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: maintainer, size: S, P2, rating: 🦪 silver shellfish, merge-risk: 🚨 availability, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T11:45:17Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - guard loaded channel plugin registry coercion against unreadable `id` and `meta` descriptors - preserve normal/frozen plugin object identity while using cached stable wrappers only for accessor or read-only malformed metadata cases - route read-pa

### #89878 fix(plugins): isolate extractor artifact failures

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: maintainer, size: M, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T11:45:35Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - isolate throwing or malformed document/web content extractor factory descriptors so a healthy extractor from the same plugin can still load - make web content extractor runtime skip a failed extractor plugin when another enabled extractor plugin s

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

### #89904 refactor: route bundled session helpers through accessor

- bucket: maintainer_owned
- author: jalehman
- author association: MEMBER
- draft: no
- assignees: none
- labels: docs, channel: discord, channel: matrix, channel: mattermost, channel: slack, channel: telegram, channel: whatsapp-web, gateway, extensions: memory-core, maintainer, channel: feishu, size: XL, extensions: codex, plugin: file-transfer, mantis: telegram-visible-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T11:46:31Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## What Routes bundled plugin session consumers and SDK/runtime session helper APIs through the narrow session accessor seam while preserving the deprecated file-backed whole-store compatibility helpers. ## Why This is part of Path 3 SQLite branch-by-abstracti

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

### #84709 fix(cron): fail closed when required tools are unavailable

- bucket: maintainer_owned
- author: ostehost
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: jalehman
- labels: size: L, extensions: codex, proof: supplied, P1, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 security-boundary, merge-risk: 🚨 availability, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T11:47:04Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Related Issues - Addresses #84141. - Related: #60841. ## Summary - Enables the Codex app-server native/dynamic tool surface for finite cron allowlists that require runtime tools like `exec`. - Fails cron isolated-agent runs closed with `TOOL_SURFACE_UNAVAIL

