---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-93-bulk-plan-20260615-a"
mode: "plan"
run_id: "27523517246"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27523517246"
head_sha: "049f47ae3011c5056036ff5587d219164531b584"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T04:16:19.502Z"
canonical: null
canonical_issue: null
canonical_pr: null
actions_total: 6
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-93-bulk-plan-20260615-a

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27523517246](https://github.com/openclaw/clownfish/actions/runs/27523517246)

Workflow conclusion: success

Worker result: planned

Canonical: unknown

## Summary

Plan-mode classification split the cluster into parseAbsoluteTimeMs coverage and stagger coverage families. Job notes explicitly mark #91656 and #92471 as security-signal refs, so those exact PRs are quarantined with non-mutating route_security actions. Unrelated non-security issue/PR refs are classified without closure or merge recommendations because close/merge/fix/low-signal cleanup are disabled or blocked by the plan-mode gates.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 6 |
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
| #91654 | keep_canonical | planned | canonical | Best non-security canonical for the parseAbsoluteTimeMs coverage family after quarantining #91656. |
| #91656 | route_security | planned | security_sensitive | Exact job-marked security-signal ref must be routed to central OpenClaw security handling. |
| #92467 | keep_canonical | planned | canonical | Best non-security canonical for the stagger coverage family after quarantining #92471 and not relying on failing #92576. |
| #92471 | route_security | planned | security_sensitive | Exact job-marked security-signal ref must be routed to central OpenClaw security handling. |
| #92576 | keep_related | planned | related | Related stagger coverage PR, but failing checks and disabled merge/close gates make non-mutating classification appropriate. |
| #92030 | keep_closed | skipped | fixed_by_candidate | Historical merged stagger fix; included only as closed context evidence. |

## Needs Human

- none
