---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-94-bulk-plan-20260615-a"
mode: "plan"
run_id: "27523563715"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27523563715"
head_sha: "86103b97bc1c06f021ad75d533f6055a87af8e57"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T04:17:30.978Z"
canonical: "#75040"
canonical_issue: "#75040"
canonical_pr: null
actions_total: 5
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-94-bulk-plan-20260615-a

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27523563715](https://github.com/openclaw/clownfish/actions/runs/27523563715)

Workflow conclusion: success

Worker result: planned

Canonical: #75040

## Summary

Plan-mode classification only. #75040 is the surviving non-security issue canonical for the extra_body thinking-key collision warning. #92288 is quarantined because the job explicitly marks it as a security-signal ref. Closed PRs remain closed with no closure action planned.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 5 |
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
| #75040 | keep_canonical | planned | canonical | Open issue with the clearest non-security root-cause report; do not close while the fix PR is quarantined and merge is blocked by plan-mode/job policy. |
| #74403 | keep_closed | skipped | superseded | Already closed candidate; no close action is valid. |
| #75085 | route_security | planned | security_sensitive | Security-sensitive item is out of ProjectClownfish mutation scope; route only this item and continue classifying unrelated refs. |
| #75350 | keep_closed | skipped | superseded | Already closed candidate; no close action is valid. |
| #92288 | route_security | planned | security_sensitive | The job-specific security-signal instruction overrides using #92288 as a ProjectClownfish canonical or merge candidate in this run. |

## Needs Human

- none
