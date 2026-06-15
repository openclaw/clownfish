---
repo: openclaw/openclaw
cluster_id: pr-inventory-maintainer_owned-20260615T154534-021
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
  - "#89627"
  - "#89644"
  - "#89646"
  - "#89650"
  - "#89669"
  - "#89686"
  - "#93238"
  - "#89699"
  - "#89733"
  - "#89747"
  - "#89756"
  - "#89759"
  - "#89763"
  - "#89402"
  - "#88491"
  - "#89778"
  - "#89429"
  - "#89539"
  - "#89795"
  - "#89739"
  - "#89798"
  - "#89805"
  - "#93220"
  - "#89052"
  - "#89550"
cluster_refs:
  - "#89627"
  - "#89644"
  - "#89646"
  - "#89650"
  - "#89669"
  - "#89686"
  - "#93238"
  - "#89699"
  - "#89733"
  - "#89747"
  - "#89756"
  - "#89759"
  - "#89763"
  - "#89402"
  - "#88491"
  - "#89778"
  - "#89429"
  - "#89539"
  - "#89795"
  - "#89739"
  - "#89798"
  - "#89805"
  - "#93220"
  - "#89052"
  - "#89550"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "This is a PR inventory classification shard, not a dedupe cluster. Classify each PR independently and do not invent a shared canonical."
notes: "Generated from local gitcrawl open PR inventory on 2026-06-15T15:45:34.199Z; bucket=maintainer_owned; no GitHub mutation is possible in plan mode."
---

# PR Inventory maintainer_owned 21

This is a high-volume classification shard over open pull requests. It is not a dedupe cluster.

## Goal

Hydrate live GitHub state for each listed PR and emit one conservative action per PR. Prefer `keep_related`, `keep_independent`, `needs_human`, or `route_security`. Emit close-style planned actions only when fresh live evidence makes the PR boringly superseded, duplicate, abandoned, or low-signal under existing policies. For `target_updated_at`, copy only the hydrated value from the Cluster preflight artifact; do not use gitcrawl snapshot timestamps from this job body.

## Inventory

### #89627 fix(agents): guard tool parameter schema inlining

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: agents, maintainer, size: S, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T10:15:22Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - guard local tool-parameter schema `$ref` inlining against unreadable schema containers - degrade unreadable root and nested schema maps to the existing empty object schema fallback - add regression coverage for proxy-backed root schemas and `param

### #89644 fix(model-catalog): skip unreadable catalog records

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: maintainer, size: S, proof: sufficient, P2, rating: 🦞 diamond lobster, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T10:16:10Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - guard model catalog map enumeration so unreadable plugin-owned provider maps are omitted instead of crashing normalization - preserve healthy provider catalog rows, aliases, discovery metadata, and row projection when sibling entries are unreadabl

### #89646 fix(model-catalog): guard model id policies

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: maintainer, size: M, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T10:16:23Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - guard plugin-owned model-id normalization provider maps before collecting manifest policies - skip unreadable policy rows and tolerate unreadable policy fields while preserving healthy model-id normalization behavior - add regressions for hostile 

### #89650 fix(plugins): guard startup provider contracts

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: maintainer, size: S, P2, rating: 🦐 gold shrimp, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T10:16:34Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - guards startup provider contract reads so an unreadable manifest `contracts` property cannot abort provider startup planning - reuses the installed-index contract snapshot when a healthy configured web search provider is selected - adds regression

### #89669 fix(agents): contain provider schema hook failures

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: commands, agents, maintainer, size: M, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 compatibility, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T10:17:29Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Contain provider tool-schema normalization hook failures at assistant runtime so one bad provider/plugin hook cannot crash model projection before content. - Keep doctor/runtime health checks strict by opting them into rethrowing provider schema n

### #89686 fix(agents): quarantine invalid bundle MCP tools

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: agents, maintainer, size: M, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T10:17:50Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Request bundled MCP `tools/list` with a permissive outer schema, then validate tools one by one. - Quarantine invalid MCP tool entries and SDK metadata-cache failures with catalog diagnostics while keeping healthy sibling tools available. - Preser

### #93238 fix(agents): honor disabled envelope timestamps at model boundary

- bucket: maintainer_owned
- author: osolmaz
- author association: MEMBER
- draft: no
- assignees: none
- labels: gateway, agents, maintainer, size: M, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 compatibility, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T10:18:15Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Opened on behalf of Onur Solmaz (`osolmaz`). AI-assisted contribution. ## Summary OpenClaw could still send timestamp bytes to model input even when `agents.defaults.envelopeTimestamp` was `"off"`. That matters for cache-sensitive local inference servers such 

### #89699 fix(agents): snapshot client tool descriptors

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: agents, maintainer, size: M, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T10:18:24Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Snapshot hosted/client tool descriptors once per attempt before reserved-name checks, Tool Search planning, allowlist collection, and registration. - Skip unreadable or malformed client tool descriptors while keeping healthy sibling client tools a

### #89733 fix(agents): guard message provider tool name reads

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: agents, maintainer, size: S, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T10:19:32Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Guard `filterToolsByMessageProvider()` against tool descriptors whose `name` getter throws while provider allow/deny policy is applied. - Avoid reading descriptor names when no message-provider policy exists, preserving the original tool list for 

### #89747 fix(auto-reply): guard tools status inventory reads

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: maintainer, size: M, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T10:20:24Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Guard `/tools` status inventory materialization so an unreadable group, tool entry, array slot, or notice cannot crash the whole tools response. - Skip malformed entries with throwing required display fields while preserving healthy sibling tools 

### #89756 feat: migrate exec policy config to mode

- bucket: maintainer_owned
- author: kevinslin
- author association: MEMBER
- draft: no
- assignees: none
- labels: docs, app: web-ui, gateway, cli, commands, agents, maintainer, size: XL, extensions: anthropic, channel: qqbot, extensions: codex, plugin: file-transfer, extensions: oc-path, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 availability, status: 📣 needs proof, extensions: policy
- gitcrawl snapshot updated: 2026-06-15T10:20:43Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Migrates steady-state exec config from legacy `tools.exec.security` / `tools.exec.ask` to canonical `tools.exec.mode`. - Adds `full-always` so full-access plus ask-every-command remains representable and distinct from allowlist-backed `always`. - 

### #89759 fix(gateway): guard plugin method scope metadata

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: gateway, maintainer, size: S, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 security-boundary, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T10:20:48Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Harden plugin gateway method descriptor and session-action scope lookups against unreadable sibling registrations. - Preserve core/reserved method precedence, healthy plugin scope resolution, and broad CLI fallback behavior for unmatched dynamic a

### #89763 fix(gateway): guard plugin session action dispatch

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: gateway, maintainer, size: M, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 availability, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T10:21:05Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Summary - Guard plugin session action registry traversal in the gateway auth and dispatch paths so unreadable sibling action metadata cannot crash request handling. - Fail closed when the matching session action required scope metadata is unreadable, without i

### #89402 fix(talk): quarantine invalid realtime consult tools

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: maintainer, size: M, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T10:21:29Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Quarantines malformed custom realtime voice tools before consult-tool exposure builds the provider tool list. - Snapshots readable custom realtime tool descriptors once, so hostile getters cannot pass filtering and crash later provider/session set

### #88491 test(agents): use neutral tool schema fixtures

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: app: web-ui, gateway, commands, agents, maintainer, size: M, extensions: codex, proof: sufficient, P3, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T10:21:37Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - replaces reported plugin/tool fixture names with neutral synthetic `fuzzplugin` / `mockplugin` names in tests and expected diagnostics - keeps this PR test-only and deliberately excludes the runtime-quarantine test files now owned by #88368 - stab

### #89778 fix(media): guard hosted media resolver metadata

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: maintainer, size: S, P2, rating: 🦞 diamond lobster, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T10:21:45Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Guard hosted media resolver registry reads before media URL resolution. - Skip unreadable/non-array hosted resolver lists and malformed resolver rows instead of crashing media loads. - Add a regression test for an unreadable `hostedMediaResolvers`

### #89429 fix(plugin-sdk): quarantine invalid provider tool schemas

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: agents, maintainer, size: M, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T10:21:48Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Snapshots provider-family tool descriptors before SDK normalization/inspection so unreadable plugin-owned entries are quarantined instead of throwing. - Applies the guarded path to Gemini, DeepSeek, and OpenAI provider-tool compat hooks while pres

### #89539 fix(agents): cap runtime tool schema list scans

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: agents, maintainer, size: M, proof: sufficient, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 compatibility, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T10:22:10Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Cap runtime tool schema list inspection before reading entries so oversized sparse/proxy tool lists cannot stall assistant startup, doctor, or effective inventory. - Add a list-level schema diagnostic sentinel so aggregate list failures are not at

### #89795 fix(plugins): guard host cleanup extension metadata

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: maintainer, size: S, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T10:22:26Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - guard plugin host cleanup slot-key discovery against unreadable session extension metadata - record malformed session extension cleanup metadata as a cleanup failure instead of aborting the cleanup pass - add a regression proving healthy runtime l

### #89739 feat(cron): configurable minimum interval guardrail for recurring jobs

- bucket: maintainer_owned
- author: amknight
- author association: MEMBER
- draft: no
- assignees: steipete
- labels: docs, gateway, agents, maintainer, size: L, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T10:22:44Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Adds an opt-in `cron.minInterval` setting that enforces a **minimum interval between fires for recurring cron jobs**, with two layers driven by the one config value: 1. **Creation-time rejection (UX layer):** creating or editing an `every`/`cron` jo

### #89798 fix(plugins): guard agent event subscription metadata

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: maintainer, size: S, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T10:22:54Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - guard agent event subscription dispatch against unreadable plugin-owned subscription metadata - avoid re-reading fragile subscription fields while logging handler failures - add a regression proving healthy agent event subscribers still run after 

### #89805 fix(plugins): guard typed hook metadata

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: maintainer, size: S, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T10:23:13Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Guard typed plugin hook registration selection against unreadable hook metadata so a malformed row cannot crash hook checks or dispatch before healthy hooks run. - Preserve fail-closed behavior for matching safety hooks whose handler metadata is u

### #93220 fix(status): avoid stale session context windows

- bucket: maintainer_owned
- author: hxy91819
- author association: MEMBER
- draft: no
- assignees: none
- labels: commands, agents, maintainer, size: M, clawsweeper:automerge, proof: sufficient, P2, rating: 🐚 platinum hermit, status: 🚀 automerge armed
- gitcrawl snapshot updated: 2026-06-15T10:23:58Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fix `/status` context-window reporting when persisted session runtime metadata is stale. The status message can display the currently selected/configured model while still using an old `session.contextTokens` or old runtime-model snapshot to compute

### #89052 fix(agents): guard MCP inventory display fields

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: agents, maintainer, size: S, proof: sufficient, P2, rating: 🧂 unranked krab, merge-risk: 🚨 availability, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T10:24:15Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Guard bundled MCP effective-inventory display field reads after runtime schema projection. - Preserve healthy MCP inventory entries when optional `label`, `description`, or `displaySummary` accessors throw. - Add focused regression coverage for un

### #89550 fix(channels): harden message action schema discovery

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: maintainer, size: M, proof: sufficient, P2, rating: 🦞 diamond lobster, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T10:27:24Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Harden channel message action discovery against plugin-returned getters/proxies that throw while reading discovery fields. - Keep cross-channel message actions conservative when current-channel schema action lists are unreadable. - Preserve health

