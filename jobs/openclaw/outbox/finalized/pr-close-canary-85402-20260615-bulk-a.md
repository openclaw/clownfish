---
repo: openclaw/openclaw
cluster_id: pr-close-canary-85402-20260615-bulk-a
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
  - "#87409"
candidates:
  - "#85402"
  - "#87409"
cluster_refs:
  - "#85402"
  - "#87409"
overlap_policy: "skip-any"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "Close-only canary: #85402 was planned as superseded by merged #87409 in run 27527725280. Re-fetch live state and only close if #85402 remains open and #87409 is still merged."
notes: "Generated from ProjectClownfish result pr-inventory-mixed-20260615T060018-025 after live refetch on 2026-06-15."
---

# PR Close Canary #85402

## Goal

Run one live close-only cleanup pass. Hydrate #85402 and #87409, then emit at most one planned close action for #85402. Do not merge, fix, raise a PR, or close the merged candidate.

## Live Refetch Baseline

- target: #85402 fix(agents): lock transcript-writing session events [AI-assisted]
- target live state at generation: OPEN
- target updatedAt at generation: 2026-06-15T03:56:23Z
- candidate: #87409 fix(agents): move session write lock into owned session runtime
- candidate live state at generation: MERGED
- candidate mergedAt at generation: 2026-05-27T21:17:35Z
- source result: results/runs/27527725280.json

## Instructions

If #85402 is still open and #87409 is still merged, prefer a credit-preserving `close_superseded` or `close_fixed_by_candidate` for #85402. Mention both PR/issue URLs in the close comment and preserve contributor/user context. If either live state changed, keep the target open or mark the exact blocker with `needs_human`.
