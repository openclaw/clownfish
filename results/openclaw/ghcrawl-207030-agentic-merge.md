---
repo: "openclaw/openclaw"
cluster_id: "ghcrawl-207030-agentic-merge"
mode: "autonomous"
run_id: "24978124198"
run_url: "https://github.com/openclaw/clownfish/actions/runs/24978124198"
head_sha: "e8d437d9978c397d8d3fb39c23597d4e5c1d98bf"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-04-27T05:29:16.900Z"
canonical: "https://github.com/openclaw/openclaw/issues/52861"
canonical_issue: "https://github.com/openclaw/openclaw/issues/52861"
canonical_pr: null
actions_total: 11
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# ghcrawl-207030-agentic-merge

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/24978124198](https://github.com/openclaw/clownfish/actions/runs/24978124198)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/52861

## Summary

Hydrated preflight shows no security-sensitive refs and no open merge candidate. #52861 remains the broad canonical issue for automatic per-turn prompt overhead reduction. #14785, #14619, and #64760 are related narrower open trackers with distinct scope and maintainer/bot keep-open evidence, so no closeout is planned. Closed refs are retained only as historical evidence.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 11 |
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
| #52861 | keep_canonical | planned | canonical | Best surviving broad canonical issue for the cluster; no merge or close action is safe or needed. |
| #14785 | keep_related | planned | related | Related narrower subtracker, not a duplicate of #52861 because it owns distinct tool-schema implementation details. |
| #64760 | keep_related | planned | related | Related skills-specific optimization with unique remaining work; closure would lose distinct scope. |
| #58743 | keep_closed | skipped | related | Already closed; no mutation planned. |
| #14619 | keep_related | planned | related | Related narrower open issue with distinct config/prompt behavior; no closeout planned. |
| #2 | keep_closed | skipped | independent | Closed unrelated linked context; no mutation planned. |
| #26948 | keep_closed | skipped | related | Closed historical related report; no mutation planned. |
| #28397 | keep_closed | skipped | related | Closed historical related report; no mutation planned. |
| #30004 | keep_closed | skipped | related | Closed historical related report; no mutation planned. |
| #30359 | keep_closed | skipped | related | Closed PR is historical partial-fix evidence, not a live merge candidate. |
| #64761 | keep_closed | skipped | duplicate | Already closed duplicate of hydrated #14785; no mutation planned. |

## Needs Human

- none
