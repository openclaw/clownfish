---
repo: openclaw/openclaw
cluster_id: pr-inventory-needs_proof-20260615T223445-061
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
  - "#75299"
  - "#76545"
  - "#76668"
  - "#77053"
  - "#77067"
  - "#77312"
  - "#77393"
  - "#87961"
  - "#88114"
  - "#88426"
  - "#93391"
  - "#89602"
  - "#89688"
  - "#89693"
  - "#92526"
  - "#92576"
  - "#92135"
  - "#92763"
  - "#82540"
  - "#92234"
  - "#92274"
  - "#92346"
  - "#92349"
  - "#92388"
  - "#92420"
cluster_refs:
  - "#75299"
  - "#76545"
  - "#76668"
  - "#77053"
  - "#77067"
  - "#77312"
  - "#77393"
  - "#87961"
  - "#88114"
  - "#88426"
  - "#93391"
  - "#89602"
  - "#89688"
  - "#89693"
  - "#92526"
  - "#92576"
  - "#92135"
  - "#92763"
  - "#82540"
  - "#92234"
  - "#92274"
  - "#92346"
  - "#92349"
  - "#92388"
  - "#92420"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "This is a PR inventory classification shard, not a dedupe cluster. Classify each PR independently and do not invent a shared canonical."
notes: "Generated from local gitcrawl open PR inventory on 2026-06-15T22:34:45.799Z; bucket=needs_proof; no GitHub mutation is possible in plan mode."
---

# PR Inventory needs_proof 61

This is a high-volume classification shard over open pull requests. It is not a dedupe cluster.

## Goal

Hydrate live GitHub state for each listed PR and emit one conservative action per PR. Prefer `keep_related`, `keep_independent`, `needs_human`, or `route_security`. Emit close-style planned actions only when fresh live evidence makes the PR boringly superseded, duplicate, abandoned, or low-signal under existing policies. For `target_updated_at`, copy only the hydrated value from the Cluster preflight artifact; do not use gitcrawl snapshot timestamps from this job body.

## Inventory

### #75299 feat(process): add starvation guard to priority command queue

- bucket: needs_proof
- author: SebTardif
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, proof: supplied, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T18:40:46Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Fixes #79589 ## Problem Upstream added priority scheduling (foreground/normal/background) via insertion-sort at enqueue time (#82765). This works well for the common case but has no protection against indefinite starvation: a steady stream of foreground enqueu

### #76545 fix(cron): sweep base cron sessions, not just run sessions

- bucket: needs_proof
- author: byungskers
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: M, triage: needs-real-behavior-proof, P1, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, merge-risk: 🚨 session-state, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T18:41:18Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: `sweepCronRunSessions` was filtering with `isCronRunSessionKey`, which only matches run sessions (`agent:main:cron:run:...`). Base sessions (`agent:main:cron:<jobId>`) were never cleaned up. Switch to `isCronSessionKey` to include both base and run sessions. F

### #76668 meta(issue-template): add dedicated docs bug report form

- bucket: needs_proof
- author: WadydX
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, proof: supplied, P3, rating: 🦪 silver shellfish, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T18:41:24Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - add a dedicated docs bug issue form at `.github/ISSUE_TEMPLATE/docs_bug_report.yml` - keep existing runtime bug form unchanged - label docs defects as `bug` + `docs` ## Why Issue #76664 requests a docs-focused intake path so docs-only defects do n

### #77053 feat(lmstudio): opt-in idle TTL via native load API

- bucket: needs_proof
- author: firat-elbey
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, gateway, size: M, extensions: lmstudio, proof: supplied, P2, rating: 🦪 silver shellfish, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T18:42:04Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Title: feat(lmstudio): opt-in idle TTL via native load API ## Summary - Problem: LM Studio JIT (Just-In-Time) loaded models — models loaded on-demand when inference is first requested — can stay resident in VRAM longer than desired on shared/local GPU boxes. -

### #77067 fix(qqbot): add TCP keepalive + heartbeat interval logging to prevent silent connection drops

- bucket: needs_proof
- author: Allonz
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, channel: qqbot, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 message-delivery, merge-risk: 🚨 availability, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T18:42:11Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ### Problem **Messages delayed by up to 9 minutes due to silent WebSocket connection failures.** On 2026-05-04 07:13, a user sent a message via QQBot. The message was not received until 07:22:18 — **9 minutes of delay**. During this entire period, the OpenClaw

### #77312 fix: display file path when model uses 'file' parameter alias (#54882)

- bucket: needs_proof
- author: LvShaoJunloveYuanZaiChen
- author association: FIRST_TIMER
- draft: no
- assignees: none
- labels: agents, size: XS, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T18:42:26Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fixes #54882 When the model calls `Read`, `Write`, or `Edit` tools using the `file` parameter alias (instead of `path`/`file_path`/`filePath`), the verbose/block-streaming tool summary shows only the emoji + label (e.g. `📖 Read`) without the file p

### #77393 fix: typing TTL, context display, rate limit messages, slack catch-up reconnect

- bucket: needs_proof
- author: TristanTs
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: M, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T18:42:33Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Several bug fixes and improvements discovered during production use: ### Bug fixes - **Typing TTL too short** — default 60s TTL caused typing indicators to expire during long LLM responses; increased to 20min (`typing.ts`) - **Context token display

### #87961 fix: recognize bundle-mcp as known synthetic plugin in tool policy allowlist

- bucket: needs_proof
- author: Tazio7
- author association: FIRST_TIMER
- draft: no
- assignees: none
- labels: agents, size: XS, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, status: 📣 needs proof, merge-risk: 🚨 other
- gitcrawl snapshot updated: 2026-06-15T18:44:10Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Problem `openclaw doctor` reports `bundle-mcp` as an "unknown allowlist entry" when it is included in `tools.allow`: ``` [tools] agents.main.tools.allow allowlist contains unknown entries (bundle-mcp). These entries won't match any tool unless the plugin is

### #88114 fix(windows): disable scheduled task before stop to prevent PT3M re-trigger during update

- bucket: needs_proof
- author: Kailigithub
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, size: XS, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 availability, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T18:44:18Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: fix(windows): disable scheduled task before stop to prevent PT3M re-trigger during update The Windows scheduled task uses a PT3M LogonTrigger which repeats every 3 minutes. Previously, stopScheduledTask only called schtasks /End, leaving the trigger active. Du

### #88426 fix(skills): preserve compact prompt descriptions

- bucket: needs_proof
- author: abel-zer0
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T18:44:29Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Summary: - Keep shortened <description> entries in compact skills prompts so mandatory skill matching still has semantic trigger guidance when skill catalogs exceed prompt budget. - Dynamically shrink compact descriptions before dropping skills from the prompt

### #93391 fix(durable-delivery): anchor reply fallback to current inbound message

- bucket: needs_proof
- author: moeedahmed
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, proof: supplied, mantis: telegram-visible-proof, P2, rating: 🦪 silver shellfish, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T18:45:48Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Anchor durable-delivery reply fallback to the current inbound message when no better reply target exists. - Prevent fallback delivery from reusing stale assistant reply context for current-message replies. ## Real behavior proof **Behavior or issu

### #89602 fix(status): show effective channel model override

- bucket: needs_proof
- author: zerone0x
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, triage: needs-real-behavior-proof, mantis: telegram-visible-proof, P2, rating: 🧂 unranked krab, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T18:46:52Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - resolve channel-level `channels.modelByChannel` overrides in `/status` even when they differ from the session/default model - show the effective channel override model as the primary model and include the session/default model separately - add reg

### #89688 fix: suppress duplicate Telegram plugin approvals 🤖

- bucket: needs_proof
- author: cyphercodes
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS, triage: needs-real-behavior-proof, mantis: telegram-visible-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T18:47:31Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Treat a missing approval `turnSourceChannel` as unknown instead of a channel mismatch when checking native-delivery fallback suppression. - This lets Telegram suppress the generic forwarding fallback when native delivery is enabled for the resolve

### #89693 fix(cron): ignore optional scanner search misses

- bucket: needs_proof
- author: henryyuen168-ship-it
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T18:47:37Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Treat trailing optional scanner search-miss payloads as nonfatal when prior scanner output is deliverable. - Keep search misses fatal when there is no successful scanner output. - Preserve fatal classification for non-search tool errors. ## Verifi

### #92526 fix(gateway): treat google-gemini-cli Gemini models as image-capable (fixes #91739)

- bucket: needs_proof
- author: zenglingbiao
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, size: XS, proof: supplied, P2, rating: 🦪 silver shellfish, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T18:49:02Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ### Summary - **Problem**: `google/gemini-3.5-flash` routed through `google-gemini-cli` gets `UnsupportedAttachmentError` before Gemini CLI is invoked, even though the CLI supports `@<workspace-image-path>` natively. - **Root Cause**: `resolveGatewayModelSuppo

### #92576 test(cron): expand stagger helper edge-case coverage

- bucket: needs_proof
- author: arimu1
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, triage: needs-real-behavior-proof, P3, rating: 🧂 unranked krab, status: 📣 needs proof, merge-risk: 🚨 other
- gitcrawl snapshot updated: 2026-06-15T18:49:35Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Expands `src/cron/stagger.test.ts` from 5 test cases (54 lines) to 11 test cases, covering previously untested paths in all four exported helpers. **New coverage added:** | Helper | New cases | |--------|-----------| | `isRecurringTopOfHourCronExpr`

### #92135 fix(openai-embedding): preserve openai/ prefix for non-native base URLs

- bucket: needs_proof
- author: xialonglee
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, extensions: openai, proof: supplied, P2, rating: 🦪 silver shellfish, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T18:49:45Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Preserve `openai/` model prefix for non-native OpenAI embedding base URLs - When `agents.defaults.memorySearch.provider` is `openai` but `remote.baseUrl` points to a non-native OpenAI router (e.g. Requesty), OpenClaw was stripping the `openai/` pr

### #92763 fix(gateway): add google-gemini-cli image capability fallback for stale catalog rows

- bucket: needs_proof
- author: 1052326311
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, size: XS, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T18:50:14Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary `resolveGatewayModelSupportsImages` had legacy shims for `microsoft-foundry` and `claude-cli` but not `google-gemini-cli`. When catalog metadata was stale or missing, image attachments were rejected before the Gemini CLI runner could process them. #

### #82540 fix(wechat): preserve existing accounts across hot reload

- bucket: needs_proof
- author: NewdlDewdl
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, gateway, agents, size: L, proof: supplied, P1, rating: 🦪 silver shellfish, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T18:50:24Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - preserve known live accounts when an already-active channel hot-reload restarts without an explicit account id - preserve known accounts for channel account-index reload markers such as `channels.openclaw-weixin.channelConfigUpdatedAt` - avoid uni

### #92234 fix(gateway): surface OAuth auth URLs in wizard protocol

- bucket: needs_proof
- author: bkudiess
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: web-ui, gateway, commands, size: L, extensions: openai, triage: mock-only-proof, extensions: chutes, extensions: google, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T18:50:24Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: RPC wizard clients could ask users to paste an OAuth redirect URL without receiving the authorization URL in the wizard protocol. - Why it matters: Windows/remote wizard clients cannot reliably complete OAuth setup when the URL only appea

### #92274 fix(agents): classify embedded prompt lock error as permanent announce failure

- bucket: needs_proof
- author: fsdwen
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: XS, proof: supplied, mantis: telegram-visible-proof, P1, rating: 🧂 unranked krab, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T18:50:37Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Subagent announce delivery enters an infinite retry loop when `EmbeddedPromptLockFileChangedError` occurs during concurrent session access. Each retry sends a duplicate outbound message, causing 3× identical Telegram messages as reported in #91527.

### #92346 fix(agents): retire stale aborted subagent runs past the staleness window in orphan recovery (fixes #90766)

- bucket: needs_proof
- author: zenglingbiao
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: S, proof: supplied, P2, rating: 🦪 silver shellfish, merge-risk: 🚨 session-state, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T18:51:04Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ### Summary - **Problem**: After a gateway restart with long downtime, stale subagent runs with `abortedLastRun: true` are treated as resumable by orphan recovery even when they are hours past the staleness window. This can resurrect contextless child work lon

### #92349 fix(feishu): keep memory probe replies visible

- bucket: needs_proof
- author: wangyaok1
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: feishu, size: S, triage: needs-real-behavior-proof, P1, rating: 🧂 unranked krab, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T18:51:09Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - suppress Feishu SOP internal-noise final text before outbound delivery - keep short memory governance / true @ / mention probe replies visible - add regression coverage for both suppression and visible probe replies ## Test - PATH=/Users/<user>

### #92388 #92379: fix(session): refresh stale model before reading contextWindow in checkCompaction

- bucket: needs_proof
- author: sheyanmin
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: XS, triage: needs-real-behavior-proof, mantis: telegram-visible-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 session-state, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T18:51:50Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fix auto-compaction using stale `contextWindow` after model switch via Telegram `/model` picker. The in-memory `agent.state.model` now gets refreshed from the registry before `checkCompaction` reads the compaction threshold. ## Root Cause When the T

### #92420 fix(telegram): record sent messages in the source-delivery path

- bucket: needs_proof
- author: tangtaizong666
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: telegram, size: M, proof: supplied, mantis: telegram-visible-proof, P1, rating: 🧂 unranked krab, merge-risk: 🚨 session-state, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T18:51:59Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - The Telegram source-delivery path (`deliverReplies` in `extensions/telegram/src/bot/delivery.replies.ts`) sends via `sendTelegramText` / raw media APIs and emits the `message_sent` hook, but never appends to the sent-message ledger. - The canonica
