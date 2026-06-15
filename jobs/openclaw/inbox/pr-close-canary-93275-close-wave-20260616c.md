---
repo: openclaw/openclaw
cluster_id: pr-close-canary-93275-close-wave-20260616c
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
  - "#92819"
candidates:
  - "#93275"
  - "#92819"
cluster_refs:
  - "#93275"
  - "#92819"
overlap_policy: "skip-any"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "Close-only canary: #93275 was planned as superseded of open canonical #92819 in run pr-inventory-needs_proof-20260615T223445-049. Re-fetch live state and only close if #93275 remains open and #92819 remains open as the best canonical ref."
notes: "Generated from ProjectClownfish result pr-inventory-needs_proof-20260615T223445-049 after live refetch on 2026-06-15."
---

# PR Close Canary #93275

## Goal

Run one live close-only cleanup pass. Hydrate #93275 and #92819, then emit at most one planned close action for #93275. Do not merge, fix, raise a PR, or close the merged candidate.

## Live Refetch Baseline

- target: #93275 #92776: fix(agents): prevent indefinite session model pinning from polluted fallback origin
- target live state at generation: OPEN
- target updatedAt at generation: 2026-06-15T11:52:10Z
- canonical/candidate: #92819 Fix stale auto-fallback origin model selection
- canonical/candidate live state at generation: OPEN
- canonical/candidate mergedAt at generation: unknown
- source result: ../../../../../tmp/clownfish-plan98-results-flat/pr-inventory-needs_proof-20260615T223445-049.json

## Instructions

If #93275 is still open and #92819 is still open, prefer `close_superseded` with `canonical: "#92819"` for #93275. Do not use `candidate_fix` for open canonical refs. Mention both PR/issue URLs in the close comment and preserve contributor/user context. If either live state changed, keep the target open or mark the exact blocker with `needs_human`.
