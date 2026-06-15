---
repo: openclaw/openclaw
cluster_id: pr-inventory-needs_proof-20260615T060018-075
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
  - "#72829"
  - "#73200"
  - "#73382"
  - "#73171"
  - "#73294"
  - "#73363"
  - "#73311"
  - "#73295"
  - "#73883"
  - "#73345"
cluster_refs:
  - "#72829"
  - "#73200"
  - "#73382"
  - "#73171"
  - "#73294"
  - "#73363"
  - "#73311"
  - "#73295"
  - "#73883"
  - "#73345"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "This is a PR inventory classification shard, not a dedupe cluster. Classify each PR independently and do not invent a shared canonical."
notes: "Generated from local gitcrawl open PR inventory on 2026-06-15T06:00:18.666Z; bucket=needs_proof; no GitHub mutation is possible in plan mode."
---

# PR Inventory needs_proof 75

This is a high-volume classification shard over open pull requests. It is not a dedupe cluster.

## Goal

Hydrate live GitHub state for each listed PR and emit one conservative action per PR. Prefer `keep_related`, `keep_independent`, `needs_human`, or `route_security`. Emit close-style planned actions only when fresh live evidence makes the PR boringly superseded, duplicate, abandoned, or low-signal under existing policies. For `target_updated_at`, copy only the hydrated value from the Cluster preflight artifact; do not use gitcrawl snapshot timestamps from this job body.

## Inventory

### #72829 Fix/copilot default models gpt 5 5 opus 1m

- bucket: needs_proof
- author: iot2edge
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, triage: needs-real-behavior-proof, rating: 🌊 off-meta tidepool
- gitcrawl snapshot updated: 2026-05-30T04:54:51Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Fixes #72805 ## Summary - Problem: GitHub Copilot's `/models` endpoint advertises `gpt-5.5` and `claude-opus-4.7-1m-internal`, but `extensions/github-copilot/models-defaults.ts:DEFAULT_MODEL_IDS` is missing both. Users have to hand-edit `~/.openclaw/openclaw.j

### #73200 Reconcile terminal task audit noise

- bucket: needs_proof
- author: martins-oss
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, triage: needs-real-behavior-proof, P2, rating: 🌊 off-meta tidepool, merge-risk: 🚨 compatibility
- gitcrawl snapshot updated: 2026-05-30T04:55:03Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Task: ebcee6b1 Reconciles terminal-only OpenClaw task audit noise so zero active queue pressure is not reported as misleading high-severity queue warnings. Rex verification before push: - unit-fast task-registry.audit.test.ts 6/6 - corepack pnpm check:changed 

### #73382 fix(amazon-bedrock): resolve 200K context window for Claude 3.x and unlisted Anthropic Bedrock variants

- bucket: needs_proof
- author: wenxu007
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, triage: needs-real-behavior-proof, rating: 🌊 off-meta tidepool
- gitcrawl snapshot updated: 2026-05-30T04:55:06Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: `extensions/amazon-bedrock/discovery.ts` only listed a handful of Anthropic models in `KNOWN_CONTEXT_WINDOWS`. Common Bedrock IDs such as `anthropic.claude-3-opus-20240229-v1:0`, `anthropic.claude-3-sonnet-20240229-v1:0`, and `anthropic.c

### #73171 Add bounded status gateway auth fallback

- bucket: needs_proof
- author: martins-oss
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: commands, size: S, triage: needs-real-behavior-proof, rating: 🌊 off-meta tidepool
- gitcrawl snapshot updated: 2026-05-30T04:55:18Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - add a bounded fallback when resolving gateway auth for deep/status scans - preserve existing status behavior while avoiding hangs when auth lookup stalls - keep promised Discord decision digest artifact path present for tool-call audit output ## V

### #73294 Add Discord response watchdog

- bucket: needs_proof
- author: martins-oss
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: S, triage: needs-real-behavior-proof, rating: 🌊 off-meta tidepool
- gitcrawl snapshot updated: 2026-05-30T04:55:44Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Fresh minimal branch superseding stale PR #73232 and auto-closed PR #73238. Task: 22d72cfc — Add Discord response watchdog for silent agent runs. Iris verification before PR creation: focused watchdog tests passed (105 tests) and diff was reduced to the intend

### #73363 fix(memory-core): keep isReasoning on payloads, skip reasoning blocks in cron-announce summary (#73186)

- bucket: needs_proof
- author: KeWang0622
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: S, triage: needs-real-behavior-proof, rating: 🌊 off-meta tidepool
- gitcrawl snapshot updated: 2026-05-30T04:55:48Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fixes #73186. Cron jobs running with `thinking` enabled (e.g. `deepseek/deepseek-v4-pro` via volcengine, configured `thinkingDefault: high`) currently leak the model's reasoning content into Matrix and Feishu announce deliveries. The reporter traced

### #73311 Add Control UI session kind filter

- bucket: needs_proof
- author: Shawn-Kim96
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, app: web-ui, size: M, triage: needs-real-behavior-proof, rating: 🌊 off-meta tidepool
- gitcrawl snapshot updated: 2026-05-30T04:55:58Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Adds a Control UI chat-header session kind filter for main/direct, group, subagent, dreaming, cron, and other sessions. - Keeps filtering UI-local so `sessions.list` params and gateway protocol stay unchanged. - Preserves the selected session in t

### #73295 Add Discord stuck-session circuit breaker

- bucket: needs_proof
- author: martins-oss
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: M, triage: needs-real-behavior-proof, rating: 🌊 off-meta tidepool
- gitcrawl snapshot updated: 2026-05-30T04:55:59Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Fresh minimal branch superseding stale PR #73233 and auto-closed PR #73239. Task: 59131098 — Implement stuck-session circuit breaker for Discord queues. Iris verification before PR creation: focused circuit-breaker Vitest passed (6 tests); broader tsgo core te

### #73883 feat(session): add includeArchived to chat.history and sessions_history

- bucket: needs_proof
- author: CadanHu
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: macos, app: web-ui, gateway, agents, size: M, triage: needs-real-behavior-proof, rating: 🌊 off-meta tidepool
- gitcrawl snapshot updated: 2026-05-30T04:56:03Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Implements the read-only path of [#45003](https://github.com/openclaw/openclaw/issues/45003)'s 3-PR roadmap: give agents and `chat.history` callers a way to recover context that lives in `.reset.<ts>` archives, **without** resurrecting those archive

### #73345 GRO-448: propagate hooks/agent thread to delivery

- bucket: needs_proof
- author: eywu
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, gateway, size: S, triage: needs-real-behavior-proof, rating: 🌊 off-meta tidepool
- gitcrawl snapshot updated: 2026-05-30T04:56:22Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary\n- parse optional `thread` in /hooks/agent payloads\n- pass it through to CronJob delivery.threadId\n- add regression coverage for thread-present and thread-absent payloads\n\n## Test\n- `npm test -- src/gateway/server.hooks.test.ts`

