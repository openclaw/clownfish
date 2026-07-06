---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-643-bulk-plan-20260615-a"
mode: "plan"
run_id: "28824732940-1-5"
workflow_run_id: "28824732940"
run_url: "https://github.com/openclaw/clownfish/actions/runs/28824732940"
head_sha: "6a77fbf951ba8b7b9a9969c9cfc421f0012c5e16"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-07-06T21:38:08.377Z"
canonical: "#62514"
canonical_issue: "#62514"
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

# gitcrawl-643-bulk-plan-20260615-a

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/28824732940](https://github.com/openclaw/clownfish/actions/runs/28824732940)

Workflow conclusion: success

Worker result: planned

Canonical: #62514

## Summary

Read-only plan result. #62514 remains the open non-security canonical issue for the WebUI image-input/tool-calling behavior report. #63710 is a hydrated open PR but is explicitly marked security_sensitive in the preflight artifact, so it is quarantined to central OpenClaw security handling and is not used for merge, closeout, or fixed-by-candidate planning.

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
| #62514 | keep_canonical | planned | canonical | #62514 is the only hydrated open non-security actionable candidate and remains the best canonical issue for this cluster. |
| #63710 | route_security | planned | security_sensitive | The artifact explicitly marks #63710 security_sensitive=true, so the correct scoped action is non-mutating route_security for that exact PR. |

## Needs Human

- none
