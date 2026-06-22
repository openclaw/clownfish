---
repo: "openclaw/openclaw"
cluster_id: "pr-close-canary-95453-close-fixed-by-20260623a"
mode: "execute"
run_id: "27988915967"
workflow_run_id: "27988915967"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27988915967"
head_sha: "5c65681a7805b8f4437f55a7e254689ae21c835e"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-22T22:43:06.875Z"
canonical: null
canonical_issue: null
canonical_pr: "#95674"
actions_total: 1
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 1
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# pr-close-canary-95453-close-fixed-by-20260623a

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27988915967](https://github.com/openclaw/clownfish/actions/runs/27988915967)

Workflow conclusion: success

Worker result: planned

Canonical: #95674

## Summary

Planned one close-only cleanup action: #95453 remains open in the hydrated preflight state and is covered by merged #95674. No merge, fix, label, or direct GitHub mutation was performed.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 1 |
| Fix executed | 0 |
| Fix failed | 0 |
| Fix blocked | 0 |
| Applied executions | 1 |
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
| #95453 | close_fixed_by_candidate | executed | fixed_by_candidate | covered by the candidate fix |

## Apply Audit

| Attempt | Source | Target | Action | Status | Reason |
| --- | --- | --- | --- | --- |
| 1 | apply | #95453 | close_fixed_by_candidate | executed | covered by the candidate fix |
| 2 | apply | #95453 | close_fixed_by_candidate | executed | already closed with matching projectclownfish comment |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #95453 | close_fixed_by_candidate | planned | fixed_by_candidate |  |

## Needs Human

- none
