---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-52-pr-backlog-plan-20260615-a"
mode: "plan"
run_id: "27525179210"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27525179210"
head_sha: "71716f3d6bcb42c20a7b66dbaacc1fdabe4fd9cf"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T05:06:38.623Z"
canonical: "#11960"
canonical_issue: "#11960"
canonical_pr: null
actions_total: 7
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-52-pr-backlog-plan-20260615-a

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27525179210](https://github.com/openclaw/clownfish/actions/runs/27525179210)

Workflow conclusion: success

Worker result: planned

Canonical: #11960

## Summary

Read-only plan using the preflight artifact as live state. #11960 remains the best non-security canonical for the automatic daily/idle session-memory reset gap. #10142 and #51572 are related but not duplicates because they preserve distinct session-end and prune/completion scope. Security-sensitive refs are quarantined individually with route_security.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 7 |
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
| #11960 | keep_canonical | planned | canonical | Best surviving non-security canonical for the automatic session reset memory-persistence root cause. |
| #10142 | keep_related | planned | related | Same session lifecycle hook family, but #10142 has a distinct completion/session:end product surface and should not be closed as a duplicate of #11960. |
| #51572 | keep_related | planned | related | Related to #11960 but not a true duplicate because it carries unique prune/maintenance-session loss scope. |
| #43454 | route_security | planned | security_sensitive | Workspace/gateway lifecycle hook contract carries security-review labels and is out of ProjectClownfish backlog-cleanup scope. |
| #49019 | route_security | planned | security_sensitive | Result-return behavior for POST /hooks/agent is security-sensitive and should route to central OpenClaw security handling. |
| #67433 | route_security | planned | security_sensitive | This PR modifies a gateway hook endpoint result-return path with a security-boundary label, so it is quarantined read-only. |
| #80674 | route_security | planned | security_sensitive | Plugin-visible lifecycle and persistence hook expansion is labeled for security review and should be handled centrally. |

## Needs Human

- none
