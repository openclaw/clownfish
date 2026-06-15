---
repo: openclaw/openclaw
cluster_id: pr-inventory-needs_proof-20260615T223445-051
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
  - "#93305"
  - "#54652"
  - "#59141"
  - "#59816"
  - "#61522"
  - "#65058"
  - "#65382"
  - "#66213"
  - "#93151"
  - "#93307"
  - "#66735"
  - "#67782"
  - "#67788"
  - "#67967"
  - "#68046"
  - "#68112"
  - "#68146"
  - "#68196"
  - "#68283"
  - "#68306"
  - "#68307"
  - "#68338"
  - "#68422"
  - "#68455"
  - "#68503"
cluster_refs:
  - "#93305"
  - "#54652"
  - "#59141"
  - "#59816"
  - "#61522"
  - "#65058"
  - "#65382"
  - "#66213"
  - "#93151"
  - "#93307"
  - "#66735"
  - "#67782"
  - "#67788"
  - "#67967"
  - "#68046"
  - "#68112"
  - "#68146"
  - "#68196"
  - "#68283"
  - "#68306"
  - "#68307"
  - "#68338"
  - "#68422"
  - "#68455"
  - "#68503"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "This is a PR inventory classification shard, not a dedupe cluster. Classify each PR independently and do not invent a shared canonical."
notes: "Generated from local gitcrawl open PR inventory on 2026-06-15T22:34:45.797Z; bucket=needs_proof; no GitHub mutation is possible in plan mode."
---

# PR Inventory needs_proof 51

This is a high-volume classification shard over open pull requests. It is not a dedupe cluster.

## Goal

Hydrate live GitHub state for each listed PR and emit one conservative action per PR. Prefer `keep_related`, `keep_independent`, `needs_human`, or `route_security`. Emit close-style planned actions only when fresh live evidence makes the PR boringly superseded, duplicate, abandoned, or low-signal under existing policies. For `target_updated_at`, copy only the hydrated value from the Cluster preflight artifact; do not use gitcrawl snapshot timestamps from this job body.

## Inventory

### #93305 fix(doctor): suppress false empty groupAllowFrom warning when all accounts have populated allowlists

- bucket: needs_proof
- author: whiteyzy
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: commands, size: XS, triage: mock-only-proof, P3, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T13:53:15Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fixes #92684: `openclaw doctor` falsely warns "all group messages will be silently dropped" when a channel has `groupPolicy: "allowlist"` with an empty top-level `groupAllowFrom`, but every real account under it carries its own populated `groupAllow

### #54652 test(auth): align device auth store scopes

- bucket: needs_proof
- author: giulio-leone
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: stale, size: XS, triage: needs-real-behavior-proof, P3, rating: 🧂 unranked krab, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T13:55:50Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - align `device-auth-store` expectations with the already-landed implied-scope normalization - keep the fix scoped to the stale test surface only ## Why Current `main` expands `operator.write` to include `operator.read` in `src/shared/device-auth.ts

### #59141 fix(memory-lancedb): prefer newer memories for latest queries

- bucket: needs_proof
- author: slip17mc
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: extensions: memory-lancedb, size: L, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T13:56:17Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - detect freshness-sensitive prompts in `memory-lancedb` (latest/last/most recent/newest/current/recent) - widen candidate recall and rerank recalled memories using recency + semantic similarity - surface timestamp/provenance hints in freshness-sens

### #59816 fix(discord): record history entry when dropping bot message in allowBots=mentions mode

- bucket: needs_proof
- author: Hou-Yufan
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: discord, stale, size: S, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 session-state, merge-risk: 🚨 availability, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T13:56:42Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - **Problem:** When `allowBots=mentions` is configured on a Discord account, bot messages that are dropped (no mention) skip `recordPendingHistoryEntryIfEnabled()`, causing gaps in guild channel history. Other bots in the same channel lose context a

### #61522 config/io: add proper logging for IO error handling

- bucket: needs_proof
- author: soumojit-D48
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 availability, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T13:57:27Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - **Problem:** Config IO catches errors with empty catch blocks, making it impossible to debug configuration issues (disk full, permission denied, locked files) - **Why it matters:** Operators cannot see why config operations fail; silent data loss

### #65058 fix(googlechat): accept add-on space lifecycle payload variants

- bucket: needs_proof
- author: Yanhu007
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: googlechat, stale, size: XS, triage: needs-real-behavior-proof, P1, rating: 🧂 unranked krab, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T13:57:47Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: The Google Chat add-on payload parser only handled `chat.messagePayload`, rejecting valid `addedToSpacePayload` and `removedFromSpacePayload` events as "invalid payload". Expand `parseGoogleChatInboundPayload` to recognise all three payload variants and map to

### #65382 fix(ui): format common cron intervals

- bucket: needs_proof
- author: OwenYWT
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: web-ui, stale, size: S, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T13:57:54Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - format common cron patterns (every N minutes/hours) so the control tooltip reads "Every ..." instead of raw cron syntax - keep the existing fallback for unusual schedules and preserve timezone annotations ## Testing - pnpm --dir ui test src/ui/pre

### #66213 fix(ci): add post-publish asset verification for macOS stable releases

- bucket: needs_proof
- author: soumikbhatta
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: stale, size: S, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 automation, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T13:58:10Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - add `verify-release-assets.yml` — polls for macOS binaries after a stable GitHub release is published - add CODEOWNERS entry for `appcast.xml` requiring maintainer review ## Why v2026.4.12 stable was published at 2026-04-13T12:35:53Z with 0 assets

### #93151 #92664: fix(read): decode GBK-encoded files on Chinese Windows via existing decoder

- bucket: needs_proof
- author: qingminglong
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: scripts, agents, size: S, triage: needs-real-behavior-proof, P2, rating: 🦪 silver shellfish, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T13:58:27Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Replace hard-coded UTF-8 decoding in the read tool with `decodeWindowsOutputBuffer`, which tries strict UTF-8 first then falls back to the Windows system codepage. On Chinese Windows (codepage 936/GBK), GBK-encoded text files now display correctly i

### #93307 fix(browser): notify agent when click triggers download

- bucket: needs_proof
- author: sunlit-deng
- author association: FIRST_TIMER
- draft: no
- assignees: none
- labels: size: S, proof: supplied, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T13:58:32Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Track auto-saved page downloads in `PageState.recentDownloads[]` so the background handler records every completed download - Capture the download delta in `executeActViaPlaywright` before/after each action - Propagate `downloads` info through the

### #66735 fix(daemon): hand off systemd self-restarts

- bucket: needs_proof
- author: alexlomt
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, cli, size: L, clawsweeper, triage: needs-real-behavior-proof, P2, rating: 🦪 silver shellfish, merge-risk: 🚨 session-state, merge-risk: 🚨 availability, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T13:58:36Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary On Linux/systemd, restarting the gateway from inside the running gateway service can kill the calling CLI process with `SIGTERM` even though the service restart succeeds. This happens because the restart command runs inside the same `openclaw-gatewa

### #67782 fix(telegram): skip delete before non-empty command sync

- bucket: needs_proof
- author: p3nchan
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: telegram, size: XS, triage: needs-real-behavior-proof, mantis: telegram-visible-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T14:00:24Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - skip `deleteMyCommands()` before syncing a non-empty Telegram command menu - preserve explicit deletes when syncing an empty menu - add targeted tests for both paths and stabilize the unchanged-hash test ## Why PR #32059 already avoids unnecessary

### #67788 fix: improve cli help and gateway guidance

- bucket: needs_proof
- author: Dodo1021
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, cli, commands, size: S, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 auth-provider, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T14:00:34Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - expand nested help more reliably for deeper `--help` invocations - clarify gateway foreground runtime vs supervised service commands - improve gateway status/auth/help output and models auth guidance ## Testing - corepack pnpm install --frozen-loc

### #67967 fix(minimax): disable tool call ID sanitization for Anthropic-compatible API

- bucket: needs_proof
- author: sebykrueger
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS, extensions: minimax, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T14:01:42Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Re-opens #65371 against the current replay-hook API (the original PR was written before the `buildProviderReplayFamilyHooks` factory landed and no longer applies). - **Problem:** MiniMax's Anthropic-compatible API generates its own tool call IDs and

### #68046 fix: pass through image/audio/resource content blocks in MCP HTTP gateway

- bucket: needs_proof
- author: nightq
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, stale, size: S, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T14:02:01Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fixes the HTTP MCP gateway stripping image, audio, and resource fields from tool results. ## Root Cause The `normalizeToolCallContent` function was mapping all content blocks to only `{type, text}`, discarding other fields like `data`, `mimeType`, `

### #68112 fix(cron): prevent scheduler death when startup catch-up fails

- bucket: needs_proof
- author: alexanderxfgl-bit
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: L, triage: needs-real-behavior-proof, P1, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T14:02:27Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary When runMissedJobs() throws during start(), the timer was never armed, silently killing the cron scheduler until the next gateway restart. ## Root Cause The start() function in src/cron/service/ops.ts calls runMissedJobs() outside of any try/catch,

### #68146 fix(gateway): hold startup-gated requests at server until post-attach (closes #67160)

- bucket: needs_proof
- author: sparkeros
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, size: M, proof: supplied, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 compatibility, merge-risk: 🚨 availability, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T14:03:04Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - **Problem:** The openclaw-gateway startup gate from #65365 responds `UNAVAILABLE` to startup-gated methods (`chat.history`, `models.list`, `sessions.*`, `tools.effective`, `agent.wait`) for the 8–15 s window between `[gateway] ready` and post-atta

### #68196 fix(agents): post-timeout compensation in sessions_send

- bucket: needs_proof
- author: glfruit
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: M, proof: supplied, P1, rating: 🦪 silver shellfish, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T14:03:27Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Fixes #68065 `sessions_send` with a non-zero timeout previously returned `status=timeout` whenever the wait window expired, even when the target agent had already accepted the message and produced a reply after the window closed. ### Behavior contract | Sce

### #68283 fix(approvals): back off native handler bootstrap retries

- bucket: needs_proof
- author: TheDillonHall
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: M, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 auth-provider, merge-risk: 🚨 availability, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T14:04:06Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fixes a native approval handler bootstrap retry storm observed in production when the handler could not connect to the gateway because the local device lacked `operator.approvals`. The previous behavior retried every 1000ms for all startup failures.

### #68306 fix(telegram): reject zero and negative replyToMessageId values

- bucket: needs_proof
- author: 1aifanatic
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: telegram, size: S, triage: needs-real-behavior-proof, mantis: telegram-visible-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T14:04:19Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - `normalizeTelegramReplyToMessageId` now rejects `0` and negative values in addition to non-numeric inputs - Telegram message IDs are always positive integers; passing `0` or a negative value would result in a `400 Bad Request` from the Telegram AP

### #68307 fix(commands): emit WARN when bootstrap files are truncated

- bucket: needs_proof
- author: 1aifanatic
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T14:04:27Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - `resolveCommandsSystemPromptBundle` was calling `resolveBootstrapContextForRun` without a `warn` callback - Bootstrap file truncation warnings were silently discarded in the commands / system-prompt path - Wires up `makeBootstrapWarn` backed by a

### #68338 Parse multiline MEDIA directives

- bucket: needs_proof
- author: evgyur
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: stale, size: S, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T14:04:32Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Parse empty `MEDIA:` directives whose media path appears on the following line. - Preserve ordered text/media segments when consuming the continuation path. - Keep the change scoped to media output parsing only; no delivery, routeReply, prompt, co

### #68422 fix(ui): constrain web chat width to 920px for better readability

- bucket: needs_proof
- author: nightq
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: web-ui, stale, size: XS, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T14:04:41Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fixes #68369 The "new chat" welcome state and message thread in the web dashboard were stretching to the full width of the content area instead of being constrained to a readable column width. This is a regression fix. ## Root Cause had no or constr

### #68455 feat(feishu): allow custom accountId during Feishu channel onboarding

- bucket: needs_proof
- author: ahbi1006-hue
- author association: FIRST_TIMER
- draft: no
- assignees: none
- labels: channel: feishu, size: S, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T14:04:49Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Problem When adding a second Feishu IM channel in the same OpenClaw instance, the accountId is always forced to DEFAULT_ACCOUNT_ID ("default"), making it impossible to register multiple independent Feishu bots. ## Changes - `extensions/feishu/src/setup-surf

### #68503 status: reduce diagnosis noise in status --all

- bucket: needs_proof
- author: likewen-tech
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, commands, size: M, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T14:05:05Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: $## Summary\n- filter routine gateway tail noise and wrapper residue from `status --all` diagnosis output\n- group repeated lane-wait, subagent-end, detached-flow, and context-overflow diagnostics into concise summaries\n- stop surfacing unrelated fallback `Ga
