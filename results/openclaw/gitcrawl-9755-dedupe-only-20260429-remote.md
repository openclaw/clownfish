---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-9755-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "25137287214"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25137287214"
head_sha: "ca8a3303df8e547d7f06bee2c26da230fe0cdb72"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T04:05:51.308Z"
canonical: "https://github.com/openclaw/openclaw/pull/58112"
canonical_issue: null
canonical_pr: "https://github.com/openclaw/openclaw/pull/58112"
actions_total: 6
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-9755-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25137287214](https://github.com/openclaw/clownfish/actions/runs/25137287214)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/58112

## Summary

Classified #58112 as the canonical open PR for the sessions_spawn cwd inheritance bug. The transcript-header refs (#49523, #50454, #56133) and CLI --cwd PR #57415 are related but not duplicates, so no close/comment/label actions are planned.

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
| #58112 | keep_canonical | planned | canonical | #58112 remains the best canonical for the cluster's sessions_spawn cwd inheritance root cause, but review and check gates block any merge-style outcome. |
| #49523 | keep_related | planned | related | Related transcript-header bug family; keep open and do not dedupe into #58112. |
| #50454 | keep_related | planned | related | Related useful contributor PR for the transcript-header subfamily; not a duplicate of #58112 and not safe to close. |
| #56133 | keep_related | planned | related | Related transcript/gateway workspace-cwd candidate; keep open rather than close as duplicate or superseded. |
| #57415 | keep_related | planned | related | Same workspace/cwd area, different feature scope; keep open and do not dedupe into #58112. |
| #50099 | keep_closed | skipped | superseded | Already closed historical context; no mutation is valid. |

## Needs Human

- none
