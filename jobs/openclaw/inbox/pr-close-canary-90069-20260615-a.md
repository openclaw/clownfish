---
repo: openclaw/openclaw
cluster_id: pr-close-canary-90069-20260615-a
mode: execute
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
  - failing_checks
  - conflicting_prs
  - unclear_canonical
  - broad_code_delta
canonical:
  - "#92343"
candidates:
  - "#90069"
  - "#92343"
cluster_refs:
  - "#90069"
  - "#92343"
overlap_policy: "skip-any"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "Close-only canary: #90069 was planned as superseded by merged #92343 in run 27528105766. Re-fetch live state and only close if #90069 remains open and #92343 is still merged."
notes: "Generated from ProjectClownfish full PR inventory result pr-inventory-mixed-20260615T060018-158 after live refetch on 2026-06-15."
---

# PR Close Canary #90069

## Goal

Run one live close-only cleanup pass. Hydrate #90069 and #92343, then emit at most one planned close action for #90069. Do not merge, fix, raise a PR, or close the merged candidate.

## Live Refetch Baseline

- target: #90069 docs: explain message tool turn termination
- target live state at generation: OPEN
- target updatedAt at generation: 2026-06-15T01:13:04Z
- candidate: #92343 fix(agent): continue after source message tool replies
- candidate live state at generation: MERGED
- candidate mergedAt at generation: 2026-06-12T16:14:58Z
- source result: results/runs/27528105766.json

## Instructions

If #90069 is still open and #92343 is still merged, prefer a credit-preserving `close_superseded` action for #90069. Mention both PR URLs in the close comment and explain that the merged behavior fix made the standalone docs PR stale. If either live state changed, keep the target open or mark the exact blocker with `needs_human`.
