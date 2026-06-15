---
repo: openclaw/openclaw
cluster_id: pr-inventory-needs_proof-20260615T223445-037
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
  - "#84563"
  - "#84566"
  - "#84578"
  - "#84582"
  - "#84602"
  - "#84603"
  - "#84690"
  - "#84719"
  - "#90788"
  - "#90792"
  - "#90821"
  - "#90831"
  - "#90834"
  - "#90837"
  - "#92172"
  - "#74509"
  - "#81376"
  - "#81378"
  - "#81719"
  - "#81743"
  - "#81829"
  - "#82098"
  - "#82105"
  - "#82290"
  - "#82466"
cluster_refs:
  - "#84563"
  - "#84566"
  - "#84578"
  - "#84582"
  - "#84602"
  - "#84603"
  - "#84690"
  - "#84719"
  - "#90788"
  - "#90792"
  - "#90821"
  - "#90831"
  - "#90834"
  - "#90837"
  - "#92172"
  - "#74509"
  - "#81376"
  - "#81378"
  - "#81719"
  - "#81743"
  - "#81829"
  - "#82098"
  - "#82105"
  - "#82290"
  - "#82466"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "This is a PR inventory classification shard, not a dedupe cluster. Classify each PR independently and do not invent a shared canonical."
notes: "Generated from local gitcrawl open PR inventory on 2026-06-15T22:34:45.794Z; bucket=needs_proof; no GitHub mutation is possible in plan mode."
---

# PR Inventory needs_proof 37

This is a high-volume classification shard over open pull requests. It is not a dedupe cluster.

## Goal

Hydrate live GitHub state for each listed PR and emit one conservative action per PR. Prefer `keep_related`, `keep_independent`, `needs_human`, or `route_security`. Emit close-style planned actions only when fresh live evidence makes the PR boringly superseded, duplicate, abandoned, or low-signal under existing policies. For `target_updated_at`, copy only the hydrated value from the Cluster preflight artifact; do not use gitcrawl snapshot timestamps from this job body.

## Inventory

### #84563 fix(telegram): avoid silent truncation in partial streaming finals

- bucket: needs_proof
- author: vice-magus-faolan
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: telegram, size: M, triage: needs-real-behavior-proof, mantis: telegram-visible-proof, P1, rating: 🧂 unranked krab, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T01:29:22Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Describe the problem and fix in 2–5 bullets: - Problem: Telegram partial-stream finals could be marked as delivered before continuation chunks were actually sent, which could suppress visible fallback handling and leave users with a mid-sentence cut

### #84566 [codex] fix: omit provider api keys from generated models.json

- bucket: needs_proof
- author: piaoguodeafei
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: S, triage: needs-real-behavior-proof, P1, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T01:29:26Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fixes openclaw/openclaw#11829. This prevents generated `models.json` files from persisting provider-level `apiKey` fields. The sanitization happens at the serialization boundary, after provider discovery/normalization/merge, so provider catalog meta

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
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: feishu, size: XS, proof: supplied, P2, rating: 🧂 unranked krab, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T01:50:37Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary The Feishu no-visible-reply fallback message was a hardcoded English-only string with no reason code, making it impossible for users to understand what went wrong. This fixes #92100 by making the fallback bilingual and surfacing the internal reason

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

### #81719 fix(exec): fail closed without sandbox runtime

- bucket: needs_proof
- author: CommanderCrowCode
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: S, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T01:59:26Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - default omitted exec host config to sandbox instead of auto fallback - keep explicit host: auto as the opt-in path for gateway/node fallback - update exec runtime/config tests for the fail-closed default ## Validation - corepack pnpm exec oxfmt --

### #81743 feat(ui/i18n): add Chinese translations for config page

- bucket: needs_proof
- author: git-jxj
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: web-ui, size: XL, proof: supplied, P3, rating: 🧂 unranked krab, status: 📣 needs proof, proof: 📸 screenshot
- gitcrawl snapshot updated: 2026-06-15T01:59:46Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: Config page quick settings had missing or incorrect Chinese translations. Theme names, roundness options, and several card labels showed raw i18n keys or English text when using Simplified Chinese locale. - Why it matters: Non-English use

### #81829 fix(doctor): exit non-zero on final invalid config (#77804)

- bucket: needs_proof
- author: koshaji
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: cli, commands, size: S, proof: supplied, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T02:00:10Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary `openclaw doctor` printed `Invalid config:` validation errors but still exited `0`. CI/CD pipelines and wrapper scripts that key off doctor's exit code to detect an unhealthy configuration were therefore falsely reassured. This PR sets `process.exit

### #82098 Update README.md

- bucket: needs_proof
- author: h908714124
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS, triage: low-signal-docs, triage: docs-discoverability, triage: refactor-only, triage: needs-real-behavior-proof, P3, rating: 🧂 unranked krab, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T02:00:23Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: I think this sentence was the wrong way round. ## Summary minor docs change ## Change Type (select all) - [ ] Bug fix - [ ] Feature - [ ] Refactor required for the fix - [x] Docs - [ ] Security hardening - [ ] Chore/infra ## Scope (select all touched areas) -

### #82105 chore(docker): bundle channel voice plugin deps

- bucket: needs_proof
- author: exoulster
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, scripts, docker, size: XS, proof: supplied, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T02:00:27Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: default Docker builds pruned optional bundled plugin runtime dependencies unless operators knew to set `OPENCLAW_EXTENSIONS`. - Why it matters: Discord, Feishu, and Voice Call are externalized plugin packages but should be ready in the st

### #82290 fix(gateway): support pinned daemon runtime paths

- bucket: needs_proof
- author: darkamenosa
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, gateway, cli, commands, maintainer, size: XL, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 availability, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T02:00:43Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: managed gateway/node services could start with Homebrew or PATH-selected runtimes instead of the operator-selected mise/Bun executable. - Why it matters: launchd/systemd/schtasks do not load interactive shell startup files, so service res

### #82466 fix(plugins): suppress hook-pack fallback noise when plugin lacks compiled runtime

- bucket: needs_proof
- author: Sanjays2402
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: cli, size: XS, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T02:01:01Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fixes #82454. When a third-party plugin declares `openclaw.extensions` with a TypeScript entry (e.g. `./index.ts`) but ships no compiled JavaScript, the install command produced two confusing errors back-to-back: ``` package install requires compile
