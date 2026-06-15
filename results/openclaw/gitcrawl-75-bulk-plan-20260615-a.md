---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-75-bulk-plan-20260615-a"
mode: "plan"
run_id: "27523246992"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27523246992"
head_sha: "2eb7becb97c14f307a0a4930f6deab62b7223dde"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T04:07:30.427Z"
canonical: null
canonical_issue: null
canonical_pr: null
actions_total: 7
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-75-bulk-plan-20260615-a

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27523246992](https://github.com/openclaw/clownfish/actions/runs/27523246992)

Workflow conclusion: success

Worker result: planned

Canonical: unknown

## Summary

Plan-mode classification only. The hydrated preflight marks the representative #83584 and most open candidates as security-sensitive, so those items are quarantined with route_security. The only non-security open candidate, #78495, is related to the MEDIA directive family but has a distinct docs/parser markdown-wrapping scope and should remain open independently of the quarantined HTTP media-security path.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 7 |
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
| #40440 | route_security | planned | security_sensitive | Security-sensitive item is out of scope for Clownfish backlog cleanup. |
| #68374 | route_security | planned | security_sensitive | Security-sensitive HTTP reasoning exposure item must be routed to central OpenClaw security handling. |
| #78495 | keep_related | planned | related | Same MEDIA directive family, but distinct root cause and scope; no close action is allowed or appropriate. |
| #83584 | route_security | planned | security_sensitive | The representative is security-sensitive and cannot be used for Clownfish closeout or mutation planning. |
| #84803 | route_security | planned | security_sensitive | Security-sensitive WhatsApp group history media retention issue must be routed to central OpenClaw security handling. |
| #85401 | route_security | planned | security_sensitive | Security-sensitive media path/policy behavior must be handled by central OpenClaw security review. |
| #85765 | route_security | planned | security_sensitive | Security-sensitive visible reasoning/order behavior is out of scope for Clownfish backlog cleanup. |

## Needs Human

- none
