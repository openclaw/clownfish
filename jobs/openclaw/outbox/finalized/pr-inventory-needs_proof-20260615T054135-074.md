---
repo: openclaw/openclaw
cluster_id: pr-inventory-needs_proof-20260615T054135-074
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
  - "#54764"
  - "#55519"
  - "#55817"
  - "#56283"
  - "#55485"
  - "#55341"
  - "#56081"
  - "#54692"
  - "#54900"
  - "#55001"
cluster_refs:
  - "#54764"
  - "#55519"
  - "#55817"
  - "#56283"
  - "#55485"
  - "#55341"
  - "#56081"
  - "#54692"
  - "#54900"
  - "#55001"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "This is a PR inventory classification shard, not a dedupe cluster. Classify each PR independently and do not invent a shared canonical."
notes: "Generated from local gitcrawl open PR inventory on 2026-06-15T05:41:35.457Z; bucket=needs_proof; no GitHub mutation is possible in plan mode."
---

# PR Inventory needs_proof 74

This is a high-volume classification shard over open pull requests. It is not a dedupe cluster.

## Goal

Hydrate live GitHub state for each listed PR and emit one conservative action per PR. Prefer `keep_related`, `keep_independent`, `needs_human`, or `route_security`. Emit close-style planned actions only when fresh live evidence makes the PR boringly superseded, duplicate, abandoned, or low-signal under existing policies. For `target_updated_at`, copy only the hydrated value from the Cluster preflight artifact; do not use gitcrawl snapshot timestamps from this job body.

## Inventory

### #54764 sessions: recover orphaned subagent cleanup

- bucket: needs_proof
- author: CyberSpencer
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: S, triage: refactor-only, triage: needs-real-behavior-proof, P2, rating: 🌊 off-meta tidepool, merge-risk: 🚨 session-state
- gitcrawl snapshot updated: 2026-06-10T05:02:14Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - route orphan-prune and kill cleanup through the same final cleanup bookkeeping - make delete-mode terminated runs idempotent and remove stale registry entries reliably - keep deferred cleanup retries alive after orphan pruning instead of silently 

### #55519 Fix Feishu group session orchestration fallbacks

- bucket: needs_proof
- author: aaaw10055-pixel
- author association: FIRST_TIMER
- draft: no
- assignees: none
- labels: agents, size: M, triage: needs-real-behavior-proof, P2, rating: 🌊 off-meta tidepool, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery, merge-risk: 🚨 security-boundary
- gitcrawl snapshot updated: 2026-06-10T05:02:19Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - allow `sessions_send` to target an `agentId` by resolving the most recent visible session - ignore ACP-only `streamTo` when `sessions_spawn` is running with `runtime: "subagent"` - tighten the agent system prompt guidance for long-running work in 

### #55817 Ensure transcripts exist immediately after session rollover

- bucket: needs_proof
- author: openclawq
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, triage: needs-real-behavior-proof, P1, rating: 🌊 off-meta tidepool, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state
- gitcrawl snapshot updated: 2026-06-10T05:02:22Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fix a session persistence consistency gap where `sessions.json` can be rotated to a fresh `sessionId` before the new transcript file exists on disk. With the current behavior, monitors and history UIs can see: - a live session key bound to a new `se

### #56283 feat(outbound): strip markdown for plain-text channels

- bucket: needs_proof
- author: richmondbagnall
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: M, triage: refactor-only, triage: needs-real-behavior-proof, P3, rating: 🌊 off-meta tidepool, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery
- gitcrawl snapshot updated: 2026-06-10T05:02:27Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary LLMs produce Markdown formatting that renders correctly on Discord/Slack but shows as raw `**asterisks**` and `# headings` on iMessage, SMS, and IRC. OpenClaw already strips HTML for plain-text surfaces via `sanitizeForPlainText()` but Markdown pass

### #55485 Config: plumb opt-in SSRF policy for web fetch, citation redirects, and remote media

- bucket: needs_proof
- author: code-sayuri
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, channel: mattermost, channel: msteams, channel: signal, channel: zalouser, agents, size: L, triage: needs-real-behavior-proof, P2, rating: 🌊 off-meta tidepool, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery, merge-risk: 🚨 security-boundary
- gitcrawl snapshot updated: 2026-06-10T05:02:28Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary This PR converts the previously proven dist-level SSRF benchmark-range hotfix into a source-level, config-driven, opt-in implementation. It adds shared `ssrfPolicy` config plumbing for three scoped paths: - `tools.web.fetch.ssrfPolicy` - `tools.web.

### #55341 Persist refreshed Twitch tokens and fix OpenProse fast-loop exits

- bucket: needs_proof
- author: pomarie
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: extensions: open-prose, channel: twitch, size: M, triage: needs-real-behavior-proof, P2, rating: 🌊 off-meta tidepool, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, merge-risk: 🚨 security-boundary
- gitcrawl snapshot updated: 2026-06-10T05:02:31Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - persist refreshed Twitch OAuth tokens back to config for config-backed Twitch accounts, covering both base-level default config and named account entries - add Twitch unit coverage for refresh writeback and `onRefresh` persistence wiring - fix the

### #56081 feat: include model in response usage footer

- bucket: needs_proof
- author: Ghabs95
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS, triage: needs-real-behavior-proof, P2, rating: 🌊 off-meta tidepool, merge-risk: 🚨 compatibility
- gitcrawl snapshot updated: 2026-06-10T05:02:32Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - include the actual answering provider/model in the response usage footer - pass `providerUsed` and `modelUsed` into `formatResponseUsageLine` - keep existing cost/session behavior unchanged ## Example Before: ```text Usage: 12k in / 970 out ``` Af

### #54692 CLI: clarify gateway url override auth hints

- bucket: needs_proof
- author: gmays
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, size: XS, triage: needs-real-behavior-proof, P3, rating: 🌊 off-meta tidepool
- gitcrawl snapshot updated: 2026-06-10T05:02:39Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - improve the gateway URL override auth error with source-specific follow-up hints - tell CLI users they can remove `--url` when they meant the default local or SSH-tunneled gateway - tell env override users to set `OPENCLAW_GATEWAY_TOKEN` or `OPENC

### #54900 fix(delivery-queue): skip stale first-attempt entries during startup recovery

- bucket: needs_proof
- author: Drickon
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, triage: needs-real-behavior-proof, P2, rating: 🌊 off-meta tidepool, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery
- gitcrawl snapshot updated: 2026-06-10T05:02:52Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Problem When the gateway restarts, the delivery queue replays pending entries from previous runs. This is the correct behavior for messages that genuinely failed to send (network errors, provider downtime, etc.). However, messages that were *enqueued but no

### #55001 Fix /queue steer directive

- bucket: needs_proof
- author: changergosum
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS, triage: refactor-only, triage: blank-template, triage: needs-real-behavior-proof, P2, rating: 🌊 off-meta tidepool, merge-risk: 🚨 message-delivery
- gitcrawl snapshot updated: 2026-06-10T05:02:54Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: The hasInlineDirective block unintentionally strips /queue steer and other directives that accompany a prompt. This preserves those directives. ## Summary Describe the problem and fix in 2–5 bullets: - Problem: Sending to chat "/queue steer prompt" doesn't wor

