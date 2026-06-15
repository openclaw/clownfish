---
repo: openclaw/openclaw
cluster_id: pr-close-canary-78966-20260615-a
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
  - "#85323"
candidates:
  - "#78966"
  - "#85323"
cluster_refs:
  - "#78966"
  - "#85323"
overlap_policy: "skip-any"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "Close-only canary: #78966 was planned as superseded by merged #85323 in run 27527941558. Re-fetch live state and only close if #78966 remains open and #85323 is still merged."
notes: "Generated from ProjectClownfish full PR inventory result pr-inventory-mixed-20260615T060018-108 after live refetch on 2026-06-15."
---

# PR Close Canary #78966

## Goal

Run one live close-only cleanup pass. Hydrate #78966 and #85323, then emit at most one planned close action for #78966. Do not merge, fix, raise a PR, or close the merged candidate.

## Live Refetch Baseline

- target: #78966 docs(memory): align memorySearch.cache.enabled default with runtime
- target live state at generation: OPEN
- target updatedAt at generation: 2026-06-14T20:34:14Z
- candidate: #85323 docs: align memorySearch cache.enabled default with runtime (true)
- candidate live state at generation: MERGED
- candidate mergedAt at generation: 2026-05-22T16:58:57Z
- source result: results/runs/27527941558.json

## Instructions

If #78966 is still open and #85323 is still merged, prefer a credit-preserving `close_superseded` action for #78966. Mention both PR URLs in the close comment and preserve the contributor's docs intent as context. If either live state changed, keep the target open or mark the exact blocker with `needs_human`.
