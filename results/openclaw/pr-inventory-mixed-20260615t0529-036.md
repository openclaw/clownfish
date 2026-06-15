---
repo: "openclaw/openclaw"
cluster_id: "pr-inventory-mixed-20260615T0529-036"
mode: "plan"
run_id: "27526370929"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27526370929"
head_sha: "575573c3a749b924aa260c57f419b6ec1b610ff8"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T05:44:15.371Z"
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

# pr-inventory-mixed-20260615T0529-036

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27526370929](https://github.com/openclaw/clownfish/actions/runs/27526370929)

Workflow conclusion: success

Worker result: planned

Canonical: unknown

## Summary

Plan-mode PR inventory classification only. The shard has no shared canonical. Security-sensitive PRs #84779 and #84705 are routed to central security handling; the remaining open PRs are kept as independent or related follow-up work with no close, merge, or fix recommendation.

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
| #84779 | route_security | planned | security_sensitive |  |
| #84705 | route_security | planned | security_sensitive |  |
| #84666 | keep_independent | planned | independent |  |
| #84115 | keep_related | planned | related |  |
| #84111 | keep_related | planned | related |  |
| #83842 | keep_independent | planned | independent |  |
| #83826 | keep_independent | planned | independent |  |
| #83718 | keep_related | planned | related |  |
| #83703 | keep_independent | planned | independent |  |
| #83590 | keep_independent | planned | independent |  |

## Needs Human

- none
