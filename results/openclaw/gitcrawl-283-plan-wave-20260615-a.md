---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-283-plan-wave-20260615-a"
mode: "plan"
run_id: "27520884689"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27520884689"
head_sha: "872a0ab6af9f5f189014062d7bd0a2367b003dde"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T02:47:39.934Z"
canonical: "#88307"
canonical_issue: "#88307"
canonical_pr: null
actions_total: 3
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-283-plan-wave-20260615-a

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27520884689](https://github.com/openclaw/clownfish/actions/runs/27520884689)

Workflow conclusion: success

Worker result: planned

Canonical: #88307

## Summary

Classified the three hydrated open candidates. #88307 remains the canonical issue for the current generated-image duplicate-delivery regression; #87995 is an older duplicate/superseded report for the same duplicate-delivery family; #88323 is related candidate fix work but blocked from merge/closeout by failing checks and unresolved ClawSweeper review findings.

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
| #88307 | keep_canonical | planned | canonical | Best live canonical because it is the newest open issue with current post-handoff reproduction evidence for the generated-image duplicate Discord delivery bug. |
| #87995 | close_duplicate | planned | duplicate | Duplicate closeout is safe in plan mode because the older issue has no unique current root-cause path beyond the newer canonical #88307 post-handoff report. |
| #88323 | keep_related | planned | related | The PR is related and plausible as a fix path for #88307, but it cannot be treated as merge-ready or used for fixed-by-candidate closeout in this plan. |

## Needs Human

- none
