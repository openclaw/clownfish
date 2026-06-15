---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-803-bulk-plan-20260615-a"
mode: "plan"
run_id: "27523354015"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27523354015"
head_sha: "7085a31ba476fe810cf6138882445a069aabed15"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T04:10:12.114Z"
canonical: null
canonical_issue: null
canonical_pr: null
actions_total: 2
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-803-bulk-plan-20260615-a

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27523354015](https://github.com/openclaw/clownfish/actions/runs/27523354015)

Workflow conclusion: success

Worker result: planned

Canonical: unknown

## Summary

Plan mode only. #75860 is an open security-sensitive PR from the hydrated artifact and should be routed to central security handling. #87076 is a related but distinct non-security QMD scope-denial PR; it should stay open because it is not a duplicate and is blocked for merge by missing real behavior proof and dirty merge state.

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
| #75860 | route_security | planned | security_sensitive | #75860 is explicitly identified by the job and preflight artifact as security-sensitive, so it is out of ProjectClownfish backlog-cleanup scope and should be routed to central OpenClaw security handling. |
| #87076 | keep_related | planned | related | Keep #87076 open as related work rather than closing or merging it. It is a distinct non-security PR with useful scope-denial behavior, but it lacks real behavior proof and is dirty, so no merge or fixed-by-candidate closeout is appropriate. |

## Needs Human

- none
