---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-176-bulk-plan-20260615-a"
mode: "plan"
run_id: "27520818217"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27520818217"
head_sha: "872a0ab6af9f5f189014062d7bd0a2367b003dde"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T02:47:39.907Z"
canonical: "#74273"
canonical_issue: null
canonical_pr: "#74273"
actions_total: 3
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-176-bulk-plan-20260615-a

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27520818217](https://github.com/openclaw/clownfish/actions/runs/27520818217)

Workflow conclusion: success

Worker result: planned

Canonical: #74273

## Summary

Plan-mode classification for three open candidates. #84902 is no longer the best landing path and is planned as superseded by the already-merged hydrated fix path #74273/current main. #90703 and #92040 are routed to central security handling because the job explicitly marks both as security-signal refs requiring route_security.

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
| #84902 | close_superseded | planned | superseded | The representative is open but no longer the best live canonical; the hydrated artifact shows it has been reviewed as stale/superseded by current main and #74273. |
| #90703 | route_security | planned | security_sensitive | The job explicitly requires central security routing for this exact ref, so ProjectClownfish should not mutate it. |
| #92040 | route_security | planned | security_sensitive | The job explicitly requires central security routing for this exact ref, so ProjectClownfish should not mutate it. |

## Needs Human

- none
