---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-868-plan-wave-20260615-b"
mode: "plan"
run_id: "27519089403"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27519089403"
head_sha: "de7a4a9553b0a32003b8f88f0a5f7a5512c403ce"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T02:20:44.681Z"
canonical: "#87985"
canonical_issue: "#87985"
canonical_pr: null
actions_total: 2
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 1
---

# gitcrawl-868-plan-wave-20260615-b

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27519089403](https://github.com/openclaw/clownfish/actions/runs/27519089403)

Workflow conclusion: success

Worker result: planned

Canonical: #87985

## Summary

Plan-mode classification only. #87985 remains the live canonical issue for the Linux model-usage/codexbar availability report. #87986 is the active implementation PR for that canonical issue, but no merge or fixed-by-candidate closeout is planned because merge/fix actions are blocked by the job and the PR has a failing Real behavior proof check.

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
| Needs human | 1 |

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
| #87985 | keep_canonical | planned | canonical | Best surviving canonical for the reported root cause. |
| #87986 | keep_related | planned | related | Active fix path for the canonical issue, but merge and fixed-by-candidate closure are blocked by job policy and failing proof check. |

## Needs Human

- #87986 has a failing Real behavior proof check and the job requires human handling for failing_checks before any merge/fixed-by-candidate closeout.
