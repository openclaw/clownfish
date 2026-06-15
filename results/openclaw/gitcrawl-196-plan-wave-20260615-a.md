---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-196-plan-wave-20260615-a"
mode: "plan"
run_id: "27518770177"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27518770177"
head_sha: "bde7630054b9beb03f7c7699a1f6d7426b906c50"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T02:27:57.108Z"
canonical: "#90738"
canonical_issue: "#89594"
canonical_pr: "#90738"
actions_total: 5
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-196-plan-wave-20260615-a

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27518770177](https://github.com/openclaw/clownfish/actions/runs/27518770177)

Workflow conclusion: success

Worker result: planned

Canonical: #90738

## Summary

#90738 remains the best live canonical for the Microsoft Teams channel attachment bug. #89594 is covered by that candidate fix, #92591 is related but a separate Teams keyword-mention feature, and the hydrated closed refs are historical context only.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 5 |
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
| #90738 | keep_canonical | planned | canonical | Canonical PR is open, hydrated, focused on the root cause, and has the strongest evidence for this cluster. |
| #89594 | close_fixed_by_candidate | planned | fixed_by_candidate | The issue has no unique remaining scope beyond the hydrated canonical candidate fix #90738. |
| #92591 | keep_related | planned | related | Same Microsoft Teams channel area, but different root cause and user-visible behavior; keep it as a related independent lane. |
| #90733 | keep_closed | skipped | superseded | Already closed; keep as historical evidence for #90738. |
| #91657 | keep_closed | skipped | independent | Closed unrelated context; no cluster action needed. |

## Needs Human

- none
