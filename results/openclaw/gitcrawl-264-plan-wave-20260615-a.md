---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-264-plan-wave-20260615-a"
mode: "plan"
run_id: "27519894288"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27519894288"
head_sha: "22d161e1bb6775432f7eb60a80e61685d748f60c"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T02:12:42.977Z"
canonical: "#89899"
canonical_issue: "#89425"
canonical_pr: "#89899"
actions_total: 5
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-264-plan-wave-20260615-a

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27519894288](https://github.com/openclaw/clownfish/actions/runs/27519894288)

Workflow conclusion: success

Worker result: planned

Canonical: #89899

## Summary

#89899 remains the best live canonical fix path for the speech-core bundled public-surface packaging/facade mismatch. #89425 is the original report and is now covered by #89899; #92355 is superseded by #89899 because its fallback targets a package dist path that the root npm artifact does not ship. #88853 is related but mixed with a separate poll/send-schema root cause, and #92240 is already closed.

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
| #89899 | keep_canonical | planned | canonical |  |
| #89425 | close_fixed_by_candidate | planned | fixed_by_candidate |  |
| #92355 | close_superseded | planned | superseded |  |
| #88853 | keep_related | planned | related | Related mixed branch; speech-core portion is superseded by #89899, but the poll/send-schema portion is outside this cluster. |
| #92240 | keep_closed | skipped | duplicate | Already closed; included only as hydrated linked context. |

## Needs Human

- none
