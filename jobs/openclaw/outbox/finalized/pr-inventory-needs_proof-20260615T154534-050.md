---
repo: openclaw/openclaw
cluster_id: pr-inventory-needs_proof-20260615T154534-050
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
  - "#78958"
  - "#79033"
  - "#79044"
  - "#79137"
  - "#79148"
  - "#79172"
  - "#79181"
  - "#90172"
  - "#90215"
  - "#77912"
  - "#79186"
  - "#79311"
  - "#79342"
  - "#79357"
  - "#79378"
  - "#79438"
  - "#79501"
  - "#79504"
  - "#79540"
  - "#79541"
  - "#79542"
  - "#79545"
  - "#79548"
  - "#79600"
  - "#79631"
cluster_refs:
  - "#78958"
  - "#79033"
  - "#79044"
  - "#79137"
  - "#79148"
  - "#79172"
  - "#79181"
  - "#90172"
  - "#90215"
  - "#77912"
  - "#79186"
  - "#79311"
  - "#79342"
  - "#79357"
  - "#79378"
  - "#79438"
  - "#79501"
  - "#79504"
  - "#79540"
  - "#79541"
  - "#79542"
  - "#79545"
  - "#79548"
  - "#79600"
  - "#79631"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "This is a PR inventory classification shard, not a dedupe cluster. Classify each PR independently and do not invent a shared canonical."
notes: "Generated from local gitcrawl open PR inventory on 2026-06-15T15:45:34.204Z; bucket=needs_proof; no GitHub mutation is possible in plan mode."
---

# PR Inventory needs_proof 50

This is a high-volume classification shard over open pull requests. It is not a dedupe cluster.

## Goal

Hydrate live GitHub state for each listed PR and emit one conservative action per PR. Prefer `keep_related`, `keep_independent`, `needs_human`, or `route_security`. Emit close-style planned actions only when fresh live evidence makes the PR boringly superseded, duplicate, abandoned, or low-signal under existing policies. For `target_updated_at`, copy only the hydrated value from the Cluster preflight artifact; do not use gitcrawl snapshot timestamps from this job body.

## Inventory

### #78958 fix(gateway): yield during embedded agent prep

- bucket: needs_proof
- author: sahilsatralkar
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, agents, size: M, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T20:33:38Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: embedded agent preparation can run heavy synchronous prep blocks in the Gateway process before model execution. - Why it matters: under load, cheap Gateway/WebSocket requests can become coupled to long agent prep work, contributing to poo

### #79033 bootstrap-extra-files: opt-in bootstrapTrustExternal allows trusted external paths

- bucket: needs_proof
- author: sparkeros
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: XS, triage: refactor-only, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T20:35:07Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: **Files:** `src/agents/workspace.ts`, `src/hooks/bundled/bootstrap-extra-files/handler.ts` **Change:** `loadExtraBootstrapFilesWithDiagnostics` gains an optional `opts: { trustExternal?: boolean }` parameter. When set, it bypasses `readWorkspaceFileWithGuards`

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

### #79148 Respect configured inbound history cap

- bucket: needs_proof
- author: clawsweeper[bot]
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: discord, size: S, P1, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T20:39:04Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - make inbound prompt history serialization use a caller-provided cap instead of the fixed 20-entry cap - pass the resolved group history limit from reply preparation, falling back to messages.groupChat.historyLimit - preserve Discord channel/accoun

### #79172 fix(gateway): hide transcript-only history artifacts

- bucket: needs_proof
- author: WT-WSL
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, app: web-ui, gateway, size: M, proof: supplied, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T20:40:12Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: `chat.history` and `sessions.get` could surface transcript-only OpenClaw assistant rows (`delivery-mirror` / `gateway-injected`) as normal assistant messages. - Why it matters: those artifacts are durable transcript/audit rows, but consum

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

### #90215 test: detect file symlink support dynamically in canvas tool test

- bucket: needs_proof
- author: aniruddhaadak80
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS, triage: needs-real-behavior-proof, P3, rating: 🦪 silver shellfish, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T20:47:01Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Replaces the hardcoded Windows skip with a dynamic file symlink capability check, allowing the test to run on Windows systems when Developer Mode or symlink privileges are available. ### Verified Windows Proof The following test execution log shows the test ru

### #77912 fix(chat): MEDIA: binary file delivery — proper download for xlsx/csv/zip (Sandpaw Bug #9b)

- bucket: needs_proof
- author: adapepper
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: web-ui, gateway, size: M, proof: supplied, P2, rating: 🦪 silver shellfish, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T20:47:02Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: # Sandpaw Bug #9b — file delivery for non-image binary files Bug #9 covered MIME inference (#77875) and the gateway-managed outgoing document pipeline (#77877). Bug #9b plugs three remaining gaps in the plain `MEDIA:` → `/__openclaw__/assistant-media` path tha

### #79186 fix(slack): raise SocketMode ping timeouts

- bucket: needs_proof
- author: brandonlipman
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: slack, size: XS, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T20:54:22Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Narrow config change. See commit message for the full failure mode (cron-induced CPU starvation → bolt-socket-mode pong miss → silent DM loss). Reproducible on macOS with sustained Node event-loop blocking on tier-2 hardware. No tests changed; the failure mode

### #79311 feat(feishu): support declarative event subscribers

- bucket: needs_proof
- author: Gscienty
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: feishu, size: XL, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T20:57:41Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Add a Feishu event runtime that normalizes publish-path events into a topic bus, loads declarative subscriber specs from skills, and dispatches matching handlers or agent triggers. Wire the runtime into Feishu monitor startup, register SDK event handlers for a

### #79342 Add anti-sycophancy stress fixture suite

- bucket: needs_proof
- author: martins-oss
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: scripts, size: XL, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T20:58:23Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## What Adds an anti-sycophancy eval suite for advice/approval paths: - behavior-based grader rubric (`qa/evals/anti-sycophancy/rubric.md`) - 12 two-turn fixtures covering pushback/one-sided framing (`fixtures.json`) - smoke runner with default-model persona r

### #79357 fix(cli-runner): surface orphan stream-json lines and defer idle close

- bucket: needs_proof
- author: motochan
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: M, triage: needs-real-behavior-proof, P1, rating: 🧂 unranked krab, merge-risk: 🚨 availability, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T20:58:32Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary `handleClaudeLiveLine` in `src/agents/cli-runner/claude-live-session.ts` silently discards stream-json output whenever `session.currentTurn` is null. When the Claude CLI emits autonomously between gateway-initiated turns (for example, in response to

### #79378 test(plugin-sdk): guard realtime voice exports

- bucket: needs_proof
- author: ifthikar-razik
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: scripts, size: XS, triage: risky-infra, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T20:59:13Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary\n- add plugin-sdk release guards for realtime voice runtime exports used by standalone voice-call plugins\n- add guards for security-runtime file-store helpers required by voice-call persistence/context loading\n\n## Why\nAIF-126 standalone voice-ca

### #79438 Reduce remote node bin probe churn

- bucket: needs_proof
- author: Countermarch
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: L, proof: supplied, P2, rating: 🦪 silver shellfish, merge-risk: 🚨 availability, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T21:01:02Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - cache successful remote bin probes for 24 hours per node/signature - keep probe throttle state outside connection records so reconnects do not force immediate re-probes - apply exponential backoff after failed probes, with failure counts reset whe

### #79501 Add ambient initiative mode to heartbeat

- bucket: needs_proof
- author: ZardLi1115
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, gateway, size: S, proof: supplied, P2, rating: 🦪 silver shellfish, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T21:02:44Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Add `heartbeat.mode = "ambient"` as a low-priority initiative mode on top of the existing heartbeat runner. - Let the model decide on each scheduled wake whether to stay silent or proactively send a natural message, so OpenClaw can support model-d

### #79504 fix(heartbeat): harden commitment check-in delivery

- bucket: needs_proof
- author: Countermarch
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, triage: needs-real-behavior-proof, mantis: telegram-visible-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 session-state, merge-risk: 🚨 message-delivery, status: 📣 needs proof, proof: 🎥 video
- gitcrawl snapshot updated: 2026-06-14T21:02:51Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Commitment-only heartbeat runs use OpenClaw's built-in inferred-commitment prompt, which can bypass `HEARTBEAT.md`. This hardens that path so inferred-commitment check-ins stay usable and conversation-aware. ## Problem We observed Telegram receiving

### #79540 fix(acp): capture and persist usage_update tokens for ACP sessions

- bucket: needs_proof
- author: efpiva
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: M, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 session-state, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T21:04:59Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Plumb token usage from ACP `usage_update` events into the openclaw session record so `totalTokens` is no longer permanently `null` for ACP sessions. Closes catalog #21. ## Bug detail Every ACP session in the listing reported `totalTokens: null`, `to

### #79541 fix(acp): warm-restore active sessions on gateway start with PID-liveness guard

- bucket: needs_proof
- author: efpiva
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: L, extensions: acpx, triage: needs-real-behavior-proof, mantis: telegram-visible-proof, P1, rating: 🧂 unranked krab, merge-risk: 🚨 session-state, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T21:05:13Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Warm-restore active ACP sessions on gateway start so a `docker compose restart` no longer breaks bound topics, and gate the resume path with a PID-liveness check so sessions whose subprocess is dead get a fresh launch instead of a phantom reattach. 

### #79542 feat(acp): add sessions link helper for operator diagnostics

- bucket: needs_proof
- author: efpiva
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, cli, commands, size: L, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T21:05:26Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Add `openclaw sessions link` — a read-only diagnostic helper that prints the three-identifier triple operators currently have to walk by hand to correlate an ACP session across openclaw and copilot. Closes catalog #8. ## Bug detail Two distinct iden

### #79545 fix(acp): pass resolved session entry to transcript writer; surface bail errors

- bucket: needs_proof
- author: efpiva
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: L, triage: needs-real-behavior-proof, P2, rating: 🦪 silver shellfish, merge-risk: 🚨 session-state, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T21:05:32Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Spawn-child ACP sessions advertise a `sessionFile` path on disk, but no openclaw-side transcript was ever written there — the existing writer at `dispatch-acp.ts:517-518` was bailing silently because the disk re-load couldn't resolve the canonical s

### #79548 fix(acp): bind-aware persistent dispatcher for spawn-child outbound after parent ends

- bucket: needs_proof
- author: efpiva
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: L, triage: needs-real-behavior-proof, mantis: telegram-visible-proof, P1, rating: 🧂 unranked krab, merge-risk: 🚨 message-delivery, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T21:05:56Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Spawn-child ACP turns produced **zero** outbound channel deliveries until end-of-turn — the projector's deliver callback was tied to the parent run's dispatcher, which tore down ~10s in while the child kept running for minutes. Build a bind-aware fa

### #79600 fix(discord): default account env fallback when accounts.default.token is blank

- bucket: needs_proof
- author: ljcairns
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: discord, size: S, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T21:08:36Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fixes Discord token resolution when `cfg.channels.discord.accounts.default` exists but does not carry a meaningful `token` value. In that case the resolver should continue through the existing fallback chain (top-level `discord.token`, then `DISCORD

### #79631 fix: inject completion acknowledgment when tool-only turns produce no text

- bucket: needs_proof
- author: Kailigithub
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS, triage: needs-real-behavior-proof, mantis: telegram-visible-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T21:10:14Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary When a model turn consists entirely of tool calls (file edits, memory writes, exec commands) with zero visible text in the response, the user sees nothing delivered to Telegram. The operations complete successfully but no message appears in the chat

