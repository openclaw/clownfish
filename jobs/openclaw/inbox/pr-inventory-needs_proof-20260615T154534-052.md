---
repo: openclaw/openclaw
cluster_id: pr-inventory-needs_proof-20260615T154534-052
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
  - "#80710"
  - "#80716"
  - "#80778"
  - "#80829"
  - "#79734"
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
cluster_refs:
  - "#80710"
  - "#80716"
  - "#80778"
  - "#80829"
  - "#79734"
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
security_policy: central_security_only
security_sensitive: false
canonical_hint: "This is a PR inventory classification shard, not a dedupe cluster. Classify each PR independently and do not invent a shared canonical."
notes: "Generated from local gitcrawl open PR inventory on 2026-06-15T15:45:34.204Z; bucket=needs_proof; no GitHub mutation is possible in plan mode."
---

# PR Inventory needs_proof 52

This is a high-volume classification shard over open pull requests. It is not a dedupe cluster.

## Goal

Hydrate live GitHub state for each listed PR and emit one conservative action per PR. Prefer `keep_related`, `keep_independent`, `needs_human`, or `route_security`. Emit close-style planned actions only when fresh live evidence makes the PR boringly superseded, duplicate, abandoned, or low-signal under existing policies. For `target_updated_at`, copy only the hydrated value from the Cluster preflight artifact; do not use gitcrawl snapshot timestamps from this job body.

## Inventory

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

