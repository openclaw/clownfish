---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-2233-dedupe-only-20260429d"
mode: "autonomous"
run_id: "25142044749"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25142044749"
head_sha: "a0b870a07f2988db4b233d32e6ac2590b6afdb2d"
workflow_conclusion: "success"
result_status: "needs_human"
published_at: "2026-06-15T04:05:51.314Z"
canonical: "https://github.com/openclaw/openclaw/tree/1fb096f0e607186d543a8342ff03dd6346021ad8"
canonical_issue: null
canonical_pr: null
actions_total: 5
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 1
---

# gitcrawl-2233-dedupe-only-20260429d

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25142044749](https://github.com/openclaw/clownfish/actions/runs/25142044749)

Workflow conclusion: success

Worker result: needs_human

Canonical: https://github.com/openclaw/openclaw/tree/1fb096f0e607186d543a8342ff03dd6346021ad8

## Summary

The closed representative #48613 is obsolete. Current main at 1fb096f0e607186d543a8342ff03dd6346021ad8 is the canonical path for the already-closed A2UI/native-Windows and ui:build path-space fixes, but the remaining open refs are separate Windows script subfamilies. No close, merge, or fix PR action is planned because instant close, merge, and fix PRs are disabled for this dedupe-only job. #62910 needs maintainer or author follow-up before any merge/finalization decision because the hydrated ClawSweeper review reports an unresolved P2 finding and the dispatch check is failing.

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
| #48613 | keep_closed | skipped | superseded | Closed representative is evidence only and must not receive a close or comment action. |
| #52291 | keep_closed | skipped | fixed_by_candidate | Already closed candidate is retained as historical evidence only. |
| #45380 | keep_related | planned | related | Keep open as a related Windows script compatibility PR; it is not a duplicate of the closed representative family. |
| #62910 | needs_human | blocked | needs_human | Maintainer or author revision is required before Clownfish can treat #62910 as mergeable, superseded, or fixed by a candidate. |
| #73059 | keep_related | planned | related | Keep open as a related follow-up issue with a different root cause from the closed ui:build path-space PRs. |

## Needs Human

- #62910 needs maintainer or author revision before merge/finalization because ClawSweeper reports an unresolved P2 arg-boundary finding at scripts/ui.js:91 and the dispatch check is failing.
