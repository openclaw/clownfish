---
repo: openclaw/openclaw
cluster_id: pr-inventory-ready_for_maintainer-20260615T154534-098
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
  - "#90468"
  - "#90487"
  - "#90489"
  - "#90490"
  - "#90493"
  - "#90503"
  - "#91378"
  - "#93080"
  - "#93058"
  - "#79687"
  - "#79702"
  - "#92223"
  - "#90537"
  - "#90547"
  - "#90566"
  - "#90571"
  - "#90572"
  - "#90586"
  - "#90610"
  - "#90622"
  - "#78813"
  - "#79200"
  - "#79832"
  - "#93072"
  - "#83101"
cluster_refs:
  - "#90468"
  - "#90487"
  - "#90489"
  - "#90490"
  - "#90493"
  - "#90503"
  - "#91378"
  - "#93080"
  - "#93058"
  - "#79687"
  - "#79702"
  - "#92223"
  - "#90537"
  - "#90547"
  - "#90566"
  - "#90571"
  - "#90572"
  - "#90586"
  - "#90610"
  - "#90622"
  - "#78813"
  - "#79200"
  - "#79832"
  - "#93072"
  - "#83101"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "This is a PR inventory classification shard, not a dedupe cluster. Classify each PR independently and do not invent a shared canonical."
notes: "Generated from local gitcrawl open PR inventory on 2026-06-15T15:45:34.213Z; bucket=ready_for_maintainer; no GitHub mutation is possible in plan mode."
---

# PR Inventory ready_for_maintainer 98

This is a high-volume classification shard over open pull requests. It is not a dedupe cluster.

## Goal

Hydrate live GitHub state for each listed PR and emit one conservative action per PR. Prefer `keep_related`, `keep_independent`, `needs_human`, or `route_security`. Emit close-style planned actions only when fresh live evidence makes the PR boringly superseded, duplicate, abandoned, or low-signal under existing policies. For `target_updated_at`, copy only the hydrated value from the Cluster preflight artifact; do not use gitcrawl snapshot timestamps from this job body.

## Inventory

### #90468 fix(agents): keep apostrophes in slash-command prompt-template arguments

- bucket: ready_for_maintainer
- author: yetval
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T23:17:35Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - `parseCommandArgs` (`packages/agent-core/src/harness/prompt-template-arguments.ts`) expands `$ARGUMENTS` / `$@` / `$1..$N` in user prompt templates and custom slash commands. It does shell-style quote parsing with **no escape and no unbalanced-quo

### #90487 fix: harden ChatGPT Responses missing content-type streams

- bucket: ready_for_maintainer
- author: anyech
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: M, proof: supplied, proof: sufficient, P1, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T23:17:59Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Builds on #90399 and narrows the missing-`Content-Type` workaround to the native ChatGPT/Codex Responses stream path. - send `Accept: text/event-stream` for native ChatGPT/Codex Responses SDK stream requests, including the transport-aware alias path

### #90489 fix(sessions): clarify cross-agent visibility guidance

- bucket: ready_for_maintainer
- author: sahibzada-allahyar
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: XS, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T23:18:05Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## What changed - Updated cross-agent session visibility errors to name both required controls instead of only `tools.sessions.visibility=all`. - Updated session access tests for the new operator-facing guidance. Fixes #90443 ## Real behavior proof - Behavior 

### #90490 fix(gateway): retry restart continuation recovery

- bucket: ready_for_maintainer
- author: sahibzada-allahyar
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, size: S, proof: supplied, proof: sufficient, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 message-delivery, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-14T23:18:16Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## What changed - Added periodic restart/session-delivery recovery so entries deferred by retry backoff are retried after startup. - Added a focused gateway lifecycle regression test that proves the first startup recovery and later 60s retry both call restart-

### #90493 fix(skills): stale create proposals with existing targets

- bucket: ready_for_maintainer
- author: sahibzada-allahyar
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: M, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 session-state, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T23:18:21Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Reconciles pending Skill Workshop `create` proposals when their target skill file already exists in the workspace. - Marks those proposals `stale` during scoped list/inspect flows so the UI and tool surface stop presenting an already-installed ski

### #90503 fix(sessions): sweep orphan store temp files

- bucket: ready_for_maintainer
- author: sahibzada-allahyar
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T23:18:37Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Fixes #89520. ## What Changed - Added a startup/load-time sweep for stale session store temp files matching the active store basename. - Preserves fresh temp files and unrelated files so an in-flight atomic write is not removed. - Added focused regression cove

### #91378 feat(cli): add `openclaw sessions compact` and fail loudly on CLI `/compact` (fixes #90640)

- bucket: ready_for_maintainer
- author: Alix-007
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, gateway, cli, commands, size: L, proof: supplied, proof: sufficient, P1, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T23:21:24Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fixes #90640. `sessions.compact` was reachable only as an internal Gateway RPC: there was no CLI command and no docs, and `openclaw agent --message '/compact'` silently no-opped with exit 0 (the slash-command handler rejects CLI-originated senders, 

### #93080 docs(browser): clarify networkidle is managed-browser only, not existing-session (fixes #80587)

- bucket: ready_for_maintainer
- author: liuhao1024
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, size: XS, proof: supplied, P3, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T23:22:21Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Real behavior proof - **Behavior addressed:** Two docs files (`browser-control.md` and `browser.md`) gave contradictory answers about whether `wait --load networkidle` is supported. `browser-control.md` showed it without qualification; `browser.md` stated f

### #93058 fix(doctor): suppress false groupAllowFrom warning when per-account allowlists cover all accounts

- bucket: ready_for_maintainer
- author: dwc1997
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: commands, size: S, proof: supplied, proof: sufficient, P3, rating: 🦐 gold shrimp, status: ⏳ waiting on author, merge-risk: 🚨 other
- gitcrawl snapshot updated: 2026-06-14T23:25:23Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - **Problem:** `openclaw doctor` warns that inbound group messages will be dropped when the top-level `groupAllowFrom` is empty, even when every account has its own populated `groupAllowFrom`. At runtime, per-account allowlists handle routing correc

### #79687 fix(agents): emit reasoning stream events to gateway clients without channel callback (AI-assisted)

- bucket: ready_for_maintainer
- author: maxwhipw
- author association: FIRST_TIMER
- draft: no
- assignees: none
- labels: agents, size: S, proof: supplied, proof: sufficient, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 message-delivery, status: 👀 ready for maintainer look, proof: 🎥 video
- gitcrawl snapshot updated: 2026-06-14T23:25:41Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - **Problem:** Gateway-connected clients (webchat, custom WebSocket clients) never receive live `agent stream=thinking` events during agent runs, even when the user has set `reasoningLevel: "stream"`. Thinking only surfaces post-run via `chat.histor

### #79702 [AI-assisted] fix(openai): prefix instruction-aware embedding queries

- bucket: ready_for_maintainer
- author: kreucher
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, size: M, extensions: openai, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T23:29:41Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary AI-assisted PR. - Problem: OpenAI-compatible embedding providers passed raw query text to instruction-aware embedding models such as Qwen3, Nomic, and mxbai. - Why it matters: Raw queries produced lower-quality retrieval for instruction-aware embedd

### #92223 Fix stack-safe large attachment handling

- bucket: ready_for_maintainer
- author: joeykrug
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, app: web-ui, gateway, size: L, proof: supplied, proof: sufficient, P1, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, merge-risk: 🚨 availability, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T23:48:55Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary This is the canonical-source replacement for the closed #90111 approach, following amknight's review: it uses the existing media-understanding/file-extraction pipeline instead of adding a parallel inbound-PDF prompt-context subsystem. - Route inboun

### #90537 Warn on generated wrapper overwrites and status diagnostics

- bucket: ready_for_maintainer
- author: TurboTheTurtle
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, cli, commands, size: M, proof: supplied, proof: sufficient, P2, rating: 🦞 diamond lobster, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T23:51:45Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - warn before overwriting a customized generated launchd env wrapper during gateway service install/repair/restart rewrite - preserve install warnings in JSON daemon install output - preserve restart overwrite warnings in JSON daemon restart output 

### #90547 docs: map guanbear clawtributor emails

- bucket: ready_for_maintainer
- author: guanbear
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: scripts, size: XS, proof: supplied, proof: sufficient, P3, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T23:51:56Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Map the commit author emails used by already-merged guanbear contributions to the `guanbear` GitHub login in `scripts/clawtributors-map.json`. - This keeps the clawtributors generator attribution-based instead of adding a manual `ensureLogins` ent

### #90566 fix(agents): warn on cron announce skip

- bucket: ready_for_maintainer
- author: sahibzada-allahyar
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: S, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T23:52:14Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## What changed - Log a warning when a cron requester receives `ANNOUNCE_SKIP` from a completed subagent announce flow. - Add regression coverage that proves the cron path no longer suppresses the completion silently. Fixes #68561. ## Real behavior proof - **B

### #90571 fix(configure): mask gateway password input in CLI wizard prompt

- bucket: ready_for_maintainer
- author: anurag-bg-neu
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: commands, size: XS, proof: supplied, proof: sufficient, P2, rating: 🦞 diamond lobster, status: 👀 ready for maintainer look, proof: 📸 screenshot
- gitcrawl snapshot updated: 2026-06-14T23:52:24Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary What problem does this PR solve? The `openclaw configure --section gateway` wizard echoes the typed Gateway password in cleartext on the terminal. This is reproducible on the latest published CLI with no special setup — anyone using documented onboa

### #90572 fix(feishu): drop self-authored receive echoes

- bucket: ready_for_maintainer
- author: baskduf
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: feishu, size: S, proof: supplied, proof: sufficient, P1, rating: 🐚 platinum hermit, merge-risk: 🚨 message-delivery, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T23:52:29Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Drop Feishu receive events authored by the current bot open_id before the in-flight processing claim and inbound debounce queue. - Add focused monitor-message-handler regressions for bot-open-id echoes, ordinary users, and other app-authored sende

### #90586 fix(telegram): avoid restarts for runtime reloads

- bucket: ready_for_maintainer
- author: sahibzada-allahyar
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: telegram, gateway, size: S, proof: supplied, proof: sufficient, P1, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, merge-risk: 🚨 availability, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-14T23:52:55Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## What changed - Narrow Telegram reload restart prefixes to transport-affecting settings only. - Add a broad Telegram no-op prefix so runtime-only settings like `historyLimit` and `dmPolicy` do not restart the channel. - Add focused gateway reload-plan covera

### #90610 Surface Codex final answer candidates in activity

- bucket: ready_for_maintainer
- author: ooiuuii
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: web-ui, size: L, extensions: codex, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T23:53:12Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Emit Codex app-server `phase: "final_answer"` answer-candidate activity records with `candidate`, `superseded`, and `selected` states. - Route those `stream: "item"` / `kind: "answer_candidate"` records into the Control UI Activity model and Activ

### #90622 fix(ports): batch macOS lsof listener inspection to one spawn per cycle

- bucket: ready_for_maintainer
- author: luoyanglang
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: cli, size: M, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 availability, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T23:53:44Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Refs #90548. This is a partial mitigation and intentionally does not close the issue. This changes Unix listener inspection from one `lsof` spawn per inspected port to one LISTEN snapshot per same-cycle multi-port inspection, then filters the snapsh

### #78813 feat(gateway): add components field to SendParamsSchema for Discord b…

- bucket: ready_for_maintainer
- author: caly1337
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: discord, app: web-ui, gateway, cli, size: S, triage: dirty-candidate, proof: supplied, proof: sufficient, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 security-boundary, status: ⏳ waiting on author, proof: 📸 screenshot
- gitcrawl snapshot updated: 2026-06-14T23:58:57Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Add optional `components` field to `SendParamsSchema` and wire it through the send handler → outbound-payload channelData → Discord plugin → Discord API. ## Problem HITL approval messages in Helios v2 workflows show as text-only in Discord. The gateway's `Send

### #79200 feat(cli): add --message-file flag to openclaw message send

- bucket: ready_for_maintainer
- author: Joseff531
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, cli, size: S, proof: supplied, proof: sufficient, P3, rating: 🦐 gold shrimp, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T23:59:55Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - **Problem:** `openclaw message send -m "$(cat report.txt)"` fails or corrupts messages when the content contains backticks, `${}`, `!`, or newlines — all common in agent completion reports containing code blocks or JSON. - **Why it matters:** Agen

### #79832 feishu: replace deprecated card V2 `action` container with `column_set`

- bucket: ready_for_maintainer
- author: xiabee
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: feishu, size: M, proof: supplied, proof: sufficient, P1, rating: 🦐 gold shrimp, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T00:00:49Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fixes #79824. Feishu's V2 card schema dropped the V1 `{ tag: "action", actions: [...] }` container. The Open Platform API now rejects every button-bearing card with: ``` http_status: 400 feishu_code: 230099 feishu_msg : Failed to create card content

### #93072 fix(sessions): preserve titles on release upsert

- bucket: ready_for_maintainer
- author: serkonyc
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, size: S, plugin: file-transfer, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, status: 🔁 re-review loop
- gitcrawl snapshot updated: 2026-06-15T00:03:11Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Preserves existing non-empty `label` and `displayName` during `upsertSessionEntry` replacement writes when the incoming runtime entry omits those fields. - Keeps explicit replacement semantics intact: non-empty titles still replace previous titles

### #83101 Add inbound_observed hook for skipped inbound messages

- bucket: ready_for_maintainer
- author: dashhuang
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, channel: telegram, size: M, proof: supplied, proof: sufficient, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 session-state, merge-risk: 🚨 security-boundary, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T00:03:22Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Adds a read-only `inbound_observed` plugin hook for passive inbound visibility, then emits it from Telegram when a group message is skipped by `requireMention`/mention gating. This gives archive/audit/history plugins a supported way to observe messa

