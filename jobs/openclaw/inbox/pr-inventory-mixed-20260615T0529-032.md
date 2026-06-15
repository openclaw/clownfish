---
repo: openclaw/openclaw
cluster_id: pr-inventory-mixed-20260615T0529-032
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
  - "#87433"
  - "#86828"
  - "#87092"
  - "#87414"
  - "#87100"
  - "#86932"
  - "#87037"
  - "#86776"
  - "#87122"
  - "#86913"
cluster_refs:
  - "#87433"
  - "#86828"
  - "#87092"
  - "#87414"
  - "#87100"
  - "#86932"
  - "#87037"
  - "#86776"
  - "#87122"
  - "#86913"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "This is a PR inventory classification shard, not a dedupe cluster. Classify each PR independently and do not invent a shared canonical."
notes: "Generated from local gitcrawl open PR inventory on 2026-06-15T05:29:43.603Z; bucket=mixed; no GitHub mutation is possible in plan mode."
---

# PR Inventory mixed 32

This is a high-volume classification shard over open pull requests. It is not a dedupe cluster.

## Goal

Hydrate live GitHub state for each listed PR and emit one conservative action per PR. Prefer `keep_related`, `keep_independent`, `needs_human`, or `route_security`. Emit close-style planned actions only when fresh live evidence makes the PR boringly superseded, duplicate, abandoned, or low-signal under existing policies.

## Inventory

### #87433 [codex] Honor all ack scope for room events

- bucket: maintainer_owned
- author: scoootscooob
- author association: MEMBER
- draft: no
- assignees: none
- labels: docs, channel: discord, channel: slack, channel: telegram, maintainer, size: S, P2, rating: 🌊 off-meta tidepool, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery
- updated: 2026-05-29T05:14:18Z
- body excerpt: ## Summary - lets Discord, Slack, and Telegram send the configured initial ack reaction for ambient `room_event` messages when `messages.ackReactionScope` is `"all"` - keeps lifecycle status reactions suppressed for room events unless that behavior is changed 

### #86828 [codex] test: lock plugin-owned web search startup snapshots

- bucket: stale_unassigned
- author: NianJiuZst
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, triage: mock-only-proof, P2, rating: 🌊 off-meta tidepool
- updated: 2026-05-29T05:14:18Z
- body excerpt: ## Summary - Problem: #86779 reports gateway startup rebuilding legacy `tools.web.search.<provider>` objects from plugin-owned web search config, then failing validation during startup. - Solution: add regression coverage around config snapshot reads so plugin

### #87092 Update contributors in CONTRIBUTING.md

- bucket: needs_proof
- author: wmaulanaaishq
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS, triage: low-signal-docs, triage: docs-discoverability, triage: needs-real-behavior-proof, P3, rating: 🌊 off-meta tidepool, merge-risk: 🚨 other
- updated: 2026-05-29T05:14:23Z
- body excerpt: Added Wahyu Maulana Ishaq to the contributors list. ## Summary What problem does this PR solve? * Missing recognition for community contribution. This PR adds my profile to the contributor list in `CONTRIBUTING.md`. Why does this matter now? * I have been acti

### #87414 [codex] Key llama.cpp sessions for local reuse

- bucket: stale_unassigned
- author: ezcoder
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: S, proof: supplied, P2, rating: 🌊 off-meta tidepool, merge-risk: 🚨 compatibility, merge-risk: 🚨 security-boundary
- updated: 2026-05-29T05:14:24Z
- body excerpt: ## Summary Adds a narrow OpenClaw wrapper for the `llama-cpp-turboquant` provider that injects stable `cache_key` and `session_id` values into OpenAI-compatible request payloads. The key is derived from the OpenClaw session key when available, falling back to 

### #87100 fix(channels): defensively handle non-string prompter.text() results in token replace flow

- bucket: stale_unassigned
- author: YOMXXX
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, proof: supplied, P2, rating: 🌊 off-meta tidepool
- updated: 2026-05-29T05:14:37Z
- body excerpt: ## Summary - Stop calling `.trim()` directly on `await prompter.text({...})` in `promptSingleChannelToken` (`src/channels/plugins/setup-wizard-helpers.ts`) and in the `runTextInputSteps` block inside `runChannelSetupWizard` (`src/channels/plugins/setup-wizard.

### #86932 fix(doctor): warn on stale prompt cache config

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: commands, agents, maintainer, size: XL, P2, rating: 🌊 off-meta tidepool, merge-risk: 🚨 other
- updated: 2026-05-29T05:14:41Z
- body excerpt: ## Summary - Adds `openclaw doctor` warnings for cache-ttl configs whose selected chat model/provider cannot keep the prompt-cache window warm. - Covers direct Anthropic, Anthropic-compatible providers, Bedrock Claude, Google prompt-cache models, OpenAI-family

### #87037 fix(issue): resolve #86880 [Bug]: Context Overflow Bug With OpenRouter Models (Latest V

- bucket: needs_proof
- author: xuwei-xy
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: android, app: ios, size: XS, triage: needs-real-behavior-proof, rating: 🌊 off-meta tidepool
- updated: 2026-05-29T05:14:54Z
- body excerpt: ## 关联Issue Fixes #86880 ## PR 改动说明 ### Bug type Regression (worked before, now fails) ### Beta release blocker No ### Summary **Environment** **OpenClaw version:** 2026.05.22 **Provider:** OpenRouter **Models tested:** qwen/qwen3-coder:free moonshotai/kimi-k2.

### #86776 fix(models): apply provider policy defaults to inline models

- bucket: stale_unassigned
- author: kierandotai
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: S, proof: supplied, P2, rating: 🌊 off-meta tidepool, merge-risk: 🚨 compatibility
- updated: 2026-05-29T05:15:01Z
- body excerpt: ## Summary - apply provider policy config defaults when building inline provider models - ensure Anthropic inline provider entries inherit the default `anthropic-messages` API - preserve model-level `api`/`baseUrl` precedence over provider-level defaults ## Re

### #87122 Avoid profile cooldowns for provider overloads

- bucket: needs_proof
- author: cbcampos
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: XS, triage: needs-real-behavior-proof, P2, rating: 🌊 off-meta tidepool, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider
- updated: 2026-05-29T05:15:30Z
- body excerpt: ## Summary\n- Record provider overloaded failures without setting auth-profile cooldownUntil\n- Preserve cooldown/disable behavior for rate-limit, auth, and billing failures\n- Update fallback and auth-profile tests for repeated overload attempts\n\n## Testing

### #86913 fix(gateway): expose restart pending state

- bucket: stale_unassigned
- author: Dizesales
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, gateway, size: M, proof: supplied, extensions: admin-http-rpc, P2, rating: 🌊 off-meta tidepool, merge-risk: 🚨 compatibility
- updated: 2026-05-29T05:15:31Z
- body excerpt: ## Summary - add read-only `gateway.restart.pending` state for restart/update guards - expose scheduled, preparing, active deferral, unconsumed signal, delay, reason, and deferral timeout state - register the method as `operator.read`, expose it through admin 

