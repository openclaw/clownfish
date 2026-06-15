---
repo: openclaw/openclaw
cluster_id: pr-inventory-ready_for_maintainer-20260615T154534-083
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
  - "#92147"
  - "#92165"
  - "#92174"
  - "#91693"
  - "#92196"
  - "#92176"
  - "#92376"
  - "#91923"
  - "#91967"
  - "#88581"
  - "#92477"
  - "#91828"
  - "#90089"
  - "#91807"
  - "#92178"
  - "#91499"
  - "#92484"
  - "#92594"
  - "#88180"
  - "#88885"
  - "#91481"
  - "#91600"
  - "#91870"
  - "#92491"
  - "#92495"
cluster_refs:
  - "#92147"
  - "#92165"
  - "#92174"
  - "#91693"
  - "#92196"
  - "#92176"
  - "#92376"
  - "#91923"
  - "#91967"
  - "#88581"
  - "#92477"
  - "#91828"
  - "#90089"
  - "#91807"
  - "#92178"
  - "#91499"
  - "#92484"
  - "#92594"
  - "#88180"
  - "#88885"
  - "#91481"
  - "#91600"
  - "#91870"
  - "#92491"
  - "#92495"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "This is a PR inventory classification shard, not a dedupe cluster. Classify each PR independently and do not invent a shared canonical."
notes: "Generated from local gitcrawl open PR inventory on 2026-06-15T15:45:34.210Z; bucket=ready_for_maintainer; no GitHub mutation is possible in plan mode."
---

# PR Inventory ready_for_maintainer 83

This is a high-volume classification shard over open pull requests. It is not a dedupe cluster.

## Goal

Hydrate live GitHub state for each listed PR and emit one conservative action per PR. Prefer `keep_related`, `keep_independent`, `needs_human`, or `route_security`. Emit close-style planned actions only when fresh live evidence makes the PR boringly superseded, duplicate, abandoned, or low-signal under existing policies. For `target_updated_at`, copy only the hydrated value from the Cluster preflight artifact; do not use gitcrawl snapshot timestamps from this job body.

## Inventory

### #92147 [codex] support Responses system prompts in instructions

- bucket: ready_for_maintainer
- author: skingford
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, agents, size: S, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-11T11:17:19Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Add an OpenAI Responses compatibility switch for providers that reject `system` or `developer` messages inside the Responses `input` array. When a configured Responses model sets `compat.systemPromptPlacement: "instructions"`, OpenClaw now sends `co

### #92165 fix(memory): show dreaming status without search

- bucket: ready_for_maintainer
- author: bennewell35
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, commands, size: M, proof: supplied, proof: sufficient, P2, rating: 🦐 gold shrimp, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-11T12:45:33Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Keeps `doctor.memory.status` reporting memory-core dreaming status even when the embedding memory-search manager is unavailable or disabled. - Carries the gateway dreaming payload through `probeGatewayMemoryStatus` so `openclaw doctor` can render 

### #92174 feat(aigateway): add AIgateway as a bundled model provider

- bucket: ready_for_maintainer
- author: RishiP2006
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, size: M, proof: supplied, proof: sufficient, dependencies-changed, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, merge-risk: 🚨 security-boundary, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-11T13:20:03Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Adds AIgateway (https://aigateway.sh) as a bundled, listed model provider plugin. AIgateway is an OpenAI-compatible AI model gateway: one API key, one endpoint (`https://api.aigateway.sh/v1`), many models behind vendor-prefixed ids. - Provider id: `

### #91693 fix(web_fetch): strip whitespace from URLs to prevent new URL() parse errors

- bucket: ready_for_maintainer
- author: whiteyzy
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: S, triage: needs-real-behavior-proof, P2, rating: 🌊 off-meta tidepool, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-11T13:52:09Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fixes #91651: LLMs may generate `web_fetch` URLs with accidental whitespace after the scheme (e.g. `"https:// docs.example.com/page"`) which causes `new URL()` to throw. The fix recovers only scheme-adjacent whitespace while preserving valid URL per

### #92196 fix(memory-search): stop hybrid fusion from discounting vector-only multimodal results

- bucket: ready_for_maintainer
- author: yetval
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: extensions: memory-core, size: S, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-12T03:14:17Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Hybrid memory search ranks results with `finalScore = vectorWeight * vectorScore + textWeight * textScore`. `mergeHybridResults` (`extensions/memory-core/src/memory/hybrid.ts`) applied that formula uniformly to every candidate. Image and audio chunk

### #92176 fix(media-understanding): resolve image model input from catalog, preserve explicit text-only (#92104)

- bucket: ready_for_maintainer
- author: zhangqueping
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: S, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-12T07:43:55Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fix model resolution so that models in `models.providers` without explicit `input` correctly inherit `["text","image"]` from the bundled catalog, rather than defaulting to `["text"]`. ## Root Cause `resolveProviderModelInput` defaults to `["text"]` 

### #92376 fix(approvals): distinguish expired, already-resolved, and unknown approval ids

- bucket: ready_for_maintainer
- author: Hidetsugu55
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, size: M, proof: supplied, proof: sufficient, mantis: telegram-visible-proof, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 compatibility, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-12T07:49:52Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Resolving an exec/plugin approval that was not currently pending previously collapsed three different situations — the approval **expired**, it was **already resolved**, or the id was **never seen** — into a single `unknown or expired approval id` error. Opera

### #91923 fix(ios): clean up notification settings state

- bucket: ready_for_maintainer
- author: zats
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: ios, size: S, proof: supplied, proof: sufficient, P3, rating: 🦞 diamond lobster, status: 👀 ready for maintainer look, proof: 🎥 video
- gitcrawl snapshot updated: 2026-06-12T10:04:35Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Replace notification settings string state with typed state. - Open the app notification Settings page via `UIApplication.openNotificationSettingsURLString`. > [!WARNING] > Local proof used beta macOS/Xcode. ## Real behavior proof - Behavior addre

### #91967 feat(ios): show OpenClaw logo in notch

- bucket: ready_for_maintainer
- author: zats
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: ios, size: S, proof: supplied, proof: sufficient, P3, rating: 🦐 gold shrimp, merge-risk: 🚨 compatibility, status: 👀 ready for maintainer look, proof: 📸 screenshot
- gitcrawl snapshot updated: 2026-06-12T10:04:38Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Show the existing `OpenClawIcon` in the iOS notch/Dynamic Island capture area. - Add `TopNotch` from `zats/TopNotch` pinned to `0.1.0`. - Present the notch view when the app scene becomes active. ## Proof <table> <tr> <td><img width="200" alt="IMG

### #88581 feat(commands): add /name to rename the current session from chat

- bucket: ready_for_maintainer
- author: BSG2000
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, size: M, proof: supplied, proof: sufficient, mantis: telegram-visible-proof, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 session-state, status: 👀 ready for maintainer look, proof: 🎥 video
- gitcrawl snapshot updated: 2026-06-12T14:43:09Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Adds a `/name <title>` chat slash command so users can name or rename the **current session** directly from any chat channel, instead of only through the web/admin session manager. This makes it easy to keep parallel sessions thematically distinct f

### #92477 fix: migrate watch app to single-target app

- bucket: ready_for_maintainer
- author: zats
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: ios, scripts, size: S, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look, proof: 📸 screenshot
- gitcrawl snapshot updated: 2026-06-12T15:14:24Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Migrates the watch app from the deprecated WatchKit extension product to a single-target watchOS app. - Keeps the watch app bundle id and UI/runtime behavior unchanged. - Moves the existing watch Swift sources into the single watch app target. | b

### #91828 Harden memory wiki bridge imports

- bucket: ready_for_maintainer
- author: mushuiyu886
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: M, extensions: memory-wiki, proof: supplied, proof: sufficient, P1, rating: 🦞 diamond lobster, merge-risk: 🚨 session-state, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-12T16:02:25Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Add bounded retry handling for transient `FsSafeError: path-mismatch` while writing imported memory-wiki source pages. - Coalesce concurrent bridge imported-source syncs for the same vault/config through index refresh while keying on bridge artifa

### #90089 fix(sandbox): use config-resolved workspace for skill sync fallback

- bucket: ready_for_maintainer
- author: wangmiao0668000666
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docker, agents, size: S, proof: supplied, proof: sufficient, P2, rating: 🦞 diamond lobster, merge-risk: 🚨 compatibility, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-12T16:17:24Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary When sandbox skill sync runs and no explicit `workspaceDir` is provided, `ensureSandboxWorkspaceLayout` was falling back to the hardcoded `DEFAULT_AGENT_WORKSPACE_DIR` (which only checks the `OPENCLAW_WORKSPACE_DIR` environment variable) instead of 

### #91807 feat(cli): support --file for image generate command

- bucket: ready_for_maintainer
- author: wangmiao0668000666
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, cli, size: S, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look, proof: 📸 screenshot
- gitcrawl snapshot updated: 2026-06-12T16:32:31Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary The `image generate` CLI command was missing the `--file` option that `image edit` already supported. This PR adds `--file` support to achieve parity, forwarding input files to the image generation runtime. Fixes #91734. ## Changes - `src/cli/capabi

### #92178 fix(gateway): guard formatAuditList against non-string items to prevent handshake trim crash (#90654)

- bucket: ready_for_maintainer
- author: wangmiao0668000666
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, scripts, size: M, proof: supplied, proof: sufficient, P1, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-12T16:40:54Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fixes #90654. CLI write commands (`openclaw message send`, `broadcast`, `probe`) crash the gateway WebSocket handshake with `TypeError: Cannot read properties of null/undefined (reading 'trim')` when the device pairing state contains non-string entr

### #91499 fix(cron): preserve scheduled turn tool policy [AI]

- bucket: ready_for_maintainer
- author: mmaps
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, agents, size: L, proof: supplied, proof: sufficient, P1, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, merge-risk: 🚨 security-boundary, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-12T18:30:56Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Preserve the effective creator tool surface when agent-created cron `agentTurn` jobs are persisted, so delayed scheduled turns keep the same tool boundary as the creator. - Apply the same cap to cron payload edits, gateway-scoped tool projection, 

### #92484 fix(mcp): reject blocked stdio env keys at write time and warn once per server

- bucket: ready_for_maintainer
- author: ayeshachohan
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, cli, commands, agents, size: M, proof: sufficient, P2, rating: 🦞 diamond lobster, merge-risk: 🚨 compatibility, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-12T21:07:22Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fixes #92474. `docs/cli/mcp.md` ("Stdio env safety filter") promises that interpreter-startup env keys such as `PYTHONPATH` and `NODE_OPTIONS` in a stdio MCP server's `env` block are **rejected with a configuration error**. The implementation instea

### #92594 [Bug]: ollama-cloud runtime fails DNS lookup for ai.ollama.com, while ollama/<model>:cloud works

- bucket: ready_for_maintainer
- author: zhangguiping-xydt
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: M, proof: supplied, proof: sufficient, extensions: ollama, P1, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-13T06:15:58Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Add an Ollama doctor contract that flags retired `models.providers.ollama-cloud.baseUrl` / `baseURL` values pointing at `https://ai.ollama.com`. - Migrate missing, blank, or retired canonical `baseUrl` values to `https://ollama.com`, while preserv

### #88180 fix(prompt): preserve IDENTITY defaults in system prompt

- bucket: ready_for_maintainer
- author: yozu
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: XS, proof: sufficient, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-13T06:34:31Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Preserve explicit IDENTITY.md expression defaults (naming, vibe, preferred emoji) in the system prompt when IDENTITY.md is present - Add a focused regression test for that prompt guidance text ## Changes - `src/agents/system-prompt.ts`: detect IDE

### #88885 fix(infra): wire session-delivery drain recovery guard onto the shared SQLite recovery_state column

- bucket: ready_for_maintainer
- author: Feelw00
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, size: M, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 session-state, merge-risk: 🚨 message-delivery, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-13T06:35:13Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - **Problem**: The session-delivery recovery queue blind-replays an unacked agent turn after a crash. `drainQueuedEntry` (`src/infra/session-delivery-queue-recovery.ts`) runs `await deliver(entry)` then `ackSessionDelivery`. If the agent turn re-run

### #91481 fix #89217: Surface approval delivery failures

- bucket: ready_for_maintainer
- author: mushuiyu886
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, size: M, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-13T06:44:32Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Fixes #89217. ## Summary - Track explicit exec/plugin approval delivery attempts separately from successful delivery. - Surface configured delivery failures as no-route approval responses instead of silently falling back to turn-source routing. - Add regressio

### #91600 fix(logging): resolve app-agent diagnostic transcripts

- bucket: ready_for_maintainer
- author: mushuiyu886
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: M, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 session-state, merge-risk: 🚨 availability, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-13T06:44:58Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Treat app-agent assistant transcript text as diagnostic context, not as recovery suppression by itself. - Keep reused and current-turn transcript-only app-agent sessions recovery-eligible once stale when no active diagnostic work remains. - Preser

### #91870 fix(github-copilot): claude-opus-4.8 is native 1M context + thinking (not 128K)

- bucket: ready_for_maintainer
- author: wyhgoodjob
- author association: FIRST_TIMER
- draft: no
- assignees: none
- labels: size: XS, proof: sufficient, extensions: github-copilot, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 auth-provider, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-13T06:45:44Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## What Fix `github-copilot/claude-opus-4.8` metadata so it reflects its real capabilities: **native 1M context window** + **adaptive thinking** (reasoning efforts `low/medium/high/xhigh/max`). - `model-metadata.ts`: add a `STATIC_MODEL_OVERRIDES` entry for `c

### #92491 fix(mcp): reject blocked stdio env keys at MCP config write time (fixes #92474)

- bucket: ready_for_maintainer
- author: zenglingbiao
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: S, proof: supplied, proof: sufficient, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 compatibility, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-13T06:46:49Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ### Summary - **Problem**: `openclaw mcp set` silently saves MCP server configs with blocked stdio env keys (e.g. `PYTHONPATH`). At every MCP operation — probe, doctor, status, and each spawn — the runtime resolver drops the key and logs a warning, flooding th

### #92495 fix(opencode): restore Zen model catalog

- bucket: ready_for_maintainer
- author: mushuiyu886
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XL, proof: supplied, proof: sufficient, extensions: opencode, P1, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-13T06:50:38Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Fix classification: Root-cause provider catalog and routing fix for the bundled `opencode` Zen provider. - Maintainer-ready confidence: High — the current PR head has fresh authenticated provider proof, family-specific live adapter proof, and focu

