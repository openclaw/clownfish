---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-434-autonomous-refresh-20260623a"
mode: "autonomous"
run_id: "28005098724"
workflow_run_id: "28005098724"
run_url: "https://github.com/openclaw/clownfish/actions/runs/28005098724"
head_sha: "c3d4877276db1f97103fe56d12a5ddad91fc73e0"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-23T05:49:00.595Z"
canonical: "https://github.com/openclaw/openclaw/issues/38076"
canonical_issue: "https://github.com/openclaw/openclaw/issues/38076"
canonical_pr: "https://github.com/openclaw/openclaw/pull/92126"
actions_total: 2
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-434-autonomous-refresh-20260623a

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/28005098724](https://github.com/openclaw/clownfish/actions/runs/28005098724)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/38076

## Summary

Current main still rejects mixed-case skill-creator --resources values. #38076 remains the live canonical issue; #92126 is the hydrated open draft fix candidate but is an existing-overlap context ref, so this cluster should not close the issue, merge the PR, or open a competing fix path.

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
| #38076 | keep_canonical | planned | canonical | #38076 should stay open until #92126 or an equivalent narrow replacement lands; require_fix_before_close blocks any issue closeout now. |
| #92126 | keep_related | skipped | fixed_by_candidate | Context-only existing-overlap PR; do not merge, close, or repair it from this cluster. |

## Needs Human

- none
