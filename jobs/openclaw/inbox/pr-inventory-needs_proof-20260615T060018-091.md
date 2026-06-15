---
repo: openclaw/openclaw
cluster_id: pr-inventory-needs_proof-20260615T060018-091
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
  - "#75496"
  - "#75198"
  - "#76341"
  - "#75732"
  - "#75483"
  - "#75951"
  - "#75011"
  - "#76120"
  - "#75009"
  - "#72843"
cluster_refs:
  - "#75496"
  - "#75198"
  - "#76341"
  - "#75732"
  - "#75483"
  - "#75951"
  - "#75011"
  - "#76120"
  - "#75009"
  - "#72843"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "This is a PR inventory classification shard, not a dedupe cluster. Classify each PR independently and do not invent a shared canonical."
notes: "Generated from local gitcrawl open PR inventory on 2026-06-15T06:00:18.668Z; bucket=needs_proof; no GitHub mutation is possible in plan mode."
---

# PR Inventory needs_proof 91

This is a high-volume classification shard over open pull requests. It is not a dedupe cluster.

## Goal

Hydrate live GitHub state for each listed PR and emit one conservative action per PR. Prefer `keep_related`, `keep_independent`, `needs_human`, or `route_security`. Emit close-style planned actions only when fresh live evidence makes the PR boringly superseded, duplicate, abandoned, or low-signal under existing policies. For `target_updated_at`, copy only the hydrated value from the Cluster preflight artifact; do not use gitcrawl snapshot timestamps from this job body.

## Inventory

### #75496 fix(pi-runner): re-apply tool allowlist before prompt dispatch

- bucket: needs_proof
- author: PfanP
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: S, triage: needs-real-behavior-proof, rating: 🌊 off-meta tidepool
- gitcrawl snapshot updated: 2026-05-31T04:59:52Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Fixes #74377. ## Summary - Telegram + direct Anthropic sends `tools: []` even when the runner builds 17 effective tools, so the agent emits `tool_use` as plain text. 100% reproducible. - `runEmbeddedAttempt` sets the allowlist once at session creation, but Pi'

### #75198 fix(models): resolve provider-qualified aliases in session switches

- bucket: needs_proof
- author: sahilsatralkar
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, agents, size: S, triage: needs-real-behavior-proof, rating: 🌊 off-meta tidepool
- gitcrawl snapshot updated: 2026-05-31T04:59:54Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Describe the problem and fix in 2–5 bullets: If this PR fixes a plugin beta-release blocker, title it `fix(<plugin-id>): beta blocker - <summary>` and link the matching `Beta blocker: <plugin-name> - <summary>` issue labeled `beta-blocker`. Contribu

### #76341 fix(slack): make tool-progress draft preview ephemeral; preserve agent text segments

- bucket: needs_proof
- author: ShadowWalker2014
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, channel: slack, scripts, size: S, triage: needs-real-behavior-proof, P2, rating: 🌊 off-meta tidepool, merge-risk: 🚨 message-delivery
- gitcrawl snapshot updated: 2026-05-31T04:59:56Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Problem The Slack `Working…\n• …` draft preview is meant to scaffold tool-execution visibility while an agent runs. Today, those scaffolding messages linger as separate Slack messages every time the agent emits a new assistant-message segment mid-turn, or f

### #75732 fix: graceful Sharp fallback to libvips on SSE2-only CPUs

- bucket: needs_proof
- author: 1yihui
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, triage: needs-real-behavior-proof, rating: 🌊 off-meta tidepool
- gitcrawl snapshot updated: 2026-05-31T04:59:57Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary When Sharp's prebuilt linux-x64 binary fails to load (e.g. on virtualized SSE2-only CPUs like Intel N355 in Common KVM), image optimization now gracefully falls back to libvips CLI (vipsthumbnail) instead of throwing a generic "Failed to optimize im

### #75483 fix(cli-runner): classify session_expired when CLI returns errors[] without result

- bucket: needs_proof
- author: probepark
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: S, triage: needs-real-behavior-proof, rating: 🌊 off-meta tidepool
- gitcrawl snapshot updated: 2026-05-31T05:00:04Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary When the Claude CLI emits an `error_during_execution` result event with an `errors:[...]` array but `result:null` (the actual format for "No conversation found with session ID" failures), `createResultError` falls back to `"Claude CLI failed."` and 

### #75951 fix(memory-core): add actionable remediation hints for memory search embedding errors

- bucket: needs_proof
- author: QihongRuan
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: extensions: memory-core, size: S, triage: needs-real-behavior-proof, rating: 🌊 off-meta tidepool
- gitcrawl snapshot updated: 2026-05-31T05:00:06Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fresh port of #55684 onto current `main` (the source branch was 16k commits behind and unmergeable). Adds actionable remediation hints when `memory_search` or `openclaw memory status` surfaces an embedding-provider failure, so leaked-key, quota, and

### #75011 pairing.md documents that commands are dropped during the pending st…

- bucket: needs_proof
- author: Angfr95
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, gateway, size: XS, triage: low-signal-docs, triage: refactor-only, triage: blank-template, triage: needs-real-behavior-proof, P3, rating: 🦐 gold shrimp, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-05-31T05:00:06Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Problem: pairing.md documents that commands are dropped during the pending state but provides no operator guidance for recovery. Solution: add a Troubleshooting section covering commands dropped before pairing approval, pending requests not appearing, and stal

### #76120 [codex] Suppress empty native reasoning placeholders

- bucket: needs_proof
- author: pradeep7127
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: XS, triage: needs-real-behavior-proof, rating: 🌊 off-meta tidepool
- gitcrawl snapshot updated: 2026-05-31T05:00:07Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Stop fabricating a visible reasoning placeholder when a native reasoning block has only a signature and no summary text. - Preserve normal reasoning display when the provider returns actual thinking/summary text. - Add regression coverage for payl

### #75009 Add WhatsApp DM message-tool reply mode

- bucket: needs_proof
- author: asteinberger
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, channel: whatsapp-web, gateway, agents, size: L, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-05-31T05:00:14Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Describe the problem and fix in 2-5 bullets: - Problem: WhatsApp DMs used automatic final-reply delivery while groups used `message_tool_only`, so DMs could not reliably show live `message(action=send)` updates. - Why it matters: Users who want What

### #72843 fix(agents): warm context-window cache for the gateway daemon

- bucket: needs_proof
- author: jakepresent
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: S, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 availability, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-05-31T05:00:26Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## What The long-running gateway daemon never warms the context-window cache, so synchronous lookups on the status path return `DEFAULT_CONTEXT_TOKENS = 200_000` until the first agent run completes. That value then gets persisted onto the session record and ra

