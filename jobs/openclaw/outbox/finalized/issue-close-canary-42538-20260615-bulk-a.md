---
repo: openclaw/openclaw
cluster_id: issue-close-canary-42538-20260615-bulk-a
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
  - "#72417"
candidates:
  - "#42538"
  - "#72417"
cluster_refs:
  - "#42538"
  - "#72417"
overlap_policy: "skip-any"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "Close-only canary: #42538 was planned as fixed by merged #72417 in run 25108831266. Re-fetch live state and only close if #42538 remains open and #72417 is still merged."
notes: "Generated from ProjectClownfish result gitcrawl-238838-dedupe-only-20260429c after live refetch on 2026-06-15."
---

# Issue Close Canary #42538

## Goal

Run one live close-only cleanup pass. Hydrate #42538 and #72417, then emit at most one planned close action for #42538. Do not merge, fix, raise a PR, or close the merged candidate.

## Live Refetch Baseline

- target: #42538 Bug: health endpoint returns incorrect running=false for WhatsApp
- target live state at generation: OPEN
- target updatedAt at generation: 2026-06-11T00:33:53Z
- candidate: #72417 fix(gateway): preserve runtime-backed health state
- candidate live state at generation: MERGED
- candidate mergedAt at generation: 2026-04-27T18:05:00Z
- source result: results/runs/25108831266.json

## Instructions

If #42538 is still open and #72417 is still merged, prefer `close_fixed_by_candidate` for #42538. Mention both PR/issue URLs in the close comment and preserve contributor/user context. If either live state changed, keep the target open or mark the exact blocker with `needs_human`.
