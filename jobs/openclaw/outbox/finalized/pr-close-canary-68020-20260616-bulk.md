---
repo: openclaw/openclaw
cluster_id: pr-close-canary-68020-20260616-bulk
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
  - "#84802"
candidates:
  - "#68020"
  - "#84802"
cluster_refs:
  - "#68020"
  - "#84802"
overlap_policy: "skip-any"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "Close-only canary: #68020 was planned as fixed by merged #84802 in run 27595877124. Re-fetch live state and only close if #68020 remains open and #84802 is still merged. Because #84802 is already merged/closed, use candidate_fix rather than canonical for the close action."
notes: "Generated from ProjectClownfish result gitcrawl-6-dedupe-only-20260429-remote after live refetch on 2026-06-16."
---

# PR Close Canary #68020

## Goal

Run one live close-only cleanup pass. Hydrate #68020 and #84802, then emit at most one planned close action for #68020. Do not merge, fix, raise a PR, or close the merged candidate.

## Live Refetch Baseline

- target: #68020 fix(memory-core): silence expected operator.admin scope miss in dreaming cleanup
- target live state at generation: OPEN
- target updatedAt at generation: 2026-06-15T17:48:45Z
- canonical/candidate: #84802 fix(memory-core): allow bounded dreaming session cleanup
- canonical/candidate live state at generation: MERGED
- canonical/candidate mergedAt at generation: 2026-05-21T04:45:19Z
- source result: results/runs/27595877124.json

## Instructions

If #68020 is still open and #84802 is still merged, prefer `close_fixed_by_candidate` with `candidate_fix: "#84802"` for #68020. Do not emit `close_superseded` with closed/merged #84802 in `canonical`; merged PRs are candidate fixes, not surviving open canonicals. Mention both PR/issue URLs in the close comment and preserve contributor/user context. If either live state changed, keep the target open or mark the exact blocker with `needs_human`.
