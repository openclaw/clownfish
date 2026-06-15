---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-105-plan-ramp"
mode: "plan"
run_id: "27518746910"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27518746910"
head_sha: "bde7630054b9beb03f7c7699a1f6d7426b906c50"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T02:27:57.088Z"
canonical: "#91697"
canonical_issue: "#91697"
canonical_pr: "#91712"
actions_total: 6
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-105-plan-ramp

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27518746910](https://github.com/openclaw/clownfish/actions/runs/27518746910)

Workflow conclusion: success

Worker result: planned

Canonical: #91697

## Summary

Plan-mode classification only. #91697 remains the live canonical issue. #91712 is the strongest open fix candidate by current hydrated evidence, but merge/fix actions are blocked by job frontmatter and no PR should be closed from this run because the open PRs contain useful overlapping contributor work. Closed PRs are historical evidence only.

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
| #91697 | keep_canonical | planned | canonical | Best surviving canonical for the shared root cause. |
| #91705 | keep_closed | skipped | superseded | Closed historical context only. |
| #91712 | keep_related | planned | related | Strongest current fix candidate, but plan mode and blocked merge/fix gates require non-mutating classification only. |
| #91721 | keep_related | planned | related | Useful overlapping contributor PR; do not close or supersede without a concrete merge/replacement path that preserves credit. |
| #92188 | keep_related | planned | related | Related but not the preferred candidate; failing lint and weaker proof block any stronger recommendation. |
| #92581 | keep_closed | skipped | superseded | Already closed; retain only as historical context. |

## Needs Human

- none
