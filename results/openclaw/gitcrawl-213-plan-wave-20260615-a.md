---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-213-plan-wave-20260615-a"
mode: "plan"
run_id: "27516702076"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27516702076"
head_sha: "6bb552b68729da7580c0ee53a6e211c17d1b2e3a"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T02:47:39.856Z"
canonical: "#84486"
canonical_issue: "#84486"
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

# gitcrawl-213-plan-wave-20260615-a

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27516702076](https://github.com/openclaw/clownfish/actions/runs/27516702076)

Workflow conclusion: success

Worker result: planned

Canonical: #84486

## Summary

Plan-only classification from the hydrated preflight artifact. #84486 remains the live canonical issue for the Feishu streaming-card message-loss report. #84501 is related but not a merge or fixed-by-candidate path in this job. #92199 and linked #91956 are related channel/message-delivery reports with distinct unresolved repro/root-cause questions. Already-closed linked PRs are retained as historical evidence only.

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
| #84486 | keep_canonical | planned | canonical | Open representative remains the best live canonical for this cluster. |
| #84501 | keep_related | planned | related | Related partial ACP PR, but not a safe canonical fix, merge candidate, or fixed-by-candidate closeout path for #84486. |
| #92199 | keep_related | planned | related | Same message-loss family, but different channel and unresolved event-stream root cause; do not close as a duplicate of #84486. |
| #91956 | keep_related | planned | related | Related Feishu streaming-card area, but distinct symptom and unresolved root cause; keep outside duplicate closeout. |
| #84509 | keep_closed | skipped | superseded | Already closed before this run; no action planned. |
| #92804 | keep_closed | skipped | related | Already closed by maintainer; retain as evidence against treating the ACP multi-done fix shape as canonical. |

## Needs Human

- none
