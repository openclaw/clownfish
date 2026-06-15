---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-197-bulk-plan-20260615-a"
mode: "plan"
run_id: "27520834249"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27520834249"
head_sha: "872a0ab6af9f5f189014062d7bd0a2367b003dde"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T02:47:39.913Z"
canonical: "#92563"
canonical_issue: "#92563"
canonical_pr: null
actions_total: 3
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-197-bulk-plan-20260615-a

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27520834249](https://github.com/openclaw/clownfish/actions/runs/27520834249)

Workflow conclusion: success

Worker result: planned

Canonical: #92563

## Summary

Plan-mode classification only. #92563 remains the open canonical issue for the session-memory duplicate assistant-message bug. #92571 is an overlapping contributor fix PR but is not merge-ready because its Real behavior proof check failed and ClawSweeper review did not complete. #92577 is explicitly listed by the job as a security-signal ref and is routed to central security handling without affecting the non-security classification.

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
| #92563 | keep_canonical | planned | canonical | #92563 is the best live non-security canonical issue for this cluster. |
| #92571 | keep_related | planned | related | #92571 targets the canonical bug but is not merge-ready or closable in this plan because proof failed and merge/fix actions are blocked. |
| #92577 | route_security | planned | security_sensitive | #92577 is explicitly marked by the job as the security-signal item, so it is out of ProjectClownfish mutation scope and should be routed to central OpenClaw security handling. |

## Needs Human

- none
