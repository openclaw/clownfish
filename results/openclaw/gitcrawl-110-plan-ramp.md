---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-110-plan-ramp"
mode: "plan"
run_id: "27518747709"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27518747709"
head_sha: "bde7630054b9beb03f7c7699a1f6d7426b906c50"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T02:27:57.089Z"
canonical: "#91134"
canonical_issue: "#80536"
canonical_pr: "#91134"
actions_total: 6
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-110-plan-ramp

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27518747709](https://github.com/openclaw/clownfish/actions/runs/27518747709)

Workflow conclusion: success

Worker result: planned

Canonical: #91134

## Summary

Read-only plan for cluster gitcrawl-110-plan-ramp. #91134 remains the best live canonical PR for the bundled channel config metadata CI guard. The cluster also contains unrelated Telegram account-agentId and Paperclip gateway compatibility work; those should not be forced into the #91134 duplicate family. #74635 is already closed, so no close action is valid. The linked security-sensitive #63924 is quarantined with route_security only.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 6 |
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
| #91134 | keep_canonical | planned | canonical | Best live canonical for the bundled channel config metadata CI guard, but merge is blocked by job mode and blocked_actions. |
| #80536 | keep_related | planned | related | Same root-cause family as #91134, but keep the issue open until the canonical PR lands or a maintainer decides otherwise. |
| #63380 | keep_independent | planned | independent | Distinct Telegram routing/config regression, not a duplicate of the bundled metadata CI guard. |
| #74974 | keep_independent | planned | independent | Distinct Gateway/Paperclip compatibility work; keep it out of the #91134 bundled metadata CI canonical family. |
| #74635 | keep_closed | skipped | superseded | Already closed; no mutating close action is valid. |
| #63924 | route_security | planned | security_sensitive | Security-sensitive linked ref must be routed to central OpenClaw security handling without affecting non-security classification. |

## Needs Human

- none
