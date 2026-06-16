---
repo: openclaw/openclaw
cluster_id: pr-close-canary-70630-20260616-bulk
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
  - "#78228"
candidates:
  - "#70630"
  - "#78228"
cluster_refs:
  - "#70630"
  - "#78228"
overlap_policy: "skip-any"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "Close-only canary: #70630 was planned as fixed by merged #78228 in run 27597145042. Re-fetch live state and only close if #70630 remains open and #78228 is still merged. Because #78228 is already merged/closed, use candidate_fix rather than canonical for the close action."
notes: "Generated from ProjectClownfish result pr-inventory-mixed-20260616T015330-039 after live refetch on 2026-06-16."
---

# PR Close Canary #70630

## Goal

Run one live close-only cleanup pass. Hydrate #70630 and #78228, then emit at most one planned close action for #70630. Do not merge, fix, raise a PR, or close the merged candidate.

## Live Refetch Baseline

- target: #70630 fix(telegram): keep no-visible direct turns silent
- target live state at generation: OPEN
- target updatedAt at generation: 2026-06-15T16:29:30Z
- canonical/candidate: #78228 fix(telegram): keep no-response DM turns quiet (no silent-reply rewrite)
- canonical/candidate live state at generation: MERGED
- canonical/candidate mergedAt at generation: 2026-05-10T04:26:01Z
- source result: results/runs/27597145042.json

## Instructions

If #70630 is still open and #78228 is still merged, prefer `close_fixed_by_candidate` with `candidate_fix: "#78228"` for #70630. Do not emit `close_superseded` with closed/merged #78228 in `canonical`; merged PRs are candidate fixes, not surviving open canonicals. Mention both PR/issue URLs in the close comment and preserve contributor/user context. If either live state changed, keep the target open or mark the exact blocker with `needs_human`.
