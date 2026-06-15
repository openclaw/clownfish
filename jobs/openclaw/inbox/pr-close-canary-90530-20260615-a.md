---
repo: openclaw/openclaw
cluster_id: pr-close-canary-90530-20260615-a
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
  - "#90247"
candidates:
  - "#90530"
  - "#90247"
cluster_refs:
  - "#90530"
  - "#90247"
overlap_policy: "skip-any"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "Close-only canary: #90530 was planned as superseded/fixed by merged #90247 in run 27528270673. Re-fetch live state and only close if #90530 remains open and #90247 is still merged."
notes: "Generated from ProjectClownfish full PR inventory result pr-inventory-mixed-20260615T060018-214 after live refetch on 2026-06-15."
---

# PR Close Canary #90530

## Goal

Run one live close-only cleanup pass. Hydrate #90530 and #90247, then emit at most one planned close action for #90530. Do not merge, fix, raise a PR, or close the merged candidate.

## Live Refetch Baseline

- target: #90530 chore: formatDiskSpaceBytes emits "1024 MiB" instead of "1.0 GiB" a
- target live state at generation: OPEN
- target updatedAt at generation: 2026-06-07T20:03:31Z
- candidate: #90247 fix(disk-space): promote 1024 MiB to 1.0 GiB in disk warnings
- candidate live state at generation: MERGED
- candidate mergedAt at generation: 2026-06-13T13:45:52Z
- source result: results/runs/27528270673.json

## Instructions

If #90530 is still open and #90247 is still merged, prefer a credit-preserving `close_superseded` or `close_fixed_by_candidate` action for #90530. Mention both PR URLs in the close comment. If either live state changed, keep the target open or mark the exact blocker with `needs_human`.
