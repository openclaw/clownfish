---
repo: openclaw/openclaw
cluster_id: pr-inventory-needs_proof-20260615T223445-044
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
  - "#58993"
  - "#65936"
  - "#72829"
  - "#72972"
  - "#73294"
  - "#74232"
  - "#74954"
  - "#75066"
  - "#93202"
  - "#80599"
  - "#86338"
  - "#87102"
  - "#87527"
  - "#87528"
  - "#87545"
  - "#87552"
  - "#87592"
  - "#87759"
  - "#87784"
  - "#87793"
  - "#87937"
  - "#92153"
  - "#92676"
  - "#93213"
  - "#93177"
cluster_refs:
  - "#58993"
  - "#65936"
  - "#72829"
  - "#72972"
  - "#73294"
  - "#74232"
  - "#74954"
  - "#75066"
  - "#93202"
  - "#80599"
  - "#86338"
  - "#87102"
  - "#87527"
  - "#87528"
  - "#87545"
  - "#87552"
  - "#87592"
  - "#87759"
  - "#87784"
  - "#87793"
  - "#87937"
  - "#92153"
  - "#92676"
  - "#93213"
  - "#93177"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "This is a PR inventory classification shard, not a dedupe cluster. Classify each PR independently and do not invent a shared canonical."
notes: "Generated from local gitcrawl open PR inventory on 2026-06-15T22:34:45.795Z; bucket=needs_proof; no GitHub mutation is possible in plan mode."
---

# PR Inventory needs_proof 44

This is a high-volume classification shard over open pull requests. It is not a dedupe cluster.

## Goal

Hydrate live GitHub state for each listed PR and emit one conservative action per PR. Prefer `keep_related`, `keep_independent`, `needs_human`, or `route_security`. Emit close-style planned actions only when fresh live evidence makes the PR boringly superseded, duplicate, abandoned, or low-signal under existing policies. For `target_updated_at`, copy only the hydrated value from the Cluster preflight artifact; do not use gitcrawl snapshot timestamps from this job body.

## Inventory

### #58993 fix(googlechat): support spaceType field for DM vs Space detection

- bucket: needs_proof
- author: Starhappysh
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: googlechat, stale, size: XS, triage: needs-real-behavior-proof, P1, rating: 🧂 unranked krab, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T07:46:15Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Add `spaceType` and `singleUserBotDm` fields to the `GoogleChatSpace` type - Update DM detection logic to check all three API fields: legacy `type`, modern `spaceType`, and `singleUserBotDm` ## Details Google Chat API deprecated the `space.type` f

### #65936 feat: add Asia/Shanghai to cron timezone suggestions

- bucket: needs_proof
- author: finallylly
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: web-ui, stale, size: XS, triage: needs-real-behavior-proof, P3, rating: 🧂 unranked krab, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T07:46:42Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Adds \`Asia/Shanghai\` to the \`CRON_TIMEZONE_SUGGESTIONS\` list in ui/src/ui/app-render.ts - Useful for users in the Asia region who want to use their local timezone in cron schedules ## Test plan - [x] Lint passes - [x] Type check passes

### #72829 Fix/copilot default models gpt 5 5 opus 1m

- bucket: needs_proof
- author: iot2edge
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T07:47:32Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Fixes #72805 ## Summary - Problem: GitHub Copilot's `/models` endpoint advertises `gpt-5.5` and `claude-opus-4.7-1m-internal`, but `extensions/github-copilot/models-defaults.ts:DEFAULT_MODEL_IDS` is missing both. Users have to hand-edit `~/.openclaw/openclaw.j

### #72972 fix(feishu): scope sequential queue by group session

- bucket: needs_proof
- author: AaronLuo00
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: feishu, size: S, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 session-state, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T07:47:46Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fix Feishu inbound queue scoping so grouped sessions are not still serialized at the whole-chat level. When `groupSessionScope` is configured as `group_topic` or `group_topic_sender`, Feishu conversations are already routed into separate sessions, b

### #73294 Add Discord response watchdog

- bucket: needs_proof
- author: martins-oss
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: S, triage: needs-real-behavior-proof, P1, rating: 🧂 unranked krab, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T07:47:56Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Fresh minimal branch superseding stale PR #73232 and auto-closed PR #73238. Task: 22d72cfc — Add Discord response watchdog for silent agent runs. Iris verification before PR creation: focused watchdog tests passed (105 tests) and diff was reduced to the intend

### #74232 fix: log and inject synthetic error results for unknown tool calls

- bucket: needs_proof
- author: none0663
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: M, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T07:48:15Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Add WARN logging when unknown/invalid tool calls are silently dropped by the session guard, recording tool name, ID, and drop reason - Inject synthetic `isError: true` toolResult into the transcript so the model receives explicit feedback ("Tool X

### #74954 fix(agents): prevent provider defaultModel from overriding agents.defaults.model (fixes #24170)

- bucket: needs_proof
- author: WeiYu021
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: commands, size: XL, triage: needs-real-behavior-proof, P1, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T07:48:20Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: When creating a new agent via 'openclaw agents add', the provider's defaultModel was incorrectly being set as the agent's model.primary, instead of inheriting from agents.defaults.model. Changes: - applyAuthChoiceLoadedPluginProvider: no longer returns agentMo

### #75066 fix(sessions): preserve activity for compaction metadata

- bucket: needs_proof
- author: sahilsatralkar
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: M, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 session-state, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T07:48:25Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Describe the problem and fix in 2–5 bullets: If this PR fixes a plugin beta-release blocker, title it `fix(<plugin-id>): beta blocker - <summary>` and link the matching `Beta blocker: <plugin-name> - <summary>` issue labeled `beta-blocker`. Contribu

### #93202 fix(feishu): convert presentation to card on message.edit

- bucket: needs_proof
- author: mmyzwl
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: feishu, size: XS, proof: supplied, P2, rating: 🧂 unranked krab, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T07:48:39Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Convert the `presentation` parameter to a Feishu card when editing messages, so edits with empty card-like `presentation` blocks don't fail with Feishu API error 200621. ## Root Cause When the agent calls `message.edit` with both `message` (text) an

### #80599 fix(mattermost): preserve DM reply context metadata

- bucket: needs_proof
- author: tradmangh
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: mattermost, size: M, proof: supplied, P2, rating: 🧂 unranked krab, merge-risk: 🚨 availability, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T07:54:14Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: - Problem: Mattermost DM replies were missing reply-target context in the inbound payload, so the agent could not reliably see the quoted/replied-to message body or sender in direct-message reply flows. - Why it matters: this makes DM reply handling weaker tha

### #86338 feat(web-search): add Perplexity search context size

- bucket: needs_proof
- author: leno23
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, agents, size: M, proof: supplied, extensions: perplexity, P2, rating: 🦪 silver shellfish, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T07:54:21Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Adds the `search_context_size` enum hint to the shared `web_search` schema for Perplexity Sonar depth control. - Advertises and forwards the hint on the Perplexity chat-completions path as `web_search_options.search_context_size`, with enum valida

### #87102 Guard compaction reserve against prompt starvation

- bucket: needs_proof
- author: cbcampos
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: S, triage: needs-real-behavior-proof, P1, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T07:58:52Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - cap Pi compaction reserve to at most half of the resolved context window - lower an already-too-large reserve during Pi settings application instead of preserving prompt starvation - make the context-overflow recovery hint warn when the configured

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
