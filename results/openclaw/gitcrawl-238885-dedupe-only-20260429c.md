---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-238885-dedupe-only-20260429c"
mode: "autonomous"
run_id: "25103004224"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25103004224"
head_sha: "c3cc5ac35d228f419caa5b1772e20efdca99c0e6"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T03:45:26.141Z"
canonical: "https://github.com/openclaw/openclaw/issues/49311"
canonical_issue: "https://github.com/openclaw/openclaw/issues/49311"
canonical_pr: null
actions_total: 11
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-238885-dedupe-only-20260429c

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25103004224](https://github.com/openclaw/clownfish/actions/runs/25103004224)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/49311

## Summary

Hydrated preflight shows all job candidates are already closed. #49311 remains the canonical historical issue for the custom LaunchAgent EnvironmentVariables wipe; #45163 is a duplicate, and #53387 is a related service-env snapshot bug. No close, comment, label, merge, or fix actions are planned.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 11 |
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
| #45163 | keep_closed | skipped | duplicate | Already closed before this run; no mutation needed. |
| #48096 | keep_closed | skipped | independent | Closed linked context only; outside this cluster's closeout scope. |
| #49236 | keep_closed | skipped | independent | Closed linked context only; outside this cluster's closeout scope. |
| #49293 | keep_closed | skipped | independent | Closed linked context only; outside this cluster's closeout scope. |
| #49297 | keep_closed | skipped | related | Closed related context only; no mutation needed. |
| #49305 | keep_closed | skipped | independent | Closed linked context only; outside this cluster's closeout scope. |
| #49309 | keep_closed | skipped | independent | Closed linked context only; outside this cluster's closeout scope. |
| #49311 | keep_closed | skipped | canonical | Canonical issue is already closed as fixed on main; no mutation is valid. |
| #53387 | keep_closed | skipped | related | Already closed as a related fixed issue; no mutation needed. |
| #53452 | keep_closed | skipped | superseded | Closed unmerged contributor PR is superseded by the later main fix; no mutation is valid. |
| #53462 | keep_closed | skipped | superseded | Closed unmerged contributor PR is superseded by the later main fix; no mutation is valid. |

## Needs Human

- none
