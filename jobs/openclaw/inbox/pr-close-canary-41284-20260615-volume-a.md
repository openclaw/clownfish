---
repo: openclaw/openclaw
cluster_id: pr-close-canary-41284-20260615-volume-a
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
  - "#22773"
candidates:
  - "#41284"
  - "#22773"
cluster_refs:
  - "#41284"
  - "#22773"
overlap_policy: "skip-any"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "Close-only canary: #41284 was planned as superseded by merged #22773 in run 1781512259211769. Re-fetch live state and only close if #41284 remains open and #22773 is still merged."
notes: "Generated from ProjectClownfish result pr-inventory-mixed-20260615T060018-331 after live refetch on 2026-06-15."
---

# PR Close Canary #41284

## Goal

Run one live close-only cleanup pass. Hydrate #41284 and #22773, then emit at most one planned close action for #41284. Do not merge, fix, raise a PR, or close the merged candidate.

## Live Refetch Baseline

- target: #41284 fix(ios): read IDEProvisioningTeamByIdentifier
- target live state at generation: OPEN
- target updatedAt at generation: 2026-06-14T19:40:00Z
- candidate: #22773 fix(ios): support Xcode 16+ team detection and fix ntohl build error
- candidate live state at generation: MERGED
- candidate mergedAt at generation: 2026-02-24T15:02:28Z
- source result: results/runs/1781512259211769.json

## Instructions

If #41284 is still open and #22773 is still merged, prefer a credit-preserving `close_superseded` or `close_fixed_by_candidate` for #41284. Mention both PR/issue URLs in the close comment and preserve contributor/user context. If either live state changed, keep the target open or mark the exact blocker with `needs_human`.
