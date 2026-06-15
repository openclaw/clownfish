---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-223-bulk-plan-20260615-a"
mode: "plan"
run_id: "27520850210"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27520850210"
head_sha: "872a0ab6af9f5f189014062d7bd0a2367b003dde"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T02:47:39.920Z"
canonical: "#91893"
canonical_issue: "#91893"
canonical_pr: null
actions_total: 3
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-223-bulk-plan-20260615-a

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27520850210](https://github.com/openclaw/clownfish/actions/runs/27520850210)

Workflow conclusion: success

Worker result: planned

Canonical: #91893

## Summary

Plan-only classification for openclaw/openclaw cluster gitcrawl-223-bulk-plan-20260615-a. #91893 remains the live canonical issue for the live-test ENOSPC bug. #91907 is quarantined because the job explicitly identifies it as a security-signal ref requiring route_security. #92570 is related to the same root cause but should remain open because it is useful contributor code with unresolved ClawSweeper review/re-review failure and no merge/fix authority in this job.

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
| #91893 | keep_canonical | planned | canonical | #91893 is the open source report for the root cause and remains the correct canonical issue. |
| #91907 | route_security | planned | security_sensitive | The job gives an explicit per-ref security routing instruction for #91907, so the worker must quarantine this item and continue classifying unrelated refs. |
| #92570 | keep_related | planned | related | #92570 targets the same root cause as #91893, but unresolved review failure and blocked merge/fix authority make non-mutating related classification the safe plan. |

## Needs Human

- none
