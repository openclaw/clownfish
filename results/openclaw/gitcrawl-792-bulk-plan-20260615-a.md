---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-792-bulk-plan-20260615-a"
mode: "plan"
run_id: "27523348231"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27523348231"
head_sha: "3f2168d9de7a3d9495239c95a6f949c58027bccd"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T04:10:12.111Z"
canonical: "#77692"
canonical_issue: "#77692"
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

# gitcrawl-792-bulk-plan-20260615-a

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27523348231](https://github.com/openclaw/clownfish/actions/runs/27523348231)

Workflow conclusion: success

Worker result: planned

Canonical: #77692

## Summary

Plan-mode classification only. #77692 remains the open canonical issue for the Xiaomi Token Plan TTS provider failure. #79185 is explicitly listed by the job as a security-signal ref requiring central routing, so it is quarantined with a non-mutating route_security action and is not used for merge or closeout planning.

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
| #77692 | keep_canonical | planned | canonical | Best surviving non-security canonical issue for the root cause remains open. |
| #79185 | route_security | planned | security_sensitive | The job explicitly requires central security routing for this exact ref. |

## Needs Human

- none
