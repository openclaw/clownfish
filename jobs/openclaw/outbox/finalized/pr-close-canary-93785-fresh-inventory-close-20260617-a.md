---
repo: openclaw/openclaw
cluster_id: pr-close-canary-93785-fresh-inventory-close-20260617-a
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
  - "#93767"
candidates:
  - "#93785"
  - "#93767"
cluster_refs:
  - "#93785"
  - "#93767"
overlap_policy: "skip-any"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "Close-only canary: #93785 was planned as fixed by merged #93767 in run 27653348272. Re-fetch live state and only close if #93785 remains open and #93767 is still merged. Because #93767 is already merged/closed, use candidate_fix rather than canonical for the close action."
notes: "Generated from ProjectClownfish result live-pr-inventory-20260616T224810-004 after live refetch on 2026-06-16."
---

# PR Close Canary #93785

## Goal

Run one live close-only cleanup pass. Hydrate #93785 and #93767, then emit at most one planned close action for #93785. Do not merge, fix, raise a PR, or close the merged candidate.

## Live Refetch Baseline

- target: #93785 fix(reasoning-tags): strip MiniMax `mm:` namespaced reasoning tags
- target live state at generation: OPEN
- target updatedAt at generation: 2026-06-16T21:39:19Z
- canonical/candidate: #93767 fix(reasoning-tags): strip MiniMax `mm:` namespaced reasoning tags
- canonical/candidate live state at generation: MERGED
- canonical/candidate mergedAt at generation: 2026-06-16T22:46:38Z
- source result: results/runs/27653348272.json

## Instructions

If #93785 is still open and #93767 is still merged, prefer `close_fixed_by_candidate` with `candidate_fix: "#93767"` for #93785. Do not emit `close_superseded` with closed/merged #93767 in `canonical`; merged PRs are candidate fixes, not surviving open canonicals. Mention both PR/issue URLs in the close comment and preserve contributor/user context. If either live state changed, keep the target open or mark the exact blocker with `needs_human`.
