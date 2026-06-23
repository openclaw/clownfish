---
repo: openclaw/openclaw
cluster_id: close-openclaw-openclaw-69199-fixed-by-95916-20260623a
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
  - unclear_canonical
  - active_author_followup
  - broad_code_delta
canonical:
  - "#95916"
candidates:
  - "#69199"
  - "#95916"
cluster_refs:
  - "#69199"
  - "#95916"
overlap_policy: "skip-any"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "Close-only cleanup: #95916 is the merged credited ProjectClownfish replacement for source PR #69199. Re-fetch live state and close #69199 only if it remains open and #95916 remains merged. Because #95916 is already merged, use close_fixed_by_candidate with candidate_fix: \"#95916\" rather than close_superseded with #95916 as canonical."
notes: "Generated after external merge preflight run 27997166524 merged #95916 at 2026-06-23T02:12:48Z with squash commit 19627c7dd9b6f4eb25a896168f53c5528917108e."
---

# Close #69199 After Merged Replacement #95916

## Goal

Run one live close-only cleanup pass. Hydrate #69199 and #95916, then emit at most one planned close action for #69199.

Do not merge, fix, raise a PR, or close the merged replacement.

## Live Refetch Baseline

- target: #69199 fix(memory): improve error message when node:sqlite is unavailable
- target live state at generation: OPEN
- target updatedAt at generation: 2026-06-23T02:14:42Z
- target head at generation: 10e3b0db1d43cb6d2a320ea8214ffc94e07b3e06
- source author: @rrrrrredy
- candidate fix: #95916 fix(memory): improve node:sqlite unavailable guidance
- candidate live state at generation: MERGED
- candidate mergedAt at generation: 2026-06-23T02:12:48Z
- candidate merge commit: 19627c7dd9b6f4eb25a896168f53c5528917108e
- source repair job: repair-openclaw-openclaw-69199-20260623a
- merge preflight run: 27997166524

## Instructions

If #69199 is still open and #95916 is still merged, prefer `close_fixed_by_candidate` with `candidate_fix: "#95916"` for #69199.

The close comment must mention:

- the source PR URL: https://github.com/openclaw/openclaw/pull/69199
- the merged replacement PR URL: https://github.com/openclaw/openclaw/pull/95916
- the merge commit: 19627c7dd9b6f4eb25a896168f53c5528917108e
- credit to @rrrrrredy for the original scoped implementation
- that ProjectClownfish used a replacement path to carry the narrow fix forward while preserving attribution

If #69199 is already closed, emit `keep_closed`. If #95916 is no longer merged or the relationship is unclear after live hydration, keep #69199 open or mark the exact blocker with `needs_human`.
