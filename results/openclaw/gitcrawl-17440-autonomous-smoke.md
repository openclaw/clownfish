---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-17440-autonomous-smoke"
mode: "autonomous"
run_id: "27598203027"
workflow_run_id: "27598203027"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27598203027"
head_sha: "c323b85779d3dde167050599d8a037d9eab6dc7d"
workflow_conclusion: "success"
result_status: "needs_human"
published_at: "2026-06-16T06:20:47.545Z"
canonical: null
canonical_issue: null
canonical_pr: null
actions_total: 6
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 1
---

# gitcrawl-17440-autonomous-smoke

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27598203027](https://github.com/openclaw/clownfish/actions/runs/27598203027)

Workflow conclusion: success

Worker result: needs_human

Canonical: unknown

## Summary

Blocked on refreshed planning: the job inventory describes open ClawHub update reports, but the hydrated preflight artifact contains only already-closed, unrelated refs. The hinted canonical #169 is hydrated as a merged Notion skill PR, not the ClawHub issue, so no canonical path, closeout, merge, or executable fix artifact is safe from this run.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 6 |
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
| #169 | keep_closed | skipped | independent | Already closed and unrelated to the job's stated ClawHub update bug; cannot serve as canonical. |
| #177 | keep_closed | skipped | independent | Closed linked context only; no mutation target. |
| #178 | keep_closed | skipped | independent | Already closed and unrelated to the stated cluster; no close or merge action is valid. |
| #416 | keep_closed | skipped | independent | Closed context ref only; hydration does not support any ClawHub update classification. |
| #937 | keep_closed | skipped | independent | Already closed and unrelated to the stated cluster; no closure action is valid. |
| cluster:gitcrawl-17440-autonomous-smoke | needs_human | blocked | needs_human | The cluster changed materially or was mis-hydrated; a refreshed cluster plan is required before classification, closeout, merge, or fix work. |

## Needs Human

- Refresh/replan this cluster before mutation: the hydrated GitHub refs do not match the job inventory, leaving no live canonical ClawHub issue/PR to classify or fix.
