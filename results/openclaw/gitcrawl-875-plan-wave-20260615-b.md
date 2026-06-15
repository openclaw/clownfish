---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-875-plan-wave-20260615-b"
mode: "plan"
run_id: "27519091746"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27519091746"
head_sha: "de7a4a9553b0a32003b8f88f0a5f7a5512c403ce"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T02:20:44.682Z"
canonical: "#87573"
canonical_issue: null
canonical_pr: "#87573"
actions_total: 2
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-875-plan-wave-20260615-b

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27519091746](https://github.com/openclaw/clownfish/actions/runs/27519091746)

Workflow conclusion: success

Worker result: planned

Canonical: #87573

## Summary

Plan-mode classification only. #87573 remains the live canonical PR for the active npm host repair cluster. #87942 is related to the same repair but should not be treated as a clean duplicate or merge candidate because it carries unrelated extra changes and has failed proof/readiness signals.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 2 |
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
| #87573 | keep_canonical | planned | canonical | #87573 is the best surviving canonical because it is the representative open PR, contains the focused npm-host repair, and has narrower scope than #87942, but it is not merge-ready and no merge/fix action is allowed in this job. |
| #87942 | keep_related | planned | related | #87942 is related to the canonical repair but not a clean duplicate closeout candidate: it is a rebased variant of #87573 with additional unrelated changes and failing proof/readiness signals. Keep it related rather than forcing duplicate/superseded closure in this plan. |

## Needs Human

- none
