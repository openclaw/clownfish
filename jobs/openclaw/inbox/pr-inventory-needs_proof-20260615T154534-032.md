---
repo: openclaw/openclaw
cluster_id: pr-inventory-needs_proof-20260615T154534-032
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
  - "#92544"
  - "#92509"
  - "#92571"
  - "#92576"
  - "#47589"
  - "#51926"
  - "#92603"
  - "#91399"
  - "#91473"
  - "#91553"
  - "#92346"
  - "#92454"
  - "#42617"
  - "#92648"
  - "#92643"
  - "#88680"
  - "#92204"
  - "#92602"
  - "#92665"
  - "#92686"
  - "#41275"
  - "#92704"
  - "#92714"
  - "#43938"
  - "#90512"
cluster_refs:
  - "#92544"
  - "#92509"
  - "#92571"
  - "#92576"
  - "#47589"
  - "#51926"
  - "#92603"
  - "#91399"
  - "#91473"
  - "#91553"
  - "#92346"
  - "#92454"
  - "#42617"
  - "#92648"
  - "#92643"
  - "#88680"
  - "#92204"
  - "#92602"
  - "#92665"
  - "#92686"
  - "#41275"
  - "#92704"
  - "#92714"
  - "#43938"
  - "#90512"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "This is a PR inventory classification shard, not a dedupe cluster. Classify each PR independently and do not invent a shared canonical."
notes: "Generated from local gitcrawl open PR inventory on 2026-06-15T15:45:34.201Z; bucket=needs_proof; no GitHub mutation is possible in plan mode."
---

# PR Inventory needs_proof 32

This is a high-volume classification shard over open pull requests. It is not a dedupe cluster.

## Goal

Hydrate live GitHub state for each listed PR and emit one conservative action per PR. Prefer `keep_related`, `keep_independent`, `needs_human`, or `route_security`. Emit close-style planned actions only when fresh live evidence makes the PR boringly superseded, duplicate, abandoned, or low-signal under existing policies. For `target_updated_at`, copy only the hydrated value from the Cluster preflight artifact; do not use gitcrawl snapshot timestamps from this job body.

## Inventory

### #92544 Add TrustedRouter setup docs

- bucket: needs_proof
- author: jperla
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, size: XS, triage: low-signal-docs, triage: needs-real-behavior-proof, rating: 🌊 off-meta tidepool
- gitcrawl snapshot updated: 2026-06-12T22:53:30Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - add TrustedRouter provider setup documentation - add the docs page to the provider navigation - include the OpenAI-compatible base URL https://api.trustedrouter.com/v1 and router aliases ## Testing - git diff --check

### #92509 fix(memory-core): WAL checkpoint after writeMeta + stale index file cleanup

- bucket: needs_proof
- author: Dazlarus
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: extensions: memory-core, size: S, triage: needs-real-behavior-proof, P1, rating: 🌊 off-meta tidepool, merge-risk: 🚨 session-state, merge-risk: 🚨 availability
- gitcrawl snapshot updated: 2026-06-12T23:21:30Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary One focused fix: `writeMeta()` now runs `PRAGMA wal_checkpoint(TRUNCATE)` after writing the `memory_index_meta_v1` row, ensuring it survives process crashes. ## Problem When the gateway process is killed between `writeMeta()` and `closeMemoryDatabas

### #92571 fix: dedupe cleaned assistant transcript entries for session-memory

- bucket: needs_proof
- author: arkyu2077
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, triage: needs-real-behavior-proof, rating: 🌊 off-meta tidepool
- gitcrawl snapshot updated: 2026-06-13T02:05:08Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - skip assistant transcript entries when they are cleaned text-only children of a raw assistant thinking entry with the same extracted text - preserve legitimate repeated assistant replies that come from different conversation turns - add a regressi

### #92576 test(cron): expand stagger helper edge-case coverage

- bucket: needs_proof
- author: arimu1
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, triage: needs-real-behavior-proof, rating: 🌊 off-meta tidepool
- gitcrawl snapshot updated: 2026-06-13T02:26:03Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Expands `src/cron/stagger.test.ts` from 5 test cases (54 lines) to 11 test cases, covering previously untested paths in all four exported helpers. **New coverage added:** | Helper | New cases | |--------|-----------| | `isRecurringTopOfHourCronExpr`

### #47589 fix(reminder-guard): reduce false positives on memory-related statements

- bucket: needs_proof
- author: moltpill
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: stale, size: S, triage: needs-real-behavior-proof, mantis: telegram-visible-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-13T04:52:21Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Problem The reminder guard's `REMINDER_COMMITMENT_PATTERNS` regex includes bare `remember` which matches memory/knowledge retention statements like "I'll remember that" and "I'll remember your preference" — not just temporal reminder commitments. This cause

### #51926 Agents: default nodes describe to current node

- bucket: needs_proof
- author: Liuhaai
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, stale, size: XS, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-13T04:53:56Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: the `nodes` tool accepted `action: "describe"` without `node` in its flat schema, but the `describe` implementation still hard-required `node` and threw `node required`. - Why it matters: agents use `describe` as a discovery-style read ac

### #92603 fix(cron): summarize shell failures directly

- bucket: needs_proof
- author: ashishpatel26
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: M, triage: mock-only-proof, P2, rating: 🦪 silver shellfish, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-13T05:25:15Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Closes #87426. ## Problem Cron announce failures with no final assistant message could deliver a synthesized `(agent) failed` summary that paraphrased raw bash into a misleading step list, such as shell keywords being shown as separate `run then`, `

### #91399 fix(cron): keep no-channel implicit cron runs successful instead of failing delivery (#56078)

- bucket: needs_proof
- author: MoerAI
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, triage: needs-real-behavior-proof, P1, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-13T06:44:00Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary On a local / no-channel setup, backend- or Control-UI-created isolated `agentTurn` cron jobs fail their whole run with `Channel is required (no configured channels detected)` even though the agent turn ran successfully (e.g. it wrote a report file).

### #91473 feat(google): filter English "I will"/"I am" pre-tool narration from antigravity-cli

- bucket: needs_proof
- author: Kirchlive
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: M, triage: needs-real-behavior-proof, extensions: google, P2, rating: 🧂 unranked krab, merge-risk: 🚨 auth-provider, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-13T06:44:26Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary agy 1.0.6 emits English first-person pre-tool narration in two forms: - `I will <verb> …` (imminent action — `"I will list the contents of the project workspace."`) - `I am <verb-ing> …` (background/long-running — `"I am running the openclaw status 

### #91553 fix(tailscale): retry status json after serve startup

- bucket: needs_proof
- author: TUARAN
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: scripts, size: S, triage: needs-real-behavior-proof, P2, rating: 🦪 silver shellfish, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-13T06:44:53Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fixes the transient `tailscale status --json` startup race in Tailscale Serve mode. - add a narrow same-binary retry helper around the status JSON read used by `getTailnetHostname` - keep the change scoped to serve-startup hostname discovery; no con

### #92346 fix(agents): retire stale aborted subagent runs past the staleness window in orphan recovery (fixes #90766)

- bucket: needs_proof
- author: zenglingbiao
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: S, proof: supplied, P2, rating: 🦪 silver shellfish, merge-risk: 🚨 session-state, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-13T06:46:36Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ### Summary - **Problem**: After a gateway restart with long downtime, stale subagent runs with `abortedLastRun: true` are treated as resumable by orphan recovery even when they are hours past the staleness window. This can resurrect contextless child work lon

### #92454 fix(tasks): reconcile stale subagent tasks when backing CLI child is terminal (fixes #92285)

- bucket: needs_proof
- author: zenglingbiao
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: M, proof: supplied, P2, rating: 🧂 unranked krab, merge-risk: 🚨 session-state, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-13T06:46:42Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ### Summary - **Problem**: When a backing CLI child task becomes `lost`, the parent subagent task (runtime: `subagent`, no `childSessionKey`) remains `running`, and the linked `task_mirrored` TaskFlow also stays `running` — even after gateway restart. Task mai

### #42617 feat(pairing): add configurable pairingMessage text per channel (#41058)

- bucket: needs_proof
- author: digital2dna
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: discord, channel: imessage, channel: telegram, commands, size: M, triage: needs-real-behavior-proof, mantis: telegram-visible-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-13T09:29:46Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Adds optional `pairingMessage` config to iMessage and Telegram channel configs, allowing operators to customize or suppress OpenClaw branding in pairing challenge messages sent to unknown senders. Fixes #41058 ## Problem When `dmPolicy: pairing` is 

### #92648 #92523: Bug: Orphaned TaskFlows in `waiting` status permanently block agent heartbeats (requests-in-flight deadlock)

- bucket: needs_proof
- author: zhiqiang26
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: commands, size: S, proof: supplied, P1, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-13T09:31:35Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Expire orphaned TaskFlows stuck in `waiting` status during the task-flow registry maintenance sweep. Without this, flows whose callback never returns (display timeout, gateway restart, network failure) stay in `waiting` forever, causing the gateway 

### #92643 #92076: Subagent completion delivery can fail when requester run is inactive and session transcript is locked

- bucket: needs_proof
- author: zhiqiang26
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: scripts, agents, size: M, proof: supplied, P2, rating: 🦪 silver shellfish, merge-risk: 🚨 session-state, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-13T09:39:24Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fix subagent completion delivery that was silently lost when the active requester wake fails (inactive/locked session) and the requester-agent handoff throws a SessionWriteLockTimeoutError — even though a direct-message delivery route existed. ## Ro

### #88680 docs(providers): register Ace Data Cloud third-party provider plugin

- bucket: needs_proof
- author: acedatacloud-dev
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, scripts, size: S, triage: external-plugin-candidate, triage: needs-real-behavior-proof, P2, rating: 🦪 silver shellfish, merge-risk: 🚨 auth-provider, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-13T10:47:21Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Adds [`@acedatacloud/openclaw-provider`](https://www.npmjs.com/package/@acedatacloud/openclaw-provider) as an external provider entry so the package becomes discoverable through `openclaw plugins install` and the onboarding wizard, and ships a `/pro

### #92204 fix(gateway): notify parent session on sub-agent run timeout

- bucket: needs_proof
- author: XuZehan-iCenter
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, size: XS, proof: supplied, P2, rating: 🦪 silver shellfish, merge-risk: 🚨 session-state, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-13T12:35:12Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fixes #89095. When a sub-agent run is force-killed by its `runTimeoutSeconds`, the parent session receives **no completion/timeout event** and waits indefinitely. The root cause is an asymmetric check in the wait-timer fallback of `waitForAgentJob`:

### #92602 fix(android): queue node events until gateway connect

- bucket: needs_proof
- author: ashishpatel26
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: android, size: M, triage: needs-real-behavior-proof, P1, rating: 🧂 unranked krab, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-13T12:47:29Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Closes #79552. ## Problem Android notification forwarding could send `node.event` before the gateway websocket `connect` request completed. The gateway rejects any first frame that is not `connect`, and Android did not retry the failed notification 

### #92665 fix(llm): honor cacheRetention for LiteLLM-proxied Anthropic models

- bucket: needs_proof
- author: kagura-agent
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, proof: supplied, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-13T13:32:47Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fixes #37966 — `cacheRetention` configured for LiteLLM-proxied Anthropic models (e.g. `litellm/claude-opus-4-6`) is silently ignored. ## Root Cause Two code paths block LiteLLM from using Anthropic prompt caching: 1. **`resolveAnthropicCacheRetentio

### #92686 feat(agents): add stable A2A session metadata

- bucket: needs_proof
- author: yorkisestevez
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: S, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-13T13:33:04Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Adds stable agent id and session-scope metadata to sessions_send A2A prompt context - Keeps high-cardinality session keys, peer IDs, thread IDs, and run IDs redacted behind placeholders - Extends focused helper tests to lock prompt-cache-safe meta

### #41275 fix(cron): allow timeoutSeconds: 0 for no-timeout mode

- bucket: needs_proof
- author: JonathanJing
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: web-ui, size: XS, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 automation, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-13T13:50:41Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## 🐛 Problem The cron job UI validation logic incorrectly rejects `timeoutSeconds: 0`, which should represent "no timeout" mode. **Current behavior:** ```typescript if (timeout <= 0) { errors.timeoutSeconds = "cron.errors.timeoutInvalid"; } ``` This prevents 

### #92704 #92688: fix(qwen): use DashScope native image format for Qwen vision models

- bucket: needs_proof
- author: sheyanmin
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-13T14:30:30Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fix Qwen vision models returning 400 "Unexpected item type in content" on DashScope by converting image content parts from standard OpenAI format (`type: image_url`) to DashScope native format (`type: image`). ## Root Cause DashScope's OpenAI-compat

### #92714 feat(gateway): make the default node.invoke timeout configurable

- bucket: needs_proof
- author: Hidetsugu55
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, gateway, size: S, plugin: file-transfer, proof: supplied, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-13T14:56:33Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary The gateway→node `node.invoke` path used a hardcoded 30-second default timeout for any call that did not pass its own `timeoutMs`. Nodes that legitimately run longer commands were cut off at 30s with a `TIMEOUT` error. This adds a configurable defau

### #43938 fix(gateway): use account-scoped reload for channel account changes

- bucket: needs_proof
- author: coppynight
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, size: S, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-13T14:59:01Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Use account-scoped hot reload for config changes under: - `channels.<channel>.accounts.<accountId>.*` instead of always restarting the entire channel. ## What changed - added account-scoped restart planning to `GatewayReloadPlan` - detect account-sc

### #90512 fix: ignore canonical Windows gateway task names

- bucket: needs_proof
- author: arkyu2077
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, size: XS, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 availability, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-13T15:14:59Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Stop the Windows gateway-service detector from flagging the canonical `\OpenClaw Gateway` scheduled task as an extra service just because `schtasks` prefixes the task name with a backslash. ## Changes - strip leading slash and backslash prefixes bef

