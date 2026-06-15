---
repo: openclaw/openclaw
cluster_id: pr-inventory-needs_proof-20260615T060018-189
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
  - "#63193"
  - "#63057"
  - "#62307"
  - "#63789"
  - "#64384"
  - "#64150"
  - "#64622"
  - "#64490"
  - "#64649"
  - "#64044"
cluster_refs:
  - "#63193"
  - "#63057"
  - "#62307"
  - "#63789"
  - "#64384"
  - "#64150"
  - "#64622"
  - "#64490"
  - "#64649"
  - "#64044"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "This is a PR inventory classification shard, not a dedupe cluster. Classify each PR independently and do not invent a shared canonical."
notes: "Generated from local gitcrawl open PR inventory on 2026-06-15T06:00:18.677Z; bucket=needs_proof; no GitHub mutation is possible in plan mode."
---

# PR Inventory needs_proof 189

This is a high-volume classification shard over open pull requests. It is not a dedupe cluster.

## Goal

Hydrate live GitHub state for each listed PR and emit one conservative action per PR. Prefer `keep_related`, `keep_independent`, `needs_human`, or `route_security`. Emit close-style planned actions only when fresh live evidence makes the PR boringly superseded, duplicate, abandoned, or low-signal under existing policies. For `target_updated_at`, copy only the hydrated value from the Cluster preflight artifact; do not use gitcrawl snapshot timestamps from this job body.

## Inventory

### #63193 [codex] finish android release handoff

- bucket: needs_proof
- author: Mquarmoc
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: android, size: M, triage: needs-real-behavior-proof, P2, rating: 🌊 off-meta tidepool, merge-risk: 🚨 automation, merge-risk: 🚨 compatibility, merge-risk: 🚨 security-boundary
- gitcrawl snapshot updated: 2026-06-06T04:49:49Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## What changed This finishes the Android release handoff so the release process is reproducible from the repo instead of relying on chat history. - add a manual GitHub Actions workflow to build signed Android release AABs and upload them to a GitHub release -

### #63057 fix(anthropic): replace `|| 1024` fallback with safe `budget_tokens` guard

- bucket: needs_proof
- author: Zeesejo
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: XS, triage: needs-real-behavior-proof, P2, rating: 🌊 off-meta tidepool, merge-risk: 🚨 availability
- gitcrawl snapshot updated: 2026-06-06T04:50:01Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Problem — issue #63016 In `buildAnthropicParams` (`src/agents/anthropic-transport-stream.ts`), the legacy budget-based thinking block was built with: ```ts params.thinking = { type: "enabled", budget_tokens: options.thinkingBudgetTokens || 1024, }; ``` The 

### #62307 feat(whatsapp): handle message edits and revocations

- bucket: needs_proof
- author: kencan666-ai
- author association: FIRST_TIMER
- draft: no
- assignees: none
- labels: channel: whatsapp-web, size: S, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-06T04:50:04Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary This PR adds support for WhatsApp's native message edit feature, which was introduced in 2023. Currently, if a user accidentally sends an incomplete message and then edits it in WhatsApp, the OpenClaw agent processes the original (unedited) version 

### #63789 Proposal: add minimal agent-to-agent handoff protocol (Phase 1)

- bucket: needs_proof
- author: glfruit
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, size: XS, triage: low-signal-docs, triage: needs-real-behavior-proof, P3, rating: 🌊 off-meta tidepool
- gitcrawl snapshot updated: 2026-06-06T04:50:11Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary This draft PR proposes a minimal formal handoff protocol for agent-to-agent delegation. The goal is to make `sessions_send`-style agent handoff explicitly observable and less vulnerable to silent ambiguity. ## Proposed Phase 1 scope - add `handoff_i

### #64384 fix(reply): gate preflight compaction fast-path on token threshold (#63892)

- bucket: needs_proof
- author: 070freebird070-ctrl
- author association: FIRST_TIMER
- draft: no
- assignees: none
- labels: size: S, triage: needs-real-behavior-proof, P1, rating: 🌊 off-meta tidepool, merge-risk: 🚨 session-state
- gitcrawl snapshot updated: 2026-06-06T04:50:13Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fixes #63892. After the first compaction, \`entry.totalTokensFresh\` is set to \`true\` by \`incrementRunCompactionCount\`. On subsequent runs, \`runPreflightCompactionIfNeeded\` unconditionally short-circuits at \`src/auto-reply/reply/agent-runner-

### #64150 fix: register find/grep/ls tools and add Claude Code name aliases [AI]

- bucket: needs_proof
- author: VibeSparkingAI
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: XS, triage: needs-real-behavior-proof, P1, rating: 🌊 off-meta tidepool, merge-risk: 🚨 auth-provider, merge-risk: 🚨 security-boundary
- gitcrawl snapshot updated: 2026-06-06T04:50:14Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Register `findTool`, `grepTool`, `lsTool` from `pi-coding-agent` in the default coding tool set so the agent loop can dispatch them - Add `CLAUDE_CODE_ALIAS_TO_LOCAL` map (`Glob`→`find`) to the Anthropic transport layer so OAuth sessions correctly

### #64622 fix(gateway): harden agent-to-agent routing, timeout handling, and main-session metadata sanitization

- bucket: needs_proof
- author: RogerLYJ
- author association: FIRST_TIMER
- draft: no
- assignees: none
- labels: docs, gateway, agents, size: S, triage: needs-real-behavior-proof, P1, rating: 🌊 off-meta tidepool, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, merge-risk: 🚨 security-boundary
- gitcrawl snapshot updated: 2026-06-06T04:50:16Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: # PR Title fix(gateway): harden agent-to-agent routing, timeout handling, and main-session metadata sanitization ## 中文问题说明 ### 背景 在一个长期运行的多 agent 软件工厂场景中，我们发现 OpenClaw 的跨代理协同存在三个相互叠加的问题： 1. `sessions_send` 在代理之间通信时会受到过短默认超时影响，复杂任务或串行协作场景下容易提前超时。 2. agent 主会话在已

### #64490 CLI: escape zsh completion descriptions

- bucket: needs_proof
- author: EdenKangdw
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: cli, size: XS, triage: needs-real-behavior-proof, P2, rating: 🌊 off-meta tidepool
- gitcrawl snapshot updated: 2026-06-06T04:50:18Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: <img width="620" height="177" alt="image" src="https://github.com/user-attachments/assets/df9f44fb-368a-4de3-abb5-89d714c5cca6" /> ## Summary ### Problem Zsh completion descriptions are emitted inside double-quoted `_arguments` specs, but `$` and backticks wer

### #64649 Test/run state machine clamp guard

- bucket: needs_proof
- author: Rahulkumar070
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS, triage: needs-real-behavior-proof, P3, rating: 🌊 off-meta tidepool
- gitcrawl snapshot updated: 2026-06-06T04:50:21Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: The `activeRuns` clamp guard in `onRunEnd()` (`Math.max(0, activeRuns - 1)`) was completely untested. Calling `onRunEnd()` more times than `onRunStart()` (e.g. error handling paths, race conditions) would cause `activeRuns` to go negative

### #64044 fix(infra): upgrade base image from Debian 12 to Debian 13 (trixie)

- bucket: needs_proof
- author: junmo-kim
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: scripts, docker, size: S, triage: needs-real-behavior-proof, P2, rating: 🌊 off-meta tidepool, merge-risk: 🚨 compatibility, merge-risk: 🚨 security-boundary, merge-risk: 🚨 availability
- gitcrawl snapshot updated: 2026-06-06T04:50:37Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Debian 13 (trixie) reached stable on 2025-08-09; advances the base image to the current Debian stable release - Updates `node:24-bookworm` → `node:24-trixie` across the Dockerfile, smoke-test images, and ARG digest pins - GLIBC advances from 2.36 

