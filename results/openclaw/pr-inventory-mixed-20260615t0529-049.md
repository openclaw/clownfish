---
repo: "openclaw/openclaw"
cluster_id: "pr-inventory-mixed-20260615T0529-049"
mode: "plan"
run_id: "27526388979"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27526388979"
head_sha: "575573c3a749b924aa260c57f419b6ec1b610ff8"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T05:44:15.470Z"
canonical: null
canonical_issue: null
canonical_pr: null
actions_total: 10
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# pr-inventory-mixed-20260615T0529-049

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27526388979](https://github.com/openclaw/clownfish/actions/runs/27526388979)

Workflow conclusion: success

Worker result: planned

Canonical: unknown

## Summary

Plan-mode PR inventory classification only. No GitHub mutations are planned; closed PRs stay closed, security-sensitive PRs are routed to central security handling, and open non-security PRs are kept for maintainer/product follow-up because they are not merge-ready and this job forbids merge/fix/raise_pr.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 10 |
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
| #73536 | keep_closed | skipped | superseded | Already closed in hydrated live state; preserve the existing closeout rather than planning a mutation. |
| #74687 | keep_closed | skipped | superseded | Already closed and superseded by the later hydrated restart-recovery fix path. |
| #75076 | route_security | planned | security_sensitive | Security-boundary and auth-hardening work is out of scope for this inventory worker. |
| #73511 | keep_related | planned | related | Useful focused candidate, but not merge-ready and this plan-mode job forbids merge and fix actions. |
| #74954 | keep_related | planned | related | Related useful work remains, but technical correctness needs maintainer judgment and no close/merge/fix is allowed here. |
| #75140 | route_security | planned | security_sensitive | Hydrated artifact classifies this ref as security-sensitive; quarantine the item only. |
| #74274 | keep_related | planned | related | Real related feature/bug work, but unresolved review findings and proof gaps block merge or closeout. |
| #73938 | route_security | planned | security_sensitive | Closed but security-sensitive; record non-mutating quarantine rather than any backlog cleanup action. |
| #73628 | keep_related | planned | related | Keep as related open work; do not close or merge because it has unresolved proof/review risk. |
| #73982 | route_security | planned | security_sensitive | Exec-policy/security-boundary changes must be routed to central handling. |

## Needs Human

- none
