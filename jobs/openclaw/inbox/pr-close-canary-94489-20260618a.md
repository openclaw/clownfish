---
repo: openclaw/openclaw
cluster_id: pr-close-canary-94489-20260618a
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
  - "#94453"
candidates:
  - "#94489"
  - "#94453"
cluster_refs:
  - "#94489"
  - "#94453"
overlap_policy: "skip-any"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "Close-only canary: #94489 was planned as superseded of open canonical #94453 in run 27753529347. Re-fetch live state and only close if #94489 remains open and #94453 remains open as the best canonical ref."
notes: "Generated from ProjectClownfish result live-pr-inventory-20260618T094823-006 after live refetch on 2026-06-18."
---

# PR Close Canary #94489

## Goal

Run one live close-only cleanup pass. Hydrate #94489 and #94453, then emit at most one planned close action for #94489. Do not merge, fix, raise a PR, or close the merged candidate.

## Live Refetch Baseline

- target: #94489 fix(cron): default runMode to "due" instead of "force"
- target live state at generation: OPEN
- target updatedAt at generation: 2026-06-18T08:39:45Z
- canonical/candidate: #94453 fix: default cron runMode to "due" instead of "force" (#94270)
- canonical/candidate live state at generation: OPEN
- canonical/candidate mergedAt at generation: unknown
- source result: ProjectClownfish workflow run 27753529347

## Instructions

If #94489 is still open and #94453 is still open, prefer `close_superseded` with `canonical: "#94453"` for #94489. Do not use `candidate_fix` for open canonical refs. Mention both PR/issue URLs in the close comment and preserve contributor/user context. If either live state changed, keep the target open or mark the exact blocker with `needs_human`.
