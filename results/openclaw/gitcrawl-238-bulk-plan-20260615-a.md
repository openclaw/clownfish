---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-238-bulk-plan-20260615-a"
mode: "plan"
run_id: "27520856409"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27520856409"
head_sha: "872a0ab6af9f5f189014062d7bd0a2367b003dde"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T02:47:39.924Z"
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
needs_human_count: 1
---

# gitcrawl-238-bulk-plan-20260615-a

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27520856409](https://github.com/openclaw/clownfish/actions/runs/27520856409)

Workflow conclusion: success

Worker result: planned

Canonical: unknown

## Summary

Read-only plan: all three open candidates are security-sensitive under the preflight artifact and job notes, so they are scoped to central OpenClaw security handling with no close, label, merge, or fix action planned by Clownfish.

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
| Needs human | 1 |

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
| #91283 | route_security | planned | security_sensitive | Open issue #91283 changes exec approval boundary semantics and is explicitly security-sensitive in the hydrated artifact; route it instead of selecting a cleanup canonical or planning closure. |
| #91286 | route_security | planned | security_sensitive | Open PR #91286 touches exec approval security precedence and is explicitly marked as a security-signal ref; no merge, close, or fixed-by-candidate action is allowed in this worker path. |
| #91288 | route_security | planned | security_sensitive | Open PR #91288 is a security-signal fix candidate for the same exec approval boundary behavior; route it to central security handling rather than treating it as a merge or closeout candidate. |

## Needs Human

- Central OpenClaw security/product review is required for #91283, #91286, and #91288 before any maintainer decision on whether the exec approval floor semantics should change.
