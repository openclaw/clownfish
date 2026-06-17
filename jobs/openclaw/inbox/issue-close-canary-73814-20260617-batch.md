---
repo: openclaw/openclaw
cluster_id: issue-close-canary-73814-20260617-batch
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
  - "#90008"
candidates:
  - "#73814"
  - "#90008"
cluster_refs:
  - "#73814"
  - "#90008"
overlap_policy: "skip-any"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "Close-only canary: #73814 was freshly planned as a duplicate of #90008 in batch run 27659257780. Both issues point to the active installer stdin fix path in PR #87799; #90008 remains the canonical tracking issue."
notes: "Generated from results/runs/27659257780-1-12.json after live refetch on 2026-06-17."
---

# Issue Close Canary #73814

## Goal

Run one live close-only cleanup pass. Hydrate #73814 and #90008, then emit at most one close action for #73814. Do not merge, fix, raise a PR, or mutate #90008.

## Live Refetch Baseline

- target: #73814 Installer hangs and truncates a piped install script when a child process consumes stdin
- target live state at generation: OPEN
- target updatedAt at generation: 2026-06-14T15:54:36Z
- canonical: #90008 Installer pipe corruption: gum spin child inherits piped script stdin
- canonical live state at generation: OPEN
- canonical updatedAt at generation: 2026-06-15T12:23:47Z
- active implementation context: #87799 is open and unmerged; it is not a close prerequisite because #90008 remains the tracking canonical
- source result: results/runs/27659257780-1-12.json

## Instructions

If #73814 is still open, #90008 is still open, and live hydration confirms their installer stdin failure has the same root cause, close #73814 as `close_duplicate` with `canonical: "#90008"`. Comment before closing, name #90008 as the canonical tracker, and note that the active implementation path remains PR #87799. Preserve the reporter context. If either issue changed materially, #90008 is no longer canonical, the target has distinct unresolved scope, or any security signal appears, leave #73814 open and record `needs_human`.
