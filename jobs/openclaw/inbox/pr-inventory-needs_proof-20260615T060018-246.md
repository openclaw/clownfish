---
repo: openclaw/openclaw
cluster_id: pr-inventory-needs_proof-20260615T060018-246
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
  - "#58683"
  - "#57959"
  - "#56357"
  - "#54183"
  - "#57366"
  - "#57364"
  - "#58184"
  - "#56545"
  - "#58482"
  - "#56499"
cluster_refs:
  - "#58683"
  - "#57959"
  - "#56357"
  - "#54183"
  - "#57366"
  - "#57364"
  - "#58184"
  - "#56545"
  - "#58482"
  - "#56499"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "This is a PR inventory classification shard, not a dedupe cluster. Classify each PR independently and do not invent a shared canonical."
notes: "Generated from local gitcrawl open PR inventory on 2026-06-15T06:00:18.682Z; bucket=needs_proof; no GitHub mutation is possible in plan mode."
---

# PR Inventory needs_proof 246

This is a high-volume classification shard over open pull requests. It is not a dedupe cluster.

## Goal

Hydrate live GitHub state for each listed PR and emit one conservative action per PR. Prefer `keep_related`, `keep_independent`, `needs_human`, or `route_security`. Emit close-style planned actions only when fresh live evidence makes the PR boringly superseded, duplicate, abandoned, or low-signal under existing policies. For `target_updated_at`, copy only the hydrated value from the Cluster preflight artifact; do not use gitcrawl snapshot timestamps from this job body.

## Inventory

### #58683 feat(heartbeat): add time-of-day schedule for variable intervals

- bucket: needs_proof
- author: Travis-Barton
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, gateway, size: L, triage: needs-real-behavior-proof, P2, rating: 🌊 off-meta tidepool, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery
- gitcrawl snapshot updated: 2026-06-10T06:08:41Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - **Problem:** Heartbeat uses a single fixed interval (`heartbeat.every`), forcing a tradeoff between responsiveness (low intervals, high token cost) and economy (high intervals, unresponsive during active work). - **Why it matters:** Users want dif

### #57959 fix(agents): fallback retry image safety and partial execution detection

- bucket: needs_proof
- author: mitchmcalister
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: L, triage: needs-real-behavior-proof, P1, rating: 🌊 off-meta tidepool, merge-risk: 🚨 compatibility, merge-risk: 🚨 security-boundary
- gitcrawl snapshot updated: 2026-06-10T06:08:42Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - **Failure-mode-aware image handling:** Replace unconditional image stripping on fallback retry with `resolveRetryImages` — only strip on `format` errors (model can't handle images) or cross-provider retries (privacy boundary) - **Cross-provider im

### #56357 fix(control-ui): restore header logo and favicon display

- bucket: needs_proof
- author: yangyitao100
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: web-ui, gateway, size: S, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-10T06:08:43Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary After upgrading to 2026.3.24, the Control UI header logo (red lobster icon) and favicon are missing. The favicon.svg file exists and is accessible at `/favicon.svg`, but the UI doesn't display it. ## Root Cause `agentLogoUrl()` returned a relative p

### #54183 WhatsApp: add configurable send retry for transient network errors

- bucket: needs_proof
- author: hassansys2
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, channel: whatsapp-web, size: XL, triage: needs-real-behavior-proof, P2, rating: 🌊 off-meta tidepool, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery
- gitcrawl snapshot updated: 2026-06-10T06:08:43Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Closes #54103 ## Summary Adds configurable outbound send retry with exponential backoff for the WhatsApp channel, applied to all three send paths (text, media, poll). The retry is active by default with no config change needed. **What changed:** - `src/config/

### #57366 fix(msteams): extract emoji unicode from Teams CDN img tags instead of treating as image attachments

- bucket: needs_proof
- author: HangGlidersRule
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: msteams, size: S, triage: needs-real-behavior-proof, P2, rating: 🌊 off-meta tidepool, merge-risk: 🚨 message-delivery
- gitcrawl snapshot updated: 2026-06-10T06:08:55Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Problem When a Teams user sends an emoji (e.g. 👋), the Teams client wraps it as an HTML `<img>` tag pointing to `statics.teams.cdn.office.net` with the unicode character in the `alt` attribute: ```html <img src="https://statics.teams.cdn.office.net/.../wav

### #57364 fix(msteams): delete FileConsentCard after user accepts, declines, or upload expires

- bucket: needs_proof
- author: HangGlidersRule
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: msteams, size: S, triage: needs-real-behavior-proof, P2, rating: 🌊 off-meta tidepool, merge-risk: 🚨 message-delivery
- gitcrawl snapshot updated: 2026-06-10T06:09:02Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Problem The `FileConsentCard` (Allow/Decline prompt for file uploads) remains in the Teams chat after the user acts on it, cluttering the conversation with stale interactive cards. Users see orphaned Allow/Decline buttons even after files have been successf

### #58184 fix(gateway): restrict CSP connect-src to 'self', drop blanket ws:/wss: schemes

- bucket: needs_proof
- author: gavyngong
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, size: XS, triage: needs-real-behavior-proof, P2, rating: 🌊 off-meta tidepool, merge-risk: 🚨 compatibility, merge-risk: 🚨 security-boundary
- gitcrawl snapshot updated: 2026-06-10T06:09:05Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Narrow the Control UI `Content-Security-Policy` `connect-src` directive from `'self' ws: wss:` to just `'self'`, closing an overly permissive WebSocket data-exfiltration channel. ## Type of Change - [x] Bug fix (Security hardening) ## Scope - [x] Ga

### #56545 feat(cron): add agent-turn mode for failure alerts

- bucket: needs_proof
- author: andyk-ms
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, cli, size: XS, triage: needs-real-behavior-proof, P2, rating: 🌊 off-meta tidepool, merge-risk: 🚨 message-delivery, merge-risk: 🚨 security-boundary
- gitcrawl snapshot updated: 2026-06-10T06:09:13Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Closes #56521 ## What Adds a new `agent-turn` mode for cron job `failureAlert` that injects the error as a system event into the agent session instead of sending an outbound notification (Telegram/etc). ## Why When cron jobs fail, the current `announce` mode s

### #58482 fix(memory-host): add AbortSignal support to batch polling (OpenAI, Voyage, Gemini)

- bucket: needs_proof
- author: ViagraFixesMyBug
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, triage: needs-real-behavior-proof, P2, rating: 🌊 off-meta tidepool, merge-risk: 🚨 compatibility, merge-risk: 🚨 availability
- gitcrawl snapshot updated: 2026-06-10T06:09:19Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Add AbortSignal support to batch polling loops to enable immediate cancellation when clients disconnect. Problem When HTTP clients disconnect during batch embedding operations, server-side polling continues until timeout, wasting API quota. Solution - Replace 

### #56499 fix: add exponential backoff for secret provider resolution at startup

- bucket: needs_proof
- author: claygeo
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: whatsapp-web, gateway, size: S, triage: needs-real-behavior-proof, P1, rating: 🧂 unranked krab, merge-risk: 🚨 auth-provider, merge-risk: 🚨 message-delivery, merge-risk: 🚨 availability, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-10T06:09:24Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Problem Fixes #56217 When a secret provider (e.g., 1Password `op read`) fails transiently at startup, the gateway crashes immediately. If the process manager (launchd/systemd) restarts it, each restart fires N `op read` calls that fail again: ``` Gateway st

