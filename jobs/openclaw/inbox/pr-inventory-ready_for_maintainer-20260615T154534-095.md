---
repo: openclaw/openclaw
cluster_id: pr-inventory-ready_for_maintainer-20260615T154534-095
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
  - "#80929"
  - "#80957"
  - "#80965"
  - "#80985"
  - "#81008"
  - "#81019"
  - "#81047"
  - "#81053"
  - "#81157"
  - "#81184"
  - "#81190"
  - "#92900"
  - "#90227"
  - "#90234"
  - "#90266"
  - "#80632"
  - "#92892"
  - "#77784"
  - "#79747"
  - "#79882"
  - "#80033"
  - "#81158"
  - "#81243"
  - "#89635"
  - "#81300"
cluster_refs:
  - "#80929"
  - "#80957"
  - "#80965"
  - "#80985"
  - "#81008"
  - "#81019"
  - "#81047"
  - "#81053"
  - "#81157"
  - "#81184"
  - "#81190"
  - "#92900"
  - "#90227"
  - "#90234"
  - "#90266"
  - "#80632"
  - "#92892"
  - "#77784"
  - "#79747"
  - "#79882"
  - "#80033"
  - "#81158"
  - "#81243"
  - "#89635"
  - "#81300"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "This is a PR inventory classification shard, not a dedupe cluster. Classify each PR independently and do not invent a shared canonical."
notes: "Generated from local gitcrawl open PR inventory on 2026-06-15T15:45:34.212Z; bucket=ready_for_maintainer; no GitHub mutation is possible in plan mode."
---

# PR Inventory ready_for_maintainer 95

This is a high-volume classification shard over open pull requests. It is not a dedupe cluster.

## Goal

Hydrate live GitHub state for each listed PR and emit one conservative action per PR. Prefer `keep_related`, `keep_independent`, `needs_human`, or `route_security`. Emit close-style planned actions only when fresh live evidence makes the PR boringly superseded, duplicate, abandoned, or low-signal under existing policies. For `target_updated_at`, copy only the hydrated value from the Cluster preflight artifact; do not use gitcrawl snapshot timestamps from this job body.

## Inventory

### #80929 fix(outbound): classify deterministic delivery errors

- bucket: ready_for_maintainer
- author: honor2030
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 message-delivery, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T21:46:51Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Classify deterministic outbound delivery failures for disallowed local media paths as permanent errors. - Classify overlong message failures as permanent errors. - Add regression coverage for both failure strings in the delivery queue policy tests

### #80957 fix: refresh status context window after model switch

- bucket: ready_for_maintainer
- author: chenyanchen
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: M, proof: supplied, proof: sufficient, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 compatibility, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-14T21:47:43Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Ignore stale persisted contextTokens when /status sees a selected/default model change that is not an active fallback. - Preserve equivalent runtime aliases while doing the stale-context check, so CLI runtime aliases keep their live context window

### #80965 fix(channels): keep groupPolicy=open loose when groups dict has per-group overrides

- bucket: ready_for_maintainer
- author: voicewitness
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, gateway, size: S, proof: sufficient, mantis: telegram-visible-proof, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 compatibility, merge-risk: 🚨 security-boundary, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-14T21:48:00Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - `channels.<provider>.groupPolicy: "open"` is documented as *"Groups bypass allowlists; mention-gating still applies."* (see `docs/channels/groups.md`), but `resolveChannelGroupPolicy` flipped the channel into allowlist mode the moment `channels.<p

### #80985 fix(cron): reject announce->webchat at create time and runtime

- bucket: ready_for_maintainer
- author: esqandil
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, cli, size: M, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T21:48:38Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## What Reject `delivery.mode="announce"` + `delivery.channel="webchat"` cron configurations at three layers so the misconfiguration never reaches the runtime delivery path with the generic "Channel is required (no configured channels detected)" error. 1. **CL

### #81008 feat(memory-core): Memory Privacy Audit + Encrypted Backup

- bucket: ready_for_maintainer
- author: sagarkothapalli
- author association: FIRST_TIMER
- draft: no
- assignees: none
- labels: docs, channel: zalo, app: web-ui, gateway, extensions: memory-core, cli, scripts, commands, agents, size: XL, triage: dirty-candidate, extensions: diagnostics-prometheus, extensions: deepinfra, proof: supplied, proof: sufficient, extensions: openrouter, P2, rating: 🦪 silver shellfish, merge-risk: 🚨 automation, merge-risk: 🚨 compatibility, merge-risk: 🚨 security-boundary, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-14T21:48:59Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Build the first contribution as **privacy visibility plus encrypted backup**, not live encrypted memory. The feature adds a safe CLI workflow that audits where OpenClaw stores memory-related data, flags privacy risks, and supports encrypted export/i

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

### #81053 feat(whatsapp): per-group allowFrom for sender authorization

- bucket: ready_for_maintainer
- author: jack-stormentswe
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, channel: whatsapp-web, size: M, proof: supplied, proof: sufficient, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 security-boundary, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-14T21:49:48Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Fixes #69926. Brings WhatsApp to parity with Feishu, IRC, LINE, Telegram, and Nextcloud-talk by accepting a per-group `allowFrom` list on `channels.whatsapp.groups.<jid>` (and the matching account-scoped entry). A non-empty per-group `allowFrom` overrides (doe

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

### #90234 fix(agents): filter unresolved model registry rows

- bucket: ready_for_maintainer
- author: ferminquant
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, agents, size: XL, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T21:58:47Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fixes #66961. - Filter generated `models.json` provider rows before write so model-bearing providers only survive when they have a usable execution contract: `baseUrl` plus usable auth, or an explicit runtime-accepted no-key auth mode such as `aws-s

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

### #77784 Add Teams delegated auth for plugin tools

- bucket: ready_for_maintainer
- author: MSNexploder
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, channel: msteams, scripts, agents, size: XL, extensions: codex, proof: supplied, proof: sufficient, dependencies-changed, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, merge-risk: 🚨 security-boundary, status: ⏳ waiting on author, proof: 📸 screenshot, feature: ✨ showcase
- gitcrawl snapshot updated: 2026-06-14T22:08:20Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: Plugin tools could not safely request a per-user Microsoft Teams delegated token from the current Teams conversation. - Why it matters: Teams/Graph OBO-style integrations need user-delegated context without leaking channel tokens into pro

### #79747 feat(control-ui): add pinned chat slots

- bucket: ready_for_maintainer
- author: hekunwang
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, app: web-ui, gateway, size: XL, proof: supplied, proof: sufficient, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, status: ⏳ waiting on author, proof: 📸 screenshot
- gitcrawl snapshot updated: 2026-06-14T22:09:57Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - add a Control UI sidebar pinned-chats strip with configurable slots, drag reorder, inline rename, unpin, and one-click parallel chat creation - persist pinned chat keys/slot count locally and sync them through `sessions.patch` so the preference fo

### #79882 feat(mcp): add shared runtime scope for bundled MCP servers

- bucket: ready_for_maintainer
- author: shebson
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, gateway, agents, size: L, proof: supplied, proof: sufficient, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 security-boundary, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-14T22:10:03Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - **Problem:** session-scoped bundled MCP runtimes (`getOrCreateSessionMcpRuntime`) pay a full cold start (spawn + connect + `listTools` per server) on each fresh session, and explicitly retire on subagent step completion (`agent-step.ts:80,109`). F

### #80033 fix(opencode-go): add supportedReasoningEfforts to DeepSeek V4 model entries

- bucket: ready_for_maintainer
- author: wrcno1
- author association: FIRST_TIMER
- draft: no
- assignees: none
- labels: size: XS, proof: sufficient, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T22:10:34Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Problem DeepSeek V4 Flash and V4 Pro natively support reasoning_effort: "max" at the API level. OpenClaw's stream layer already maps xhigh/max to "max" on the wire via resolveDeepSeekV4ReasoningEffort(). However, the opencode-go provider did not expose thes

### #81158 fix(plugins): prevent workspace snapshot auto-trust

- bucket: ready_for_maintainer
- author: Lucenx9
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, merge-risk: 🚨 security-boundary, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T22:12:30Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: unscoped plugin auto-enable could reuse the process-wide current plugin metadata snapshot even when that snapshot was scoped to an active workspace. - Why it matters: a workspace plugin that claimed a built-in channel could be selected be

### #81243 feat(discord): add fetch action to retrieve a single message by ID or URL

- bucket: ready_for_maintainer
- author: yousan
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: discord, scripts, agents, size: M, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, status: 👀 ready for maintainer look, proof: 📸 screenshot
- gitcrawl snapshot updated: 2026-06-14T22:13:00Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## TL;DR (30-second review) - **What:** Adds `action: "fetch"` to the Discord `message` tool — retrieve a single message by `channelId` + `messageId`, or by Discord message URL (`url`). - **Why:** The internal `fetchMessage` path already existed but wasn't on 

### #89635 fix(security): cap state directory writes to 0700

- bucket: ready_for_maintainer
- author: SebTardif
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, proof: supplied, proof: sufficient, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-14T22:13:50Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Fixes #89589 ## Summary `writeTextAtomic` computes `dirMode` as `0o777 & ~process.umask()`, which yields `0o775` under the common `umask 0o002`. When the atomic replace helper ensures the parent directory exists, it sets that mode, relaxing a previously harden

### #81300 codex: plumb session reasoningLevel into codex model_reasoning_summary

- bucket: ready_for_maintainer
- author: iYoungblood
- author association: FIRST_TIMER
- draft: no
- assignees: none
- labels: size: S, extensions: codex, proof: sufficient, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 compatibility, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-14T22:14:01Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Problem The codex app-server defaults `model_reasoning_summary` to `"none"` when it isnt explicitly configured. As a result codex still produces reasoning items internally (visible in its rollout `.jsonl`) but never emits `item/reasoning/summaryTextDelta` n

