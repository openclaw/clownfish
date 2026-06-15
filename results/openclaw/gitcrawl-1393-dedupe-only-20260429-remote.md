---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-1393-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "25109782139"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25109782139"
head_sha: "7ac7590296085c93e29434b3af3e919aa257e029"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T04:57:52.759Z"
canonical: "https://github.com/openclaw/openclaw/pull/70897"
canonical_issue: null
canonical_pr: "https://github.com/openclaw/openclaw/pull/70897"
actions_total: 4
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-1393-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25109782139](https://github.com/openclaw/clownfish/actions/runs/25109782139)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/70897

## Summary

Hydrated preflight state shows #70897 is the already-merged canonical fix for the CLI JSON/shared-workspace subfamily on main SHA 9881a808f2fc0d5302f98a040a9efaad00336097. #53775 and #70917 are already closed and must not receive close actions. #53809 is the only open cluster item, but it has unique gateway deletion scope plus unresolved review feedback, so it is not a high-confidence duplicate or superseded closeout target.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 4 |
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
| #70897 | keep_closed | skipped | canonical | Already merged canonical evidence for the CLI delete-flow fix; closed refs must stay non-mutating. |
| #53775 | keep_closed | skipped | fixed_by_candidate | Already closed after being superseded/fixed by the broader merged #70897 path; no mutation planned. |
| #70917 | keep_closed | skipped | superseded | Already closed as superseded by #70897; no mutation planned. |
| #53809 | keep_related | planned | related | Keep open as related gateway follow-up; it has unique remaining scope and unresolved review feedback, so instant close would risk losing useful contributor work. |

## Needs Human

- none
