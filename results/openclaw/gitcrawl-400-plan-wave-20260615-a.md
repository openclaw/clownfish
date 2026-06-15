---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-400-plan-wave-20260615-a"
mode: "plan"
run_id: "27518827798"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27518827798"
head_sha: "bde7630054b9beb03f7c7699a1f6d7426b906c50"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T02:27:57.145Z"
canonical: "#91772"
canonical_issue: "#91772"
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

# gitcrawl-400-plan-wave-20260615-a

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27518827798](https://github.com/openclaw/clownfish/actions/runs/27518827798)

Workflow conclusion: success

Worker result: planned

Canonical: #91772

## Summary

Classified the hydrated open issue and PR using the provided preflight artifact. #91772 remains the canonical open issue for the managed npm-root EOVERRIDE regression; #91786 is a related open fix PR that claims to address #91772 but is not merge-planned in this job because merge/fix actions are blocked and maintainer review/merge preflight are incomplete.

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
| #91772 | keep_canonical | planned | canonical | #91772 is the best live canonical because it is the open source report with current reproduction details and no evidence in the artifact that the fix has landed. |
| #91786 | keep_related | planned | related | #91786 is the related candidate fix for #91772, but this plan-mode job should not recommend merge or closure because merge/fix actions are blocked and maintainer review plus merge preflight are incomplete. |

## Needs Human

- none
