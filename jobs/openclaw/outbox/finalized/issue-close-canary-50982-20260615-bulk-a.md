---
repo: openclaw/openclaw
cluster_id: issue-close-canary-50982-20260615-bulk-a
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
  - "#73379"
candidates:
  - "#50982"
  - "#73379"
cluster_refs:
  - "#50982"
  - "#73379"
overlap_policy: "skip-any"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "Close-only canary: #50982 was planned as fixed by merged #73379 in run 25132421068. Re-fetch live state and only close if #50982 remains open and #73379 is still merged."
notes: "Generated from ProjectClownfish result gitcrawl-2203-dedupe-only-20260429-remote after live refetch on 2026-06-15."
---

# Issue Close Canary #50982

## Goal

Run one live close-only cleanup pass. Hydrate #50982 and #73379, then emit at most one planned close action for #50982. Do not merge, fix, raise a PR, or close the merged candidate.

## Live Refetch Baseline

- target: #50982 [Feature]: cron jobs don't support --thread-id, can't send to Telegram topic
- target live state at generation: OPEN
- target updatedAt at generation: 2026-05-18T23:33:41Z
- candidate: #73379 fix(cron): support Telegram thread IDs in cron add/edit
- candidate live state at generation: MERGED
- candidate mergedAt at generation: 2026-04-28T08:50:45Z
- source result: results/runs/25132421068.json

## Instructions

If #50982 is still open and #73379 is still merged, prefer `close_fixed_by_candidate` for #50982. Mention both PR/issue URLs in the close comment and preserve contributor/user context. If either live state changed, keep the target open or mark the exact blocker with `needs_human`.
