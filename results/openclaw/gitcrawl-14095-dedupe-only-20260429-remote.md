---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-14095-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "25129745295"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25129745295"
head_sha: "57b657bc4ce868d681ea2ae867230254e2cbce60"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T04:57:52.828Z"
canonical: "https://github.com/openclaw/openclaw/issues/52231"
canonical_issue: "https://github.com/openclaw/openclaw/issues/52231"
canonical_pr: null
actions_total: 10
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-14095-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25129745295](https://github.com/openclaw/clownfish/actions/runs/25129745295)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/52231

## Summary

No close, merge, or fix actions are safe for this dedupe-only cluster. Closed #52231 remains the historical canonical for the fixed embedded-provider zombie-handle root cause; no open issue replaces it. Open #64888 is related embedded-run terminal-lifecycle work with distinct scope, and open linked #48183 is independent Feishu cleanup work.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 10 |
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
| #47888 | keep_closed | skipped | related | Closed related session-wakeup issue; no action target. |
| #48183 | keep_independent | planned | independent | Independent linked Feishu cleanup issue; do not close or route under this embedded-run cluster. |
| #48518 | keep_closed | skipped | related | Closed related embedded-run liveness issue; no action target. |
| #51735 | keep_closed | skipped | independent | Closed independent provider-schema issue; no action target. |
| #52015 | keep_closed | skipped | related | Closed related heartbeat-liveness issue; no action target. |
| #52224 | keep_closed | skipped | duplicate | Already closed duplicate of the historical canonical root cause. |
| #52231 | keep_closed | skipped | canonical | Closed historical canonical for the provider-timeout zombie-handle root cause; no open canonical replaces it. |
| #64227 | keep_closed | skipped | related | Closed related umbrella; no action target. |
| #64888 | keep_related | planned | related | Related but not duplicate; no close/comment/label action is warranted in this dedupe-only job. |
| #65517 | keep_closed | skipped | related | Closed related Active Memory embedded-run issue; no action target. |

## Needs Human

- none
