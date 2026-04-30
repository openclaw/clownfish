---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-4849-dedupe-only-20260429d"
mode: "autonomous"
run_id: "25142088054"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25142088054"
head_sha: "a0b870a07f2988db4b233d32e6ac2590b6afdb2d"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-04-30T01:10:40.507Z"
canonical: "https://github.com/openclaw/openclaw/pull/55644"
canonical_issue: null
canonical_pr: "https://github.com/openclaw/openclaw/pull/55644"
actions_total: 3
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-4849-dedupe-only-20260429d

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25142088054](https://github.com/openclaw/clownfish/actions/runs/25142088054)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/55644

## Summary

Hydrated preflight shows #41446 is closed and non-viable, #64257 is already merged and closed, and #55644 is the only open PR. I classify #55644 as the current open canonical for its narrow .history/.gitignore housekeeping scope, with no close, label, comment, merge, or fix actions planned because the remaining refs are not duplicates and the job gates disable merge/fix/post-merge closeout.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 3 |
| Fix executed | 0 |
| Fix failed | 0 |
| Fix blocked | 0 |
| Applied executions | 0 |
| Apply blocked | 0 |
| Apply skipped | 0 |
| Needs human | 0 |

## Fix Execution Actions

| Action | Status | Target | Branch | Reason |
| --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #41446 | keep_closed | skipped | related | Already closed historical context and not a duplicate target; no mutation is valid. |
| #55644 | keep_canonical | planned | canonical | Only open candidate; keep as the current open canonical for its narrow .history/ ignore-rule scope, with no closure or merge planned. |
| #64257 | keep_closed | skipped | related | Already merged and closed; related historical .gitignore evidence only. |

## Needs Human

- none
