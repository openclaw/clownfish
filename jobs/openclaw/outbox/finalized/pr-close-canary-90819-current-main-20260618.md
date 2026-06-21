---
repo: openclaw/openclaw
cluster_id: pr-close-canary-90819-current-main-20260618
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
canonical: []
candidates:
  - "#90819"
cluster_refs:
  - "#90819"
overlap_policy: "skip-any"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_unmerged_fix_close: true
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "Close-only canary: #90819's request-scoped plugin workspace-dir pin and focused regression tests are already present on current main. Re-fetch #90819 and current main; close only if that exact coverage remains current."
notes: "Generated from execute run 27777647587 after review-results passed on 2026-06-18. This is an evidence-backed current-main closeout, not a merge or replacement path."
---

# PR Close Canary #90819

## Goal

Run one live close-only cleanup pass. Hydrate #90819 and current main, then emit
at most one close action for #90819. Do not label, merge, fix, or raise a PR.

## Verified Baseline

- target: #90819 fix(gateway): pin plugin workspace dir during sessions.list to stop O(rows) metadata scans under concurrency
- target live state at execution review: OPEN
- target updatedAt at execution review: 2026-06-06T03:00:00Z
- source execute run: 27777647587
- current main evidence from that run: `withPinnedActivePluginRegistryWorkspaceDir`
  wraps `listSessionsFromStoreAsync`, with focused runtime workspace-state tests
  passing.

## Instructions

If #90819 is still open and current main still contains the same request-scoped
plugin workspace-dir pin with the focused regression coverage, emit
`close_fixed_by_candidate` for #90819 with `classification: "fixed_by_candidate"`
and no `candidate_fix`. State that current main already covers the PR, preserve
the contributor's credit in the close comment, and include a stable idempotency
key. Do not infer this from a superficially similar change: if the coverage,
live state, or security posture is unclear, leave #90819 open and record the
exact blocker.
