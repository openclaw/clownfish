---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-17430-autonomous-smoke"
mode: "autonomous"
run_id: "27598134897"
workflow_run_id: "27598134897"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27598134897"
head_sha: "3456041b23c90140b1b609eea90480f39847d880"
workflow_conclusion: "success"
result_status: "needs_human"
published_at: "2026-06-16T06:20:47.544Z"
canonical: null
canonical_issue: null
canonical_pr: null
actions_total: 9
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 1
---

# gitcrawl-17430-autonomous-smoke

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27598134897](https://github.com/openclaw/clownfish/actions/runs/27598134897)

Workflow conclusion: success

Worker result: needs_human

Canonical: unknown

## Summary

No GitHub mutations planned. The hydrated preflight artifact materially diverges from the job description: the job describes a GitHub username/publishing failure cluster with #170 as an open candidate, but live hydrated state shows #170 is a closed Slack PR and every provided ref is already closed. A refreshed cluster/job is needed before choosing any canonical path or closeout.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 9 |
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
| #170 | keep_closed | skipped | needs_human | Closed live state plus title mismatch blocks canonical selection for the intended username/publishing cluster. |
| #179 | keep_closed | skipped | independent | Already closed and unrelated to the intended cluster. |
| #187 | keep_closed | skipped | needs_human | The representative is closed and the hydrated issue does not match the intended canonical topic. |
| #293 | keep_closed | skipped | independent | Already closed and independent of the intended cluster. |
| #301 | keep_closed | skipped | independent | Already closed and independent of the intended cluster. |
| #303 | keep_closed | skipped | independent | Already closed and independent of the intended cluster. |
| #311 | keep_closed | skipped | independent | Already closed and independent of the intended cluster. |
| #312 | keep_closed | skipped | independent | Already closed and independent of the intended cluster. |
| cluster:gitcrawl-17430-autonomous-smoke | needs_human | blocked | needs_human | Canonical selection for the intended cluster is unclear because the hydrated refs do not match the job inventory; re-plan from fresh gitcrawl/GitHub state before any close, merge, or fix action. |

## Needs Human

- Re-plan cluster gitcrawl-17430-autonomous-smoke from fresh GitHub state: the hydrated refs are all closed and materially mismatch the job's publishing/GitHub-username cluster inventory.
