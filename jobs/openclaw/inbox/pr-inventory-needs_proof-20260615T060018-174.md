---
repo: openclaw/openclaw
cluster_id: pr-inventory-needs_proof-20260615T060018-174
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
  - "#65149"
  - "#65655"
  - "#63481"
  - "#63339"
  - "#65242"
  - "#65423"
  - "#64820"
  - "#65727"
  - "#63380"
  - "#64800"
cluster_refs:
  - "#65149"
  - "#65655"
  - "#63481"
  - "#63339"
  - "#65242"
  - "#65423"
  - "#64820"
  - "#65727"
  - "#63380"
  - "#64800"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "This is a PR inventory classification shard, not a dedupe cluster. Classify each PR independently and do not invent a shared canonical."
notes: "Generated from local gitcrawl open PR inventory on 2026-06-15T06:00:18.675Z; bucket=needs_proof; no GitHub mutation is possible in plan mode."
---

# PR Inventory needs_proof 174

This is a high-volume classification shard over open pull requests. It is not a dedupe cluster.

## Goal

Hydrate live GitHub state for each listed PR and emit one conservative action per PR. Prefer `keep_related`, `keep_independent`, `needs_human`, or `route_security`. Emit close-style planned actions only when fresh live evidence makes the PR boringly superseded, duplicate, abandoned, or low-signal under existing policies. For `target_updated_at`, copy only the hydrated value from the Cluster preflight artifact; do not use gitcrawl snapshot timestamps from this job body.

## Inventory

### #65149 Add final reply payloads plugin hook

- bucket: needs_proof
- author: bogdanovich
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, triage: needs-real-behavior-proof, P2, rating: 🌊 off-meta tidepool, merge-risk: 🚨 message-delivery, merge-risk: 🚨 security-boundary
- gitcrawl snapshot updated: 2026-06-05T05:03:28Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - add a new `final_reply_payloads` plugin hook at the final reply assembly stage - expose resolved `providerUsed`, `modelUsed`, `responseUsageMode`, and `responseUsageLine` - let plugins modify finalized reply payloads before the usage footer is app

### #65655 fix: harden Mattermost slash callback auth

- bucket: needs_proof
- author: coygeek
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, channel: mattermost, size: S, triage: needs-real-behavior-proof, P1, rating: 🌊 off-meta tidepool, merge-risk: 🚨 compatibility, merge-risk: 🚨 security-boundary
- gitcrawl snapshot updated: 2026-06-05T05:04:05Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Fix Summary Mattermost native slash commands were insecure in two ways: when `commands.callbackUrl` was omitted, OpenClaw auto-derived a plain-HTTP callback URL; and once commands were registered, any valid callback token for the account could be replayed a

### #63481 fix(feishu): serialise startup bot-info probes across concurrent accounts

- bucket: needs_proof
- author: giulio-leone
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: feishu, size: M, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 availability, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-05T05:04:12Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Problem Fixes #63475 With multiple Feishu accounts configured, the gateway starts all accounts concurrently via `Promise.all()` in `server-channels.ts`. Each account's `startAccount` calls `monitorSingleAccount` without a prefetched bot identity, causing `f

### #63339 tools: clarify sessions_send schema field guidance

- bucket: needs_proof
- author: Kl163
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, agents, size: XS, triage: needs-real-behavior-proof, P2, rating: 🦪 silver shellfish, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-05T05:04:20Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Clarify the model-facing schema guidance for `sessions_send`. This adds field descriptions so tool callers are guided to: - prefer `sessionKey` when known - use `label` only when `sessionKey` is unavailable - treat `agentId` as an optional hint for 

### #65242 fix: CompletionDeliveryGate to prevent duplicate ACP completion delivery

- bucket: needs_proof
- author: richardclawbot
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: discord, agents, size: L, triage: needs-real-behavior-proof, P2, rating: 🌊 off-meta tidepool, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, merge-risk: 🚨 message-delivery
- gitcrawl snapshot updated: 2026-06-05T05:04:38Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Introduces a `CompletionDeliveryGate` module that uses first-writer-wins compare-and-swap to ensure exactly one delivery path handles each ACP/subagent completion event - Integrates gate checks into the three competing delivery paths: task registr

### #65423 feat(agents): shuffle auth profile candidates for subagent runs

- bucket: needs_proof
- author: ryanngit
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: S, triage: needs-real-behavior-proof, P2, rating: 🌊 off-meta tidepool, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider
- gitcrawl snapshot updated: 2026-06-05T05:04:43Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Problem When multiple subagents spawn concurrently with the same provider, they all iterate `profileOrder` from index 0, causing a thundering herd on the first auth profile and cascading 429 errors. ## Fix - Add Fisher-Yates shuffle helper - Detect subagent

### #64820 fix(feishu): break circular module init causing ReferenceError on group mention

- bucket: needs_proof
- author: Ricardo-M-L
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: feishu, size: M, triage: needs-real-behavior-proof, P2, rating: 🌊 off-meta tidepool, merge-risk: 🚨 message-delivery
- gitcrawl snapshot updated: 2026-06-05T05:04:53Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fixes #64783 When mentioning (`@`) a bot in a Feishu group chat with multi-agent configuration, the gateway throws: ``` ReferenceError: Cannot access 'utils_1' before initialization ``` **Root cause:** `monitor.account.ts` statically imports `handle

### #65727 docs: add hook-pack publishing guide

- bucket: needs_proof
- author: snowshadow
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, channel: discord, size: M, triage: needs-real-behavior-proof, P2, rating: 🌊 off-meta tidepool, merge-risk: 🚨 compatibility, merge-risk: 🚨 availability
- gitcrawl snapshot updated: 2026-06-05T05:04:56Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - add a dedicated Publishing Hook Packs guide under automation docs - clarify in Hooks docs that public sharing already works through npm-distributed hook packs - link the Hooks CLI docs to the new publishing guide ## Why OpenClaw already supports h

### #63380 fix(telegram): allow agentId in account config for multi-account routing

- bucket: needs_proof
- author: mraleko
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: telegram, size: M, triage: needs-real-behavior-proof, mantis: telegram-visible-proof, P1, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-05T05:05:15Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fixes regression where Telegram multi-account configs with `agentId` were rejected as 'must NOT have additional properties' after upgrading from 2026.4.5 to 2026.4.8. ## Root cause `agentId` was only defined in `TelegramTopicSchema` (for forum group

### #64800 fix(plugins): iterate all providers in wrapProviderStreamFn

- bucket: needs_proof
- author: klin3867
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-05T05:05:38Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - **Problem:** `wrapProviderStreamFn()` only checked a single provider via `resolveProviderHookPlugin()`. When a built-in provider (e.g. Anthropic) owned the provider ID, external plugins with matching `hookAliases` could never contribute their own 

