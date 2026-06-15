---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-651-bulk-plan-20260615-a"
mode: "plan"
run_id: "27523131579"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27523131579"
head_sha: "2eb7becb97c14f307a0a4930f6deab62b7223dde"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T04:07:30.412Z"
canonical: "#71592"
canonical_issue: "#71592"
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

# gitcrawl-651-bulk-plan-20260615-a

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27523131579](https://github.com/openclaw/clownfish/actions/runs/27523131579)

Workflow conclusion: success

Worker result: planned

Canonical: #71592

## Summary

Plan-only classification for cluster gitcrawl-651-bulk-plan-20260615-a. #71592 remains the live canonical issue for the TUI local-mode slash-command fallthrough. #89183 is explicitly listed by the job as a security-signal ref, so it is routed to central security handling and no merge/close/fix action is planned for it.

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
| #71592 | keep_canonical | planned | canonical | #71592 is the best surviving non-security canonical issue for the reported local TUI slash-command fallthrough. |
| #89183 | route_security | planned | security_sensitive | The job explicitly marks #89183 as a security-signal ref, so ProjectClownfish must route that exact PR to central security handling and continue non-security classification separately. |

## Needs Human

- none
