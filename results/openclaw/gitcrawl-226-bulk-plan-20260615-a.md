---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-226-bulk-plan-20260615-a"
mode: "plan"
run_id: "27520852120"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27520852120"
head_sha: "872a0ab6af9f5f189014062d7bd0a2367b003dde"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T02:47:39.921Z"
canonical: null
canonical_issue: null
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

# gitcrawl-226-bulk-plan-20260615-a

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27520852120](https://github.com/openclaw/clownfish/actions/runs/27520852120)

Workflow conclusion: success

Worker result: planned

Canonical: unknown

## Summary

Plan-mode classification only. All three listed open candidates are security-sensitive tool-policy/control-plane items in the preflight artifact, so they are routed to central OpenClaw security handling with no close, merge, label, comment, or fix action planned.

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
| #15032 | route_security | planned | security_sensitive | Security-sensitive tool boundary/control-plane item; quarantine this issue only and do not close or mutate it through ProjectClownfish. |
| #49567 | route_security | planned | security_sensitive | Security-sensitive binding-level tool-policy/config boundary item; route to central security handling rather than dedupe closure. |
| #58434 | route_security | planned | security_sensitive | Open PR changes a security-sensitive tool-access boundary and has failing proof/check evidence; no ProjectClownfish close or merge plan is safe. |

## Needs Human

- none
