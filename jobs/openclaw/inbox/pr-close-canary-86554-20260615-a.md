---
repo: openclaw/openclaw
cluster_id: pr-close-canary-86554-20260615-a
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
  - "#87593"
candidates:
  - "#86554"
  - "#87593"
cluster_refs:
  - "#86554"
  - "#87593"
overlap_policy: "skip-any"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "Close-only canary: #86554 was planned as fixed by merged #87593 in run 27527777002. Re-fetch live state and only close if #86554 remains open and #87593 is still merged."
notes: "Generated from ProjectClownfish full PR inventory result pr-inventory-mixed-20260615T060018-055 after live refetch on 2026-06-15."
---

# PR Close Canary #86554

## Goal

Run one live close-only cleanup pass. Hydrate #86554 and #87593, then emit at most one planned close action for #86554. Do not merge, fix, raise a PR, or close the merged candidate.

## Live Refetch Baseline

- target: #86554 fix(agents): add missing DeepSeek V4 proxy models to reasoning_content replay set
- target live state at generation: OPEN
- target updatedAt at generation: 2026-06-14T17:20:03Z
- candidate: #87593 fix(agents): preserve reasoning_content replay across DeepSeek tier suffixes
- candidate live state at generation: MERGED
- candidate mergedAt at generation: 2026-05-28T15:25:55Z
- source result: results/runs/27527777002.json

## Instructions

If #86554 is still open and #87593 is still merged, prefer a credit-preserving `close_fixed_by_candidate` action for #86554. Mention both PR URLs in the close comment and preserve the contributor's DeepSeek replay coverage as context. If either live state changed, keep the target open or mark the exact blocker with `needs_human`.
