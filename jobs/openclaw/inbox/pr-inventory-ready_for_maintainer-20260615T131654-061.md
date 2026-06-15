---
repo: openclaw/openclaw
cluster_id: pr-inventory-ready_for_maintainer-20260615T131654-061
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
  - "#82514"
  - "#82552"
  - "#82562"
  - "#78916"
  - "#78968"
  - "#82585"
  - "#79041"
  - "#82618"
  - "#79339"
  - "#79405"
  - "#82665"
  - "#80388"
  - "#82718"
  - "#82870"
  - "#82906"
  - "#82909"
  - "#85829"
  - "#82951"
  - "#82955"
  - "#82985"
  - "#83041"
  - "#83048"
  - "#90421"
  - "#90450"
  - "#90453"
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
cluster_refs:
  - "#82514"
  - "#82552"
  - "#82562"
  - "#78916"
  - "#78968"
  - "#82585"
  - "#79041"
  - "#82618"
  - "#79339"
  - "#79405"
  - "#82665"
  - "#80388"
  - "#82718"
  - "#82870"
  - "#82906"
  - "#82909"
  - "#85829"
  - "#82951"
  - "#82955"
  - "#82985"
  - "#83041"
  - "#83048"
  - "#90421"
  - "#90450"
  - "#90453"
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
security_policy: central_security_only
security_sensitive: false
canonical_hint: "This is a PR inventory classification shard, not a dedupe cluster. Classify each PR independently and do not invent a shared canonical."
notes: "Generated from local gitcrawl open PR inventory on 2026-06-15T13:16:54.486Z; bucket=ready_for_maintainer; no GitHub mutation is possible in plan mode."
---

# PR Inventory ready_for_maintainer 61

This is a high-volume classification shard over open pull requests. It is not a dedupe cluster.

## Goal

Hydrate live GitHub state for each listed PR and emit one conservative action per PR. Prefer `keep_related`, `keep_independent`, `needs_human`, or `route_security`. Emit close-style planned actions only when fresh live evidence makes the PR boringly superseded, duplicate, abandoned, or low-signal under existing policies. For `target_updated_at`, copy only the hydrated value from the Cluster preflight artifact; do not use gitcrawl snapshot timestamps from this job body.

## Inventory

### #82514 feat(ui-i18n): localize Settings toolbar chrome strings (#46217 partial)

- bucket: ready_for_maintainer
- author: ObliviateRickLin
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: web-ui, size: XL, proof: supplied, proof: sufficient, P3, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look, proof: 📸 screenshot
- gitcrawl snapshot updated: 2026-06-14T23:03:02Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Phase 1 of #46217: replaces 20 hardcoded English strings in the Settings view toolbar with `t()` calls under a new `settings.*` namespace in `ui/src/i18n/locales/en.ts`. Runs `pnpm ui:i18n:sync` to regenerate all 18 locale bundles. `zh-CN` and `zh-T

### #82552 fix(doctor): migrate legacy dreaming.storage string config (#70407)

- bucket: ready_for_maintainer
- author: ObliviateRickLin
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: commands, size: S, proof: supplied, proof: sufficient, P1, rating: 🦪 silver shellfish, merge-risk: 🚨 compatibility, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-14T23:05:03Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary v2026.4.21 changed `plugins.entries.memory-core.config.dreaming.storage` from a string (`"both" | "inline" | "separate"`) to an object (`{ mode, separateReports }`). Configs persisted before the upgrade fail schema validation on the next `openclaw s

### #82562 fix(plugins): retain plugin tool registry after replacement

- bucket: ready_for_maintainer
- author: luoyanglang
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T23:05:24Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: cached descriptor-backed plugin tools can lose their runtime registry after the active registry is replaced, then fail with `plugin tool runtime missing`. - Why it matters: #80847 reports contracted plugin tools becoming unavailable in su

### #78916 fix(qqbot): normalize cron delivery targets

- bucket: ready_for_maintainer
- author: jialudev
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: M, channel: qqbot, proof: supplied, proof: sufficient, P2, rating: 🦪 silver shellfish, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-14T23:05:54Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Normalize QQBot explicit cron delivery targets through the channel-owned parser so `qqbot:c2c:...` becomes channel-local `c2c:...` once the channel is already known. - Reject repeated QQBot provider prefixes during QQBot target parsing instead of 

### #78968 fix(auto-reply): acknowledge group reset commands

- bucket: ready_for_maintainer
- author: joeia26
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, proof: supplied, proof: sufficient, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, merge-risk: 🚨 security-boundary, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-14T23:05:58Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: # PR: Group reset feedback ## Summary This PR tightens the reset flow for group chats and makes reset feedback visible to users. It covers three related behaviors: - group chat bare `/reset` and `/new` are explicitly covered by the existing clear success ackno

### #82585 feat(synology-chat): add configurable triggerWord to replace payload-based stripping

- bucket: ready_for_maintainer
- author: iA2HVjA7ghZWWl2q9aoZ53f
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, size: S, channel: synology-chat, triage: needs-real-behavior-proof, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T23:06:04Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Problem The channel currently strips `payload.trigger_word` (the field Synology Chat populates on each webhook delivery) from the message text. This field is not user-controlled and its value depends on the Synology Chat configuration in unpredictable ways:

### #79041 fix(webhooks): scope child task sessions

- bucket: ready_for_maintainer
- author: afurm
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, size: M, extensions: webhooks, proof: supplied, proof: sufficient, P1, rating: 🦐 gold shrimp, merge-risk: 🚨 compatibility, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T23:06:11Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Fixes #79038 by rejecting Webhooks plugin `run_task.childSessionKey` values unless they identify the route's bound session or a session already recorded as spawned or parented by that route session. - Wires the registered plugin route to the exist

### #82618 feat(edit): populate details.diff so HTML export renders edit changes (#82015)

- bucket: ready_for_maintainer
- author: therahul-yo
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: M, proof: supplied, proof: sufficient, P2, rating: 🧂 unranked krab, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-14T23:06:16Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Closes #82015. The export-html template at `src/auto-reply/reply/export-html/template.js` already knows how to render `result.details.diff` as a coloured diff block (case `"edit"` around L1143-L1162 — added/removed/context lines styled separately), 

### #79339 fix: preserve final media reply directives

- bucket: ready_for_maintainer
- author: TnzGit
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: S, proof: supplied, proof: sufficient, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 message-delivery, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T23:06:24Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Flush the streaming reply directive accumulator on final empty block chunks so trailing `MEDIA:/path` lines held in `pendingTail` are not dropped. - Parse phase-aware final-answer text at `text_end` so providers that only surface final text in the

### #79405 fix: harden subagent completion fallback delivery

- bucket: ready_for_maintainer
- author: bingo30008196
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: L, proof: supplied, proof: sufficient, P1, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, merge-risk: 🚨 message-delivery, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-14T23:06:30Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Harden subagent completion delivery fallback around task-aware give-up paths. - Preserve taskId in pending delivery context and separate child run id from task id for idempotency. - Avoid persisting a transient primary announce failure as terminal

### #82665 docs(messages): clarify session key queue lanes

- bucket: ready_for_maintainer
- author: vingov
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, size: XS, proof: supplied, P3, rating: 🦞 diamond lobster, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T23:06:31Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: #72633 was closed because it introduced a broad standalone architecture page without current maintainer ownership. - Why it matters: the existing Messages page names the routing -> session key -> queue flow, but does not connect session-k

### #80388 feat(plugins): add Control UI entry points

- bucket: ready_for_maintainer
- author: Ittiz
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, channel: discord, channel: matrix, app: web-ui, gateway, size: XL, extensions: codex, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, merge-risk: 🚨 security-boundary, status: 👀 ready for maintainer look, feature: ✨ showcase
- gitcrawl snapshot updated: 2026-06-14T23:07:19Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: Plugins can expose gateway-authenticated HTTP routes, but there is no generic way for a plugin to register a first-class Control UI navigation entry. - Why it matters: Plugin UIs currently require bespoke Control UI wiring, which makes re

### #82718 docs(telegram): clarify account-local group config

- bucket: ready_for_maintainer
- author: hyjkimbot
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, channel: telegram, gateway, size: M, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T23:07:43Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: Telegram docs pointed group setup at root \`channels.telegram.groups\`, which is easy to misread in multi-account configs. - Why it matters: a bot account can receive a group message from Telegram but still drop it during OpenClaw group p

### #82870 fix(agent): keep tool media authoritative in replies

- bucket: ready_for_maintainer
- author: Merlinzy
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: M, proof: supplied, proof: sufficient, mantis: telegram-visible-proof, P1, rating: 🦐 gold shrimp, merge-risk: 🚨 message-delivery, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T23:08:50Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Keep tool-produced media authoritative when an assistant reply also contains `MEDIA:` directives, so stale or invented assistant paths cannot override real tool artifacts. - Preserve attempt-level tool media after pending media is consumed by stre

### #82906 fix(codex): gate CLI session resume behind plugin approval

- bucket: ready_for_maintainer
- author: LaPhilosophie
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: web-ui, gateway, size: M, extensions: codex, proof: supplied, proof: sufficient, P1, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, merge-risk: 🚨 availability, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T23:09:44Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: `codex.cli.session.resume` did not consistently pass through plugin approval before node dispatch. - Solution: require a restricted plugin approval for resume, limited to `allow-once` and `deny`. - What changed: the resume policy now requ

### #82909 fix(telegram): repair message cache reply types

- bucket: ready_for_maintainer
- author: lidge-jun
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: telegram, size: XS, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T23:09:55Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Repair the Telegram message cache types introduced by the latest reply-chain context changes on `main`. - Keep cached nodes' normalized `messageId` required after normalization so cache upserts can use it without widening to `undefined`. - Narrow 

### #85829 Avoid post-run auth success lane delay

- bucket: ready_for_maintainer
- author: TurboTheTurtle
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: S, proof: supplied, proof: sufficient, P1, rating: 🐚 platinum hermit, merge-risk: 🚨 auth-provider, merge-risk: 🚨 session-state, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T23:10:08Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - move post-run auth-profile success bookkeeping off the reply-blocking embedded-run path - log slow or failed post-run auth-success bookkeeping so future lock contention is visible - redact auth profile IDs in the new slow/failure diagnostics - add

### #82951 fix(proxy): redact sensitive headers in standalone debug proxy captures

- bucket: ready_for_maintainer
- author: SebTardif
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: M, proof: supplied, proof: sufficient, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 compatibility, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-14T23:10:41Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Fixes #90009 ## Problem The standalone debug proxy (`openclaw proxy start`) stores raw request and response headers in capture events via `JSON.stringify(req.headers)` without redaction. This includes `Authorization`, `x-api-key`, `Cookie`, and other sensitive

### #82955 fix(install): validate downloaded scripts before execution

- bucket: ready_for_maintainer
- author: SebTardif
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: scripts, size: M, proof: supplied, proof: sufficient, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 compatibility, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-14T23:10:56Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Fixes #90013 ## Problem Four code paths in `scripts/install.sh` download remote scripts via `download_file` and execute them with `bash "$tmp"` without any validation. While HTTPS/TLS1.2 protects the transport, truncated downloads, HTML error pages (e.g., CDN 

### #82985 feat(plugins): pass engine candidates to MemoryCorpusSupplement.search

- bucket: ready_for_maintainer
- author: ubehera
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, extensions: memory-core, size: M, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T23:11:37Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Closes #82984. ## Problem `MemoryCorpusSupplement.search` is designed for reranker-style plugins, but the current contract gives the supplement only `{ query, maxResults?, agentSessionKey? }`. To get candidates to rerank, the supplement has to call `manager.se

### #83041 Fix config patch restart-required notices

- bucket: ready_for_maintainer
- author: xuruiray
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, size: S, proof: supplied, proof: sufficient, P3, rating: 🦐 gold shrimp, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T23:12:29Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fixes #46797. This makes config write restart sentinel payloads carry whether the write actually requires a gateway restart, so pending/status summaries can say `Gateway restart required (...)` instead of `Gateway restart config-patch ok (...)`. It 

### #83048 fix(a2a): resolve direct/dm announce target from session-key fallback

- bucket: ready_for_maintainer
- author: avatasia
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: S, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T23:12:51Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Fix announce target resolution fallback for direct-session keys like `agent:main:<channel>:direct:<peerId>` and `...:dm:<peerId>`. - Keep channel plugin routing first (`resolveDeliveryTarget`) and fallback safely when plugin returns null. - Add fo

### #90421 fix(skills): reconcile stale workshop proposals when target skill exists or is missing

- bucket: ready_for_maintainer
- author: chengzhichao-xydt
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 session-state, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T23:16:28Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary When a pending create proposal's target skill file already exists (e.g. user manually installed it after the workshop agent's apply timed out), or a pending update proposal's target skill file has been removed, the proposal stays pending indefinitel

### #90450 fix(agents): preserve streamed assistant text when Claude CLI result event is empty

- bucket: ready_for_maintainer
- author: totobusnello
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: M, proof: supplied, proof: sufficient, P1, rating: 🐚 platinum hermit, merge-risk: 🚨 auth-provider, merge-risk: 🚨 message-delivery, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T23:17:09Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - The claude `stream-json` dialect can emit a final `result` event with **empty text** even though assistant text deltas were already streamed (or the turn was tool-only). Both JSONL parsers trust the final event and discard everything accumulated, 

### #90453 fix(memory-core): guard searches during safe reindex

- bucket: ready_for_maintainer
- author: 849261680
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: extensions: memory-core, size: M, proof: supplied, proof: sufficient, P1, rating: 🐚 platinum hermit, merge-risk: 🚨 availability, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T23:17:30Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary What problem does this PR solve? - Fixes an intermittent memory search/status race where safe full reindex temporarily points the manager at a half-built temp DB, allowing readers to see chunks without matching index metadata and fail closed with `i

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

