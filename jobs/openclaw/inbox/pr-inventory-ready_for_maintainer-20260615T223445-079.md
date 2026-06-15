---
repo: openclaw/openclaw
cluster_id: pr-inventory-ready_for_maintainer-20260615T223445-079
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
  - "#81818"
  - "#93087"
  - "#81312"
  - "#83187"
  - "#80627"
  - "#81382"
  - "#22439"
  - "#93198"
  - "#44143"
  - "#45315"
  - "#48942"
  - "#49488"
  - "#51868"
  - "#54758"
  - "#86901"
  - "#59414"
  - "#69199"
  - "#71863"
  - "#72055"
  - "#72984"
  - "#73079"
  - "#73162"
  - "#73199"
  - "#73338"
  - "#73809"
cluster_refs:
  - "#81818"
  - "#93087"
  - "#81312"
  - "#83187"
  - "#80627"
  - "#81382"
  - "#22439"
  - "#93198"
  - "#44143"
  - "#45315"
  - "#48942"
  - "#49488"
  - "#51868"
  - "#54758"
  - "#86901"
  - "#59414"
  - "#69199"
  - "#71863"
  - "#72055"
  - "#72984"
  - "#73079"
  - "#73162"
  - "#73199"
  - "#73338"
  - "#73809"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "This is a PR inventory classification shard, not a dedupe cluster. Classify each PR independently and do not invent a shared canonical."
notes: "Generated from local gitcrawl open PR inventory on 2026-06-15T22:34:45.803Z; bucket=ready_for_maintainer; no GitHub mutation is possible in plan mode."
---

# PR Inventory ready_for_maintainer 79

This is a high-volume classification shard over open pull requests. It is not a dedupe cluster.

## Goal

Hydrate live GitHub state for each listed PR and emit one conservative action per PR. Prefer `keep_related`, `keep_independent`, `needs_human`, or `route_security`. Emit close-style planned actions only when fresh live evidence makes the PR boringly superseded, duplicate, abandoned, or low-signal under existing policies. For `target_updated_at`, copy only the hydrated value from the Cluster preflight artifact; do not use gitcrawl snapshot timestamps from this job body.

## Inventory

### #81818 fix skill download response size cap

- bucket: ready_for_maintainer
- author: afurm
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, agents, size: S, proof: supplied, proof: sufficient, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T06:48:18Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Fixes #81817. - Adds a 256 MiB cap for skill `download` installer responses. - Rejects oversized `Content-Length` values before opening the staging write and enforces the same limit while streaming. - Documents the download installer cap in the sk

### #93087 Reject unsupported diagnostics OTel grpc config

- bucket: ready_for_maintainer
- author: kiranmagic7
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, gateway, extensions: diagnostics-otel, commands, size: M, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T06:53:58Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fixes #93069. This keeps the config contract honest without stranding existing configs: - `diagnostics.otel.protocol` now documents and validates the only implemented transport: `http/protobuf`. - Existing shipped configs with `diagnostics.otel.prot

### #81312 fix(plugins): preserve bundled capability manifest contracts

- bucket: ready_for_maintainer
- author: yfge
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, proof: supplied, proof: sufficient, P1, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T06:54:50Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Background - bundled capability runtime rebuilt plugin records without carrying `manifest.contracts` forward - that drops `contracts.tools` (and other declared contract metadata) for bundled capability plugins like Feishu/Lark - downstream contract-based to

### #83187 fix(heartbeat): clear pendingFinalDelivery* on send success

- bucket: ready_for_maintainer
- author: agocs
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: telegram, size: M, proof: supplied, proof: sufficient, P1, rating: 🧂 unranked krab, merge-risk: 🚨 session-state, merge-risk: 🚨 message-delivery, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T06:54:59Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fixes #83184. The heartbeat send path in `src/infra/heartbeat-runner.ts:2011-2022` wrote `lastHeartbeatText` / `lastHeartbeatSentAt` after a successful `sendDurableMessageBatch` but never nulled the `pendingFinalDelivery*` recovery fields. A heartbe

### #80627 fix: improve error messages for skills update argument validation

- bucket: ready_for_maintainer
- author: Sujabaral
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: cli, size: XS, proof: sufficient, P3, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T07:05:08Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Improves validation error messages for invalid `openclaw skills update` usage. ## Changes - Adds clearer error when `skills update` is called without a skill slug or `--all`. - Adds clearer error when both a skill slug and `--all` are provided. - Ad

### #81382 [codex] Link heartbeat commitment questions to replies

- bucket: ready_for_maintainer
- author: Countermarch
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: L, proof: supplied, proof: sufficient, mantis: telegram-visible-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 session-state, merge-risk: 🚨 message-delivery, status: ⏳ waiting on author, proof: 🎥 video
- gitcrawl snapshot updated: 2026-06-15T07:06:28Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary This PR fixes the architectural gap where inferred commitment heartbeats can ask open-ended questions from a proactive heartbeat session, while the user's later answer lands in the target conversation without durable context tying it back to that qu

### #22439 feat(workspace): add tiered bootstrap loading with configurable bootstrapTier

- bucket: ready_for_maintainer
- author: 882soft
- author association: FIRST_TIMER
- draft: no
- assignees: none
- labels: agents, size: M, proof: supplied, proof: sufficient, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T07:08:06Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Closes #22438 ## Motivation Bootstrap files consume LLM tokens on every session. For users with large workspaces, loading all files into every session — including sub-agents and cron jobs — wastes context window budget on files the agent never references. This

### #93198 fix #80933: honor claude-cli contextTokens

- bucket: ready_for_maintainer
- author: mushuiyu886
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: M, proof: supplied, proof: sufficient, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T07:08:56Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: `claude-cli` runtime sessions could persist the fixed Anthropic 1M budget even when the canonical Anthropic provider config set a lower `contextTokens` cap. - Solution: Resolve configured context tokens through the exact runtime provider

### #44143 fix: serialize outbound deliveries per channel+recipient

- bucket: ready_for_maintainer
- author: nicolasgrasset
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: M, proof: sufficient, mantis: telegram-visible-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 message-delivery, merge-risk: 🚨 availability, status: ⏳ waiting on author, proof: 🎥 video
- gitcrawl snapshot updated: 2026-06-15T07:09:48Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary When multiple sessions (main + sub-agent) send messages to the same recipient concurrently, replies can arrive out of order because each session's delivery call races independently on the channel's HTTP endpoint. Users see jumbled message sequences

### #45315 fix: resolve response prefix template variables in abort replies

- bucket: ready_for_maintainer
- author: christopherwoodall
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, proof: sufficient, mantis: telegram-visible-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 session-state, status: ⏳ waiting on author, proof: 📸 screenshot
- gitcrawl snapshot updated: 2026-06-15T07:10:24Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Template variables are not populated when user issues early stop commands. - **Problem:** When a user sends a "stop" command (e.g. on WhatsApp), the abort reply displays unresolved template variables: `{model} - {thinkingLevel} 🦞: ⚙️ Agent was abor

### #48942 test(gateway): consolidate deriveSessionTitle tests into dedicated module

- bucket: ready_for_maintainer
- author: JFWaskin
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, size: M, proof: supplied, proof: sufficient, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 compatibility, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T07:11:53Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary This PR fixes an issue where heartbeat polls could overwrite explicit user-labeled session titles with transcript-derived titles like `"heartbeat"`. ## Changes - Extracts `deriveSessionTitle` to `session-title.ts` with a dedicated test module. - Pre

### #49488 Android: lower minSdk to 26

- bucket: ready_for_maintainer
- author: goweii
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: android, size: M, proof: sufficient, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 compatibility, merge-risk: 🚨 availability, status: ⏳ waiting on author, proof: 🎥 video
- gitcrawl snapshot updated: 2026-06-15T07:12:37Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Describe the problem and fix in 2–5 bullets: - Problem: Current minSdk version was too high, preventing users on older Android devices (API 26-30) from installing the app. Additionally, the UI relied on dynamic color features (Material You) availabl

### #51868 UI: fix half-block art rendering for UTF-8 QR codes in web chat

- bucket: ready_for_maintainer
- author: emg110
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: web-ui, size: S, proof: supplied, proof: sufficient, P2, rating: 🦐 gold shrimp, status: ⏳ waiting on author, proof: 📸 screenshot
- gitcrawl snapshot updated: 2026-06-15T07:13:21Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Describe the problem and fix in 2–5 bullets: - Problem: UTF-8 QR codes (using half-block characters ▀▄█) render broken in the web chat dashboard — default `<pre>` line-height creates gaps between rows, background/foreground colors don't match the bl

### #54758 fix(ui): propagate connect errors to pending requests

- bucket: ready_for_maintainer
- author: ruanrrn
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: web-ui, size: XS, proof: supplied, proof: sufficient, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 compatibility, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T07:14:53Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Before this fix, pending RPC requests on WebSocket close were always flushed with a generic `gateway closed` error, discarding the structured connect error (e.g. `PAIRING_REQUIRED`, `AUTH_TOKEN_MISMATCH`). The UI could not show meaningful error mess

### #86901 fix(feishu): fall back to post mode when markdown tables exceed card limit

- bucket: ready_for_maintainer
- author: name5566
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: feishu, size: XS, proof: supplied, proof: sufficient, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 message-delivery, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T07:15:28Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Problem When an agent's reply contains more than 5 Markdown tables, the Feishu plugin detects tables and automatically sends the reply as an interactive card. However, the Feishu card API limits each card to at most 5 table components (`ErrCode: 11310; card

### #59414 feat(doctor): add Node.js runtime info health contribution

- bucket: ready_for_maintainer
- author: alkor2000
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: commands, size: L, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T07:16:22Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Add a new Doctor health contribution that displays Node.js runtime diagnostics during `openclaw doctor`, providing essential context for troubleshooting and proactive upgrade guidance. ## What it does **Runtime summary note** (always shown): Node 24

### #69199 fix(memory): improve error message when node:sqlite is unavailable

- bucket: ready_for_maintainer
- author: rrrrrredy
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: extensions: memory-core, size: S, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T07:17:53Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Keeps the existing PR branch scoped to `extensions/memory-core`. - Classifies `node:sqlite` / missing built-in sqlite runtime errors in `buildMemorySearchUnavailableResult(error, overrides?)`. - Keeps the existing quota and generic branches, and k

### #71863 fix(signal): await daemon shutdown on restart

- bucket: ready_for_maintainer
- author: ZHOUKAILIAN
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: signal, size: M, proof: supplied, proof: sufficient, P1, rating: 🐚 platinum hermit, merge-risk: 🚨 availability, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T07:19:03Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - make Signal daemon shutdown asynchronous and await process exit - fall back to SIGKILL if signal-cli does not exit after SIGTERM - add regression coverage for daemon stop semantics and aborted monitor shutdown ## Testing - corepack pnpm exec vites

### #72055 feat(bonjour): add instanceName plugin config to override mDNS service name [AI-assisted]

- bucket: ready_for_maintainer
- author: jeffjhunter
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, gateway, size: S, plugin: bonjour, proof: sufficient, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 compatibility, merge-risk: 🚨 availability, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T07:19:20Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Closes #54467. ## Summary Adds a `plugins.entries.bonjour.config.instanceName` plugin config key so each gateway can advertise a distinct mDNS service instance name, instead of all gateways on the same host sharing `<machine display name> (OpenClaw)` and getti

### #72984 fix(subagent): resolve runtime model from subagent default instead of parent primary

- bucket: ready_for_maintainer
- author: joeykrug
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, agents, size: L, proof: supplied, proof: sufficient, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, merge-risk: 🚨 message-delivery, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T07:21:05Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Two-part fix for subagent model resolution: - **Commit 1 — read-side fallback (defense in depth, fbbd3c2d5f):** `resolveSessionModelRef` had no subagent awareness. When `entry.model` was empty (race between the spawn-side write and the gateway-side

### #73079 fix(minimax): request hex TTS output explicitly

- bucket: ready_for_maintainer
- author: efe-arv
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS, extensions: minimax, proof: sufficient, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T07:21:13Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - send \`output_format: "hex"\` in MiniMax TTS requests - send \`stream: false\` explicitly for the non-streaming path - extend the MiniMax speech-provider test to lock the request shape ## Why The MiniMax provider decodes \`data.audio\` as hex, but

### #73162 fix(slack): remove socket reconnect attempt cap so gateway stays connected indefinitely

- bucket: ready_for_maintainer
- author: suboss87
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: slack, size: XS, proof: sufficient, P1, rating: 🦐 gold shrimp, merge-risk: 🚨 compatibility, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T07:21:31Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## What and why After 12 consecutive failed Slack socket reconnects the provider threw an error and exited permanently. The gateway never restarts providers after they exit, so all subsequent Slack messages were silently dropped while the bot still appeared on

### #73199 Add hook capability smoke gate

- bucket: ready_for_maintainer
- author: martins-oss
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: scripts, size: M, proof: sufficient, P3, rating: 🦐 gold shrimp, merge-risk: 🚨 automation, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T07:21:46Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Task: 9f6c25b3 Adds a dry-run hook capability smoke gate/report for Codex/native guardrail parity. Rex verification before push: - node --check - scripts/hook-capability-smoke.mjs PASS (4 focused test files / 49 tests) - hook-capability script test 2/2 - corep

### #73338 fix(tui): follow active gateway port

- bucket: ready_for_maintainer
- author: haishmg
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, gateway, cli, size: M, proof: supplied, proof: sufficient, P2, rating: 🦞 diamond lobster, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T07:22:02Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: `openclaw tui` could still build its default local Gateway URL from config/defaults after a Gateway was started with an explicit runtime `--port`. - Why it matters: local TUI users with a custom active Gateway port had to pass `--url` man

### #73809 fix(heartbeat): archive rotated transcript on isolated-session reset

- bucket: ready_for_maintainer
- author: truffle-dev
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: scripts, size: M, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 session-state, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T07:23:30Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Refs #65564. When `heartbeat.isolatedSession === true` and `resolveCronSession({ forceNew: true })` mints a new `sessionId` for an `isolatedSessionKey` that already holds an entry, the prior entry is overwritten in-place at `heartbeat-runner.ts`. The existing
