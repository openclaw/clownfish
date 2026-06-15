---
repo: openclaw/openclaw
cluster_id: pr-inventory-ready_for_maintainer-20260615T223445-069
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
  - "#80392"
  - "#80422"
  - "#80455"
  - "#80473"
  - "#80499"
  - "#80596"
  - "#80666"
  - "#80670"
  - "#80726"
  - "#80805"
  - "#80818"
  - "#80889"
  - "#80916"
  - "#80957"
  - "#80985"
  - "#81019"
  - "#81047"
  - "#81157"
  - "#81184"
  - "#81190"
  - "#92900"
  - "#90227"
  - "#90266"
  - "#80632"
  - "#92892"
cluster_refs:
  - "#80392"
  - "#80422"
  - "#80455"
  - "#80473"
  - "#80499"
  - "#80596"
  - "#80666"
  - "#80670"
  - "#80726"
  - "#80805"
  - "#80818"
  - "#80889"
  - "#80916"
  - "#80957"
  - "#80985"
  - "#81019"
  - "#81047"
  - "#81157"
  - "#81184"
  - "#81190"
  - "#92900"
  - "#90227"
  - "#90266"
  - "#80632"
  - "#92892"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "This is a PR inventory classification shard, not a dedupe cluster. Classify each PR independently and do not invent a shared canonical."
notes: "Generated from local gitcrawl open PR inventory on 2026-06-15T22:34:45.801Z; bucket=ready_for_maintainer; no GitHub mutation is possible in plan mode."
---

# PR Inventory ready_for_maintainer 69

This is a high-volume classification shard over open pull requests. It is not a dedupe cluster.

## Goal

Hydrate live GitHub state for each listed PR and emit one conservative action per PR. Prefer `keep_related`, `keep_independent`, `needs_human`, or `route_security`. Emit close-style planned actions only when fresh live evidence makes the PR boringly superseded, duplicate, abandoned, or low-signal under existing policies. For `target_updated_at`, copy only the hydrated value from the Cluster preflight artifact; do not use gitcrawl snapshot timestamps from this job body.

## Inventory

### #80392 fix(gateway): disable startup trace monitor on startup failure

- bucket: ready_for_maintainer
- author: ejames-dev
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: googlechat, channel: matrix, gateway, size: XS, proof: supplied, proof: sufficient, P2, rating: 🦐 gold shrimp, status: ⏳ waiting on author, merge-risk: 🚨 other
- gitcrawl snapshot updated: 2026-06-14T21:33:29Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - add an explicit `startupTrace.close()` cleanup path in gateway startup tracing - call `startupTrace.close()` in the startup failure catch path so `monitorEventLoopDelay` is always disabled on failed startup - keep current extension type tests comp

### #80422 feat(android): add chat agent selector

- bucket: ready_for_maintainer
- author: bcperry
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: android, size: S, proof: supplied, proof: sufficient, P3, rating: 🦪 silver shellfish, merge-risk: 🚨 session-state, status: ⏳ waiting on author, proof: 📸 screenshot
- gitcrawl snapshot updated: 2026-06-14T21:34:05Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: the Android chat surface could show multiple agents indirectly, but users had no explicit way to choose which configured gateway agent should receive new chat messages. - Why it matters: multi-agent OpenClaw setups need an obvious mobile

### #80455 fix(doctor): suppress --fix trailer when no pending config changes remain

- bucket: ready_for_maintainer
- author: KeWang0622
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: commands, size: XS, proof: supplied, proof: sufficient, P3, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T21:34:39Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: `openclaw doctor` (without `--fix`) prints `Run "openclaw doctor --fix" to apply changes.` on every run, even when nothing in the run actually had a pending config change. After a successful `--fix` settles the workspace, a follow-up plai

### #80473 fix(discord): resolve redundant type constituents in native-command-route

- bucket: ready_for_maintainer
- author: KhanCold
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: discord, size: XS, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T21:34:49Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: fix(discord): resolve redundant type constituents in native-command-route Replace ReturnType-based type aliases with explicit non-any local types to eliminate oxlint no-redundant-type-constituents errors. - Use ConfiguredBindingRouteResult directly instead of

### #80499 Fix Claude ACP config controls

- bucket: ready_for_maintainer
- author: qianhaoq
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: M, extensions: acpx, proof: supplied, proof: sufficient, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-14T21:34:56Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - detect Claude ACP package and wrapper commands before forwarding config controls - skip unsupported timeout/Codex-style model values for Claude ACP - map generic thinking/reasoning controls to Claude ACP's effort key - add runtime tests covering C

### #80596 Expose transcript update emitter to plugins

- bucket: ready_for_maintainer
- author: WangBRen
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, size: XS, plugin: file-transfer, proof: sufficient, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-14T21:37:26Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - expose emitSessionTranscriptUpdate on plugin runtime events - keep onSessionTranscriptUpdate listener support unchanged - cover the runtime event surface in tests ## Test - pnpm exec vitest run src/plugins/runtime/index.test.ts

### #80666 Filter assistant process chatter from Dreaming session corpus

- bucket: ready_for_maintainer
- author: ArthurNie
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: extensions: memory-core, size: S, proof: supplied, proof: sufficient, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 session-state, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-14T21:39:11Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Fixes #80664. Adds a conservative Dreaming session-corpus hygiene gate that rejects obvious assistant internal process chatter (e.g. `Assistant: Need commit PR`, `Assistant: Now inspect`, `Assistant: Oops ... poll`) before snippets enter session-corpus recall

### #80670 fix(gateway): reduce WebChat ingress latency

- bucket: ready_for_maintainer
- author: AndyTane
- author association: FIRST_TIMER
- draft: no
- assignees: none
- labels: docs, app: web-ui, gateway, agents, size: XL, proof: supplied, proof: sufficient, P1, rating: 🧂 unranked krab, merge-risk: 🚨 session-state, merge-risk: 🚨 message-delivery, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-14T21:39:27Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Persist WebChat user turns to the active session JSONL immediately after `chat.send` ACK and before agent dispatch enters the serialized session lane. - Pass an entry-scoped suppression marker through reply options, queued followups, and the embed

### #80726 fix(telegram): resolve DM topic thread ids

- bucket: ready_for_maintainer
- author: Audiofool934
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: telegram, size: S, triage: needs-real-behavior-proof, proof: sufficient, mantis: telegram-visible-proof, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 message-delivery, status: 👀 ready for maintainer look, proof: 📸 screenshot
- gitcrawl snapshot updated: 2026-06-14T21:40:32Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - add a shared Telegram helper that resolves thread ids from `message_thread_id` or Bot API `direct_messages_topic.topic_id` - use that helper across Telegram inbound message context, native commands, runtime handlers, and sequential keys - add regr

### #80805 SUP-1563 restore channel responsiveness health

- bucket: ready_for_maintainer
- author: levineam
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: discord, channel: telegram, gateway, extensions: memory-core, scripts, commands, agents, size: M, proof: supplied, proof: sufficient, mantis: telegram-visible-proof, P2, rating: 🦪 silver shellfish, merge-risk: 🚨 message-delivery, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-14T21:42:14Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Surface real busy/active-run/stale activity state in channel status instead of relying only on connected transport state. - Record Telegram outbound activity with the correct account id and avoid treating bot-authored Discord messages as human inb

### #80818 googlechat: add appPrincipal setup input + docs

- bucket: ready_for_maintainer
- author: alexuser
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, channel: googlechat, size: S, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T21:42:40Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Fixes #51694 - Adds optional `appPrincipal` to the shared `ChannelSetupInput` type so `setup-core.ts` typechecks cleanly. - Keeps the existing patch scope for Google Chat app principal support and documentation. - Tests run: extensions/googlechat vitest suite

### #80889 fix(compaction): make overflow tuning configurable

- bucket: ready_for_maintainer
- author: hyspacex
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: S, proof: supplied, proof: sufficient, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 compatibility, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-14T21:45:32Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - add `agents.defaults.compaction.preemptiveOverflowRatio` for Pi tool-loop preemptive overflow threshold tuning - add `agents.defaults.compaction.maxOverflowAttempts` for Pi overflow compaction retry tuning - preserve current defaults (`0.9` ratio,

### #80916 fix(memory): skip empty dreaming placeholders

- bucket: ready_for_maintainer
- author: hyspacex
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: extensions: memory-core, size: S, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 session-state, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T21:46:04Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - stop REM preview from writing the `No strong candidate truths surfaced` placeholder under `### Possible Lasting Truths` - defensively classify historical empty-result placeholders as contaminated so already-written daily memory candidates do not p

### #80957 fix: refresh status context window after model switch

- bucket: ready_for_maintainer
- author: chenyanchen
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: M, proof: supplied, proof: sufficient, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 compatibility, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-14T21:47:43Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Ignore stale persisted contextTokens when /status sees a selected/default model change that is not an active fallback. - Preserve equivalent runtime aliases while doing the stale-context check, so CLI runtime aliases keep their live context window

### #80985 fix(cron): reject announce->webchat at create time and runtime

- bucket: ready_for_maintainer
- author: esqandil
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, cli, size: M, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T21:48:38Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## What Reject `delivery.mode="announce"` + `delivery.channel="webchat"` cron configurations at three layers so the misconfiguration never reaches the runtime delivery path with the generic "Channel is required (no configured channels detected)" error. 1. **CL

### #81019 fix: track systemd unit provenance

- bucket: ready_for_maintainer
- author: WT-WSL
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, gateway, commands, size: L, proof: supplied, proof: sufficient, P2, rating: 🦪 silver shellfish, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-14T21:49:07Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: update-mode doctor needed a way to refresh untouched generated Linux systemd gateway units without overwriting operator-owned edits. - Why it matters: generated-unit improvements can roll forward safely while custom `ExecStart`, `Environm

### #81047 fix(cli-runner): drop volatile systemPromptHash from claude-cli live fingerprint

- bucket: ready_for_maintainer
- author: benjamin1492
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: S, proof: supplied, proof: sufficient, mantis: telegram-visible-proof, P1, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-14T21:49:44Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Closes #81041. The `buildClaudeLiveFingerprint` helper in `src/agents/cli-runner/claude-live-session.ts` hashes `context.systemPrompt` as one of the keys deciding whether the active claude-cli subprocess is still valid. On chat channels (Telegram, D

### #81157 fix(agents): reject invalid process.action at the tool invocation boundary

- bucket: ready_for_maintainer
- author: adone0
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: S, proof: sufficient, P2, rating: 🦞 diamond lobster, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T21:52:34Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - `createProcessTool().execute` in `src/agents/bash-tools.process.ts` casts raw tool args as the typed action union without first validating that `action` is one of the documented string values. When a model emits `process({action: {}})` (the GLM/Z.

### #81184 fix(agents): dedup subagent completion announces to prevent double Slack post

- bucket: ready_for_maintainer
- author: EricCheungAO
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: M, proof: supplied, proof: sufficient, P2, rating: 🦪 silver shellfish, merge-risk: 🚨 message-delivery, merge-risk: 🚨 availability, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-14T21:53:28Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Adds a process-local dedup/coalesce wrapper around `deliverSubagentAnnouncement`, keyed on the announce's stable `directIdempotencyKey`, so racing lifecycle/retry paths cannot post a subagent completion twice in the requester's Slack thread. - Fai

### #81190 fix(agents): truncate tool results before overflow compaction

- bucket: ready_for_maintainer
- author: LLagoon3
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: S, proof: supplied, proof: sufficient, P1, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T21:53:49Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: tool-heavy context overflows could wait for the full LLM auto-compaction timeout before trying the existing deterministic tool-result truncation recovery. - Why it matters: small follow-up turns in long-lived Telegram sessions can appear

### #92900 fix(ui): refresh overview model auth status on demand

- bucket: ready_for_maintainer
- author: YonganZhang
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: web-ui, size: XS, proof: sufficient, P3, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T21:57:09Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Fixes #92888 ## Summary - pass `{ refresh: true }` from `refreshActiveTab` when the Overview tab is manually refreshed - keep the existing deferred Overview secondary loader behavior, but force the model auth status call to bypass the gateway's 60s cache - add

### #90227 test: make zalo credentials tests compatible with Windows

- bucket: ready_for_maintainer
- author: aniruddhaadak80
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: zalouser, size: XS, proof: sufficient, P3, rating: 🦞 diamond lobster, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T21:58:19Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Enables running Zalo credentials tests on Windows: 1) by conditionalizing POSIX-specific permission stat mode checks so we only assert them on POSIX platforms, while validating directory/file presence on Windows, and 2) by replacing the hardcoded Windows skip

### #90266 test: detect file symlink support dynamically in json-file tests

- bucket: ready_for_maintainer
- author: aniruddhaadak80
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS, proof: sufficient, P3, rating: 🦐 gold shrimp, merge-risk: 🚨 automation, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-14T21:59:49Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Replaces the hardcoded Windows skip in JSON file helper tests with a dynamic file symlink capability check. If file symlinks are supported by the environment, the tests execute. Otherwise, they skip gracefully, allowing correct platform-specific testing. ### V

### #80632 fix(slack): route mission replies to canonical threads

- bucket: ready_for_maintainer
- author: Chw5722
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: slack, size: M, proof: supplied, proof: sufficient, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, merge-risk: 🚨 message-delivery, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-14T22:00:25Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Root Cause Hermes carries Slack thread affinity as first-class routing state. OpenClaw only propagated Slack thread IDs through some paths. For mission messages in Slack channels, `replyToMode=off` could leave `MessageThreadId` unset, so final replies, stre

### #92892 fix(gateway): allow Gemini CLI image-capable models

- bucket: ready_for_maintainer
- author: YonganZhang
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, size: S, proof: sufficient, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T22:05:45Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Fixes #91739 ## Summary - treat `google-gemini-cli` Gemini flash/pro chat models as image-capable when catalog metadata is stale or missing image input - preserve fail-closed behavior for non-chat Gemini models such as embeddings - add focused `resolveGatewayM
