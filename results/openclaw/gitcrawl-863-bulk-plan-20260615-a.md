---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-863-bulk-plan-20260615-a"
mode: "plan"
run_id: "28824732940-1-18"
workflow_run_id: "28824732940"
run_url: "https://github.com/openclaw/clownfish/actions/runs/28824732940"
head_sha: "6a77fbf951ba8b7b9a9969c9cfc421f0012c5e16"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-07-06T21:38:08.370Z"
canonical: "#73328"
canonical_issue: "#73328"
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

# gitcrawl-863-bulk-plan-20260615-a

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/28824732940](https://github.com/openclaw/clownfish/actions/runs/28824732940)

Workflow conclusion: success

Worker result: planned

Canonical: #73328

## Summary

Plan-mode classification only. The hinted canonical issue #73328 is already closed in hydrated preflight state, so no closure action is valid for it. The only open candidate, #73382, is a same-root-cause contributor PR touching the Bedrock discovery context-window implementation and tests, but merge/fix actions are blocked by job permissions and failing checks/proof requirements. Although the job metadata calls #73382 a security-signal ref, the hydrated preflight item is explicitly security_sensitive:false and the run security boundary reports no security-sensitive hydrated refs, so route_security is not emitted under the run rules.

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
| #73328 | keep_closed | skipped | canonical | Already closed in hydrated live state; retain it as historical canonical evidence only. |
| #73382 | keep_related | planned | related | Same root-cause family as the closed canonical issue, but the open PR cannot be merged, fixed, or used for fixed-by-candidate closeout in this plan because checks/proof are failing and merge/fix actions are blocked. |

## Needs Human

- none
