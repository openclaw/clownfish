---
repo: openclaw/openclaw
cluster_id: pr-inventory-needs_proof-20260615T0529-045
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
  - "#73161"
  - "#73199"
  - "#73200"
  - "#73171"
  - "#73294"
  - "#73295"
  - "#73345"
  - "#73130"
  - "#73668"
  - "#73079"
cluster_refs:
  - "#73161"
  - "#73199"
  - "#73200"
  - "#73171"
  - "#73294"
  - "#73295"
  - "#73345"
  - "#73130"
  - "#73668"
  - "#73079"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "This is a PR inventory classification shard, not a dedupe cluster. Classify each PR independently and do not invent a shared canonical."
notes: "Generated from local gitcrawl open PR inventory on 2026-06-15T05:29:43.605Z; bucket=needs_proof; no GitHub mutation is possible in plan mode."
---

# PR Inventory needs_proof 45

This is a high-volume classification shard over open pull requests. It is not a dedupe cluster.

## Goal

Hydrate live GitHub state for each listed PR and emit one conservative action per PR. Prefer `keep_related`, `keep_independent`, `needs_human`, or `route_security`. Emit close-style planned actions only when fresh live evidence makes the PR boringly superseded, duplicate, abandoned, or low-signal under existing policies. For `target_updated_at`, copy only the hydrated value from the Cluster preflight artifact; do not use gitcrawl snapshot timestamps from this job body.

## Inventory

### #73161 Fix stale task cancellation runtime and Discord liveness handling

- bucket: needs_proof
- author: hypnotiq147
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: discord, channel: telegram, scripts, agents, size: XL, triage: dirty-candidate, triage: needs-real-behavior-proof, rating: 🌊 off-meta tidepool
- gitcrawl snapshot updated: 2026-05-30T04:54:25Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - fix task cancel runtime packaging so `openclaw tasks cancel` can load its control runtime - allow stale subagent task records to be cancelled even when the child session is already gone - treat Discord gateway `metrics` events as a liveness heartb

### #73199 Add hook capability smoke gate

- bucket: needs_proof
- author: martins-oss
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: scripts, size: M, triage: needs-real-behavior-proof, rating: 🌊 off-meta tidepool
- gitcrawl snapshot updated: 2026-05-30T04:54:50Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Task: 9f6c25b3 Adds a dry-run hook capability smoke gate/report for Codex/native guardrail parity. Rex verification before push: - node --check - scripts/hook-capability-smoke.mjs PASS (4 focused test files / 49 tests) - hook-capability script test 2/2 - corep

### #73200 Reconcile terminal task audit noise

- bucket: needs_proof
- author: martins-oss
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, triage: needs-real-behavior-proof, P2, rating: 🌊 off-meta tidepool, merge-risk: 🚨 compatibility
- gitcrawl snapshot updated: 2026-05-30T04:55:03Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Task: ebcee6b1 Reconciles terminal-only OpenClaw task audit noise so zero active queue pressure is not reported as misleading high-severity queue warnings. Rex verification before push: - unit-fast task-registry.audit.test.ts 6/6 - corepack pnpm check:changed 

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

### #73295 Add Discord stuck-session circuit breaker

- bucket: needs_proof
- author: martins-oss
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: M, triage: needs-real-behavior-proof, rating: 🌊 off-meta tidepool
- gitcrawl snapshot updated: 2026-05-30T04:55:59Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Fresh minimal branch superseding stale PR #73233 and auto-closed PR #73239. Task: 59131098 — Implement stuck-session circuit breaker for Discord queues. Iris verification before PR creation: focused circuit-breaker Vitest passed (6 tests); broader tsgo core te

### #73345 GRO-448: propagate hooks/agent thread to delivery

- bucket: needs_proof
- author: eywu
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, gateway, size: S, triage: needs-real-behavior-proof, rating: 🌊 off-meta tidepool
- gitcrawl snapshot updated: 2026-05-30T04:56:22Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary\n- parse optional `thread` in /hooks/agent payloads\n- pass it through to CronJob delivery.threadId\n- add regression coverage for thread-present and thread-absent payloads\n\n## Test\n- `npm test -- src/gateway/server.hooks.test.ts`

### #73130 Add credential blast-radius guard

- bucket: needs_proof
- author: martins-oss
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, gateway, agents, size: XL, triage: refactor-only, triage: needs-real-behavior-proof, rating: 🌊 off-meta tidepool
- gitcrawl snapshot updated: 2026-05-30T04:56:39Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Adds names-only credential blast-radius classification plus observe/approval-route guardrails for destructive tool calls when broad credentials are present. Scope/guardrails: - Names-only credential inventory; no credential values emitted. - Blocks/requires ap

### #73668 feat(profile): add privacy-safe profile export and import

- bucket: needs_proof
- author: alovwang-sys
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, gateway, cli, commands, size: XL, triage: needs-real-behavior-proof, rating: 🌊 off-meta tidepool
- gitcrawl snapshot updated: 2026-05-30T04:56:57Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Adds a privacy-safe local profile portability foundation via `openclaw profile export/import`. This is intentionally not cloud sync, not rclone integration, and not a full workspace/state backup. It focuses on moving portable personalization across 

### #73079 fix(minimax): request hex TTS output explicitly

- bucket: needs_proof
- author: efe-arv
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS, extensions: minimax, triage: needs-real-behavior-proof, P2, rating: 🌊 off-meta tidepool
- gitcrawl snapshot updated: 2026-05-30T04:57:01Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - send `output_format: "hex"` in MiniMax TTS requests - send `stream: false` explicitly for the non-streaming path - extend the MiniMax speech-provider test to lock the request shape ## Why The MiniMax provider decodes `data.audio` as hex, but the r

