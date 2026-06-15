---
repo: openclaw/openclaw
cluster_id: pr-inventory-recent_active-20260615T154534-121
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
  - "#92040"
  - "#92126"
  - "#91625"
  - "#91463"
  - "#90267"
  - "#92227"
  - "#90648"
  - "#92237"
  - "#92261"
  - "#90259"
  - "#92263"
  - "#88796"
  - "#92283"
  - "#91644"
  - "#91921"
  - "#92339"
  - "#92328"
  - "#88898"
  - "#92236"
  - "#92363"
  - "#92383"
  - "#91889"
  - "#91776"
  - "#91768"
  - "#91977"
cluster_refs:
  - "#92040"
  - "#92126"
  - "#91625"
  - "#91463"
  - "#90267"
  - "#92227"
  - "#90648"
  - "#92237"
  - "#92261"
  - "#90259"
  - "#92263"
  - "#88796"
  - "#92283"
  - "#91644"
  - "#91921"
  - "#92339"
  - "#92328"
  - "#88898"
  - "#92236"
  - "#92363"
  - "#92383"
  - "#91889"
  - "#91776"
  - "#91768"
  - "#91977"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "This is a PR inventory classification shard, not a dedupe cluster. Classify each PR independently and do not invent a shared canonical."
notes: "Generated from local gitcrawl open PR inventory on 2026-06-15T15:45:34.217Z; bucket=recent_active; no GitHub mutation is possible in plan mode."
---

# PR Inventory recent_active 121

This is a high-volume classification shard over open pull requests. It is not a dedupe cluster.

## Goal

Hydrate live GitHub state for each listed PR and emit one conservative action per PR. Prefer `keep_related`, `keep_independent`, `needs_human`, or `route_security`. Emit close-style planned actions only when fresh live evidence makes the PR boringly superseded, duplicate, abandoned, or low-signal under existing policies. For `target_updated_at`, copy only the hydrated value from the Cluster preflight artifact; do not use gitcrawl snapshot timestamps from this job body.

## Inventory

### #92040 fix(provider): route thinking profiles by model API

- bucket: recent_active
- author: 849261680
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: L, extensions: anthropic, extensions: openai, proof: supplied, P2, rating: 🌊 off-meta tidepool, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider
- gitcrawl snapshot updated: 2026-06-11T08:39:11Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Fixes custom Anthropic-compatible providers whose selected model API is `anthropic-messages` but whose provider id is not literally `anthropic`. - Carries the selected catalog/config model API into thinking policy resolution so Anthropic Messages 

### #92126 [codex] fix(skill-creator): accept mixed-case resources

- bucket: recent_active
- author: Pluviobyte
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, proof: supplied, rating: 🌊 off-meta tidepool
- gitcrawl snapshot updated: 2026-06-11T08:48:59Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Normalize `init_skill.py --resources` tokens to canonical lowercase before validation. - Keep invalid resource diagnostics tied to the original user spelling. - Add focused regression tests for mixed-case input, case-insensitive deduplication, emp

### #91625 fix(cron): add cron edit --clear-model to clear a job's model override

- bucket: recent_active
- author: ly-wang19
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, cli, size: XS, proof: supplied, P2, rating: 🌊 off-meta tidepool
- gitcrawl snapshot updated: 2026-06-11T10:53:47Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - The Gateway RPC `cron.update` already supports **clearing** a cron job's `payload.model` override by sending `model: null` (landed via #91298 — the patch schema, `normalizeCronJobPatch`, and `mergeCronPayload` all honor `null` as "delete this key"

### #91463 fix #63343: Browser bridge tab not found race

- bucket: recent_active
- author: mushuiyu886
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, proof: supplied, rating: 🌊 off-meta tidepool
- gitcrawl snapshot updated: 2026-06-11T14:49:05Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Fixes #63343. ## Summary - Preserve the `openTab("about:blank")` result in `ensureTabAvailable()` so a newly created target remains selectable while CDP `/json/list` is still catching up. - For local-managed profiles, wait through the existing tab discovery wi

### #90267 fix(doctor): archive conflicting plugin install index

- bucket: recent_active
- author: mushuiyu886
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: commands, size: S, proof: supplied, P2, rating: 🌊 off-meta tidepool, merge-risk: 🚨 compatibility
- gitcrawl snapshot updated: 2026-06-11T16:43:14Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: legacy `plugins/installs.json` can keep producing migration warnings after `openclaw doctor --fix` when shared SQLite already has the authoritative resolved npm artifact metadata, but broad archival would hide real install metadata drift.

### #92227 fix(codex): avoid refreshing valid app-server OAuth

- bucket: recent_active
- author: dredozubov
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: S, extensions: codex, triage: mock-only-proof, rating: 🌊 off-meta tidepool
- gitcrawl snapshot updated: 2026-06-11T17:29:21Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Avoid forced OAuth refresh for Codex app-server token callbacks when the selected OAuth credential is still usable. - Keep near-expiry credentials refreshing through the existing provider-auth path. - Classify OpenAI app-session termination messag

### #90648 fix(discord): protect mention aliases in code fences

- bucket: recent_active
- author: rohitjavvadi
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: discord, size: M, proof: supplied, P2, rating: 🌊 off-meta tidepool, merge-risk: 🚨 message-delivery
- gitcrawl snapshot updated: 2026-06-11T17:45:13Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fixes #90643. Discord mention alias rewriting now skips Markdown code spans with a local scanner instead of a non-greedy regex, so a triple-backtick literal inside a fenced code block no longer makes later in-fence `@handle` text eligible for outbou

### #92237 fix(agents): preserve runtime settings overrides [AI-assisted]

- bucket: recent_active
- author: sercada
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: S, proof: supplied, rating: 🌊 off-meta tidepool
- gitcrawl snapshot updated: 2026-06-11T18:57:24Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - keep `SettingsManager.applyOverrides()` as a runtime override layer instead of merging it only into the current settings snapshot - recompute effective settings from global + project + runtime overrides after `save()` and `reload()` - cover the em

### #92261 Fix live orphan session transcript visibility

- bucket: recent_active
- author: skocher
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: extensions: memory-core, size: S, extensions: memory-wiki, proof: supplied, rating: 🌊 off-meta tidepool
- gitcrawl snapshot updated: 2026-06-11T21:20:55Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - allow owner-scoped live transcript hits to fall back to synthetic session keys when the combined session store has no entry - keep the fallback scoped to the transcript owner/current agent so cross-agent live orphan hits still fail closed - apply 

### #90259 Add reset family carryover summaries

- bucket: recent_active
- author: simplyclever914
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: web-ui, gateway, scripts, agents, size: L, extensions: qa-lab, plugin: bonjour, proof: supplied, P2, rating: 🌊 off-meta tidepool, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state
- gitcrawl snapshot updated: 2026-06-11T21:35:55Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Behavior or issue addressed Depends on #90239. When a session has been reset/rotated, the active transcript can be clean while the previous reset archive still contains the latest compaction summary. The next embedded-agent prompt therefore starts without t

### #92263 Fix heartbeat reasoning payload selection

- bucket: recent_active
- author: harjothkhara
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, proof: supplied, rating: 🌊 off-meta tidepool
- gitcrawl snapshot updated: 2026-06-11T22:14:27Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fixes #92260. This fixes heartbeat main-reply selection so reasoning payloads are not delivered as the visible heartbeat reply when `includeReasoning` is unset. The selector now skips flagged reasoning payloads (`isReasoning: true`) and the same com

### #88796 fix(discord): resolve guildId from session channel for search actions

- bucket: recent_active
- author: SebTardif
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: discord, size: S, proof: supplied, P2, rating: 🌊 off-meta tidepool, merge-risk: 🚨 message-delivery
- gitcrawl snapshot updated: 2026-06-11T23:28:01Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Fixes #88790 ## Summary The Discord message `search` action throws `ToolInputError: guildId required` whenever the model does not pass an explicit `guildId`. In a guild channel session, the guild id is known to the runtime (the inbound source carries it and th

### #92283 fix(agents): don't inject A2A turns into isolated-cron sessions_send (#92257)

- bucket: recent_active
- author: harjothkhara
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: S, proof: supplied, rating: 🌊 off-meta tidepool
- gitcrawl snapshot updated: 2026-06-11T23:48:11Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Fire-and-forget cross-session `sessions_send` ran the A2A ping-pong loop for every requester, and for an isolated cron requester its first iteration fed the target agent's reply back into the isolated cron session as a new turn, corrupting that ru

### #91644 feat(gateway): add OpenAI-compatible /v1/audio/speech endpoint

- bucket: recent_active
- author: tracy-e
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, gateway, size: L, extensions: openai, extensions: tts-local-cli, plugin: azure-speech, proof: supplied, P2, rating: 🌊 off-meta tidepool, merge-risk: 🚨 compatibility
- gitcrawl snapshot updated: 2026-06-12T02:19:23Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Adds a config-gated `POST /v1/audio/speech` endpoint that bridges OpenAI-compatible text-to-speech requests onto OpenClaw's already-configured TTS providers, so OpenAI SDK / Open WebUI / LobeChat style clients can synthesize speech through the gat

### #91921 fix(agents): deliver background exec completion to agent via [OpenClaw exec completion]

- bucket: recent_active
- author: solodmd
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, proof: supplied, P1, rating: 🌊 off-meta tidepool, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, merge-risk: 🚨 message-delivery
- gitcrawl snapshot updated: 2026-06-12T03:55:03Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - **Problem**: When a background exec command (`exec background=true`) completes, the agent receives a heartbeat wake with `[OpenClaw heartbeat poll]` as the transcript placeholder. This causes the model to treat the turn as a heartbeat poll — it re

### #92339 fix(issue): resolve #91804 [Bug]: Internal Reasoning Leakage in 2026.6.5

- bucket: recent_active
- author: xuwei-xy
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: M, extensions: qa-lab, proof: supplied, rating: 🌊 off-meta tidepool
- gitcrawl snapshot updated: 2026-06-12T04:16:48Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary 修复 issue #91804 中报告的问题。 ### Bug type Regression (worked before, now fails) ### Beta release blocker No ### Summary Since upgrading to OpenClaw 2026.6.5, internal agent reasoning/thinking is being exposed to users in eve ## Changes - `extensions/qa-l

### #92328 Fix dashboard history projection and approval followups

- bucket: recent_active
- author: Hidetsugu55
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, agents, size: S, proof: supplied, rating: 🌊 off-meta tidepool
- gitcrawl snapshot updated: 2026-06-12T04:42:11Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Fixes dashboard history projection so toolCall-only assistant messages do not hide recent user context, and suppresses prompt persistence for exec approval follow-up resumes. This is a clean replacement for #92312 with only the intended minimal diff. Tests: - 

### #88898 fix(reply): also drop tool-error progress payloads under messages.suppressToolErrors

- bucket: recent_active
- author: amittell
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS, proof: supplied, P2, rating: 🌊 off-meta tidepool
- gitcrawl snapshot updated: 2026-06-12T05:42:44Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary `messages.suppressToolErrors` is an existing user-facing config knob that hides tool-error noise from chat (landed in #16620 / #81561). Today it only drops the warning TEXT inside `src/auto-reply/reply/payloads.ts`. The error tool-result payload is 

### #92236 fix(webchat): surface Codex commentary progress

- bucket: recent_active
- author: 100yenadmin
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, channel: telegram, app: web-ui, size: S, proof: supplied, rating: 🌊 off-meta tidepool
- gitcrawl snapshot updated: 2026-06-12T06:22:20Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## What This PR Fixes OpenClaw's default Codex app-server harness already emits live commentary while an agent is thinking or working. Those updates arrive in WebChat as agent events with: - `stream: "item"` - `data.kind: "preamble"` - `data.progressText: "...

### #92363 #92224: fix(models): report local models as available in CLI list output

- bucket: recent_active
- author: zhangqueping
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: commands, size: XS, proof: supplied, P2, rating: 🌊 off-meta tidepool, merge-risk: 🚨 compatibility
- gitcrawl snapshot updated: 2026-06-12T07:57:47Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fix `openclaw models list --json` showing `available: false` for local Ollama models that are running and working correctly. ## Root Cause `toModelRow` in `list.model-row.ts` determined availability via provider auth (API keys). Local providers like

### #92383 fix(gateway): never return an empty chat.history transcript

- bucket: recent_active
- author: Hidetsugu55
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: web-ui, gateway, size: S, proof: supplied, P2, rating: 🌊 off-meta tidepool
- gitcrawl snapshot updated: 2026-06-12T08:11:21Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: `enforceChatHistoryFinalBudget` returned an **empty array** when even a single oversized-message placeholder could not fit the chat-history byte budget — for example when the source transcript message carried very large metadata (a corrupted or huge `__opencla

### #91889 feat(plugin-sdk): surface accountId on agent hook context

- bucket: recent_active
- author: yukunlabs
- author association: FIRST_TIMER
- draft: no
- assignees: none
- labels: docs, agents, size: S, proof: supplied, P2, rating: 🌊 off-meta tidepool, merge-risk: 🚨 compatibility
- gitcrawl snapshot updated: 2026-06-12T08:42:39Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## TL;DR Adds an optional `accountId` to the plugin **agent hook context** so account-aware plugins can read which channel account a turn belongs to, instead of reverse-engineering it from `sessionKey` (which doesn't carry it for group or cron runs). Fully add

### #91776 fix(ios): refresh permission rows after grants

- bucket: recent_active
- author: zats
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: ios, size: XS, proof: supplied, rating: 🌊 off-meta tidepool
- gitcrawl snapshot updated: 2026-06-12T10:06:52Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fixes stale iOS permission rows after Contacts / Calendar / Reminders grants by applying the granted callback result to the local SwiftUI status after re-reading current OS status. > [!WARNING] > Local validation used beta macOS 27 / Xcode 27. The a

### #91768 fix(ios): respect chat header safe area

- bucket: recent_active
- author: zats
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: ios, size: XS, proof: supplied, P3, rating: 🌊 off-meta tidepool
- gitcrawl snapshot updated: 2026-06-12T10:24:20Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fixes the iOS chat header overlapping the status bar / Dynamic Island by applying the existing top inset through SwiftUI safe-area layout. > [!WARNING] > Local validation used beta macOS 27 / Xcode 27. The app deployment target is unchanged, and iOS

### #91977 fix(ios): preserve glass surface identity

- bucket: recent_active
- author: zats
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: ios, size: XS, proof: supplied, P2, rating: 🌊 off-meta tidepool, merge-risk: 🚨 other
- gitcrawl snapshot updated: 2026-06-12T10:38:46Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Move the iOS 26 light-mode `glassEffect` availability/color check into the background surface layer. - Keep card and control content on the same SwiftUI structural path across light/dark and OS versions. ## Why The previous modifier wrapped the wh

