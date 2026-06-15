---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-13730-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "25109764676"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25109764676"
head_sha: "7ac7590296085c93e29434b3af3e919aa257e029"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T04:57:52.754Z"
canonical: "https://github.com/openclaw/openclaw/issues/38066"
canonical_issue: "https://github.com/openclaw/openclaw/issues/38066"
canonical_pr: "https://github.com/openclaw/openclaw/pull/38255"
actions_total: 4
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-13730-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25109764676](https://github.com/openclaw/clownfish/actions/runs/25109764676)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/38066

## Summary

Classified the obsolete closed representative as historical only. The current canonical family is open issue #38066 with open implementation PR #38255. Open PR #49135 is related Telegram streaming work but covers a different block-streaming coalescing/message-splitting root cause, so no close/comment/label mutation is planned.

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
| #38066 | keep_canonical | planned | canonical | Keep the underlying issue open as the canonical user-visible report until #38255 or an equivalent maintainer-approved implementation lands. |
| #38255 | keep_canonical | planned | canonical | #38255 replaces the closed representative as the active canonical PR for the streamThrottleMs/minInitialChars configuration work, but it is not merge-ready in this dedupe-only job. |
| #49135 | keep_related | planned | related | Keep #49135 open as a related but independent Telegram streaming follow-up; it is not a duplicate or superseded by the #38066/#38255 preview cadence path. |
| #39915 | keep_closed | skipped | superseded | Closed representative is historical evidence only; no mutation is valid for an already-closed PR. |

## Needs Human

- none
