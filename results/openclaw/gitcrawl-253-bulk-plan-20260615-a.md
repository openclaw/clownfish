---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-253-bulk-plan-20260615-a"
mode: "plan"
run_id: "27520869983"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27520869983"
head_sha: "872a0ab6af9f5f189014062d7bd0a2367b003dde"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T02:47:39.927Z"
canonical: "#51762"
canonical_issue: null
canonical_pr: "#51762"
actions_total: 3
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-253-bulk-plan-20260615-a

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27520869983](https://github.com/openclaw/clownfish/actions/runs/27520869983)

Workflow conclusion: success

Worker result: planned

Canonical: #51762

## Summary

Plan-only classification: quarantine the security-signal issue/PR refs #90573 and #90603 with route_security, and keep #51762 as the non-security canonical PR for the broader configurable default-agent-id work. No close, merge, label, comment, fix, or PR creation actions are planned.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 3 |
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
| #51762 | keep_canonical | planned | canonical | Best surviving non-security open PR for the configurable default-agent-id family; keep open for maintainer review without mutation. |
| #90573 | route_security | planned | security_sensitive | Security-signal issue; route only this item to central OpenClaw security handling and do not mutate it in Clownfish. |
| #90603 | route_security | planned | security_sensitive | Security-sensitive PR touching secrets discovery; quarantine for central security handling and do not close, merge, or repair through Clownfish. |

## Needs Human

- none
