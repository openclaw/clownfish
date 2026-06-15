---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-349-bulk-plan-20260615-a"
mode: "plan"
run_id: "27525980915"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27525980915"
head_sha: "4574037aa1f27e59d5ea43eca0073b4c4dfc504c"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T05:30:14.798Z"
canonical: "#91609"
canonical_issue: "#44293"
canonical_pr: "#91609"
actions_total: 3
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-349-bulk-plan-20260615-a

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27525980915](https://github.com/openclaw/clownfish/actions/runs/27525980915)

Workflow conclusion: success

Worker result: planned

Canonical: #91609

## Summary

Plan-mode classification only. No GitHub mutations planned. #91609 is the best in-scope canonical candidate for the native PowerShell docs formatter fix, but it is not merge-ready because proof and review/check blockers remain. #91610 is related Windows PowerShell CI coverage work, not the same root-cause fix.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 3 |
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
| #91609 | keep_canonical | planned | canonical | #91609 is the best surviving in-scope canonical path for the docs formatter PowerShell issue, but it should stay open pending proof, checks, and review comment resolution. |
| #91610 | keep_related | planned | related | Related Windows PowerShell coverage work should remain separate from the docs formatter fix cluster. |
| #44293 | keep_related | planned | related | #44293 is the issue context for #91609, but it is excluded from this job's actionable refs by overlap policy. |

## Needs Human

- none
