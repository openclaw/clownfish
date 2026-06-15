---
repo: openclaw/openclaw
cluster_id: pr-inventory-needs_proof-20260615T131654-046
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
  - "#49914"
  - "#92079"
  - "#39245"
  - "#51683"
  - "#52365"
  - "#53441"
  - "#54805"
  - "#55519"
  - "#55723"
  - "#56420"
  - "#88997"
  - "#89127"
  - "#89156"
  - "#89419"
  - "#89422"
  - "#89490"
  - "#89526"
  - "#89538"
  - "#89580"
  - "#89590"
  - "#89636"
  - "#89637"
  - "#89690"
  - "#89694"
  - "#93246"
  - "#89695"
  - "#89696"
  - "#89702"
  - "#89719"
  - "#93247"
  - "#89754"
  - "#52236"
  - "#89768"
  - "#89772"
  - "#92086"
  - "#89491"
  - "#89645"
  - "#89796"
  - "#93241"
  - "#93244"
cluster_refs:
  - "#49914"
  - "#92079"
  - "#39245"
  - "#51683"
  - "#52365"
  - "#53441"
  - "#54805"
  - "#55519"
  - "#55723"
  - "#56420"
  - "#88997"
  - "#89127"
  - "#89156"
  - "#89419"
  - "#89422"
  - "#89490"
  - "#89526"
  - "#89538"
  - "#89580"
  - "#89590"
  - "#89636"
  - "#89637"
  - "#89690"
  - "#89694"
  - "#93246"
  - "#89695"
  - "#89696"
  - "#89702"
  - "#89719"
  - "#93247"
  - "#89754"
  - "#52236"
  - "#89768"
  - "#89772"
  - "#92086"
  - "#89491"
  - "#89645"
  - "#89796"
  - "#93241"
  - "#93244"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "This is a PR inventory classification shard, not a dedupe cluster. Classify each PR independently and do not invent a shared canonical."
notes: "Generated from local gitcrawl open PR inventory on 2026-06-15T13:16:54.482Z; bucket=needs_proof; no GitHub mutation is possible in plan mode."
---

# PR Inventory needs_proof 46

This is a high-volume classification shard over open pull requests. It is not a dedupe cluster.

## Goal

Hydrate live GitHub state for each listed PR and emit one conservative action per PR. Prefer `keep_related`, `keep_independent`, `needs_human`, or `route_security`. Emit close-style planned actions only when fresh live evidence makes the PR boringly superseded, duplicate, abandoned, or low-signal under existing policies. For `target_updated_at`, copy only the hydrated value from the Cluster preflight artifact; do not use gitcrawl snapshot timestamps from this job body.

## Inventory

### #49914 feat(session): add chat-channel session switching with LRU history retention

- bucket: needs_proof
- author: gjj2828
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, stale, size: L, triage: needs-real-behavior-proof, mantis: telegram-visible-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 auth-provider, merge-risk: 🚨 session-state, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T09:55:05Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Describe the problem and fix in 2–5 bullets: - Problem: Chat channels did not support listing or switching between prior sessions under the same SessionKey, and follow-up fixes were needed to preserve switchable transcripts until LRU eviction and re

### #92079 [AI] fix(memory): auto-fix providerKey mismatch from CLI index --force

- bucket: needs_proof
- author: xydt-tanshanshan
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: extensions: memory-core, size: M, proof: supplied, P1, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, merge-risk: 🚨 session-state, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T09:55:46Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary MemoryIndexManager can encounter a stale FTS-only sentinel providerKey written by CLI `memory index --force` before provider initialization. The auto-fix in `refreshIndexIdentityDirty()` detects the exact FTS-only sentinel hash and replaces it with 

### #39245 fix(agents): normalize mangled tool names and IDs from OpenAI-compati…

- bucket: needs_proof
- author: deepujain
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: M, triage: needs-real-behavior-proof, P1, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T09:59:42Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - **Problem:** Some OpenAI-compatible providers (e.g. Kimi) send tool call IDs like `functions.exec:0` as `functions exec:0` (space instead of dot) and tool names like `exec` as `functions exec`. Tool result matching fails, causing "Tool functions e

### #51683 Agents: add machine-readable session status time

- bucket: needs_proof
- author: 08820048
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, stale, size: S, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T09:59:48Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: `session_status` only exposed human-readable local time, so reminder scheduling could not reliably compute exact timestamps. - Why it matters: cron/reminder flows need machine-readable current time to convert requests like "in 30 minutes"

### #52365 fix(cron): stop fallback attempts when cron budget is exhausted

- bucket: needs_proof
- author: imwyvern
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, scripts, agents, size: L, proof: supplied, P2, rating: 🦪 silver shellfish, merge-risk: 🚨 auth-provider, merge-risk: 🚨 availability, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T10:00:09Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Problem When a cron job's primary model times out near the cron deadline, the fallback model is started but immediately killed by the same cron timeout — receiving effectively 0ms to make an LLM request. The fallback never gets a fair chance to respond, and

### #53441 fix(synology-chat): handle HEAD probe and return 200 on webhook ACK

- bucket: needs_proof
- author: dennis-lynch
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 message-delivery, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T10:00:21Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Fixes #53439 ## Problem Synology Chat bot webhooks fail silently in two ways, discovered through live debugging with a Synology NAS bot integration: **1. HEAD probe** Synology sends a `HEAD` request to the outgoing webhook URL before each `POST` to verify the 

### #54805 feat(plugins): dispatch plugin_updated hooks during plugins update

- bucket: needs_proof
- author: richard-epsilla
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, cli, scripts, size: M, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T10:00:35Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary This adds a typed plugin_updated lifecycle hook path that fires when `openclaw plugins update` successfully updates plugin installs. ### What changed - Added plugin_updated to plugin hook surfaces in src/plugins/types.ts - hook name registration - t

### #55519 Fix Feishu group session orchestration fallbacks

- bucket: needs_proof
- author: aaaw10055-pixel
- author association: FIRST_TIMER
- draft: no
- assignees: none
- labels: agents, size: M, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T10:00:52Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - allow `sessions_send` to target an `agentId` by resolving the most recent visible session - ignore ACP-only `streamTo` when `sessions_spawn` is running with `runtime: "subagent"` - tighten the agent system prompt guidance for long-running work in 

### #55723 fix(agents): preserve ACP requester agent overrides

- bucket: needs_proof
- author: RichardCao
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: XS, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T10:01:01Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - pass `requesterAgentIdOverride` through the ACP `sessions_spawn` path - resolve ACP requester heartbeat/relay eligibility from the explicit override before falling back to the parent session key - add regression coverage for the tool passthrough a

### #56420 fix: bind Claude permission replies to session

- bucket: needs_proof
- author: lifelikezzh
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, triage: needs-real-behavior-proof, P1, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T10:01:08Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ### Motivation - Fix a security issue where Claude permission replies (`yes/no <id>`) could be spoofed from any session because pending requests were keyed only by a short `request_id`. - Ensure permission replies are only accepted from the same session that o

### #88997 fix: route Discord CLI sends through gateway

- bucket: needs_proof
- author: h-mascot
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: discord, commands, size: XS, triage: needs-real-behavior-proof, P1, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T10:02:21Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Direct `openclaw message send --channel discord` currently takes the Discord outbound adapter's direct path, which bypasses gateway-scoped message_sending/message_sent hooks. That leaves runtime ownership guards such as Action Gate unable to enforce protected 

### #89127 feat(talk): describe_view inline vision for OpenAI Realtime + Gemini Live

- bucket: needs_proof
- author: shushushv
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: web-ui, gateway, size: L, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T10:02:40Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Adds a `describe_view` tool for browser Realtime Talk sessions, letting the model inspect a single user-approved camera frame during a live voice conversation. Now covers two providers, both **browser-direct** so the camera frame is sent straight to

### #89156 fix(feishu): recover bot identity after abort race

- bucket: needs_proof
- author: charles-openclaw
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: feishu, size: XS, triage: mock-only-proof, P1, rating: 🧂 unranked krab, merge-risk: 🚨 message-delivery, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T10:02:51Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Fixes the Feishu monitor race where a missing startup bot identity never schedules background recovery if the lifecycle abort signal is already set. - Starts bot identity recovery whenever `botOpenId` is missing, while dropping an already-aborted 

### #89419 fix(config): allow explicit main agent bindings when agents.list is non-empty

- bucket: needs_proof
- author: 1052326311
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: commands, size: S, triage: needs-real-behavior-proof, P1, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T10:05:00Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Route bindings to the implicit default agent `"main"` are rejected at config load and silently deleted by `doctor --fix` when `agents.list` is non-empty. This breaks the documented multi-agent config pattern where a few ACP agents are listed while `

### #89422 fix(plugins): surface tool contract gate rejections at warn level

- bucket: needs_proof
- author: LiLan0125
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, size: XS, proof: supplied, P2, rating: 🦪 silver shellfish, merge-risk: 🚨 automation, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T10:05:15Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary When a plugin's `registerTool()` call is rejected because the manifest omits `contracts.tools`, two problems prevent operators from seeing the diagnostic: 1. The diagnostic was at `level: "error"` — logged via `log.error()` only during gateway start

### #89490 Config: preserve implicit main route bindings

- bucket: needs_proof
- author: dahifi
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: commands, size: S, triage: needs-real-behavior-proof, P1, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T10:07:52Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Treat the implicit default agent `main` as an allowed route binding target during config validation, even when `agents.list` is populated. - Preserve `main` route bindings during doctor compatibility pruning while continuing to prune genuinely mis

### #89526 [codex] fix gateway restart-required reload drift

- bucket: needs_proof
- author: amittell
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, commands, size: L, proof: supplied, P2, rating: 🧂 unranked krab, merge-risk: 🚨 auth-provider, merge-risk: 🚨 availability, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T10:09:08Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Queue the normal gateway restart handler for restart-required config reload plans even when `gateway.reload.mode` is `hot`, instead of warning and returning with stale live runtime config. - Add runtime-vs-disk model/provider/auth drift diagnostic

### #89538 fix(sessions): sweep orphaned atomic-write temp files at gateway startup

- bucket: needs_proof
- author: Linux2010
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: web-ui, gateway, size: S, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T10:10:21Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary `writeTextAtomic` stages into `<store>.<pid>.<uuid>.tmp` then renames. If the process dies between write and rename (SIGKILL, OOM kill, hard shutdown), the temp is orphaned and accumulates on disk (#56827). On one production user's machine, 8,662 or

### #89580 perf: structuredClone instead of JSON.parse(stringify)

- bucket: needs_proof
- author: dboone323
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T10:12:27Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary This PR implements the highest-impact, lowest-effort performance improvement identified in a comprehensive codebase analysis. Replaces `JSON.parse(JSON.stringify())` with native `structuredClone()` for **2-3x faster deep cloning**. ## Changes - `src

### #89590 fix(agents): forward turn-source for embedded plugin approvals (supersedes #84205)

- bucket: needs_proof
- author: amittell
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, agents, size: M, extensions: codex, proof: supplied, mantis: telegram-visible-proof, P1, rating: 🧂 unranked krab, merge-risk: 🚨 message-delivery, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T10:13:13Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Forwards turn-source routing fields through the embedded plugin `before_tool_call` approval chain so plugin approvals can be delivered back to the originating chat (Telegram, Discord, Slack, etc.). Without this, embedded-runner plugin approvals reac

### #89636 fix(secrets): collect persona-level TTS provider SecretRefs

- bucket: needs_proof
- author: SebTardif
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, cli, agents, size: M, proof: supplied, P2, rating: 🧂 unranked krab, merge-risk: 🚨 auth-provider, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T10:15:40Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Fixes #89607 ## Summary The secret collector walks `messages.tts.providers.*.apiKey` but does not walk `messages.tts.personas.*.providers.*.apiKey` or `agents.list[].tts.personas.*.providers.*.apiKey`. When a persona overrides the TTS provider config with a fi

### #89637 fix(googlechat): fall back to text link on media upload 403

- bucket: needs_proof
- author: SebTardif
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: googlechat, size: M, proof: supplied, P2, rating: 🧂 unranked krab, merge-risk: 🚨 message-delivery, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T10:15:52Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Fixes #89430 ## Summary When Google Chat is configured with app authentication (`chat.bot` scope), any agent reply with media fails because `attachments:upload` returns 403 `PERMISSION_DENIED`. Per Google's docs, media upload requires user auth (`chat.messages

### #89690 docs(web): fix example provider typo

- bucket: needs_proof
- author: kaizeenn
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, size: XS, triage: low-signal-docs, triage: needs-real-behavior-proof, P3, rating: 🧂 unranked krab, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T10:17:59Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary\n- fix the example provider id typo in tools web docs\n\n## Testing\n- not run (docs-only change)

### #89694 feat(ui): gate control sections by operator scopes

- bucket: needs_proof
- author: lily-oc
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: web-ui, size: M, proof: supplied, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T10:18:09Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - add a typed Control UI navigation permission catalog - gate sidebar tabs, settings sections, command-palette navigation, and direct tab changes by the connected operator scopes - redirect the UI to the first permitted tab when the current tab is u

### #93246 fix(doctor): skip top-level allowlist scan when active per-account scopes exist

- bucket: needs_proof
- author: 1052326311
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: commands, size: XS, triage: needs-real-behavior-proof, P3, rating: 🦪 silver shellfish, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T10:18:09Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary The empty-allowlist doctor scanner treated the top-level channel config as its own standalone account, producing false 'empty allowlist' warnings when every active account under that channel supplied its own populated `groupAllowFrom` or `allowFrom`

### #89695 feat(ui): add chat media download controls

- bucket: needs_proof
- author: lily-oc
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: web-ui, size: M, proof: supplied, P2, rating: 🧂 unranked krab, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T10:18:13Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Adds first-class chat attachment rendering for rich assistant media: - audio attachments render with an inline player and Download/Open actions - video attachments render with an inline player and Download/Open actions - PDF/document attachments get

### #89696 feat(tools): add low-memory tool guard

- bucket: needs_proof
- author: lily-oc
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: M, proof: supplied, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 availability, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T10:18:18Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Adds a low-memory guard around tool calls so OpenClaw can fail early with a clear message before a tool launch makes host memory pressure worse. - introduces a `/proc/meminfo`-based memory snapshot helper - adds configurable minimum available memory

### #89702 fix(gateway): allow macOS app platform version refresh without re-pairing

- bucket: needs_proof
- author: EaveLuo
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, size: XS, proof: supplied, P1, rating: 🦪 silver shellfish, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T10:18:37Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - macOS app enters infinite "Approve this Mac app to control OpenClaw" dialog loop after an OS update (e.g. macOS 26.5.0 → 26.5.1) - Root cause: `resolvePinnedClientMetadata` treats any macOS platform version change as a `platformMismatch`, triggeri

### #89719 fix(cron): prune isolated-target cron sessions in session reaper

- bucket: needs_proof
- author: LiLan0125
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS, proof: supplied, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T10:19:21Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - `isCronRunSessionKey` only matches cron session keys containing `:run:` (`cron:jobId:run:runId`). Isolated-target cron jobs (`sessionTarget: isolated`) generate base session keys without `:run:` (`cron:jobId`), so the reaper never matched or prune

### #93247 fix(diagnostics): prune non-idle ghost entries after failed stuck-session recovery

- bucket: needs_proof
- author: 1052326311
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T10:19:22Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary When stuck-session recovery fails (`status: "failed"`), `recoveryOutcomeMutatesSessionState()` returns `false` → the diagnostic entry stays in `"processing"` / `"waiting"` state permanently. The existing prune path only evicts `idle` entries, so the

### #89754 fix(status): render sub-1000 token counts as integers (#89735)

- bucket: needs_proof
- author: TUARAN
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: commands, size: S, triage: mock-only-proof, P2, rating: 🧂 unranked krab, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T10:20:39Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fix [#89735](https://github.com/openclaw/openclaw/issues/89735). `formatKTokens` in `src/commands/status.format.ts` always divides by 1000 and appends `k`, so sub-1000 values render as misleading fractional thousands. The worst case is `999 → "1.0k"

### #52236 fix(mattermost): persist threadId in delivery context for all session types

- bucket: needs_proof
- author: teconomix
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: mattermost, size: XS, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T10:21:13Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Problem When a cron job or heartbeat wakes a thread-scoped Mattermost session, the reply lands at the channel root instead of in the thread. ## Root Cause `updateLastRoute` in `monitor.ts` was guarded by `if (kind === "direct")`, so delivery context (includ

### #89768 fix(mattermost): merge progress preview lines by identity instead of full overwrite

- bucket: needs_proof
- author: NianJiuZst
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: mattermost, size: S, proof: supplied, P2, rating: 🦪 silver shellfish, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T10:21:21Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Mattermost progress preview was overwriting the entire draft post on every tool/progress frame instead of merging updates by line identity, unlike every other streaming channel. See #89761. ## Changes 1. `draft-stream.ts`: Added `buildMattermostProg

### #89772 fix(webchat): keep context indicator visible with stale token data

- bucket: needs_proof
- author: bladin
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: web-ui, size: XS, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, status: 📣 needs proof, merge-risk: 🚨 other
- gitcrawl snapshot updated: 2026-06-15T10:21:27Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fixes the context usage indicator disappearing after sending a message in the webchat Control UI. The indicator was hidden when `totalTokensFresh` was set to false during a run, even though we had valid token count data. ## Changes - Modified `getCo

### #92086 security: add Security Matrix runtime-fact audit model

- bucket: needs_proof
- author: jason-allen-oneal
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, scripts, size: XL, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 automation, merge-risk: 🚨 compatibility, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T10:21:36Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Adds a Security Matrix runtime-fact evaluator. - Models actor, influence source, tool capability, approval state, and operator policy as separate inputs. - Adds default policy data, a deterministic evaluator, tool capability resolution, an audit-e

### #89491 fix(openai): harden Codex OAuth callback cleanup

- bucket: needs_proof
- author: abnershang
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: M, extensions: openai, proof: supplied, P2, rating: 🦪 silver shellfish, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T10:21:59Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fixes #81865. This updates the OpenAI ChatGPT/Codex OAuth flow to cover the failures reproduced locally: - token exchange and refresh use a host-scoped fake-IP SSRF policy for `auth.openai.com`, so proxy stacks that resolve public OpenAI hosts into 

### #89645 fix(update): respect explicit beta channel without fallback to latest

- bucket: needs_proof
- author: bladin
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: cli, size: XS, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: 📣 needs proof, proof: 📸 screenshot
- gitcrawl snapshot updated: 2026-06-15T10:22:36Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fixed an issue where `openclaw update --channel beta` would not return the latest beta version when the stable version had a higher semantic version number. When a user explicitly specifies `--channel beta`, the code now returns the beta tag version

### #89796 IDR-msteams-aad-sender-identity: feat(msteams): add AAD sender identi…

- bucket: needs_proof
- author: rrajp
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, channel: msteams, size: M, proof: supplied, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 security-boundary, merge-risk: 🚨 availability, status: 📣 needs proof, proof: 📸 screenshot
- gitcrawl snapshot updated: 2026-06-15T10:22:41Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary **What problem does this PR solve?** When using OpenClaw with Microsoft Teams, the agent has no visibility into the sender's organizational identity (department, job title, email). This makes persona-aware routing and responses impossible without ex

### #93241 fix(agents): classify Zhipu GLM overload as overloaded for failover

- bucket: needs_proof
- author: 0xghost42
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: XS, proof: supplied, P2, rating: 🧂 unranked krab, merge-risk: 🚨 auth-provider, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T10:24:29Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Model fallback (`agents.defaults.model.fallbacks`) never triggered when Zhipu (GLM) returned its overload error, so the run failed outright instead of failing over. Zhipu returns **HTTP 200** with the error in the body: ``` [1305][该模型当前访问量过大，请您稍后再试]

### #93244 feat(auto-reply,codex): lightweight reply lane and Codex watchdog

- bucket: needs_proof
- author: moeedahmed
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: L, extensions: codex, proof: supplied, mantis: telegram-visible-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 availability, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T10:24:50Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - add a conservative lightweight reply lane for obvious low-risk text-only chat replies - keep uncertain, tool/action, media/link, high-stakes, code/config, and unresolved reply-target messages on the full path - add a Codex initial-progress watchdo

