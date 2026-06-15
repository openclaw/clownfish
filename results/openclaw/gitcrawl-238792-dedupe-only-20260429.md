---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-238792-dedupe-only-20260429"
mode: "autonomous"
run_id: "25107648770"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25107648770"
head_sha: "904a86eec936498f7b09cd1b845053509b2c784e"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T04:57:52.627Z"
canonical: "#61080"
canonical_issue: null
canonical_pr: "https://github.com/openclaw/openclaw/pull/61080"
actions_total: 12
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-238792-dedupe-only-20260429

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25107648770](https://github.com/openclaw/clownfish/actions/runs/25107648770)

Workflow conclusion: success

Worker result: planned

Canonical: #61080

## Summary

Autonomous dedupe pass found no high-confidence closeout. #61080 remains the live canonical PR for the logs-label subcluster, while the other open PRs cover distinct Control UI localization surfaces and should stay open as related work. Closed hydrated refs are kept as historical context only; no security-sensitive refs were present.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 12 |
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
| #39692 | keep_closed | skipped | superseded | Already closed contributor PR; preserve as context and do not mutate. |
| #41703 | keep_closed | skipped | fixed_by_candidate | Closed feature request is historical context only. |
| #52776 | keep_related | planned | related | Related Control UI i18n work with unique remaining shell-surface scope; keep open. |
| #61036 | keep_closed | skipped | related | Closed related locale work; no action. |
| #61054 | keep_closed | skipped | related | Merged historical context only; no mutation. |
| #61062 | keep_closed | skipped | superseded | Already superseded and closed; no action. |
| #61073 | keep_related | planned | related | Distinct Instances-surface localization work, not a duplicate of the logs canonical. |
| #61080 | keep_canonical | planned | canonical | Best surviving canonical PR for the logs-label root cause. |
| #61092 | keep_related | planned | related | Related i18n surface with unique Skills screen scope; keep open. |
| #61104 | keep_related | planned | related | Related but distinct agent tools/skills panel localization work. |
| #61112 | keep_related | planned | related | Distinct markdown sidebar localization scope; keep open. |
| #73980 | keep_related | planned | related | Useful linked repair PR; keep related and leave open for its own review path. |

## Needs Human

- none
