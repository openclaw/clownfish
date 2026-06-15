---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-891-plan-wave-20260615-b"
mode: "plan"
run_id: "27519099775"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27519099775"
head_sha: "31c87ca3fe1fa037e42cb47214effc4eb921b052"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T02:10:12.683Z"
canonical: "#72500"
canonical_issue: "#72500"
canonical_pr: null
actions_total: 2
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 1
---

# gitcrawl-891-plan-wave-20260615-b

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27519099775](https://github.com/openclaw/clownfish/actions/runs/27519099775)

Workflow conclusion: success

Worker result: planned

Canonical: #72500

## Summary

Plan-only classification completed from the hydrated preflight artifact. #72500 remains the best live canonical for the broader Control UI credentials-gate flash on transient disconnected/prior-authenticated state. #85352 is related but should stay open because it adds a distinct macOS menu bar app open/reveal reproduction path and affected surface, so duplicate closure would be premature.

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
| #72500 | keep_canonical | planned | canonical | #72500 is open, hydrated, non-security-sensitive, and covers the central Control UI prior-authenticated reconnect/login-gate state bug across webchat and other Control UI routes. |
| #85352 | keep_related | planned | related | #85352 belongs in the same session-state credentials-gate flash family but should not be closed as a duplicate in this plan because its macOS menu bar app open path may require separate validation or app-shell handling. |

## Needs Human

- Maintainer/product decision still needed for the canonical fix design on #72500: keep authenticated UI mounted only for transient reconnect/prior-success states while returning to the credentials gate for first connect and explicit auth, pairing, scope, or revocation failures.
