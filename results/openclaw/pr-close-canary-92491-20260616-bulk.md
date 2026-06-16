---
repo: "openclaw/openclaw"
cluster_id: "pr-close-canary-92491-20260616-bulk"
mode: "execute"
run_id: "27589215072"
workflow_run_id: "27589215072"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27589215072"
head_sha: "d2836181abae9bd5aa1fd28990b5beddebe95849"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-16T02:09:19.204Z"
canonical: null
canonical_issue: "#92474"
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

# pr-close-canary-92491-20260616-bulk

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27589215072](https://github.com/openclaw/clownfish/actions/runs/27589215072)

Workflow conclusion: success

Worker result: planned

Canonical: #92474

## Summary

Repaired the result by replacing the planned canonical/close actions for #92484 and #92491 with non-mutating route_security actions. The deterministic validator identified both hydrated PR targets as security-sensitive, so no closeout or canonical mutation is safe in this pass.

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
| #92484 | route_security | planned | security_sensitive | Validator classified #92484 as security-sensitive, so the only safe action is non-mutating security routing. |
| #92491 | route_security | planned | security_sensitive | Validator classified #92491 as security-sensitive, so the planned closeout must be replaced with non-mutating security routing. |

## Needs Human

- #92484 and #92491 were routed to central security handling after deterministic validation classified both PR targets as security-sensitive; no closeout was planned.
