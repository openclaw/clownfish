---
repo: openclaw/openclaw
cluster_id: pr-inventory-maintainer_owned-20260615T223445-012
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
  - "#89159"
  - "#89171"
  - "#89175"
  - "#89213"
  - "#89253"
  - "#89262"
  - "#89071"
  - "#93237"
  - "#89098"
  - "#89263"
  - "#89266"
  - "#89270"
  - "#89272"
  - "#89273"
  - "#89280"
  - "#89292"
  - "#89317"
  - "#89624"
  - "#89821"
  - "#89823"
  - "#89826"
  - "#89831"
  - "#89853"
  - "#89865"
  - "#89878"
cluster_refs:
  - "#89159"
  - "#89171"
  - "#89175"
  - "#89213"
  - "#89253"
  - "#89262"
  - "#89071"
  - "#93237"
  - "#89098"
  - "#89263"
  - "#89266"
  - "#89270"
  - "#89272"
  - "#89273"
  - "#89280"
  - "#89292"
  - "#89317"
  - "#89624"
  - "#89821"
  - "#89823"
  - "#89826"
  - "#89831"
  - "#89853"
  - "#89865"
  - "#89878"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "This is a PR inventory classification shard, not a dedupe cluster. Classify each PR independently and do not invent a shared canonical."
notes: "Generated from local gitcrawl open PR inventory on 2026-06-15T22:34:45.788Z; bucket=maintainer_owned; no GitHub mutation is possible in plan mode."
---

# PR Inventory maintainer_owned 12

This is a high-volume classification shard over open pull requests. It is not a dedupe cluster.

## Goal

Hydrate live GitHub state for each listed PR and emit one conservative action per PR. Prefer `keep_related`, `keep_independent`, `needs_human`, or `route_security`. Emit close-style planned actions only when fresh live evidence makes the PR boringly superseded, duplicate, abandoned, or low-signal under existing policies. For `target_updated_at`, copy only the hydrated value from the Cluster preflight artifact; do not use gitcrawl snapshot timestamps from this job body.

## Inventory

### #89159 fix(plugin-sdk): validate tool plugin names

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: maintainer, size: S, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T10:59:24Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Validate tool plugin tool definitions at the consumed list boundary, not only through the `tool(...)` helper. - Reject non-string/empty names and wrap unreadable name accessors with a clear SDK registration error. - Preserve valid execute/factory

### #89171 fix(agent-core): validate harness tool names

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: maintainer, size: S, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T10:59:41Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Validate AgentHarness tool names before constructor registration and `setTools()` replacement. - Convert malformed/non-string/empty names and unreadable name accessors into `AgentHarnessError("invalid_argument", ...)`. - Build the constructor tool

### #89175 fix(talk): quarantine malformed realtime tool names

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: maintainer, size: M, extensions: openai, extensions: google, P2, rating: 🧂 unranked krab, status: ⏳ waiting on author, merge-risk: 🚨 other
- gitcrawl snapshot updated: 2026-06-15T10:59:48Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Skip unreadable, blank, or whitespace custom realtime tool names in the shared agent-consult tool resolver without dropping valid provider-specific names. - Quarantine OpenAI realtime tools against the OpenAI name contract before WebSocket session

### #89213 fix(agents): guard CLI loopback prompt tools

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: agents, maintainer, size: S, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T11:00:37Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Sanitize bundled MCP loopback prompt tools before CLI prompt construction, prompt-tool session hashing, and system-prompt reporting. - Reuse the MCP loopback `tools/list` schema projection so unreadable names and unreadable schemas are dropped con

### #89253 fix(plugins): guard runtime tool descriptors

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: maintainer, size: M, proof: sufficient, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T11:01:59Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Harden runtime plugin tool candidate inspection against poisoned descriptor getters for `name`, `execute`, `parameters`, `description`, `label`, and `displaySummary`. - Return accepted plugin tools through the scoped proxy with snapshotted descrip

### #89262 refactor: add scoped transcript target writers

- bucket: maintainer_owned
- author: jalehman
- author association: MEMBER
- draft: no
- assignees: none
- labels: docs, maintainer, size: M, plugin: file-transfer, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 compatibility, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T11:02:34Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## What Adds public SDK transcript target and writer helpers on top of the transcript identity API. The PR lets callers bind scoped transcript identity to an active `sessionFile` target and then read, append, publish, or run locked transcript work against that

### #89071 fix(agent-tools): skip unreadable tool names in policy

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: agents, maintainer, size: S, P2, rating: 🦐 gold shrimp, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T11:08:34Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - add a guarded tool-policy name reader for hostile or unreadable tool name accessors - drop unreadable tool entries from effective allowlists, plugin groups, policy filtering, and policy audit paths - cover the full policy pipeline so an unreadable

### #93237 Fix Mattermost open DM validation

- bucket: maintainer_owned
- author: amknight
- author association: MEMBER
- draft: no
- assignees: none
- labels: channel: mattermost, cli, maintainer, size: M, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 compatibility, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T11:21:50Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - reject Mattermost `dmPolicy="open"` without wildcard `allowFrom` in config validation - surface the same misconfiguration in Mattermost channel status - include DM drop reason/hint in Mattermost monitor logs ## Root Cause Mattermost's Zod schema a

### #89098 fix(gateway): guard tools catalog descriptors

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: gateway, maintainer, size: M, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T11:39:40Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - guard Gateway `tools.catalog` rendering against unreadable plugin tool descriptor getters - quarantine malformed plugin tool factory results before manifest policy, denylist, metadata, or descriptor-cache paths read them - materialize validated pl

### #89263 fix(plugin-sdk): reject malformed static tool descriptors

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: docs, cli, scripts, maintainer, size: M, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T11:39:48Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - harden `defineToolPlugin` static tool descriptors so poisoned/malformed entries are skipped with diagnostics instead of crashing plugin definition or registering unsafe defaults - surface malformed static descriptor diagnostics through `openclaw p

### #89266 fix(doctor): harden runtime tool schema findings

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: agents, maintainer, size: S, P2, rating: 🦞 diamond lobster, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T11:39:55Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Quarantine primitive/array runtime tool descriptors before provider normalization so invalid entries cannot be normalized into apparently valid schemas. - Sanitize plugin-controlled runtime tool schema diagnostics before rendering doctor health fi

### #89270 fix(agents): sanitize provider tool schema logs

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: agents, maintainer, size: S, P2, rating: 🦞 diamond lobster, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T11:40:15Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Sanitize provider/runtime tool-schema diagnostic warning text and structured log metadata. - Avoid reading plugin-owned `tool.name` directly while logging diagnostics; unreadable names now fall back to `tool[index]`. - Preserve the existing 12-vio

### #89272 fix(doctor): sanitize bundle MCP schema diagnostics

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: maintainer, size: XS, P2, rating: 🦞 diamond lobster, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T11:40:19Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Sanitize bundle MCP runtime diagnostic server names before rendering doctor health finding messages and paths. - Sanitize bundle MCP diagnostic messages before rendering doctor health finding requirements. - Add focused coverage for ANSI/newline M

### #89273 fix(doctor): sanitize provider catalog findings

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: maintainer, size: S, P2, rating: 🦞 diamond lobster, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T11:40:23Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Sanitize provider catalog doctor finding messages, targets, plugin paths, and requirements before rendering. - Sanitize provider catalog discovery failure requirements, which bypass the shared provider catalog finding helper. - Add focused coverag

### #89280 fix(agents): skip unreadable MCP catalog tools

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: agents, maintainer, size: S, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T11:40:59Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Snapshot readable bundle MCP catalog tool descriptor fields before sorting/materializing them. - Skip unreadable or invalid catalog tool descriptors instead of letting one bad MCP entry abort all materialization. - Add focused coverage that a pois

### #89292 fix(auto-reply): guard context prompt tool names

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: maintainer, size: S, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T11:41:23Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - harden the command system-prompt bundle against tool descriptors whose `name` property throws - return the same readable-name tool set used for prompt generation so `/context` and `/export-session` metadata readers do not re-hit a poisoned descrip

### #89317 fix(bedrock): guard tool config projection

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: maintainer, size: S, extensions: amazon-bedrock, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 compatibility, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T11:41:47Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Summary - Guard Bedrock Converse tool-config projection against unreadable tool descriptor fields. - Preserve healthy sibling tools when one descriptor is unreadable. - Fail closed for pinned or required tool choices when the selected/required tool cannot be p

### #89624 fix(ollama): guard tool schema normalization

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: maintainer, size: S, extensions: ollama, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 availability, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T11:42:18Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - guard Ollama tool-schema normalization around unreadable schema objects and arrays - fall back to an empty object schema for unreadable root/properties containers and skip unreadable union arrays - add a regression that proves request construction

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

### #89878 fix(plugins): isolate extractor artifact failures

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: maintainer, size: M, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T11:45:35Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - isolate throwing or malformed document/web content extractor factory descriptors so a healthy extractor from the same plugin can still load - make web content extractor runtime skip a failed extractor plugin when another enabled extractor plugin s
