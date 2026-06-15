---
repo: openclaw/openclaw
cluster_id: pr-inventory-needs_proof-20260615T131654-049
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
  - "#91279"
  - "#91280"
  - "#91286"
  - "#91288"
  - "#93226"
  - "#39102"
  - "#92700"
  - "#91943"
  - "#82540"
  - "#50483"
  - "#54585"
  - "#55341"
  - "#93271"
  - "#93266"
  - "#89238"
  - "#55927"
  - "#56357"
  - "#56398"
  - "#56706"
  - "#56720"
  - "#60229"
  - "#60485"
  - "#60630"
  - "#93273"
  - "#60683"
  - "#60698"
  - "#60868"
  - "#60934"
  - "#60981"
  - "#61242"
  - "#61322"
  - "#61576"
  - "#61624"
  - "#93267"
  - "#61675"
  - "#61973"
  - "#62021"
  - "#62157"
  - "#62201"
  - "#62338"
cluster_refs:
  - "#91279"
  - "#91280"
  - "#91286"
  - "#91288"
  - "#93226"
  - "#39102"
  - "#92700"
  - "#91943"
  - "#82540"
  - "#50483"
  - "#54585"
  - "#55341"
  - "#93271"
  - "#93266"
  - "#89238"
  - "#55927"
  - "#56357"
  - "#56398"
  - "#56706"
  - "#56720"
  - "#60229"
  - "#60485"
  - "#60630"
  - "#93273"
  - "#60683"
  - "#60698"
  - "#60868"
  - "#60934"
  - "#60981"
  - "#61242"
  - "#61322"
  - "#61576"
  - "#61624"
  - "#93267"
  - "#61675"
  - "#61973"
  - "#62021"
  - "#62157"
  - "#62201"
  - "#62338"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "This is a PR inventory classification shard, not a dedupe cluster. Classify each PR independently and do not invent a shared canonical."
notes: "Generated from local gitcrawl open PR inventory on 2026-06-15T13:16:54.483Z; bucket=needs_proof; no GitHub mutation is possible in plan mode."
---

# PR Inventory needs_proof 49

This is a high-volume classification shard over open pull requests. It is not a dedupe cluster.

## Goal

Hydrate live GitHub state for each listed PR and emit one conservative action per PR. Prefer `keep_related`, `keep_independent`, `needs_human`, or `route_security`. Emit close-style planned actions only when fresh live evidence makes the PR boringly superseded, duplicate, abandoned, or low-signal under existing policies. For `target_updated_at`, copy only the hydrated value from the Cluster preflight artifact; do not use gitcrawl snapshot timestamps from this job body.

## Inventory

### #91279 fix(ui): show config path in overview snapshot (Fixes #53958)

- bucket: needs_proof
- author: deepujain
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: web-ui, size: XS, triage: needs-real-behavior-proof, P3, rating: 🧂 unranked krab, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T11:09:27Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fixes #53958. Operators looking at Control UI Overview often need to answer a basic troubleshooting question quickly: which config file is this gateway actually using? The gateway snapshot already includes `configPath`, so this change simply surface

### #91280 fix(cli): add exec approval recovery guidance (Fixes #53250)

- bucket: needs_proof
- author: deepujain
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: cli, size: XS, triage: needs-real-behavior-proof, P3, rating: 🧂 unranked krab, status: 🛠️ actively grinding
- gitcrawl snapshot updated: 2026-06-15T11:09:39Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fixes #53250. When `host=node` exec approval is required but no approval UI is available, the CLI currently fails with a generic error: `exec denied: approval required (approval UI not available)` That tells the operator something is wrong, but not 

### #91286 fix: minSecurity order inverted — full should be least restrictive

- bucket: needs_proof
- author: korewaChino
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS, triage: needs-real-behavior-proof, P1, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T11:09:45Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: `minSecurity` was treating `"full"` as rank 2 (most restrictive) and `"deny"` as rank 0 (least restrictive), which is backwards. When `resolveExecHostApprovalContext` computes: ```ts const hostSecurity = minSecurity(params.security, approvals.agent.security); 

### #91288 fix: minSecurity inverted security rank order (#91283)

- bucket: needs_proof
- author: bladin
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: XS, proof: supplied, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T11:09:50Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fixed the `minSecurity()` function which had the security rank order backwards, treating `full` as the most restrictive instead of the least restrictive. ## Real behavior proof **Behavior addressed**: Session-level `security="full"` configuration wa

### #93226 fix(auth-health): prefer usable OAuth over expired inventory in provider status

- bucket: needs_proof
- author: mmyzwl
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, agents, size: XS, proof: supplied, P3, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T11:10:00Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fix the Control UI auth badge showing "expired" when the provider has a healthy OAuth profile alongside stale expired profiles, by preferring usable credential status over expired inventory in the provider health aggregation. ## Root Cause `buildAut

### #39102 feat(agents): per-agent outbound A2A allowlist override

- bucket: needs_proof
- author: superWorldSavior
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, gateway, commands, agents, size: M, proof: supplied, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T11:15:29Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Add `agents.list[].tools.agentToAgent.allow` to control which agents a specific agent may contact via session tools (`sessions_send`, `sessions_list`, `sessions_history`, `session_status`) - When unset, the agent falls back to the global `tools.ag

### #92700 #92664: [Bug]: read tool fails to read GBK-encoded text files on Chinese Windows (displays garbled text)

- bucket: needs_proof
- author: zhiqiang26
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: S, proof: supplied, P2, rating: 🦪 silver shellfish, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T11:16:40Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Fix garbled text when reading non-UTF-8 files (GBK on Chinese Windows, Shift_JIS on Japanese Windows) by reusing the existing Windows active- codepage decoder (`decodeWindowsOutputBuffer`) in the read tool. - No new API parameter — read tool follo

### #91943 fix(feishu): coalesce streaming card updates

- bucket: needs_proof
- author: feie22
- author association: FIRST_TIMER
- draft: no
- assignees: none
- labels: docs, channel: feishu, size: S, proof: supplied, P1, rating: 🦪 silver shellfish, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T11:17:31Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Keep Feishu streaming cards on CardKit's documented full-content update contract. - Coalesce rapid token updates so long replies send fewer growing full-content payloads to Feishu. - Remove the previously proposed append-only streaming content mod

### #82540 fix(wechat): preserve existing accounts across hot reload

- bucket: needs_proof
- author: NewdlDewdl
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, gateway, agents, size: L, proof: supplied, P1, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T11:20:12Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - preserve known live accounts when an already-active channel hot-reload restarts without an explicit account id - preserve known accounts for channel account-index reload markers such as `channels.openclaw-weixin.channelConfigUpdatedAt` - avoid uni

### #50483 fix(ios): stabilize chat streaming layout and session flow

- bucket: needs_proof
- author: eulicesl
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: stale, size: M, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 session-state, merge-risk: 🚨 message-delivery, status: 📣 needs proof, proof: 🎥 video
- gitcrawl snapshot updated: 2026-06-15T11:20:39Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: iOS chat streaming could attach to a synthetic placeholder lane, churn during initial history/bootstrap, and reparse streaming content in ways that caused flicker or session drift. - Why it matters: active conversations can show unstable 

### #54585 Agents: add compaction modes (warn, error, none) with proactive conte…

- bucket: needs_proof
- author: fierai
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: M, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T11:21:54Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Summary - Problem: Users often lose important conversation history due to aggressive auto-compaction, or they encounter cryptic provider-specific "context window exceeded" errors when the window is full. - Why it matters: Advanced users need explicit control o

### #55341 Persist refreshed Twitch tokens and fix OpenProse fast-loop exits

- bucket: needs_proof
- author: pomarie
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: extensions: open-prose, channel: twitch, size: M, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T11:22:30Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - persist refreshed Twitch OAuth tokens back to config for config-backed Twitch accounts, covering both base-level default config and named account entries - add Twitch unit coverage for refresh writeback and `onRefresh` persistence wiring - fix the

### #93271 fix(security): respect hook session key prefixes in audit

- bucket: needs_proof
- author: mushuiyu886
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS, proof: supplied, P2, rating: 🦪 silver shellfish, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T11:26:06Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: The security audit always emitted `hooks.request_session_key_enabled` when `hooks.allowRequestSessionKey=true`, even after users configured `hooks.allowedSessionKeyPrefixes` to constrain accepted session key shapes. - Solution: Treat conf

### #93266 fix(feishu): scope topic queue dispatch

- bucket: needs_proof
- author: LucienShui
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: feishu, size: L, triage: mock-only-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 session-state, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T11:26:27Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Fixes Feishu inbound queue routing for group/topic messages by deriving the sequential queue key from the same scoped peer identity used by session routing. - Preserves existing chat-wide escape lanes for `/stop` and `/btw`, while keeping other se

### #89238 fix(reply): let active turns reach queue policy

- bucket: needs_proof
- author: darinkishore
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, triage: needs-real-behavior-proof, mantis: telegram-visible-proof, P1, rating: 🧂 unranked krab, merge-risk: 🚨 session-state, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T11:27:57Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - let same-session visible turns reach active-run queue policy even while a reply operation is active - keep the existing Slack routed-thread bypass behavior intact - preserve serialization for different non-Slack routed threads ## Why `messages.que

### #55927 feat(ui): visible room and channel context for sessions and chat

- bucket: needs_proof
- author: escalonalabs
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: web-ui, agents, stale, size: L, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T11:28:46Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary This PR ships the full Phase 0 + Phase 1 Control UI visibility work for sessions/chat. ### Phase 0 - Sync `GatewaySessionRow` with current gateway payload - Surface room/channel/title metadata in Sessions and Chat - Show Guardian badge when `sendPol

### #56357 fix(control-ui): restore header logo and favicon display

- bucket: needs_proof
- author: yangyitao100
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: web-ui, gateway, size: S, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T11:28:59Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary After upgrading to 2026.3.24, the Control UI header logo (red lobster icon) and favicon are missing. The favicon.svg file exists and is accessible at `/favicon.svg`, but the UI doesn't display it. ## Root Cause `agentLogoUrl()` returned a relative p

### #56398 fix(gateway): keep two-phase exec approvals pending when no approval …

- bucket: needs_proof
- author: PexMor
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, size: S, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T11:29:05Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: fix(gateway): keep two-phase exec approvals pending when no approval clients connected ## Summary - Problem: Two-phase exec approval requests (used by agent tools) were immediately expired with `no-approval-route` when no approval clients were connected, same 

### #56706 TTS: enforce standalone directive lines parsing

- bucket: needs_proof
- author: yejiming
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: slack, size: M, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery, merge-risk: 🚨 availability, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T11:29:11Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: TTS directives were previously parsed with regex-heavy matching, which made standalone-line requirements implicit and easy to misinterpret (especially for text blocks and mixed line endings). - Why it matters: Ambiguous parsing can cause 

### #56720 fix(hooks): restore --exclude-labels in Gmail watcher args

- bucket: needs_proof
- author: Lidang-Jiang
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, gateway, size: S, triage: needs-real-behavior-proof, P1, rating: 🦪 silver shellfish, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T11:29:21Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fixes #56635 - Restores `--exclude-labels SPAM,TRASH,DRAFT,SENT` in `gog gmail watch serve` args so sent mail and draft saves do not trigger Gmail hook runs by default. - Adds `hooks.gmail.excludeLabels` to the config schema/types with runtime defau

### #60229 feat(telegram): coalesce inbound messages while agent is busy

- bucket: needs_proof
- author: fangli
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: telegram, size: XS, triage: needs-real-behavior-proof, mantis: telegram-visible-proof, P1, rating: 🧂 unranked krab, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T11:30:14Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Problem When an agent run is active, subsequent inbound Telegram messages from the same chat are serialized at two layers before reaching the queue-level collect logic: 1. **grammY `sequentialize` middleware** — uses a per-chat key (`telegram:{chatId}`), bl

### #60485 fix(feishu): accept token-verified webhook challenges

- bucket: needs_proof
- author: jupiturliu
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: feishu, size: S, triage: needs-real-behavior-proof, P1, rating: 🧂 unranked krab, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T11:30:19Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: Feishu/Lark webhook `url_verification` callbacks can arrive without the normal request signature during callback setup, which made OpenClaw return `401 Invalid signature` and fail callback validation. - Why it matters: apps configured for

### #60630 fix(ci): Windows task tests and Telegram setup promotion surface

- bucket: needs_proof
- author: Tianworld
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: msteams, channel: signal, channel: telegram, extensions: memory-core, commands, agents, size: L, channel: qqbot, extensions: memory-wiki, extensions: codex, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 availability, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T11:30:28Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary ### Tasks (Windows CI) - **task-executor.test.ts**: Avoid triggering outbound `sendMessage` in the blocked-flow retry test (dynamic import can bypass the Vitest mock on Windows CI and hang until timeout). - **task-registry.test.ts**: Close the task-

### #93273 fix(ui): adopt inFlightRun on Control UI history reload

- bucket: needs_proof
- author: LiuwqGit
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: web-ui, size: S, proof: supplied, P2, rating: 🦪 silver shellfish, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T11:30:28Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary What problem does this PR solve? - Control UI loses the in-progress assistant response when the user navigates away from a running chat session and returns; only the last committed user message is shown even though the gateway run is still active. W

### #60683 feat(memory): expose local llama embedding settings

- bucket: needs_proof
- author: kevinlasnh
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, agents, stale, size: M, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T11:30:36Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - add memorySearch.local tuning fields for local node-llama-cpp embeddings: gpu, gpuLayers, contextSize, and lashAttention - pass the resolved settings through memory config into the local embedding provider without changing defaults - document the 

### #60698 feat: inject per-agent requestMetadata into Bedrock calls (#60602)

- bucket: needs_proof
- author: godharakesh
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, channel: feishu, size: S, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 security-boundary, merge-risk: 🚨 availability, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T11:30:42Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Describe the problem and fix in 2–5 bullets: - Problem: When running multiple agents on Amazon Bedrock, all `ConverseStream` API calls go through the same IAM role with no distinguishing metadata. AWS Cost Explorer cannot attribute costs to individu

### #60868 Agents: detect context overflow across error cause chains

- bucket: needs_proof
- author: dst1213
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: discord, gateway, agents, size: L, extensions: minimax, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T11:30:47Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Detect context overflow errors not just at the top level of an error chain, but at any depth. ## Changes ### `src/agents/failover-error.ts` - Added `collectErrorChainMessages()`: collects non-empty `.message` values across the full depth-first `.err

### #60934 fix(auth): respect auth override by filtering profiles (token/oauth) (closes #60930)

- bucket: needs_proof
- author: juliabush
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: XS, triage: needs-real-behavior-proof, P3, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T11:30:53Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: Auth profile resolution ignored `auth` override and selected OAuth profiles even when `mode: "token"` was configured - Why it matters: Telegram and other integrations incorrectly used OAuth, consuming credits instead of billing via API ke

### #60981 # PR: Filesystem Access Control (PathGuard)

- bucket: needs_proof
- author: Ar3ss12
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: web-ui, gateway, agents, size: XL, triage: needs-real-behavior-proof, P2, merge-risk: 🚨 compatibility, merge-risk: 🚨 security-boundary
- gitcrawl snapshot updated: 2026-06-15T11:31:11Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: # PR: Filesystem Access Control (PathGuard) ## Summary This PR introduces a stricter, policy-driven filesystem access layer (**PathGuard**) for OpenClaw agent filesystem tools, including local media (image/pdf) loaders. It closes key security and consistency g

### #61242 Improve managed child-task flow UX for long-running tasks

- bucket: needs_proof
- author: wuyin-roger
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, app: web-ui, gateway, cli, commands, agents, size: XL, triage: dirty-candidate, triage: needs-real-behavior-proof, P1, rating: 🧂 unranked krab, merge-risk: 🚨 session-state, merge-risk: 🚨 message-delivery, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T11:31:36Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary This PR improves the long-running Task Flow path for managed child-task spawns created via `sessions_spawn(taskFlow=...)`. It turns the flow from a mostly internal state machine into a more user-facing and durable experience: - `sessions_spawn(taskF

### #61322 fix(sessions): remap stale same-agent paths into the current state dir

- bucket: needs_proof
- author: rbutera
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, triage: needs-real-behavior-proof, P1, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T11:31:44Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: persisted absolute `sessionFile` paths for the same agent can survive a state-root move (for example `/home/<user>/.openclaw/...` to `/Users/<user>/.openclaw/...`) and still be treated as structurally valid. - Why it matters: resumed or targete

### #61576 feat: Rust/GTK4 Linux companion app (#75, alternative track)

- bucket: needs_proof
- author: 00xglitch
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XL, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T11:32:04Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Adds a native Linux desktop companion under `apps/linux-gtk/` written in **Rust + GTK4 + libadwaita** - Alternative-track contribution for [#75](https://github.com/openclaw/openclaw/issues/75) alongside @tiagonix's C/GTK4 work at `apps/linux/` — d

### #61624 feat(whatsapp): add dmRequireMention for DM trigger gating

- bucket: needs_proof
- author: mubbie
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, channel: whatsapp-web, size: S, triage: dirty-candidate, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T11:32:11Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Adds `dmRequireMention` config option to WhatsApp channel (and base `ExtensionChannelConfig`) that gates DM replies behind mention-pattern matching - Reuses existing `mentionPatterns` + `resolveMentionGating` infrastructure — no new pattern config

### #93267 fix(session-memory): skip delivery-mirror entries and dedup consecutive identical assistant messages (#92563)

- bucket: needs_proof
- author: fsdwen
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 session-state, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T11:32:20Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary `getRecentSessionContent` in the session-memory hook would produce duplicate `assistant:` lines when thinking-enabled models caused two entries to be written to the session JSONL for the same assistant response. Two fixes: 1. **Skip `delivery-mirror

### #61675 feat: fire session reset hooks for daily and idle resets

- bucket: needs_proof
- author: salvormallow
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, size: L, clawsweeper, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T11:32:24Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: Internal hooks and `before_reset` plugin hook only fire for manual `/new` and `/reset` commands, not for daily (4AM) or idle-timeout session resets. This means `session-memory` never saves on daily/idle resets. - Why it matters: 4 communi

### #61973 feat(update): add `openclaw update review` pre-upgrade risk assessment

- bucket: needs_proof
- author: ziggy2socks
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, cli, size: L, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T11:32:36Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## What this adds `openclaw update review` — a read-only pre-upgrade risk assessment subcommand. Run it before `openclaw update` to understand what changed and whether it is safe to upgrade right now. ``` openclaw update review openclaw update review --json op

### #62021 fix(macos): rewrite wildcard A2UI host to loopback

- bucket: needs_proof
- author: ThanhNguyxn07
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: macos, size: XS, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 availability, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T11:32:41Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Fixes macOS node A2UI URL resolution by rewriting wildcard canvas hosts (`0.0.0.0` / `::`) to loopback before appending the A2UI path. - Keeps the change minimal and isolated to macOS node runtime URL handling, so existing non-wildcard host behavi

### #62157 fix: only drop streamed payloads, not all final payloads

- bucket: needs_proof
- author: ericyoshida
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS, triage: needs-real-behavior-proof, mantis: telegram-visible-proof, P1, rating: 🧂 unranked krab, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T11:32:52Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Problem When block streaming is enabled (`blockStreamingDefault: "on"`), text generated by the agent **before** tool calls is correctly streamed to the user. However, text generated **after** tool calls (final payloads) is silently dropped and never deliver

### #62201   fix: mitigate stale toolResult replay pollution

- bucket: needs_proof
- author: avatasia
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: XL, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T11:32:58Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary This change mitigates stale diagnostic `toolResult` replay pollution in session history. It adds structured replay metadata for transient environment-diagnostic tool results, then omits stale results during replay when they are either: - older than 

### #62338 doctor(memory): surface FTS5 unavailable state in doctor checks

- bucket: needs_proof
- author: ZanderH-code
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, gateway, commands, size: S, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T11:33:03Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fixes #62328 by making `openclaw doctor` visibly report when SQLite FTS5 is unavailable in the running gateway. - Extend `doctor.memory.status` payload with `fts` probe fields (`enabled`, `available`, `error`) - Thread that payload through `probeGat

