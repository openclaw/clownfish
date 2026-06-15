---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-748-bulk-plan-20260615-a"
mode: "plan"
run_id: "27523245538"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27523245538"
head_sha: "2eb7becb97c14f307a0a4930f6deab62b7223dde"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T04:07:30.426Z"
canonical: "#89225"
canonical_issue: "#89225"
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

# gitcrawl-748-bulk-plan-20260615-a

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27523245538](https://github.com/openclaw/clownfish/actions/runs/27523245538)

Workflow conclusion: success

Worker result: planned

Canonical: #89225

## Summary

Classified #89225 as the live canonical issue for the doctor missing-workspace-root crash. Quarantined #89226 with route_security because the job explicitly lists it as a security-signal ref requiring central handling, so no close, merge, or fix action is planned for that PR.

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
| #89225 | keep_canonical | planned | canonical | #89225 is the best surviving non-security canonical report for this cluster and should remain open for maintainer follow-up. |
| #89226 | route_security | planned | security_sensitive | The job explicitly requires central security routing for this PR, so it is quarantined without using it as an executable fix or merge candidate in this cluster. |

## Needs Human

- none
