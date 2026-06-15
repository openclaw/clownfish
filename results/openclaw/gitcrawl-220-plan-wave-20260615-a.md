---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-220-plan-wave-20260615-a"
mode: "plan"
run_id: "27519879419"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27519879419"
head_sha: "22d161e1bb6775432f7eb60a80e61685d748f60c"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T02:12:42.969Z"
canonical: "#91914"
canonical_issue: "#91914"
canonical_pr: "#91963"
actions_total: 3
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-220-plan-wave-20260615-a

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27519879419](https://github.com/openclaw/clownfish/actions/runs/27519879419)

Workflow conclusion: success

Worker result: planned

Canonical: #91914

## Summary

Hydrated preflight state keeps #91914 as the live canonical issue. #91963 is the focused candidate fix for #91914 but is not merge-ready because merge is blocked by job policy and current checks include failures. #91964 is the same root-cause report framed as runtime policy consistency, so it can be planned as a duplicate closeout of #91914 with contributor credit preserved.

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
| #91914 | keep_canonical | planned | canonical | #91914 is open, hydrated, and remains the clearest canonical issue for the root cause. |
| #91963 | keep_related | planned | related | #91963 is the relevant candidate fix for #91914, but this plan-mode job blocks merge and the current check state prevents any merge or fixed-by-candidate closeout recommendation. |
| #91964 | close_duplicate | planned | duplicate | #91964 duplicates the #91914 root cause and can be closed against the hydrated canonical issue with a comment preserving the framing as useful context. |

## Needs Human

- none
