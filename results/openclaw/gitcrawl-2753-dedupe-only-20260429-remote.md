---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-2753-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "25134525694"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25134525694"
head_sha: "b9f5ebae325b39171f8129a731bbca8bf5b88966"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T04:57:53.000Z"
canonical: "https://github.com/openclaw/openclaw/tree/9b536ed3a925d629dcc507525684b2743258553c"
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

# gitcrawl-2753-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25134525694](https://github.com/openclaw/clownfish/actions/runs/25134525694)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/tree/9b536ed3a925d629dcc507525684b2743258553c

## Summary

Preflight shows both job-open candidates are now closed, so no close/comment/label mutation is needed. The obsolete proxy-environment PRs are kept closed as superseded by current main service-proxy policy; the linked security-sensitive issue is quarantined only.

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
| #41319 | keep_closed | skipped | superseded | Already closed; no further mutation is allowed or needed. |
| #68377 | keep_closed | skipped | superseded | Already closed; no further mutation is allowed or needed. |
| #72996 | route_security | planned | security_sensitive | Security-sensitive linked ref must be routed to central OpenClaw security handling, scoped only to that item. |

## Needs Human

- none
