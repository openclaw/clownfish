---
repo: openclaw/openclaw
cluster_id: pr-inventory-needs_proof-20260615T154534-059
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
  - "#84578"
  - "#84582"
  - "#84590"
  - "#84602"
  - "#84603"
  - "#84613"
  - "#84617"
  - "#84690"
  - "#84719"
  - "#84758"
  - "#84761"
  - "#90761"
  - "#90788"
  - "#90792"
  - "#90821"
  - "#90831"
  - "#90834"
  - "#90837"
  - "#92172"
  - "#69297"
  - "#74509"
  - "#81376"
  - "#81378"
  - "#81590"
  - "#81719"
cluster_refs:
  - "#84578"
  - "#84582"
  - "#84590"
  - "#84602"
  - "#84603"
  - "#84613"
  - "#84617"
  - "#84690"
  - "#84719"
  - "#84758"
  - "#84761"
  - "#90761"
  - "#90788"
  - "#90792"
  - "#90821"
  - "#90831"
  - "#90834"
  - "#90837"
  - "#92172"
  - "#69297"
  - "#74509"
  - "#81376"
  - "#81378"
  - "#81590"
  - "#81719"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "This is a PR inventory classification shard, not a dedupe cluster. Classify each PR independently and do not invent a shared canonical."
notes: "Generated from local gitcrawl open PR inventory on 2026-06-15T15:45:34.206Z; bucket=needs_proof; no GitHub mutation is possible in plan mode."
---

# PR Inventory needs_proof 59

This is a high-volume classification shard over open pull requests. It is not a dedupe cluster.

## Goal

Hydrate live GitHub state for each listed PR and emit one conservative action per PR. Prefer `keep_related`, `keep_independent`, `needs_human`, or `route_security`. Emit close-style planned actions only when fresh live evidence makes the PR boringly superseded, duplicate, abandoned, or low-signal under existing policies. For `target_updated_at`, copy only the hydrated value from the Cluster preflight artifact; do not use gitcrawl snapshot timestamps from this job body.

## Inventory

### #84578 fix(whatsapp): deliver final error payloads so incomplete-turn errors reach users

- bucket: needs_proof
- author: NianJiuZst
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: whatsapp-web, size: XS, proof: supplied, P1, rating: 🦪 silver shellfish, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T01:30:01Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fixes #84569 — WhatsApp silently drops `isError` reply payloads, so incomplete-turn error messages (payloads=0) are never delivered. Users see no response when a model call stalls or times out. Two changes: - `resolveWhatsAppDeliverablePayload` now 

### #84582 fix(net): conditionalize proxyTls only for HTTPS proxies to fix Telegram plugin proxy issues

- bucket: needs_proof
- author: tanjingme
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T01:30:22Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ### Summary Fixes an issue in the Telegram plugin where using SOCKS5 or plain HTTP proxies resulted in immediate connection failure with `ECONNRESET`. This was caused by `createHttp1ProxyAgent` unconditionally setting `proxyTls: true`. This patch conditionally

### #84590 Audit secret-bearing backup files

- bucket: needs_proof
- author: mickysakata-max
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: M, proof: supplied, extensions: openrouter, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T01:30:38Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - extend `secrets audit` to scan sibling backup files for `.env`, `auth-profiles.json`, and generated `models.json` - detect plaintext credential residue in `.bak` / `.bak.*` backup naming patterns without resolving historical backup-only SecretRefs

### #84602 fix(agents): surface user-visible error when embedded session is stuck or overflows context (#84536)

- bucket: needs_proof
- author: lml2468
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: S, triage: needs-real-behavior-proof, mantis: telegram-visible-proof, P1, rating: 🧂 unranked krab, merge-risk: 🚨 session-state, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T01:31:08Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Fixes #84536. ## Problem Preemptive context overflow checks (`shouldPreemptivelyCompactBeforePrompt`) fire during tool loops in embedded agent sessions. The session ends with `embedded_run_agent_end` + error, but **no error message is delivered to the channel*

### #84603 fix(cron): skip delivery mirror for routed peer sessions to prevent session lock races

- bucket: needs_proof
- author: NianJiuZst
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: scripts, size: M, proof: supplied, mantis: telegram-visible-proof, P2, rating: 🦪 silver shellfish, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T01:31:17Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fixes #84583: cron delivery mirror appending to a routed per-channel-peer session could race the embedded runner session lock, triggering `EmbeddedAttemptSessionTakeoverError` and aborting the user's in-flight chat response. `resolveDirectCronDelive

### #84613 Prevent plaintext provider keys in generated models config

- bucket: needs_proof
- author: VibhorGautam
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: XS, proof: supplied, P1, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T01:31:25Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Replace source-managed plaintext provider API keys with the existing non-secret marker before writing generated models config. - Add a regression test for runtime/source snapshot planning so resolved provider keys are not serialized into models.js

### #84617 fix(gateway): rate-limit device pairing and token management RPCs

- bucket: needs_proof
- author: davidangularme
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, size: XS, proof: supplied, P2, rating: 🦪 silver shellfish, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T01:31:30Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## What bug this fixes `device.pair.approve`, `device.pair.remove`, `device.token.rotate`, and `device.token.revoke` modify live gateway security state — approved pairings, active token revocations, and device removal — but were missing from the control-plane 

### #84690 fix(telegram): recover stale ingress claims after restart

- bucket: needs_proof
- author: zerone0x
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: telegram, size: XS, triage: mock-only-proof, mantis: telegram-visible-proof, P1, rating: 🦪 silver shellfish, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T01:33:13Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: Telegram isolated ingress could keep a fresh-looking `.json.processing` claim from a previous gateway identity when the PID was reused after recreate, blocking later same-lane updates. - Solution: Treat claims whose stored `processPid` eq

### #84719 fix: preserve active webhook request counters

- bucket: needs_proof
- author: fallintoplace
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS, triage: mock-only-proof, P2, rating: 🦪 silver shellfish, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T01:34:18Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Treat `maxTrackedKeys` as an active-key capacity limit in `createWebhookInFlightLimiter`. - Reject brand-new keys when the active key table is full instead of pruning active counters. - Add regression coverage for full-capacity behavior and same-k

### #84758 feat(subagents): add execution backend placement contract

- bucket: needs_proof
- author: napetrov
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, gateway, agents, size: L, proof: supplied, P2, rating: 🦪 silver shellfish, merge-risk: 🚨 compatibility, status: 📣 needs proof, feature: ✨ showcase
- gitcrawl snapshot updated: 2026-06-15T01:34:58Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Adds the first real implementation slice for #82017: `sessions_spawn` now accepts an optional execution placement request and validates it against `agents.executionBackends`. This PR keeps runtime behavior conservative: the built-in `local` `process

### #84761 feat(secrets): scan backup files for plaintext provider apiKey values

- bucket: needs_proof
- author: jing11223344
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 security-boundary, merge-risk: 🚨 availability, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T01:35:01Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Adds backup file secret scanning to the `openclaw secrets audit` command. This addresses a security gap identified in issue #11829 where old backup files (e.g., `models.json.20260501.bak`, `openclaw.json.old`) may retain plaintext provider API keys 

### #90761 fix(android): resolve UI bugs and add SSH tunnelling

- bucket: needs_proof
- author: TeALO36
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: android, size: XL, proof: supplied, P1, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T01:39:21Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: This PR fixes a set of recent UI bugs and adds new SSH capabilities: - **Add SSH Tunnelling**: Added an SSH Tunnel UI in Onboarding and Settings to connect securely to the OpenClaw gateway from outside the local network. - **Fix Chat UI overlapping**: The chat

### #90788 feat: add chain-of-thought pre-flight planning for long-running goals

- bucket: needs_proof
- author: n060dy-007
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: XL, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, merge-risk: 🚨 availability, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T01:39:54Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: # Pull Request Walkthrough: Chain-of-Thought (CoT) Pre-Flight Planning for Long-Running Goals This PR adds a structured Chain-of-Thought (CoT) pre-flight planning system to OpenClaw agents. The planning system activates when a long-running goal is created, gui

### #90792 feat: add unified Amazon AWS services plugin (Polly TTS, Transcribe STT, Nova Sonic voice)

- bucket: needs_proof
- author: wirjo
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, size: XL, triage: needs-real-behavior-proof, dependencies-changed, P2, rating: 🦪 silver shellfish, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, merge-risk: 🚨 availability, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T01:40:11Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Add a bundled Amazon plugin providing three AWS AI services: - **Amazon Polly**: text-to-speech (generative/neural/standard engines, 16 voices) - **Amazon Transcribe**: speech-to-text (streaming transcription, auto-format conversion) - **Amazon Nova

### #90821 fix(compact): make /compact command cancelable via abortEmbeddedAgentRun

- bucket: needs_proof
- author: Pick-cat
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: M, proof: supplied, P2, rating: 🦪 silver shellfish, merge-risk: 🚨 session-state, merge-risk: 🚨 availability, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T01:40:58Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fix #66535 for OpenClaw-owned `/compact` execution: a manual context-engine compaction now becomes an abortable active embedded run while the queued compaction task is actually running, so `/stop` can find it and abort the signal passed into the com

### #90831 fix(control-ui): add tooltips for Reasoning and Thinking dropdowns (#90445)

- bucket: needs_proof
- author: lonexreb
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: web-ui, size: XS, proof: supplied, P3, rating: 🦪 silver shellfish, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T01:41:14Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Closes #90445. The Control Panel Sessions table exposes two per-session dropdowns ("Reasoning" and "Thinking") whose meaning is opaque to users and collides with the corresponding config field names (`reasoningEffort`, `reasoning`). Per the issue, t

### #90834 fix(matrix): guard against missing channel.inbound runtime (#90325)

- bucket: needs_proof
- author: lonexreb
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: matrix, size: S, proof: supplied, P1, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 availability, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T01:41:27Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Issue #90325 (regression of #88694, which was closed by d05e4a4bc6 — a feishu-only fix that did not touch matrix). Inbound Matrix messages on v2026.6.1 fail with `TypeError: Cannot read properties of undefined (reading 'run')` because `core.channel.

### #90837 fix(telegram): suppress internal tool warnings in groups

- bucket: needs_proof
- author: jsasson
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: telegram, size: S, proof: supplied, mantis: telegram-visible-proof, P2, rating: 🦪 silver shellfish, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T01:41:35Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - suppress non-terminal internal tool-warning payloads before they can be delivered to Telegram group chats - preserve internal logging/history by logging the suppression instead of rewriting the warning into user-facing text - keep intended user-fa

### #92172 fix(feishu): bilingual no-visible-reply fallback with reason code

- bucket: needs_proof
- author: fsdwen
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: feishu, size: XS, proof: supplied, P2, rating: 🧂 unranked krab, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T01:50:37Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary The Feishu no-visible-reply fallback message was a hardcoded English-only string with no reason code, making it impossible for users to understand what went wrong. This fixes #92100 by making the fallback bilingual and surfacing the internal reason 

### #69297 fix(whatsapp): Add group admin privacy controls

- bucket: needs_proof
- author: haishmg
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, channel: whatsapp-web, agents, size: XL, extensions: qa-lab, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T01:57:36Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Closes #69233 ## What changed This adds an optional per-group WhatsApp admin override via `channels.whatsapp.groups.<jid>.admin` and wildcard `channels.whatsapp.groups."*".admin`. When an admin is configured for a group scope: - the configured E.164 number byp

### #74509 fix(matrix): honor MSC3967 and surface MAS reset URL on cross-signing bootstrap

- bucket: needs_proof
- author: nklock
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: matrix, size: L, triage: needs-real-behavior-proof, P1, rating: 🦪 silver shellfish, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T01:58:10Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: # Honor MSC3967 first-publish and surface MAS reset stage cleanly when cross-signing requires UIA ## What this PR does Makes the Matrix channel's cross-signing bootstrap survive Synapse homeservers fronted by Matrix Authentication Service (MSC3861, e.g. ESS de

### #81376 [codex] Fix cron chat session-key binding

- bucket: needs_proof
- author: VishalJ99
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: whatsapp-web, agents, size: S, proof: supplied, dependencies-changed, P1, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T01:59:05Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fixes #81375. - Stop the cron tool from stamping the caller chat `sessionKey` onto implicit `sessionTarget="main"` / `payload.kind="systemEvent"` jobs. - Preserve explicit `job.sessionKey` and preserve caller-session stamping for isolated `agentTurn

### #81378 feat(i18n): translate cron page UI strings to Simplified Chinese

- bucket: needs_proof
- author: git-jxj
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: web-ui, size: L, proof: supplied, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: 📣 needs proof, proof: 📸 screenshot
- gitcrawl snapshot updated: 2026-06-15T01:59:09Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: Cron page had hardcoded English strings when using Simplified Chinese locale, including job list chips (session target, wake mode, delivery mode), schedule labels, form fields (session key, account ID, light context, failure alerts), and 

### #81590 Add gateway watchdog authenticated handshake probe

- bucket: needs_proof
- author: bryangauvin
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: scripts, size: L, triage: refactor-only, triage: risky-infra, proof: supplied, P2, rating: 🦪 silver shellfish, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T01:59:17Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - add a local `scripts/gateway_health_watchdog.py` self-healing probe for OpenClaw gateway health - complete the authenticated OpenClaw WebSocket `connect` handshake instead of treating HTTP 101 as a successful health check - align the watchdog prob

### #81719 fix(exec): fail closed without sandbox runtime

- bucket: needs_proof
- author: CommanderCrowCode
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: S, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T01:59:26Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - default omitted exec host config to sandbox instead of auto fallback - keep explicit host: auto as the opt-in path for gateway/node fallback - update exec runtime/config tests for the fail-closed default ## Validation - corepack pnpm exec oxfmt --

