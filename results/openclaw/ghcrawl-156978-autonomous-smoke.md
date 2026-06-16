---
repo: "openclaw/openclaw"
cluster_id: "ghcrawl-156978-autonomous-smoke"
mode: "autonomous"
run_id: "27584190732"
workflow_run_id: "27584190732"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27584190732"
head_sha: "3eaef20c39c95c760c2eeb4e61adf6ea57afc054"
workflow_conclusion: "failure"
result_status: "needs_human"
published_at: "2026-06-16T01:43:38.856Z"
canonical: "https://github.com/openclaw/openclaw/issues/38829"
canonical_issue: "https://github.com/openclaw/openclaw/issues/38829"
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

# ghcrawl-156978-autonomous-smoke

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27584190732](https://github.com/openclaw/clownfish/actions/runs/27584190732)

Workflow conclusion: failure

Worker result: needs_human

Canonical: https://github.com/openclaw/openclaw/issues/38829

## Summary

#38829 remains the live canonical issue for the bundled TUI live transcript update gap. #43341 is already closed and stays historical duplicate context. Linked PR #73402 is security-sensitive and is routed to central OpenClaw security handling. The prior cluster-scoped fix_needed/build_fix_artifact actions are omitted because the deterministic validator treats cluster-scoped actions in this mixed-security cluster as security-sensitive targets; no GitHub mutation or executable fix artifact is planned from this repaired result.

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
| #38829 | keep_canonical | planned | canonical | #38829 is the best surviving open canonical issue and should remain open until a safe non-security fix path lands. |
| #43341 | keep_closed | skipped | duplicate | Already-closed refs must not receive close actions; #43341 remains historical duplicate context for #38829. |
| #73402 | route_security | planned | security_sensitive | Security-sensitive PRs are routed to central OpenClaw security handling and are not closed, merged, commented on, repaired, or used as a direct mutation target by this worker. |

## Needs Human

- The prior cluster-scoped fix_needed/build_fix_artifact actions are not safely repairable from the provided artifacts because deterministic validation failed them as `cluster:ghcrawl-156978-autonomous-smoke security-sensitive target must use route_security` in a cluster containing security-sensitive #73402. #73402 is already routed with route_security; a refreshed non-security fix job or planner adjustment is needed before emitting an executable fix artifact for #38829.
