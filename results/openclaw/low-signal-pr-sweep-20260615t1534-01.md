---
repo: "openclaw/openclaw"
cluster_id: "low-signal-pr-sweep-20260615T1534-01"
mode: "plan"
run_id: "27560323972-1-0"
workflow_run_id: "27560323972"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27560323972"
head_sha: "61d2d7a61eeb9d8fe22ed20cc15f46b2ff4a4bb2"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-21T09:37:13.527Z"
canonical: null
canonical_issue: null
canonical_pr: null
actions_total: 4
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 1
---

# low-signal-pr-sweep-20260615T1534-01

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27560323972](https://github.com/openclaw/clownfish/actions/runs/27560323972)

Workflow conclusion: success

Worker result: planned

Canonical: unknown

## Summary

Reviewed the four hydrated open PRs in the low-signal sweep. None are boringly clear low-signal closures under the policy; three are focused, green PRs with proof, and one is a focused but proof-failing PR that should not be auto-closed on red checks alone.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 4 |
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

## Apply Audit

| Attempt | Source | Target | Action | Status | Reason |
| --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |  |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #93025 | keep_independent | planned | independent | Focused green PR with supplied proof; not eligible for low-signal closure. |
| #93222 | keep_independent | planned | independent | Focused green PR with supplied proof; not eligible for low-signal closure. |
| #92946 | keep_independent | planned | independent | Focused channel-delivery fix with proof and green checks; dirty merge state blocks merge work, not low-signal classification. |
| #55766 | needs_human | planned | needs_human | Focused PR with failed proof and unhydrated bot-review details; not boringly clear low-signal, and closure would require technical correctness judgment. |

## Needs Human

- #55766 needs maintainer judgment: it is a plausible focused ACP behavior fix, but Real behavior proof failed, manual verification is unchecked, and bot-review details were not hydrated.
