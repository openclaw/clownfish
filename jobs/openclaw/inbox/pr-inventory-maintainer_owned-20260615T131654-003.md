---
repo: openclaw/openclaw
cluster_id: pr-inventory-maintainer_owned-20260615T131654-003
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
  - "#88382"
  - "#88884"
  - "#92886"
  - "#88875"
  - "#88878"
  - "#88936"
  - "#90708"
  - "#91483"
  - "#91573"
  - "#92356"
  - "#92837"
  - "#90963"
  - "#89322"
  - "#89323"
  - "#89324"
  - "#89327"
  - "#89333"
  - "#89340"
  - "#89346"
  - "#89353"
  - "#89360"
  - "#89381"
  - "#89384"
  - "#89426"
  - "#89463"
  - "#39386"
  - "#66968"
  - "#67421"
  - "#67816"
  - "#67820"
  - "#68236"
  - "#68289"
  - "#89585"
  - "#89587"
  - "#89597"
  - "#89611"
  - "#89614"
  - "#89619"
  - "#89620"
  - "#89630"
cluster_refs:
  - "#88382"
  - "#88884"
  - "#92886"
  - "#88875"
  - "#88878"
  - "#88936"
  - "#90708"
  - "#91483"
  - "#91573"
  - "#92356"
  - "#92837"
  - "#90963"
  - "#89322"
  - "#89323"
  - "#89324"
  - "#89327"
  - "#89333"
  - "#89340"
  - "#89346"
  - "#89353"
  - "#89360"
  - "#89381"
  - "#89384"
  - "#89426"
  - "#89463"
  - "#39386"
  - "#66968"
  - "#67421"
  - "#67816"
  - "#67820"
  - "#68236"
  - "#68289"
  - "#89585"
  - "#89587"
  - "#89597"
  - "#89611"
  - "#89614"
  - "#89619"
  - "#89620"
  - "#89630"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "This is a PR inventory classification shard, not a dedupe cluster. Classify each PR independently and do not invent a shared canonical."
notes: "Generated from local gitcrawl open PR inventory on 2026-06-15T13:16:54.471Z; bucket=maintainer_owned; no GitHub mutation is possible in plan mode."
---

# PR Inventory maintainer_owned 3

This is a high-volume classification shard over open pull requests. It is not a dedupe cluster.

## Goal

Hydrate live GitHub state for each listed PR and emit one conservative action per PR. Prefer `keep_related`, `keep_independent`, `needs_human`, or `route_security`. Emit close-style planned actions only when fresh live evidence makes the PR boringly superseded, duplicate, abandoned, or low-signal under existing policies. For `target_updated_at`, copy only the hydrated value from the Cluster preflight artifact; do not use gitcrawl snapshot timestamps from this job body.

## Inventory

### #88382 fix(config): compare size-drop guard against canonical config

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: maintainer, size: S, P1, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T04:01:11Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fixes #71865. - compare config size-drop protection against the canonical previous source config for valid existing files, instead of raw editor-format bytes - keep the raw-byte fallback for invalid existing configs so malformed/clobbered files rema

### #88884 fix(agents): trim web tools in lean mode

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: docs, gateway, agents, maintainer, size: L, extensions: openai, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-14T04:50:36Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - extend `localModelLean` so it trims `web_search`, `web_fetch`, and `x_search` along with `browser`, `cron`, and `message` - keep explicit override behavior for exact, grouped, and wildcard web preserves (`group:web`, `web_*`) while suppressing nat

### #92886 docs: add Plugin Inspector development and CI workflow

- bucket: maintainer_owned
- author: fuller-stack-dev
- author association: MEMBER
- draft: no
- assignees: none
- labels: docs, size: XS, triage: low-signal-docs, triage: docs-discoverability, proof: supplied, P3, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T05:59:55Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Add a canonical Plugin Inspector guide for plugin-author development, CI, trusted runtime capture, beta-checkout comparison, reports, and plugin-shipped skill proof. - Reorder the plugin testing guide so external authors see package, runtime, and 

### #88875 docs: document markdown and shared helpers

- bucket: maintainer_owned
- author: steipete
- author association: MEMBER
- draft: no
- assignees: none
- labels: app: web-ui, gateway, cli, commands, agents, maintainer, size: XL, P3, rating: 🧂 unranked krab, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T06:05:50Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Continue the post-#88554 inline-comment pass on a fresh PR branch. - Add public/API docs and invariant notes for markdown, shared helper, channel, gateway, plugin SDK, logging, restart, update, install, port-probe, PATH, JSON byte, secure-random, 

### #88878 fix(agents): project cron tool schemas for providers

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: none
- labels: agents, maintainer, size: M, P2, rating: 🦪 silver shellfish, merge-risk: 🚨 compatibility, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-14T07:17:03Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - project runtime tool schemas into provider-facing OpenAPI-friendly shapes by dropping nullable composition wrappers and converting string literal unions to enums - keep raw TypeBox validation intact so `null` clear sentinels still reach cron runti

### #88936 fix(plugins): skip broken web provider factories

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: maintainer, size: S, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T07:17:31Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - skips bundled web provider factories that throw during public-artifact discovery - keeps healthy sibling providers active when another selected plugin's factory is broken - preserves the existing `null` fallback path for modules that simply do not

### #90708 test: stabilize maintainer prepare baseline

- bucket: maintainer_owned
- author: giodl73-repo
- author association: MEMBER
- draft: no
- assignees: none
- labels: channel: slack, channel: telegram, maintainer, size: S, P2, rating: 🦪 silver shellfish, merge-risk: 🚨 availability, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T08:13:16Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Stabilizes the local maintainer prepare baseline failures seen while preparing #85791. - updates the node-host allow-always coverage test to use a supported direct executable fixture instead of a shell-wrapped interpreter command that is now rejecte

### #91483 docs: add maturity test skeleton

- bucket: maintainer_owned
- author: RomneyDa
- author association: MEMBER
- draft: no
- assignees: steipete
- labels: docs, maintainer, size: XS, extensions: qa-lab, P3, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T09:09:11Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - add a short `docs/reference/maturity-tests.md` page for maturity scorecard coverage - describe the current source files, scenario coverage IDs, and `qa coverage` workflow - link the page from QA/testing docs, docs navigation, labeler metadata, and

### #91573 fix(gateway): hide stream-error sentinel from chat history

- bucket: maintainer_owned
- author: mushuiyu886
- author association: CONTRIBUTOR
- draft: no
- assignees: vincentkoc
- labels: gateway, size: S, proof: supplied, proof: sufficient, P3, rating: 🦞 diamond lobster, merge-risk: 🚨 message-delivery, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T09:54:04Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - **Problem:** Chat history could display the canonical stream-error sentinel `[assistant turn failed before producing content]` as a visible assistant row before the real assistant response. - **Solution:** Treat a pure sentinel assistant message a

### #92356 fix(heartbeat): skip reasoning payloads when selecting heartbeat reply

- bucket: maintainer_owned
- author: tangtaizong666
- author association: CONTRIBUTOR
- draft: no
- assignees: vincentkoc
- labels: size: S, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 message-delivery, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T09:54:05Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Heartbeat could deliver the model's reasoning/thinking text to the channel as the user-visible reply even when `includeReasoning` is false. - `resolveHeartbeatReplyPayload` (`src/auto-reply/heartbeat-reply-payload.ts`) returns the last payload wit

### #92837 fix(android): show live chat context usage

- bucket: maintainer_owned
- author: Tosko4
- author association: CONTRIBUTOR
- draft: no
- assignees: vincentkoc
- labels: app: android, size: M, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 session-state, status: 👀 ready for maintainer look, proof: 📸 screenshot
- gitcrawl snapshot updated: 2026-06-14T09:54:09Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Fixes the Android chat context meter so it renders live session context usage from gateway `totalTokens` / `contextTokens` metadata instead of mapping the thinking preset to a fixed percentage. - Keeps the compact thinking control visible by showi

### #90963 fix(codex): strengthen agent soul adherence

- bucket: maintainer_owned
- author: hannesrudolph
- author association: MEMBER
- draft: no
- assignees: none
- labels: size: XS, extensions: codex, P3, rating: 🦞 diamond lobster, status: 👀 ready for maintainer look, merge-risk: 🚨 other
- gitcrawl snapshot updated: 2026-06-14T11:15:21Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Strengthen the existing Codex app-server `AGENT_SOUL` preamble in one line. - Name the failure mode this is meant to reduce: after longer interactions, persona and collaboration traits from workspace soul files can fade and the model can drift bac

### #89322 fix(ollama): skip unreadable tool descriptors

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: maintainer, size: S, extensions: ollama, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T11:32:12Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Summary - Guard Ollama tool name collection and tools payload projection against unreadable tool descriptors. - Preserve healthy sibling tools when a malformed descriptor is skipped. - Add focused regression coverage for unreadable descriptors in the Ollama pr

### #89323 fix(web-ui): skip hidden subagent picker pages

- bucket: maintainer_owned
- author: giodl73-repo
- author association: MEMBER
- draft: no
- assignees: none
- labels: app: web-ui, maintainer, size: M, proof: sufficient, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T11:32:15Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Fixes #89249. Summary: - Advance the chat session picker through raw `sessions.list` pages that add no visible rows after hidden spawn-child subagent filtering. - Stop showing raw total counts when the picker is filtering out loaded rows, avoiding misleading s

### #89324 fix(xai): skip unreadable tool payload entries

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: maintainer, size: S, proof: sufficient, extensions: xai, P2, rating: 🦞 diamond lobster, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T11:32:18Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Summary: - Guard xAI tool payload compatibility against unreadable tool/function/strict accessors. - Drop only unreadable tool payload entries while preserving healthy siblings. - Keep existing xAI `strict` stripping behavior for readable function tools. Verif

### #89327 fix(sessions): guard agent tool definition mirroring

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: agents, maintainer, size: S, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T11:32:22Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Summary: - Guard `createToolDefinitionFromAgentTool()` against unreadable AgentTool descriptor fields. - Use the base-tool registry key as the fallback name when mirroring base tool overrides. - Preserve readable metadata and fall back to an empty object param

### #89333 fix(tools): guard planner descriptor reads

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: maintainer, size: S, P2, rating: 🦞 diamond lobster, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T11:32:28Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Snapshot tool descriptor planning fields once before sorting, duplicate checks, and missing-executor reporting. - Convert unreadable or invalid descriptor names/sort keys into `ToolPlanContractError` instead of leaking arbitrary getter errors. - K

### #89340 fix(agents): guard bootstrap tool name lookup

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: agents, maintainer, size: S, proof: sufficient, P2, rating: 🦞 diamond lobster, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T11:32:35Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - guard embedded-attempt workspace-bootstrap file-access detection against unreadable raw tool names - keep bootstrap routing able to see a healthy `read` sibling after a malformed descriptor is skipped later by schema projection ## Verification Beh

### #89346 fix(agents): guard compact reserved tool names

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: agents, maintainer, size: XS, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T11:32:43Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - collect compact bundled-runtime reserved tool names through a guarded helper so unreadable tool-name accessors cannot abort setup - keep readable sibling names reserved for MCP/LSP collision avoidance while leaving malformed descriptors for the ex

### #89353 fix(plugin-sdk): guard provider schema inspection

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: maintainer, size: S, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T11:32:54Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Fixes a provider schema inspection crash when a nested tool-parameter schema property is unreadable. - Converts throwing child schema getters into stable unsupported-schema diagnostics. - Keeps sibling schema traversal intact for Gemini/DeepSeek p

### #89360 refactor: add QMD session artifact identity mapping

- bucket: maintainer_owned
- author: jalehman
- author association: MEMBER
- draft: no
- assignees: none
- labels: extensions: memory-core, maintainer, size: L, P2, rating: 🧂 unranked krab, merge-risk: 🚨 session-state, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T11:32:59Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## What Adds an internal QMD session artifact identity mapping so generated QMD Markdown session artifacts resolve back to stable transcript memory/session identity before deprecated filename fallback. ## Why Path 3 needs QMD search hits to stop treating gener

### #89381 fix(plugin-sdk): guard provider tool schema traversal

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: maintainer, size: L, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T11:33:30Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary What problem does this PR solve? - Provider tool-schema compatibility hooks could throw while walking plugin-provided schemas with hostile accessors or proxy arrays. - A single malformed schema could abort provider normalization/inspection before di

### #89384 fix(plugins): isolate unreadable plugin tool descriptors

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: maintainer, size: M, proof: sufficient, P2, rating: 🦞 diamond lobster, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T11:33:40Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary What problem does this PR solve? - Plugin tool descriptor capture and callback wrapping could read plugin-owned tool fields before malformed-tool isolation ran. - A tool with a throwing `parameters`, `description`, `execute`, `label`, or `displaySum

### #89426 docs: document node capability policy contracts

- bucket: maintainer_owned
- author: steipete
- author association: MEMBER
- draft: no
- assignees: none
- labels: gateway, agents, maintainer, size: XL, P3, rating: 🦪 silver shellfish, status: 📣 needs proof, merge-risk: 🚨 other
- gitcrawl snapshot updated: 2026-06-14T12:15:57Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Document Gateway plugin node capability surface contracts around shortest-TTL indexing, scoped storage keys, scoped URL canonicalization, and sliding grant expiry. - Document Gateway plugin node invoke policy contracts around dangerous command fai

### #89463 fix(plugins): quarantine unreadable plugin tools

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: maintainer, size: S, P2, rating: 🦞 diamond lobster, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T12:16:56Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Hardens plugin tool registry assembly so getter-backed plugin tool fields are reported as malformed instead of crashing resolution. - Keeps valid sibling plugin tools available when one plugin returns an unreadable tool descriptor. - Makes plugin 

### #39386 fix(gateway): forward child session node events to spawnedBy subscribers

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: gateway, maintainer, size: S, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-14T13:08:22Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Describe the problem and fix in 2–5 bullets: - Problem: gateway node subscriptions are keyed by exact `sessionKey`, so child-session node events disappear when only the parent session is subscribed. - Why it matters: spawned agent chat activity can 

### #66968 style: apply oxfmt formatting to 16 files

- bucket: maintainer_owned
- author: visionik
- author association: MEMBER
- draft: no
- assignees: none
- labels: docs, app: web-ui, docker, agents, maintainer, size: S, rating: 🧂 unranked krab, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T13:13:56Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Running `pnpm format:check` found 16 files with formatting drift. Applied `pnpm format` (`oxfmt --write`). No logic changes. Files touched: - `.agents/skills/openclaw-secret-scanning-maintainer/scripts/secret-scanning.mjs` - `docs/style.css` - `extensions/acti

### #67421 feat: add per-agent web_fetch ssrf overrides

- bucket: maintainer_owned
- author: Takhoffman
- author association: MEMBER
- draft: no
- assignees: none
- labels: agents, maintainer, size: L, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T13:16:35Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary This PR makes `web_fetch` SSRF policy configurable per named agent at: ```json5 agents: { list: [ { id: "ops", tools: { web: { fetch: { ssrfPolicy: { dangerouslyAllowPrivateNetwork: true, allowedHostnames: ["matrix.home.arpa"], hostnameAllowlist: ["

### #67816 fix(whatsapp): finish timeout-aware setup and status handling

- bucket: maintainer_owned
- author: mcaxtr
- author association: MEMBER
- draft: no
- assignees: none
- labels: channel: whatsapp-web, maintainer, size: M, P1, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 security-boundary, merge-risk: 🚨 availability, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-14T13:20:49Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Describe the problem and fix in 2–5 bullets: - Problem: after #67815 landed the WhatsApp auth-stability foundation, a few timeout-sensitive WhatsApp surfaces were still not fully coherent. - Why it matters: setup finalization, logout, heartbeat, con

### #67820 fix(whatsapp): reuse active QR and preserve runtime warnings

- bucket: maintainer_owned
- author: mcaxtr
- author association: MEMBER
- draft: no
- assignees: none
- labels: docs, channel: whatsapp-web, gateway, maintainer, size: L, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-14T13:21:19Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Describe the problem and fix in 2–5 bullets: - Problem: even after the QR preflight contract, WhatsApp still had two remaining coherence gaps: the gateway could ignore an already-active QR until after preflight, and runtime warnings could disappear 

### #68236 test(auth): add oauth e2e regression coverage

- bucket: maintainer_owned
- author: ngutman
- author association: MEMBER
- draft: no
- assignees: none
- labels: gateway, maintainer, size: L, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 automation, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T13:24:34Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - add an OAuth auth-regressions e2e suite covering CLI and gateway auth-status surfaces - add targeted regression tests for stale auth order, shared refresh coordination, unhealthy status persistence, and recovery - document the deterministic OAuth 

### #68289 feat(workspace): add safe workspace reset command

- bucket: maintainer_owned
- author: Takhoffman
- author association: MEMBER
- draft: no
- assignees: none
- labels: cli, commands, maintainer, size: L, P2, rating: 🧂 unranked krab, merge-risk: 🚨 session-state, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T13:25:31Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - add a dedicated `openclaw workspace reset` command for safely trashing and reseeding a workspace - register the command in the core CLI and wire it through the existing onboard reset helpers - add focused command, helper, and CLI registration cove

### #89585 docs: document replay history normalization contract

- bucket: maintainer_owned
- author: steipete
- author association: MEMBER
- draft: no
- assignees: none
- labels: agents, maintainer, size: L, proof: sufficient, P3, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T13:44:25Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Document replay-history normalization, tool-result char estimation, usage accumulator, tool-name allowlist, embedded resource-loader, compaction successor transcript, and post-compaction loop guard contracts. - Document compaction runtime context 

### #89587 fix(plugins): wrap unreadable config schemas

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: maintainer, size: S, proof: sufficient, P2, rating: 🦞 diamond lobster, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T13:44:33Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - wrap plugin JSON-schema validation internals so unreadable schema objects report `invalid schema` instead of raw proxy errors - cover both cached and uncached validation paths for schema readability failures - keep the existing validation-result c

### #89597 fix: migrate QQBot credential backups to SQLite KV

- bucket: maintainer_owned
- author: steipete
- author association: MEMBER
- draft: no
- assignees: none
- labels: docs, cli, maintainer, size: L, channel: qqbot, P1, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T13:45:03Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - remove QQBot runtime imports from legacy JSON/JSONL cache files so session, known-user, and ref-index data are SQLite-only and disposable - add a QQBot setup/doctor legacy-state migration for credential backup JSON files into plugin SQLite KV - te

### #89611 fix(gateway): ignore unreadable tool action schemas

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: gateway, maintainer, size: XS, P2, rating: 🦞 diamond lobster, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T13:45:19Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Guard the `/tools/invoke` legacy `action` merge probe against unreadable tool schema `properties` access. - Preserve invocation when the schema cannot be inspected by treating it as not supporting the legacy top-level `action` shortcut. - Add HTTP

### #89614 fix(diagnostics): sanitize uncloneable model content

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: extensions: diagnostics-otel, agents, maintainer, size: L, proof: sufficient, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T13:45:27Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - make trusted diagnostic-event listener copies fall back to a bounded sanitizer when `structuredClone` cannot clone captured model content - keep model-call diagnostic capture from throwing when captured tool definitions fail clone, JSON serializat

### #89619 fix(agents): wrap bundle MCP schema setup errors

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: agents, maintainer, size: S, proof: sufficient, P2, rating: 🦞 diamond lobster, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T13:45:35Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Wrap draft-2020-12 bundle MCP schema setup failures with the existing `Invalid MCP draft-2020-12 JSON Schema` error prefix. - Preserve the original setup failure as `cause` and keep non-draft schemas on the SDK AJV validator path. - Add a regressi

### #89620 fix(agents): guard system prompt schema stats

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: agents, maintainer, size: S, proof: sufficient, P2, rating: 🦞 diamond lobster, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T13:45:39Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Guard system-prompt tool schema property counting against hostile schema accessors. - Preserve the existing schema JSON size/hash fallback when a schema cannot be stringified. - Add a regression for an unreadable `properties` getter in tool schema

### #89630 fix(shared): harden JSON schema default traversal

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: maintainer, size: M, P2, rating: 🦞 diamond lobster, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T13:45:53Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Harden shared JSON Schema traversal against unreadable schema maps during shape checks, TypeBox normalization, ref matching, and default projection. - Keep default application all-or-nothing by applying defaults to a cloned value and returning the

