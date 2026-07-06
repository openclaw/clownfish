---
repo: openclaw/openclaw
cluster_id: pr-close-canary-89768-20260615-volume-a
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
  - "#91331"
candidates:
  - "#89768"
  - "#91331"
cluster_refs:
  - "#89768"
  - "#91331"
overlap_policy: "skip-any"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "Close-only canary: #89768 was planned as superseded by merged #91331 in run 178151418603. Re-fetch live state and only close if #89768 remains open and #91331 is still merged."
notes: "Generated from ProjectClownfish result gitcrawl-46-bulk-plan-20260615-a after live refetch on 2026-06-15."
---

# PR Close Canary #89768

## Goal

Run one live close-only cleanup pass. Hydrate #89768 and #91331, then emit at most one planned close action for #89768. Do not merge, fix, raise a PR, or close the merged candidate.

## Live Refetch Baseline

- target: #89768 fix(mattermost): merge progress preview lines by identity instead of full overwrite
- target live state at generation: OPEN
- target updatedAt at generation: 2026-06-15T10:21:21Z
- candidate: #91331 fix(mattermost): merge progress preview lines by identity
- candidate live state at generation: MERGED
- candidate mergedAt at generation: 2026-06-14T14:58:54Z
- source result: results/runs/178151418603.json

## Instructions

If #89768 is still open and #91331 is still merged, prefer a credit-preserving `close_superseded` or `close_fixed_by_candidate` for #89768. Mention both PR/issue URLs in the close comment and preserve contributor/user context. If either live state changed, keep the target open or mark the exact blocker with `needs_human`.
