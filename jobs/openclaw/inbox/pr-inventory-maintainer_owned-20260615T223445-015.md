---
repo: openclaw/openclaw
cluster_id: pr-inventory-maintainer_owned-20260615T223445-015
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
  - "#90431"
  - "#91290"
  - "#91293"
  - "#91325"
  - "#91370"
  - "#80590"
  - "#85878"
  - "#88977"
  - "#89132"
  - "#89348"
  - "#90262"
  - "#90505"
  - "#39386"
  - "#67820"
  - "#68236"
  - "#87697"
  - "#88780"
  - "#88880"
  - "#88881"
  - "#89052"
  - "#89323"
  - "#89426"
  - "#89458"
  - "#89463"
  - "#89529"
cluster_refs:
  - "#90431"
  - "#91290"
  - "#91293"
  - "#91325"
  - "#91370"
  - "#80590"
  - "#85878"
  - "#88977"
  - "#89132"
  - "#89348"
  - "#90262"
  - "#90505"
  - "#39386"
  - "#67820"
  - "#68236"
  - "#87697"
  - "#88780"
  - "#88880"
  - "#88881"
  - "#89052"
  - "#89323"
  - "#89426"
  - "#89458"
  - "#89463"
  - "#89529"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "This is a PR inventory classification shard, not a dedupe cluster. Classify each PR independently and do not invent a shared canonical."
notes: "Generated from local gitcrawl open PR inventory on 2026-06-15T22:34:45.789Z; bucket=maintainer_owned; no GitHub mutation is possible in plan mode."
---

# PR Inventory maintainer_owned 15

This is a high-volume classification shard over open pull requests. It is not a dedupe cluster.

## Goal

Hydrate live GitHub state for each listed PR and emit one conservative action per PR. Prefer `keep_related`, `keep_independent`, `needs_human`, or `route_security`. Emit close-style planned actions only when fresh live evidence makes the PR boringly superseded, duplicate, abandoned, or low-signal under existing policies. For `target_updated_at`, copy only the hydrated value from the Cluster preflight artifact; do not use gitcrawl snapshot timestamps from this job body.

## Inventory

### #90431 feat: expose node-hosted plugin tools

- bucket: maintainer_owned
- author: steipete
- author association: MEMBER
- draft: no
- assignees: none
- labels: docs, app: web-ui, gateway, scripts, commands, agents, maintainer, size: XL, plugin: file-transfer, proof: sufficient, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 compatibility, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T12:44:29Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Add dynamic node-hosted plugin/MCP tools so a Gateway on one computer can expose tools registered by connected nodes on other computers. - Add `node.pluginTools.update`; node hosts publish their current `registerNodeHostCommand(...agentTool...)` i

### #91290 ci: add plugin SDK impact gate

- bucket: maintainer_owned
- author: jalehman
- author association: MEMBER
- draft: no
- assignees: none
- labels: scripts, maintainer, size: XL, P2, rating: 🧂 unranked krab, merge-risk: 🚨 automation, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T12:56:39Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Adds a trusted-base Plugin SDK impact gate for public SDK and contract-adjacent PR changes. - Accepts `plugin-sdk:*` labels, PR body classification, and trusted exact-head ClawSweeper markers while preventing classifications from lowering determin

### #91293 fix(agents): snapshot session tool definitions

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: none
- labels: agents, maintainer, size: L, P2, rating: 🦐 gold shrimp, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T12:56:58Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Summary - Snapshots session tool definitions and registered extension tool definitions before agent runtime paths normalize or execute them. - Quarantines unreadable schema/name values while preserving healthy sibling tools and existing execution/error behavio

### #91325 fix(codex): extend skill_workshop dynamic-tool timeout above approval ceiling

- bucket: maintainer_owned
- author: openperf
- author association: MEMBER
- draft: no
- assignees: none
- labels: size: XS, extensions: codex, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 availability, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T12:57:55Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ### Summary - **Problem**: `skill_workshop` lifecycle tool calls (apply/reject/quarantine) invoked from a Codex agent session fail with "OpenClaw dynamic tool call timed out after 90000ms while running tool skill_workshop" before the operator approval prompt c

### #91370 fix(agents): skip text-direct fallback for sessions_yield completions

- bucket: maintainer_owned
- author: openperf
- author association: MEMBER
- draft: no
- assignees: none
- labels: agents, size: S, P1, rating: 🧂 unranked krab, merge-risk: 🚨 session-state, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T12:58:46Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ### Summary - **Problem**: Issue #90944 reports that when a `sessions_yield`-paused subagent completes, raw child text is delivered directly to the DM channel before the parent's intended resume reply. Users see a duplicate/out-of-order message: child output a

### #80590 fix(codex): expose sandbox shell tools

- bucket: maintainer_owned
- author: steipete
- author association: MEMBER
- draft: no
- assignees: none
- labels: maintainer, size: M, extensions: codex, proof: sufficient, rating: 🦐 gold shrimp, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T13:10:35Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Expose OpenClaw sandbox-routed shell access to Codex as `sandbox_exec` and `sandbox_process` only for active non-Docker sandbox backends such as SSH. - Keep Codex native shell enabled and keep plain OpenClaw `exec` / `process` filtered from Codex

### #85878 fix(telegram): retain superseded draft previews

- bucket: maintainer_owned
- author: steipete
- author association: MEMBER
- draft: no
- assignees: none
- labels: channel: telegram, maintainer, size: XS, proof: sufficient, mantis: telegram-visible-proof, P1, rating: 🐚 platinum hermit, merge-risk: 🚨 message-delivery, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T13:11:07Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Summary: - Preserve Telegram draft previews that were superseded after a new generation already forced a new message. - Recreates #85825 on a maintainer branch because the original contributor branch no longer allows maintainer updates. Behavior addressed: Tel

### #88977 fix(agents): tolerate provider tool schema hook failures

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: agents, maintainer, size: M, extensions: codex, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 compatibility, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T13:11:21Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - keep provider `normalizeToolSchemas` and `inspectToolSchemas` strict by default for doctor/check validation - pass assistant-only warn mode through embedded attempts, Codex dynamic tools, and compaction so hook failures log and keep current runtim

### #89132 fix(agent-core): guard tool lookup descriptors

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: maintainer, size: S, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 compatibility, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T13:11:30Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Guard low-level agent-core tool lookup against unreadable sibling tool names. - Fail closed to sequential batch execution when the matched tool's `executionMode` descriptor is unreadable. - Add regressions for both descriptor cases so a bad tool d

### #89348 refactor: add memory session sync identity API

- bucket: maintainer_owned
- author: jalehman
- author association: MEMBER
- draft: no
- assignees: none
- labels: docs, extensions: memory-core, maintainer, size: L, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T13:11:55Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## What Adds identity-based memory session sync targets so memory-core can sync runtime transcripts by storage-neutral session identity while keeping deprecated `sessionFiles` compatibility for canonical OpenClaw transcript paths. ## Why Path 3 needs memory sy

### #90262 fix(agents): guard tool definition schemas

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: agents, maintainer, size: S, P2, rating: 🐚 platinum hermit, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T13:12:31Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - guard agent tool definition adaptation against unreadable `parameters` getters - guard client tool definition adaptation against unreadable `function.parameters` getters - fall back to the minimal empty object schema instead of crashing the adapte

### #90505 fix(agents): finalize killed subagent task rows via maintenance to avoid kill-vs-complete race

- bucket: maintainer_owned
- author: openperf
- author association: MEMBER
- draft: no
- assignees: none
- labels: agents, size: L, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 session-state, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T13:16:51Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ### Summary - **Problem**: After `markSubagentRunTerminated` kills a subagent run, the mirrored task rows stay stuck in `running` indefinitely. The linked report describes both the parent `runtime='subagent'` row and the child `runtime='cli'` row for the same

### #39386 fix(gateway): forward child session node events to spawnedBy subscribers

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: gateway, maintainer, size: S, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T13:55:08Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Describe the problem and fix in 2–5 bullets: - Problem: gateway node subscriptions are keyed by exact `sessionKey`, so child-session node events disappear when only the parent session is subscribed. - Why it matters: spawned agent chat activity can

### #67820 fix(whatsapp): reuse active QR and preserve runtime warnings

- bucket: maintainer_owned
- author: mcaxtr
- author association: MEMBER
- draft: no
- assignees: none
- labels: docs, channel: whatsapp-web, gateway, maintainer, size: L, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T14:01:06Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Describe the problem and fix in 2–5 bullets: - Problem: even after the QR preflight contract, WhatsApp still had two remaining coherence gaps: the gateway could ignore an already-active QR until after preflight, and runtime warnings could disappear

### #68236 test(auth): add oauth e2e regression coverage

- bucket: maintainer_owned
- author: ngutman
- author association: MEMBER
- draft: no
- assignees: none
- labels: gateway, maintainer, size: L, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 automation, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T14:03:43Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - add an OAuth auth-regressions e2e suite covering CLI and gateway auth-status surfaces - add targeted regression tests for stale auth order, shared refresh coordination, unhealthy status persistence, and recovery - document the deterministic OAuth

### #87697 fix(auth): clear stale provider cooldowns after reauth

- bucket: maintainer_owned
- author: ferminquant
- author association: CONTRIBUTOR
- draft: no
- assignees: altaywtf
- labels: commands, agents, size: L, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, merge-risk: 🚨 session-state, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T14:08:38Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Allow billing cooldown probes when configured model fallbacks share the same unavailable auth-profile path, instead of treating any configured fallback as a real recovery path. - Clear stale provider auth-profile cooldown/disabled state after succ

### #88780 fix(check): clean ingress queue lint blockers

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: maintainer, size: XS, P3, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T14:09:23Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Summary: - Remove lint-invalid casts/generic JSON helper in the SQLite ingress queue implementation. - Remove an empty object-spread fallback in plugin state queue construction. - Leaves the pending duplicate test narrowing to current `main`, where that fix ha

### #88880 fix(agents): project nullable tool schemas for providers

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: agents, maintainer, size: L, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 compatibility, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T14:09:36Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - project nullable and string-literal tool schemas into provider-compatible shapes before sending runtime tool schemas to providers - keep unsupported dynamic-schema diagnostics on the raw serialized schema so projection cannot hide a blocker - pres

### #88881 fix(agents): trim media tools in lean mode

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: docs, gateway, agents, maintainer, size: M, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 compatibility, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T14:09:43Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - trim additional heavyweight optional tools from `localModelLean`: media generation, voice, and PDF alongside browser, cron, and message - keep image-understanding available so lean local agents can still inspect inbound images when configured - do

### #89052 fix(agents): guard MCP inventory display fields

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: agents, maintainer, size: S, P2, rating: 🧂 unranked krab, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T14:10:28Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Guard bundled MCP effective-inventory display field reads after runtime schema projection. - Preserve healthy MCP inventory entries when optional `label`, `description`, or `displaySummary` accessors throw. - Add focused regression coverage for un

### #89323 fix(web-ui): skip hidden subagent picker pages

- bucket: maintainer_owned
- author: giodl73-repo
- author association: MEMBER
- draft: no
- assignees: none
- labels: app: web-ui, maintainer, size: M, proof: sufficient, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T14:11:22Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Fixes #89249. Summary: - Advance the chat session picker through raw `sessions.list` pages that add no visible rows after hidden spawn-child subagent filtering. - Stop showing raw total counts when the picker is filtering out loaded rows, avoiding misleading s

### #89426 docs: document node capability policy contracts

- bucket: maintainer_owned
- author: steipete
- author association: MEMBER
- draft: no
- assignees: none
- labels: gateway, agents, maintainer, size: XL, P3, rating: 🧂 unranked krab, status: 📣 needs proof, merge-risk: 🚨 other
- gitcrawl snapshot updated: 2026-06-15T14:12:05Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Document Gateway plugin node capability surface contracts around shortest-TTL indexing, scoped storage keys, scoped URL canonicalization, and sliding grant expiry. - Document Gateway plugin node invoke policy contracts around dangerous command fai

### #89458 fix(agents): guard system prompt tool reports

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: agents, maintainer, size: M, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look, merge-risk: 🚨 other
- gitcrawl snapshot updated: 2026-06-15T14:12:39Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Hardens `buildSystemPromptReport` so diagnostic tool reporting cannot throw when a tool descriptor exposes throwing `name`, `description`, `label`, `parameters`, or hostile schema `properties` accessors/traps. - Preserves existing hashes, schema c

### #89463 fix(plugins): quarantine unreadable plugin tools

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: maintainer, size: S, P2, rating: 🦞 diamond lobster, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T14:12:48Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Hardens plugin tool registry assembly so getter-backed plugin tool fields are reported as malformed instead of crashing resolution. - Keeps valid sibling plugin tools available when one plugin returns an unreadable tool descriptor. - Makes plugin

### #89529 fix(provider): harden unsupported schema keyword stripping

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: agents, maintainer, size: M, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T14:13:23Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Harden shared unsupported schema keyword stripping against hostile schema arrays and objects from provider/plugin compatibility paths. - Avoid source array traversal methods, snapshot array length once, and collapse only schema-valued unreadable b
