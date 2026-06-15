---
repo: openclaw/openclaw
cluster_id: pr-inventory-ready_for_maintainer-20260615T154534-116
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
  - "#89604"
  - "#89612"
  - "#89621"
  - "#93245"
  - "#89714"
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
cluster_refs:
  - "#89604"
  - "#89612"
  - "#89621"
  - "#93245"
  - "#89714"
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
security_policy: central_security_only
security_sensitive: false
canonical_hint: "This is a PR inventory classification shard, not a dedupe cluster. Classify each PR independently and do not invent a shared canonical."
notes: "Generated from local gitcrawl open PR inventory on 2026-06-15T15:45:34.216Z; bucket=ready_for_maintainer; no GitHub mutation is possible in plan mode."
---

# PR Inventory ready_for_maintainer 116

This is a high-volume classification shard over open pull requests. It is not a dedupe cluster.

## Goal

Hydrate live GitHub state for each listed PR and emit one conservative action per PR. Prefer `keep_related`, `keep_independent`, `needs_human`, or `route_security`. Emit close-style planned actions only when fresh live evidence makes the PR boringly superseded, duplicate, abandoned, or low-signal under existing policies. For `target_updated_at`, copy only the hydrated value from the Cluster preflight artifact; do not use gitcrawl snapshot timestamps from this job body.

## Inventory

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

