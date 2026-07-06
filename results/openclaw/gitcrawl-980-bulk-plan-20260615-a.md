---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-980-bulk-plan-20260615-a"
mode: "plan"
run_id: "28824732940-1-21"
workflow_run_id: "28824732940"
run_url: "https://github.com/openclaw/clownfish/actions/runs/28824732940"
head_sha: "6a77fbf951ba8b7b9a9969c9cfc421f0012c5e16"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-07-06T21:38:08.374Z"
canonical: "#83342"
canonical_issue: "#83342"
canonical_pr: null
actions_total: 2
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-980-bulk-plan-20260615-a

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/28824732940](https://github.com/openclaw/clownfish/actions/runs/28824732940)

Workflow conclusion: success

Worker result: planned

Canonical: #83342

## Summary

Plan-only classification complete. #83342 remains the live canonical issue for the /models duplicate CLI runtime alias provider rows. #85982 overlaps the same model-alias dedupe area but is already closed and unmerged, so no closure, merge, route, or fix action is planned.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 2 |
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

## Apply Audit

| Attempt | Source | Target | Action | Status | Reason |
| --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |  |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #83342 | keep_canonical | planned | canonical | #83342 is the only open hydrated item and directly describes the root user-visible failure for this cluster. |
| #85982 | keep_closed | skipped | related | #85982 is relevant historical implementation context for #83342 but is already closed and cannot receive a close, merge, fixed-by-candidate, or route_security action in this plan. |

## Needs Human

- none
