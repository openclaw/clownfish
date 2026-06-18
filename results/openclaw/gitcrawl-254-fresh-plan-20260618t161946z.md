---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-254-fresh-plan-20260618t161946z"
mode: "plan"
run_id: "27774039014-1-15"
workflow_run_id: "27774039014"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27774039014"
head_sha: "e70d2f096efd01487cdadb1b7e83853618e965da"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-18T16:31:57.765Z"
canonical: "#90548"
canonical_issue: "#90548"
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

# gitcrawl-254-fresh-plan-20260618t161946z

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27774039014](https://github.com/openclaw/clownfish/actions/runs/27774039014)

Workflow conclusion: success

Worker result: planned

Canonical: #90548

## Summary

Read-only plan: keep #90548 as the live canonical issue and classify #75767 as related rather than a duplicate because it has a distinct SMB-mounted-volume lsof stat() timeout reproduction path. No GitHub mutations, fix PRs, merges, or closures are planned.

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

## Apply Audit

| Attempt | Source | Target | Action | Status | Reason |
| --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |  |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #90548 | keep_canonical | planned | canonical | #90548 remains open and is still the best representative for the broader macOS per-port lsof port-health polling failure family. |
| #75767 | keep_related | planned | related | The issues overlap in macOS lsof-based port inspection, but #75767 includes a distinct SMB stat() timeout reproduction and gateway restart/force path, so it should stay related rather than be closed as a duplicate. |

## Needs Human

- none
