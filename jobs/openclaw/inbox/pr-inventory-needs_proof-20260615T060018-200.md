---
repo: openclaw/openclaw
cluster_id: pr-inventory-needs_proof-20260615T060018-200
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
  - "#66414"
  - "#68112"
  - "#53441"
  - "#68307"
  - "#66067"
  - "#66415"
  - "#67782"
  - "#52236"
  - "#67788"
  - "#66836"
cluster_refs:
  - "#66414"
  - "#68112"
  - "#53441"
  - "#68307"
  - "#66067"
  - "#66415"
  - "#67782"
  - "#52236"
  - "#67788"
  - "#66836"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "This is a PR inventory classification shard, not a dedupe cluster. Classify each PR independently and do not invent a shared canonical."
notes: "Generated from local gitcrawl open PR inventory on 2026-06-15T06:00:18.678Z; bucket=needs_proof; no GitHub mutation is possible in plan mode."
---

# PR Inventory needs_proof 200

This is a high-volume classification shard over open pull requests. It is not a dedupe cluster.

## Goal

Hydrate live GitHub state for each listed PR and emit one conservative action per PR. Prefer `keep_related`, `keep_independent`, `needs_human`, or `route_security`. Emit close-style planned actions only when fresh live evidence makes the PR boringly superseded, duplicate, abandoned, or low-signal under existing policies. For `target_updated_at`, copy only the hydrated value from the Cluster preflight artifact; do not use gitcrawl snapshot timestamps from this job body.

## Inventory

### #66414 Fix image attachment handling in Control UI chat

- bucket: needs_proof
- author: pandaAIGC
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: web-ui, gateway, size: S, triage: needs-real-behavior-proof, P2, rating: 🌊 off-meta tidepool, merge-risk: 🚨 message-delivery
- gitcrawl snapshot updated: 2026-06-07T05:04:13Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary This fixes two issues that can cause image attachments from Control UI chat to be lost before they reach the model: 1. `resolveGatewayModelSupportsImages()` could miss image-capable models when the runtime reported a bare model name (for example `gp

### #68112 fix(cron): prevent scheduler death when startup catch-up fails

- bucket: needs_proof
- author: alexanderxfgl-bit
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: L, triage: needs-real-behavior-proof, P1, rating: 🌊 off-meta tidepool, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery
- gitcrawl snapshot updated: 2026-06-07T05:04:17Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary When runMissedJobs() throws during start(), the timer was never armed, silently killing the cron scheduler until the next gateway restart. ## Root Cause The start() function in src/cron/service/ops.ts calls runMissedJobs() outside of any try/catch, 

### #53441 fix(synology-chat): handle HEAD probe and return 200 on webhook ACK

- bucket: needs_proof
- author: dennis-lynch
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, triage: needs-real-behavior-proof, P2, rating: 🦪 silver shellfish, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-07T05:04:20Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Fixes #53439 ## Problem Synology Chat bot webhooks fail silently in two ways, discovered through live debugging with a Synology NAS bot integration: **1. HEAD probe** Synology sends a `HEAD` request to the outgoing webhook URL before each `POST` to verify the 

### #68307 fix(commands): emit WARN when bootstrap files are truncated

- bucket: needs_proof
- author: 1aifanatic
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS, triage: needs-real-behavior-proof, P2, rating: 🌊 off-meta tidepool
- gitcrawl snapshot updated: 2026-06-07T05:04:26Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - `resolveCommandsSystemPromptBundle` was calling `resolveBootstrapContextForRun` without a `warn` callback - Bootstrap file truncation warnings were silently discarded in the commands / system-prompt path - Wires up `makeBootstrapWarn` backed by a 

### #66067 fix(tui): preserve spaces between thinking fragments

- bucket: needs_proof
- author: Rohan5commit
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, triage: needs-real-behavior-proof, P2, rating: 🌊 off-meta tidepool, merge-risk: 🚨 compatibility
- gitcrawl snapshot updated: 2026-06-07T05:04:31Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: streamed thinking fragments were joined with single newlines, and the TUI markdown renderer collapsed those boundaries so adjacent sentences appeared smushed together - Why it matters: reasoning output in the terminal became hard to read 

### #66415 fix(custom-provider): add empty required arrays for non-strict OpenAI tool schemas

- bucket: needs_proof
- author: LiuYihey
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: M, triage: needs-real-behavior-proof, P2, rating: 🌊 off-meta tidepool, merge-risk: 🚨 auth-provider
- gitcrawl snapshot updated: 2026-06-07T05:04:34Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - add `required: []` for object schemas on the non-strict OpenAI tool path - limit the recursive rewrite to schema-bearing keywords so literal objects under `enum`, `const`, `default`, and `examples` are left unchanged - update regression coverage a

### #67782 fix(telegram): skip delete before non-empty command sync

- bucket: needs_proof
- author: p3nchan
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: telegram, size: XS, triage: needs-real-behavior-proof, P2, rating: 🌊 off-meta tidepool
- gitcrawl snapshot updated: 2026-06-07T05:04:36Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - skip `deleteMyCommands()` before syncing a non-empty Telegram command menu - preserve explicit deletes when syncing an empty menu - add targeted tests for both paths and stabilize the unchanged-hash test ## Why PR #32059 already avoids unnecessary

### #52236 fix(mattermost): persist threadId in delivery context for all session types

- bucket: needs_proof
- author: teconomix
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: mattermost, size: XS, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 session-state, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-07T05:04:41Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Problem When a cron job or heartbeat wakes a thread-scoped Mattermost session, the reply lands at the channel root instead of in the thread. ## Root Cause `updateLastRoute` in `monitor.ts` was guarded by `if (kind === "direct")`, so delivery context (includ

### #67788 fix: improve cli help and gateway guidance

- bucket: needs_proof
- author: Dodo1021
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, cli, commands, size: S, triage: needs-real-behavior-proof, P2, rating: 🌊 off-meta tidepool
- gitcrawl snapshot updated: 2026-06-07T05:04:43Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - expand nested help more reliably for deeper `--help` invocations - clarify gateway foreground runtime vs supervised service commands - improve gateway status/auth/help output and models auth guidance ## Testing - corepack pnpm install --frozen-loc

### #66836 fix(sandbox): add configurable init timeout with cooperative abort

- bucket: needs_proof
- author: rmfalco89
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: M, triage: needs-real-behavior-proof, P2, rating: 🌊 off-meta tidepool, merge-risk: 🚨 compatibility, merge-risk: 🚨 security-boundary, merge-risk: 🚨 availability
- gitcrawl snapshot updated: 2026-06-07T05:04:45Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Wrap sandbox context initialization in a configurable timeout (default 60s) so a hung or unreachable Docker daemon can no longer block the entire message processing pipeline indefinitely. When the timer fires, an `AbortController` signals cooperativ

