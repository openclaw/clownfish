---
repo: openclaw/openclaw
cluster_id: pr-inventory-needs_proof-20260615T060018-360
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
  - "#92860"
  - "#87259"
cluster_refs:
  - "#92860"
  - "#87259"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "This is a PR inventory classification shard, not a dedupe cluster. Classify each PR independently and do not invent a shared canonical."
notes: "Generated from local gitcrawl open PR inventory on 2026-06-15T06:00:18.693Z; bucket=needs_proof; no GitHub mutation is possible in plan mode."
---

# PR Inventory needs_proof 360

This is a high-volume classification shard over open pull requests. It is not a dedupe cluster.

## Goal

Hydrate live GitHub state for each listed PR and emit one conservative action per PR. Prefer `keep_related`, `keep_independent`, `needs_human`, or `route_security`. Emit close-style planned actions only when fresh live evidence makes the PR boringly superseded, duplicate, abandoned, or low-signal under existing policies. For `target_updated_at`, copy only the hydrated value from the Cluster preflight artifact; do not use gitcrawl snapshot timestamps from this job body.

## Inventory

### #92860 #92077: skills/ClawHub: add sourceUrl to skill metadata schema and CLI display

- bucket: needs_proof
- author: mmyzwl
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: web-ui, gateway, cli, size: XS, proof: supplied, P3, rating: 🦪 silver shellfish, merge-risk: 🚨 automation, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T04:43:22Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Adds a `sourceUrl` field to skill metadata, allowing skill authors to declare a link to their source code repository in `SKILL.md` frontmatter (via `metadata.openclaw.sourceUrl`). This is the first deliverable for ClawHub provenance transparency (as

### #87259 Fix MiniMax usage count parsing

- bucket: needs_proof
- author: cbcampos
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T04:43:44Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary\n- Treat MiniMax current_interval_usage_count/current_weekly_usage_count as consumed usage, not remaining quota\n- Correct stale tests that inverted MiniMax usage math\n- Prevent false low-remaining reports when the web portal still shows available 

