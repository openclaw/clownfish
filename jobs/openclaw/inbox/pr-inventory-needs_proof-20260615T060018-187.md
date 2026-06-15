---
repo: openclaw/openclaw
cluster_id: pr-inventory-needs_proof-20260615T060018-187
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
  - "#62937"
  - "#62528"
  - "#62338"
  - "#62503"
  - "#61675"
  - "#63015"
  - "#62956"
  - "#64540"
  - "#64907"
  - "#62722"
cluster_refs:
  - "#62937"
  - "#62528"
  - "#62338"
  - "#62503"
  - "#61675"
  - "#63015"
  - "#62956"
  - "#64540"
  - "#64907"
  - "#62722"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "This is a PR inventory classification shard, not a dedupe cluster. Classify each PR independently and do not invent a shared canonical."
notes: "Generated from local gitcrawl open PR inventory on 2026-06-15T06:00:18.676Z; bucket=needs_proof; no GitHub mutation is possible in plan mode."
---

# PR Inventory needs_proof 187

This is a high-volume classification shard over open pull requests. It is not a dedupe cluster.

## Goal

Hydrate live GitHub state for each listed PR and emit one conservative action per PR. Prefer `keep_related`, `keep_independent`, `needs_human`, or `route_security`. Emit close-style planned actions only when fresh live evidence makes the PR boringly superseded, duplicate, abandoned, or low-signal under existing policies. For `target_updated_at`, copy only the hydrated value from the Cluster preflight artifact; do not use gitcrawl snapshot timestamps from this job body.

## Inventory

### #62937 feat(exec): macOS sandbox-exec wrapper for host process isolation

- bucket: needs_proof
- author: Bobby-Bot-00
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docker, agents, size: M, triage: needs-real-behavior-proof, P1, rating: 🌊 off-meta tidepool, merge-risk: 🚨 compatibility, merge-risk: 🚨 security-boundary
- gitcrawl snapshot updated: 2026-06-06T04:47:05Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Implements macOS `sandbox-exec` wrapping for the `exec()` tool, addressing Issue #58730. ## Changes - **`src/agents/sandbox-exec-wrapper.ts`** — Built-in Seatbelt profile definitions for macOS sandbox - **`src/agents/bash-tools.sandbox-exec.test.ts`

### #62528 Gateway: add /hooks/message ingress with webhook auth parity

- bucket: needs_proof
- author: vrknetha
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, gateway, size: XL, triage: needs-real-behavior-proof, P2, rating: 🌊 off-meta tidepool, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery
- gitcrawl snapshot updated: 2026-06-06T04:47:06Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Adds a generic webhook ingress endpoint at `POST /hooks/message` with auth + safety parity to existing webhook routes, and enforces single-responsibility boundaries between `/hooks/agent` and `/hooks/message`. Closes #62526. ## Single-Responsibility

### #62338 doctor(memory): surface FTS5 unavailable state in doctor checks

- bucket: needs_proof
- author: ZanderH-code
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, gateway, commands, size: S, triage: needs-real-behavior-proof, P2, rating: 🌊 off-meta tidepool, merge-risk: 🚨 automation
- gitcrawl snapshot updated: 2026-06-06T04:47:07Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fixes #62328 by making `openclaw doctor` visibly report when SQLite FTS5 is unavailable in the running gateway. - Extend `doctor.memory.status` payload with `fts` probe fields (`enabled`, `available`, `error`) - Thread that payload through `probeGat

### #62503 feat: add devcontainer for cross-platform development

- bucket: needs_proof
- author: urtabajev
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, size: M, triage: needs-real-behavior-proof, P2, rating: 🌊 off-meta tidepool, merge-risk: 🚨 compatibility, merge-risk: 🚨 security-boundary
- gitcrawl snapshot updated: 2026-06-06T04:47:08Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: OpenClaw cannot be fully developed on Windows — shell-based tests and setup scripts require Linux. - Why it matters: Contributors on Windows need a portable, reproducible dev environment. - What changed: Added a `.devcontainer/` setup (Do

### #61675 feat: fire session reset hooks for daily and idle resets

- bucket: needs_proof
- author: salvormallow
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, size: L, clawsweeper, triage: needs-real-behavior-proof, P2, rating: 🌊 off-meta tidepool, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state
- gitcrawl snapshot updated: 2026-06-06T04:47:18Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: Internal hooks and `before_reset` plugin hook only fire for manual `/new` and `/reset` commands, not for daily (4AM) or idle-timeout session resets. This means `session-memory` never saves on daily/idle resets. - Why it matters: 4 communi

### #63015 fix: honor filePath/path/media fallbacks in outbound reply normalization

- bucket: needs_proof
- author: tombensim
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, triage: needs-real-behavior-proof, P2, rating: 🌊 off-meta tidepool, merge-risk: 🚨 message-delivery
- gitcrawl snapshot updated: 2026-06-06T04:47:23Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - `normalizeOutboundReplyPayload` only checked `payload.mediaUrl`, silently dropping media when agents returned `filePath`, `path`, or `media` fields - This caused WhatsApp (and other channel) auto-replies to send plain text instead of attachments (

### #62956 fix(tui): surface error details and elapsed time in status bar on agent failures

- bucket: needs_proof
- author: zons-zhaozhy
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: M, triage: needs-real-behavior-proof, P2, rating: 🌊 off-meta tidepool, merge-risk: 🚨 session-state, merge-risk: 🚨 message-delivery, merge-risk: 🚨 security-boundary
- gitcrawl snapshot updated: 2026-06-06T04:47:25Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - **Problem**: When an agent run fails in the TUI, the status bar shows only `connected | error` with no diagnostic information. The user has no idea what went wrong (rate limit? timeout? model error?) or how long the operation ran before failing. -

### #64540 fix: treat empty heartbeat config as disabled (closes #64293)

- bucket: needs_proof
- author: xchunzhao
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS, triage: needs-real-behavior-proof, P2, rating: 🌊 off-meta tidepool, merge-risk: 🚨 compatibility, merge-risk: 🚨 availability
- gitcrawl snapshot updated: 2026-06-06T04:47:26Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - **Problem:** Setting `agents.defaults.heartbeat: {}` in config does not disable heartbeats — they still fire every 30 minutes, burning ~2M+ input tokens/day with zero user activity. - **Why it matters:** Users expect `heartbeat: {}` to mean "disab

### #64907 Plugin SDK: add text-only tool_result_before_model hook

- bucket: needs_proof
- author: sjz-ks
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, agents, size: XL, triage: dirty-candidate, triage: needs-real-behavior-proof, P2, rating: 🌊 off-meta tidepool, merge-risk: 🚨 compatibility, merge-risk: 🚨 security-boundary, merge-risk: 🚨 availability
- gitcrawl snapshot updated: 2026-06-06T04:47:30Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: plugins had no typed seam to canonicalize successful tool-result text before it became model-visible by default, so noisy tool output could leak into same-turn and future-turn context. - What changed: added synchronous `tool_result_before

### #62722 fix(gateway): use already-aborted signal in stopChannel fallback

- bucket: needs_proof
- author: pruthvishetty
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, size: XS, triage: refactor-only, triage: needs-real-behavior-proof, P2, rating: 🌊 off-meta tidepool
- gitcrawl snapshot updated: 2026-06-06T04:47:35Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - In `stopChannel`, when no `AbortController` exists for an account (i.e. no running task), the fallback `new AbortController().signal` creates a signal from an anonymous controller that **can never be aborted** - `stopAccount` implementations may u

