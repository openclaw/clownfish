---
repo: openclaw/openclaw
cluster_id: pr-close-canary-95453-close-fixed-by-20260623a
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
  - "#95674"
candidates:
  - "#95453"
  - "#95674"
cluster_refs:
  - "#95453"
  - "#95674"
overlap_policy: "skip-any"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "Close-only canary: #95453 was planned as fixed by merged #95674 in run 27988609143. Re-fetch live state and only close if #95453 remains open and #95674 is still merged. Because #95674 is already merged/closed, use candidate_fix rather than canonical for the close action."
notes: "Generated from ProjectClownfish result live-pr-inventory-20260622T201622-001 after live refetch on 2026-06-22."
---

# PR Close Canary #95453

## Goal

Run one live close-only cleanup pass. Hydrate #95453 and #95674, then emit at most one planned close action for #95453. Do not merge, fix, raise a PR, or close the merged candidate.

## Live Refetch Baseline

- target: #95453 fix #95407: [Bug]: `cron` tool `add` action mangles certain key names in `job` parameter
- target live state at generation: OPEN
- target updatedAt at generation: 2026-06-22T05:08:39Z
- canonical/candidate: #95674 fix(cron): trim trailing whitespace from recognized job object keys
- canonical/candidate live state at generation: MERGED
- canonical/candidate mergedAt at generation: 2026-06-22T20:25:00Z
- source result: ProjectClownfish workflow run 27988609143

## Instructions

If #95453 is still open and #95674 is still merged, prefer `close_fixed_by_candidate` with `candidate_fix: "#95674"` for #95453. Do not emit `close_superseded` with closed/merged #95674 in `canonical`; merged PRs are candidate fixes, not surviving open canonicals. Mention both PR/issue URLs in the close comment and preserve contributor/user context. If either live state changed, keep the target open or mark the exact blocker with `needs_human`.
