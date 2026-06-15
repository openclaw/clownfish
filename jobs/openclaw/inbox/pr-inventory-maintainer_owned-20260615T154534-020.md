---
repo: openclaw/openclaw
cluster_id: pr-inventory-maintainer_owned-20260615T154534-020
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
  - "#92398"
  - "#51206"
  - "#93207"
  - "#87587"
  - "#88977"
  - "#89006"
  - "#89404"
  - "#89437"
  - "#89451"
  - "#89454"
  - "#89468"
  - "#89499"
  - "#89504"
  - "#89513"
  - "#89529"
  - "#89533"
  - "#89558"
  - "#89559"
  - "#89565"
  - "#89571"
  - "#89582"
  - "#89583"
  - "#89592"
  - "#89596"
  - "#89603"
cluster_refs:
  - "#92398"
  - "#51206"
  - "#93207"
  - "#87587"
  - "#88977"
  - "#89006"
  - "#89404"
  - "#89437"
  - "#89451"
  - "#89454"
  - "#89468"
  - "#89499"
  - "#89504"
  - "#89513"
  - "#89529"
  - "#89533"
  - "#89558"
  - "#89559"
  - "#89565"
  - "#89571"
  - "#89582"
  - "#89583"
  - "#89592"
  - "#89596"
  - "#89603"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "This is a PR inventory classification shard, not a dedupe cluster. Classify each PR independently and do not invent a shared canonical."
notes: "Generated from local gitcrawl open PR inventory on 2026-06-15T15:45:34.199Z; bucket=maintainer_owned; no GitHub mutation is possible in plan mode."
---

# PR Inventory maintainer_owned 20

This is a high-volume classification shard over open pull requests. It is not a dedupe cluster.

## Goal

Hydrate live GitHub state for each listed PR and emit one conservative action per PR. Prefer `keep_related`, `keep_independent`, `needs_human`, or `route_security`. Emit close-style planned actions only when fresh live evidence makes the PR boringly superseded, duplicate, abandoned, or low-signal under existing policies. For `target_updated_at`, copy only the hydrated value from the Cluster preflight artifact; do not use gitcrawl snapshot timestamps from this job body.

## Inventory

### #92398 fix(cron): stop replaying missed slots that predate the last definition write [AI-assisted]

- bucket: maintainer_owned
- author: amersheeny
- author association: CONTRIBUTOR
- draft: no
- assignees: vincentkoc
- labels: app: web-ui, gateway, size: M, proof: supplied, proof: sufficient, P1, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T09:49:56Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fixes #91944 — after a `cron.update` schedule change, a gateway restart (e.g. during `openclaw update`) could fire the job at the wrong time. The startup catch-up heuristic (`isRunnableJob` with `allowCronMissedRunByLastRun`) classified a cron job a

### #51206 Plugins: enforce private import boundaries

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: maintainer, size: L, P1, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 security-boundary, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T09:55:47Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: Plugins could couple directly to private OpenClaw internals or escape their package root through imports, even though the intended contract is the plugin SDK seam. - Why it matters: That makes plugin behavior depend on unstable host inter

### #93207 fix(cron): suppress unavailable-tool self-debug replies

- bucket: maintainer_owned
- author: amknight
- author association: MEMBER
- draft: no
- assignees: none
- labels: agents, maintainer, size: L, mantis: telegram-visible-proof, P1, rating: 🧂 unranked krab, merge-risk: 🚨 session-state, merge-risk: 🚨 message-delivery, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T09:57:27Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - thread unknown-tool loop guard exhaustion out of the embedded attempt result and into cron failure metadata - add a fatal `tool_unavailable_exhausted` signal with `bypassCronDelivery: true` for cron runs - make isolated cron delivery skip dispatch

### #87587 fix(agents): keep exec visible for lean local models

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: docs, gateway, agents, maintainer, size: S, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 compatibility, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T10:02:01Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Refs #86632. ## Summary Lean local-model mode now keeps `exec` directly visible when Tool Search compacts the rest of the tool catalog. This gives small coding-tuned local models an obvious shell fallback for simple live-data or workspace probes instead of for

### #88977 fix(agents): tolerate provider tool schema hook failures

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: agents, maintainer, size: M, extensions: codex, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 compatibility, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T10:02:17Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - keep provider `normalizeToolSchemas` and `inspectToolSchemas` strict by default for doctor/check validation - pass assistant-only warn mode through embedded attempts, Codex dynamic tools, and compaction so hook failures log and keep current runtim

### #89006 fix(agents): quarantine invalid session custom tools

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: agents, maintainer, size: L, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T10:02:29Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Quarantines SDK and extension-registered custom tools whose definitions cannot be read safely or whose parameter schemas are unsupported by the runtime projection. - Materializes session custom tool definitions before registry activation so hostil

### #89404 fix(agents): snapshot SDK custom tools safely

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: agents, maintainer, size: S, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T10:04:05Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Snapshot SDK custom tool definitions before session startup and registry refresh code reads caller-owned fields. - Drop unreadable custom tool descriptors so one hostile getter cannot crash `createAgentSession` or block healthy sibling tools. - Pr

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

### #89454 fix(feishu): resolve exec/keychain appSecret SecretRefs on the outbound path

- bucket: maintainer_owned
- author: openperf
- author association: MEMBER
- draft: no
- assignees: none
- labels: channel: feishu, size: L, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 auth-provider, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T10:06:57Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ### Summary - **Problem**: Issue #89338 reports that the Feishu **MEDIA** directive (and image/file uploads in general) silently fails when `appSecret` is configured as a `SecretRef` backed by an `exec`/Keychain provider. Normal chat (WebSocket connection) and

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

### #89529 fix(provider): harden unsupported schema keyword stripping

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: agents, maintainer, size: M, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T10:09:35Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Harden shared unsupported schema keyword stripping against hostile schema arrays and objects from provider/plugin compatibility paths. - Avoid source array traversal methods, snapshot array length once, and collapse only schema-valued unreadable b

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

### #89559 fix(plugins): harden plugin tool shape reads

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: maintainer, size: S, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 availability, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T10:11:35Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Harden plugin tool runtime shape checks against hostile getters on tool names, descriptions, execute functions, and parameter schemas. - Keep malformed plugin tools isolated so a bad tool cannot poison valid sibling tools from the same plugin. - M

### #89565 fix(agents): harden system prompt tool reporting

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: agents, maintainer, size: S, P2, rating: 🦞 diamond lobster, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T10:11:43Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Harden system prompt report generation against tool metadata getters that throw while reading name, description, label, or parameters. - Keep schema size/property telemetry best-effort when schema `properties` cannot be inspected. - Add regression

### #89571 fix(provider): harden provider tool schema hooks

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: maintainer, size: M, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T10:12:00Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Harden provider tool schema normalization against plugin-supplied tools with unreadable `parameters` fields. - Share guarded tool-field reads across Gemini, DeepSeek, and native OpenAI schema hooks so one poisoned tool does not stop sibling normal

### #89582 fix(agents): harden tool search schema catalog

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: agents, maintainer, size: S, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T10:12:42Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - make Tool Search catalog fingerprinting tolerate unreadable schema objects - snapshot catalog parameters into JSON-safe metadata so describe/search cannot be poisoned by hostile schema proxies - add regression coverage proving a bad tool schema do

### #89583 fix(llm-core): wrap unreadable tool schemas

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: maintainer, size: S, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T10:12:51Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - wrap unreadable tool parameter schemas in controlled validation errors - keep ordinary argument validation failures on the existing `Validation failed` path - add regression coverage for a plain JSON-schema `properties` proxy that throws during va

### #89592 fix(agents): guard tool definition schema reads

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: agents, maintainer, size: S, proof: sufficient, P2, rating: 🧂 unranked krab, merge-risk: 🚨 security-boundary, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T10:13:37Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - guard agent tool definition metadata reads so a hostile or broken tool schema getter cannot crash definition adaptation - represent unreadable parameter schemas as an invalid schema sentinel, letting runtime schema inspection quarantine the tool i

### #89596 fix(policy): recognize declared tool allowlists

- bucket: maintainer_owned
- author: giodl73-repo
- author association: MEMBER
- draft: no
- assignees: none
- labels: gateway, agents, maintainer, size: L, proof: sufficient, P3, rating: 🦐 gold shrimp, status: ⏳ waiting on author, merge-risk: 🚨 other
- gitcrawl snapshot updated: 2026-06-15T10:13:57Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Recognize declared tool allowlists while filtering unavailable tools out of the declared context. - Filter denied MCP namespaces from declared allowlists, including `bundle-mcp`, sanitized server prefixes such as `paperless__*`, and duplicate-safe

### #89603 fix(agents): quarantine unreadable tool schemas before normalization

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: commands, agents, maintainer, size: M, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T10:14:07Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Quarantine provider-un-normalizable tool schemas inside `createOpenClawCodingTools` before core/provider normalization can touch hostile descriptors. - Preserve pre-normalization diagnostics for embedded runs, compaction, doctor checks, and effect

