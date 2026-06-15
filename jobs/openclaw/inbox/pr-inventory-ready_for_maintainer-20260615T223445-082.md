---
repo: openclaw/openclaw
cluster_id: pr-inventory-ready_for_maintainer-20260615T223445-082
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
  - "#90968"
  - "#92125"
  - "#93007"
  - "#91691"
  - "#88988"
  - "#78395"
  - "#91685"
  - "#87504"
  - "#89101"
  - "#89287"
  - "#92341"
  - "#93239"
  - "#53920"
  - "#54904"
  - "#89172"
  - "#89442"
  - "#89482"
  - "#89576"
  - "#92863"
  - "#89584"
  - "#89604"
  - "#89612"
  - "#89621"
  - "#93245"
  - "#89714"
cluster_refs:
  - "#90968"
  - "#92125"
  - "#93007"
  - "#91691"
  - "#88988"
  - "#78395"
  - "#91685"
  - "#87504"
  - "#89101"
  - "#89287"
  - "#92341"
  - "#93239"
  - "#53920"
  - "#54904"
  - "#89172"
  - "#89442"
  - "#89482"
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
notes: "Generated from local gitcrawl open PR inventory on 2026-06-15T22:34:45.803Z; bucket=ready_for_maintainer; no GitHub mutation is possible in plan mode."
---

# PR Inventory ready_for_maintainer 82

This is a high-volume classification shard over open pull requests. It is not a dedupe cluster.

## Goal

Hydrate live GitHub state for each listed PR and emit one conservative action per PR. Prefer `keep_related`, `keep_independent`, `needs_human`, or `route_security`. Emit close-style planned actions only when fresh live evidence makes the PR boringly superseded, duplicate, abandoned, or low-signal under existing policies. For `target_updated_at`, copy only the hydrated value from the Cluster preflight artifact; do not use gitcrawl snapshot timestamps from this job body.

## Inventory

### #90968 fix(acp): strip chat options for Claude ACP sessions

- bucket: ready_for_maintainer
- author: moeedahmed
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: L, proof: supplied, proof: sufficient, P1, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T08:46:21Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - preserve startup ACP runtime options without replaying them as post-start controls - strip chat-only model/thinking options from managed Claude ACP startup and resume paths - keep timeout/cwd runtime options intact and add regressions for spawn, i

### #92125 build(deps): bump the android-deps group across 1 directory with 2 updates

- bucket: ready_for_maintainer
- author: dependabot[bot]
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: dependencies, app: android, size: XS, java, P3, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T08:48:38Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Bumps the android-deps group with 2 updates in the /apps/android directory: [com.squareup.okhttp3:mockwebserver](https://github.com/square/okhttp) and [com.squareup.okhttp3:okhttp](https://github.com/square/okhttp). Updates `com.squareup.okhttp3:mockwebserver`

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

### #89172 fix(feishu): show voice message duration via upload duration

- bucket: ready_for_maintainer
- author: areslp
- author association: FIRST_TIMER
- draft: no
- assignees: none
- labels: channel: feishu, size: S, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look, proof: 📸 screenshot
- gitcrawl snapshot updated: 2026-06-15T10:03:07Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Problem Voice/audio messages sent to Feishu (opus) play fine, but the Feishu UI shows no duration ("X:XX") on the voice bubble. (#53798) ## Cause Feishu derives the voice-bubble duration from the `duration` parameter of the file upload API (`im/v1/files`);

### #89442 fix #84567: [Bug]: Codex bundled harness initialize still hangs in 2026.5.18 isolated cron — surfaces via #64744 timeout-wrapping as 'isolated agent setup timed out before runner start'

- bucket: ready_for_maintainer
- author: zhangguiping-xydt
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: M, extensions: codex, proof: supplied, proof: sufficient, P1, rating: 🐚 platinum hermit, merge-risk: 🚨 availability, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T10:06:16Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Bound Codex app-server `initialize` with the remaining startup deadline instead of giving it the full outer timeout after earlier startup work has already elapsed. - Apply the phase timeout at `client.initialize()` inside the shared/isolated clien

### #89482 fix(discord): ignore stale ACP bindings when acpx is disabled

- bucket: ready_for_maintainer
- author: jpretty01
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: discord, size: S, proof: sufficient, P1, rating: 🦐 gold shrimp, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, merge-risk: 🚨 message-delivery, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T10:07:39Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - ignore Discord ACP session bindings when ACP is effectively unavailable so stale ACP routes cannot override the configured native Discord route - treat restrictive `plugins.allow` configs that omit `acpx` as ACPX-disabled for Discord stale-binding

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
