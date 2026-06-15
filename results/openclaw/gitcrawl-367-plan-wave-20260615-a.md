---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-367-plan-wave-20260615-a"
mode: "plan"
run_id: "27516766327"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27516766327"
head_sha: "d5c8e573becb51fea320c5586e82b186a64ac8a2"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T02:43:28.407Z"
canonical: "#92777"
canonical_issue: "#92777"
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

# gitcrawl-367-plan-wave-20260615-a

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27516766327](https://github.com/openclaw/clownfish/actions/runs/27516766327)

Workflow conclusion: success

Worker result: planned

Canonical: #92777

## Summary

Plan mode classification keeps #92777 as the live canonical issue. #92818 is related to the canonical WSL2 TUI backspace report, but it is not a merge or fixed-by closeout path in this run because the hydrated bot review still requests real post-response WSL2/PTY proof and this job disallows merge, fix, and raise_pr actions.

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
| #92777 | keep_canonical | planned | canonical | #92777 remains the best surviving canonical because it is the original open report with concrete reproduction detail and no landed or proven fix closing the post-response WSL2 TUI failure. |
| #92818 | keep_related | planned | related | #92818 is a related implementation attempt for the canonical issue, but it should stay non-mutating in this plan because the reported post-response failure is not proven fixed by the one-line DEL guard and merge/fix actions are disallowed. |

## Needs Human

- none
