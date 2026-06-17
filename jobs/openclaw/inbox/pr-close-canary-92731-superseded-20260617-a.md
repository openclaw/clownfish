---
repo: openclaw/openclaw
cluster_id: pr-close-canary-92731-superseded-20260617-a
mode: execute
allowed_actions:
  - comment
  - close
blocked_actions:
  - label
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
  - "#93434"
candidates:
  - "#92731"
  - "#93434"
cluster_refs:
  - "#92731"
  - "#93434"
overlap_policy: "skip-any"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "Close-only canary: #92731 is an open, stale contributor PR for the same doctor allowlist false-positive fixed by merged #93434. Re-fetch both refs and close only if the implementation overlap remains exact. Because #93434 is merged, use candidate_fix rather than canonical for the close action."
notes: "Generated after live refetch on 2026-06-17. #92731 author association is CONTRIBUTOR; #93434 merged at d697ecf1720e7b1626fc5e835b18598d185c0a4d."
---

# PR Close Canary #92731

## Goal

Run one close-only pass for #92731. Hydrate #92731 and #93434, emit at most one
comment and one close action for #92731, and do not label, merge, fix, or raise
a PR.

## Live Refetch Baseline

- target: #92731 fix(doctor): skip top-level group-allowlist scan when sub-accounts exist
- target live state at generation: OPEN
- target updatedAt at generation: 2026-06-16T02:44:20Z
- candidate fix: #93434 fix: avoid parent group allowlist false positive
- candidate fix live state at generation: MERGED
- candidate fix mergedAt at generation: 2026-06-16T08:51:05Z

## Instructions

If #92731 is still open and #93434 is still merged, verify the landed fix covers
the same parent-group allowlist false-positive. Then emit
`close_fixed_by_candidate` with `candidate_fix: "#93434"` for #92731. Post the
close comment first, preserve contributor credit, and link both pull requests.
Do not treat merged #93434 as an open canonical. If the overlap or live state is
unclear, keep #92731 open and record the exact blocker.
