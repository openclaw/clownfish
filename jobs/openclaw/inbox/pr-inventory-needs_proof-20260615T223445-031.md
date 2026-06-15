---
repo: openclaw/openclaw
cluster_id: pr-inventory-needs_proof-20260615T223445-031
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
  - "#90215"
  - "#77912"
  - "#79186"
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
  - "#79631"
  - "#79756"
  - "#79869"
  - "#79938"
  - "#79962"
  - "#79997"
  - "#80080"
  - "#80140"
  - "#80386"
  - "#92902"
  - "#80394"
  - "#80414"
cluster_refs:
  - "#90215"
  - "#77912"
  - "#79186"
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
  - "#79631"
  - "#79756"
  - "#79869"
  - "#79938"
  - "#79962"
  - "#79997"
  - "#80080"
  - "#80140"
  - "#80386"
  - "#92902"
  - "#80394"
  - "#80414"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "This is a PR inventory classification shard, not a dedupe cluster. Classify each PR independently and do not invent a shared canonical."
notes: "Generated from local gitcrawl open PR inventory on 2026-06-15T22:34:45.792Z; bucket=needs_proof; no GitHub mutation is possible in plan mode."
---

# PR Inventory needs_proof 31

This is a high-volume classification shard over open pull requests. It is not a dedupe cluster.

## Goal

Hydrate live GitHub state for each listed PR and emit one conservative action per PR. Prefer `keep_related`, `keep_independent`, `needs_human`, or `route_security`. Emit close-style planned actions only when fresh live evidence makes the PR boringly superseded, duplicate, abandoned, or low-signal under existing policies. For `target_updated_at`, copy only the hydrated value from the Cluster preflight artifact; do not use gitcrawl snapshot timestamps from this job body.

## Inventory

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

### #79631 fix: inject completion acknowledgment when tool-only turns produce no text

- bucket: needs_proof
- author: Kailigithub
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS, triage: needs-real-behavior-proof, mantis: telegram-visible-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T21:10:14Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary When a model turn consists entirely of tool calls (file edits, memory writes, exec commands) with zero visible text in the response, the user sees nothing delivered to Telegram. The operations complete successfully but no message appears in the chat

### #79756 fix(gateway): start channels before plugins.runtime-post-bind (#79625) [AI-assisted]

- bucket: needs_proof
- author: AnnasMazhar
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, size: XS, proof: supplied, P1, rating: 🧂 unranked krab, merge-risk: 🚨 message-delivery, merge-risk: 🚨 availability, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T21:13:22Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Channels (Discord/Telegram/heartbeat/cron) depend only on the channel plugin registry populated during `plugins.bootstrap`. They have zero dependency on `plugins.runtime-post-bind` (which loads ACPX and takes 36-110s on cold boot). This PR starts ch

### #79869 fix(gateway): deliver targeted exec-event wakes when heartbeat.every is disabled

- bucket: needs_proof
- author: xinhuagu
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: M, triage: needs-real-behavior-proof, P1, rating: 🧂 unranked krab, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T21:16:03Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - allow targeted `exec-event` heartbeat wakes to run even when `heartbeat.every` resolves disabled (`0m`) - keep ordinary disabled heartbeats disabled by limiting the bypass to targeted exec-event wakes - add regression coverage for both scheduler d

### #79938 Warn on shared Slack Socket Mode connections

- bucket: needs_proof
- author: jeffvsutherland
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, channel: slack, size: S, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T21:17:51Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - warn once when Slack Socket Mode reports more than one active connection for the app token - parse the raw Socket Mode hello frame from ws_message so the SDK does not hide num_connections - document why multi-host Socket Mode installs need separat

### #79962 feat(gateway): expose session resolve lineage

- bucket: needs_proof
- author: Helios531
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, app: web-ui, gateway, agents, size: M, proof: supplied, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T21:18:24Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: `sessions.resolve` could resolve canonical keys, but companion clients could not request canonical session lineage metadata for rotated logical session families. - Why it matters: clients needing durable continuity had to inspect raw sess

### #79997 feat(tui,cli-runner): expose streamingWatchdogMs config + bump watchdog defaults

- bucket: needs_proof
- author: josephfelixbamba
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, gateway, agents, size: S, triage: needs-real-behavior-proof, P1, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 availability, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T21:19:00Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: # feat(tui,cli-runner): expose `streamingWatchdogMs` config + bump watchdog defaults ## Table of Contents - [Summary](#Summary) - [Motivation](#Motivation) - [Changes](#Changes) - [Test plan](#Test%20plan) - [Backward compatibility](#Backward%20compatibility)

### #80080 fix: resolve multiple unsafe assertions and logic bugs

- bucket: needs_proof
- author: potoior
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: discord, channel: telegram, gateway, commands, agents, channel: feishu, size: S, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 message-delivery, merge-risk: 🚨 availability, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T21:20:20Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary ### Batch 1: Unsafe non-null assertions - **feishu bitable**: validate `obj_token` exists before returning, filter tables with missing `table_id`/`name` - **onboard**: add null guards for `resolveDeprecatedAuthChoiceReplacement` and `formatDeprecate

### #80140 fix(gateway): add systemd watchdog heartbeat

- bucket: needs_proof
- author: HemantSudarshan
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, gateway, size: S, proof: supplied, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 availability, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T21:21:43Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Problem summary Closes #11973. The generated systemd gateway unit had crash restart behavior, but it did not configure a watchdog heartbeat. If the gateway event loop wedged without exiting, systemd had no liveness signal to trigger recovery. ## Root cause

### #80386 fix(update): Keep Openclaw alive across brew upgrade and other Node version bumps

- bucket: needs_proof
- author: yaanfpv
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: M, proof: supplied, P2, rating: 🦪 silver shellfish, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T21:33:01Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: a routine `brew upgrade` (or any version-manager bump to a new Node major) silently wipes the `openclaw` command. The operator opens a fresh shell and gets `openclaw: command not found` with no warning. - Why it matters: nothing they did

### #92902 fix(config): honor replacement channel config schemas

- bucket: needs_proof
- author: YonganZhang
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T21:33:17Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Fixes #92884 ## Summary - make channel schema metadata deterministic for same-origin replacement channel plugins - allow a channel config schema that declares `preferOver` to keep ownership of the active channel schema instead of being overwritten by later bun

### #80394 feat(agents): per-agent model allowlist (with fallback to global)

- bucket: needs_proof
- author: pleyvah
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, app: web-ui, gateway, cli, scripts, commands, agents, size: L, extensions: kimi-coding, extensions: qa-lab, extensions: memory-wiki, extensions: deepinfra, proof: supplied, extensions: google, extensions: openrouter, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, status: 📣 needs proof, proof: 📸 screenshot
- gitcrawl snapshot updated: 2026-06-14T21:33:36Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: When `agents.list[<agentId>].models` is defined and non-empty, scope the visibility allowlist (used by the Control UI model picker, `/model`, and the gateway `models.list` catalog view) to that agent. Otherwise fall back to `agents.defaults.models` exactly as

### #80414 refactor(auto-reply): drop dead /reset branches in fast-path session init

- bucket: needs_proof
- author: gllbrn
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS, triage: needs-real-behavior-proof, P3, rating: 🧂 unranked krab, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T21:33:40Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary This PR was originally proposed as a fix for #80377, claiming `/reset` was preserving session-level overrides incorrectly. After review by `clawsweeper` and inspection of `initSessionState` (the actual production reset path), it turns out the runtim
