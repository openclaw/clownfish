---
repo: openclaw/openclaw
cluster_id: pr-close-canary-90512-20260615-volume-a
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
  - "#91181"
candidates:
  - "#90512"
  - "#91181"
cluster_refs:
  - "#90512"
  - "#91181"
overlap_policy: "skip-any"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "Close-only canary: #90512 was planned as superseded by merged #91181 in run 17815122592117610. Re-fetch live state and only close if #90512 remains open and #91181 is still merged."
notes: "Generated from ProjectClownfish result pr-inventory-mixed-20260615T060018-332 after live refetch on 2026-06-15."
---

# PR Close Canary #90512

## Goal

Run one live close-only cleanup pass. Hydrate #90512 and #91181, then emit at most one planned close action for #90512. Do not merge, fix, raise a PR, or close the merged candidate.

## Live Refetch Baseline

- target: #90512 fix: ignore canonical Windows gateway task names
- target live state at generation: OPEN
- target updatedAt at generation: 2026-06-13T15:14:59Z
- candidate: #91181 fix(daemon): strip schtasks backslash prefix when matching gateway task name
- candidate live state at generation: MERGED
- candidate mergedAt at generation: 2026-06-13T23:45:17Z
- source result: results/runs/17815122592117610.json

## Instructions

If #90512 is still open and #91181 is still merged, prefer a credit-preserving `close_superseded` or `close_fixed_by_candidate` for #90512. Mention both PR/issue URLs in the close comment and preserve contributor/user context. If either live state changed, keep the target open or mark the exact blocker with `needs_human`.
