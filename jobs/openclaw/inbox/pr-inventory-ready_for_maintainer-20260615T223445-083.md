---
repo: openclaw/openclaw
cluster_id: pr-inventory-ready_for_maintainer-20260615T223445-083
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
  - "#89716"
  - "#89721"
  - "#89790"
  - "#89535"
  - "#89799"
  - "#89748"
  - "#90475"
  - "#54593"
  - "#54716"
  - "#54982"
  - "#58373"
  - "#59365"
  - "#68843"
  - "#74398"
  - "#79853"
  - "#85034"
  - "#85254"
  - "#86450"
  - "#89004"
  - "#89028"
  - "#89044"
  - "#89045"
  - "#89062"
  - "#89073"
  - "#89096"
cluster_refs:
  - "#89716"
  - "#89721"
  - "#89790"
  - "#89535"
  - "#89799"
  - "#89748"
  - "#90475"
  - "#54593"
  - "#54716"
  - "#54982"
  - "#58373"
  - "#59365"
  - "#68843"
  - "#74398"
  - "#79853"
  - "#85034"
  - "#85254"
  - "#86450"
  - "#89004"
  - "#89028"
  - "#89044"
  - "#89045"
  - "#89062"
  - "#89073"
  - "#89096"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "This is a PR inventory classification shard, not a dedupe cluster. Classify each PR independently and do not invent a shared canonical."
notes: "Generated from local gitcrawl open PR inventory on 2026-06-15T22:34:45.804Z; bucket=ready_for_maintainer; no GitHub mutation is possible in plan mode."
---

# PR Inventory ready_for_maintainer 83

This is a high-volume classification shard over open pull requests. It is not a dedupe cluster.

## Goal

Hydrate live GitHub state for each listed PR and emit one conservative action per PR. Prefer `keep_related`, `keep_independent`, `needs_human`, or `route_security`. Emit close-style planned actions only when fresh live evidence makes the PR boringly superseded, duplicate, abandoned, or low-signal under existing policies. For `target_updated_at`, copy only the hydrated value from the Cluster preflight artifact; do not use gitcrawl snapshot timestamps from this job body.

## Inventory

### #89716 fix(providers): strip cache-boundary marker from non-Anthropic prompts

- bucket: ready_for_maintainer
- author: masatohoshino
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, proof: supplied, proof: sufficient, P2, rating: 🦐 gold shrimp, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T10:19:01Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - The internal `SYSTEM_PROMPT_CACHE_BOUNDARY` marker (`\n<!-- OPENCLAW_CACHE_BOUNDARY -->\n`) is meant to stay private to OpenClaw's Anthropic prompt-cache split. It currently leaks verbatim into the system prompt sent to several **non-Anthropic** p

### #89721 test(cron): cover cron base-session preservation during reaper sweep

- bucket: ready_for_maintainer
- author: xiaobao-k8s
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS, proof: supplied, proof: sufficient, P3, rating: 🦞 diamond lobster, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T10:19:26Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Adds regression coverage for the current cron session reaper boundary: expired canonical `agent:<id>:cron:<jobId>:run:<runId>` run-session descendants are pruned, while stable `agent:<id>:cron:<jobId>` base rows are preserved. This PR is now intenti

### #89790 fix(googlechat): preserve thread targets through reply delivery

- bucket: ready_for_maintainer
- author: clawsweeper[bot]
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: googlechat, size: XS, size: S, size: L, clawsweeper, proof: sufficient, P1, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery, status: 👀 ready for maintainer look, proof: 📸 screenshot
- gitcrawl snapshot updated: 2026-06-15T10:22:03Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Repair Google Chat reply delivery so text chunks, media sends, typing-message fallback, and durable final delivery use the intended current thread target without leaking stale reply metadata. - Keep `replyToMode` semantics intact for implicit vs e

### #89535 test(codex): cover binds without model overrides

- bucket: ready_for_maintainer
- author: kesslerio
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS, extensions: codex, proof: supplied, proof: sufficient, P2, rating: 🦞 diamond lobster, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T10:22:04Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary What problem does this PR solve? - Adds regression coverage for `/codex bind` when the user does not pass `--model`. - Covers the command path behind openclaw/openclaw#89534, where a released bundle returned `Codex command failed: defaultModel is no

### #89799 fix(cli): skip compile cache on early Node 24.x to avoid startup deadlock

- bucket: ready_for_maintainer
- author: zhangguiping-xydt
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: M, proof: supplied, proof: sufficient, P1, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, merge-risk: 🚨 availability, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T10:23:10Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Disable Node compile cache for Windows packaged startup on early Node 24.x versions (`24.0`-`24.14`), including the case where the packaged launcher or entry helper inherits `NODE_COMPILE_CACHE` from the parent environment. This applies the same no-

### #89748 fix: trim trailing whitespace from final text-chunking chunk

- bucket: ready_for_maintainer
- author: thanhtoantnt
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: matrix, size: XS, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T10:23:12Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Fixes #64036. The final chunk emitted after the chunking loop was not trimmed with `trimEnd()`, unlike in-loop chunks. Also fix the same bug in Matrix's inline `chunkTextForOutbound` copy and update the guardrail test that hardcodes its source. ## Problem `chu

### #90475 fix(telegram): keep bot reply answers anchored to current message

- bucket: ready_for_maintainer
- author: moeedahmed
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: telegram, size: XS, proof: supplied, proof: sufficient, mantis: telegram-visible-proof, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 message-delivery, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T10:35:29Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Keep Telegram answers anchored to the current inbound message when the user replies to a bot/assistant message with selected quote text. - Preserve native quote-target behaviour for non-bot quoted replies. - Add a regression test covering the bot-

### #54593 Fix getSubagentDepth for legacy subagent session keys (AI-assisted)

- bucket: ready_for_maintainer
- author: ruanrrn
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T10:42:02Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fixes a silent bug where `getSubagentDepth()` returned `0` for legacy subagent session keys (e.g. `subagent:worker`) because the old implementation only split on `:subagent:` (requiring a colon on both sides), missing keys that start directly with `

### #54716 Fix sessions.list for literal per-agent store paths

- bucket: ready_for_maintainer
- author: giulio-leone
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, size: S, proof: sufficient, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T10:42:08Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - treat literal `session.store` paths under `agents/<id>/sessions/sessions.json` as multi-agent discovery roots instead of single-store fallbacks - keep the old single-store behavior for literal paths that do not match the per-agent on-disk layout -

### #54982 feat: preserve intermediate streaming output in TUI

- bucket: ready_for_maintainer
- author: sumukhj1219
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, cli, size: S, triage: refactor-only, triage: blank-template, proof: sufficient, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 session-state, status: ⏳ waiting on author, proof: 📸 screenshot
- gitcrawl snapshot updated: 2026-06-15T10:42:19Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Describe the problem and fix in 2–5 bullets: - Problem: - Why it matters: - What changed: - What did NOT change (scope boundary): ## Change Type (select all) - [ ] Bug fix - [ ] Feature - [ ] Refactor required for the fix - [ ] Docs - [ ] Security h

### #58373 fix(agents): bootstrap non-main models.json on skip to prevent Unknown model after agents.create

- bucket: ready_for_maintainer
- author: xiangri678
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: scripts, agents, size: L, proof: supplied, proof: sufficient, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 automation, merge-risk: 🚨 auth-provider, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T10:44:59Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: `agents.create` creates a valid non-main agent (config/workspace), but does not create `models.json` by design. Under a narrow startup path, this can later fail with `Unknown model`. - Why it matters: newly created non-main agents can hit

### #59365 feat(doctor): detect volatile filesystem (tmpfs/ramfs/overlay) for state directory

- bucket: ready_for_maintainer
- author: alkor2000
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, gateway, commands, size: M, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T10:46:03Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Add detection for state directories on volatile filesystems (tmpfs, ramfs, overlay) that lose all data on reboot. This complements the existing SD/eMMC storage and iCloud cloud-sync detection in `doctor-state-integrity`. ## Problem Container deploym

### #68843 fix(acp): treat missing cwd as stale bound session

- bucket: ready_for_maintainer
- author: kesslerio
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, proof: supplied, proof: sufficient, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 session-state, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T10:46:27Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: bound ACP sessions can stay attached after the persisted runtime working directory disappears, so retries keep failing against a dead session. - Why it matters: affected conversations remain wedged until stale binding state is manually cl

### #74398 fix(control-ui): honor verbose level for tool expansion

- bucket: ready_for_maintainer
- author: samrusani
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: web-ui, size: XS, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T10:47:32Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Fixes #49944. ## Summary - Preserve the effective `chat.history.verboseLevel` returned by the gateway in Control UI state. - Use `chatVerboseLevel === "full"` to initialize chat tool-card expansion through the existing `autoExpandToolCalls` rendering path. - C

### #79853 test(model-usage): make helper tests runnable from repo root

- bucket: ready_for_maintainer
- author: suyua9
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS, proof: supplied, proof: sufficient, P3, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T10:48:14Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Add the model-usage script directory to `sys.path` before importing `model_usage` in its unittest file. - Keep the change scoped to the test harness so runtime script behavior is unchanged. ## Reproduction Before this change, running the checked-i

### #85034 feat(commands): move /new to the top of native command menu

- bucket: ready_for_maintainer
- author: k42jc
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS, triage: refactor-only, triage: blank-template, proof: sufficient, mantis: telegram-visible-proof, P3, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, status: 👀 ready for maintainer look, proof: 🎥 video
- gitcrawl snapshot updated: 2026-06-15T10:49:35Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Move the /new command (start a new session) to be the first entry in the built-in native command registry, making it appear first in Telegram/Discord bot command menus. /new is by far the most frequently used command in daily workflows. Placing it first reduce

### #85254 perf(plugins): thread prepared manifestPlugins through runtime model-id normalize chain

- bucket: ready_for_maintainer
- author: zeroaltitude
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: scripts, agents, size: M, proof: supplied, proof: sufficient, P2, rating: 🦞 diamond lobster, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T10:49:43Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Extends the prepared-manifest-metadata threading from #82814 into the runtime plugin-normalize branch so callers that already carry prepared `manifestPlugins` skip the residual `installs.json` slot-or-load disk walk in `resolveMetadataSnapshotForPol

### #86450 test(cli): add focused coverage for node CLI daemon and command registry

- bucket: ready_for_maintainer
- author: 1052326311
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: cli, size: L, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T10:50:49Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary `src/cli/node-cli/daemon.ts` exposes seven branchy entry points (`runNodeDaemonInstall`, `runNodeDaemonUninstall`, `runNodeDaemonStart`, `runNodeDaemonRestart`, `runNodeDaemonStop`, `runNodeDaemonStatus`, plus `resolveNodeDefaults`), and `register.t

### #89004 fix #88353: [Bug]: Codex before_prompt_build receives empty messages after #88262

- bucket: ready_for_maintainer
- author: zhangguiping-xydt
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS, extensions: codex, proof: supplied, proof: sufficient, P2, rating: 🦞 diamond lobster, merge-risk: 🚨 compatibility, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T10:53:30Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Restore Codex `before_prompt_build` hook input so plugins can observe loaded OpenClaw session messages again. - Keep Codex app-server model input and `llm_input` diagnostics on the native thread path without mirrored OpenClaw history. - Copy hook-

### #89028 fix #82685: [Bug]: web_fetch fails to extract full HTML body content

- bucket: ready_for_maintainer
- author: zhangguiping-xydt
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: M, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T10:53:48Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fixes #82685. - Treat Readability output that only repeats the page title as a failed body extraction. - Preserve the existing provider-fallback-before-raw-HTML order for that failed extraction path. - Keep the public `htmlToMarkdown` helper behavio

### #89044 [codex] Group sidebar recent sessions by channel

- bucket: ready_for_maintainer
- author: GimingRao
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: web-ui, size: S, proof: supplied, proof: sufficient, P3, rating: 🦪 silver shellfish, status: ⏳ waiting on author, merge-risk: 🚨 other
- gitcrawl snapshot updated: 2026-06-15T10:55:15Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Group the sidebar's existing five most recent sessions by resolved channel. - Resolve the channel from session row metadata first, then fall back to session key parsing for channel-backed sessions, including account-scoped direct session keys. - A

### #89045 fix: recover terminal session status on visible inbound turns

- bucket: ready_for_maintainer
- author: Jerry-Xin
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, size: L, proof: supplied, proof: sufficient, P1, rating: 🦞 diamond lobster, merge-risk: 🚨 session-state, merge-risk: 🚨 message-delivery, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T10:55:29Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fixes #86827 — group chat sessions stuck in `failed` status silently drop all subsequent messages. When a group chat session enters a terminal status (`failed`, `timeout`, or `killed`), the reply dispatch path returns a successful no-op (`queuedFina

### #89062 feat(docker): support offline setup reruns

- bucket: ready_for_maintainer
- author: Alix-007
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, scripts, docker, size: S, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look, merge-risk: 🚨 other
- gitcrawl snapshot updated: 2026-06-15T10:55:42Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Fixes #70443. ## Summary - Add `scripts/docker/setup.sh --offline` for airgapped reruns with a preloaded `OPENCLAW_IMAGE`. - Skip Docker build/pull in offline mode, but still run the normal setup flow: `.env` sync, permission fix, onboarding/config sync, and C

### #89073 fix(exec): reuse duplicate background sessions

- bucket: ready_for_maintainer
- author: ferminquant
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: L, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T10:56:05Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Linked context Closes #62432. ## Summary - Repeated identical scoped background-capable `exec` retries now reuse the existing running process session instead of launching another child process. - Reuse covers explicit `background: true`, explicit `yieldMs`,

### #89096 [codex] fix launchd restart when gateway port is busy

- bucket: ready_for_maintainer
- author: shawnduggan
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, size: S, proof: sufficient, P2, rating: 🦞 diamond lobster, merge-risk: 🚨 availability, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T10:57:20Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary `openclaw gateway restart` on macOS was treating a busy gateway port as a fatal precondition before calling `launchctl kickstart -k`. During a normal LaunchAgent restart, the currently running gateway is expected to own that port until launchd repla
