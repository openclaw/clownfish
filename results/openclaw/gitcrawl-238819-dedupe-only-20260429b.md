---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-238819-dedupe-only-20260429b"
mode: "autonomous"
run_id: "25107695036"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25107695036"
head_sha: "904a86eec936498f7b09cd1b845053509b2c784e"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T04:57:52.643Z"
canonical: "https://github.com/openclaw/openclaw/issues/63491"
canonical_issue: "https://github.com/openclaw/openclaw/issues/63491"
canonical_pr: null
actions_total: 7
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 1
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-238819-dedupe-only-20260429b

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25107695036](https://github.com/openclaw/clownfish/actions/runs/25107695036)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/63491

## Summary

Representative #67544 is already closed. #63491 is the live canonical Windows Scheduled Task post-ready liveness issue; #73889 remains the linked open PR candidate but is not merge/closeout-ready in this dedupe-only job because checks are failing and review follow-up remains. Planned one high-confidence close for #56284 as fixed by merged #71465; other open related refs stay open.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 7 |
| Fix executed | 0 |
| Fix failed | 0 |
| Fix blocked | 0 |
| Applied executions | 0 |
| Apply blocked | 1 |
| Apply skipped | 0 |
| Needs human | 0 |

## Fix Execution Actions

| Action | Status | Target | Branch | Reason |
| --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #56284 | close_fixed_by_candidate | blocked | fixed_by_candidate | candidate fix is not listed in job refs |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #63491 | keep_canonical | planned | canonical | #63491 is the best surviving open canonical issue for the unresolved Windows Scheduled Task post-ready liveness family. |
| #56284 | close_fixed_by_candidate | planned | fixed_by_candidate | The active-task drain/session-loss failure in #56284 is covered by merged hydrated PR #71465, and the remaining post-ready liveness family stays open on #63491. |
| #68493 | keep_related | planned | related | Keep open as related because it shares restart/EADDRINUSE symptoms but has a unique hot-reload stale-lock recovery path. |
| #65668 | keep_related | planned | related | Linked but distinct restart-contract issue; keep open and do not fold it into the Windows Scheduled Task canonical. |
| #73889 | keep_related | planned | related | Open candidate PR for #63491, but merge/fixed-by-candidate closeout is not safe in this dedupe-only run due failing checks, mergeable_state unknown, and review follow-up. |
| #67416 | keep_closed | skipped | fixed_by_candidate | Already closed in live state; no close/comment action is valid. |
| #67544 | keep_closed | skipped | fixed_by_candidate | Already closed representative; use #63491 as the live canonical issue for remaining work. |

## Needs Human

- none
