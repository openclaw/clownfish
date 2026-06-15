---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-13978-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "25109794942"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25109794942"
head_sha: "7ac7590296085c93e29434b3af3e919aa257e029"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T04:57:52.767Z"
canonical: "https://github.com/openclaw/openclaw/issues/37843"
canonical_issue: "https://github.com/openclaw/openclaw/issues/37843"
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

# gitcrawl-13978-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25109794942](https://github.com/openclaw/clownfish/actions/runs/25109794942)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/37843

## Summary

Hydrated preflight shows no security-sensitive refs and no open duplicate that can be closed. The closed representative #58485 is obsolete; #37843 is the best surviving open canonical for the narrow cron payload.model/default-sentinel subfamily. The other open candidates are related but distinct follow-ups and should remain open.

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
| #58485 | keep_closed | skipped | superseded | Closed representative is obsolete; do not mutate already-closed refs. |
| #37843 | keep_canonical | planned | canonical | Best surviving open canonical for the narrow cron payload.model/default-sentinel subfamily. |
| #42397 | keep_related | planned | related | Related model-routing feature request with distinct scope; keep open. |
| #42631 | keep_related | planned | related | Related cron model-routing gap with a different runtime contract; keep open. |
| #45494 | keep_related | planned | related | Related cron/failover bug with distinct root cause; keep open. |
| #51251 | keep_related | planned | related | Related session override persistence/UX issue with unique scope; keep open. |
| #57076 | keep_closed | skipped | superseded | Closed PR is historical context only. |

## Needs Human

- none
