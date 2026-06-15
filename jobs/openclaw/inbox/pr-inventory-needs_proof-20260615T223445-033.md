---
repo: openclaw/openclaw
cluster_id: pr-inventory-needs_proof-20260615T223445-033
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
  - "#79556"
  - "#93046"
  - "#93040"
  - "#81417"
  - "#81832"
  - "#82079"
  - "#82179"
  - "#82213"
  - "#82240"
  - "#93079"
  - "#82355"
  - "#82379"
  - "#82435"
  - "#82505"
  - "#82519"
  - "#82520"
  - "#82536"
  - "#77899"
  - "#78836"
  - "#78886"
  - "#82587"
  - "#79562"
  - "#79872"
  - "#80251"
  - "#80646"
cluster_refs:
  - "#79556"
  - "#93046"
  - "#93040"
  - "#81417"
  - "#81832"
  - "#82079"
  - "#82179"
  - "#82213"
  - "#82240"
  - "#93079"
  - "#82355"
  - "#82379"
  - "#82435"
  - "#82505"
  - "#82519"
  - "#82520"
  - "#82536"
  - "#77899"
  - "#78836"
  - "#78886"
  - "#82587"
  - "#79562"
  - "#79872"
  - "#80251"
  - "#80646"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "This is a PR inventory classification shard, not a dedupe cluster. Classify each PR independently and do not invent a shared canonical."
notes: "Generated from local gitcrawl open PR inventory on 2026-06-15T22:34:45.793Z; bucket=needs_proof; no GitHub mutation is possible in plan mode."
---

# PR Inventory needs_proof 33

This is a high-volume classification shard over open pull requests. It is not a dedupe cluster.

## Goal

Hydrate live GitHub state for each listed PR and emit one conservative action per PR. Prefer `keep_related`, `keep_independent`, `needs_human`, or `route_security`. Emit close-style planned actions only when fresh live evidence makes the PR boringly superseded, duplicate, abandoned, or low-signal under existing policies. For `target_updated_at`, copy only the hydrated value from the Cluster preflight artifact; do not use gitcrawl snapshot timestamps from this job body.

## Inventory

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

### #82355 Fix streamed chat completions dropping leading less-than

- bucket: needs_proof
- author: honor2030
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, agents, size: S, proof: supplied, P2, rating: 🦪 silver shellfish, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T22:59:46Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Preserve cumulative assistant `text` payloads when translating agent events into OpenAI-compatible SSE deltas, so leading `<` characters are not dropped when `delta` starts after a buffered tag prefix. - Defer chat-completion stream finalization b

### #82379 docs(lobster): enumerate injected runtime env vars and clarify step-output access

- bucket: needs_proof
- author: Sanjays2402
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, size: XS, triage: needs-real-behavior-proof, P2, rating: 🦪 silver shellfish, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-14T23:00:18Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Closes #82281. The Lobster docs document workflow files and step `stdin:` piping, but they don't enumerate which env vars the runtime injects into step shells. The current page mentions `LOBSTER_ARG_<name>` and `LOBSTER_FINAL_STATUS` in passing, but

### #82435 fix: broadcast tool result transcript updates

- bucket: needs_proof
- author: papayachat
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: S, proof: supplied, P2, rating: 🧂 unranked krab, merge-risk: 🚨 session-state, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T23:00:51Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: `toolResult` messages were persisted to session JSONL but did not emit transcript update events. - Why it matters: Realtime clients could see tool calls start, but miss completion updates until session history was reloaded. - What changed

### #82505 fix: Canvas WebSocket creation in browser context silently swallows...

- bucket: needs_proof
- author: coygeek
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, triage: mock-only-proof, P2, rating: 🧂 unranked krab, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T23:02:18Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: In `extensions/canvas/src/host/a2ui-shared.ts` (injected into HTML via `injectCanvasLiveReload()`), the WebSocket connection to the canvas host is created inside a `try {} catch {}` block (lines 54-62). If the WebSocket construction throw

### #82519 fix(test): stabilize red CI tests

- bucket: needs_proof
- author: lidge-jun
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: commands, size: M, proof: supplied, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T23:03:12Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Keep empty cron payload text/message values shape-valid so the cron service can record the intended skipped status. - Adjust the malformed reload schedule test to use a shape-valid cron schedule with an invalid expression. - Avoid catalog/setup di

### #82520 fix: inject compaction summary into post-compaction context for seamless task continuation

- bucket: needs_proof
- author: sunvember
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: M, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 session-state, merge-risk: 🚨 availability, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T23:03:24Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Problem After compaction, agents **lose task context and restart instead of continuing**. The post-compaction system message only injected AGENTS.md sections with instructions to "Run your Session Startup sequence", causing agents to reinitialize rather tha

### #82536 perf: skip packageManager.resolve() by loading extensionFactories directly

- bucket: needs_proof
- author: sunvember
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: M, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 availability, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T23:04:13Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary This PR eliminates the 5-9 second `packageManager.resolve()` overhead on every embedded run by skipping `reload()` and loading inline `extensionFactories` directly. ## Problem The previous approach (PR #82523, now closed) attempted to cache `Default

### #77899 fix(memory-core): use Promise.allSettled in searchMemoryCorpusSupplements

- bucket: needs_proof
- author: SimbaKingjoe
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: extensions: memory-core, size: XS, proof: supplied, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T23:05:13Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary `searchMemoryCorpusSupplements` uses `Promise.all` which fails fast — a single supplement failure discards ALL results. Switch to `Promise.allSettled` so surviving results are preserved. - **Problem:** `Promise.all` rejects on the first failure, dis

### #78836 fix(agents): use max_tokens for NVIDIA NIM OpenAI-compat endpoint

- bucket: needs_proof
- author: cod3warrior
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: S, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T23:05:43Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary NVIDIA NIM (`integrate.api.nvidia.com/v1`) advertises OpenAI compatibility but its chat/completions endpoint rejects the newer `max_completion_tokens` field with HTTP 400 (`Extra inputs are not permitted`). It still expects the legacy `max_tokens`.

### #78886 Talk: add additive sendVideoFrame/videoConfig seam for realtime voice plugins

- bucket: needs_proof
- author: dh999
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, size: XS, triage: needs-real-behavior-proof, P2, rating: 🦪 silver shellfish, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T23:05:48Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Adds an additive, opt-in video-frame seam to the realtime voice provider contract on the public Plugin SDK so a realtime voice provider plugin can stream periodic still frames alongside audio when the existing `supportsVideoFrames` capability flag i

### #82587 fix(minimax): resolve portal catalog OAuth via resolveProviderAuth (#79731)

- bucket: needs_proof
- author: ObliviateRickLin
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, extensions: minimax, proof: supplied, P2, rating: 🧂 unranked krab, merge-risk: 🚨 auth-provider, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T23:06:09Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary `resolvePortalCatalog` in `extensions/minimax/provider-registration.ts` was checking `listProfilesForProvider()` directly and, when any OAuth profile existed, hardcoding `MINIMAX_OAUTH_MARKER` as the catalog `apiKey`. The marker is a placeholder the

### #79562 Fix Discord queue backpressure and related read-path bottlenecks

- bucket: needs_proof
- author: neuroradgist
- author association: FIRST_TIMER
- draft: no
- assignees: none
- labels: channel: discord, gateway, size: XL, extensions: codex, proof: supplied, P1, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T23:06:48Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Adds regression coverage and targeted performance/backpressure fixes for Discord queues, media downloads, preview writes, transcript idempotency, Codex RPC writes, and session-store reads. ## Real behavior proof Behavior or issue addressed: This PR addresses r

### #79872 fix(cli): preserve portable default workspace paths in config writes

- bucket: needs_proof
- author: xinhuagu
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: commands, agents, size: S, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T23:06:58Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - canonicalize recognized default workspace paths back to portable `~/.openclaw/...` forms when writing config - preserve explicit custom absolute workspaces unchanged - cover setup/onboarding/configure write paths with focused tests ## Problem Issu

### #80251 fix(sessions): rotate reset transcripts and clear compaction state

- bucket: needs_proof
- author: fredrikmacmini
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, size: M, proof: supplied, P1, rating: 🦪 silver shellfish, merge-risk: 🚨 session-state, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T23:07:12Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fix `sessions.reset` so a reset creates a fresh generated transcript path for the new session id and clears stale compaction state. This source patch makes permanent the behavior we previously had to protect with a local installed-dist hotfix: reset

### #80646 feat(tts): add word-level timestamps and memory dreaming fixes

- bucket: needs_proof
- author: MD-Mushfiqur123
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: extensions: memory-core, size: S, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T23:07:36Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Fixed memory dreaming content leakage in MEMORY.md. - Enabled CJK-aware deduplication in memory dreaming pipeline. - Added word-level timestamps to TTS Synthesis result to support future word-highlighting. - Prepared ElevenLabs provider to capture
