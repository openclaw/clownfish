---
repo: openclaw/openclaw
cluster_id: pr-inventory-needs_proof-20260615T060018-202
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
  - "#68127"
  - "#67466"
  - "#67967"
  - "#66442"
  - "#68129"
  - "#67836"
  - "#66716"
  - "#67460"
  - "#66342"
  - "#66098"
cluster_refs:
  - "#68127"
  - "#67466"
  - "#67967"
  - "#66442"
  - "#68129"
  - "#67836"
  - "#66716"
  - "#67460"
  - "#66342"
  - "#66098"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "This is a PR inventory classification shard, not a dedupe cluster. Classify each PR independently and do not invent a shared canonical."
notes: "Generated from local gitcrawl open PR inventory on 2026-06-15T06:00:18.678Z; bucket=needs_proof; no GitHub mutation is possible in plan mode."
---

# PR Inventory needs_proof 202

This is a high-volume classification shard over open pull requests. It is not a dedupe cluster.

## Goal

Hydrate live GitHub state for each listed PR and emit one conservative action per PR. Prefer `keep_related`, `keep_independent`, `needs_human`, or `route_security`. Emit close-style planned actions only when fresh live evidence makes the PR boringly superseded, duplicate, abandoned, or low-signal under existing policies. For `target_updated_at`, copy only the hydrated value from the Cluster preflight artifact; do not use gitcrawl snapshot timestamps from this job body.

## Inventory

### #68127 fix: prevent toLowerCase error when model.id or model.name is undefined

- bucket: needs_proof
- author: nightq
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: XS, triage: needs-real-behavior-proof, P2, rating: 🌊 off-meta tidepool
- gitcrawl snapshot updated: 2026-06-07T05:05:15Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fixes the "f.toLowerCase is not a function" error that occurs in the agent:bootstrap hook when model.id or model.name is undefined. ## Root Cause In `canonicalizeLegacyResolvedModel()` (src/agents/pi-embedded-runner/model.ts), the code called `.trim

### #67466 fix(feishu): reduce startup latency by parallelizing probe and capping timeouts

- bucket: needs_proof
- author: a137460387
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: feishu, size: M, triage: needs-real-behavior-proof, P1, rating: 🌊 off-meta tidepool, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery, merge-risk: 🚨 availability
- gitcrawl snapshot updated: 2026-06-07T05:05:17Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: When Feishu is enabled, gateway startup is blocked for ~100s before `chat.history` becomes available. With Feishu disabled the same call resolves in ~8s. ## Root cause: two blocking paths in the startup chain **1. `monitorFeishuProvider()` in `monitor.ts`** Cu

### #67967 fix(minimax): disable tool call ID sanitization for Anthropic-compatible API

- bucket: needs_proof
- author: sebykrueger
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS, extensions: minimax, triage: needs-real-behavior-proof, P2, rating: 🌊 off-meta tidepool
- gitcrawl snapshot updated: 2026-06-07T05:05:18Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Re-opens #65371 against the current replay-hook API (the original PR was written before the `buildProviderReplayFamilyHooks` factory landed and no longer applies). - **Problem:** MiniMax's Anthropic-compatible API generates its own tool call IDs and

### #66442 fix(skills): support Discord multi-account config in skills check

- bucket: needs_proof
- author: YangManBOBO
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: cli, agents, size: S, triage: needs-real-behavior-proof, P2, rating: 🌊 off-meta tidepool, merge-risk: 🚨 auth-provider
- gitcrawl snapshot updated: 2026-06-07T05:05:18Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Fixes #66088. - Add generic anyConfig requirement support so a skill can be eligible when any one config path is satisfied. - Update bundled Discord skill gating to accept either channels.discord.token or multi-account channels.discord.accounts. -

### #68129 Fix delivery-ready verification blockers

- bucket: needs_proof
- author: likewen-tech
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: discord, channel: matrix, app: web-ui, scripts, commands, agents, size: XL, extensions: qa-lab, triage: needs-real-behavior-proof, P1, rating: 🌊 off-meta tidepool, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, merge-risk: 🚨 security-boundary
- gitcrawl snapshot updated: 2026-06-07T05:05:21Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary This PR closes the remaining delivery-ready verification blockers for the current branch. It completes three founder-visible fixes: - suppress non-actionable historical task delivery warning noise on operator surfaces - normalize heartbeat `0m` sema

### #67836 feat(memory-core): Memory v2 foundation — sidecar, ingest, rerank (all default-off)

- bucket: needs_proof
- author: BowieSequoia
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: extensions: memory-core, size: XL, triage: needs-real-behavior-proof, P2, rating: 🌊 off-meta tidepool, merge-risk: 🚨 session-state, merge-risk: 🚨 security-boundary
- gitcrawl snapshot updated: 2026-06-07T05:05:25Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Additive foundation for a SQLite-backed Memory v2 sidecar and two pipelines (ingest, rerank). Every surface is wired behind a plugin-config flag and defaults to **off**, so this PR is behaviorally a no-op until a workspace opts in via `memoryV2.ingest.enabled`

### #66716 fix: auto-compaction fires on fresh cached token counts (#66520)

- bucket: needs_proof
- author: KeWang0622
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: M, triage: needs-real-behavior-proof, P1, rating: 🌊 off-meta tidepool, merge-risk: 🚨 session-state
- gitcrawl snapshot updated: 2026-06-07T05:05:25Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - **Bug**: `runPreflightCompactionIfNeeded` returned early when `totalTokensFresh === true` without checking the compaction threshold, so auto-compaction never triggered for sessions with fresh token counts — even at 153% of the context window - **R

### #67460 feat(mention-gating): suppress always-on agent when another agent is explicitly mentioned

- bucket: needs_proof
- author: MoeJaberr
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: discord, channel: googlechat, channel: imessage, channel: line, channel: msteams, channel: nextcloud-talk, channel: signal, channel: slack, channel: telegram, channel: whatsapp-web, channel: zalouser, scripts, agents, size: M, triage: needs-real-behavior-proof, P1, rating: 🌊 off-meta tidepool, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery, merge-risk: 🚨 security-boundary
- gitcrawl snapshot updated: 2026-06-07T05:05:26Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Adds `suppressIfOtherAgentMentioned?: boolean` to `InboundMentionPolicy` - Adds `suppressedByOtherAgentMention: boolean` to `InboundMentionDecision` - When the new policy flag is `true`, an always-on agent (`requireMention=false`) sets `shouldSkip

### #66342 fix(slack): stop provider gracefully on auth errors instead of crashing gateway

- bucket: needs_proof
- author: Angfr95
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: slack, gateway, size: M, triage: needs-real-behavior-proof, P2, rating: 🌊 off-meta tidepool, merge-risk: 🚨 message-delivery, merge-risk: 🚨 availability
- gitcrawl snapshot updated: 2026-06-07T05:05:31Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: fix(slack): stop provider gracefully on auth errors instead of crashing gateway Non-recoverable Slack auth errors (account_inactive, invalid_auth, etc.) were throwing out of monitorSlackProvider, propagating as unhandled promise rejections and killing the enti

### #66098 fix(web-ui): respect effective chat defaults

- bucket: needs_proof
- author: Rohan5commit
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: web-ui, gateway, size: S, triage: needs-real-behavior-proof, P2, rating: 🌊 off-meta tidepool, merge-risk: 🚨 session-state
- gitcrawl snapshot updated: 2026-06-07T05:05:38Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: the Web UI only looked at persisted session overrides, so a new session could already be running with effective thinking/reasoning defaults while the chat header still rendered the fallback model label or hid reasoning incorrectly - Why i

