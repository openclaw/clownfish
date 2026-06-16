---
repo: openclaw/openclaw
cluster_id: pr-close-canary-88936-20260616-bulk
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
  - "#88807"
candidates:
  - "#88936"
  - "#88807"
cluster_refs:
  - "#88936"
  - "#88807"
overlap_policy: "skip-any"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "Close-only canary: #88936 was planned as fixed by merged #88807 in run 27597143744. Re-fetch live state and only close if #88936 remains open and #88807 is still merged. Because #88807 is already merged/closed, use candidate_fix rather than canonical for the close action."
notes: "Generated from ProjectClownfish result pr-inventory-mixed-20260616T013940-015 after live refetch on 2026-06-16."
---

# PR Close Canary #88936

## Goal

Run one live close-only cleanup pass. Hydrate #88936 and #88807, then emit at most one planned close action for #88936. Do not merge, fix, raise a PR, or close the merged candidate.

## Live Refetch Baseline

- target: #88936 fix(plugins): skip broken web provider factories
- target live state at generation: OPEN
- target updatedAt at generation: 2026-06-14T07:17:31Z
- canonical/candidate: #88807 fix(plugins): isolate web provider factory failures
- canonical/candidate live state at generation: MERGED
- canonical/candidate mergedAt at generation: 2026-06-01T01:04:19Z
- source result: results/runs/27597143744.json

## Instructions

If #88936 is still open and #88807 is still merged, prefer `close_fixed_by_candidate` with `candidate_fix: "#88807"` for #88936. Do not emit `close_superseded` with closed/merged #88807 in `canonical`; merged PRs are candidate fixes, not surviving open canonicals. Mention both PR/issue URLs in the close comment and preserve contributor/user context. If either live state changed, keep the target open or mark the exact blocker with `needs_human`.
