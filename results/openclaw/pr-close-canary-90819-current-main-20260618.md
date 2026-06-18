---
repo: "openclaw/openclaw"
cluster_id: "pr-close-canary-90819-current-main-20260618"
mode: "execute"
run_id: "27778016254"
workflow_run_id: "27778016254"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27778016254"
head_sha: "68fc36be1fe84450c5470c1926cb4bb21ddd76c4"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-18T17:41:58.085Z"
canonical: null
canonical_issue: null
canonical_pr: null
actions_total: 1
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# pr-close-canary-90819-current-main-20260618

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27778016254](https://github.com/openclaw/clownfish/actions/runs/27778016254)

Workflow conclusion: success

Worker result: planned

Canonical: unknown

## Summary

Verified #90819 is open in the hydrated preflight, non-security-sensitive, and current main at a48e5091cba7cc62e5d6a1c024801a6c65d20cf0 contains the same request-scoped plugin workspace-dir pin plus focused regression tests. The close action is downgraded to non-mutating keep_related because close_fixed_by_candidate requires a hydrated candidate_fix/canonical/duplicate target, and the covering fix here is current main rather than a separate hydrated PR/issue ref.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 1 |
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

## Apply Audit

| Attempt | Source | Target | Action | Status | Reason |
| --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |  |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #90819 | keep_related | planned | related | Non-mutating downgrade: validator requires a candidate/canonical/duplicate ref for close_fixed_by_candidate, but the safe evidence identifies current main commit a48e5091cba7cc62e5d6a1c024801a6c65d20cf0 as the covering fix, not a separate hydrated issue/PR ref. |

## Needs Human

- none
