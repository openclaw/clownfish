---
repo: openclaw/openclaw
cluster_id: pr-inventory-mixed-20260615T0529-033
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
  - "#81131"
  - "#87061"
  - "#87206"
  - "#87046"
  - "#86716"
  - "#86681"
  - "#87231"
  - "#86577"
  - "#86460"
  - "#86901"
cluster_refs:
  - "#81131"
  - "#87061"
  - "#87206"
  - "#87046"
  - "#86716"
  - "#86681"
  - "#87231"
  - "#86577"
  - "#86460"
  - "#86901"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "This is a PR inventory classification shard, not a dedupe cluster. Classify each PR independently and do not invent a shared canonical."
notes: "Generated from local gitcrawl open PR inventory on 2026-06-15T05:29:43.603Z; bucket=mixed; no GitHub mutation is possible in plan mode."
---

# PR Inventory mixed 33

This is a high-volume classification shard over open pull requests. It is not a dedupe cluster.

## Goal

Hydrate live GitHub state for each listed PR and emit one conservative action per PR. Prefer `keep_related`, `keep_independent`, `needs_human`, or `route_security`. Emit close-style planned actions only when fresh live evidence makes the PR boringly superseded, duplicate, abandoned, or low-signal under existing policies. For `target_updated_at`, copy only the hydrated value from the Cluster preflight artifact; do not use gitcrawl snapshot timestamps from this job body.

## Inventory

### #81131 fix(telegram): combine voice payload with preceding streamed text

- bucket: needs_proof
- author: sdimantsd
- author association: FIRST_TIMER
- draft: no
- assignees: none
- labels: channel: telegram, size: XS, triage: needs-real-behavior-proof, P2, rating: 🌊 off-meta tidepool, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery
- gitcrawl snapshot updated: 2026-05-29T05:15:40Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary When a final voice payload arrives in Telegram after partial/block streaming has already sent the text, two separate Telegram messages appear: first the streamed text, then the voice note. This restores the pre-bca16d0f00 behavior where audioAsVoice

### #87061 feat(agents): add top-level subsystem logger

- bucket: ready_for_maintainer
- author: caulslorenzo1-png
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: XS, proof: supplied, proof: sufficient, P3, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-05-29T05:15:45Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Adds `src/agents/log.ts` exporting a `SubsystemLogger` for the `"agents"` subsystem - Follows the existing pattern of `src/agents/cli-runner/log.ts` and `src/agents/pi-embedded-runner/logger.ts` - Wires `agent-command.ts` as the first caller via `

### #87206 fix(memory-core): recover narrative text from trajectory when session archived early (#87182)

- bucket: needs_proof
- author: bladin
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: extensions: memory-core, size: S, triage: needs-real-behavior-proof, P2, rating: 🌊 off-meta tidepool
- gitcrawl snapshot updated: 2026-05-29T05:15:46Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary This PR fixes #87182 where the gateway's post-completion session cleanup races with memory-core's narrative extraction, causing model-generated narrative text to be silently discarded. ## Root Cause After subagent runs complete, the gateway immediat

### #87046 fix(plugins): preserve agent harnesses across empty-plugin-scope reloads

- bucket: stale_unassigned
- author: tejasphatak
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, size: S, proof: supplied, P1, rating: 🌊 off-meta tidepool, merge-risk: 🚨 compatibility, merge-risk: 🚨 security-boundary
- gitcrawl snapshot updated: 2026-05-29T05:15:47Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: > 🤖 **AI-assisted PR** (Claude). Root-cause analysis, patch, and test were AI-generated; the real-environment evidence below is from a human-operated production gateway. ## Summary **Problem:** A config/plugin reload that resolves to an *empty plugin scope* t

### #86716 fix(discord): harden reply delivery accounting

- bucket: stale_unassigned
- author: Steady-ai
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: discord, size: S, triage: refactor-only, proof: supplied, P2, rating: 🌊 off-meta tidepool, merge-risk: 🚨 message-delivery
- gitcrawl snapshot updated: 2026-05-29T05:15:53Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Scope - Return an explicit delivery result from Discord interaction replies so expired interactions are not counted as delivered. - Fail final Discord delivery when sanitizer removes all visible/sendable payload content. - Normalize Discord message send ext

### #86681 Clarify secrets runtime plugin source test hook

- bucket: needs_proof
- author: asock
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS, triage: needs-real-behavior-proof, rating: 🌊 off-meta tidepool
- gitcrawl snapshot updated: 2026-05-29T05:16:21Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Clarifies a secrets runtime test-hook comment to avoid implying runtime origin allowlist behavior. ## Scope Comment-only advisory cleanup in `src/secrets/runtime.ts`. No runtime behavior, secret resolution behavior, auth store loading, plugin metada

### #87231 feat(feishu): include reply context in comment auto replies

- bucket: ready_for_maintainer
- author: wittam-01
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: feishu, size: S, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-05-29T05:16:41Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: Feishu document comment auto replies did not carry source-reply context into the Drive comment write requests, so the receiving side could not distinguish which original comment reply triggered an automatic follow-up. - Why it matters: co

### #86577 fix(discord): persist inbound replay recovery

- bucket: stale_unassigned
- author: seanbc618-tech
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: discord, size: M, proof: supplied, P2, rating: 🌊 off-meta tidepool, merge-risk: 🚨 message-delivery
- gitcrawl snapshot updated: 2026-05-29T05:17:09Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - persist Discord inbound replay claims per account so retryable worker failures can recover without dropping the inbound event - wire the Discord provider state dir into the replay guard and keep queue commit/release paths on the same replay namesp

### #86460 Redesign Overview as an operator-first OpenClaw dashboard

- bucket: stale_unassigned
- author: homer-byte
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, app: web-ui, gateway, extensions: diagnostics-otel, extensions: memory-core, scripts, agents, size: XL, channel: qqbot, extensions: diagnostics-prometheus, proof: supplied, extensions: openrouter, P2, rating: 🌊 off-meta tidepool, merge-risk: 🚨 compatibility
- gitcrawl snapshot updated: 2026-05-29T05:17:15Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Rework the connected Overview page into an operator-first dashboard instead of a setup/status landing page. - Keep first-run Gateway Access and Snapshot cards intact for disconnected installs, then move them below daily operating signals once the 

### #86901 fix(feishu): fall back to post mode when markdown tables exceed card limit

- bucket: stale_unassigned
- author: name5566
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: feishu, size: XS, proof: supplied, P2, rating: 🌊 off-meta tidepool, merge-risk: 🚨 message-delivery
- gitcrawl snapshot updated: 2026-05-29T05:17:24Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Problem When an agent's reply contains more than 5 Markdown tables, the Feishu plugin detects tables and automatically sends the reply as an interactive card. However, the Feishu card API limits each card to at most 5 table components (`ErrCode: 11310; card

