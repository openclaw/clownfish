---
repo: openclaw/openclaw
cluster_id: pr-inventory-needs_proof-20260615T223445-045
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
  - "#87667"
  - "#93168"
  - "#93212"
  - "#93230"
  - "#93232"
  - "#92577"
  - "#89088"
  - "#93235"
  - "#39245"
  - "#52365"
  - "#55723"
  - "#88997"
  - "#89419"
  - "#89422"
  - "#89490"
  - "#89526"
  - "#89538"
  - "#89580"
  - "#89690"
  - "#93246"
  - "#89696"
  - "#89719"
  - "#93247"
  - "#89754"
  - "#52236"
cluster_refs:
  - "#87667"
  - "#93168"
  - "#93212"
  - "#93230"
  - "#93232"
  - "#92577"
  - "#89088"
  - "#93235"
  - "#39245"
  - "#52365"
  - "#55723"
  - "#88997"
  - "#89419"
  - "#89422"
  - "#89490"
  - "#89526"
  - "#89538"
  - "#89580"
  - "#89690"
  - "#93246"
  - "#89696"
  - "#89719"
  - "#93247"
  - "#89754"
  - "#52236"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "This is a PR inventory classification shard, not a dedupe cluster. Classify each PR independently and do not invent a shared canonical."
notes: "Generated from local gitcrawl open PR inventory on 2026-06-15T22:34:45.795Z; bucket=needs_proof; no GitHub mutation is possible in plan mode."
---

# PR Inventory needs_proof 45

This is a high-volume classification shard over open pull requests. It is not a dedupe cluster.

## Goal

Hydrate live GitHub state for each listed PR and emit one conservative action per PR. Prefer `keep_related`, `keep_independent`, `needs_human`, or `route_security`. Emit close-style planned actions only when fresh live evidence makes the PR boringly superseded, duplicate, abandoned, or low-signal under existing policies. For `target_updated_at`, copy only the hydrated value from the Cluster preflight artifact; do not use gitcrawl snapshot timestamps from this job body.

## Inventory

### #87667 fix(slack): opt-in flag to collapse assistant DM threads into base DM session

- bucket: needs_proof
- author: paulosxyz
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, channel: slack, size: M, proof: supplied, P1, rating: 🦪 silver shellfish, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T08:44:20Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Adds `channels.slack.dm.collapseAssistantThreads` (boolean, default `false`) that, when enabled, routes all DM messages — including those wrapped in Slack's `assistant_app_thread` — into the user's base DM session instead of spawning a new `:thread:

### #93168 fix(active-memory): exclude dreaming-narrative session keys from interactive eligibility gate

- bucket: needs_proof
- author: xialonglee
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS, proof: supplied, P2, rating: 🧂 unranked krab, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T08:52:56Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - AM eligibility gate (`isEligibleInteractiveSession`) accepted dreaming-narrative cron session keys because they share `trigger="user"` with real conversational sessions. - Each false-accepted invocation paid the full active-memory cold-start cost

### #93212 fix(failover): classify Zhipu (GLM) error [1305] as overloaded

- bucket: needs_proof
- author: mmyzwl
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: XS, proof: supplied, P2, rating: 🦪 silver shellfish, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T09:11:47Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Add Zhipu (GLM) overloaded error code `[1305]` and Chinese message `访问量过大` to the failover classification patterns so the configured model fallback chain is triggered instead of failing immediately. ## Root Cause When the GLM-5.2 model is overloaded

### #93230 fix(cli): restart gateway for missing auth channel

- bucket: needs_proof
- author: mushuiyu886
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: cli, size: S, proof: supplied, P2, rating: 🦪 silver shellfish, merge-risk: 🚨 availability, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T09:12:14Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fixes #91932. - Requests the existing safe gateway restart RPC when local channel login saves auth but the running gateway rejects `channels.start` because it does not know that channel yet. - Keeps the existing warning-only behavior for unrelated l

### #93232 fix(mattermost): allow bare @mention with empty body to wake the agent (fixes #93205)

- bucket: needs_proof
- author: liuhao1024
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: mattermost, size: XS, proof: supplied, P2, rating: 🧂 unranked krab, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T09:20:33Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary A bare `@mention` of the bot with no other text (e.g. just `@openclaw`) is silently dropped in Mattermost group channels and DMs. After `normalizeMention` strips the bot mention, `bodyText` becomes empty and the empty-body guard discards the message

### #92577 fix: deduplicate consecutive assistant messages in session-memory hook

- bucket: needs_proof
- author: xydt-tanshanshan
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, proof: supplied, P2, rating: 🧂 unranked krab, merge-risk: 🚨 session-state, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T09:22:06Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary When using a model with thinking/reasoning enabled (e.g. DeepSeek), the session JSONL may contain two entries for the same assistant response: 1. The raw version with thinking blocks (`[{type: "thinking", text: "..."}, {type: "text", text: "Hi there

### #89088 test(gateway): cover rollover model override preservation

- bucket: needs_proof
- author: charles-openclaw
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, size: S, triage: mock-only-proof, P3, rating: 🦪 silver shellfish, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T09:24:32Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Adds a focused gateway agent regression for daily session rollover with a user-selected model override. - Verifies a stale pre-midnight session rotates to a new session id while preserving the stored user `providerOverride`, `modelOverride`, and `

### #93235 fix(qmd): strip XDG env vars from mcporter spawn env to fix mcporter ≥ 0.10 config resolution (fixes #79847)

- bucket: needs_proof
- author: liuhao1024
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: extensions: memory-core, size: XS, proof: supplied, P1, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T09:53:50Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary `QmdMemoryManager` passes its agent-scoped `XDG_CONFIG_HOME` / `XDG_CACHE_HOME` overrides to mcporter spawn calls. Starting with mcporter ≥ 0.10, mcporter honors `XDG_CONFIG_HOME` to discover its config — and now finds nothing under each agent's qmd

### #39245 fix(agents): normalize mangled tool names and IDs from OpenAI-compati…

- bucket: needs_proof
- author: deepujain
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: M, triage: needs-real-behavior-proof, P1, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T09:59:42Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - **Problem:** Some OpenAI-compatible providers (e.g. Kimi) send tool call IDs like `functions.exec:0` as `functions exec:0` (space instead of dot) and tool names like `exec` as `functions exec`. Tool result matching fails, causing "Tool functions e

### #52365 fix(cron): stop fallback attempts when cron budget is exhausted

- bucket: needs_proof
- author: imwyvern
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, scripts, agents, size: L, proof: supplied, P2, rating: 🦪 silver shellfish, merge-risk: 🚨 auth-provider, merge-risk: 🚨 availability, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T10:00:09Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Problem When a cron job's primary model times out near the cron deadline, the fallback model is started but immediately killed by the same cron timeout — receiving effectively 0ms to make an LLM request. The fallback never gets a fair chance to respond, and

### #55723 fix(agents): preserve ACP requester agent overrides

- bucket: needs_proof
- author: RichardCao
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: XS, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T10:01:01Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - pass `requesterAgentIdOverride` through the ACP `sessions_spawn` path - resolve ACP requester heartbeat/relay eligibility from the explicit override before falling back to the parent session key - add regression coverage for the tool passthrough a

### #88997 fix: route Discord CLI sends through gateway

- bucket: needs_proof
- author: h-mascot
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: discord, commands, size: XS, triage: needs-real-behavior-proof, P1, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T10:02:21Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Direct `openclaw message send --channel discord` currently takes the Discord outbound adapter's direct path, which bypasses gateway-scoped message_sending/message_sent hooks. That leaves runtime ownership guards such as Action Gate unable to enforce protected

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

### #89690 docs(web): fix example provider typo

- bucket: needs_proof
- author: kaizeenn
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, size: XS, triage: low-signal-docs, triage: needs-real-behavior-proof, P3, rating: 🧂 unranked krab, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T10:17:59Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary\n- fix the example provider id typo in tools web docs\n\n## Testing\n- not run (docs-only change)

### #93246 fix(doctor): skip top-level allowlist scan when active per-account scopes exist

- bucket: needs_proof
- author: 1052326311
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: commands, size: XS, triage: needs-real-behavior-proof, P3, rating: 🦪 silver shellfish, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T10:18:09Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary The empty-allowlist doctor scanner treated the top-level channel config as its own standalone account, producing false 'empty allowlist' warnings when every active account under that channel supplied its own populated `groupAllowFrom` or `allowFrom`

### #89696 feat(tools): add low-memory tool guard

- bucket: needs_proof
- author: lily-oc
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: M, proof: supplied, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 availability, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T10:18:18Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Adds a low-memory guard around tool calls so OpenClaw can fail early with a clear message before a tool launch makes host memory pressure worse. - introduces a `/proc/meminfo`-based memory snapshot helper - adds configurable minimum available memory

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
