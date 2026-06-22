---
repo: openclaw/openclaw
cluster_id: pr-close-canary-93954-close-fixed-by-20260623a
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
  - "#94238"
candidates:
  - "#93954"
  - "#94238"
cluster_refs:
  - "#93954"
  - "#94238"
overlap_policy: "skip-any"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "Close-only canary: #93954 was planned as fixed by merged #94238 in run 27986669962. Re-fetch live state and only close if #93954 remains open and #94238 is still merged. Because #94238 is already merged/closed, use candidate_fix rather than canonical for the close action."
notes: "Generated from ProjectClownfish result live-pr-inventory-20260622T181919-003 after live refetch on 2026-06-22."
---

# PR Close Canary #93954

## Goal

Run one live close-only cleanup pass. Hydrate #93954 and #94238, then emit at most one planned close action for #93954. Do not merge, fix, raise a PR, or close the merged candidate.

## Live Refetch Baseline

- target: #93954 [codex] fail configure fast without a tty
- target live state at generation: OPEN
- target updatedAt at generation: 2026-06-22T19:02:18Z
- canonical/candidate: #94238 fix(config): fail closed when configure runs without an interactive TTY (#93953)
- canonical/candidate live state at generation: MERGED
- canonical/candidate mergedAt at generation: 2026-06-22T18:28:56Z
- source result: ProjectClownfish workflow run 27986669962

## Instructions

If #93954 is still open and #94238 is still merged, prefer `close_fixed_by_candidate` with `candidate_fix: "#94238"` for #93954. Do not emit `close_superseded` with closed/merged #94238 in `canonical`; merged PRs are candidate fixes, not surviving open canonicals. Mention both PR/issue URLs in the close comment and preserve contributor/user context. If either live state changed, keep the target open or mark the exact blocker with `needs_human`.
