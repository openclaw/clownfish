---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-2477-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "27594231530"
workflow_run_id: "27594231530"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27594231530"
head_sha: "8364aec238559663a0a8644042702a5c6ccea4db"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-16T04:34:46.707Z"
canonical: "https://github.com/openclaw/openclaw/pull/73915"
canonical_issue: "https://github.com/openclaw/openclaw/issues/65745"
canonical_pr: "https://github.com/openclaw/openclaw/pull/73915"
actions_total: 5
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-2477-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27594231530](https://github.com/openclaw/clownfish/actions/runs/27594231530)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/73915

## Summary

Classified the cluster from the hydrated preflight artifact. The only open item, #50011, is security-sensitive and should be routed to central OpenClaw security handling. Linked PR #50076 and merged PR #73915 are exact hydrated refs with security-sensitive routing requirements, so they are quarantined without mutation. The audit false-positive family represented by #51865/#65745 is already closed and covered by merged PR #73915/current main, so no close, merge, or fix actions are planned.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 5 |
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
| #50011 | route_security | planned | security_sensitive | Open security-sensitive issue is outside ProjectClownfish mutation scope and must be routed to central OpenClaw security handling. |
| #50076 | route_security | planned | security_sensitive | Hydrated security-sensitive linked PR should be quarantined; no GitHub close/comment/merge mutation is planned for this already-closed PR. |
| #51865 | keep_closed | skipped | fixed_by_candidate | Already closed and covered by the merged/current-main audit fix; no mutation is needed. |
| #65745 | keep_closed | skipped | canonical | Representative issue is already closed as implemented by the current-main audit fix. |
| #73915 | route_security | planned | security_sensitive | Exact hydrated PR ref is treated as security-sensitive by deterministic validation and must be routed rather than kept closed; no GitHub mutation is planned for this already-merged PR. |

## Needs Human

- none
