---
repo: openclaw/openclaw
cluster_id: pr-inventory-needs_proof-20260615T223445-030
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
  - "#77639"
  - "#77690"
  - "#93056"
  - "#90117"
  - "#93064"
  - "#76058"
  - "#76077"
  - "#77091"
  - "#77148"
  - "#77550"
  - "#77619"
  - "#77828"
  - "#77946"
  - "#77961"
  - "#78635"
  - "#78696"
  - "#78730"
  - "#78742"
  - "#78817"
  - "#78898"
  - "#78958"
  - "#79044"
  - "#79137"
  - "#79181"
  - "#90172"
cluster_refs:
  - "#77639"
  - "#77690"
  - "#93056"
  - "#90117"
  - "#93064"
  - "#76058"
  - "#76077"
  - "#77091"
  - "#77148"
  - "#77550"
  - "#77619"
  - "#77828"
  - "#77946"
  - "#77961"
  - "#78635"
  - "#78696"
  - "#78730"
  - "#78742"
  - "#78817"
  - "#78898"
  - "#78958"
  - "#79044"
  - "#79137"
  - "#79181"
  - "#90172"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "This is a PR inventory classification shard, not a dedupe cluster. Classify each PR independently and do not invent a shared canonical."
notes: "Generated from local gitcrawl open PR inventory on 2026-06-15T22:34:45.792Z; bucket=needs_proof; no GitHub mutation is possible in plan mode."
---

# PR Inventory needs_proof 30

This is a high-volume classification shard over open pull requests. It is not a dedupe cluster.

## Goal

Hydrate live GitHub state for each listed PR and emit one conservative action per PR. Prefer `keep_related`, `keep_independent`, `needs_human`, or `route_security`. Emit close-style planned actions only when fresh live evidence makes the PR boringly superseded, duplicate, abandoned, or low-signal under existing policies. For `target_updated_at`, copy only the hydrated value from the Cluster preflight artifact; do not use gitcrawl snapshot timestamps from this job body.

## Inventory

### #77639 fix(discord): reset custom trigger sessions safely

- bucket: needs_proof
- author: yfge
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 session-state, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T19:58:04Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - emit reset hooks for matched custom resetTriggers like `!new` / `!reset` instead of only slash commands - rotate generated/default reset transcripts to the new session id while preserving only validated explicit `sessionFile` paths - add regressio

### #77690 [codex] Fix WebChat agent default model label

- bucket: needs_proof
- author: hyspacex
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: web-ui, size: S, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T19:58:35Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Summary - Resolve the WebChat model selector's `Default (...)` label from the active agent's configured primary model before falling back to session/global defaults. - Keep the active-session row fallback for default-selected sessions when the agents list has

### #93056 fix(agents): sync stale this.model snapshot after /model switch

- bucket: needs_proof
- author: samson910022
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: L, triage: needs-real-behavior-proof, mantis: telegram-visible-proof, P1, rating: 🧂 unranked krab, merge-risk: 🚨 auth-provider, merge-risk: 🚨 session-state, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T20:05:14Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fixes #92415 — AgentSession.this.model goes stale when /model switch writes to session store but the in-memory session never re-reads it. ## Root Cause pplyModelOverrideToSessionEntry() in model-overrides.ts writes a providerOverride/modelOverride

### #90117 fix: skip qmd zero-hit sync retry in memory_search

- bucket: needs_proof
- author: arkyu2077
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: extensions: memory-core, size: XS, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T20:05:32Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - skip the forced sync-and-retry path when `memory.backend = "qmd"` returns zero hits - keep the existing retry behavior for other backends - add a regression test covering qmd zero-hit searches ## Testing - pnpm vitest run extensions/memory-core/sr

### #93064 fix(memory): align session file counter denominator with indexer filter (fixes #77338)

- bucket: needs_proof
- author: liuhao1024
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: extensions: memory-core, size: XS, proof: supplied, P2, rating: 🦪 silver shellfish, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T20:14:26Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## What `openclaw memory status` reports `sessions · N/M` where N > M (numerator exceeds denominator) when `.jsonl.reset.*` or `.jsonl.deleted.*` archive files exist in the sessions directory. **Root cause:** `scanSessionFiles` (denominator) uses `.endsWith(".

### #76058 feat(discord): per-channel thread.requireMention override

- bucket: needs_proof
- author: symonbaikov
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, channel: discord, size: S, triage: blank-template, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T20:14:29Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Add a backwards-compatible `thread.requireMention` field on Discord guild channel configs so threads under a parent channel can run with a different mention requirement than the parent itself. Bot-owned auto-thread bypass keeps priority over the new override.

### #76077 fix: add --timeout flag to openclaw message send with SIGTERM support

- bucket: needs_proof
- author: EronFan
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, gateway, cli, commands, size: XS, triage: needs-real-behavior-proof, P1, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 availability, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T20:14:33Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Add a `--timeout <ms>` flag to `openclaw message send` (default: 30000ms) so that delivery requests can no longer hang indefinitely. Also adds SIGTERM/SIGINT handling in `executeGatewayRequestWithScopes` with proper listener cleanup so external supe

### #77091 fix(telegram): add httpTimeoutMs config for health probe timeout control (fixes #77060)

- bucket: needs_proof
- author: z0650115
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: telegram, app: web-ui, size: M, triage: needs-real-behavior-proof, P3, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T20:14:57Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Fixes #77060 - Control UI menus freezing due to Telegram blocking health probe

### #77148 fix(claude-cli): fork session on resume to avoid concurrent collisions

- bucket: needs_proof
- author: dae-sun
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS, extensions: anthropic, triage: needs-real-behavior-proof, P1, rating: 🦪 silver shellfish, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T20:15:20Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: when multiple call sites (auto-reply, queued steers, subagent spawns) `claude --resume {sessionId}` the same Claude CLI session in close succession, they all write to the same transcript file and collide. Symptoms: dropped/empty replies,

### #77550 fix(ui): format structured tool results instead of "[object Object]

- bucket: needs_proof
- author: davidmartin3
- author association: FIRST_TIMER
- draft: no
- assignees: none
- labels: app: web-ui, size: S, triage: refactor-only, triage: blank-template, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T20:15:34Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Problem The Control UI could render structured tool output as `[object Object]` when `toolresult` blocks carried non-string `text` / `content`, or when stream-synthesized messages stored raw object values. ## Change - Format object-shaped `toolresult.text`

### #77619 fix(mattermost): include thread files in inbound media

- bucket: needs_proof
- author: admin-prodesign
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: mattermost, size: S, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T20:16:02Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - collect file IDs from earlier Mattermost thread posts when processing an inbound thread reply - pass those thread files through the existing inbound media download path so agents can inspect root/reply attachments even when the triggering mention

### #77828 Sync/hermes arbiter mainline 20260505

- bucket: needs_proof
- author: Gforce10-design
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: macos, app: web-ui, gateway, agents, size: L, triage: refactor-only, triage: blank-template, proof: supplied, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T20:18:00Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: Hermes arbiter metadata was not preserved consistently through OpenClaw outbound/gateway send paths. - Why it matters: Hermes-side routing needs this metadata to deliver direct-send responses to the correct arbiter/channel context. - What

### #77946 fix: channels with only {enabled: true} config are skipped at startup

- bucket: needs_proof
- author: Allonz
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS, triage: needs-real-behavior-proof, P1, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T20:20:09Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Problem `hasMeaningfulChannelConfig` in `src/channels/config-presence.ts` filters out channel configs that only contain `{"enabled": true}`. This causes channels to be excluded from `listPotentialConfiguredChannelIds`, and thus not loaded by the Gateway at

### #77961 fix(gateway): add max reconnect limit with opt-in maxReconnectAttempts

- bucket: needs_proof
- author: stellamariesays
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, size: S, triage: mock-only-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T20:20:29Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Adds an opt-in reconnect attempt limit for GatewayClient to prevent infinite reconnect loops in short-lived clients (gateway CLI, MCP bridge, etc.). Resolves #45469 ## Changes - Add `maxReconnectAttempts?: number` to `GatewayClientOptions` - When se

### #78635 fix(outbound): route media payloads through handler.sendPayload in agent --deliver

- bucket: needs_proof
- author: chinar-amrutkar
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS, triage: needs-real-behavior-proof, mantis: telegram-visible-proof, P1, rating: 🧂 unranked krab, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T20:22:28Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Fix Summary **Issue:** #77265 - `agent --deliver` returns `mediaUrl` payload but doesn't send Telegram media **Root Cause:** In `src/infra/outbound/deliver.ts`, the condition for calling `handler.sendPayload` checks for `isError`, `presentation`, `interacti

### #78696 fix(agents): block raw self-update package installs

- bucket: needs_proof
- author: WT-WSL
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: S, proof: supplied, P1, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T20:23:54Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: agent self-update requests could run raw global package-manager upgrades such as `sudo npm install -g openclaw@latest`, replacing package files while the old Gateway process kept running. - Why it matters: stale running gateways can later

### #78730 fix(gateway): preserve text from oversized multimodal history

- bucket: needs_proof
- author: hacker1e7
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, size: S, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 session-state, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T20:25:01Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - preserve recoverable text blocks from oversized multimodal transcript lines - replace omitted large image payloads with a lightweight placeholder instead of dropping the full message - add a regression test covering text + oversized image history

### #78742 task-139: audit gateway restart attribution

- bucket: needs_proof
- author: daluzai-source
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: cli, size: XL, triage: needs-real-behavior-proof, P2, rating: 🦪 silver shellfish, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T20:25:31Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Problem When the operator types `/restart` to the gateway via TG / Control-UI / any chat-channel slash command, the gateway is killed via supervisor (`launchctl kickstart -k` on macOS, `systemctl --user restart` on Linux) and relaunched by KeepAlive. This r

### #78817 feat(memory-lancedb): make capture min chars configurable

- bucket: needs_proof
- author: yanghua
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: extensions: memory-lancedb, size: S, proof: supplied, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T20:27:28Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: The auto-capture minimal character limit was hardcoded to 10, meaning shorter messages containing important memory triggers were ignored. - Why it matters: Users need flexibility to capture shorter but significant text fragments, or defin

### #78898 fix(qqbot): preserve session on RECONNECT(7) to enable RESUME instead of IDENTIFY

- bucket: needs_proof
- author: husttsq
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS, channel: qqbot, triage: needs-real-behavior-proof, P1, rating: 🧂 unranked krab, merge-risk: 🚨 session-state, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T20:31:33Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fixes #78890 When the QQ Bot server sends `RECONNECT` (opcode 7), the client calls `cleanup()` which closes the WebSocket. The server then responds with close code `4009` (session timed out), and `handleClose(4009)` clears `sessionId` and `lastSeq`,

### #78958 fix(gateway): yield during embedded agent prep

- bucket: needs_proof
- author: sahilsatralkar
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, agents, size: M, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T20:33:38Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: embedded agent preparation can run heavy synchronous prep blocks in the Gateway process before model execution. - Why it matters: under load, cheap Gateway/WebSocket requests can become coupled to long agent prep work, contributing to poo

### #79044 fix(status): clarify heartbeat cadence source

- bucket: needs_proof
- author: sahilsatralkar
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, gateway, commands, size: XS, triage: needs-real-behavior-proof, P2, rating: 🦪 silver shellfish, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T20:35:58Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: `openclaw status` showed a row named `Heartbeat`, which made the displayed cadence look like observed scheduler/delivery telemetry. - Why it matters: issue #78904 showed this can mislead users when materialized config defaults differ from

### #79137 fix: tune diagnostic liveness and idle queue depth

- bucket: needs_proof
- author: sevenvista7
- author association: FIRST_TIMER
- draft: no
- assignees: none
- labels: size: S, proof: supplied, P2, rating: 🧂 unranked krab, merge-risk: 🚨 session-state, merge-risk: 🚨 availability, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T20:38:46Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - add a separate 10s max event-loop delay threshold while keeping sustained P99 delay warnings at 1s - clear diagnostic session `queueDepth` immediately when a session transitions to idle - add focused regression coverage for both diagnostic behavio

### #79181 fix(gateway): throttle rapid process restarts before sidecar startup

- bucket: needs_proof
- author: Joseff531
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, size: M, proof: supplied, P1, rating: 🦪 silver shellfish, merge-risk: 🚨 availability, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T20:40:25Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - **Problem:** After upgrading to v2026.4.24+, the gateway enters an infinite restart loop on Ubuntu 24 npm installs when the Linux OOM killer terminates the process during sidecar startup. - **Why it matters:** Every npm/systemd-managed Linux gatew

### #90172 [codex] fix(ui): proxy inbound media previews

- bucket: needs_proof
- author: sweetcornna
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: web-ui, size: S, proof: supplied, P2, rating: 🦪 silver shellfish, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T20:45:44Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Route canonical inbound image refs like `media://inbound/photo.png` through the existing authenticated Control UI `__openclaw__/assistant-media` route. - Keep proxying limited to single-file `media://inbound/<id>` refs so other `media://` location
