---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-833-plan-wave-20260615-b"
mode: "plan"
run_id: "27519073831"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27519073831"
head_sha: "de7a4a9553b0a32003b8f88f0a5f7a5512c403ce"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T02:20:44.673Z"
canonical: "#76352"
canonical_issue: "#76352"
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

# gitcrawl-833-plan-wave-20260615-b

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27519073831](https://github.com/openclaw/clownfish/actions/runs/27519073831)

Workflow conclusion: success

Worker result: planned

Canonical: #76352

## Summary

Read-only plan classification only. #76352 remains the live canonical issue for the missing-lsof stale-pid startup warning. #76364 is the focused linked PR for the same root cause, but it is not merge-ready because the required real behavior proof check is failing and a maintainer comment says the branch needs an update against current main before Dependency Guard can pass. No close, merge, label, comment, or fix actions are planned.

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
| #76352 | keep_canonical | planned | canonical | The issue is the best surviving canonical tracking thread; the linked PR has not landed and the report should remain open for validation and follow-up. |
| #76364 | keep_related | planned | related | The PR is the linked candidate fix for the canonical issue, but failing proof and branch-update requirements block merge or fixed-by-candidate closeout. Keep it related for maintainer or contributor follow-up. |

## Needs Human

- none
