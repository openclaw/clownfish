---
repo: openclaw/openclaw
cluster_id: pr-inventory-maintainer_owned-20260615T223445-019
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
  - "#73390"
  - "#73606"
  - "#74302"
  - "#74761"
  - "#75427"
  - "#88789"
  - "#89275"
  - "#89493"
  - "#89614"
  - "#89619"
  - "#89630"
  - "#89632"
  - "#89647"
  - "#89657"
  - "#89673"
  - "#90005"
  - "#90059"
  - "#90061"
  - "#90219"
  - "#90438"
  - "#91519"
  - "#91673"
  - "#93354"
  - "#91724"
  - "#91770"
cluster_refs:
  - "#73390"
  - "#73606"
  - "#74302"
  - "#74761"
  - "#75427"
  - "#88789"
  - "#89275"
  - "#89493"
  - "#89614"
  - "#89619"
  - "#89630"
  - "#89632"
  - "#89647"
  - "#89657"
  - "#89673"
  - "#90005"
  - "#90059"
  - "#90061"
  - "#90219"
  - "#90438"
  - "#91519"
  - "#91673"
  - "#93354"
  - "#91724"
  - "#91770"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "This is a PR inventory classification shard, not a dedupe cluster. Classify each PR independently and do not invent a shared canonical."
notes: "Generated from local gitcrawl open PR inventory on 2026-06-15T22:34:45.790Z; bucket=maintainer_owned; no GitHub mutation is possible in plan mode."
---

# PR Inventory maintainer_owned 19

This is a high-volume classification shard over open pull requests. It is not a dedupe cluster.

## Goal

Hydrate live GitHub state for each listed PR and emit one conservative action per PR. Prefer `keep_related`, `keep_independent`, `needs_human`, or `route_security`. Emit close-style planned actions only when fresh live evidence makes the PR boringly superseded, duplicate, abandoned, or low-signal under existing policies. For `target_updated_at`, copy only the hydrated value from the Cluster preflight artifact; do not use gitcrawl snapshot timestamps from this job body.

## Inventory

### #73390 Add configurable WebChat send shortcut

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: none
- labels: app: web-ui, maintainer, size: M, clawsweeper, P3, rating: 🦐 gold shrimp, merge-risk: 🚨 compatibility, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T17:49:48Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Fixes https://github.com/openclaw/openclaw/issues/8147. This adds a narrow WebChat/Control UI send-shortcut preference so users can avoid accidental sends while composing with IME or multi-line text. The implementation should update the composer keydown behavi

### #73606 docs(rfd): @openclaw/call-sdk — provider-agnostic real-time call SDK

- bucket: maintainer_owned
- author: visionik
- author association: MEMBER
- draft: no
- assignees: none
- labels: docs, maintainer, size: XS, P3, rating: 🦐 gold shrimp, merge-risk: 🚨 compatibility, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T17:50:28Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## What Adds an RFC + two companion design docs proposing **`@openclaw/call-sdk`** — a provider-agnostic real-time call SDK — and its binding into OpenClaw's `ChannelPlugin` model. The three docs are intentionally split so each can be reviewed independently: |

### #74302 fix(security): block untrusted workspace providers in startup discovery

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: none
- labels: agents, maintainer, size: XS, codex, aardvark, P2, rating: 🦐 gold shrimp, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T17:51:58Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ### Motivation - Prevent untrusted workspace plugin discovery entries from being imported/executed during startup prewarm when `providerDiscoveryEntriesOnly` is enabled, closing a path that could run workspace code without explicit trust. ### Description - Whe

### #74761 docs: Document oMLX (Apple Silicon MLX) as memorySearch embedding provider

- bucket: maintainer_owned
- author: mppyes-ai
- author association: FIRST_TIMER
- draft: no
- assignees: osolmaz
- labels: docs, stale, size: XS, triage: needs-real-behavior-proof, P3, rating: 🧂 unranked krab, merge-risk: 🚨 auth-provider, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T17:52:32Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Resolves the documentation gap identified in #74732. Adds focused recipes for using oMLX (Apple Silicon MLX inference server) as a memorySearch embedding provider via the existing OpenAI-compatible adapter. ## Changes - `docs/concepts/memory-search.

### #75427 fix(signal): keep quiet SSE receive streams open

- bucket: maintainer_owned
- author: steipete
- author association: MEMBER
- draft: no
- assignees: none
- labels: channel: signal, maintainer, size: XS, proof: sufficient, P3, rating: 🦐 gold shrimp, merge-risk: 🚨 compatibility, merge-risk: 🚨 availability, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T17:53:48Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Fixes #75426. ## Summary - stop applying the default 10s header deadline to long-lived Signal SSE receive streams - keep explicit SSE deadlines available for tests/callers that request them - add regression coverage for quiet streams that do not send response

### #88789 feat(agents): auto-trim lean local tools

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: docs, gateway, agents, maintainer, size: M, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T17:55:43Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Summary: - Adds `agents.*.experimental.localModelLean: "auto"` so lean local tool trimming activates only for models/effective context caps at 64K tokens or smaller. - Threads the effective context cap through embedded attempts, tool construction, `/tools`, an

### #89275 fix(agents): quarantine malformed normalized tools

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: agents, maintainer, size: S, P2, rating: 🦪 silver shellfish, merge-risk: 🚨 compatibility, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T17:56:23Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Re-project provider/runtime-plan normalized tools before runtime metadata preservation. - Quarantine malformed normalized outputs, including tools with unreadable `name` fields, instead of letting metadata preservation crash the turn. - Preserve c

### #89493 fix(mcp): quarantine invalid plugin tool schemas

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: maintainer, size: M, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T17:56:42Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - guard plugin MCP tool entries and descriptors before listing or wrapping them - project plugin MCP input schemas through the runtime tool-schema contract and quarantine unsupported schemas - normalize accepted MCP input schemas to include the MCP-

### #89614 fix(diagnostics): sanitize uncloneable model content

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: extensions: diagnostics-otel, agents, maintainer, size: L, proof: sufficient, P2, rating: 🦐 gold shrimp, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T17:57:17Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - make trusted diagnostic-event listener copies fall back to a bounded sanitizer when `structuredClone` cannot clone captured model content - keep model-call diagnostic capture from throwing when captured tool definitions fail clone, JSON serializat

### #89619 fix(agents): wrap bundle MCP schema setup errors

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: agents, maintainer, size: S, proof: sufficient, P2, rating: 🦞 diamond lobster, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T17:57:27Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Wrap draft-2020-12 bundle MCP schema setup failures with the existing `Invalid MCP draft-2020-12 JSON Schema` error prefix. - Preserve the original setup failure as `cause` and keep non-draft schemas on the SDK AJV validator path. - Add a regressi

### #89630 fix(shared): harden JSON schema default traversal

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: maintainer, size: M, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 compatibility, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T17:57:39Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Harden shared JSON Schema traversal against unreadable schema maps during shape checks, TypeBox normalization, ref matching, and default projection. - Keep default application all-or-nothing by applying defaults to a cloned value and returning the

### #89632 fix(config): guard schema lookup traversal

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: maintainer, size: M, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 availability, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T17:57:49Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Guard config schema lookup traversal when schema maps or fields throw during property access/enumeration. - Omit unreadable lookup child maps instead of crashing, while preserving explicit `false` property schema handling. - Cover unreadable looku

### #89647 fix(plugins): guard startup manifest channels

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: maintainer, size: S, proof: sufficient, P2, rating: 🦞 diamond lobster, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T17:57:53Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Guard startup manifest channel/id reads so an unreadable plugin manifest channel list does not abort gateway startup planning. - Guard plugin registry alias collection across manifest ids, providers, channels, setup provider rows, CLI backends, mo

### #89657 fix(plugins): harden installed index stale metadata

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: maintainer, size: S, P2, rating: 🦐 gold shrimp, status: ⏳ waiting on author, merge-risk: 🚨 other
- gitcrawl snapshot updated: 2026-06-15T17:57:57Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Harden installed plugin index record building against stale manifest records with malformed contribution/startup metadata. - Keep valid contribution metadata intact while dropping malformed non-record/non-array fields instead of throwing during co

### #89673 fix(agents): reclaim session write-locks held past the holder's own maxHoldMs

- bucket: maintainer_owned
- author: openperf
- author association: MEMBER
- draft: no
- assignees: none
- labels: docs, agents, size: XS, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T17:58:09Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ### Summary - **Problem**: Issue #87483 reports that a session write-lock file held by a **live** gateway process persists for hours past `maxHoldMs`/`staleMs`; the watchdog never reclaims it, so later requests fail with `session file locked (timeout 60000ms):

### #90005 fix(plugins): isolate captured CLI metadata rows

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: maintainer, size: S, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T17:58:32Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - isolate captured plugin CLI metadata rows from poisoned descriptor arrays and fields - keep healthy captured CLI descriptors available for bundled capability planning - reject unreadable captured CLI parent paths instead of shortening nested comma

### #90059 fix(plugins): isolate tool metadata rows

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: gateway, agents, maintainer, size: M, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T17:58:38Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - centralize plugin tool metadata map construction behind a guarded row reader - keep effective inventory and Control UI catalog metadata scoped by owning plugin plus tool name - skip malformed metadata rows and unreadable metadata fields instead of

### #90061 fix(agent-runtime): guard prompt cache tool names

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: agents, maintainer, size: XS, P2, rating: 🦐 gold shrimp, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T17:58:42Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary This PR keeps prompt-cache observability from crashing an agent turn when tool-name diagnostics encounter malformed tool rows. - Guard `collectPromptCacheToolNames()` against unreadable array rows and throwing `name` getters. - Preserve existing beh

### #90219 fix(agents): preserve unreadable tool schemas through wrapping

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: agents, maintainer, size: S, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 compatibility, merge-risk: 🚨 availability, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T17:59:27Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Leave unreadable tool `parameters` descriptors intact during schema normalization so runtime projection can quarantine/report bad plugin tools instead of crashing early. - Replace object-spread tool wrapping in before-tool-call and abort-signal wr

### #90438 refactor: add SQLite embedded run target adapter

- bucket: maintainer_owned
- author: jalehman
- author association: MEMBER
- draft: no
- assignees: none
- labels: agents, maintainer, size: XL, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T17:59:57Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## What Implements the SQLite adapter side of the embedded-agent run/session target seam. The adapter resolves storage-neutral run/session targets through SQLite-backed session access while retaining the named active artifact boundary needed by current embedde

### #91519 feat(qa-lab): add Codex Slack approval scenarios

- bucket: maintainer_owned
- author: kevinslin
- author association: MEMBER
- draft: no
- assignees: none
- labels: docs, maintainer, size: L, extensions: qa-lab, P2, rating: 🧂 unranked krab, merge-risk: 🚨 automation, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T18:01:17Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Add opt-in Slack QA scenarios for Codex Guardian command and file-change approvals. - Configure the Slack QA child Gateway to enable the Codex plugin, Guardian app-server mode, plugin approval forwarding, and Codex runtime selection for the select

### #91673 fix(qqbot): read group toggle state from current config

- bucket: maintainer_owned
- author: sliverp
- author association: MEMBER
- draft: no
- assignees: none
- labels: maintainer, size: M, channel: qqbot, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T18:01:58Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Read `/bot-group-allways` status and no-op decisions from `runtime.config.current()` instead of the gateway account snapshot. - Keep QQBot default-account config compatibility aligned by honoring `channels.qqbot.accounts.default` for group default

### #93354 fix(discord): block cross-provider guild admin actions

- bucket: maintainer_owned
- author: eleqtrizit
- author association: MEMBER
- draft: no
- assignees: none
- labels: channel: discord, maintainer, size: S, P1, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T18:02:10Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Summary Fixes Discord guild-admin message action authorization so privileged Discord admin actions require a trusted Discord requester identity even when the action is invoked from another channel provider. Changes - Centralize the Discord privileged guild-adm

### #91724 fix(agents): infer runtime provider from qualified model ids

- bucket: maintainer_owned
- author: yu-xin-c
- author association: CONTRIBUTOR
- draft: no
- assignees: vincentkoc
- labels: agents, size: S, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T18:02:53Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Infer the effective provider from provider-qualified `modelId` values when `resolveModelRuntimePolicy` is called without an explicit provider. - Use that inferred provider for provider/model runtime policy lookup and provider-level runtime fallbac

### #91770 fix(memory): abort search embeddings on tool timeout

- bucket: maintainer_owned
- author: ai-hpc
- author association: MEMBER
- draft: no
- assignees: none
- labels: extensions: memory-core, size: M, proof: sufficient, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T18:03:12Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fixes #91718 by making the memory_search tool timeout cancel the underlying builtin memory embedding search instead of only racing the outer tool promise. - Adds an optional `AbortSignal` to the memory search manager options contract. - Aborts the i
