---
repo: openclaw/openclaw
cluster_id: pr-inventory-needs_proof-20260615T060018-204
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
  - "#66838"
  - "#67761"
  - "#68240"
  - "#69319"
  - "#66720"
  - "#68455"
  - "#66071"
  - "#69297"
  - "#69346"
  - "#69806"
cluster_refs:
  - "#66838"
  - "#67761"
  - "#68240"
  - "#69319"
  - "#66720"
  - "#68455"
  - "#66071"
  - "#69297"
  - "#69346"
  - "#69806"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "This is a PR inventory classification shard, not a dedupe cluster. Classify each PR independently and do not invent a shared canonical."
notes: "Generated from local gitcrawl open PR inventory on 2026-06-15T06:00:18.678Z; bucket=needs_proof; no GitHub mutation is possible in plan mode."
---

# PR Inventory needs_proof 204

This is a high-volume classification shard over open pull requests. It is not a dedupe cluster.

## Goal

Hydrate live GitHub state for each listed PR and emit one conservative action per PR. Prefer `keep_related`, `keep_independent`, `needs_human`, or `route_security`. Emit close-style planned actions only when fresh live evidence makes the PR boringly superseded, duplicate, abandoned, or low-signal under existing policies. For `target_updated_at`, copy only the hydrated value from the Cluster preflight artifact; do not use gitcrawl snapshot timestamps from this job body.

## Inventory

### #66838 fix(heartbeat): make cron event wrapper neutral so models execute embedded steps

- bucket: needs_proof
- author: rmfalco89
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS, triage: needs-real-behavior-proof, P2, rating: 🌊 off-meta tidepool, merge-risk: 🚨 message-delivery
- gitcrawl snapshot updated: 2026-06-07T05:06:26Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Make the cron / scheduled-heartbeat event wrapper neutral so models execute the embedded step silently instead of replying with descriptive text as if it were a user-visible message. ## Why Models treated the scheduled-event wrapper as a user prompt

### #67761 fix: remove truncated preview from inbound system events

- bucket: needs_proof
- author: jaredgalloway
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: msteams, channel: slack, size: XS, triage: needs-real-behavior-proof, P2, rating: 🌊 off-meta tidepool
- gitcrawl snapshot updated: 2026-06-07T05:06:33Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Removes the truncated 160-char message preview from system event headers for Slack, MS Teams, and Mattermost channels. ## Problem System events were including a truncated preview of the message body: ``` System: [2026-04-15 21:56:40 MDT] Slack DM fr

### #68240 feat(onboard): add --daemon-env flag to openclaw onboard --install-daemon

- bucket: needs_proof
- author: dlebee-agent
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: cli, commands, size: S, triage: needs-real-behavior-proof, P2, rating: 🌊 off-meta tidepool, merge-risk: 🚨 auth-provider, merge-risk: 🚨 security-boundary
- gitcrawl snapshot updated: 2026-06-07T05:06:38Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Fixes #67565 ## What Adds a repeatable `--daemon-env KEY=VALUE` option to `openclaw onboard --install-daemon` so that extra `Environment=` lines can be injected directly into the generated systemd unit at bootstrap time — no post-onboard restart required. ```b

### #69319 gateway: register skills.uninstall RPC (mirror of skills.install)

- bucket: needs_proof
- author: sk7n4k3d
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, app: macos, app: web-ui, gateway, agents, size: M, triage: needs-real-behavior-proof, P2, rating: 🌊 off-meta tidepool, merge-risk: 🚨 compatibility, merge-risk: 🚨 security-boundary, merge-risk: 🚨 availability
- gitcrawl snapshot updated: 2026-06-07T05:06:46Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Fixes #69299. Adds a `skills.uninstall` Gateway RPC method, mirroring `skills.install`, so operators can remove an installed ClawHub skill from the default agent workspace over the Gateway control plane. ## Changes - Schema: `SkillsUninstallParamsSchema` in `s

### #66720 fix: strip runtime-specific properties from sessions_spawn tool schema for provider compatibility

- bucket: needs_proof
- author: Gi99lin
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: S, triage: needs-real-behavior-proof, P2, rating: 🌊 off-meta tidepool, merge-risk: 🚨 compatibility
- gitcrawl snapshot updated: 2026-06-07T05:06:50Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Problem When OpenClaw sends the `sessions_spawn` tool schema to non-native OpenAI-compatible providers (e.g., via proxy gateways like OmniRoute → MiniMax, Codex proxy, or other OpenAI-compatible endpoints), the schema includes **all** runtime-specific param

### #68455 feat(feishu): allow custom accountId during Feishu channel onboarding

- bucket: needs_proof
- author: ahbi1006-hue
- author association: FIRST_TIMER
- draft: no
- assignees: none
- labels: channel: feishu, size: S, triage: needs-real-behavior-proof, P2, rating: 🌊 off-meta tidepool, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider
- gitcrawl snapshot updated: 2026-06-07T05:06:59Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Problem When adding a second Feishu IM channel in the same OpenClaw instance, the accountId is always forced to DEFAULT_ACCOUNT_ID ("default"), making it impossible to register multiple independent Feishu bots. ## Changes - `extensions/feishu/src/setup-surf

### #66071 Fix commentary leaks in OpenResponses HTTP streaming

- bucket: needs_proof
- author: cwmine
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, size: S, triage: needs-real-behavior-proof, P1, rating: 🧂 unranked krab, merge-risk: 🚨 message-delivery, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-07T05:07:00Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - stop streaming assistant commentary deltas to OpenResponses HTTP clients before the phase is known - keep completed OpenResponses output items tagged with the right phase so commentary + tool-call turns still preserve structure - add regression co

### #69297 fix(whatsapp): Add group admin privacy controls

- bucket: needs_proof
- author: haishmg
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, channel: whatsapp-web, agents, size: L, triage: needs-real-behavior-proof, P2, rating: 🌊 off-meta tidepool, merge-risk: 🚨 message-delivery, merge-risk: 🚨 security-boundary
- gitcrawl snapshot updated: 2026-06-07T05:07:01Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Closes #69233 ## What changed This adds an optional per-group WhatsApp admin override via `channels.whatsapp.groups.<jid>.admin` and wildcard `channels.whatsapp.groups."*".admin`. When an admin is configured for a group scope: - the configured E.164 number byp

### #69346 fix(embedded-runner): actionable diagnostic for empty-stream config errors

- bucket: needs_proof
- author: abajirao
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: M, triage: needs-real-behavior-proof, P2, rating: 🌊 off-meta tidepool, merge-risk: 🚨 availability
- gitcrawl snapshot updated: 2026-06-07T05:07:05Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Iteration log (review-driven changes since open) This PR has been through three rounds of bot review. Summary for human reviewers: | Commit | Source | Change | |---|---|---| | `a0426ed6c8` | Initial | Original `isLikelyConfigErrorEmptyStream` + `buildConfig

### #69806 test: stabilize config validation tests and npm execpath handling

- bucket: needs_proof
- author: alvian888
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: stale, size: XS, triage: needs-real-behavior-proof, P2, rating: 🌊 off-meta tidepool, merge-risk: 🚨 compatibility
- gitcrawl snapshot updated: 2026-06-07T05:07:07Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - isolate npm release command resolution test from host npm env (`npm_execpath`) - mock doctor contract registry in config validation tests to avoid expensive plugin discovery - add same registry mock to allowlist/webhook validation tests to prevent

