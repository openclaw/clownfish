---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-784-plan-wave-20260615-b"
mode: "plan"
run_id: "27519053496"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27519053496"
head_sha: "30afd4b1d5fd5919294bee21d7dd4b30ef87b468"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T02:20:44.662Z"
canonical: "#85771"
canonical_issue: "#85771"
canonical_pr: null
actions_total: 2
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-784-plan-wave-20260615-b

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27519053496](https://github.com/openclaw/clownfish/actions/runs/27519053496)

Workflow conclusion: success

Worker result: planned

Canonical: #85771

## Summary

Read-only classification plan for the hydrated open candidates. #85771 remains the canonical open issue for the WebChat duplicate assistant-message regression. #86646 is related and appears to be the focused candidate fix, but no merge or fixed-by-candidate closeout is planned because the job blocks merge/fix/raise_pr and the PR still lacks merge preflight proof.

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
| #85771 | keep_canonical | planned | canonical | #85771 is the only open issue in the job's candidate set and remains the best canonical issue for this root cause. |
| #86646 | keep_related | planned | related | #86646 is a plausible focused fix for the canonical issue, but this read-only plan should keep it related instead of recommending a blocked merge or closing #85771 before a landed fix. |

## Needs Human

- none
