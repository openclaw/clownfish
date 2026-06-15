---
repo: openclaw/openclaw
cluster_id: pr-inventory-needs_proof-20260615T131654-032
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
  - "#79652"
  - "#79703"
  - "#79756"
  - "#79869"
  - "#79938"
  - "#79945"
  - "#79962"
  - "#79997"
  - "#80080"
  - "#80083"
  - "#80140"
  - "#80141"
  - "#80228"
  - "#80386"
  - "#92902"
  - "#80394"
  - "#80414"
  - "#80418"
  - "#80523"
  - "#80529"
  - "#80532"
  - "#80604"
  - "#80642"
  - "#80649"
  - "#80658"
  - "#80710"
  - "#80716"
  - "#80778"
  - "#80829"
  - "#79734"
cluster_refs:
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
  - "#79652"
  - "#79703"
  - "#79756"
  - "#79869"
  - "#79938"
  - "#79945"
  - "#79962"
  - "#79997"
  - "#80080"
  - "#80083"
  - "#80140"
  - "#80141"
  - "#80228"
  - "#80386"
  - "#92902"
  - "#80394"
  - "#80414"
  - "#80418"
  - "#80523"
  - "#80529"
  - "#80532"
  - "#80604"
  - "#80642"
  - "#80649"
  - "#80658"
  - "#80710"
  - "#80716"
  - "#80778"
  - "#80829"
  - "#79734"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "This is a PR inventory classification shard, not a dedupe cluster. Classify each PR independently and do not invent a shared canonical."
notes: "Generated from local gitcrawl open PR inventory on 2026-06-15T13:16:54.478Z; bucket=needs_proof; no GitHub mutation is possible in plan mode."
---

# PR Inventory needs_proof 32

This is a high-volume classification shard over open pull requests. It is not a dedupe cluster.

## Goal

Hydrate live GitHub state for each listed PR and emit one conservative action per PR. Prefer `keep_related`, `keep_independent`, `needs_human`, or `route_security`. Emit close-style planned actions only when fresh live evidence makes the PR boringly superseded, duplicate, abandoned, or low-signal under existing policies. For `target_updated_at`, copy only the hydrated value from the Cluster preflight artifact; do not use gitcrawl snapshot timestamps from this job body.

## Inventory

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

### #79652 feat(gateway): support hidden chat sends

- bucket: needs_proof
- author: cola-runner
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, app: web-ui, gateway, size: S, proof: supplied, P2, rating: 🧂 unranked krab, merge-risk: 🚨 session-state, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T21:10:41Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - add `chat.send.hideUserMessage` to the Gateway protocol schema and Swift protocol model - require `operator.admin` before a hidden send can suppress the triggering user turn - reject hidden sends with `deliver: true` or attachments so the hidden p

### #79703 feat(training-export): overhaul trigger system and message conversion

- bucket: needs_proof
- author: wzhgba
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, gateway, agents, size: XL, triage: refactor-only, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 security-boundary, merge-risk: 🚨 availability, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T21:11:53Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: > **Draft / work-in-progress** — this PR is under active development. Feedback welcome on the overall direction. ## Summary Introduce a **trajectory-first, trigger-driven training export system** that produces episode-level JSONL data from the OpenClaw runtime

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

### #79945 fix(discord): log silent reply drops; allow archives in host-read media

- bucket: needs_proof
- author: joalves
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: discord, size: XS, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T21:17:58Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Two related fixes that surfaced while debugging an operator's Discord bot that appeared to "stop replying" mid-conversation. - **`fix(discord)`** — Reply payloads were being silently dropped at two sanitization gates: `sanitizeDiscordFrontChannelRep

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

### #80083 fix: bound dreaming narrative session growth

- bucket: needs_proof
- author: RockENZO
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: extensions: memory-core, size: S, proof: supplied, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T21:20:35Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Three targeted fixes to prevent indefinite growth in the dreaming narrative subsystem: 1. **DREAMS.md diary entry cap** — new entries are capped at 90 (keeps newest, drops oldest). Dedupe and backfill paths also enforce the cap. 2. **Session corpus 

### #80140 fix(gateway): add systemd watchdog heartbeat

- bucket: needs_proof
- author: HemantSudarshan
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, gateway, size: S, proof: supplied, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 availability, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T21:21:43Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Problem summary Closes #11973. The generated systemd gateway unit had crash restart behavior, but it did not configure a watchdog heartbeat. If the gateway event loop wedged without exiting, systemd had no liveness signal to trigger recovery. ## Root cause 

### #80141 fix(approvals): summarize long approval prompts

- bucket: needs_proof
- author: HemantSudarshan
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, app: web-ui, size: M, proof: supplied, mantis: telegram-visible-proof, P1, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T21:21:59Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Problem summary Fixes #58687. Long exec approval prompts can render enough command text that the approval controls become hard to reach or review, especially for inline scripts. The Control UI also rendered an Allow Always button even when the gateway omitt

### #80228 [codex] Add Codex continuity bridge

- bucket: needs_proof
- author: jonathangu
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, size: XL, extensions: codex, triage: needs-real-behavior-proof, mantis: telegram-visible-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T21:29:30Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Adds the Codex Continuity Bridge to the bundled Codex plugin. The bridge keeps Codex UI as the high-bandwidth workbench while giving OpenClaw a quiet operator surface for Telegram: status, recent threads, explicit watched completion checks, evidence

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

### #80418 fix(/v1/responses): accept text field on requests for OpenAI SDK 6.x parity

- bucket: needs_proof
- author: logicbridgedev
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, size: S, triage: needs-real-behavior-proof, P2, rating: 🦪 silver shellfish, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T21:33:51Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: `/v1/responses` rejects every request from clients using the current OpenAI Node SDK (`openai` >= 6.x) or `@langchain/openai` >= 1.x with `Bad request - please check your parameters: Unrecognized key: "text"`. The OpenAI SDK auto-populate

### #80523 Harden ACP worker dispatch controls

- bucket: needs_proof
- author: imwalkinhere
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: M, extensions: acpx, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 auth-provider, merge-risk: 🚨 session-state, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T21:35:44Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - inject Claude and Gemini ACP model choices at process launch instead of replaying unsupported runtime config after session start - skip unsupported Claude/Gemini runtime config replays for model, thinking/effort, and timeout controls - allow `sess

### #80529 fix(telegram): make pre-connect network failures recoverable in send context

- bucket: needs_proof
- author: Kailigithub
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: telegram, size: XS, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T21:35:48Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary grammy's Telegram bot library can emit bare `"Network request for 'X' failed!"` errors for pre-connect failures (DNS resolution, TLS handshake, etc.) — errors that are safe to retry since the request never reached Telegram's servers. The existing re

### #80532 feat(exec): add allowSymlinkPath config option

- bucket: needs_proof
- author: TheArchitectit
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, triage: needs-real-behavior-proof, dependencies-changed, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T21:35:57Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary This PR adds a new `tools.exec.allowSymlinkPath` boolean config option that allows the exec tool to run commands in directories containing symlinks, or when the cwd itself is a symlink. ### Problem When a user's workspace path contains symlink compo

### #80604 fix(message): show dry-run output for send/poll

- bucket: needs_proof
- author: alchip
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: commands, size: XS, triage: mock-only-proof, P2, rating: 🧂 unranked krab, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T21:37:36Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - make CLI formatter use `result.dryRun` instead of `handledBy === "dry-run"` - ensure `message send --dry-run` and `message poll --dry-run` render `[dry-run]` text instead of success checkmark - add focused tests for dry-run send/poll formatting ##

### #80642 [codex] fix WhatsApp reconnect catch-up replies

- bucket: needs_proof
- author: VishalJ99
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, channel: whatsapp-web, size: S, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T21:38:39Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Keep the existing short stale-history guard for initial WhatsApp Web startup history sync. - After reconnecting from a recently active WhatsApp listener, allow recent `messages.upsert(type="append")` catch-up messages to enter the auto-reply path 

### #80649 i18n: improve Indonesian Control UI labels

- bucket: needs_proof
- author: aqilaziz
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: web-ui, agents, size: M, proof: supplied, P3, rating: 🦪 silver shellfish, merge-risk: 🚨 availability, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T21:38:51Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Improve Indonesian Control UI copy that was still English in the Agents, Debug, and exec approval panels. - Keep placeholders unchanged for translated strings. - Add a changelog entry for the user-facing locale fix. ## Verification - `pnpm install

### #80658 docs: clarify backend client behavior with gateway.auth.mode 'none'

- bucket: needs_proof
- author: HouJian2020
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, gateway, size: XS, triage: low-signal-docs, triage: needs-real-behavior-proof, P3, rating: 🦪 silver shellfish, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-14T21:39:03Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary This PR clarifies an important behavior of `gateway.auth.mode: "none"` that is not currently documented. ## Problem When `gateway.auth.mode` is set to `"none"`, the gateway does not generate or provide a shared authentication token. This causes back

### #80710 fix: add @zed-industries/codex-acp to minimumReleaseAgeExclude

- bucket: needs_proof
- author: rickjan130
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS, triage: risky-infra, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T21:40:22Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Problem `@zed-industries/codex-acp` and its platform-specific packages (`@zed-industries/codex-acp-darwin-arm64`, `-x64`, `-linux-arm64`, etc.) are transitive dependencies that release frequently. The `minimumReleaseAge: 2880` (48-hour) guard in `pnpm-works

### #80716 docs: add Codex long-task reliability runbook

- bucket: needs_proof
- author: scarlettdetekelala
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, size: XS, triage: low-signal-docs, triage: needs-real-behavior-proof, P3, rating: 🦐 gold shrimp, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-14T21:40:25Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Adds a public Codex long-task reliability runbook based on a field deployment where long Telegram/cron tasks kept appearing stalled or failing even after queue/concurrency tuning. The report is intentionally sanitized and generic. It documents the k

### #80778 feat(codex): surface pre-turn projection accounting (#80765)

- bucket: needs_proof
- author: aiZKP
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: M, extensions: codex, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T21:41:19Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Closes #80765. Codex's context-engine projection previously sized the rendered prompt with the generic `4 chars/token` heuristic and exposed nothing about that estimate downstream. Status/LCM diagnostics could not separate **frontier tokens** select

### #80829 fix(auto-reply/followup): surface billing/quota notice instead of silent drop (#80700)

- bucket: needs_proof
- author: Sanjays2402
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, triage: needs-real-behavior-proof, P1, rating: 🧂 unranked krab, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T21:43:08Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fixes #80700. When the followup agent's model-fallback chain exhausts on a billing, quota, or rate-limit class rejection from the provider, the catch block in `src/auto-reply/reply/followup-runner.ts` called `replyOperation.fail("run_failed", err)` 

### #79734 feat(doctor): add --dry-run flag to preview config changes without applying

- bucket: needs_proof
- author: smonett
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, cli, commands, size: S, proof: supplied, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T21:45:52Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Adds `--dry-run` to `openclaw doctor --fix` so operators can preview proposed config changes before committing to them. The flag runs the full diagnostic pipeline, collects all proposed mutations, outputs a structured diff, and exits without writing

