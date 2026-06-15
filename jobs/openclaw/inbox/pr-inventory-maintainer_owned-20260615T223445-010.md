---
repo: openclaw/openclaw
cluster_id: pr-inventory-maintainer_owned-20260615T223445-010
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
  - "#89437"
  - "#89451"
  - "#89468"
  - "#89499"
  - "#89504"
  - "#89513"
  - "#89533"
  - "#89558"
  - "#89565"
  - "#89583"
  - "#89627"
  - "#89644"
  - "#89646"
  - "#89686"
  - "#89699"
  - "#89747"
  - "#89756"
  - "#89402"
  - "#88491"
  - "#89778"
  - "#89429"
  - "#89795"
  - "#89739"
  - "#89798"
  - "#89805"
cluster_refs:
  - "#89437"
  - "#89451"
  - "#89468"
  - "#89499"
  - "#89504"
  - "#89513"
  - "#89533"
  - "#89558"
  - "#89565"
  - "#89583"
  - "#89627"
  - "#89644"
  - "#89646"
  - "#89686"
  - "#89699"
  - "#89747"
  - "#89756"
  - "#89402"
  - "#88491"
  - "#89778"
  - "#89429"
  - "#89795"
  - "#89739"
  - "#89798"
  - "#89805"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "This is a PR inventory classification shard, not a dedupe cluster. Classify each PR independently and do not invent a shared canonical."
notes: "Generated from local gitcrawl open PR inventory on 2026-06-15T22:34:45.788Z; bucket=maintainer_owned; no GitHub mutation is possible in plan mode."
---

# PR Inventory maintainer_owned 10

This is a high-volume classification shard over open pull requests. It is not a dedupe cluster.

## Goal

Hydrate live GitHub state for each listed PR and emit one conservative action per PR. Prefer `keep_related`, `keep_independent`, `needs_human`, or `route_security`. Emit close-style planned actions only when fresh live evidence makes the PR boringly superseded, duplicate, abandoned, or low-signal under existing policies. For `target_updated_at`, copy only the hydrated value from the Cluster preflight artifact; do not use gitcrawl snapshot timestamps from this job body.

## Inventory

### #89437 fix(google): quarantine invalid tool declarations

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: agents, maintainer, size: M, proof: sufficient, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T10:06:10Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Quarantines unreadable or runtime-invalid Google/Gemini tool declarations before they reach Google request payloads. - Reuses the shared Google converter for prompt-cache cached-content tool declarations so cached and live payloads follow the same

### #89451 fix(google): quarantine invalid extension tool schemas

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: maintainer, size: M, proof: sufficient, extensions: google, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T10:06:49Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Quarantines unreadable or runtime-invalid tool declarations in the Google extension before text transport and realtime Live request construction. - Centralizes Google extension function declaration projection so transport-stream and realtime voice

### #89468 fix(agents): skip unreadable tool-search entries

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: agents, maintainer, size: M, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T10:07:16Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Skip tool-search catalog entries whose descriptor fields cannot be safely read. - Keep healthy sibling tools cataloged when one plugin/client tool has an unreadable schema accessor. - Quarantine unreadable client tool schemas by omission instead o

### #89499 fix(agents): sanitize tool schema quarantine diagnostics

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: agents, maintainer, size: S, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T10:08:22Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - sanitize unsupported tool-schema quarantine diagnostic text before warning logs - emit sanitized `tool.execution.blocked` payloads for quarantined runtime schemas - cover hostile newline/OSC tool names and violations in the quarantine regression #

### #89504 fix(agents): snapshot tool inventory display fields

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: agents, maintainer, size: M, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T10:08:29Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Prevent effective tool inventory/status rendering from crashing when compatible plugin or MCP tools expose throwing display-field getters. - Snapshot `name`, `label`, `description`, `displaySummary`, and `parameters` into safe inventory-only tool

### #89513 fix(agents): ignore unreadable session tool metadata

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: agents, maintainer, size: M, proof: sufficient, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 compatibility, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T10:08:51Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Guard SDK custom-tool and extension-tool metadata reads so unreadable `name` / schema metadata skips the malformed tool instead of crashing session startup or refresh. - Snapshot readable tool definitions before wrapping while preserving the origi

### #89533 docs: document embedded trajectory contracts

- bucket: maintainer_owned
- author: steipete
- author association: MEMBER
- draft: no
- assignees: none
- labels: agents, maintainer, size: L, proof: sufficient, P3, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T10:09:59Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Document terminal trajectory status/error semantics and visible-progress classification inputs. - Clarify committed messaging delivery evidence and non-deliverable tool-use handling. - Document trajectory recorder diagnostic reads and bounded clea

### #89558 docs: document embedded compaction context contracts

- bucket: maintainer_owned
- author: steipete
- author association: MEMBER
- draft: no
- assignees: none
- labels: agents, maintainer, size: L, P3, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T10:11:26Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Document the embedded compaction runtime context contract. - Clarify how compaction target resolution applies model overrides, auth-profile safety, and Codex-runtime OpenAI routing. - Keep the change comments-only; no behavior changes. - Document

### #89565 fix(agents): harden system prompt tool reporting

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: agents, maintainer, size: S, P2, rating: 🦞 diamond lobster, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T10:11:43Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Harden system prompt report generation against tool metadata getters that throw while reading name, description, label, or parameters. - Keep schema size/property telemetry best-effort when schema `properties` cannot be inspected. - Add regression

### #89583 fix(llm-core): wrap unreadable tool schemas

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: maintainer, size: S, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T10:12:51Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - wrap unreadable tool parameter schemas in controlled validation errors - keep ordinary argument validation failures on the existing `Validation failed` path - add regression coverage for a plain JSON-schema `properties` proxy that throws during va

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

### #89686 fix(agents): quarantine invalid bundle MCP tools

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: agents, maintainer, size: M, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T10:17:50Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Request bundled MCP `tools/list` with a permissive outer schema, then validate tools one by one. - Quarantine invalid MCP tool entries and SDK metadata-cache failures with catalog diagnostics while keeping healthy sibling tools available. - Preser

### #89699 fix(agents): snapshot client tool descriptors

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: agents, maintainer, size: M, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T10:18:24Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Snapshot hosted/client tool descriptors once per attempt before reserved-name checks, Tool Search planning, allowlist collection, and registration. - Skip unreadable or malformed client tool descriptors while keeping healthy sibling client tools a

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
