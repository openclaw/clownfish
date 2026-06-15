---
repo: openclaw/openclaw
cluster_id: pr-inventory-needs_proof-20260615T131654-033
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
  - "#80915"
  - "#80955"
  - "#80958"
  - "#80982"
  - "#81027"
  - "#81039"
  - "#81046"
  - "#81054"
  - "#81076"
  - "#81079"
  - "#81136"
  - "#81154"
  - "#81198"
  - "#90248"
  - "#90252"
  - "#90257"
  - "#77843"
  - "#77928"
  - "#80285"
  - "#90144"
  - "#90196"
  - "#61167"
  - "#90323"
  - "#90329"
  - "#79556"
  - "#93046"
  - "#93040"
  - "#81417"
  - "#81832"
  - "#81851"
  - "#82079"
  - "#82179"
  - "#82193"
  - "#82213"
  - "#82240"
  - "#93079"
  - "#82349"
  - "#82355"
  - "#82373"
  - "#82379"
cluster_refs:
  - "#80915"
  - "#80955"
  - "#80958"
  - "#80982"
  - "#81027"
  - "#81039"
  - "#81046"
  - "#81054"
  - "#81076"
  - "#81079"
  - "#81136"
  - "#81154"
  - "#81198"
  - "#90248"
  - "#90252"
  - "#90257"
  - "#77843"
  - "#77928"
  - "#80285"
  - "#90144"
  - "#90196"
  - "#61167"
  - "#90323"
  - "#90329"
  - "#79556"
  - "#93046"
  - "#93040"
  - "#81417"
  - "#81832"
  - "#81851"
  - "#82079"
  - "#82179"
  - "#82193"
  - "#82213"
  - "#82240"
  - "#93079"
  - "#82349"
  - "#82355"
  - "#82373"
  - "#82379"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "This is a PR inventory classification shard, not a dedupe cluster. Classify each PR independently and do not invent a shared canonical."
notes: "Generated from local gitcrawl open PR inventory on 2026-06-15T13:16:54.479Z; bucket=needs_proof; no GitHub mutation is possible in plan mode."
---

# PR Inventory needs_proof 33

This is a high-volume classification shard over open pull requests. It is not a dedupe cluster.

## Goal

Hydrate live GitHub state for each listed PR and emit one conservative action per PR. Prefer `keep_related`, `keep_independent`, `needs_human`, or `route_security`. Emit close-style planned actions only when fresh live evidence makes the PR boringly superseded, duplicate, abandoned, or low-signal under existing policies. For `target_updated_at`, copy only the hydrated value from the Cluster preflight artifact; do not use gitcrawl snapshot timestamps from this job body.

## Inventory

### #80915 fix(memory-wiki): accept title wikilink targets

- bucket: needs_proof
- author: levineam
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: M, extensions: memory-wiki, proof: supplied, P2, rating: 🧂 unranked krab, merge-risk: 🚨 session-state, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T21:45:57Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Accept normalized memory-wiki lint targets for page titles and aliases, not only generated paths and basenames. - Normalize lint link checks for markdown extension, leading `./`, query strings, and heading fragments so Obsidian title links do not 

### #80955 ui(i18n): localize chat page slash commands and composer for zh-CN

- bucket: needs_proof
- author: git-jxj
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: web-ui, size: XL, proof: supplied, P2, rating: 🧂 unranked krab, status: 📣 needs proof, proof: 📸 screenshot, merge-risk: 🚨 other
- gitcrawl snapshot updated: 2026-06-14T21:47:40Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: Chat page slash command palette and composer had hardcoded English strings when using Simplified Chinese locale. - Why it matters: Non-English users see English labels, descriptions, and hints in the chat command menu, footer shortcuts, T

### #80958 Add browser dictation to Control UI chat

- bucket: needs_proof
- author: Al-Qassim
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: web-ui, size: M, triage: refactor-only, proof: supplied, P2, rating: 🧂 unranked krab, merge-risk: 🚨 auth-provider, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T21:47:55Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Add a Web Speech API dictation button to the Control UI chat composer when SpeechRecognition is available - Stream interim/final recognition text into the existing draft state - Reset/stop dictation with chat view cleanup and cover supported/unsup

### #80982 feat(plugin-sdk): registerChatStreamRenderer for plugin-owned inline UI

- bucket: needs_proof
- author: 100yenadmin
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, app: web-ui, gateway, size: L, triage: dirty-candidate, triage: external-plugin-candidate, proof: supplied, P2, rating: 🦪 silver shellfish, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T21:48:23Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: This PR adds a narrow SDK/Gateway seam for plugin-owned inline chat-stream UI without making plugins mutate core chat rendering directly. Reviewers can treat it as a descriptor/projection feature: plugins register chat-stream renderers, the Gateway projects or

### #81027 fix(gateway): enforce hard-kill socket teardown on abort to eliminate…

- bucket: needs_proof
- author: doedewaldt
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, scripts, commands, agents, size: M, extensions: codex, proof: supplied, P1, rating: 🦪 silver shellfish, merge-risk: 🚨 automation, merge-risk: 🚨 availability, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T21:49:12Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Describe the problem and fix in 2–5 bullets: If this PR fixes a plugin beta-release blocker, title it `fix(<plugin-id>): beta blocker - <summary>` and link the matching `Beta blocker: <plugin-name> - <summary>` issue labeled `beta-blocker`. Contribu

### #81039 fix(cli-runner): emit trajectory events from CLI executor path

- bucket: needs_proof
- author: 0xghost42
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: L, proof: supplied, P2, rating: 🦪 silver shellfish, merge-risk: 🚨 session-state, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T21:49:17Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Pure `claude-cli` sessions never produce a `<session>.trajectory.jsonl` sidecar. The trajectory **pointer** is written by `createTrajectoryRuntimeRecorder` (so tooling thinks one exists), but no events flow into it because the only `recordEvent` cal

### #81046 Persist model exhaustion cooldowns

- bucket: needs_proof
- author: prantikmedhi
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: M, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, merge-risk: 🚨 session-state, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T21:49:40Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: This keeps exhausted models out of the retry loop for a configurable window instead of hammering them again immediately.\n\nWhat changed:\n- persist exhausted model state in session storage\n- skip models that are still inside their cooldown\n- clear the marke

### #81054 feat: persist model exhaustion cooldowns per session

- bucket: needs_proof
- author: prantikmedhi
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: commands, agents, size: L, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, merge-risk: 🚨 session-state, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T21:49:53Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: This PR adds session-scoped model exhaustion persistence, ensuring that rate-limited or exhausted models are skipped for subsequent requests in the same session for a configurable period (default 30 mins). It extends the existing singular model health marker t

### #81076 fix(browser): backfill top-level act fields into nested request

- bucket: needs_proof
- author: angelusbr
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS, triage: mock-only-proof, P1, rating: 🦪 silver shellfish, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T21:50:16Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - **Problem:** `readActRequestParam` returns `params.request` unchanged when it is an object, dropping top-level fields like `ref`, `selector`, and `targetId`. OpenAI models (gpt-4o-mini, gpt-4.1-mini) follow the tool schema literally and place `ref

### #81079 [feat]: thread currentTokenCount into ContextEngine.assemble

- bucket: needs_proof
- author: DatPham-6996
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, agents, size: S, extensions: codex, proof: supplied, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T21:50:20Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - **Problem:** `ContextEngine.assemble` receives only `tokenBudget` (the full model context window) and has no signal for how many of those tokens are already consumed by `messages + systemPrompt + prompt`. Engines that prepend a `systemPromptAdditi

### #81136 fix(gateway): carry assistant mediaUrls through live chat deltas and finals

- bucket: needs_proof
- author: adone0
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, size: M, proof: supplied, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T21:52:13Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - The gateway's live chat projection (`createAgentEventHandler` in `src/gateway/server-chat.ts`) reads only `evt.data.text` from assistant stream events. Any `mediaUrls` field on the event is silently dropped, so the WebSocket `chat` payload broadca

### #81154 fix(installer): bypass onboard exec when existing config is present

- bucket: needs_proof
- author: adone0
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: scripts, size: S, proof: supplied, P2, rating: 🦪 silver shellfish, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T21:52:21Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - `scripts/install.sh:main()` already detects an existing `~/.openclaw/openclaw.json` (or the legacy `~/.clawdbot/clawdbot.json`) in the install finalization branch, runs `run_doctor`, flips `should_open_dashboard=true`, and sets `skip_onboard=true`

### #81198 feat: add before_route_inbound_message plugin hook for channel bridging

- bucket: needs_proof
- author: DranboFieldston
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: M, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T21:53:53Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Implements the `before_route_inbound_message` plugin hook as proposed in #81061. This hook fires **before** OpenClaw resolves the canonical session key for an inbound message, allowing plugins (like the channel-bridge) to: - **Redirect** messages to

### #90248 Add channel turn delivery and control-lane diagnostics

- bucket: needs_proof
- author: sbuchberger
- author association: FIRST_TIMER
- draft: no
- assignees: none
- labels: channel: telegram, gateway, extensions: diagnostics-otel, cli, commands, agents, size: XL, triage: dirty-candidate, proof: supplied, mantis: telegram-visible-proof, P1, rating: 🦪 silver shellfish, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T21:59:05Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary This PR adds a small, source-level Agentic Kernel spike for OpenClaw channel turns. The goal is not a rewrite: it makes Telegram/direct-message delivery and control-lane health observable and testable through existing runtime paths. Key pieces: - Ad

### #90252 fix(state-migrations): archive plugin install index on conflict instead of keeping it

- bucket: needs_proof
- author: Bartok9
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: commands, size: XS, triage: needs-real-behavior-proof, P2, rating: 🦪 silver shellfish, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T21:59:18Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Archive the legacy plugin install JSON file even when conflicting records are detected, instead of leaving it in place. - Conflict warning is now emitted exactly once (on first migration) rather than on every subsequent gateway start. - Fix warnin

### #90257 fix(agents): lower fresh isolated cron loop warnings

- bucket: needs_proof
- author: sweetcornna
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: S, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T21:59:30Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Thread cron session metadata into before-tool-call hook context for embedded cron agent runs. - Downgrade non-critical loop-warning diagnostics to `info` only for fresh `sessionTarget="isolated"` cron sessions, while preserving warning/critical be

### #77843 fix: gracefully handle broken provider modules in media understanding registry

- bucket: needs_proof
- author: Clausinho
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T22:08:35Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Problem When a bundled provider module (e.g. codex) has unresolved imports in Nix builds — specifically `Cannot find package 'openclaw'` imported from `codex/provider.js` — the call to `resolvePluginCapabilityProviders()` in `buildMediaUnderstandingRegistry

### #77928 Add Telegram reliability and handoff commands

- bucket: needs_proof
- author: lcxhh521
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, channel: telegram, size: XL, proof: supplied, mantis: telegram-visible-proof, P2, rating: 🦪 silver shellfish, merge-risk: 🚨 session-state, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T22:08:56Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - add `/handoff`, `/resume latest`, and related handoff commands for explicit session handoff text - add lightweight Telegram inflight state tracking for dispatched/completed/failed/interrupted requests - send explicit user-facing failure notices fo

### #80285 fix: clear cross-run messaging-tool sent-text state after every compaction

- bucket: needs_proof
- author: jetd1
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: XS, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 session-state, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T22:10:49Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Problem When a run completes and the session compacts, the arrays tracking texts sent via messaging tools (`message(action=send)`, `sessions_send`, etc.) were only cleared on compaction retries (`willRetry=true`). On normal compaction (`willRetry=false`), s

### #90144 fix(announce): durable in-process queue fallback for direct-pending handoffs

- bucket: needs_proof
- author: bradfreels
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: M, triage: needs-real-behavior-proof, P1, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T22:14:33Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary When `deliverSubagentAnnouncement` direct-dispatch returns a non-terminal status (`accepted`/`started`/`in_flight`) and the requester parent is not actively streaming (yielded, queued, compaction-prep, or tool-result truncated), today's behaviour re

### #90196 feat(ios): Add Piper TTS as on-device voice engine option

- bucket: needs_proof
- author: theashbhat
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: ios, gateway, size: M, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T22:14:41Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Adds **Piper TTS** as a third voice engine option for the OpenClaw iOS app, enabling fully offline on-device speech synthesis. ### What's included | Component | Change | |-----------|--------| | Gateway | `ttsEngine` field added to `talk.config` nor

### #61167 docker: wire bundled plugins and playwright cache env for whatsapp setup

- bucket: needs_proof
- author: eodeluga
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: scripts, docker, size: M, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 security-boundary, merge-risk: 🚨 availability, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T22:15:05Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: Docker WhatsApp setup could miss runtime env wiring for bundled plugins and Playwright cache. - Why it matters: Missing env propagation can break plugin resolution or browser install/login flows inside containers. - What changed: - Added 

### #90323 fix(memory): replace node:sqlite with better-sqlite3 to enable sqlite-vec on macOS

- bucket: needs_proof
- author: googlerest
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: extensions: memory-core, size: M, plugin: bonjour, proof: supplied, dependencies-changed, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T22:24:39Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fixes #66977. `node:sqlite` on macOS is compiled with `OMIT_LOAD_EXTENSION=1`, making `enableLoadExtension(true)` throw unconditionally at runtime. This prevents `sqlite-vec` from loading, leaving all embedding arrays empty (`[]`) and disabling vect

### #90329 feat(slack): add allowBotsFrom for trusted partner-agent bot allowlisting

- bucket: needs_proof
- author: niceysam
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T22:25:05Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Adds a new `allowBotsFrom` config option (string array of Slack `bot_id`s) that lets specific trusted bots trigger replies even when the global `allowBots` flag is `false`. ## Motivation Closes #89043 (partial — addresses the cross-app trusted-bot u

### #79556 fix(feishu): set CommandSource and GroupId for group messages

- bucket: needs_proof
- author: wangdingxin
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: feishu, size: XS, triage: needs-real-behavior-proof, P1, rating: 🧂 unranked krab, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T22:30:37Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary 修复飞书群组消息的两个问题： 1. **bug #79409**: 飞书群组消息缺少 `CommandSource` 字段，导致 slash 命令无法被正确识别 2. **bug #78826**: 飞书群组消息的 `groupId` 被错误设置为发送者的 `open_id`，导致工具策略校验失败 ## Changes ### bug #79409 修复 - 在 `buildCtxPayloadForAgent` 中，当消息是文本命令（以 `/` 开头）时，设置 `CommandSource:

### #93046 fix(gateway): exclude background tasks from channel reload deferral [AI]

- bucket: needs_proof
- author: mpz4life
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, size: XS, proof: supplied, P2, rating: 🧂 unranked krab, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T22:33:31Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: `waitForChannelOperations` before a channel reload used `getActiveCounts()`, which includes active background tasks such as context-engine turn maintenance. This caused user-initiated channel toggles to block for minutes waiting on unrela

### #93040 fix(telegram): release timed-out spooled lanes

- bucket: needs_proof
- author: vortexopenclaw
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: telegram, size: XS, proof: supplied, P1, rating: 🦪 silver shellfish, merge-risk: 🚨 session-state, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T22:42:34Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: Telegram isolated-ingress lanes can stay guarded indefinitely when a spooled update handler times out, the reply fence is aborted, and the handler still refuses to settle inside the abort-grace window. Later updates in the same Telegram c

### #81417 feat(memory-core): scale default softThresholdTokens with model context window

- bucket: needs_proof
- author: 22kyasue
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: extensions: memory-core, size: S, triage: external-plugin-candidate, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T22:45:29Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Replaces the hard-coded `DEFAULT_MEMORY_FLUSH_SOFT_TOKENS = 4000` default in `extensions/memory-core/src/flush-plan.ts` with a window-aware helper `defaultMemoryFlushSoftThresholdTokens(window)` that returns `min(floor(window * 0.7), 900_000)`, fall

### #81832 feat(whatsapp): add post-link 'next steps' note and hello-world docs (#75082)

- bucket: needs_proof
- author: koshaji
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, channel: whatsapp-web, size: S, proof: supplied, P3, rating: 🦪 silver shellfish, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T22:46:29Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary After a successful WhatsApp link (or a declined relink on an already-linked account), this PR emits a dmPolicy-aware **"WhatsApp next steps"** note that tells the operator how to verify routing: the inbound path for the effective `dmPolicy` (pairing

### #81851 feat(anthropic): claude-cli-interactive backend — stream reasoning via local TLS proxy

- bucket: needs_proof
- author: anagnorisis2peripeteia
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, agents, size: XL, extensions: anthropic, triage: dirty-candidate, triage: needs-real-behavior-proof, mantis: telegram-visible-proof, dependencies-changed, P1, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery, merge-risk: 🚨 security-boundary, status: 📣 needs proof, proof: 📸 screenshot
- gitcrawl snapshot updated: 2026-06-14T22:47:11Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary New opt-in `claude-cli-interactive` backend. Each turn spawns `bun wrapper.ts` which boots a loopback HTTPS MITM proxy on 127.0.0.1, taps every Anthropic API SSE event, and re-emits them as `claude -p --output-format stream-json` JSONL records. This

### #82079 fix(telegram): preserve bot-self reply target context under allowlist visibility (#82002)

- bucket: needs_proof
- author: 0xghost42
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: telegram, size: S, proof: supplied, mantis: telegram-visible-proof, P2, rating: 🦪 silver shellfish, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T22:52:34Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Fixes #82002. In Telegram groups under `contextVisibility: "allowlist"`, the supplemental-context filter computed `senderAllowed` only from `effectiveGroupAllow`, so a user reply to a bot-sent cron/system message would drop the quoted bot text whe

### #82179 fix(volcengine): send coding plan thinking object

- bucket: needs_proof
- author: xuruiray
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, gateway, agents, size: S, extensions: volcengine, proof: supplied, P2, rating: 🧂 unranked krab, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T22:55:07Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Fixes #81835 by adding a Volcengine CodingPlan thinking compat path for OpenAI-compatible chat completions. - Marks `volcengine-plan` resolved models with the Volcengine thinking format and sends `thinking: { type: "enabled", budget_tokens }` inst

### #82193 feat(tools): add sessions_broadcast for multi-session A2A fan-out

- bucket: needs_proof
- author: bryanbaer
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, agents, size: L, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T22:55:38Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Adds `sessions_broadcast` — a fan-out primitive for multi-session A2A coordination. **Motivation:** `sessions_send` is one-to-one. Notifying multiple agent sessions (e.g. before a gateway restart, or coordinating a swarm) requires N sequential `sess

### #82213 plugin-sdk: add runtime.session.cancel and channel.outbound.sendToSession

- bucket: needs_proof
- author: satoy-bot
- author association: FIRST_TIMER
- draft: no
- assignees: none
- labels: docs, gateway, size: S, triage: dirty-candidate, plugin: file-transfer, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T22:56:12Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - add `runtime.session.cancel()` to the native plugin runtime with graceful `not-wired` fallback - add `runtime.channel.outbound.sendToSession()` for direct text delivery to a session’s last recorded route - wire gateway plugin runtimes to existing 

### #82240 feat(plugin-sdk): add longDescription to plugin approval payload

- bucket: needs_proof
- author: Rene0422
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, channel: discord, channel: matrix, app: web-ui, gateway, size: S, proof: supplied, mantis: telegram-visible-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T22:56:45Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Describe the problem and fix in 2–5 bullets: - Problem: `plugin.approval.request` caps `description` at 256 chars, so HTML-capable channels (Telegram, Discord, Matrix, Mattermost) truncate verdicts, JSON payloads, and action footers mid-sentence eve

### #93079 fix(reply): preserve unsent text-only finals after block pipeline streamed partial content (fixes #81078)

- bucket: needs_proof
- author: liuhao1024
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS, proof: supplied, P1, rating: 🦪 silver shellfish, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T22:58:09Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Real behavior proof - **Behavior addressed:** WhatsApp block streaming suppresses complete final text replies when the pipeline streamed partial content but never sent the final complete payload. Text-only payloads were unconditionally dropped in `preserveU

### #82349 feat(skills-setup): add skill setup hook plugin

- bucket: needs_proof
- author: alexminza
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: L, triage: mock-only-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T22:59:28Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: OpenClaw issue #80213 asks for skill author-defined setup hooks; this PR implements the behavior as a bundled plugin instead of adding setup execution directly to core. - Why it matters: skills that need local setup need a controlled, adm

### #82355 Fix streamed chat completions dropping leading less-than

- bucket: needs_proof
- author: honor2030
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, agents, size: S, proof: supplied, P2, rating: 🦪 silver shellfish, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T22:59:46Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Preserve cumulative assistant `text` payloads when translating agent events into OpenAI-compatible SSE deltas, so leading `<` characters are not dropped when `delta` starts after a buffered tag prefix. - Defer chat-completion stream finalization b

### #82373 Feature/pr 21b normal mode startup channel backoff

- bucket: needs_proof
- author: software-dev12
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, gateway, cli, scripts, size: XL, proof: supplied, dependencies-changed, P1, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery, merge-risk: 🚨 availability, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T23:00:08Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Describe the problem and fix in 2–5 bullets: - Problem: normal-mode gateway startup could appear opaque or indefinitely delayed when channel startup was slow, failed, or deferred behind sidecar startup work. - Why it matters: operators need startup-

### #82379 docs(lobster): enumerate injected runtime env vars and clarify step-output access

- bucket: needs_proof
- author: Sanjays2402
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, size: XS, triage: needs-real-behavior-proof, P2, rating: 🦪 silver shellfish, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-14T23:00:18Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Closes #82281. The Lobster docs document workflow files and step `stdin:` piping, but they don't enumerate which env vars the runtime injects into step shells. The current page mentions `LOBSTER_ARG_<name>` and `LOBSTER_FINAL_STATUS` in passing, but

