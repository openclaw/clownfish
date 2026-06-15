---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-174-plan-wave-20260615-a"
mode: "plan"
run_id: "27516690379"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27516690379"
head_sha: "6bb552b68729da7580c0ee53a6e211c17d1b2e3a"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T04:05:51.359Z"
canonical: "#72021"
canonical_issue: "#72021"
canonical_pr: "#87590"
actions_total: 6
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-174-plan-wave-20260615-a

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27516690379](https://github.com/openclaw/clownfish/actions/runs/27516690379)

Workflow conclusion: success

Worker result: planned

Canonical: #72021

## Summary

Representative #74114 is already closed unmerged, so #72021 is the live canonical issue for the recallCount-vs-signalCount promotion-gate contract. #87590 is the stronger open annotation PR for the related #87588 display issue, while #87589 is superseded by #87590. Security-linked #67363 is routed only to central security handling.

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
| #67363 | route_security | planned | security_sensitive | Security-sensitive linked issue is outside Clownfish backlog cleanup and should route to central OpenClaw security handling only. |
| #72021 | keep_canonical | planned | canonical | #72021 is the best live canonical for the promotion-gate signal contract after #74114 closed. |
| #74114 | keep_closed | skipped | superseded | Already-closed historical PR; no closure action is valid. Keep #72021 as the live canonical issue. |
| #87588 | keep_closed | skipped | related | Already closed; keep it as related historical context for the annotation subcluster rather than reopening or reclosing. |
| #87589 | close_superseded | planned | superseded | #87589 overlaps the same annotation fix path as #87590 but has weaker proof and no test coverage; #87590 is the clearer replacement PR path. |
| #87590 | keep_canonical | planned | canonical | #87590 is the best open PR for the related annotation/display subcluster, but merge is blocked by job mode and missing clean review preflight. |

## Needs Human

- none
