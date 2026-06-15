---
repo: openclaw/openclaw
cluster_id: pr-inventory-needs_proof-20260615T060018-245
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
  - "#60842"
  - "#57597"
  - "#56858"
  - "#56420"
  - "#58360"
  - "#58434"
  - "#56861"
  - "#57889"
  - "#56866"
  - "#56830"
cluster_refs:
  - "#60842"
  - "#57597"
  - "#56858"
  - "#56420"
  - "#58360"
  - "#58434"
  - "#56861"
  - "#57889"
  - "#56866"
  - "#56830"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "This is a PR inventory classification shard, not a dedupe cluster. Classify each PR independently and do not invent a shared canonical."
notes: "Generated from local gitcrawl open PR inventory on 2026-06-15T06:00:18.682Z; bucket=needs_proof; no GitHub mutation is possible in plan mode."
---

# PR Inventory needs_proof 245

This is a high-volume classification shard over open pull requests. It is not a dedupe cluster.

## Goal

Hydrate live GitHub state for each listed PR and emit one conservative action per PR. Prefer `keep_related`, `keep_independent`, `needs_human`, or `route_security`. Emit close-style planned actions only when fresh live evidence makes the PR boringly superseded, duplicate, abandoned, or low-signal under existing policies. For `target_updated_at`, copy only the hydrated value from the Cluster preflight artifact; do not use gitcrawl snapshot timestamps from this job body.

## Inventory

### #60842 fix(agents): re-expose toolsAllow core tools in embedded runs

- bucket: needs_proof
- author: ricoyudog
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, stale, size: S, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-10T06:07:11Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Describe the problem and fix in 2–5 bullets: - Problem: embedded runs only post-filtered `toolsAllow` after `createOpenClawCodingTools`, so restrictive config allowlists could remove `exec`/`read`/`write` before `toolsAllow` had any effect. - Why it

### #57597 fix(acp): persist spawn labels in target session store

- bucket: needs_proof
- author: guanyu-zhang
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, triage: needs-real-behavior-proof, P2, rating: 🌊 off-meta tidepool, merge-risk: 🚨 session-state
- gitcrawl snapshot updated: 2026-06-10T06:08:34Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Describe the problem and fix in 2–5 bullets: - Problem: `/acp spawn ... --label <name>` persisted the spawned ACP session metadata into the target agent store, but tried to persist the label into the requester store. - Why it matters: Cross-agent AC

### #56858 feat(context-pruning): cache media to disk during pruning instead of stripping

- bucket: needs_proof
- author: joe2643
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, agents, size: L, triage: needs-real-behavior-proof, P2, rating: 🌊 off-meta tidepool, merge-risk: 🚨 session-state, merge-risk: 🚨 security-boundary
- gitcrawl snapshot updated: 2026-06-10T06:08:34Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: Context pruning removes image/media blocks and replaces them with `[image removed during context pruning]`, losing media permanently from the session - Why it matters: Agents lose access to previously-shared images mid-conversation, degra

### #56420 fix: bind Claude permission replies to session

- bucket: needs_proof
- author: lifelikezzh
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, triage: needs-real-behavior-proof, P1, rating: 🌊 off-meta tidepool, merge-risk: 🚨 compatibility, merge-risk: 🚨 security-boundary
- gitcrawl snapshot updated: 2026-06-10T06:08:34Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ### Motivation - Fix a security issue where Claude permission replies (`yes/no <id>`) could be spoofed from any session because pending requests were keyed only by a short `request_id`. - Ensure permission replies are only accepted from the same session that o

### #58360 Plugins: add before_model_call and after_model_call hooks

- bucket: needs_proof
- author: totoyang
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: L, triage: needs-real-behavior-proof, P2, rating: 🌊 off-meta tidepool, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, merge-risk: 🚨 security-boundary
- gitcrawl snapshot updated: 2026-06-10T06:08:35Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Describe the problem and fix in 2–5 bullets: - Problem: `llm_input` / `llm_output` do not expose each real provider invocation, so plugins cannot observe per-call model input/output in embedded runs. - Why it matters: this makes model-call-level obs

### #58434 feat(openresponses): add per-request tool_deny override to /v1/responses

- bucket: needs_proof
- author: tonga54
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, gateway, agents, size: XS, triage: needs-real-behavior-proof, P2, rating: 🌊 off-meta tidepool, merge-risk: 🚨 security-boundary
- gitcrawl snapshot updated: 2026-06-10T06:08:36Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: the `/v1/responses` API has no way to exclude specific built-in tools (like web search/fetch) per request — tool policy is fixed at agent config time. - Why it matters: API consumers need to dynamically disable tools like `group:web` for 

### #56861 feat(signal): reply-target media, structured mentions, and data URI attachments

- bucket: needs_proof
- author: joe2643
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: signal, size: S, triage: needs-real-behavior-proof, P2, rating: 🌊 off-meta tidepool, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery
- gitcrawl snapshot updated: 2026-06-10T06:08:36Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: Signal channel lacks reply-target media support, structured mention detection, and remote signal-cli attachment handling - Why it matters: Users replying to media messages lose context; mention detection is basic; remote signal-cli setups

### #57889 fix(gateway): preserve operator scopes for token-authenticated non-local clients

- bucket: needs_proof
- author: Vitalcheffe
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, size: XS, triage: needs-real-behavior-proof, P1, rating: 🌊 off-meta tidepool, merge-risk: 🚨 auth-provider, merge-risk: 🚨 security-boundary
- gitcrawl snapshot updated: 2026-06-10T06:08:38Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Operators authenticated via Tailscale or trusted-proxy lose all declared scopes on connect, causing "missing scope: operator.write" errors. Fixes #51396, #57331, #46997, #48229. ## Root cause `handleMissingDeviceIdentity()` depends on `sharedAuthOk`

### #56866 feat(whatsapp): ACP session binding with media threading and prompt fixes

- bucket: needs_proof
- author: joe2643
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: whatsapp-web, size: L, triage: needs-real-behavior-proof, P1, rating: 🌊 off-meta tidepool, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, merge-risk: 🚨 security-boundary
- gitcrawl snapshot updated: 2026-06-10T06:08:38Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: WhatsApp has no ACP (Agent Communication Protocol) session support — no session routing, no media threading to Claude Code, no plugin hook integration - Why it matters: WhatsApp conversations cant leverage configured ACP bindings for agen

### #56830 Gateway/UI: clarify insecure-context device-auth errors

- bucket: needs_proof
- author: tonga54
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: web-ui, gateway, size: S, triage: needs-real-behavior-proof, P2, rating: 🌊 off-meta tidepool, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider
- gitcrawl snapshot updated: 2026-06-10T06:08:38Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - **Problem:** Control UI error/hint copy around device identity and insecure auth can mislead users into expecting remote plain-HTTP flows to work with `allowInsecureAuth`. - **Why it matters:** users spend time on non-working paths and misdiagnose

