---
repo: openclaw/openclaw
cluster_id: pr-inventory-ready_for_maintainer-20260615T131654-073
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
  - "#88992"
  - "#89799"
  - "#89748"
  - "#89142"
  - "#89168"
  - "#90474"
  - "#90805"
  - "#90861"
  - "#90902"
  - "#90903"
  - "#90918"
  - "#91310"
  - "#90475"
  - "#53821"
  - "#54593"
  - "#54716"
  - "#54982"
  - "#89483"
  - "#56497"
  - "#58373"
  - "#59365"
  - "#68843"
  - "#74398"
  - "#79853"
  - "#92217"
  - "#84705"
  - "#85034"
  - "#85254"
  - "#85643"
  - "#86450"
  - "#86764"
  - "#87590"
  - "#89004"
  - "#89017"
  - "#89028"
  - "#89039"
cluster_refs:
  - "#89716"
  - "#89721"
  - "#89790"
  - "#89535"
  - "#88992"
  - "#89799"
  - "#89748"
  - "#89142"
  - "#89168"
  - "#90474"
  - "#90805"
  - "#90861"
  - "#90902"
  - "#90903"
  - "#90918"
  - "#91310"
  - "#90475"
  - "#53821"
  - "#54593"
  - "#54716"
  - "#54982"
  - "#89483"
  - "#56497"
  - "#58373"
  - "#59365"
  - "#68843"
  - "#74398"
  - "#79853"
  - "#92217"
  - "#84705"
  - "#85034"
  - "#85254"
  - "#85643"
  - "#86450"
  - "#86764"
  - "#87590"
  - "#89004"
  - "#89017"
  - "#89028"
  - "#89039"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "This is a PR inventory classification shard, not a dedupe cluster. Classify each PR independently and do not invent a shared canonical."
notes: "Generated from local gitcrawl open PR inventory on 2026-06-15T13:16:54.489Z; bucket=ready_for_maintainer; no GitHub mutation is possible in plan mode."
---

# PR Inventory ready_for_maintainer 73

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

### #88992 fix: recover stranded replies in message_tool_only mode (#85714)

- bucket: ready_for_maintainer
- author: Jerry-Xin
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, gateway, agents, size: M, extensions: qa-lab, proof: supplied, proof: sufficient, P1, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery, merge-risk: 🚨 security-boundary, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T10:22:40Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary When `messages.visibleReplies` is set to `message_tool`, the agent is expected to call the message tool to deliver replies. If the LLM forgets (a probabilistic event — the reporter saw it happen on the 8th turn after 7 correct deliveries), the reply

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

### #89142 fix(secrets): generate secretref reference docs from the credential matrix

- bucket: ready_for_maintainer
- author: 1052326311
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, scripts, size: M, proof: sufficient, P2, rating: 🦞 diamond lobster, merge-risk: 🚨 automation, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T10:25:22Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fixes #85969 (replaces the original PR). Adds a shared SecretRef credential-surface Markdown formatter, extends the matrix generator with write/check modes for JSON plus Markdown marker blocks, wires package/preflight scripts, updates generated refe

### #89168 fix(browser): recover stale managed Chrome CDP listener

- bucket: ready_for_maintainer
- author: rohitjavvadi
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XL, proof: supplied, proof: sufficient, P1, rating: 🦞 diamond lobster, merge-risk: 🚨 availability, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T10:25:43Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fixes #41750. This adds a guarded recovery path for the managed local browser profile when its loopback CDP port is still held by an unresponsive Chrome-family process from the same OpenClaw-managed profile. Instead of immediately failing launch wit

### #90474 fix(state): retire superseded plugin install index

- bucket: ready_for_maintainer
- author: 849261680
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: commands, size: S, proof: supplied, proof: sufficient, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T10:31:43Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary What problem does this PR solve? - Fixes repeated legacy plugin install index conflict warnings after a successful external plugin update leaves newer shared SQLite install metadata for the same npm package. - Teaches the legacy install-index migrat

### #90805 fix(codex): fail closed on missing native hook relay delivery

- bucket: ready_for_maintainer
- author: Kaspre
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: cli, agents, size: L, extensions: codex, proof: supplied, proof: sufficient, P1, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 security-boundary, merge-risk: 🚨 availability, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T10:33:01Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary What problem does this PR solve? - Makes OpenClaw's Codex tool-policy enforcement fail closed when Codex native `PreToolUse` delivery is required but the native hook relay is not actually invoked. - Adds a Codex `SessionStart` startup canary to the 

### #90861 fix #77426: [Bug]:sessions_yield: always returns "No session context" on MCP/claude-cli agent runtime path (gateway tool resolver missing sessionId + onYield)

- bucket: ready_for_maintainer
- author: zhangguiping-xydt
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, agents, size: M, proof: supplied, proof: sufficient, P1, rating: 🐚 platinum hermit, merge-risk: 🚨 session-state, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T10:33:45Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary What problem does this PR solve? `sessions_yield` on the bundled MCP / CLI loopback path was constructed without the active run `sessionId` and `onYield` lifecycle callback, so the tool could return `No session context` instead of yielding the activ

### #90902 fix #90743: emit MCP screenshot image source

- bucket: ready_for_maintainer
- author: mushuiyu886
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, proof: supplied, proof: sufficient, P2, rating: 🦞 diamond lobster, merge-risk: 🚨 compatibility, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T10:34:03Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Fixes #90743. - The plugin tools MCP bridge now keeps returned image content in the repository's pinned `@modelcontextprotocol/sdk` 1.29.0 result schema: `{ type: "image", data, mimeType }`. - Source-shaped image blocks from tool implementations a

### #90903 fix(agents): inherit default agent model catalog for secondary agents

- bucket: ready_for_maintainer
- author: thinhkhang97
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: M, proof: supplied, proof: sufficient, P1, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, merge-risk: 🚨 security-boundary, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T10:34:09Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: # fix(agents): inherit default agent model catalog for secondary agents ## Summary Secondary (non-default) agents created with `openclaw agents add` fail at runtime with `FailoverError: Unknown model: google/gemini-2.5-flash` when using a Google/Gemini model a

### #90918 fix(agents): forward turn-source routing fields to plugin.approval.request

- bucket: ready_for_maintainer
- author: 849261680
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, agents, size: S, proof: supplied, proof: sufficient, mantis: telegram-visible-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 message-delivery, merge-risk: 🚨 security-boundary, status: ⏳ waiting on author, proof: 🎥 video
- gitcrawl snapshot updated: 2026-06-15T10:34:28Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fixes #74003. When a `before_tool_call` hook returns `requireApproval`, the gateway fails to route the approval prompt back to the originating channel because `turnSourceChannel`, `turnSourceTo`, `turnSourceAccountId`, and `turnSourceThreadId` were 

### #91310 fix(memory): resolve embedding provider by authProviderId fallback

- bucket: ready_for_maintainer
- author: LiLan0125
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: extensions: memory-core, size: XS, proof: supplied, proof: sufficient, P1, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T10:35:03Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - When a user configures `memorySearch.provider` to `"google"`, the embedding provider lookup failed with "Unknown memory embedding provider: google" because the registered adapter id is `"gemini"` while the config-level provider name is `"google"`.

### #90475 fix(telegram): keep bot reply answers anchored to current message

- bucket: ready_for_maintainer
- author: moeedahmed
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: telegram, size: XS, proof: supplied, proof: sufficient, mantis: telegram-visible-proof, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 message-delivery, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T10:35:29Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Keep Telegram answers anchored to the current inbound message when the user replies to a bot/assistant message with selected quote text. - Preserve native quote-target behaviour for non-bot quoted replies. - Add a regression test covering the bot-

### #53821 Add per-agent sandbox session visibility override feature

- bucket: ready_for_maintainer
- author: sasan1200
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, gateway, agents, size: M, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, merge-risk: 🚨 security-boundary, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T10:41:50Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: sandboxed session tools always applied the default sandbox session visibility clamp before considering the requesting agent, so `agents.list[].sandbox.sessionToolsVisibility` could be configured but was not consistently honored. - Runtime

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

### #89483 [AI-assisted] Persist agent-run error replies in chat history

- bucket: ready_for_maintainer
- author: IWhatsskill
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: web-ui, gateway, size: S, clawsweeper:automerge, clawsweeper:human-review, proof: supplied, proof: sufficient, P1, rating: 🦞 diamond lobster, status: 🚀 automerge armed
- gitcrawl snapshot updated: 2026-06-15T10:42:26Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: A started Control UI agent run could surface a terminal provider/runtime error live, but `chat.history` after refresh did not retain an assistant error turn for that failed run. - Solution: Treat agent-run failure replies as real error pa

### #56497 feat(extension): support session cache for volcengine

- bucket: ready_for_maintainer
- author: stayrascal
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, size: L, extensions: volcengine, proof: sufficient, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, merge-risk: 🚨 security-boundary, status: ⏳ waiting on author, proof: 📸 screenshot
- gitcrawl snapshot updated: 2026-06-15T10:43:52Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Describe the problem and fix in 2–5 bullets: - Problem: Volcengine provider lacked session-based response caching support for multi-turn conversations. - Why it matters: Without session caching, every turn sends full context to the API, increasing l

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

### #92217 feat(fireworks): catalog DeepSeek V4 Pro, MiniMax M2.7, GLM-5.1, GPT-OSS 120B reasoning models

- bucket: ready_for_maintainer
- author: obuchowski
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, size: M, proof: supplied, proof: sufficient, P1, rating: 🦪 silver shellfish, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, status: ⏳ waiting on author, proof: 📸 screenshot
- gitcrawl snapshot updated: 2026-06-15T10:48:46Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: **TL;DR** I run OpenClaw against Fireworks serverless and wanted their current reasoning lineup — DeepSeek V4 Pro, MiniMax M2.7, GLM-5.1, GPT-OSS 120B — selectable like any bundled model instead of falling through to the dynamic-model guesswork. Cataloging Dee

### #84705 Audit config backups for plaintext secrets

- bucket: ready_for_maintainer
- author: lukaIvanic
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, size: M, proof: supplied, proof: sufficient, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 compatibility, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T10:49:13Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary /claim #11829 This closes a concrete remaining gap from the API-key protection roadmap: stale adjacent `openclaw.json` backups and managed snapshots can still contain plaintext credentials after the active config has moved to SecretRefs. `openclaw s

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

### #85643 fix(sessions): honor explicit default model pins

- bucket: ready_for_maintainer
- author: latensified
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, gateway, commands, agents, size: XL, proof: supplied, proof: sufficient, mantis: telegram-visible-proof, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, merge-risk: 🚨 session-state, status: 👀 ready for maintainer look, proof: 🎥 video
- gitcrawl snapshot updated: 2026-06-15T10:50:00Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Persist explicit user selections of the configured default model as exact session model pins instead of clearing them as if they were unpinned defaults. - Keep `/model default`, `session_status(model=default)`, and `sessions.patch model:null` as t

### #86450 test(cli): add focused coverage for node CLI daemon and command registry

- bucket: ready_for_maintainer
- author: 1052326311
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: cli, size: L, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T10:50:49Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary `src/cli/node-cli/daemon.ts` exposes seven branchy entry points (`runNodeDaemonInstall`, `runNodeDaemonUninstall`, `runNodeDaemonStart`, `runNodeDaemonRestart`, `runNodeDaemonStop`, `runNodeDaemonStatus`, plus `resolveNodeDefaults`), and `register.t

### #86764 fix(agents): persist user turn before attempt failures

- bucket: ready_for_maintainer
- author: TurboTheTurtle
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: commands, agents, size: L, proof: supplied, proof: sufficient, P1, rating: 🐚 platinum hermit, merge-risk: 🚨 session-state, merge-risk: 🚨 security-boundary, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T10:51:23Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Real behavior proof Behavior addressed: Internal ACP/CLI session-effects turns now persist the accepted user message into the active internal attempt transcript before the external runner can fail, and later successful transcript persistence reuses that sam

### #87590 fix(memory-core): show signalCount in promotion annotations

- bucket: ready_for_maintainer
- author: bladin
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: extensions: memory-core, size: S, proof: supplied, proof: sufficient, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 compatibility, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T10:52:34Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fixes #87588 — Dreaming promotion annotation shows `recallCount` instead of `signalCount`, causing confusion when entries are promoted via `dailyCount` signals with `recallCount=0`. ## Root Cause The promotion annotation format in `buildPromotionSec

### #89004 fix #88353: [Bug]: Codex before_prompt_build receives empty messages after #88262

- bucket: ready_for_maintainer
- author: zhangguiping-xydt
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS, extensions: codex, proof: supplied, proof: sufficient, P2, rating: 🦞 diamond lobster, merge-risk: 🚨 compatibility, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T10:53:30Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Restore Codex `before_prompt_build` hook input so plugins can observe loaded OpenClaw session messages again. - Keep Codex app-server model input and `llm_input` diagnostics on the native thread path without mirrored OpenClaw history. - Copy hook-

### #89017 fix #87700: [Bug]: Control UI webchat session silently resets after network disconnect / sleep — previous session file renamed to .jsonl.reset.* and lost from sessions tab

- bucket: ready_for_maintainer
- author: zhangguiping-xydt
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, app: web-ui, gateway, scripts, size: M, proof: supplied, proof: sufficient, P1, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T10:53:43Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary What problem does this PR solve? Control UI can keep showing a conversation after gateway reconnect, but the next send can roll the stale transcript into `.jsonl.reset.*` and make it disappear from the sessions tab. The root cause is that `chat.send

### #89028 fix #82685: [Bug]: web_fetch fails to extract full HTML body content

- bucket: ready_for_maintainer
- author: zhangguiping-xydt
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: M, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T10:53:48Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fixes #82685. - Treat Readability output that only repeats the page title as a failed body extraction. - Preserve the existing provider-fallback-before-raw-HTML order for that failed extraction path. - Keep the public `htmlToMarkdown` helper behavio

### #89039 fix: prevent silent message loss from EmbeddedAttemptSessionTakeoverError

- bucket: ready_for_maintainer
- author: Jerry-Xin
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: XL, proof: supplied, proof: sufficient, P1, rating: 🦪 silver shellfish, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, merge-risk: 🚨 message-delivery, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T10:54:29Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary When the OpenAI SDK retried an `ECONNRESET` internally (default `maxRetries=2`), the session write lock was released during the retry window. Incoming steering messages could then modify the transcript without updating the fence, causing a fingerpri

