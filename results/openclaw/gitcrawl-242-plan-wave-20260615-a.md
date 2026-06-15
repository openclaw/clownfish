---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-242-plan-wave-20260615-a"
mode: "plan"
run_id: "27516714491"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27516714491"
head_sha: "6bb552b68729da7580c0ee53a6e211c17d1b2e3a"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T02:47:39.861Z"
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
needs_human_count: 1
---

# gitcrawl-242-plan-wave-20260615-a

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27516714491](https://github.com/openclaw/clownfish/actions/runs/27516714491)

Workflow conclusion: success

Worker result: planned

Canonical: #91095

## Summary

Plan-only classification: #91095 remains the open canonical issue. #91315 and #91446 are related overlapping PR candidates for the same tool-exposure family, but neither should be closed or merged from this plan because both are useful contributor PRs and the hydrated bot reviews still identify proof/product-contract blockers.

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
| Needs human | 1 |

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
| #91095 | keep_canonical | planned | canonical | #91095 is the best live canonical because it contains the root report and still tracks the unresolved product/runtime contract. |
| #91315 | keep_related | planned | related | Related candidate fix, but not a duplicate-cleanup target and not merge-ready; keep open for maintainer decision and possible contributor-credit path. |
| #91446 | keep_related | planned | related | Related overlapping candidate fix, not safe to supersede or merge in this plan because proof, coverage, and product-contract questions remain open. |

## Needs Human

- Maintainer product/runtime decision remains for #91095: whether and how interactive TUI embedded and gateway-connected sessions should expose and execute `sessions_spawn` when defaults or per-agent subagent allowlists are configured.
