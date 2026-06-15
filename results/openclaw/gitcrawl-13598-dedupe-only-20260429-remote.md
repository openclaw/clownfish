---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-13598-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "25109716569"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25109716569"
head_sha: "7ac7590296085c93e29434b3af3e919aa257e029"
workflow_conclusion: "success"
result_status: "needs_human"
published_at: "2026-06-15T04:57:52.735Z"
canonical: null
canonical_issue: null
canonical_pr: null
actions_total: 4
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 1
---

# gitcrawl-13598-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25109716569](https://github.com/openclaw/clownfish/actions/runs/25109716569)

Workflow conclusion: success

Worker result: needs_human

Canonical: unknown

## Summary

Classified the four open candidates from the hydrated preflight. The closed representative #51815 remains historical evidence only; no single live canonical replaces it because the open candidates split across gateway, config CLI, agent/Lobster CLI, and WSL browser surfaces. No close, label, merge, or fix action is safe for this dedupe-only job.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 4 |
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
| #49012 | keep_related | planned | related | Related gateway/service diagnostics report, but not a high-confidence duplicate or fixed-by-candidate closeout. |
| #57570 | keep_related | planned | related | Related CLI/config startup report remains open because the hydrated evidence does not prove a duplicate or completed fix. |
| #59361 | needs_human | planned | needs_human | Maintainer judgment is needed on whether bundled Lobster/llm-task should expose plugin-owned root CLI commands or whether docs should direct users to the agent tool / openclaw.invoke flow. |
| #68966 | keep_independent | planned | independent | Independent WSL browser crash/timeout report; no hydrated canonical or candidate fix supports closure. |

## Needs Human

- For #59361, decide whether bundled Lobster/llm-task should expose plugin-owned root CLI commands or whether docs should direct users to the agent tool / openclaw.invoke flow; current main only resolves part of the agent selector behavior.
