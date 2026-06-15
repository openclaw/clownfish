---
repo: openclaw/openclaw
cluster_id: pr-close-canary-92759-20260615-volume-a
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
  - "#92897"
candidates:
  - "#92759"
  - "#92897"
cluster_refs:
  - "#92759"
  - "#92897"
overlap_policy: "skip-any"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "Close-only canary: #92759 was planned as superseded by merged #92897 in run 1781509753422095. Re-fetch live state and only close if #92759 remains open and #92897 is still merged."
notes: "Generated from ProjectClownfish result gitcrawl-98-bulk-plan-20260615-a after live refetch on 2026-06-15."
---

# PR Close Canary #92759

## Goal

Run one live close-only cleanup pass. Hydrate #92759 and #92897, then emit at most one planned close action for #92759. Do not merge, fix, raise a PR, or close the merged candidate.

## Live Refetch Baseline

- target: #92759 fix(memory): guard against missing agentIds in wiki artifact clone and sort
- target live state at generation: OPEN
- target updatedAt at generation: 2026-06-14T00:42:41Z
- candidate: #92897 fix(memory-wiki): tolerate public artifacts without agent ids
- candidate live state at generation: MERGED
- candidate mergedAt at generation: 2026-06-14T12:19:25Z
- source result: results/runs/1781509753422095.json

## Instructions

If #92759 is still open and #92897 is still merged, prefer a credit-preserving `close_superseded` or `close_fixed_by_candidate` for #92759. Mention both PR/issue URLs in the close comment and preserve contributor/user context. If either live state changed, keep the target open or mark the exact blocker with `needs_human`.
