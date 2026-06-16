---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-14070-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "27585130741"
workflow_run_id: "27585130741"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27585130741"
head_sha: "029567b88e02d3fb42050a9ee72b98ee92930545"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-16T00:20:07.521Z"
canonical: "#48045"
canonical_issue: "#48045"
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

# gitcrawl-14070-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27585130741](https://github.com/openclaw/clownfish/actions/runs/27585130741)

Workflow conclusion: success

Worker result: planned

Canonical: #48045

## Summary

Planned non-mutating classification only. The original representative #43457 is closed, so the current open canonical path is #48045. Security-sensitive PR refs #64558 and #89416 are quarantined with exact-ref route_security actions, so no merge, fix, fixed-by-candidate closeout, or replacement fix action is planned. No close actions are planned.

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
| #5836 | keep_closed | skipped | superseded | Already closed historical context ref. |
| #18598 | keep_closed | skipped | related | Already closed related context ref. |
| #43457 | keep_closed | skipped | superseded | Original representative is obsolete because it is closed and does not own the remaining open CDP navigate failure. |
| #48045 | keep_canonical | planned | canonical | Current open canonical issue for the remaining direct /navigate CDP download path. |
| #48132 | keep_closed | skipped | superseded | Already closed obsolete PR; useful only as historical evidence for #48045. |
| #57234 | keep_closed | skipped | related | Already closed related context ref. |
| #64558 | route_security | planned | security_sensitive | Exact PR ref is security-sensitive and must be routed to central security handling instead of classified or closed by ProjectClownfish. |
| #67087 | keep_closed | skipped | related | Already closed related context ref. |
| #89416 | route_security | planned | security_sensitive | Open PR changes a flagged security-boundary path, so ProjectClownfish must route the exact ref to central security handling and avoid merge/fix/closeout actions. |

## Needs Human

- none
