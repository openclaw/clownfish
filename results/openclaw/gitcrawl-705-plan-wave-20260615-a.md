---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-705-plan-wave-20260615-a"
mode: "plan"
run_id: "27516938917"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27516938917"
head_sha: "77927a97323ea285a9cccfa17fb1879be9528a29"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T02:27:57.085Z"
canonical: "#89598"
canonical_issue: null
canonical_pr: "#89598"
actions_total: 2
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-705-plan-wave-20260615-a

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27516938917](https://github.com/openclaw/clownfish/actions/runs/27516938917)

Workflow conclusion: success

Worker result: planned

Canonical: #89598

## Summary

Plan mode classification only. #89598 remains the open canonical PR for the MCP tools/list union-schema variant failure. #89611 is related gateway unreadable-schema hardening, but it fixes a different /tools/invoke legacy action probe path and should not be closed as a duplicate or superseded by #89598.

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

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #89598 | keep_canonical | planned | canonical | #89598 is still open and is the best hydrated representative for the canonical MCP tools/list union-schema variant root cause. |
| #89611 | keep_related | planned | related | #89611 is in the same gateway unreadable-schema symptom family as #89598, but it fixes a distinct /tools/invoke action-probe root cause and retains unique useful code. |

## Needs Human

- none
