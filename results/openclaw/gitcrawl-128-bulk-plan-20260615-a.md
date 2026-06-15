---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-128-bulk-plan-20260615-a"
mode: "plan"
run_id: "27520788809"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27520788809"
head_sha: "872a0ab6af9f5f189014062d7bd0a2367b003dde"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T02:47:39.890Z"
canonical: null
canonical_issue: null
canonical_pr: null
actions_total: 4
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-128-bulk-plan-20260615-a

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27520788809](https://github.com/openclaw/clownfish/actions/runs/27520788809)

Workflow conclusion: success

Worker result: planned

Canonical: unknown

## Summary

Plan-mode classification only. The hydrated preflight marks the direct tool-invocation issue and the gateway /tools/invoke PRs as security-sensitive or security-signal items, so the safe cluster result is scoped quarantine for those refs with no close, label, comment, merge, or fix action planned.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 4 |
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
| #37131 | route_security | planned | security_sensitive | The issue proposes a broad direct tool invocation surface that includes exec/write-style tools and is explicitly marked for security review, so it belongs in central OpenClaw security handling rather than ProjectClownfish closeout. |
| #63919 | route_security | planned | security_sensitive | Although #63919 is the representative, its direct host filesystem tool exposure is marked security-sensitive in the live preflight, so it cannot be treated as a canonical cleanup target in this worker result. |
| #79106 | route_security | planned | security_sensitive | The PR explicitly exposes exec through the HTTP tools invocation path, so it should be quarantined to central OpenClaw security handling and not deduped or closed here. |
| #85664 | route_security | planned | security_sensitive | Even though the hydrated item matrix marks #85664 security_sensitive=false, the job explicitly overrides this ref as a security-signal route-only item. The direct host filesystem read surface should be handled by central security review. |

## Needs Human

- none
