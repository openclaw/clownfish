---
repo: "openclaw/openclaw"
cluster_id: "external-merge-preflight-104433-bcbc813b239d"
mode: "autonomous"
run_id: "29151956131"
workflow_run_id: "29151956131"
run_url: "https://github.com/openclaw/clownfish/actions/runs/29151956131"
head_sha: "dc97525f0ce60eaeb097469edd5d0e0c9d84cf72"
workflow_conclusion: "failure"
result_status: "planned"
published_at: "2026-07-11T12:15:48.549Z"
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

# external-merge-preflight-104433-bcbc813b239d

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/29151956131](https://github.com/openclaw/clownfish/actions/runs/29151956131)

Workflow conclusion: failure

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/104433

## Summary

External merge preflight passed for #104433 at bcbc813b239dd4d8568a770aa13b007344d03cad.

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
| #104433 | merge_canonical | blocked | canonical | GitHub test merge commit is not based on the current main SHA |

## Apply Audit

| Attempt | Source | Target | Action | Status | Reason |
| --- | --- | --- | --- | --- |
| 1 | apply | #104433 | merge_canonical | blocked | GitHub test merge commit is not based on the current main SHA |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #104433 | merge_canonical | planned | canonical | Deterministic external merge preflight passed on the exact current head. |

## Needs Human

- none
