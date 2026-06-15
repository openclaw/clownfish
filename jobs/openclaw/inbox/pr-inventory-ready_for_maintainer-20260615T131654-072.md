---
repo: openclaw/openclaw
cluster_id: pr-inventory-ready_for_maintainer-20260615T131654-072
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
  - "#88449"
  - "#88798"
  - "#90968"
  - "#93194"
  - "#92125"
  - "#93225"
  - "#93007"
  - "#91691"
  - "#88988"
  - "#78395"
  - "#91685"
  - "#84779"
  - "#87504"
  - "#89101"
  - "#89287"
  - "#89367"
  - "#92946"
  - "#92341"
  - "#93239"
  - "#50463"
  - "#53920"
  - "#54904"
  - "#70046"
  - "#86655"
  - "#87613"
  - "#89172"
  - "#89395"
  - "#89416"
  - "#89442"
  - "#77017"
  - "#89482"
  - "#89547"
  - "#89576"
  - "#92863"
  - "#89584"
  - "#89604"
  - "#89612"
  - "#89621"
  - "#93245"
  - "#89714"
cluster_refs:
  - "#88449"
  - "#88798"
  - "#90968"
  - "#93194"
  - "#92125"
  - "#93225"
  - "#93007"
  - "#91691"
  - "#88988"
  - "#78395"
  - "#91685"
  - "#84779"
  - "#87504"
  - "#89101"
  - "#89287"
  - "#89367"
  - "#92946"
  - "#92341"
  - "#93239"
  - "#50463"
  - "#53920"
  - "#54904"
  - "#70046"
  - "#86655"
  - "#87613"
  - "#89172"
  - "#89395"
  - "#89416"
  - "#89442"
  - "#77017"
  - "#89482"
  - "#89547"
  - "#89576"
  - "#92863"
  - "#89584"
  - "#89604"
  - "#89612"
  - "#89621"
  - "#93245"
  - "#89714"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "This is a PR inventory classification shard, not a dedupe cluster. Classify each PR independently and do not invent a shared canonical."
notes: "Generated from local gitcrawl open PR inventory on 2026-06-15T13:16:54.489Z; bucket=ready_for_maintainer; no GitHub mutation is possible in plan mode."
---

# PR Inventory ready_for_maintainer 72

This is a high-volume classification shard over open pull requests. It is not a dedupe cluster.

## Goal

Hydrate live GitHub state for each listed PR and emit one conservative action per PR. Prefer `keep_related`, `keep_independent`, `needs_human`, or `route_security`. Emit close-style planned actions only when fresh live evidence makes the PR boringly superseded, duplicate, abandoned, or low-signal under existing policies. For `target_updated_at`, copy only the hydrated value from the Cluster preflight artifact; do not use gitcrawl snapshot timestamps from this job body.

## Inventory

### #88449 Fix home path replacement in shortenHomeInString utility

- bucket: ready_for_maintainer
- author: ashyyhere
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: S, proof: supplied, proof: sufficient, P2, rating: 🦐 gold shrimp, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T08:44:34Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Fix `shortenHomeInString()` so it only replaces `display.home` when the match occurs at a real path boundary. - Prevents incorrect shortening of home-like substrings such as `/srv/openclaw-home-other/dir`. - Adds focused regression coverage for th

### #88798 fix: keep insecure Control UI auth disabled after onboarding

- bucket: ready_for_maintainer
- author: jason-allen-oneal
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T08:44:56Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fixes #78855. The QuickStart setup path could leave `gateway.controlUi.allowInsecureAuth=true` in generated setup config for loopback Control UI compatibility. This keeps the post-onboarding default safe by no longer enabling `allowInsecureAuth` unl

### #90968 fix(acp): strip chat options for Claude ACP sessions

- bucket: ready_for_maintainer
- author: moeedahmed
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: L, proof: supplied, proof: sufficient, P1, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T08:46:21Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - preserve startup ACP runtime options without replaying them as post-start controls - strip chat-only model/thinking options from managed Claude ACP startup and resume paths - keep timeout/cwd runtime options intact and add regressions for spawn, i

### #93194 fix(agents): allow prompt-released session control metadata entries

- bucket: ready_for_maintainer
- author: snowzlm
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: M, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 session-state, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T08:46:46Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Closes #93193. This keeps embedded attempts from treating append-only session control metadata as a session takeover while the prompt lock is released for provider I/O. The takeover fence already accepts benign transcript-only OpenClaw assistant app

### #92125 build(deps): bump the android-deps group across 1 directory with 2 updates

- bucket: ready_for_maintainer
- author: dependabot[bot]
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: dependencies, app: android, size: XS, java, P3, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T08:48:38Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Bumps the android-deps group with 2 updates in the /apps/android directory: [com.squareup.okhttp3:mockwebserver](https://github.com/square/okhttp) and [com.squareup.okhttp3:okhttp](https://github.com/square/okhttp). Updates `com.squareup.okhttp3:mockwebserver`

### #93225 build(deps): bump github.com/steipete/peekaboo from 3.4.1 to 3.5.3 in /apps/macos in the swift-deps group

- bucket: ready_for_maintainer
- author: dependabot[bot]
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: dependencies, app: macos, size: XS, swift_package_manager, P3, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, merge-risk: 🚨 security-boundary, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T08:54:23Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Bumps the swift-deps group in /apps/macos with 1 update: [github.com/steipete/peekaboo](https://github.com/steipete/Peekaboo). Updates `github.com/steipete/peekaboo` from 3.4.1 to 3.5.3 <details> <summary>Release notes</summary> <p><em>Sourced from <a href="ht

### #93007 feat(gateway): forward web_search_options through OpenAI-compatible chat completions

- bucket: ready_for_maintainer
- author: Lellansin
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, gateway, agents, size: XL, extensions: openai, proof: supplied, proof: sufficient, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 compatibility, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T08:59:11Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Forward `web_search_options` (`search_context_size`, `user_location`) from the OpenAI-compatible HTTP chat completions endpoint through to the provider-native web search injection layer. ### What this does - **Gateway layer** (`src/gateway/openai-ht

### #91691 [AI] fix(memory): prevent empty-string expectedModel in resolveMemory…

- bucket: ready_for_maintainer
- author: xydt-tanshanshan
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: extensions: memory-core, size: XS, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T09:11:41Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary `resolveMemoryIndexIdentityState` computes `expectedModel` from `provider.model`, but when `provider.model` is an empty string (as happens when `resolveEmbeddingProviderFallbackModel` returns `""` for an unregistered adapter, or when `createWithAdap

### #88988 feat(status): show session duration in footer

- bucket: ready_for_maintainer
- author: Alix-007
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS, proof: supplied, proof: sufficient, P2, rating: 🦞 diamond lobster, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T09:24:46Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Fixes #68226. ## Summary - adds a session duration segment to the shared status footer when `sessionStartedAt` is available - uses the existing session lifecycle timestamp resolver so stored session metadata and transcript header fallback stay centralized - re

### #78395 fix(agents): resolve bare alias fallbacks via alias index

- bucket: ready_for_maintainer
- author: AtelyPham
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: M, proof: supplied, proof: sufficient, mantis: telegram-visible-proof, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, status: 👀 ready for maintainer look, proof: 🎥 video
- gitcrawl snapshot updated: 2026-06-15T09:26:48Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fix Telegram/Discord/Mattermost `/model` pickers misclassifying configured CLI-runtime bare aliases (`opus-cli`, `sonnet-cli`, etc.) under the agent's primary provider. `buildAllowedModelSetWithFallbacks` (`src/agents/model-selection-shared.ts`) was

### #91685 fix(cron): refuse keyless implicit isolated cron delivery inherited from shared agent-main bucket

- bucket: ready_for_maintainer
- author: nxmxbbd
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: L, proof: supplied, proof: sufficient, P1, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T09:33:59Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary A keyless / implicit isolated cron — no `sessionKey`, no `sessionTarget`, `delivery.channel=last`, no `delivery.to` — resolves its delivery target from the shared `agent:<id>:main` session bucket's `lastTo`. That value is last-writer-wins across eve

### #84779 fix(config): redact config set secrets in audit argv

- bucket: ready_for_maintainer
- author: ariahabibi
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: M, proof: supplied, proof: sufficient, P1, rating: 🧂 unranked krab, merge-risk: 🚨 security-boundary, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T09:38:11Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - redact `openclaw config set <credential-path> <value>` positional values before they land in `config-audit.jsonl` - mask inline `--batch-json` payloads because batch entries can contain credential values - add coverage for API key, bot token, pass

### #87504 fix(skill-workshop): align agent_end hook timeout with max reviewer timeout

- bucket: ready_for_maintainer
- author: zhangguiping-xydt
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: M, proof: supplied, proof: sufficient, P2, rating: 🦞 diamond lobster, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T09:38:50Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary What problem does this PR solve? - Skill Research auto-capture was still eligible on automatic/helper `agent_end` sessions, including cron, hook-scoped, and Active Memory helper session keys, so routine automation could queue Skill Workshop proposal

### #89101 fix: add resumable field to prevent duplicate session spawns

- bucket: ready_for_maintainer
- author: w1ndcn
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, agents, size: S, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 session-state, status: 👀 ready for maintainer look, proof: 📸 screenshot
- gitcrawl snapshot updated: 2026-06-15T09:40:03Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Problem Session `status` field values (`done`, `failed`, `timeout`, `killed`) mislead agents into treating sessions as permanently terminated, causing duplicate `sessions_spawn` calls instead of resuming existing sessions via `sessions_send`. Closes #64103 

### #89287 fix(agents): verify completion delivery target

- bucket: ready_for_maintainer
- author: anyech
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: XL, proof: supplied, proof: sufficient, mantis: telegram-visible-proof, P1, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T09:41:05Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary This PR tightens ACP/subagent completion announcement delivery accounting so a completion is only counted as visibly delivered when the delivery evidence matches the requester route. It: - propagates outbound payload target metadata into delivery st

### #89367 fix: forward pending timeout snapshot in waitForAgentJob fallback timer

- bucket: ready_for_maintainer
- author: Pick-cat
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, size: S, proof: supplied, proof: sufficient, P2, rating: 🦞 diamond lobster, merge-risk: 🚨 session-state, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T09:41:52Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - When a sub-agent run is force-killed by its run timeout, `waitForAgentJob`'s outer timer callback only consulted `getPendingAgentRunError` and ignored `getPendingAgentRunTimeout`. If a pending timeout was registered (but no pending error), the tim

### #92946 fix(telegram): preserve delivery without rich API

- bucket: ready_for_maintainer
- author: Glucksberg
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: telegram, size: L, triage: blank-template, proof: supplied, proof: sufficient, mantis: telegram-visible-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T09:46:56Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Preserves Telegram text delivery when rich Bot API methods are unavailable on a custom or lagging Bot API root. - Falls back from `sendRichMessage` / rich text edit to legacy `sendMessage` / `editMessageText`. - Re-chunks legacy fallback sends to 

### #92341 fix(memory-core): CJK textScore=0 and empty MATCH LIKE fallback

- bucket: ready_for_maintainer
- author: rrriiiccckkk
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: extensions: memory-core, size: S, proof: supplied, proof: sufficient, P2, rating: 🧂 unranked krab, merge-risk: 🚨 session-state, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T09:51:04Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fixes three related bugs that cause `textScore: 0` in hybrid memory search for CJK queries (e.g. "飞书插件配置", "股票分析"). ## Bug 1: CJK tokens bypass LIKE path (trigram tokenizer) In `planKeywordSearch`, CJK tokens with 3+ characters were sent to `matchTe

### #93239 docs: add ClickClack to supported channels index

- bucket: ready_for_maintainer
- author: milljer
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, size: XS, triage: low-signal-docs, proof: supplied, P3, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T09:52:53Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - What problem does this PR solve? ClickClack is a fully supported bundled channel with its own docs page, plugin reference, i18n glossary entries, and test coverage, but it was missing from the supported channels list in `docs/channels/index.md`. A

### #50463 fix(agents): hint when unknown tools are skills

- bucket: ready_for_maintainer
- author: Meelfy
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: S, proof: sufficient, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: ⏳ waiting on author, proof: 📸 screenshot
- gitcrawl snapshot updated: 2026-06-15T09:55:30Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - **Problem:** When a model mistakenly calls a skill name as a tool (e.g. `my-skill`), the error message is a generic "Tool not found" with no guidance, so the model keeps retrying or gives up. This is especially common with weaker/smaller models th

### #53920 fix(scripts): avoid mutating tracked auth-monitor template during setup

- bucket: ready_for_maintainer
- author: JackWuGlobal
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: scripts, size: S, triage: risky-infra, proof: supplied, proof: sufficient, P2, rating: 🦞 diamond lobster, merge-risk: 🚨 availability, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T10:00:30Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - keep the tracked `openclaw-auth-monitor.service` template unchanged during setup - render the auth-monitor user service in a temporary file before installing it - render `ExecStart` to the current checkout's `scripts/auth-monitor.sh` - escape lite

### #54904 fix(feishu): enforce configured webhookPath

- bucket: ready_for_maintainer
- author: ruanrrn
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: feishu, size: M, proof: supplied, proof: sufficient, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T10:00:40Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Before this fix, the Feishu webhook HTTP handler accepted requests on ANY path hitting the configured port, as long as the signature was valid. This meant any attacker who could reach the webhook port and forge a valid signature could trigger event 

### #70046 fix(cron): support HH:MM time-only strings in --at; apply --tz to time-only input

- bucket: ready_for_maintainer
- author: rrrrrredy
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, cli, size: S, proof: supplied, proof: sufficient, P2, rating: 🦞 diamond lobster, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T10:01:42Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Clean respin of #59444 with the diff scoped to the cron `--at` parser and the public help/docs surfaces that describe that parser. - Support bare `HH:MM` / `HH:MM:SS` values in `cron add --at` via `parseAt(input, tz?)`. - Resolve time-only inputs ag

### #86655 feat(claude): add claude-bridge app-server harness extension

- bucket: ready_for_maintainer
- author: zeroaltitude
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, channel: telegram, extensions: memory-core, scripts, agents, size: XL, extensions: acpx, extensions: anthropic, proof: supplied, proof: sufficient, dependencies-changed, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, merge-risk: 🚨 security-boundary, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T10:01:52Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary TL;DR: Inspiration: https://openclaw.ai/blog/openai-models-in-openclaw-done-right; goal: achieve parity for Claude OpenClaw currently has no first-class harness for Anthropic models. Anthropic users either fall back to a generic provider client (no 

### #87613 fix(codex): preserve telegram foreground run release

- bucket: ready_for_maintainer
- author: seoseo-ai
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: S, proof: supplied, proof: sufficient, mantis: telegram-visible-proof, P1, rating: 🧂 unranked krab, merge-risk: 🚨 session-state, merge-risk: 🚨 message-delivery, merge-risk: 🚨 security-boundary, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T10:02:04Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - continue steering active embedded runs when a later source reply delivery mode drifts to `message_tool_only` instead of hard-failing the queue message - release command lanes with queued work after stale embedded-run recovery even when the aborted

### #89172 fix(feishu): show voice message duration via upload duration

- bucket: ready_for_maintainer
- author: areslp
- author association: FIRST_TIMER
- draft: no
- assignees: none
- labels: channel: feishu, size: S, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look, proof: 📸 screenshot
- gitcrawl snapshot updated: 2026-06-15T10:03:07Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Problem Voice/audio messages sent to Feishu (opus) play fine, but the Feishu UI shows no duration ("X:XX") on the voice bubble. (#53798) ## Cause Feishu derives the voice-bubble duration from the `duration` parameter of the file upload API (`im/v1/files`); 

### #89395 fix(feishu): re-throw unresolved SecretRef errors from media fallbacks

- bucket: ready_for_maintainer
- author: Bartok9
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: feishu, size: S, proof: supplied, proof: sufficient, P1, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, merge-risk: 🚨 message-delivery, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T10:03:49Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Re-throw `FeishuSecretRefUnavailableError` in two catch blocks inside `feishuOutbound.sendText` (local-image auto-convert path) and `feishuOutbound.sendMedia` that previously swallowed it silently. ## Motivation When `appSecret` (or another Feishu c

### #89416 fix #48045: [Bug]: Browser tool silently discards downloads and throws "Download is starting" error when using CDP connection

- bucket: ready_for_maintainer
- author: zhangguiping-xydt
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: L, proof: supplied, proof: sufficient, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 security-boundary, merge-risk: 🚨 availability, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T10:04:53Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Fixes #48045. - Behavior or issue addressed: Browser `/navigate` attachment responses in Playwright/CDP mode now complete as successful downloads instead of surfacing the navigation abort as a tool failure or dropping the file silently. - Why it m

### #89442 fix #84567: [Bug]: Codex bundled harness initialize still hangs in 2026.5.18 isolated cron — surfaces via #64744 timeout-wrapping as 'isolated agent setup timed out before runner start'

- bucket: ready_for_maintainer
- author: zhangguiping-xydt
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: M, extensions: codex, proof: supplied, proof: sufficient, P1, rating: 🐚 platinum hermit, merge-risk: 🚨 availability, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T10:06:16Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Bound Codex app-server `initialize` with the remaining startup deadline instead of giving it the full outer timeout after earlier startup work has already elapsed. - Apply the phase timeout at `client.initialize()` inside the shared/isolated clien

### #77017 feat(ui): add generated image actions

- bucket: ready_for_maintainer
- author: Ittiz
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, app: web-ui, gateway, agents, size: XL, triage: dirty-candidate, proof: supplied, proof: sufficient, P1, rating: 🐚 platinum hermit, merge-risk: 🚨 session-state, merge-risk: 🚨 message-delivery, merge-risk: 🚨 security-boundary, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T10:07:17Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Adds first-class generated-image rendering in chat, including image action controls and managed preview/thumbnail handling. - Adds hover actions for generated/managed images: open, download, and copy - Routes managed generated images through authent

### #89482 fix(discord): ignore stale ACP bindings when acpx is disabled

- bucket: ready_for_maintainer
- author: jpretty01
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: discord, size: S, proof: sufficient, P1, rating: 🦐 gold shrimp, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, merge-risk: 🚨 message-delivery, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T10:07:39Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - ignore Discord ACP session bindings when ACP is effectively unavailable so stale ACP routes cannot override the configured native Discord route - treat restrictive `plugins.allow` configs that omit `acpx` as ACPX-disabled for Discord stale-binding

### #89547 Control Telegram group history context

- bucket: ready_for_maintainer
- author: mmaps
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, channel: telegram, size: M, proof: supplied, proof: sufficient, mantis: telegram-visible-proof, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 compatibility, status: 👀 ready for maintainer look, proof: 🎥 video
- gitcrawl snapshot updated: 2026-06-15T10:10:55Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Adds a Telegram group history context mode with `mention-only`, `recent`, and `none`. - Defaults group prompt history to messages addressed to the bot while keeping `recent` as an explicit opt-in. - Applies the same mode during recovered forum-top

### #89576 fix(browser): bring tab to foreground before screenshot capture

- bucket: ready_for_maintainer
- author: spencer2211
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T10:12:22Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary **What problem does this PR solve?** `browser screenshot` (and the screenshot-backed snapshot path) hang until the CDP socket times out (~20s) whenever the target tab is **backgrounded**. **Why does this matter now?** On a multi-tab or node-hosted b

### #92863 docs(logging): document exact model.usage event field names in diagnostic catalog (fixes #49046)

- bucket: ready_for_maintainer
- author: liuhao1024
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, gateway, size: XS, proof: supplied, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T10:12:43Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## What Expand the `model.usage` entry in the OpenTelemetry diagnostic event catalog with the exact JSON field names emitted by the agent runner. Add a cross-reference from the logging docs to the diagnostic event catalog. The existing docs mentioned `model.us

### #89584 feat(memory-core): optional cross-encoder rerank stage for memory search

- bucket: ready_for_maintainer
- author: ubehera
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, extensions: memory-core, size: XL, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, status: 👀 ready for maintainer look, feature: ✨ showcase
- gitcrawl snapshot updated: 2026-06-15T10:13:01Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary OpenClaw's builtin (sqlite-vec) memory search does first-stage hybrid retrieval (dense `vec0` ∥ FTS5 BM25, fused) → temporal decay → MMR diversity, but has **no second-stage relevance reranker**. MMR reuses the frozen first-stage score and measures 

### #89604 fix(gateway): skip pending reply drain on skip-deferral restart

- bucket: ready_for_maintainer
- author: SebTardif
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: cli, size: S, proof: supplied, proof: sufficient, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T10:14:20Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Fixes #89528 ## Summary `openclaw gateway restart --safe --skip-deferral` skips the pre-restart active-work deferral check but still waits on the close-stage pending reply drain, because the `skipDeferral` flag is not threaded through the restart intent to the

### #89612 fix: include persisted plugin contracts for migrations

- bucket: ready_for_maintainer
- author: zerone0x
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T10:15:00Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Fixes #89609. - Let manifest-contract runtime lookup use the normal plugin metadata snapshot instead of forcing `preferPersisted: false`. - This allows standalone migration-provider discovery to see enabled persisted/global plugin install records 

### #89621 Return Google Chat thread metadata from message sends

- bucket: ready_for_maintainer
- author: franco-viotti
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: googlechat, size: S, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T10:15:07Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Return `threadName` alongside `messageName` from Google Chat message sends. - Include the returned message/thread metadata in the Google Chat `message` action result. - Cover plain sends and attachment sends in action tests, plus API extraction of

### #93245 fix(cron): resolve lastRunStatus in cron list/show human output

- bucket: ready_for_maintainer
- author: ly-wang19
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: cli, size: S, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T10:18:11Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary `openclaw cron list` and `openclaw cron show` print **`idle`** for a job whose real status is `ok` / `error` / `skipped` whenever the job's state carries only `lastRunStatus` (the primary field) and not the deprecated `lastStatus` alias. The human-r

### #89714 fix(control-ui): clear stale composer replays after send

- bucket: ready_for_maintainer
- author: Pick-cat
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: web-ui, size: S, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 message-delivery, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T10:18:52Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - After sending a message, the Control UI composer clears the draft. However, a stale `handleInput` event can replay the just-submitted text back into the textarea, making it appear as if the message was never sent. - The fix tracks an `inputVersion

