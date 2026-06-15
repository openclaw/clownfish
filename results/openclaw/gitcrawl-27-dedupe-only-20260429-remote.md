---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-27-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "25134062721"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25134062721"
head_sha: "d0688cc86ec05c840c9f64b264bd897e9b409ff3"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T04:57:52.995Z"
canonical: "https://github.com/openclaw/openclaw/pull/39766"
canonical_issue: "https://github.com/openclaw/openclaw/issues/39589"
canonical_pr: "https://github.com/openclaw/openclaw/pull/39766"
actions_total: 8
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-27-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25134062721](https://github.com/openclaw/clownfish/actions/runs/25134062721)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/39766

## Summary

Canonical representative #68813 is closed and historical. The current open canonical path is issue #39589 plus repair PR #39766 for the provider models optionality bug. No close/comment/label action is planned: #39766 is useful but not merge-ready, and this dedupe-only job blocks fix, raise_pr, and merge actions.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 8 |
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
| #39589 | keep_canonical | planned | canonical | Keep the source issue open as the canonical issue until the canonical PR lands or an equivalent fix reaches main. |
| #39766 | keep_canonical | planned | canonical | Use #39766 as the open canonical PR, but do not merge or close anything against it in this dedupe-only job. |
| #46980 | keep_closed | skipped | superseded | Already closed; retain only as historical evidence for the optional provider models subcluster. |
| #71636 | keep_closed | skipped | superseded | Already closed; no close action is valid. |
| #68813 | keep_closed | skipped | superseded | Closed representative is historical context only and must not receive a close action. |
| #63058 | keep_closed | skipped | related | Already merged/closed related context; no action needed in this cluster. |
| #69342 | keep_closed | skipped | independent | Closed independent context; no mutation is valid. |
| #69464 | keep_closed | skipped | independent | Closed independent context; no mutation is valid. |

## Needs Human

- none
