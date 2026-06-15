---
repo: openclaw/openclaw
cluster_id: pr-inventory-needs_proof-20260615T085227-045
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
  - "#56785"
  - "#59141"
cluster_refs:
  - "#56785"
  - "#59141"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "This is a PR inventory classification shard, not a dedupe cluster. Classify each PR independently and do not invent a shared canonical."
notes: "Generated from local gitcrawl open PR inventory on 2026-06-15T08:52:27.460Z; bucket=needs_proof; no GitHub mutation is possible in plan mode."
---

# PR Inventory needs_proof 45

This is a high-volume classification shard over open pull requests. It is not a dedupe cluster.

## Goal

Hydrate live GitHub state for each listed PR and emit one conservative action per PR. Prefer `keep_related`, `keep_independent`, `needs_human`, or `route_security`. Emit close-style planned actions only when fresh live evidence makes the PR boringly superseded, duplicate, abandoned, or low-signal under existing policies. For `target_updated_at`, copy only the hydrated value from the Cluster preflight artifact; do not use gitcrawl snapshot timestamps from this job body.

## Inventory

### #56785 Sandbox: add actionable guidance when python3 is missing

- bucket: needs_proof
- author: tonga54
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: S, triage: needs-real-behavior-proof, P2, rating: 🦪 silver shellfish, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-13T06:21:19Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Describe the problem and fix in 2–5 bullets: - Problem: when sandbox mutation helpers fail with `python3: not found`, users only see a raw shell error and cannot quickly recover. - Why it matters: write/edit flows fail with opaque errors, which look

### #59141 fix(memory-lancedb): prefer newer memories for latest queries

- bucket: needs_proof
- author: slip17mc
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: extensions: memory-lancedb, size: L, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 session-state, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-13T06:21:58Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - detect freshness-sensitive prompts in `memory-lancedb` (latest/last/most recent/newest/current/recent) - widen candidate recall and rerank recalled memories using recency + semantic similarity - surface timestamp/provenance hints in freshness-sens
