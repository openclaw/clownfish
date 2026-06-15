---
repo: openclaw/openclaw
cluster_id: pr-inventory-ready_for_maintainer-20260615T154534-110
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
  - "#81503"
  - "#81513"
  - "#81621"
  - "#81696"
  - "#81731"
  - "#81777"
  - "#81784"
  - "#81787"
  - "#82023"
  - "#81818"
  - "#93087"
  - "#81312"
  - "#83187"
  - "#90305"
  - "#80627"
  - "#81382"
  - "#22439"
  - "#93198"
  - "#43469"
  - "#44143"
  - "#45315"
  - "#48942"
  - "#49488"
  - "#51868"
  - "#54758"
cluster_refs:
  - "#81503"
  - "#81513"
  - "#81621"
  - "#81696"
  - "#81731"
  - "#81777"
  - "#81784"
  - "#81787"
  - "#82023"
  - "#81818"
  - "#93087"
  - "#81312"
  - "#83187"
  - "#90305"
  - "#80627"
  - "#81382"
  - "#22439"
  - "#93198"
  - "#43469"
  - "#44143"
  - "#45315"
  - "#48942"
  - "#49488"
  - "#51868"
  - "#54758"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "This is a PR inventory classification shard, not a dedupe cluster. Classify each PR independently and do not invent a shared canonical."
notes: "Generated from local gitcrawl open PR inventory on 2026-06-15T15:45:34.215Z; bucket=ready_for_maintainer; no GitHub mutation is possible in plan mode."
---

# PR Inventory ready_for_maintainer 110

This is a high-volume classification shard over open pull requests. It is not a dedupe cluster.

## Goal

Hydrate live GitHub state for each listed PR and emit one conservative action per PR. Prefer `keep_related`, `keep_independent`, `needs_human`, or `route_security`. Emit close-style planned actions only when fresh live evidence makes the PR boringly superseded, duplicate, abandoned, or low-signal under existing policies. For `target_updated_at`, copy only the hydrated value from the Cluster preflight artifact; do not use gitcrawl snapshot timestamps from this job body.

## Inventory

### #81503 docs(plugins): document session end shutdown budget

- bucket: ready_for_maintainer
- author: WuKongAI-CMU
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, size: XS, proof: supplied, P3, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T06:46:22Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - document the `shutdown` and `restart` `session_end` reasons as shutdown-finalizer events - call out the 2-second total drain budget for plugin `session_end` work - advise plugin maintainers to fast-path or make persistence crash-consistent for shu

### #81513 gateway: support user-role chat.inject with idempotent replays

- bucket: ready_for_maintainer
- author: aaronclawrsl-bot
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: web-ui, gateway, size: L, proof: supplied, proof: sufficient, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, merge-risk: 🚨 message-delivery, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T06:46:27Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - extend `chat.inject` params with optional `role` (`assistant` | `user`) and `idempotencyKey` - preserve existing assistant injection behavior as default - add a user-role transcript append path through the shared transcript append pipeline - make 

### #81621 fix(agents): prevent premature subagent completion from causing message loss and session-state drift [AI-assisted]

- bucket: ready_for_maintainer
- author: GanglyPuma22
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: M, proof: supplied, proof: sufficient, mantis: telegram-visible-proof, P1, rating: 🦪 silver shellfish, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, merge-risk: 🚨 message-delivery, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T06:46:50Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - treat unresolved tool-boundary endings as lifecycle errors instead of successful subagent completion - ignore `sessions_yield` wait turns and stale raw tool output when selecting frozen child completion text - add regression coverage for unresolve

### #81696 fix: guard tool event callbacks (AI-assisted)

- bucket: ready_for_maintainer
- author: enjoylife1243
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: S, proof: supplied, proof: sufficient, P2, rating: 🦞 diamond lobster, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T06:46:56Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: tool progress callbacks during tool event emission could throw synchronously or reject asynchronously. - Why it matters: a failing observer/progress callback could interrupt tool-start handling or leak an unhandled rejection in gateway ru

### #81731 fix(cron): treat exact-second cron slots as valid in stale-future repair

- bucket: ready_for_maintainer
- author: yashkot007
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS, proof: supplied, proof: sufficient, P2, rating: 🦞 diamond lobster, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T06:47:11Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary `isStaggeredCronRunAtMs` probes the cron library at `runAtMs + 1` to decide whether a persisted `nextRunAtMs` is a real schedule slot. Croner-style second-granular schedules normalize that 1ms probe back to the candidate's second, so `previousRuns(1

### #81777 [codex] support session-isolated app-server clients

- bucket: ready_for_maintainer
- author: henkterharmsel
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, agents, size: XL, extensions: codex, proof: supplied, proof: sufficient, mantis: telegram-visible-proof, P1, rating: 🦐 gold shrimp, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery, merge-risk: 🚨 availability, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T06:47:25Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - add opt-in `appServer.clientIsolation=session` so Codex app-server clients and thread bindings can be isolated per OpenClaw runtime-policy session/topic instead of shared per agent - route run attempts, queued follow-ups, native compaction, `/btw`

### #81784 feat(agents): expose inbound turn identifiers to CLI subprocesses

- bucket: ready_for_maintainer
- author: gado-ships-it
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: M, proof: supplied, proof: sufficient, P2, rating: 🧂 unranked krab, merge-risk: 🚨 message-delivery, merge-risk: 🚨 security-boundary, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T06:47:30Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary CLI agent backends often run a shell wrapper to do channel-side work (e.g. sending a threaded reply). Until now that wrapper had no deterministic way to learn the current inbound turn's identifiers — message id, sender, chat id — so it had to scrape

### #81787 Add bundle MCP diagnostics timeline spans

- bucket: ready_for_maintainer
- author: LLagoon3
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: S, proof: supplied, proof: sufficient, P2, rating: 🦐 gold shrimp, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T06:47:39Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: `bundle-tools` could take noticeable time during embedded agent prep, but diagnostics only exposed a single opaque timing bucket. - Why it matters: when configured/bundled MCP tools are slow to discover, maintainers cannot tell which serv

### #82023 feat(telegram): bind spawned subagents to forum topics

- bucket: ready_for_maintainer
- author: efpiva
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, channel: telegram, gateway, agents, size: XL, proof: supplied, proof: sufficient, mantis: telegram-visible-proof, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, merge-risk: 🚨 message-delivery, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T06:48:17Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Adds an explicit `supportsAutomaticThreadBindingSpawn` channel capability so automatic thread-bound session spawn support is not overloaded onto `defaultTopLevelPlacement`. - Wires Telegram `subagent_spawning`, `subagent_delivery_target`, and `sub

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

### #90305 [daemon] Preserve gateway drain during supervised restarts

- bucket: ready_for_maintainer
- author: Glucksberg
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, gateway, size: M, proof: supplied, proof: sufficient, P1, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, merge-risk: 🚨 availability, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T06:58:02Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Change generated systemd gateway units from `KillMode=control-group` to `KillMode=mixed` so systemd sends the initial stop signal to the gateway main process before final cgroup cleanup. - Centralize the managed gateway service stop budget at `330

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

### #43469 security: scan markdown skill definitions for injection threats

- bucket: ready_for_maintainer
- author: Alex-Alaniz
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: L, proof: supplied, proof: sufficient, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 security-boundary, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T07:09:23Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary The skill scanner (`src/security/skill-scanner.ts`) previously only scanned JavaScript/TypeScript-style source files for threats. This PR extends it to also scan Markdown `.md` files, including `SKILL.md` definitions, for injection and obfuscation p

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

