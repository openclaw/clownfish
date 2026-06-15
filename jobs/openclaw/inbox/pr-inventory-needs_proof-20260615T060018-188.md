---
repo: openclaw/openclaw
cluster_id: pr-inventory-needs_proof-20260615T060018-188
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
  - "#64703"
  - "#63113"
  - "#63025"
  - "#62403"
  - "#64335"
  - "#61521"
  - "#64749"
  - "#62966"
  - "#64416"
  - "#63062"
cluster_refs:
  - "#64703"
  - "#63113"
  - "#63025"
  - "#62403"
  - "#64335"
  - "#61521"
  - "#64749"
  - "#62966"
  - "#64416"
  - "#63062"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "This is a PR inventory classification shard, not a dedupe cluster. Classify each PR independently and do not invent a shared canonical."
notes: "Generated from local gitcrawl open PR inventory on 2026-06-15T06:00:18.677Z; bucket=needs_proof; no GitHub mutation is possible in plan mode."
---

# PR Inventory needs_proof 188

This is a high-volume classification shard over open pull requests. It is not a dedupe cluster.

## Goal

Hydrate live GitHub state for each listed PR and emit one conservative action per PR. Prefer `keep_related`, `keep_independent`, `needs_human`, or `route_security`. Emit close-style planned actions only when fresh live evidence makes the PR boringly superseded, duplicate, abandoned, or low-signal under existing policies. For `target_updated_at`, copy only the hydrated value from the Cluster preflight artifact; do not use gitcrawl snapshot timestamps from this job body.

## Inventory

### #64703 fix: parse scientific notation as number in parseConfigValue

- bucket: needs_proof
- author: Rahulkumar070
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, triage: needs-real-behavior-proof, P2, rating: 🌊 off-meta tidepool, merge-risk: 🚨 compatibility
- gitcrawl snapshot updated: 2026-06-06T04:47:39Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: `parseConfigValue` did not recognize scientific notation (e.g. `1e5`, `2.5e10`) as a number. The regex `/^-?\d+(\.\d+)?$/` only matched plain integers and decimals, so scientific notation was silently returned as a string instead of a num

### #63113 feat: add local coding agent bootstrap and selftests

- bucket: needs_proof
- author: yankhy-source
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: discord, scripts, size: L, triage: dirty-candidate, triage: needs-real-behavior-proof, P2, rating: 🌊 off-meta tidepool, merge-risk: 🚨 compatibility, merge-risk: 🚨 security-boundary
- gitcrawl snapshot updated: 2026-06-06T04:47:41Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - add a small local bootstrap script for reproducible coding-agent profiles in `~/.openclaw/openclaw.json` - add a local selftest entrypoint for `exec`, `read`, `patch`, plus optional GitHub and WhatsApp live checks - document the workflow under `qa

### #63025 fix(auto-reply): avoid silent completion when dispatch produces no sendable reply

- bucket: needs_proof
- author: Leon-llb
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, triage: needs-real-behavior-proof, P2, rating: 🌊 off-meta tidepool, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery, merge-risk: 🚨 security-boundary
- gitcrawl snapshot updated: 2026-06-06T04:48:03Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary This fixes a silent completion path in `dispatchReplyFromConfig`. In the current flow, a normal user message can make it through dispatch and still end with no sendable output, leaving the user with no reply and no visible error. In logs this shows 

### #62403 fix(ui): keep session label edits attached to correct row after sorting

- bucket: needs_proof
- author: edwardlong-ctrl
- author association: FIRST_TIMER
- draft: no
- assignees: none
- labels: app: web-ui, size: S, triage: needs-real-behavior-proof, P2, rating: 🌊 off-meta tidepool
- gitcrawl snapshot updated: 2026-06-06T04:48:03Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary * Problem: Editing a session label could visually apply the change to the wrong row when the table reorders. * Why it matters: Users may accidentally modify the wrong session label due to DOM reuse after sorting. * What changed: Use Lit `repeat()` k

### #64335 fix(zai): rotate env-backed API keys on rate limit

- bucket: needs_proof
- author: serg0x
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, commands, agents, size: XL, triage: dirty-candidate, triage: needs-real-behavior-proof, P2, rating: 🌊 off-meta tidepool, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, merge-risk: 🚨 security-boundary
- gitcrawl snapshot updated: 2026-06-06T04:48:04Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: Z.AI env-based multi-key setups were not exposed as rotating runtime auth profiles for gateway runs, so rate-limit failover could stop at the first env key. - Why it matters: users configuring `ZAI_API_KEYS` or numbered `ZAI_API_KEY_*` en

### #61521 feat(channels): defer setup validation until config assembly

- bucket: needs_proof
- author: frznfrgg
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: cli, commands, size: M, triage: needs-real-behavior-proof, P2, rating: 🌊 off-meta tidepool, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider
- gitcrawl snapshot updated: 2026-06-06T04:48:06Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary This is **PR 1 of a 3-PR VK stack**. Follow-up PRs: - PR 2: `fix(plugin-sdk): forward inbound typing callbacks` <https://github.com/frznfrgg/openclaw/pull/8> - PR 3: `feat(vk): add VK channel plugin` <https://github.com/frznfrgg/openclaw/pull/9> Des

### #64749 feat(tasks): add observable worker state snapshot

- bucket: needs_proof
- author: neofdezf-cloud
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: cli, commands, size: M, triage: needs-real-behavior-proof, P2, rating: 🌊 off-meta tidepool, merge-risk: 🚨 compatibility, merge-risk: 🚨 security-boundary
- gitcrawl snapshot updated: 2026-06-06T04:48:11Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Adds a lightweight observable `worker-state.json` snapshot derived from the task registry so runtime worker/task state can be inspected without scraping sqlite internals. ### What changed - adds `src/tasks/task-registry.observable-state.ts` - persists `worker-

### #62966 feat: expose replyToId in inbound_claim hook metadata

- bucket: needs_proof
- author: david-lihangyuan
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS, triage: needs-real-behavior-proof, P2, rating: 🌊 off-meta tidepool, merge-risk: 🚨 compatibility
- gitcrawl snapshot updated: 2026-06-06T04:48:15Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Expose `replyToId` and `replyToBody` in the `inbound_claim` plugin hook metadata, enabling plugins to implement reply-aware message routing. ## Motivation We're building a plugin that routes user replies to heartbeat messages back to the heartbeat s

### #64416 fix(acp): normalize completion delivery guidance

- bucket: needs_proof
- author: richardclawbot
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, agents, size: M, triage: needs-real-behavior-proof, P2, rating: 🌊 off-meta tidepool, merge-risk: 🚨 session-state, merge-risk: 🚨 message-delivery, merge-risk: 🚨 security-boundary
- gitcrawl snapshot updated: 2026-06-06T04:48:28Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## What - keep parent-spawned ACP completions quiet and authoritative - prefer live completion output over cached interim chatter - add ACP session capability normalization guidance for ACP-backed turns ## Why - reduce duplicate or low-signal completion repost

### #63062 fix: apply cache_control to conversation messages on OpenRouter path

- bucket: needs_proof
- author: liu51115
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: S, triage: needs-real-behavior-proof, P2, rating: 🌊 off-meta tidepool, merge-risk: 🚨 compatibility
- gitcrawl snapshot updated: 2026-06-06T04:48:48Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary The OpenRouter code path (`applyAnthropicEphemeralCacheControlMarkers`) only applies `cache_control` markers to system/developer messages. Conversation messages (user/assistant) are never marked. This means on OpenRouter, only the system prompt is c

