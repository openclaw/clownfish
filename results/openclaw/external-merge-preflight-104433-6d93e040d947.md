---
repo: "openclaw/openclaw"
cluster_id: "external-merge-preflight-104433-6d93e040d947"
mode: "autonomous"
run_id: "29162234083"
workflow_run_id: "29162234083"
run_url: "https://github.com/openclaw/clownfish/actions/runs/29162234083"
head_sha: "610ad085235eb0bc3eff1b6ce18e3420542d1055"
workflow_conclusion: "failure"
result_status: "planned"
published_at: "2026-07-11T18:14:17.118Z"
canonical: "https://github.com/openclaw/openclaw/pull/104433"
canonical_issue: null
canonical_pr: "https://github.com/openclaw/openclaw/pull/104433"
actions_total: 1
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 1
apply_skipped: 0
needs_human_count: 0
---

# external-merge-preflight-104433-6d93e040d947

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/29162234083](https://github.com/openclaw/clownfish/actions/runs/29162234083)

Workflow conclusion: failure

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/104433

## Summary

External merge preflight passed for #104433 at 6d93e040d94723b4824c6a78238a9a7f2870a823.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 1 |
| Fix executed | 0 |
| Fix failed | 0 |
| Fix blocked | 0 |
| Applied executions | 0 |
| Apply blocked | 1 |
| Apply skipped | 0 |
| Needs human | 0 |

## Fix Execution Actions

| Action | Status | Target | Branch | Reason |
| --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #104433 | merge_canonical | blocked | canonical | main changed during stale test merge branch refresh |

## Apply Audit

| Attempt | Source | Target | Action | Status | Reason |
| --- | --- | --- | --- | --- |
| 1 | apply | #104433 | merge_canonical | blocked | main changed during stale test merge branch refresh |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #104433 | merge_canonical | planned | canonical | Deterministic external merge preflight passed on the exact current head. |

## Needs Human

- none
