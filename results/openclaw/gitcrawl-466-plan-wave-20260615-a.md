---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-466-plan-wave-20260615-a"
mode: "plan"
run_id: "27516825167"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27516825167"
head_sha: "cf553f2255960d5f7476dcf139c657a23ab10472"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T02:43:28.426Z"
canonical: "#92330"
canonical_issue: "#92330"
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

# gitcrawl-466-plan-wave-20260615-a

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27516825167](https://github.com/openclaw/clownfish/actions/runs/27516825167)

Workflow conclusion: success

Worker result: planned

Canonical: #92330

## Summary

Plan-only classification completed for two open hydrated refs. #92330 remains the canonical issue. #92334 is a narrow related PR candidate for the same root cause, but merge and fixed-by-candidate closeout are blocked by the failed Real behavior proof check, missing clean Codex review, unknown mergeability, and job-level merge/fix restrictions.

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
| #92330 | keep_canonical | planned | canonical | #92330 is still open, hydrated, non-security, and is the best issue thread for the reported exec-approvals YOLO/socket-token failure. |
| #92334 | keep_related | planned | related | #92334 is related to and potentially a candidate fix for #92330, but it is not merge-ready or suitable for fixed-by-candidate closeout in this plan because behavior proof and review gates are unresolved. |

## Needs Human

- none
