---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-112-plan-ramp"
mode: "plan"
run_id: "27518748577"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27518748577"
head_sha: "bde7630054b9beb03f7c7699a1f6d7426b906c50"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T02:27:57.090Z"
canonical: "#90890"
canonical_issue: "#90890"
canonical_pr: "#91533"
actions_total: 6
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-112-plan-ramp

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27518748577](https://github.com/openclaw/clownfish/actions/runs/27518748577)

Workflow conclusion: success

Worker result: planned

Canonical: #90890

## Summary

Classified the hydrated avatar-per-agent cluster in read-only plan mode. #90890 remains the canonical issue, and #91533 is the strongest current fix candidate; overlapping PRs should stay related/superseded until a merge-capable run or maintainer decision lands the canonical fix.

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
| #71639 | keep_closed | skipped | fixed_by_candidate | Already closed/merged context item; no mutation is valid. |
| #90890 | keep_canonical | planned | canonical | Best surviving canonical issue for the shared root cause. |
| #90931 | keep_related | planned | superseded | Overlapping useful PR, but superseded for this cluster by the cleaner currently passing candidate #91533; do not close before the canonical fix lands. |
| #90932 | keep_related | planned | superseded | Same root cause, but broad unrelated delta and failing checks make it unsafe as the canonical path. |
| #91447 | keep_related | planned | superseded | Useful overlapping contributor PR, but the stronger current canonical fix candidate is #91533; keep related until canonical fix disposition is known. |
| #91533 | keep_canonical | planned | canonical | Best current canonical fix candidate, but this plan-mode job cannot merge or open a fix PR. |

## Needs Human

- none
