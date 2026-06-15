---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-242-plan-wave-20260615-a"
mode: "plan"
run_id: "27518781915"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27518781915"
head_sha: "bde7630054b9beb03f7c7699a1f6d7426b906c50"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T02:27:57.115Z"
canonical: "#91095"
canonical_issue: "#91095"
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

# gitcrawl-242-plan-wave-20260615-a

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27518781915](https://github.com/openclaw/clownfish/actions/runs/27518781915)

Workflow conclusion: success

Worker result: planned

Canonical: #91095

## Summary

Classified all three hydrated open refs. #91095 remains the canonical issue. #91315 and #91446 are related contributor PRs for the same sessions_spawn/TUI exposure problem, but neither is safe to close or merge in this plan: merge is blocked by job policy, and both have unresolved ClawSweeper review concerns around proof, config scope, and regression coverage.

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
| #91095 | keep_canonical | planned | canonical | Best surviving canonical thread for the root behavior question and maintainer/product decision. |
| #91315 | keep_related | planned | related | Related candidate fix for #91095, but not merge-ready and not safe to close or supersede in this plan. |
| #91446 | keep_related | planned | related | Related candidate fix for #91095, but not merge-ready and not safe to close or supersede in this plan. |

## Needs Human

- none
