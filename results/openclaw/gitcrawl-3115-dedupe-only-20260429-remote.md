---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-3115-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "27599301090"
workflow_run_id: "27599301090"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27599301090"
head_sha: "3793d73ce55606bb6b35576f7153086ef86c44dd"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-16T06:48:18.539Z"
canonical: null
canonical_issue: null
canonical_pr: null
actions_total: 9
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-3115-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27599301090](https://github.com/openclaw/clownfish/actions/runs/27599301090)

Workflow conclusion: success

Worker result: planned

Canonical: unknown

## Summary

No mutating action is safe or needed. The hydrated preflight shows the historical representative #52343, the only originally open candidate #55358, and all linked context refs are already closed; no open canonical issue or PR remains for this dedupe-only cluster.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 9 |
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
| #28344 | keep_closed | skipped | related | Already closed historical linked context; no action. |
| #52341 | keep_closed | skipped | independent | Already closed and not part of the dedupe root cause. |
| #52343 | keep_closed | skipped | canonical | Historical representative is already closed; no open canonical replaces it in this cluster. |
| #55019 | keep_closed | skipped | fixed_by_candidate | Already closed as implemented on main; commit evidence is not a hydrated issue/PR ref, so candidate_fix remains null. |
| #55358 | keep_closed | skipped | fixed_by_candidate | Already closed as fixed on main; no duplicate closeout remains. |
| #65744 | keep_closed | skipped | fixed_by_candidate | Already closed as implemented on main; no action. |
| #67503 | keep_closed | skipped | related | Already closed linked context; no close, merge, or fix action is allowed in this job. |
| #67761 | keep_closed | skipped | superseded | Already closed PR; failing checks and dirty merge state block any merge or fixed-by-candidate closeout, and this job forbids fix PRs. |
| #70620 | keep_closed | skipped | related | Already closed related Weixin plugin context; no action. |

## Needs Human

- none
