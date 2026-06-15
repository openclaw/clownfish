---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-105-plan-ramp"
mode: "plan"
run_id: "27516212226"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27516212226"
head_sha: "55c1d70c5da8da84c47be43e492f5bca34739d4e"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T04:05:51.339Z"
canonical: "#91697"
canonical_issue: "#91697"
canonical_pr: null
actions_total: 5
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

Run: [https://github.com/openclaw/clownfish/actions/runs/27516212226](https://github.com/openclaw/clownfish/actions/runs/27516212226)

Workflow conclusion: success

Worker result: planned

Canonical: #91697

## Summary

Plan-only classification: #91697 remains the open canonical issue. #91712, #91721, and #92188 are overlapping open contributor fix PRs for the same diagnostic-session ghost-entry root cause, but none should be closed, merged, or used for fixed-by closeout in this job. #92581 is already closed in hydrated live state and is kept closed.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 5 |
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
| #91697 | keep_canonical | planned | canonical | The representative remains open and is still the clearest canonical issue for this root cause; no landed or merge-ready fix displaces it. |
| #91712 | keep_related | planned | related | This is a useful open candidate fix for #91697, but the job blocks merge/fix actions and contributor PR closeout would be unsafe without a selected replacement or merge path. |
| #91721 | keep_related | planned | related | This is an alternate open candidate fix for the same canonical issue, with a distinct recovery-path approach. Keep it related rather than superseding or closing it in this read-only plan. |
| #92188 | keep_related | planned | related | This is related to #91697, but failing checks and weaker proof make it unsuitable for merge or fixed-by closeout in this cluster plan. |
| #92581 | keep_closed | skipped | related | Already closed in live state, so no closure, supersede, or fixed-by action is valid. |

## Needs Human

- none
