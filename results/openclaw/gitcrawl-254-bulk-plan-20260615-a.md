---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-254-bulk-plan-20260615-a"
mode: "plan"
run_id: "27520871018"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27520871018"
head_sha: "872a0ab6af9f5f189014062d7bd0a2367b003dde"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T02:47:39.928Z"
canonical: "#90548"
canonical_issue: "#90548"
canonical_pr: null
actions_total: 5
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-254-bulk-plan-20260615-a

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27520871018](https://github.com/openclaw/clownfish/actions/runs/27520871018)

Workflow conclusion: success

Worker result: planned

Canonical: #90548

## Summary

Plan-only classification from the hydrated preflight artifact. #90548 remains the best live canonical for the macOS per-port lsof health-polling issue. #75767 is related but not a duplicate because it centers on SMB mount stat timeout behavior. #90622 is explicitly listed by the job as a security-signal ref and is routed to central security handling without blocking unrelated non-security classification.

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
| #90548 | keep_canonical | planned | canonical | Best surviving canonical for the macOS per-port lsof health-polling root cause. |
| #75767 | keep_related | planned | related | Same macOS lsof/gateway area, but #75767 has unique SMB-mounted-volume stat timeout reproduction and should not be closed as a duplicate of #90548. |
| #90622 | route_security | planned | security_sensitive | Security-signal item is quarantined to central OpenClaw security handling; no close, merge, label, comment, or fix action is planned for this PR. |
| #76352 | keep_independent | planned | independent | Linked lsof-area issue but independent Linux/no-lsof warning work, with its own linked PR path outside this cluster's hydrated primary candidates. |
| #14083 | keep_closed | skipped | fixed_by_candidate | Closed historical linked context only; no closure action is valid or needed. |

## Needs Human

- none
