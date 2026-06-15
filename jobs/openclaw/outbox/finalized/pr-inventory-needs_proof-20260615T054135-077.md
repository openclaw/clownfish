---
repo: openclaw/openclaw
cluster_id: pr-inventory-needs_proof-20260615T054135-077
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
  - "#56420"
  - "#56861"
  - "#56866"
  - "#58683"
  - "#57959"
  - "#56357"
  - "#54183"
  - "#57366"
  - "#57364"
  - "#58184"
cluster_refs:
  - "#56420"
  - "#56861"
  - "#56866"
  - "#58683"
  - "#57959"
  - "#56357"
  - "#54183"
  - "#57366"
  - "#57364"
  - "#58184"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "This is a PR inventory classification shard, not a dedupe cluster. Classify each PR independently and do not invent a shared canonical."
notes: "Generated from local gitcrawl open PR inventory on 2026-06-15T05:41:35.457Z; bucket=needs_proof; no GitHub mutation is possible in plan mode."
---

# PR Inventory needs_proof 77

This is a high-volume classification shard over open pull requests. It is not a dedupe cluster.

## Goal

Hydrate live GitHub state for each listed PR and emit one conservative action per PR. Prefer `keep_related`, `keep_independent`, `needs_human`, or `route_security`. Emit close-style planned actions only when fresh live evidence makes the PR boringly superseded, duplicate, abandoned, or low-signal under existing policies. For `target_updated_at`, copy only the hydrated value from the Cluster preflight artifact; do not use gitcrawl snapshot timestamps from this job body.

## Inventory

### #56420 fix: bind Claude permission replies to session

- bucket: needs_proof
- author: lifelikezzh
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, triage: needs-real-behavior-proof, P1, rating: 🌊 off-meta tidepool, merge-risk: 🚨 compatibility, merge-risk: 🚨 security-boundary
- gitcrawl snapshot updated: 2026-06-10T06:08:34Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ### Motivation - Fix a security issue where Claude permission replies (`yes/no <id>`) could be spoofed from any session because pending requests were keyed only by a short `request_id`. - Ensure permission replies are only accepted from the same session that o

### #56861 feat(signal): reply-target media, structured mentions, and data URI attachments

- bucket: needs_proof
- author: joe2643
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: signal, size: S, triage: needs-real-behavior-proof, P2, rating: 🌊 off-meta tidepool, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery
- gitcrawl snapshot updated: 2026-06-10T06:08:36Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: Signal channel lacks reply-target media support, structured mention detection, and remote signal-cli attachment handling - Why it matters: Users replying to media messages lose context; mention detection is basic; remote signal-cli setups

### #56866 feat(whatsapp): ACP session binding with media threading and prompt fixes

- bucket: needs_proof
- author: joe2643
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: whatsapp-web, size: L, triage: needs-real-behavior-proof, P1, rating: 🌊 off-meta tidepool, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, merge-risk: 🚨 security-boundary
- gitcrawl snapshot updated: 2026-06-10T06:08:38Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: WhatsApp has no ACP (Agent Communication Protocol) session support — no session routing, no media threading to Claude Code, no plugin hook integration - Why it matters: WhatsApp conversations cant leverage configured ACP bindings for agen

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

