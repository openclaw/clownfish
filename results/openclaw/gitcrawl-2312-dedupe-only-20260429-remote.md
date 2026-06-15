---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-2312-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "25132950945"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25132950945"
head_sha: "e5e8212693f31b1f59eff0d60675a97be8c33e90"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T04:57:52.960Z"
canonical: "https://github.com/openclaw/openclaw/issues/18160"
canonical_issue: "https://github.com/openclaw/openclaw/issues/18160"
canonical_pr: null
actions_total: 5
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-2312-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25132950945](https://github.com/openclaw/clownfish/actions/runs/25132950945)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/18160

## Summary

Hydrated preflight shows #18160 is the only open cluster member and is the current canonical tracker. Closed #37651 and #50558 are already duplicate-closed to #18160, and closed PR #51276 is useful historical implementation evidence but not a viable candidate fix. No close, comment, label, merge, or fix mutation is planned.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 5 |
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
| #18160 | keep_canonical | planned | canonical | Closed representative #50558 is obsolete; #18160 is the live canonical issue for the shell/exec cron payload request. |
| #37651 | keep_closed | skipped | duplicate | #37651 is already closed as a duplicate of the live canonical issue #18160. |
| #50558 | keep_closed | skipped | duplicate | #50558 is already closed and #18160 is the current open canonical tracker. |
| #51276 | keep_closed | skipped | related | #51276 is useful historical context for #18160 but is already closed unmerged and is not a viable candidate fix in this dedupe-only job. |
| #1 | keep_closed | skipped | independent | #1 is an incidental linked closed PR and is independent of this cluster. |

## Needs Human

- none
