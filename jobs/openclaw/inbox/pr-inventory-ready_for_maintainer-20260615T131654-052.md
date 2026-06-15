---
repo: openclaw/openclaw
cluster_id: pr-inventory-ready_for_maintainer-20260615T131654-052
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
  - "#91963"
  - "#88504"
  - "#88550"
  - "#88551"
  - "#88683"
  - "#88709"
  - "#88726"
  - "#91376"
  - "#91427"
  - "#92037"
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
  - "#92521"
  - "#92574"
  - "#91408"
  - "#91955"
  - "#92610"
cluster_refs:
  - "#91963"
  - "#88504"
  - "#88550"
  - "#88551"
  - "#88683"
  - "#88709"
  - "#88726"
  - "#91376"
  - "#91427"
  - "#92037"
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
  - "#92521"
  - "#92574"
  - "#91408"
  - "#91955"
  - "#92610"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "This is a PR inventory classification shard, not a dedupe cluster. Classify each PR independently and do not invent a shared canonical."
notes: "Generated from local gitcrawl open PR inventory on 2026-06-15T13:16:54.483Z; bucket=ready_for_maintainer; no GitHub mutation is possible in plan mode."
---

# PR Inventory ready_for_maintainer 52

This is a high-volume classification shard over open pull requests. It is not a dedupe cluster.

## Goal

Hydrate live GitHub state for each listed PR and emit one conservative action per PR. Prefer `keep_related`, `keep_independent`, `needs_human`, or `route_security`. Emit close-style planned actions only when fresh live evidence makes the PR boringly superseded, duplicate, abandoned, or low-signal under existing policies. For `target_updated_at`, copy only the hydrated value from the Cluster preflight artifact; do not use gitcrawl snapshot timestamps from this job body.

## Inventory

### #91963 fix(auto-reply): defer foreground fence until delivery

- bucket: ready_for_maintainer
- author: xmoxmo
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 message-delivery, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-10T16:06:42Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fixes #91914. This defers foreground reply fence creation until a buffered dispatch first attempts visible/source delivery, instead of creating the fence as soon as the inbound dispatch enters `dispatchInboundMessageWithBufferedDispatcher()`. The pr

### #88504 feat(memory): add multi-slot memory role architecture

- bucket: ready_for_maintainer
- author: kklouzal
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, gateway, extensions: memory-lancedb, cli, commands, agents, size: XL, extensions: qa-lab, extensions: memory-wiki, plugin: migrate-hermes, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, merge-risk: 🚨 availability, status: 👀 ready for maintainer look, feature: ✨ showcase
- gitcrawl snapshot updated: 2026-06-10T16:19:28Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary This PR adds a purpose-specific memory role-slot contract so memory plugins can compose instead of replacing each other through one global `plugins.slots.memory` selector. What changes: - Adds canonical memory role slots: `memory.recall`, `memory.co

### #88550 fix(codex-supervisor): disable app-server websocket compression

- bucket: ready_for_maintainer
- author: imwyvern
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS, proof: sufficient, P2, rating: 🧂 unranked krab, merge-risk: 🚨 automation, merge-risk: 🚨 compatibility, status: ⏳ waiting on author, extensions: codex-supervisor
- gitcrawl snapshot updated: 2026-06-10T16:20:23Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - disable `permessage-deflate` on Codex Supervisor app-server WebSocket clients - add a Unix socket handshake regression test that verifies the client does not offer WebSocket compression ## Verification - `node scripts/run-vitest.mjs extensions/cod

### #88551 fix(agents): skip auth gate for CLI-owned transport

- bucket: ready_for_maintainer
- author: yu-xin-c
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: S, proof: supplied, proof: sufficient, P2, rating: 🦞 diamond lobster, merge-risk: 🚨 auth-provider, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-10T16:20:27Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ### Summary - Skip the model-fallback auth cooldown gate for explicitly configured CLI agent runtimes such as `anthropic/*` with `agentRuntime.id: "claude-cli"`. - Keep the attempt-level auth-profile selection guard so CLI-owned transports preserve only `authP

### #88683 Reject unpublished npm targets consistently in update dry-run

- bucket: ready_for_maintainer
- author: alexzhu0
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: cli, size: XL, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-10T17:43:23Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Fixes #87320 ## User-facing bug `openclaw update --tag <version> --dry-run` could report a clean package-update plan when the requested OpenClaw version was not actually available from the npm registry that the update would use. Running the same update without

### #88709 fix(auth): cooldown inline api key billing failures

- bucket: ready_for_maintainer
- author: MertBasar0
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: L, proof: supplied, proof: sufficient, P1, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-10T17:43:48Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - record provider-level cooldown state for inline `models.providers.<id>.apiKey` credentials - block literal, env-marker, and env SecretRef inline API keys while provider-level auth/billing cooldown is active - keep healthy stored auth profiles avai

### #88726 [codex] Read exact X posts via FxTwitter

- bucket: ready_for_maintainer
- author: SnowBelt
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, commands, size: L, extensions: qa-lab, proof: supplied, proof: sufficient, extensions: xai, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 automation, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-10T17:44:13Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Add a key-free FxTwitter exact-post reader for public X/Twitter status URLs and numeric status IDs. - Route exact post references through FxTwitter before falling back to xAI-backed broader `x_search`. - Keep generic X search on the existing xAI a

### #91376 fix(docs): lint workspace templates

- bucket: ready_for_maintainer
- author: 849261680
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, scripts, commands, agents, size: S, proof: supplied, P3, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-10T18:43:01Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Extends the existing markdownlint docs lane to cover shipped workspace template markdown. - Includes `src/agents/templates/HEARTBEAT.md` in markdownlint coverage because it is part of the workspace template pack. - Removes the broad `docs/referenc

### #91427 fix(openai-completions): reject provider empty stop replies

- bucket: ready_for_maintainer
- author: 849261680
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: M, proof: supplied, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-10T19:19:33Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Fixes OpenAI-compatible chat completion streams that finish with `finish_reason: "stop"` after emitting no assistant output, which currently reaches channels as `content: []` and a silent blank reply. - Applies the guard to both OpenAI completions

### #92037 feat(cron): on-exit schedule — wake on a watched command's exit

- bucket: ready_for_maintainer
- author: anagnorisis2peripeteia
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: web-ui, gateway, cli, agents, size: XL, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, merge-risk: 🚨 security-boundary, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-11T01:11:04Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Adds an **`on-exit` cron schedule kind**: a job that fires once when a watched shell command exits, starting a fresh agent turn in the originating conversation. It's "a #83738 cron wake, triggered by a process exit instead of by the tool call" — it 

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

### #92521 fix(agents): preserve runtime tool inheritance tokens

- bucket: ready_for_maintainer
- author: yu-xin-c
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, agents, size: M, proof: supplied, proof: sufficient, P1, rating: 🐚 platinum hermit, merge-risk: 🚨 security-boundary, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-13T07:04:07Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Preserve runtime-materialized allowlist tokens when spawned sessions inherit an effective parent tool surface. - Filter deferred MCP/LSP selectors through the same effective profile/agent/group/subagent/inherited policy layers before writing child

### #92574 test(browser): cover action-input CLI request bodies

- bucket: ready_for_maintainer
- author: yu-xin-c
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: M, proof: supplied, proof: sufficient, P3, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-13T07:15:03Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fixes #83877. ## Real Behavior Proof Behavior addressed: Browser action-input CLI commands now have focused coverage for element request bodies, blank-ref validation, navigate/resize dispatch, fill/evaluate act bodies, and upload hook payloads. Real

### #91408 feat(channels/acp): support ACP bindings for direct-message peers

- bucket: ready_for_maintainer
- author: pablospe
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, channel: telegram, gateway, scripts, size: L, proof: supplied, proof: sufficient, mantis: telegram-visible-proof, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, merge-risk: 🚨 message-delivery, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-13T07:22:57Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Motivation OpenClaw can route a conversation to an **ACP backend** — an external agent runtime (the `acpx` agents: claude-code, codex, gemini, droid, opencode, or any custom ACP runtime) — via a `type:"acp"` binding. On Telegram, a `type:"acp"` binding curr

### #91955 fix(agents): keep BOOTSTRAP.md pending on preseeded managed workspaces [AI-assisted]

- bucket: ready_for_maintainer
- author: luyao618
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: M, proof: sufficient, P1, rating: 🦐 gold shrimp, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-13T07:23:53Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: > 🤖 AI-assisted (built with Hermes orchestration; reviewer = 麻酱, code review = Codex CLI). Test level: fully tested. Prompt summary available on request. ## Summary - Problem: On a managed / GitOps / operator-style deployment (e.g. Kubernetes with a PVC-backe

### #92610 fix: include archived transcript lineage in session usage detail

- bucket: ready_for_maintainer
- author: harjothkhara
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XL, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 session-state, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-13T07:24:45Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fixes #46252. This fixes per-session usage/cost **detail** for sessions that have an active `<id>.jsonl` transcript plus same-stem archives such as `<id>.jsonl.reset.<timestamp>` or `<id>.jsonl.deleted.<timestamp>` (created by `/new` and `/reset`). 

