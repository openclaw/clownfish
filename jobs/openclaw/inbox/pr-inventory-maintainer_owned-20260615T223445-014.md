---
repo: openclaw/openclaw
cluster_id: pr-inventory-maintainer_owned-20260615T223445-014
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
  - "#59986"
  - "#89067"
  - "#89119"
  - "#89296"
  - "#89301"
  - "#90016"
  - "#90032"
  - "#90039"
  - "#90048"
  - "#90052"
  - "#90057"
  - "#90064"
  - "#90068"
  - "#90073"
  - "#90085"
  - "#90090"
  - "#90107"
  - "#90130"
  - "#90195"
  - "#90256"
  - "#90265"
  - "#90268"
  - "#90308"
  - "#90311"
  - "#90386"
cluster_refs:
  - "#59986"
  - "#89067"
  - "#89119"
  - "#89296"
  - "#89301"
  - "#90016"
  - "#90032"
  - "#90039"
  - "#90048"
  - "#90052"
  - "#90057"
  - "#90064"
  - "#90068"
  - "#90073"
  - "#90085"
  - "#90090"
  - "#90107"
  - "#90130"
  - "#90195"
  - "#90256"
  - "#90265"
  - "#90268"
  - "#90308"
  - "#90311"
  - "#90386"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "This is a PR inventory classification shard, not a dedupe cluster. Classify each PR independently and do not invent a shared canonical."
notes: "Generated from local gitcrawl open PR inventory on 2026-06-15T22:34:45.789Z; bucket=maintainer_owned; no GitHub mutation is possible in plan mode."
---

# PR Inventory maintainer_owned 14

This is a high-volume classification shard over open pull requests. It is not a dedupe cluster.

## Goal

Hydrate live GitHub state for each listed PR and emit one conservative action per PR. Prefer `keep_related`, `keep_independent`, `needs_human`, or `route_security`. Emit close-style planned actions only when fresh live evidence makes the PR boringly superseded, duplicate, abandoned, or low-signal under existing policies. For `target_updated_at`, copy only the hydrated value from the Cluster preflight artifact; do not use gitcrawl snapshot timestamps from this job body.

## Inventory

### #59986 refactor(plugins): add lane-oriented channel interface

- bucket: maintainer_owned
- author: huntharo
- author association: MEMBER
- draft: no
- assignees: none
- labels: docs, channel: discord, channel: msteams, channel: slack, channel: telegram, maintainer, channel: feishu, size: XL, mantis: telegram-visible-proof, P2, rating: 🦪 silver shellfish, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T12:20:45Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Describe the problem and fix in 2–5 bullets: - Problem: plugin-facing channel runtime and interactive APIs were still shaped around channel-specific surfaces, which pushed plugins toward Telegram/Discord/Slack-specific logic. - Why it matters: that

### #89067 fix(codex): harden diagnostic tool capture

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: maintainer, size: M, extensions: codex, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T12:22:57Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - keep Codex model-call diagnostic tool-definition capture from throwing on unreadable tool `name`, `description`, `inputSchema`, or `parameters` accessors - sanitize captured diagnostic schema payloads before private diagnostic dispatch, including

### #89119 fix(agent-runtime): guard provider tool diagnostics

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: agents, maintainer, size: M, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look, merge-risk: 🚨 other
- gitcrawl snapshot updated: 2026-06-15T12:23:06Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - guard provider tool-schema diagnostics logging against unreadable source tool names - normalize provider diagnostic descriptors before summary/log payload construction - catch provider inspection failures so non-critical diagnostics cannot abort t

### #89296 fix(copilot): quarantine malformed bridged tools

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: maintainer, size: M, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look, extensions: copilot
- gitcrawl snapshot updated: 2026-06-15T12:23:24Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - quarantine malformed Copilot bridge source tools before construction-plan filtering, duplicate detection, and SDK registration - reject unreadable tool names, unreadable execution-affecting descriptors, and unsupported runtime input schemas such a

### #89301 fix(trajectory): skip unreadable tool descriptors

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: maintainer, size: S, P2, rating: 🦞 diamond lobster, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T12:23:32Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - make shared trajectory tool-definition capture tolerate unreadable tool descriptors - skip tools with unreadable `name` or `parameters` while preserving healthy siblings - add regression coverage for hostile descriptor getters in trajectory runtim

### #90016 fix(plugins): isolate cached tool descriptor names

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: maintainer, size: S, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T12:23:52Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - isolate cached plugin tool descriptor name reads from poisoned accessors - preserve healthy cached plugin tools when sibling cached descriptors are malformed - add focused regression coverage for cached descriptor recovery without runtime reload #

### #90032 fix(plugins): isolate tool metadata projection

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: gateway, agents, maintainer, size: S, P2, rating: 🦞 diamond lobster, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T12:24:19Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Add a guarded plugin tool metadata projection helper that snapshots readable metadata rows. - Use the helper from both `tools.catalog` and effective tool inventory so malformed registry rows cannot crash either view. - Cover poisoned plugin metada

### #90039 fix(plugins): isolate command spec projection

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: maintainer, size: S, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look, merge-risk: 🚨 other
- gitcrawl snapshot updated: 2026-06-15T12:24:59Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Isolate plugin command spec projection so malformed runtime command rows are skipped instead of crashing command listing or native command discovery. - Preserve existing provider-native command naming/filtering behavior for healthy command registr

### #90048 fix(plugins): isolate provider runtime rows

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: maintainer, size: S, P2, rating: 🦐 gold shrimp, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T12:25:15Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Isolate provider runtime row projection so malformed provider registrations are skipped instead of crashing provider resolution. - Preserve resolved plugin scoping when reusing a wider active runtime registry. - Add a regression test covering both

### #90052 fix(plugins): isolate capability provider rows

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: maintainer, size: M, P2, rating: 🧂 unranked krab, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T12:25:36Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - guard capability provider registry rows before reading provider ids or aliases - skip malformed provider rows while preserving direct lookup for providers whose aliases are unreadable - apply the same boundary behavior to the shared capability pro

### #90057 Polish Workboard operations view

- bucket: maintainer_owned
- author: fuller-stack-dev
- author association: MEMBER
- draft: no
- assignees: steipete
- labels: app: web-ui, size: XL, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 session-state, status: 👀 ready for maintainer look, proof: 🎥 video
- gitcrawl snapshot updated: 2026-06-15T12:25:57Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - polish the Workboard operations UI across card layout, filters, health metrics, details, responsive behavior, dropdowns, and tooltips - add guarded auto-refresh, serialized writes, linked-task reconciliation, bounded task discovery, and safer star

### #90064 fix(plugins): isolate unreadable tool registrations

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: maintainer, size: S, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T12:26:28Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary This PR keeps plugin registration resilient when one direct tool object exposes an unreadable `name`. - Convert a throwing direct tool-name getter into a plugin diagnostic. - Skip only the malformed tool registration so later healthy registrations f

### #90068 fix(plugins): isolate bundled capability capture fields

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: maintainer, size: M, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T12:26:40Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Hardens bundled capability runtime capture so malformed captured provider/backend/harness `id` fields or tool `name` fields are diagnosed and skipped per row. - Preserves healthy sibling captured registrations instead of failing the whole bundled

### #90073 fix(plugins): guard metadata snapshot owner rows

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: maintainer, size: M, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T12:26:57Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Guard plugin metadata snapshot freezing, owner-map construction, and registry id normalization against unreadable manifest metadata fields. - Preserve healthy owner aliases/providers/channels/CLI/setup/model-catalog rows when sibling metadata fiel

### #90085 fix(gateway): guard model pricing metadata

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: gateway, maintainer, size: S, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T12:27:22Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Guard manifest `modelPricing.providers` reads while the gateway builds pricing policy context. - Skip malformed pricing metadata for one plugin without dropping healthy sibling policies. - Add a regression proving a poisoned manifest row no longer

### #90090 fix(plugins): guard runtime boundary manifest rows

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: maintainer, size: S, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T12:27:35Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Harden runtime plugin boundary lookup so malformed manifest rows are skipped per row instead of aborting healthy runtime resolution. - Add focused regression coverage for poisoned manifest accessors in both plugin-id lookup and runtime entry-base-

### #90107 fix(commands): guard model provider aliases

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: commands, maintainer, size: S, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T12:28:49Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Guard model provider alias collection against unreadable manifest model-catalog metadata. - Skip poisoned alias maps and alias target rows while preserving later healthy aliases. - Keep bundled source-peer fallback behind safe manifest `id` / `ori

### #90130 fix(auth): guard preferred provider metadata

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: commands, maintainer, size: S, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 auth-provider, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T12:29:24Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Prevent setup-provider preferred auth-choice lookup from crashing when a plugin provider object exposes unreadable metadata. - Pass inert provider/method snapshots into the fallback choice resolver so bad plugin objects are skipped before `provide

### #90195 fix(plugins): guard plugin tool descriptor reads

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: maintainer, size: L, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 compatibility, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T12:32:09Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - guard plugin tool descriptor reads so malformed `name`, `execute`, `description`, or `parameters` access cannot abort sibling tool resolution - pin each accepted plugin tool to one stable name before allow/deny policy, manifest filtering, metadata

### #90256 fix(llm-core): guard tool argument schema validation

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: maintainer, size: S, P2, rating: 🦐 gold shrimp, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T12:35:39Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Guard `validateToolArguments()` against unreadable plugin-provided tool parameter schemas. - Convert top-level `parameters` getter failures, nested schema getter failures, and schema-owned TypeBox/coercion operation failures into a stable unsuppor

### #90265 fix(agents): guard system prompt tool schema stats

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: agents, maintainer, size: S, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look, merge-risk: 🚨 other
- gitcrawl snapshot updated: 2026-06-15T12:36:16Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - guard system prompt report generation against throwing tool `parameters` getters - guard tool schema property counting against throwing `properties` getters - preserve the existing zero-size/hash fallback for schemas that cannot be measured ## Rea

### #90268 fix(trajectory): guard tool schema capture

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: maintainer, size: S, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T12:36:38Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Guard trajectory tool-definition capture against throwing tool `name`, `description`, and `parameters` getters. - Guard trajectory payload limiting against throwing nested object field getters, proxy object-key traps, and proxy array item traps. -

### #90308 fix(diagnostics): reclaim zombie embedded-run counters left idle by handle-mismatch clears

- bucket: maintainer_owned
- author: openperf
- author association: MEMBER
- draft: no
- assignees: none
- labels: size: M, P1, rating: 🐚 platinum hermit, merge-risk: 🚨 session-state, merge-risk: 🚨 availability, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T12:39:40Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ### Summary - **Problem**: Issue #90240 reports a 30+ minute session stall: after rapid back-to-back turns, `getActiveEmbeddedRunCount()` stays at 1 despite no active run. All subsequent inbound messages queue as follow-ups to a non-existent run; the session s

### #90311 fix(mcp): quarantine unreadable plugin tool schemas

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: agents, maintainer, size: M, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T12:39:47Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - replace eager tool-object spreading in before_tool_call and abort wrappers with descriptor-preserving execution wrappers - keep plugin/class-backed tool schema getters lazy and bound to the original tool receiver while forwarding expected AgentToo

### #90386 fix(mcp): skip unreadable plugin tools

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: maintainer, size: S, P2, rating: 🦐 gold shrimp, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T12:43:18Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Hardens the plugin tools MCP bridge so unreadable or unwrappable plugin tool descriptors are skipped during handler construction instead of crashing `listTools`. - Keeps healthy sibling plugin tools listed and callable through the MCP bridge, incl
