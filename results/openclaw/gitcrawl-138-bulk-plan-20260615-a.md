---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-138-bulk-plan-20260615-a"
mode: "plan"
run_id: "27520792965"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27520792965"
head_sha: "872a0ab6af9f5f189014062d7bd0a2367b003dde"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T02:47:39.893Z"
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

# gitcrawl-138-bulk-plan-20260615-a

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27520792965](https://github.com/openclaw/clownfish/actions/runs/27520792965)

Workflow conclusion: success

Worker result: planned

Canonical: unknown

## Summary

Plan mode only. All four open candidates are security-sensitive or explicitly security-signal scoped in the job/preflight, so the only safe cluster action is scoped route_security for each item. No duplicate close, merge, fixed-by-candidate closeout, or fix artifact is planned.

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
| #29945 | route_security | planned | security_sensitive | Security-sensitive issue; quarantine this exact item with route_security and do not close or otherwise mutate it in ProjectClownfish. |
| #39065 | route_security | planned | security_sensitive | Security-sensitive PR and not merge-ready; route to central security handling instead of selecting it as a cleanup canonical or merge candidate. |
| #41058 | route_security | planned | security_sensitive | Security-sensitive issue; route this item to central security handling and avoid dedupe closure. |
| #42617 | route_security | planned | security_sensitive | Explicit job-level security-signal PR; route this exact item to central security handling. Failing proof also blocks any merge or fixed-by-candidate closeout. |

## Needs Human

- none
