---
repo: openclaw/openclaw
cluster_id: pr-close-canary-85464-20260615-a
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
  - "#85619"
candidates:
  - "#85464"
  - "#85619"
cluster_refs:
  - "#85464"
  - "#85619"
overlap_policy: "skip-any"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "Close-only canary: #85464 was planned as fixed by merged #85619 in run 27527725280. Re-fetch live state and only close if #85464 remains open and #85619 is still merged."
notes: "Generated from ProjectClownfish full PR inventory result pr-inventory-mixed-20260615T060018-025 after live refetch on 2026-06-15."
---

# PR Close Canary #85464

## Goal

Run one live close-only cleanup pass. Hydrate #85464 and #85619, then emit at most one planned close action for #85464. Do not merge, fix, raise a PR, or close the merged candidate.

## Live Refetch Baseline

- target: #85464 fix(status): show configured cost for aws-sdk models
- target live state at generation: OPEN
- target updatedAt at generation: 2026-06-15T02:43:21Z
- candidate: #85619 fix(status): show configured cost for aws-sdk models
- candidate live state at generation: MERGED
- candidate mergedAt at generation: 2026-05-23T14:49:57Z
- source result: results/runs/27527725280.json

## Instructions

If #85464 is still open and #85619 is still merged, prefer a credit-preserving `close_fixed_by_candidate` action for #85464. Mention both PR URLs in the close comment and preserve the contributor's status/cost-display proof as context. If either live state changed, keep the target open or mark the exact blocker with `needs_human`.
