---
repo: openclaw/openclaw
cluster_id: pr-inventory-needs_proof-20260615T060018-201
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
  - "#67669"
  - "#67103"
  - "#67623"
  - "#67432"
  - "#50359"
  - "#67444"
  - "#67662"
  - "#67174"
  - "#68019"
  - "#68283"
cluster_refs:
  - "#67669"
  - "#67103"
  - "#67623"
  - "#67432"
  - "#50359"
  - "#67444"
  - "#67662"
  - "#67174"
  - "#68019"
  - "#68283"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "This is a PR inventory classification shard, not a dedupe cluster. Classify each PR independently and do not invent a shared canonical."
notes: "Generated from local gitcrawl open PR inventory on 2026-06-15T06:00:18.678Z; bucket=needs_proof; no GitHub mutation is possible in plan mode."
---

# PR Inventory needs_proof 201

This is a high-volume classification shard over open pull requests. It is not a dedupe cluster.

## Goal

Hydrate live GitHub state for each listed PR and emit one conservative action per PR. Prefer `keep_related`, `keep_independent`, `needs_human`, or `route_security`. Emit close-style planned actions only when fresh live evidence makes the PR boringly superseded, duplicate, abandoned, or low-signal under existing policies. For `target_updated_at`, copy only the hydrated value from the Cluster preflight artifact; do not use gitcrawl snapshot timestamps from this job body.

## Inventory

### #67669 Add custom-test sub command to verify configured custom providers

- bucket: needs_proof
- author: qidu
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: cli, commands, size: M, triage: needs-real-behavior-proof, P2, rating: 🌊 off-meta tidepool, merge-risk: 🚨 automation, merge-risk: 🚨 auth-provider, merge-risk: 🚨 security-boundary
- gitcrawl snapshot updated: 2026-06-07T05:04:47Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Describe the problem and fix in 2–5 bullets: - Problem: It is easy to make errors when user configuring custom provider models by themselves. - Why it matters: verify custom llm models to make user understand why openclaw works or not. - What change

### #67103 feat: Add LaTeX math rendering via KaTeX in Control UI chat

- bucket: needs_proof
- author: ImortalMask
- author association: FIRST_TIMER
- draft: no
- assignees: none
- labels: app: web-ui, size: M, triage: needs-real-behavior-proof, P2, rating: 🌊 off-meta tidepool, merge-risk: 🚨 compatibility, merge-risk: 🚨 security-boundary, merge-risk: 🚨 availability
- gitcrawl snapshot updated: 2026-06-07T05:04:49Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: # feat: Add LaTeX math rendering via KaTeX in Control UI chat ## Summary Adds native LaTeX math rendering to the Control UI chat using [KaTeX](https://katex.org/). Users can now write `$...$` for inline math and `$$...$$` for display math in chat messages, and

### #67623 fix: Change the scope of the variable SANDBOX_BACKEND_FACTORIES from …

- bucket: needs_proof
- author: earon-han
- author association: FIRST_TIMER
- draft: no
- assignees: none
- labels: agents, size: XS, triage: blank-template, triage: needs-real-behavior-proof, P1, rating: 🌊 off-meta tidepool
- gitcrawl snapshot updated: 2026-06-07T05:04:50Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: …module-level to process-level global(#67610) ## Summary Describe the problem and fix in 2–5 bullets: If this PR fixes a plugin beta-release blocker, title it `fix(<plugin-id>): beta blocker - <summary>` and link the matching `Beta blocker: <plugin-name> - <su

### #67432 fix(ui): add aria-label to pinned message Unpin button

- bucket: needs_proof
- author: akinshaywai
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: web-ui, size: XS, triage: needs-real-behavior-proof, P2, rating: 🌊 off-meta tidepool
- gitcrawl snapshot updated: 2026-06-07T05:04:56Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary The icon-only Unpin button in the pinned messages section had a `title="Unpin"` tooltip but no `aria-label`, so screen readers announced it as plain "button" with no context. **Fix:** Add `aria-label="Unpin"` to match the existing `title`. ## Files 

### #50359 Fix embedded read-image media fallback

- bucket: needs_proof
- author: wangyaok1
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: S, triage: needs-real-behavior-proof, mantis: telegram-visible-proof, P1, rating: 🧂 unranked krab, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-07T05:04:56Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - fall back to the originating tool args when embedded tool results contain image blocks but no `details.path` - thread the original `tool_execution_start` args into the non-verbose media emission path - add regression tests for direct extraction an

### #67444 fix(inter-session-completion-delivery): ensure completion delivery on ANNOUNCE_SKIP

- bucket: needs_proof
- author: duqaXxX
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: XS, triage: needs-real-behavior-proof, P2, rating: 🌊 off-meta tidepool, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery
- gitcrawl snapshot updated: 2026-06-07T05:05:10Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Problem Inter-session completion delivery could become unreliable when the announce path produced `ANNOUNCE_SKIP`. In that path, the announce result could suppress the visible completion flow too early, which meant the completion toward `REPLY_TO_SESSION` w

### #67662 fix(run): preserve model-scoped cooldown writes on incomplete turns

- bucket: needs_proof
- author: aboimpinto
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: S, triage: needs-real-behavior-proof, P2, rating: 🌊 off-meta tidepool, merge-risk: 🚨 auth-provider
- gitcrawl snapshot updated: 2026-06-07T05:05:11Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Closes #67661 ## Problem Fallback did not always work as expected because OpenClaw could keep retrying a model/provider that was already exhausted and still within its active cooldown window. In the incomplete-turn paths, the auth-profile failure write could o

### #67174 Teams: support separate graphTenantId for cross-tenant Graph API access

- bucket: needs_proof
- author: hddevteam
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, channel: msteams, size: M, triage: dirty-candidate, triage: needs-real-behavior-proof, P2, rating: 🌊 off-meta tidepool, merge-risk: 🚨 auth-provider, merge-risk: 🚨 security-boundary
- gitcrawl snapshot updated: 2026-06-07T05:05:11Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Adds `graphTenantId` config field (and `MSTEAMS_GRAPH_TENANT_ID` env var) to the Microsoft Teams provider so deployments where the bot app is registered in one Azure tenant but Teams/M365 data lives in a separate Microsoft 365 tenant can acquire tok

### #68019 feat(memory-core): add multi-strategy chunking support

- bucket: needs_proof
- author: Luuuk12321
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: extensions: memory-core, agents, size: XL, triage: needs-real-behavior-proof, P2, rating: 🌊 off-meta tidepool, merge-risk: 🚨 compatibility, merge-risk: 🚨 security-boundary
- gitcrawl snapshot updated: 2026-06-07T05:05:14Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - **Problem:** Memory search chunking was hardcoded to a single fixed-size strategy, offering no flexibility for different document types (markdown-heavy, narrative, multi-lingual, hierarchical) that benefit from different segmentation approaches. -

### #68283 fix(approvals): back off native handler bootstrap retries

- bucket: needs_proof
- author: TheDillonHall
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: M, triage: needs-real-behavior-proof, P2, rating: 🌊 off-meta tidepool, merge-risk: 🚨 auth-provider, merge-risk: 🚨 availability
- gitcrawl snapshot updated: 2026-06-07T05:05:15Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fixes a native approval handler bootstrap retry storm observed in production when the handler could not connect to the gateway because the local device lacked `operator.approvals`. The previous behavior retried every 1000ms for all startup failures.

