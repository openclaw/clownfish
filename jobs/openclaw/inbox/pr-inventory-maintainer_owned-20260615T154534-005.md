---
repo: openclaw/openclaw
cluster_id: pr-inventory-maintainer_owned-20260615T154534-005
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
  - "#55828"
  - "#63123"
  - "#59835"
  - "#62657"
  - "#89123"
cluster_refs:
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
  - "#55828"
  - "#63123"
  - "#59835"
  - "#62657"
  - "#89123"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "This is a PR inventory classification shard, not a dedupe cluster. Classify each PR independently and do not invent a shared canonical."
notes: "Generated from local gitcrawl open PR inventory on 2026-06-15T15:45:34.195Z; bucket=maintainer_owned; no GitHub mutation is possible in plan mode."
---

# PR Inventory maintainer_owned 5

This is a high-volume classification shard over open pull requests. It is not a dedupe cluster.

## Goal

Hydrate live GitHub state for each listed PR and emit one conservative action per PR. Prefer `keep_related`, `keep_independent`, `needs_human`, or `route_security`. Emit close-style planned actions only when fresh live evidence makes the PR boringly superseded, duplicate, abandoned, or low-signal under existing policies. For `target_updated_at`, copy only the hydrated value from the Cluster preflight artifact; do not use gitcrawl snapshot timestamps from this job body.

## Inventory

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

### #55828 feat(msteams): add native plugin interactivity parity

- bucket: maintainer_owned
- author: Evizero
- author association: MEMBER
- draft: no
- assignees: none
- labels: docs, channel: msteams, maintainer, size: XL, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T14:06:13Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary DO NOT MERGE YET -- for review - Problem: OpenClaw's Teams channel could send messages/cards, but the native plugin interactivity path still stopped short of Teams. The Codex app-server Teams work therefore had to rely on a command bridge instead of

### #63123 feat(ios): add background alive beacon support

- bucket: maintainer_owned
- author: ngutman
- author association: MEMBER
- draft: no
- assignees: none
- labels: app: ios, gateway, maintainer, size: L, rating: 🧂 unranked krab, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-14T14:06:21Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: iOS background wakes did not give the gateway a durable, acked way to record that a node was recently alive unless a live websocket reconnect happened. - Why it matters: operators could not distinguish "currently connected" from "recently

### #59835 fix(cron): validate custom session ids

- bucket: maintainer_owned
- author: eleqtrizit
- author association: MEMBER
- draft: no
- assignees: none
- labels: gateway, maintainer, size: S, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T14:07:43Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Reject invalid `session:<id>` cron targets that contain path separator characters or NULs - Reuse the same validation when resolving the isolated cron run `sessionKey` ## Changes - Added a shared cron custom-session validator in `src/cron/normaliz

### #62657 fix(channel): guard setup catalog lookups

- bucket: maintainer_owned
- author: eleqtrizit
- author association: MEMBER
- draft: no
- assignees: none
- labels: commands, maintainer, size: L, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T14:08:15Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Guards the remaining channel-setup catalog lookups so setup-scoped plugin resolution only considers non-workspace entries by default - Keeps bundled channel setup behavior consistent across preload, discovery, and scoped reload paths ## Changes - 

### #89123 refactor: route transcript writers through session seam

- bucket: maintainer_owned
- author: jalehman
- author association: MEMBER
- draft: no
- assignees: none
- labels: gateway, scripts, agents, maintainer, size: M, P2, rating: 🧂 unranked krab, merge-risk: 🚨 automation, merge-risk: 🚨 session-state, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T14:16:38Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## What Path 3 / PR 3.1b transcript writers routes the core transcript writer/append/update helpers through the session accessor seam while preserving the current file-backed transcript behavior. Refs #88838. ## Why This keeps caller modernization separated fr

