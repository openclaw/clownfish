---
repo: "openclaw/openclaw"
cluster_id: "issue-close-canary-73814-20260617-batch"
mode: "execute"
run_id: "27659597043"
workflow_run_id: "27659597043"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27659597043"
head_sha: "07f5cf1c51b56ec73738789745ec3ba85ac0adf8"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-17T01:31:44.778Z"
canonical: "#90008"
canonical_issue: "#90008"
canonical_pr: null
actions_total: 2
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 1
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# issue-close-canary-73814-20260617-batch

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27659597043](https://github.com/openclaw/clownfish/actions/runs/27659597043)

Workflow conclusion: success

Worker result: planned

Canonical: #90008

## Summary

Hydrated preflight state shows #73814 and #90008 are open, non-security issue refs describing the same installer stdin-inheritance failure. Plan one duplicate close for #73814 against canonical tracker #90008; leave #90008 open and unmutated.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 2 |
| Fix executed | 0 |
| Fix failed | 0 |
| Fix blocked | 0 |
| Applied executions | 1 |
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
| #73814 | close_duplicate | executed | duplicate | already closed with matching projectclownfish comment |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #90008 | keep_canonical | planned | canonical |  |
| #73814 | close_duplicate | planned | duplicate |  |

## Needs Human

- none
