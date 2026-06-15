---
repo: openclaw/openclaw
cluster_id: pr-inventory-needs_proof-20260615T223445-054
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
  - "#91511"
  - "#91535"
  - "#91544"
  - "#91584"
  - "#91603"
  - "#91606"
  - "#91609"
  - "#91610"
  - "#91611"
  - "#91682"
  - "#91857"
  - "#91875"
  - "#91877"
  - "#91885"
  - "#93279"
  - "#61335"
  - "#64649"
  - "#65180"
  - "#65198"
  - "#68127"
  - "#68197"
  - "#69245"
  - "#69355"
  - "#69413"
  - "#69426"
cluster_refs:
  - "#91511"
  - "#91535"
  - "#91544"
  - "#91584"
  - "#91603"
  - "#91606"
  - "#91609"
  - "#91610"
  - "#91611"
  - "#91682"
  - "#91857"
  - "#91875"
  - "#91877"
  - "#91885"
  - "#93279"
  - "#61335"
  - "#64649"
  - "#65180"
  - "#65198"
  - "#68127"
  - "#68197"
  - "#69245"
  - "#69355"
  - "#69413"
  - "#69426"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "This is a PR inventory classification shard, not a dedupe cluster. Classify each PR independently and do not invent a shared canonical."
notes: "Generated from local gitcrawl open PR inventory on 2026-06-15T22:34:45.797Z; bucket=needs_proof; no GitHub mutation is possible in plan mode."
---

# PR Inventory needs_proof 54

This is a high-volume classification shard over open pull requests. It is not a dedupe cluster.

## Goal

Hydrate live GitHub state for each listed PR and emit one conservative action per PR. Prefer `keep_related`, `keep_independent`, `needs_human`, or `route_security`. Emit close-style planned actions only when fresh live evidence makes the PR boringly superseded, duplicate, abandoned, or low-signal under existing policies. For `target_updated_at`, copy only the hydrated value from the Cluster preflight artifact; do not use gitcrawl snapshot timestamps from this job body.

## Inventory

### #91511 fix(ui): keep mobile composer above keyboard

- bucket: needs_proof
- author: stackingrockss
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: web-ui, size: S, proof: supplied, P2, rating: 🦪 silver shellfish, status: 📣 needs proof, merge-risk: 🚨 other
- gitcrawl snapshot updated: 2026-06-15T14:56:51Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - track the mobile visual viewport keyboard overlap in `--keyboard-inset-bottom` - use that inset for the mobile chat composer bottom margin while preserving standalone/PWA home-indicator clearance - add unit coverage for the inset calculation and C

### #91535 fix(ui): route skill workshop RPCs through current session agent

- bucket: needs_proof
- author: zhouhe-xydt
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: web-ui, size: M, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T14:59:00Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Pass the current session's `agentId` to all Skill Workshop Gateway RPCs (`skills.proposals.list`, `skills.proposals.inspect`, `skills.proposals.apply`, `skills.proposals.reject`) when the session key is explicitly agent-scoped. - For default sessi

### #91544 [codex] fix Claude AskUserQuestion bridge

- bucket: needs_proof
- author: jsi-tross
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: L, proof: supplied, P1, rating: 🧂 unranked krab, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T15:00:00Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Add Claude live-session handling for `AskUserQuestion` so Claude CLI interactive prompts no longer fall through the generic exec-approval path. - Deliver prompt text through the reply surface when one exists, with a no-surface fallback that lets C

### #91584 Fail closed when Slack mention detection is unavailable

- bucket: needs_proof
- author: hiragram
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: slack, size: S, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T15:02:12Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fixes Slack mention gating so channels that require a mention do not accept ordinary messages when explicit mention detection is unavailable. This can happen when `auth.test` fails during Slack monitor startup, leaving `botUserId` empty until restar

### #91603 fix(acp): preserve structured error kinds

- bucket: needs_proof
- author: aniruddhaadak80
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T15:02:42Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: This PR updates the ACP translator to preserve structured error kinds rather than mapping them all to end_turn. Details: - If the error kind is a refusal, it maps to refusal. - If the error kind is context_length, it maps to max_tokens. - For other error kinds

### #91606 fix(ui): prevent false busy state in Control UI webchat

- bucket: needs_proof
- author: bladin
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: web-ui, size: S, proof: supplied, P2, rating: 🧂 unranked krab, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T15:02:50Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fixes #87387: Control UI webchat could keep showing a false "In progress" status and "Stop" button after the assistant response completed because the main composer consumed session-list abortability even when local send/stream state was idle. ## Cha

### #91609 fix(docs): make check:docs work in native PowerShell on Windows

- bucket: needs_proof
- author: aniruddhaadak80
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: scripts, size: XS, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T15:03:01Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: This PR ensures that \check:docs\ and doc formatting scripts work correctly when executed in native PowerShell / cmd environments on Windows. Details: - Add safety checks for child process \stderr\ and errors in \ ormat-docs.mjs\ to prevent crashes when spawni

### #91610 ci(windows): add native PowerShell smoke coverage for contributor commands

- bucket: needs_proof
- author: aniruddhaadak80
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 automation, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T15:03:12Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: This PR adds Native PowerShell smoke coverage for contributor commands under the Windows CI job. Details: - Add a new step to \checks-windows\ in \.github/workflows/ci.yml\ using \shell: pwsh\. - Run \pnpm check:docs\ and \pnpm build:strict-smoke\ in native Po

### #91611 fix(agents): reconcile stale restart-aborted subagent runs instead of resurrecting them (fixes #90766)

- bucket: needs_proof
- author: ly-wang19
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: S, triage: mock-only-proof, P2, rating: 🦪 silver shellfish, merge-risk: 🚨 session-state, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T15:03:23Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - **Problem:** After the gateway is down for a long time, restart/orphan recovery **resurrects** subagent runs that were aborted hours ago — replaying `agent.wait` on a run that is no longer relevant. - **Root cause:** The restore reconciliation in

### #91682 fix(ui): add tooltip to Thinking dropdown in quick settings

- bucket: needs_proof
- author: XuZehan-iCenter
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: web-ui, size: XS, proof: supplied, P3, rating: 🦪 silver shellfish, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T15:05:05Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Add a `title` tooltip to the "Thinking" label in the Model & Thinking quick settings card. - Explains that this controls session-level thinking/reasoning mode and is separate from provider-level reasoning effort in agent config. - Partial fix for

### #91857 fix(identity): ackReaction falls back to wildcard channel config when channel not found

- bucket: needs_proof
- author: NarahariRaghava
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: XS, triage: mock-only-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T15:09:42Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - When a message arrives on a channel without a specific ackReaction configured, OpenClaw should fall back to `channels["*"].ackReaction` if one is set - Instead it was skipping the wildcard entirely and using the default 👀 even when the user had e

### #91875 fix(github-copilot): claude-opus-4.8 context window to 1M with reasoning support

- bucket: needs_proof
- author: yichu10c
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS, triage: needs-real-behavior-proof, extensions: github-copilot, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T15:10:46Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Updates model metadata in the GitHub Copilot plugin to match live Copilot endpoint capabilities. ## Changes **** - Added to with: - (was 128,000 — the default) - (was 8,192) - - - **** - Updated the bundled manifest entry for with the same values. #

### #91877 fix(discord): prime voice receive with op-5 Speaking burst on join

- bucket: needs_proof
- author: gabrielexito-stack
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: discord, size: M, triage: needs-real-behavior-proof, P1, rating: 🧂 unranked krab, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T15:10:50Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - When the bot joined a Discord voice channel and another speaker was already mid-utterance, the receive side could miss the first window of audio because no `Speaking` (op-5) frame had been observed. - This PR primes the receive side with a synthet

### #91885 fix(message): plumb maxLinesPerMessage from channel config into CLI send formatting

- bucket: needs_proof
- author: kagura-agent
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, proof: supplied, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T15:10:59Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fixes #91860 The `sendMessage` entrypoint (used by `openclaw message send` CLI) only forwarded `parseMode` into the formatting options passed to `sendDurableMessageBatch`. The channel-level `maxLinesPerMessage` config value was never included, so CL

### #93279 fix(telegram): restore readable default text sends

- bucket: needs_proof
- author: NianJiuZst
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: telegram, size: XL, proof: supplied, mantis: telegram-visible-proof, P1, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery, status: 📣 needs proof, proof: 📸 screenshot
- gitcrawl snapshot updated: 2026-06-15T15:14:33Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fixes #93263 by restoring Telegram's default text delivery, edits, and draft previews to the legacy-readable `sendMessage` / `editMessageText` path instead of the rich raw Bot API path. This keeps the change scoped to the outage path: - default text

### #61335 fix(usage): handle Daylight saving time (DST) hour boundaries

- bucket: needs_proof
- author: rex993
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: web-ui, size: M, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T15:34:29Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary This fixes a Control UI Usage-page freeze when a long session spans a local Daylight saving time (DST) transition. Today the hour-slicing code computes a local `:59:59.999` hour end from the current wall-clock time. In a repeated local hour at Dayli

### #64649 Test/run state machine clamp guard

- bucket: needs_proof
- author: Rahulkumar070
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS, triage: needs-real-behavior-proof, P3, rating: 🧂 unranked krab, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T15:36:14Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: The `activeRuns` clamp guard in `onRunEnd()` (`Math.max(0, activeRuns - 1)`) was completely untested. Calling `onRunEnd()` more times than `onRunStart()` (e.g. error handling paths, race conditions) would cause `activeRuns` to go negative

### #65180 fix(cli,sessions): make local model run stateless by default and keep transcript fallback profile-scoped

- bucket: needs_proof
- author: jnk0423
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, cli, size: S, triage: refactor-only, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T15:37:02Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## 요약 이 PR은 local one-shot model run correctness를 복구하기 위한 승격 패치셋이다. 포함된 변경은 두 가지다. 1. `infer model run --local`의 기본 동작을 stateless로 변경 - 기본 one-shot은 ephemeral session을 사용 - explicit `sessionId/sessionKey`가 있을 때만 reuse가 살아 있음 2. session store / transcript fallb

### #65198 test: cover string-backed non-streaming assistant replies

- bucket: needs_proof
- author: alexuser
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: XS, proof: supplied, P3, rating: 🧂 unranked krab, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T15:37:08Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Adds a single regression test covering the case where a `message_end` event carries its assistant reply as a plain string rather than an array of typed content blocks. The implementation path under test (`extractAssistantTextForPhase` in `pi-embedde

### #68127 fix: prevent toLowerCase error when model.id or model.name is undefined

- bucket: needs_proof
- author: nightq
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: XS, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T15:38:21Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fixes the "f.toLowerCase is not a function" error that occurs in the agent:bootstrap hook when model.id or model.name is undefined. ## Root Cause In `canonicalizeLegacyResolvedModel()` (src/agents/pi-embedded-runner/model.ts), the code called `.trim

### #68197 feat(line): add optional requireMentionForNonText group gate

- bucket: needs_proof
- author: revision-co-ltd
- author association: FIRST_TIMER
- draft: no
- assignees: none
- labels: channel: line, size: S, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T15:38:27Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary When `requireMention: true` is set on a LINE group, text messages are correctly gated by `resolveInboundMentionDecision`, but non-text messages (image, sticker, video, audio, file, location) always bypass the gate via `canDetectMention: message.type

### #69245 feat: enable cache-ttl context pruning for openai-completions providers

- bucket: needs_proof
- author: g18166599417-svg
- author association: FIRST_TIMER
- draft: no
- assignees: none
- labels: agents, size: XS, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T15:40:24Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Enable cache-ttl based context pruning for all providers using the \openai-completions\ API type. Currently, \isCacheTtlEligibleProvider\ only returns \ rue\ for Anthropic-family and Google-family providers (plus those registered via provider plugin

### #69355 feat(doctor): detect local rebuild vs pristine npm release

- bucket: needs_proof
- author: mikaeldiakhate-cell
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, commands, size: L, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 availability, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T15:40:55Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Problem A stock `openclaw update` silently overwrites locally patched installs. Regressions return quietly because operators have no signal that the running package has diverged from the pristine npm release. Concrete trigger: the 2026-04-20 dist-overlay au

### #69413 signal: detect bot mentions from native envelope metadata

- bucket: needs_proof
- author: danicuki
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: signal, size: M, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T15:41:02Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - **Problem:** Signal renders native @mentions as `@<uuid>` or `@<phone>` after hydrating `\uFFFC` placeholders, but the mention-gating regex patterns are derived from the agent's display name (e.g. `\b@?caio\b`). These never match, so `wasMentioned

### #69426 agents/context: unlock context1m on proxied Anthropic 1M-capable models (#69353)

- bucket: needs_proof
- author: sk7n4k3d
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, stale, size: S, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T15:41:21Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Fixes #69353. ### Summary `isAnthropic1MModel` in `src/agents/context.ts` gates the 1M context window on `provider === "anthropic"`, so `context1m: true` was a silent no-op for any provider proxying Claude Opus 4 / Sonnet 4 — notably the bundled `github-copilo
