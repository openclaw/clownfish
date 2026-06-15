---
repo: openclaw/openclaw
cluster_id: issue-close-canary-56284-20260615-bulk-a
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
  - "#71465"
candidates:
  - "#56284"
  - "#71465"
cluster_refs:
  - "#56284"
  - "#71465"
overlap_policy: "skip-any"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "Close-only canary: #56284 was planned as fixed by merged #71465 in run 25103961705. Re-fetch live state and only close if #56284 remains open and #71465 is still merged."
notes: "Generated from ProjectClownfish result gitcrawl-238819-dedupe-only-20260429b after live refetch on 2026-06-15."
---

# Issue Close Canary #56284

## Goal

Run one live close-only cleanup pass. Hydrate #56284 and #71465, then emit at most one planned close action for #56284. Do not merge, fix, raise a PR, or close the merged candidate.

## Live Refetch Baseline

- target: #56284 Windows: gateway restart does not wait for active tasks and loses session state
- target live state at generation: OPEN
- target updatedAt at generation: 2026-06-14T10:26:19Z
- candidate: #71465 fix(gateway): preserve restart drain for active runs
- candidate live state at generation: MERGED
- candidate mergedAt at generation: 2026-04-25T08:35:47Z
- source result: results/runs/25103961705.json

## Instructions

If #56284 is still open and #71465 is still merged, prefer `close_fixed_by_candidate` for #56284. Mention both PR/issue URLs in the close comment and preserve contributor/user context. If either live state changed, keep the target open or mark the exact blocker with `needs_human`.
