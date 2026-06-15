---
repo: openclaw/openclaw
cluster_id: pr-inventory-ready_for_maintainer-20260615T223445-088
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
  - "#93295"
  - "#75223"
  - "#90653"
  - "#41892"
  - "#66685"
  - "#67077"
  - "#67946"
  - "#68558"
  - "#68677"
  - "#70046"
  - "#87590"
  - "#88906"
  - "#89367"
  - "#89369"
  - "#89428"
  - "#93298"
  - "#90487"
  - "#90672"
  - "#93106"
  - "#90861"
  - "#90975"
  - "#93293"
  - "#90979"
  - "#90989"
  - "#91000"
cluster_refs:
  - "#93295"
  - "#75223"
  - "#90653"
  - "#41892"
  - "#66685"
  - "#67077"
  - "#67946"
  - "#68558"
  - "#68677"
  - "#70046"
  - "#87590"
  - "#88906"
  - "#89367"
  - "#89369"
  - "#89428"
  - "#93298"
  - "#90487"
  - "#90672"
  - "#93106"
  - "#90861"
  - "#90975"
  - "#93293"
  - "#90979"
  - "#90989"
  - "#91000"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "This is a PR inventory classification shard, not a dedupe cluster. Classify each PR independently and do not invent a shared canonical."
notes: "Generated from local gitcrawl open PR inventory on 2026-06-15T22:34:45.805Z; bucket=ready_for_maintainer; no GitHub mutation is possible in plan mode."
---

# PR Inventory ready_for_maintainer 88

This is a high-volume classification shard over open pull requests. It is not a dedupe cluster.

## Goal

Hydrate live GitHub state for each listed PR and emit one conservative action per PR. Prefer `keep_related`, `keep_independent`, `needs_human`, or `route_security`. Emit close-style planned actions only when fresh live evidence makes the PR boringly superseded, duplicate, abandoned, or low-signal under existing policies. For `target_updated_at`, copy only the hydrated value from the Cluster preflight artifact; do not use gitcrawl snapshot timestamps from this job body.

## Inventory

### #93295 fix(memory): swap rollback-journal sidecar during atomic reindex

- bucket: ready_for_maintainer
- author: Alix-007
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: extensions: memory-core, size: S, proof: sufficient, P2, rating: 🦞 diamond lobster, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T13:38:09Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary The memory-core atomic reindex file operations hardcoded the WAL sidecar pair (`-wal`/`-shm`) when moving, removing, and backing up index files. NFS-backed memory stores run SQLite under `journal_mode=DELETE`, which produces a rollback-journal (`-jo

### #75223 fix: CLI auth status/probe path regression

- bucket: ready_for_maintainer
- author: clawsweeper[bot]
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: commands, size: S, clawsweeper, clawsweeper:commit-finding, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T13:41:23Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Found one regression in the CLI auth status/probe path. The commit intentionally makes unscoped external CLI discovery skip missing runtime-only profiles, but `models status` and `models status --probe` still load the auth store without passing the

### #90653 fix(gateway): watch config include files

- bucket: ready_for_maintainer
- author: sweetcornna
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, size: L, proof: supplied, proof: sufficient, P2, rating: 🧂 unranked krab, merge-risk: 🚨 availability, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T13:42:40Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Fixes #59616 Relates #41587 Supersedes the closed/unmerged attempts in #59632 and #82698. Replaces #90652, which was auto-closed by the active-PR queue gate. ## Summary - Seed gateway config include watches from the startup `ConfigFileSnapshot` so `$include` d

### #41892 feat(control-ui): add cron calendar timeline view

- bucket: ready_for_maintainer
- author: xvchris
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: web-ui, size: XL, proof: sufficient, P2, rating: 🦐 gold shrimp, status: ⏳ waiting on author, proof: 📸 screenshot, merge-risk: 🚨 other
- gitcrawl snapshot updated: 2026-06-15T13:55:21Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Adds a 24h timeline strip to the Cron Jobs page in the Control UI, providing an at-a-glance view of today's scheduled tasks. Closes #40644 ## Screenshots ### Dark Theme — Full View ![Full page dark](https://raw.githubusercontent.com/xvchris/cron-cal

### #66685 Suppress expired exec approval followup warnings

- bucket: ready_for_maintainer
- author: pfrederiksen
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, stale, size: XS, proof: supplied, proof: sufficient, P2, rating: 🦞 diamond lobster, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T13:58:20Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Suppress exec approval followup warning logs when the approval id is already gone (`unknown or expired approval id`). ## Why During investigation of #66675, restart/reporting flows could leave the gateway healthy while adding noisy log lines like: -

### #67077 fix(auth-profiles): make post-success bookkeeping saves non-fatal

- bucket: ready_for_maintainer
- author: ademczuk
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: M, proof: supplied, proof: sufficient, P1, rating: 🦪 silver shellfish, merge-risk: 🚨 auth-provider, merge-risk: 🚨 availability, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T13:58:56Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fixes #62099. On Windows, concurrent config hot-reload can leave `auth-profiles.json` with a ReadOnly attribute. The atomic write in `saveAuthProfileStore` then throws `EPERM`, and because `markAuthProfileGood` / `markAuthProfileUsed` / `markAuthPro

### #67946 Clear stale subagent lineage on top-level sessions

- bucket: ready_for_maintainer
- author: pfrederiksen
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, stale, size: S, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 session-state, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T14:01:31Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Fixes #67943. ## Summary Prevents normal top-level sessions from inheriting stale subagent lineage metadata that can incorrectly trip `sessions_spawn` depth limits. ## What changed - clear persisted subagent lineage fields on ordinary top-level session turns -

### #68558 fix(auto-reply): stop rendering misleading /compact labels on small sessions

- bucket: ready_for_maintainer
- author: Ante042
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, proof: sufficient, mantis: telegram-visible-proof, P2, rating: 🦪 silver shellfish, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T14:05:33Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - **Problem**: Running \`/compact\` on a session with little or no summarizable history can render labels like \`Compacted (0 → 36) • Context 36/1.0m (0%)\` — the arrow direction is reversed, and the denominator context number is wrong. - **Why it m

### #68677 Agents/tool-images: memoize resize to avoid per-turn sharp decode (#64418)

- bucket: ready_for_maintainer
- author: nitinjwadhawan
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: M, proof: supplied, proof: sufficient, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T14:05:53Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Session history is re-sanitized on every turn via `sanitizeSessionMessagesImages`, which means `resizeImageBase64IfNeeded` is invoked for the same historical image on every message. Both the `getImageMetadata` header read and any `resizeToJpeg` call

### #70046 fix(cron): support HH:MM time-only strings in --at; apply --tz to time-only input

- bucket: ready_for_maintainer
- author: rrrrrredy
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, cli, size: S, proof: supplied, proof: sufficient, P2, rating: 🦞 diamond lobster, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T14:06:54Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Clean respin of #59444 with the diff scoped to the cron `--at` parser and the public help/docs surfaces that describe that parser. - Support bare `HH:MM` / `HH:MM:SS` values in `cron add --at` via `parseAt(input, tz?)`. - Resolve time-only inputs ag

### #87590 fix(memory-core): show signalCount in promotion annotations

- bucket: ready_for_maintainer
- author: bladin
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: extensions: memory-core, size: S, proof: supplied, proof: sufficient, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 compatibility, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T14:08:27Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fixes #87588 — Dreaming promotion annotation shows `recallCount` instead of `signalCount`, causing confusion when entries are promoted via `dailyCount` signals with `recallCount=0`. ## Root Cause The promotion annotation format in `buildPromotionSec

### #88906 fix(openai): allow Codex Spark via harness

- bucket: ready_for_maintainer
- author: keshavbotagent
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, agents, size: XL, extensions: openai, extensions: codex, proof: supplied, proof: sufficient, P2, rating: 🦪 silver shellfish, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T14:09:53Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - allow `openai/gpt-5.3-codex-spark` when the OpenAI provider is using the Codex harness transport - keep Spark suppressed for direct OpenAI API / Responses routes where the API catalog rejects it - add Spark to the Codex fallback catalog and update

### #89367 fix: forward pending timeout snapshot in waitForAgentJob fallback timer

- bucket: ready_for_maintainer
- author: Pick-cat
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, size: S, proof: supplied, proof: sufficient, P2, rating: 🦞 diamond lobster, merge-risk: 🚨 session-state, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T14:11:31Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - When a sub-agent run is force-killed by its run timeout, `waitForAgentJob`'s outer timer callback only consulted `getPendingAgentRunError` and ignored `getPendingAgentRunTimeout`. If a pending timeout was registered (but no pending error), the tim

### #89369 fix(agents): persist forked transcript when parent branch has no assistant turn

- bucket: ready_for_maintainer
- author: yetval
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: S, proof: supplied, proof: sufficient, P2, rating: 🦞 diamond lobster, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T14:11:36Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary A subagent spawned with `context="fork"` (and the realtime voice-consult fork and the reply-session fork) could silently start with an **empty** transcript, dropping the parent conversation it was meant to inherit, with no error surfaced. This happe

### #89428 fix: keep inbound metadata in runtime context

- bucket: ready_for_maintainer
- author: SweetSophia
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: S, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 session-state, merge-risk: 🚨 message-delivery, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T14:12:15Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fixes the remaining #72704-shaped path where current-turn inbound channel metadata was still prepended into the user prompt text. Current `main` already builds ordinary inbound metadata as `currentInboundContext`, but `run/attempt.ts` immediately me

### #93298 fix #93044: control-ui webchat double-renders agent replies when dmScope=main

- bucket: ready_for_maintainer
- author: zhangguiping-xydt
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: web-ui, size: M, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 message-delivery, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T14:13:23Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary What problem does this PR solve? Root cause: Control UI's previous duplicate collapse compared display-derived fields (`role`, `senderLabel`, and rendered text). With `dmScope=main`, the same underlying assistant transcript message can arrive throug

### #90487 fix: harden ChatGPT Responses missing content-type streams

- bucket: ready_for_maintainer
- author: anyech
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: M, proof: supplied, proof: sufficient, P1, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T14:14:36Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Builds on #90399 and narrows the missing-`Content-Type` workaround to the native ChatGPT/Codex Responses stream path. - send `Accept: text/event-stream` for native ChatGPT/Codex Responses SDK stream requests, including the transport-aware alias path

### #90672 fix(telegram): report blocked group ingress in /status

- bucket: ready_for_maintainer
- author: FilipHarald
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: telegram, size: S, proof: supplied, proof: sufficient, mantis: telegram-visible-proof, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look, proof: 📸 screenshot
- gitcrawl snapshot updated: 2026-06-15T14:15:01Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Adds a Telegram-only `/status` diagnostic for groups/topics where native commands are authorized but normal group-message ingress would be blocked by group access policy. - Threads optional channel-supplied `StatusNotes` through the shared `/statu

### #93106 docs(gateway): add cloud-orchestrator plus local-text-workers pattern

- bucket: ready_for_maintainer
- author: ZengWen-DT
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, gateway, size: XS, proof: supplied, P3, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T14:16:11Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Adds a docs page for the cloud-orchestrator plus local-text-workers pattern: a tool-using cloud model orchestrates while local models do bounded text-only work (drafting, summarizing, refactoring). - Composes existing guidance (local models, sub-a

### #90861 fix #77426: [Bug]:sessions_yield: always returns "No session context" on MCP/claude-cli agent runtime path (gateway tool resolver missing sessionId + onYield)

- bucket: ready_for_maintainer
- author: zhangguiping-xydt
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, agents, size: M, proof: supplied, proof: sufficient, P1, rating: 🐚 platinum hermit, merge-risk: 🚨 session-state, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T14:17:02Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary What problem does this PR solve? `sessions_yield` on the bundled MCP / CLI loopback path was constructed without the active run `sessionId` and `onYield` lifecycle callback, so the tool could return `No session context` instead of yielding the activ

### #90975 feat(google): add Antigravity CLI backend

- bucket: ready_for_maintainer
- author: Kirchlive
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, proof: supplied, proof: sufficient, extensions: google, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 auth-provider, merge-risk: 🚨 session-state, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T14:17:32Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Adds a Google Antigravity CLI runtime backend that delegates OAuth and execution to the local `agy` binary while keeping the user-facing model identity on the existing Google provider. Fixes #84527. ## Scope Plugin surface: - `extensions/google/cli-

### #93293 fix(compaction): skip replay-unsafe session sends

- bucket: ready_for_maintainer
- author: mushuiyu886
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: M, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 session-state, merge-risk: 🚨 message-delivery, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T14:17:35Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Fixes #84139. ## Summary - Filters replay-unsafe `sessions_send` branch entries before the compaction safeguard uses session-branch fallback history. - Keeps the existing visible-branch fallback for ordinary custom/user/tool history so empty-preparation compac

### #90979 fix(agents): guard CLI MCP resume reuse

- bucket: ready_for_maintainer
- author: yu-xin-c
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: XS, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 session-state, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T14:17:38Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ### Summary - Invalidate stored CLI session bindings when they have a strict `mcpResumeHash` but the current run cannot provide one. - Add regression coverage for the one-sided resume-hash case while keeping legacy `mcpConfigHash` fallback for bindings that ne

### #90989 fix(channels): recover stale ingress queue claims at gateway startup

- bucket: ready_for_maintainer
- author: 849261680
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, size: M, proof: supplied, proof: sufficient, P1, rating: 🧂 unranked krab, merge-risk: 🚨 message-delivery, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T14:17:56Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ### Summary - **Problem**: Issue #90945 — after a gateway crash, `channel_ingress_events` rows left in `claimed` state are never recovered. Every new message into the affected session adds another stuck claim, silently deadlocking the channel (observed with Te

### #91000 fix(gateway): preserve abort after dispatch rejection

- bucket: ready_for_maintainer
- author: nxmxbbd
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: web-ui, gateway, size: M, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 session-state, merge-risk: 🚨 message-delivery, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T14:18:43Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary What problem does this PR solve? - Preserves the terminal `chat.abort` outcome when `chat.send` dispatch rejects after the abort already completed. - Preserves the real dispatch `error` outcome when abort arrives only during awaited error persistenc
