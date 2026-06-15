---
repo: openclaw/openclaw
cluster_id: pr-inventory-ready_for_maintainer-20260615T223445-078
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
  - "#93025"
  - "#93176"
  - "#93182"
  - "#91097"
  - "#91117"
  - "#93185"
  - "#93149"
  - "#69729"
  - "#72009"
  - "#73163"
  - "#73785"
  - "#75857"
  - "#80396"
  - "#93188"
  - "#81260"
  - "#81391"
  - "#81397"
  - "#81503"
  - "#81513"
  - "#81621"
  - "#81696"
  - "#81731"
  - "#81777"
  - "#81787"
  - "#82023"
cluster_refs:
  - "#93025"
  - "#93176"
  - "#93182"
  - "#91097"
  - "#91117"
  - "#93185"
  - "#93149"
  - "#69729"
  - "#72009"
  - "#73163"
  - "#73785"
  - "#75857"
  - "#80396"
  - "#93188"
  - "#81260"
  - "#81391"
  - "#81397"
  - "#81503"
  - "#81513"
  - "#81621"
  - "#81696"
  - "#81731"
  - "#81777"
  - "#81787"
  - "#82023"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "This is a PR inventory classification shard, not a dedupe cluster. Classify each PR independently and do not invent a shared canonical."
notes: "Generated from local gitcrawl open PR inventory on 2026-06-15T22:34:45.803Z; bucket=ready_for_maintainer; no GitHub mutation is possible in plan mode."
---

# PR Inventory ready_for_maintainer 78

This is a high-volume classification shard over open pull requests. It is not a dedupe cluster.

## Goal

Hydrate live GitHub state for each listed PR and emit one conservative action per PR. Prefer `keep_related`, `keep_independent`, `needs_human`, or `route_security`. Emit close-style planned actions only when fresh live evidence makes the PR boringly superseded, duplicate, abandoned, or low-signal under existing policies. For `target_updated_at`, copy only the hydrated value from the Cluster preflight artifact; do not use gitcrawl snapshot timestamps from this job body.

## Inventory

### #93025 [codex] fix(provider): expose session identity to stream hooks

- bucket: ready_for_maintainer
- author: yu-xin-c
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, agents, size: S, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T06:06:54Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Refs #73488 ## Summary - Add optional `sessionId` and `sessionKey` to `ProviderCreateStreamFnContext`. - Thread that request-scoped identity through provider stream registration for embedded agent turns, compaction, and `/btw` side questions. - Keep one-off im

### #93176 fix(agents): skip bootstrap seeding in inherited nested workspaces (#83593)

- bucket: ready_for_maintainer
- author: manan-tech
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: S, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T06:08:20Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary `ensureAgentWorkspace` re-seeds bootstrap templates (`SOUL.md`, `USER.md`, `IDENTITY.md`, `HEARTBEAT.md`, …) into directories nested **inside** an already-established OpenClaw workspace, because it only consulted the directory's *own* `.openclaw/wor

### #93182 fix(memory): clean rollback-journal reindex temp sidecar on NFS stores

- bucket: ready_for_maintainer
- author: Alix-007
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: extensions: memory-core, size: S, proof: supplied, proof: sufficient, P2, rating: 🦞 diamond lobster, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T06:08:42Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary `cleanupAgedMemoryReindexTempFiles` (added in #92891) removes aged orphaned reindex temp databases at memory-store startup, but it only knows about the **WAL** sidecars `-wal`/`-shm`. On NFS-backed memory stores the temp database is **not** in WAL m

### #91097 fix(test): add missing reasoning field to overflow compaction harness mock defaults

- bucket: ready_for_maintainer
- author: zenglingbiao
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: XS, proof: supplied, proof: sufficient, P3, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T06:10:43Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fix tsgo type error in `run.overflow-compaction.loop.test.ts` by adding the missing `reasoning` field to `mockedResolveModelAsync` default return values in the harness file. **Changes**: 1 file, +2 lines ## Root Cause The `Model` interface (`package

### #91117 refactor: remove dead code and improve string concatenation

- bucket: ready_for_maintainer
- author: Pommelle
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS, proof: supplied, proof: sufficient, P3, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T06:10:48Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Change Type / Scope / Linked Issue Type: refactor Scope: utils/shared --- ## Motivation Remove dead code paths and improve performance in shared utility functions. The changes simplify code without altering behavior. ## Changes ### Dead code removal **src/util

### #93185 [codex] fix(telegram): drop unused rich markdown parameter

- bucket: ready_for_maintainer
- author: yu-xin-c
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: telegram, size: XS, proof: supplied, proof: sufficient, rating: 🦞 diamond lobster, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T06:16:10Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Remove the unused `markdown` parameter from `findRichMarkdownTableLineIndexes`. - Keep the table line detection behavior unchanged while restoring `tsgo:extensions` cleanliness. ## Verification - `node scripts/run-tsgo.mjs -p tsconfig.extensions.j

### #93149 feat(cron): add add dry-run preview

- bucket: ready_for_maintainer
- author: rrrrrredy
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, cli, size: S, proof: supplied, proof: sufficient, P3, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T06:28:06Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Clean replacement for #59490 / #59452. - Adds `cron add --dry-run`. - Builds the exact params that normal `cron add` would send to `cron.add`. - Prints those params as JSON and returns before any gateway RPC. - `--dry-run --json` keeps stdout pure J

### #69729 fix(qwen): enable qwen3.6-plus on Coding Plan CN, correct reasoning flag

- bucket: ready_for_maintainer
- author: wAnyBug-Com
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, proof: sufficient, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T06:30:02Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - **What changed**: Enables `qwen3.6-plus` on the DashScope Coding Plan CN endpoint (`coding.dashscope.aliyuncs.com`) and corrects its `reasoning` flag (`false` → `true`). - `extensions/qwen/models.ts`: `reasoning: false` → `reasoning: true` on the

### #72009 Make typing indicator TTL configurable

- bucket: ready_for_maintainer
- author: suntp
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, gateway, agents, stale, size: S, proof: supplied, proof: sufficient, mantis: telegram-visible-proof, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 compatibility, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T06:32:47Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Increase the default typing indicator TTL from 2 minutes to 5 minutes. - Add configurable `typingTtlSeconds` support via session config and agent defaults. - Document the new setting and regenerate the base config schema. Closes #71999 ## Tests -

### #73163 fix(gateway): warn for insecure Control UI access

- bucket: ready_for_maintainer
- author: pfrederiksen
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, scripts, stale, size: S, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T06:35:24Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Emit a gateway startup warning when Control UI is enabled on non-loopback HTTP with device auth still required - Keep loopback, TLS, trusted-proxy auth mode, disabled Control UI, and `dangerouslyDisableDeviceAuth` cases quiet - Pass resolved Contr

### #73785 fix(heartbeat): suppress no-op system event replies

- bucket: ready_for_maintainer
- author: pfrederiksen
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: telegram, scripts, stale, size: M, proof: supplied, proof: sufficient, mantis: telegram-visible-proof, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T06:35:34Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - add centralized no-op sentinel detection for silent heartbeat/system-event replies - suppress exact `HEARTBEAT_OK`, `NO_REPLY`, `NO_NEW_AUDIO`, and `SESSION_WATCHDOG_OK` outputs before delivery - keep meaningful relayable exec summaries deliverabl

### #75857 fix(telegram): suppress silent callback fallback

- bucket: ready_for_maintainer
- author: clawSean
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: telegram, size: S, proof: supplied, proof: sufficient, mantis: telegram-visible-proof, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 message-delivery, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T06:37:09Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - suppress Telegram direct-chat silent reply fallback for synthetic `callback_query` button turns - keep answering callback queries so Telegram clears the button spinner - preserve normal visible callback replies and non-callback silent reply behavi

### #80396 fix(media): warn when MEDIA: token is skipped inside fenced code block (#41966)

- bucket: ready_for_maintainer
- author: Bartok9
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T06:42:16Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Problem When an LLM wraps a `MEDIA:` token inside a triple-backtick code fence, `splitMediaFromOutput()` correctly skips extraction (by design — code examples shouldn't trigger delivery). However, this creates a **silent failure**: the user sees the raw `ME

### #93188 test(macos): cover root CLI command parsing

- bucket: ready_for_maintainer
- author: TurboTheTurtle
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: telegram, app: macos, scripts, size: S, proof: supplied, proof: sufficient, P2, rating: 🦞 diamond lobster, merge-risk: 🚨 compatibility, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T06:42:43Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Closes #83879. Adds a small root-command parser/dispatch helper for the macOS CLI and covers usage/help, known-command argument forwarding, and unknown-command dispatch. Also refreshes the Swift protocol generator so current literal-union schemas emit the Swif

### #81260 fix(progress-draft): only trigger onToolStart on phase=start to remove duplicate tool lines

- bucket: ready_for_maintainer
- author: iFwu
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, proof: supplied, proof: sufficient, mantis: telegram-visible-proof, P2, rating: 🦪 silver shellfish, merge-risk: 🚨 message-delivery, status: ⏳ waiting on author, proof: 📸 screenshot
- gitcrawl snapshot updated: 2026-06-15T06:44:26Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - **Problem:** `onToolStart` is triggered on both `phase === "start"` and `phase === "update"` for the same tool call, producing duplicate, interleaved progress-draft lines in Telegram/Discord - **Why it matters:** Users see garbled progress like `�

### #81391 feat(control-ui): add workspace boundary warning card with honest unavailable state

- bucket: ready_for_maintainer
- author: DeVisionLabs
- author association: FIRST_TIMER
- draft: no
- assignees: none
- labels: docs, app: web-ui, gateway, size: S, proof: supplied, proof: sufficient, P2, rating: 🦐 gold shrimp, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T06:45:27Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Adds a read-only Workspace Boundary status card to the Overview screen. This introduces the zero-parameter gateway method `system.workspaceBoundaryStatus` and surfaces a conservative, honest unavailable state in the UI when an approved canonical-roo

### #81397 fix(agents): repair persisted tool result pairing

- bucket: ready_for_maintainer
- author: stainlu
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, agents, size: M, triage: blank-template, proof: supplied, proof: sufficient, P1, rating: 🧂 unranked krab, merge-risk: 🚨 session-state, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T06:45:33Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: interrupted or killed tool runs can leave persisted session JSONL with `toolResult` entries separated from their assistant tool-call entry, duplicated, or orphaned. - Why it matters: session-file repair runs before OpenClaw loads a transc

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
