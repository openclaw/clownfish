---
repo: "openclaw/openclaw"
cluster_id: "external-merge-preflight-104404-f29f14e535c4"
mode: "autonomous"
run_id: "29154894380"
workflow_run_id: "29154894380"
run_url: "https://github.com/openclaw/clownfish/actions/runs/29154894380"
head_sha: "7ed849959dd2bc3311287680e0ccc3e4a4e1ef94"
workflow_conclusion: "failure"
result_status: "planned"
published_at: "2026-07-11T14:04:11.164Z"
canonical: "https://github.com/openclaw/openclaw/pull/104404"
canonical_issue: null
canonical_pr: "https://github.com/openclaw/openclaw/pull/104404"
actions_total: 1
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 1
apply_skipped: 0
needs_human_count: 0
---

# external-merge-preflight-104404-f29f14e535c4

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/29154894380](https://github.com/openclaw/clownfish/actions/runs/29154894380)

Workflow conclusion: failure

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/104404

## Summary

External merge preflight passed for #104404 at f29f14e535c4cb466a596e4e8fa2a9860ce89a52.

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
| #104404 | merge_canonical | blocked | canonical | main changed during stale test merge branch refresh |

## Apply Audit

| Attempt | Source | Target | Action | Status | Reason |
| --- | --- | --- | --- | --- |
| 1 | apply | #104404 | merge_canonical | blocked | main changed during stale test merge branch refresh |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #104404 | merge_canonical | planned | canonical | Deterministic external merge preflight passed on the exact current head. |

## Needs Human

- none
