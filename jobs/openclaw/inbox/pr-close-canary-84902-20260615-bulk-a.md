---
repo: openclaw/openclaw
cluster_id: pr-close-canary-84902-20260615-bulk-a
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
  - "#74273"
candidates:
  - "#84902"
  - "#74273"
cluster_refs:
  - "#84902"
  - "#74273"
overlap_policy: "skip-any"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "Close-only canary: #84902 was planned as covered by merged #74273 in run 27520818217. Re-fetch live state and only close if #84902 remains open and #74273 is still merged. Because #74273 is already merged/closed, use candidate_fix rather than canonical for the close action."
notes: "Generated from ProjectClownfish result gitcrawl-176-bulk-plan-20260615-a after live refetch on 2026-06-15."
---

# PR Close Canary #84902

## Goal

Run one live close-only cleanup pass. Hydrate #84902 and #74273, then emit at most one planned close action for #84902. Do not merge, fix, raise a PR, or close the merged candidate.

## Live Refetch Baseline

- target: #84902 fix(openai): honor provider thinking profiles
- target live state at generation: OPEN
- target updatedAt at generation: 2026-06-15T02:05:27Z
- candidate: #74273 fix: honor configured xhigh thinking compat
- candidate live state at generation: MERGED
- candidate mergedAt at generation: 2026-04-29T10:35:03Z
- source result: results/runs/27520818217.json

## Instructions

If #84902 is still open and #74273 is still merged, prefer `close_fixed_by_candidate` with `candidate_fix: "#74273"` for #84902. Do not emit `close_superseded` with closed/merged #74273 in `canonical`; merged PRs are candidate fixes, not surviving open canonicals. Mention both PR/issue URLs in the close comment and preserve contributor/user context. If either live state changed, keep the target open or mark the exact blocker with `needs_human`.
