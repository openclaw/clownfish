---
repo: "openclaw/openclaw"
cluster_id: "pr-inventory-ready_for_maintainer-20260615T154534-085"
mode: "plan"
run_id: "27560323972-1-87"
workflow_run_id: "27560323972"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27560323972"
head_sha: "61d2d7a61eeb9d8fe22ed20cc15f46b2ff4a4bb2"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-19T01:31:38.101Z"
canonical: null
canonical_issue: null
canonical_pr: null
actions_total: 25
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 5
---

# pr-inventory-ready_for_maintainer-20260615T154534-085

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27560323972](https://github.com/openclaw/clownfish/actions/runs/27560323972)

Workflow conclusion: success

Worker result: planned

Canonical: unknown

## Summary

Plan-only PR inventory classification. The hydrated artifact covers 20 open PRs, all treated as independent maintainer-review candidates with no shared canonical. Five listed refs were not hydrated in the preflight artifact, so they are scoped needs_human decisions rather than guessed classifications.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 25 |
| Fix executed | 0 |
| Fix failed | 0 |
| Fix blocked | 0 |
| Applied executions | 0 |
| Apply blocked | 0 |
| Apply skipped | 0 |
| Needs human | 5 |

## Fix Execution Actions

| Action | Status | Target | Branch | Reason |
| --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |

## Apply Audit

| Attempt | Source | Target | Action | Status | Reason |
| --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |  |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #92883 | needs_human | blocked | needs_human | Missing hydrated live state prevents an auditable classification. |
| #50177 | keep_independent | planned | independent | Standalone UI fix candidate requiring normal maintainer/check follow-up. |
| #51067 | keep_independent | planned | independent | Independent feature PR; keep for maintainer review. |
| #92613 | needs_human | blocked | needs_human | Missing hydrated live state prevents an auditable classification. |
| #90998 | keep_independent | planned | independent | Independent SMS channel fix candidate. |
| #92399 | needs_human | blocked | needs_human | Missing hydrated live state prevents an auditable classification. |
| #90846 | keep_independent | planned | independent | Independent media retention fix candidate. |
| #90864 | keep_independent | planned | independent | Independent task-classifier fix awaiting normal author/maintainer follow-up. |
| #90923 | keep_independent | planned | independent | Independent daemon availability fix candidate. |
| #89345 | keep_independent | planned | independent | Independent backup verification fix candidate. |
| #89369 | keep_independent | planned | independent | Independent agent session-state fix candidate. |
| #88815 | keep_independent | planned | independent | Independent broad feature PR requiring maintainer/product review. |
| #76092 | keep_independent | planned | independent | Independent daemon/runtime fix candidate. |
| #89469 | keep_independent | planned | independent | Independent agents feature candidate. |
| #50520 | keep_independent | planned | independent | Independent outbound metadata fix candidate blocked from merge/closeout by proof failure. |
| #63634 | keep_independent | planned | independent | Independent MCP compatibility fix candidate. |
| #92957 | needs_human | blocked | needs_human | Missing hydrated live state prevents an auditable classification. |
| #90709 | keep_independent | planned | independent | Independent broad Signal feature PR with conflicts requiring maintainer/author follow-up. |
| #92081 | keep_independent | planned | independent | Independent broad stacked feature PR requiring maintainer review. |
| #41892 | keep_independent | planned | independent | Independent UI feature PR blocked from merge/closeout by proof failure and author-waiting state. |
| #92939 | needs_human | blocked | needs_human | Missing hydrated live state prevents an auditable classification. |
| #59336 | keep_independent | planned | independent | Independent config regression fix candidate. |
| #60212 | keep_independent | planned | independent | Independent cron/message-delivery fix candidate with a failing proof check. |
| #66685 | keep_independent | planned | independent | Independent small logging/noise fix candidate. |
| #66985 | keep_independent | planned | independent | Independent exec-node fix candidate; contributor branch cannot be modified by maintainers. |

## Needs Human

- #92883 missing hydrated preflight item state
- #92613 missing hydrated preflight item state
- #92399 missing hydrated preflight item state
- #92957 missing hydrated preflight item state
- #92939 missing hydrated preflight item state
