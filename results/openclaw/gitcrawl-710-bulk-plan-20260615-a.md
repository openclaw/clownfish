---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-710-bulk-plan-20260615-a"
mode: "plan"
run_id: "27523236148"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27523236148"
head_sha: "2eb7becb97c14f307a0a4930f6deab62b7223dde"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T04:07:30.422Z"
canonical: "#89534"
canonical_issue: "#89534"
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

# gitcrawl-710-bulk-plan-20260615-a

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27523236148](https://github.com/openclaw/clownfish/actions/runs/27523236148)

Workflow conclusion: success

Worker result: planned

Canonical: #89534

## Summary

Plan-only classification for two hydrated open candidates. #89534 remains the live canonical issue for the no-model `/codex bind` regression report. #89535 is quarantined with `route_security` because the job explicitly lists it in `security_signal_refs`; no close, merge, label, comment, or fix action is planned.

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
| #89534 | keep_canonical | planned | canonical | #89534 is the best surviving canonical issue for this root cause and remains open; no closure is planned in read-only plan mode. |
| #89535 | route_security | planned | security_sensitive | The job explicitly routes #89535 as a security-signal ref, so the plan quarantines this exact PR and does not recommend merge, close, label, comment, or fix mutation. |

## Needs Human

- none
