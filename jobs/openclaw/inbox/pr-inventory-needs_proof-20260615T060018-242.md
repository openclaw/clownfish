---
repo: openclaw/openclaw
cluster_id: pr-inventory-needs_proof-20260615T060018-242
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
  - "#55913"
  - "#54979"
  - "#55923"
  - "#58134"
  - "#57260"
  - "#57825"
  - "#54725"
  - "#58051"
  - "#57600"
  - "#58805"
cluster_refs:
  - "#55913"
  - "#54979"
  - "#55923"
  - "#58134"
  - "#57260"
  - "#57825"
  - "#54725"
  - "#58051"
  - "#57600"
  - "#58805"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "This is a PR inventory classification shard, not a dedupe cluster. Classify each PR independently and do not invent a shared canonical."
notes: "Generated from local gitcrawl open PR inventory on 2026-06-15T06:00:18.682Z; bucket=needs_proof; no GitHub mutation is possible in plan mode."
---

# PR Inventory needs_proof 242

This is a high-volume classification shard over open pull requests. It is not a dedupe cluster.

## Goal

Hydrate live GitHub state for each listed PR and emit one conservative action per PR. Prefer `keep_related`, `keep_independent`, `needs_human`, or `route_security`. Emit close-style planned actions only when fresh live evidence makes the PR boringly superseded, duplicate, abandoned, or low-signal under existing policies. For `target_updated_at`, copy only the hydrated value from the Cluster preflight artifact; do not use gitcrawl snapshot timestamps from this job body.

## Inventory

### #55913 fix(agents): add Doubao/BytePlus context caching prices and correct per-Mtok rates

- bucket: needs_proof
- author: jiangwenwei818
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: XS, triage: needs-real-behavior-proof, P2, rating: 🌊 off-meta tidepool, merge-risk: 🚨 compatibility
- gitcrawl snapshot updated: 2026-06-10T05:04:35Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Set non-zero `cacheRead` and `cacheWrite` pricing for Doubao (Volcengine) and BytePlus model catalogs - Corrected `input`/`output` prices from placeholder per-1K-token values to actual Volcano Engine published rates (per 1M tokens) - Added regress

### #54979 feat(feishu): add cardHeader config to hide card title header

- bucket: needs_proof
- author: tankyhsu
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, channel: feishu, size: XS, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-10T05:05:13Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Problem In the Feishu message list, each message preview only shows the card title (e.g. `🤖 Friday`), hiding the actual reply content. This makes it hard to scan conversations without opening each message. Introduced by #29938. ## Solution Add a `cardHeade

### #55923 fix: surface fake tool runs, placeholder replies, and legacy WS auth failures

- bucket: needs_proof
- author: cgdusek
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: web-ui, gateway, agents, size: L, clawsweeper, triage: needs-real-behavior-proof, P2, rating: 🌊 off-meta tidepool, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, merge-risk: 🚨 session-state
- gitcrawl snapshot updated: 2026-06-10T05:05:21Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Focused extraction of the core fix pieces from #40150 (which has merge conflicts and significant scope creep), targeting the remaining open symptoms of #40082 that were not addressed by #40008 (kimi tool schema, merged Mar 9) or #50930 (mid-turn 429

### #58134 Improve confirmation message clarity

- bucket: needs_proof
- author: JayBazuzi
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: stale, size: XS, triage: blank-template, triage: needs-real-behavior-proof, P3, rating: 🧂 unranked krab, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-10T05:07:32Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: none

### #57260 fix: dedupe discord target-validation retries

- bucket: needs_proof
- author: josephbergvinson
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, stale, size: S, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 availability, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-10T05:07:59Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fix a Discord messaging edge case where a failed send using a bare numeric recipient id can leave a stale `Message failed` warning visible even after an immediate successful retry using `channel:<id>`. This keeps the existing narrow behavior intact:

### #57825 Preserve session model overrides on generic persistence

- bucket: needs_proof
- author: realkim93
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, stale, size: S, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 auth-provider, merge-risk: 🚨 session-state, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-10T05:08:06Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Generic session persistence was clearing omitted override fields by default. That can drop a previously selected `/model` session override when a later non-model session write merges a partial entry. ## Repro 1. Set a per-session model with `/model`

### #54725 feat: thread sessionKey/sessionId into ProviderPrepareExtraParamsContext

- bucket: needs_proof
- author: Kyzcreig
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: XS, triage: needs-real-behavior-proof, P2, rating: 🌊 off-meta tidepool, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, merge-risk: 🚨 security-boundary
- gitcrawl snapshot updated: 2026-06-10T05:08:30Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Problem OpenClaw never sets the `user` field in LiteLLM completion requests. This means all interactive sessions appear blank in LiteLLM spend logs — impossible to distinguish Telegram vs Discord traffic, or attribute cost spikes to a specific session/chann

### #58051 fix: primary probe should not consume transient probe slot for same-provider fallbacks

- bucket: needs_proof
- author: Nicholasweng
- author association: FIRST_TIMER
- draft: no
- assignees: none
- labels: agents, stale, size: S, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 auth-provider, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-10T05:10:28Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Problem When the primary model is in cooldown and gets probed (near expiry), the probe failure marks the provider in `cooldownProbeUsedProviders`. This blocks same-provider fallback candidates from getting their own probe attempt, causing the fallback chain

### #57600 read: guard binary office documents from raw text output

- bucket: needs_proof
- author: jackdark425
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, stale, size: S, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 availability, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-10T05:10:31Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary This is a small first step toward better native document handling in OpenClaw. Today the `read` tool can end up returning raw binary-looking output for Office-style documents such as `.docx`, `.xlsx`, and `.pptx`, which wastes tokens and confuses th

### #58805 Plugins: preserve manifest skills on loaded plugin records

- bucket: needs_proof
- author: novisfff
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: stale, size: M, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-10T05:10:35Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: plugin manifests can declare `skills`, and `loadPluginManifestRegistry()` preserves that metadata, but loaded runtime `PluginRecord`s were dropping it. - Why it matters: runtime/status consumers end up seeing an incomplete plugin record e

