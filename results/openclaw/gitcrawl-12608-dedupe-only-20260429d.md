---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-12608-dedupe-only-20260429d"
mode: "autonomous"
run_id: "25143182990"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25143182990"
head_sha: "fed76c211ce49d72a75810a0ccba3e2f6c6d43d3"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T04:05:51.335Z"
canonical: "https://github.com/openclaw/openclaw/issues/67088"
canonical_issue: "https://github.com/openclaw/openclaw/issues/67088"
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

# gitcrawl-12608-dedupe-only-20260429d

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25143182990](https://github.com/openclaw/clownfish/actions/runs/25143182990)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/67088

## Summary

Hydrated preflight state keeps #67088 as the open canonical issue. #67115 is the same bug's open, narrow implementation candidate and should stay open, but it is not merge-ready because the hydrated Codex review requires regression tests before merge; merge, fix, raise_pr, post-merge close, and instant close are disabled for this dedupe-only job.

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

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #67088 | keep_canonical | planned | canonical | Representative #67088 remains the best live canonical issue for the user-visible bug; there is no landed candidate fix yet. |
| #67115 | keep_related | planned | related | Keep #67115 open as the repairable implementation candidate for #67088. It is not a duplicate or superseded PR, and this dedupe-only job must not merge or repair it. |

## Needs Human

- none
