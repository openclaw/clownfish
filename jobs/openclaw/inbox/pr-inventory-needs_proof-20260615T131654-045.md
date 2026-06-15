---
repo: openclaw/openclaw
cluster_id: pr-inventory-needs_proof-20260615T131654-045
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
  - "#87102"
  - "#93210"
  - "#87521"
  - "#87526"
  - "#87527"
  - "#87528"
  - "#87545"
  - "#87552"
  - "#87592"
  - "#87759"
  - "#87784"
  - "#87793"
  - "#87937"
  - "#90740"
  - "#90932"
  - "#92153"
  - "#92676"
  - "#91132"
  - "#91156"
  - "#91157"
  - "#91177"
  - "#91206"
  - "#93213"
  - "#93177"
  - "#93224"
  - "#87667"
  - "#93168"
  - "#92680"
  - "#93186"
  - "#50359"
  - "#93187"
  - "#93212"
  - "#93230"
  - "#93232"
  - "#92577"
  - "#89088"
  - "#93218"
  - "#93235"
  - "#93240"
  - "#49511"
cluster_refs:
  - "#87102"
  - "#93210"
  - "#87521"
  - "#87526"
  - "#87527"
  - "#87528"
  - "#87545"
  - "#87552"
  - "#87592"
  - "#87759"
  - "#87784"
  - "#87793"
  - "#87937"
  - "#90740"
  - "#90932"
  - "#92153"
  - "#92676"
  - "#91132"
  - "#91156"
  - "#91157"
  - "#91177"
  - "#91206"
  - "#93213"
  - "#93177"
  - "#93224"
  - "#87667"
  - "#93168"
  - "#92680"
  - "#93186"
  - "#50359"
  - "#93187"
  - "#93212"
  - "#93230"
  - "#93232"
  - "#92577"
  - "#89088"
  - "#93218"
  - "#93235"
  - "#93240"
  - "#49511"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "This is a PR inventory classification shard, not a dedupe cluster. Classify each PR independently and do not invent a shared canonical."
notes: "Generated from local gitcrawl open PR inventory on 2026-06-15T13:16:54.482Z; bucket=needs_proof; no GitHub mutation is possible in plan mode."
---

# PR Inventory needs_proof 45

This is a high-volume classification shard over open pull requests. It is not a dedupe cluster.

## Goal

Hydrate live GitHub state for each listed PR and emit one conservative action per PR. Prefer `keep_related`, `keep_independent`, `needs_human`, or `route_security`. Emit close-style planned actions only when fresh live evidence makes the PR boringly superseded, duplicate, abandoned, or low-signal under existing policies. For `target_updated_at`, copy only the hydrated value from the Cluster preflight artifact; do not use gitcrawl snapshot timestamps from this job body.

## Inventory

### #87102 Guard compaction reserve against prompt starvation

- bucket: needs_proof
- author: cbcampos
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: S, triage: needs-real-behavior-proof, P1, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T07:58:52Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - cap Pi compaction reserve to at most half of the resolved context window - lower an already-too-large reserve during Pi settings application instead of preserving prompt starvation - make the context-overflow recovery hint warn when the configured

### #93210 feat(ios): native HealthKit read + export to self-hosted webhook

- bucket: needs_proof
- author: hernaninverso
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: ios, size: XL, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T07:59:31Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Adds an **opt-in, privacy-first Health Export** module to the iOS app: native read-only HealthKit access that forwards selected metrics to a webhook the user runs on their **own private network**. No third-party services, no cloud middleman. This is

### #87521 fix(infra): normalize Request input in proxy-fetch to prevent dropped headers/body

- bucket: needs_proof
- author: geekhuashan
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: M, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T08:02:35Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Problem When callers pass a `Request` object or a request-like plain object `{url, method, headers, body}` to `makeProxyFetch` / `resolveProxyFetchFromEnv`, the current code casts `input as string | URL` and passes `init` directly to undici's `fetch`. This 

### #87526 feat(volcengine): add allowPrivateNetwork option for TTS behind TUN proxy

- bucket: needs_proof
- author: geekhuashan
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, extensions: volcengine, triage: needs-real-behavior-proof, P2, rating: 🦪 silver shellfish, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T08:02:45Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Adds `allowPrivateNetwork` boolean option to Volcengine TTS provider to support TUN proxy stacks that use RFC 2544 fake-IP ranges for DNS resolution. **Security approach (revised from original PR):** Instead of passing the broad `allowPrivateNetwork

### #87527 fix(bash-tools): default stdin to pipe-closed in service-managed mode

- bucket: needs_proof
- author: geekhuashan
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS, triage: needs-real-behavior-proof, P2, rating: 🦪 silver shellfish, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T08:02:51Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Problem When OpenClaw runs as a launchd service (`OPENCLAW_SERVICE_MODE=launchd`), spawned child processes inherit fd 0 (stdin) from the service manager process. On Node 26, launchd closes fd 0 before exec. The child process inherits a closed file descripto

### #87528 fix(webchat): add Content-Disposition header for assistant-media downloads

- bucket: needs_proof
- author: LPtrichor
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: web-ui, gateway, size: XS, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, status: 📣 needs proof, merge-risk: 🚨 other
- gitcrawl snapshot updated: 2026-06-15T08:02:57Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Problem When downloading files via webchat (`GET /__openclaw__/assistant-media?source=...`), the browser save dialog shows `assistant-media` (or `assistant-media (12)`) instead of the original filename (e.g. `script_v3.docx`). ## Root Cause `handleControlUi

### #87545 test(agents): cover quota prompt takeover regression

- bucket: needs_proof
- author: Grynn
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: S, triage: needs-real-behavior-proof, P3, rating: 🦪 silver shellfish, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T08:03:24Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Summary: - Adds a focused regression for the #85103 path where an OpenAI Codex quota error writes an assistant error transcript during prompt streaming. - Asserts the original usage_limit_reached provider error survives and cleanup does not mark the session as

### #87552 [codex] Keep ambiguous delivery attempts recoverable

- bucket: needs_proof
- author: solavrc
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, size: S, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T08:03:28Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Keeps outbound delivery entries in ambiguous post-send states pending when adapter reconciliation is unavailable. - Preserves the existing no-blind-replay behavior while leaving the entry retryable for later reconciliation/backoff. - Updates recov

### #87592 feat(sidebar): add Session Reset button alongside New Session

- bucket: needs_proof
- author: apoapostolov
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: web-ui, size: S, triage: needs-real-behavior-proof, P3, rating: 🧂 unranked krab, merge-risk: 🚨 session-state, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T08:04:36Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Adds a **Reset session** button in the sidebar directly below the existing **New session** button. Unlike "New session" which creates a new session key, this button reuses the current session key by calling `sessions.reset` — clearing chat history w

### #87759 Add Telegram per-group UI overrides

- bucket: needs_proof
- author: Al-bots
- author association: FIRST_TIMER
- draft: no
- assignees: none
- labels: docs, channel: telegram, agents, stale, size: M, proof: supplied, mantis: telegram-visible-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery, status: 📣 needs proof, proof: 🎥 video
- gitcrawl snapshot updated: 2026-06-15T08:07:11Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - add Telegram per-group/topic overrides for UI streaming settings (`streaming.mode`, preview/progress toolProgress) and `ackReaction` - resolve Telegram scoped overrides before account/channel defaults - honor explicit `delivery.mode="none"` on mai

### #87784 fix(slack): add explicit mention timeout fallback

- bucket: needs_proof
- author: jeremykraklist
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, channel: slack, stale, size: M, proof: supplied, P1, rating: 🦪 silver shellfish, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T08:07:20Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## What Adds a Slack-visible fail-safe for explicit human room/channel mentions when the routed handler hits a Codex/app-server timeout before any assistant text, tool output, or other visible reply is delivered. - Detects structured Codex `turn_completion_idl

### #87793 fix(codex): clarify unsafe app-server completion stalls

- bucket: needs_proof
- author: slatem
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, extensions: codex, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T08:07:26Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - clarify the replay-unsafe Codex app-server timeout message so users know OpenClaw intentionally did not auto-replay after tool activity - include completed item id/type/status/tool metadata in app-server idle-timeout diagnostics, matching the raw 

### #87937 fix(browser): read Windows Chrome version from build dir in doctor

- bucket: needs_proof
- author: MukundaKatta
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, triage: mock-only-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T08:08:13Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - `openclaw doctor` on Windows reports `Could not determine the installed Chrome version. Chrome MCP requires Google Chrome 144+ on this host.` even when a supported Chrome (e.g. 148.0.7778.179) is installed at the standard path and the browser tool

### #90740 Implement durable system-event fallback for subagent completion when handoff is still pending

- bucket: needs_proof
- author: bradfreels
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: M, triage: needs-real-behavior-proof, P1, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T08:15:21Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Replace the give-up branch in `subagent-announce-delivery.ts` (when the direct subagent-announce handoff fires `completion_handoff_pending`) with a durable fallback that enqueues the completion trigger into the requester's in-process system-event in

### #90932 fix(ui): scope local assistant avatar override to agent ID (fixes #90890)

- bucket: needs_proof
- author: xydigit-sj
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: web-ui, size: S, proof: supplied, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T08:16:40Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Local assistant avatar overrides were stored under a single global `localStorage` key (`openclaw.control.assistant.v1`), so setting an avatar for one agent changed it for all agents. This PR scopes the override to the current agent ID. ## Changes - 

### #92153 #92067: fix(telegram): honor ingest config before unaddressed-group-media skip

- bucket: needs_proof
- author: Pandah97
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: telegram, size: XS, proof: supplied, mantis: telegram-visible-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T08:19:13Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Honor group/topic `ingest` config before the unaddressed-group-media skip check, so plugins with `ingest: true` receive media-bearing messages in addition to text messages. ## Root Cause `shouldSkipMediaDownloadForUnaddressedMentionGroup` returned `

### #92676 feat: Rate-limit fallback user-visible error notification (message-lifecycle Phase 2 extension)

- bucket: needs_proof
- author: kumaxs
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, agents, size: XS, triage: needs-real-behavior-proof, P1, rating: 🧂 unranked krab, status: 🛠️ actively grinding
- gitcrawl snapshot updated: 2026-06-15T08:20:01Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary When the primary model triggers rate_limit / billing / overloaded, OpenClaw silently suspends the session for 30 minutes — the user experiences dead air with no feedback. This PR adds a **user-visible notification** delivered via the channel when a 

### #91132 feat(gateway): add first-output and completed latency phases to chat.send_timing

- bucket: needs_proof
- author: tanshanshan
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: web-ui, gateway, size: M, proof: supplied, P2, rating: 🧂 unranked krab, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T08:27:42Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Partially addresses #90556. Narrow, server-only change. ## Change Type / Scope / Linked Issue - **Type**: feat - **Scope**: gateway - **Linked Issue**: Partially addresses #90556 ## Motivation Issue #90556 requests displaying response latency in the

### #91156 fix(telegram): route outbound sends through configured default account (#61012)

- bucket: needs_proof
- author: sumitaich1998
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: telegram, size: S, triage: needs-real-behavior-proof, mantis: telegram-visible-proof, P1, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T08:28:07Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary With multiple Telegram bot accounts configured, outbound sends via `openclaw message send --channel telegram` (and proactive/subagent sends) ignored the configured default account and always routed through the implicit env/top-level `"default"` bot.

### #91157 fix: stabilize claude-cli extraSystemPromptHash across group turns (#69118)

- bucket: needs_proof
- author: sumitaich1998
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, triage: needs-real-behavior-proof, mantis: telegram-visible-proof, P1, rating: 🧂 unranked krab, merge-risk: 🚨 automation, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T08:28:14Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary On the `claude-cli` backend, agent sessions reset on **every turn transition** in group-style channels (Discord channels, Telegram groups, etc.). Turn 2 is generated against a fresh `claude -p` with no memory of turn 1, so the agent appears to have 

### #91177 fix(tui): persist canonical provider in session modelProvider

- bucket: needs_proof
- author: Kirchlive
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: S, proof: supplied, P2, rating: 🧂 unranked krab, merge-risk: 🚨 session-state, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T08:28:40Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary After a CLI-routed agent run (any model with `agentRuntime.id` pinned to a CLI backend such as `claude-cli` or `google-antigravity-cli`), the TUI footer renders `claude-cli/claude-sonnet-4-6` instead of `anthropic/claude-sonnet-4-6` — leaking the im

### #91206 fix(agents/subagent-spawn): pass resolved model to gateway agent call

- bucket: needs_proof
- author: tanshanshan
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: XS, proof: supplied, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T08:29:10Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Fixes #91171. AI-generated fix, human-reviewed. ## Summary The gateway `agent` call in `spawnSubagentDirect` was missing the `model` parameter. The plan resolver (`resolveSubagentModelAndThinkingPlan`) correctly canonicalizes `modelOverride` into `resolvedMode

### #93213 fix(feishu): prefer context open_message_id over temporary card-action callback ID (fixes #56818)

- bucket: needs_proof
- author: liuhao1024
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: feishu, size: XS, proof: supplied, P2, rating: 🧂 unranked krab, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T08:38:48Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## What does this PR do? Fixes Feishu card-action callback handling to prefer the original card message ID (`context.open_message_id`) over temporary `card-action-c-*` callback tokens, and filters out temporary IDs from reply targets to prevent "Invalid ids" e

### #93177 fix(ui): clear stale Talk error when session transitions to non-error state (fixes #88176)

- bucket: needs_proof
- author: liuhao1024
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: web-ui, size: XS, proof: supplied, P1, rating: 🦪 silver shellfish, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T08:39:16Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## fix(ui): clear stale Talk error when session transitions to non-error state (fixes #88176) When a Talk session fails (e.g. `gpt-realtime` model access error) and the user retries, the `onStatus` callback in `toggleRealtimeTalk()` sets `lastError`/`chatError

### #93224 [codex] Allow message tool in default sandbox allowlist

- bucket: needs_proof
- author: yu-xin-c
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: XS, triage: needs-real-behavior-proof, mantis: telegram-visible-proof, P1, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T08:43:30Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Include the `message` tool in the default sandbox allowlist. - Add regression coverage for the resolved sandbox tool policy. ## Why Sandboxed agents replying to channel DMs can lose access to the message tool when the default sandbox policy omits 

### #87667 fix(slack): opt-in flag to collapse assistant DM threads into base DM session

- bucket: needs_proof
- author: paulgomega
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, channel: slack, size: M, proof: supplied, P1, rating: 🦪 silver shellfish, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T08:44:20Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Adds `channels.slack.dm.collapseAssistantThreads` (boolean, default `false`) that, when enabled, routes all DM messages — including those wrapped in Slack's `assistant_app_thread` — into the user's base DM session instead of spawning a new `:thread:

### #93168 fix(active-memory): exclude dreaming-narrative session keys from interactive eligibility gate

- bucket: needs_proof
- author: xialonglee
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS, proof: supplied, P2, rating: 🧂 unranked krab, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T08:52:56Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - AM eligibility gate (`isEligibleInteractiveSession`) accepted dreaming-narrative cron session keys because they share `trigger="user"` with real conversational sessions. - Each false-accepted invocation paid the full active-memory cold-start cost 

### #92680 feat(read): add encoding parameter for GBK and non-UTF-8 text files (#92664)

- bucket: needs_proof
- author: wangmiao0668000666
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: scripts, agents, size: M, proof: supplied, P2, rating: 🦪 silver shellfish, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T08:57:40Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fixes #92664. The built-in `read` session tool always decoded text files as UTF-8, which produced mojibake for files saved in legacy encodings such as GBK on Chinese Windows. This change routes session read-tool text buffers through the shared `deco

### #93186 fix(cache): stable tool result aggregate truncation

- bucket: needs_proof
- author: L-Trump
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: S, triage: needs-real-behavior-proof, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 session-state, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T09:06:09Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Reduces prompt-cache churn during long tool-heavy agent runs by making live tool-result truncation less eager to rewrite old prompt prefix content. - Changes aggregate tool-result reduction from exact byte shaving to coarse 20% budget quanta, crea

### #50359 Fix embedded read-image media fallback

- bucket: needs_proof
- author: wangyaok1
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: S, triage: needs-real-behavior-proof, mantis: telegram-visible-proof, P1, rating: 🧂 unranked krab, merge-risk: 🚨 message-delivery, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T09:07:13Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - fall back to the originating tool args when embedded tool results contain image blocks but no `details.path` - thread the original `tool_execution_start` args into the non-verbose media emission path - add regression tests for direct extraction an

### #93187 fix(memory-core): exclude archive transcripts from dreaming corpus and propagate cron parentage to subagents

- bucket: needs_proof
- author: xialonglee
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: extensions: memory-core, agents, size: M, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T09:09:38Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Fix two defects in Dreaming session-corpus ingestion that cause cron-heavy deployment corpora to be dominated by automation noise (67%+ archive transcripts): 1. **Archive re-ingestion**: `listSessionFilesForAgent` used `isUsageCountedSessionTransc

### #93212 fix(failover): classify Zhipu (GLM) error [1305] as overloaded

- bucket: needs_proof
- author: mmyzwl
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: XS, proof: supplied, P2, rating: 🦪 silver shellfish, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T09:11:47Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Add Zhipu (GLM) overloaded error code `[1305]` and Chinese message `访问量过大` to the failover classification patterns so the configured model fallback chain is triggered instead of failing immediately. ## Root Cause When the GLM-5.2 model is overloaded

### #93230 fix(cli): restart gateway for missing auth channel

- bucket: needs_proof
- author: mushuiyu886
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: cli, size: S, proof: supplied, P2, rating: 🦪 silver shellfish, merge-risk: 🚨 availability, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T09:12:14Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fixes #91932. - Requests the existing safe gateway restart RPC when local channel login saves auth but the running gateway rejects `channels.start` because it does not know that channel yet. - Keeps the existing warning-only behavior for unrelated l

### #93232 fix(mattermost): allow bare @mention with empty body to wake the agent (fixes #93205)

- bucket: needs_proof
- author: liuhao1024
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: mattermost, size: XS, proof: supplied, P2, rating: 🧂 unranked krab, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T09:20:33Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary A bare `@mention` of the bot with no other text (e.g. just `@openclaw`) is silently dropped in Mattermost group channels and DMs. After `normalizeMention` strips the bot mention, `bodyText` becomes empty and the empty-body guard discards the message

### #92577 fix: deduplicate consecutive assistant messages in session-memory hook

- bucket: needs_proof
- author: xydt-tanshanshan
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, proof: supplied, P2, rating: 🧂 unranked krab, merge-risk: 🚨 session-state, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T09:22:06Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary When using a model with thinking/reasoning enabled (e.g. DeepSeek), the session JSONL may contain two entries for the same assistant response: 1. The raw version with thinking blocks (`[{type: "thinking", text: "..."}, {type: "text", text: "Hi there

### #89088 test(gateway): cover rollover model override preservation

- bucket: needs_proof
- author: charles-openclaw
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, size: S, triage: mock-only-proof, P3, rating: 🦪 silver shellfish, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T09:24:32Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Adds a focused gateway agent regression for daily session rollover with a user-selected model override. - Verifies a stale pre-midnight session rotates to a new session id while preserving the stored user `providerOverride`, `modelOverride`, and `

### #93218 feat: add session stream mode command

- bucket: needs_proof
- author: clawSean
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, channel: discord, channel: slack, channel: telegram, size: M, triage: mock-only-proof, mantis: telegram-visible-proof, P3, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T09:43:59Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Adds a shared `/stream` command (alias `/streaming`) for session-scoped preview streaming mode overrides without editing channel config or restarting the gateway. - Persists the canonical mode on `SessionEntry.streamingMode`; accepted modes are `o

### #93235 fix(qmd): strip XDG env vars from mcporter spawn env to fix mcporter ≥ 0.10 config resolution (fixes #79847)

- bucket: needs_proof
- author: liuhao1024
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: extensions: memory-core, size: XS, proof: supplied, P1, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T09:53:50Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary `QmdMemoryManager` passes its agent-scoped `XDG_CONFIG_HOME` / `XDG_CACHE_HOME` overrides to mcporter spawn calls. Starting with mcporter ≥ 0.10, mcporter honors `XDG_CONFIG_HOME` to discover its config — and now finds nothing under each agent's qmd

### #93240 fix(plugins): load explicitly enabled externally-installed plugins at gateway startup

- bucket: needs_proof
- author: xialonglee
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, triage: needs-real-behavior-proof, P1, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T09:54:52Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Externally-installed npm plugins enabled via `plugins.entries.<id>.enabled=true` were never loaded at gateway startup if they didn't also match a channel, provider, hook, harness, or `activation.onStartup` predicate. - Root cause: `resolveGatewayS

### #49511 feat(control-ui): render Mermaid code fences in webchat

- bucket: needs_proof
- author: chembohuang
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: web-ui, size: L, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 security-boundary, status: 📣 needs proof, proof: 📸 screenshot
- gitcrawl snapshot updated: 2026-06-15T09:54:57Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Render fenced ` ```mermaid ` blocks in Control UI webchat with lazy-loaded Mermaid and dedicated chat styling. - Keep Mermaid source blocks collapsible and copy-friendly in the transcript UI. - Harden Mermaid rendering: - case-insensitive language

