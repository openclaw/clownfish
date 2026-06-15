---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-13956-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "25109784184"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25109784184"
head_sha: "7ac7590296085c93e29434b3af3e919aa257e029"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T04:57:52.760Z"
canonical: "https://github.com/openclaw/openclaw/pull/67477"
canonical_issue: null
canonical_pr: "https://github.com/openclaw/openclaw/pull/67477"
actions_total: 1
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-13956-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25109784184](https://github.com/openclaw/clownfish/actions/runs/25109784184)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/67477

## Summary

Classified the only open candidate, #67477, as the current open canonical PR for the remaining WhatsApp auto-reply sent-hook parity work. Closed #71217 and #56495 are historical evidence only: #71217 landed WhatsApp message_received hooks, while #70118/#66579 cover the shared message_sending cancel/rewrite path. #67477 retains unique message_sent/internal message:sent work and should stay open; no close, label, comment, merge, or fix action is planned.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 1 |
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
| #67477 | keep_canonical | planned | canonical | #67477 is not a duplicate or superseded by the closed representative. It is the best surviving open PR for the remaining WhatsApp auto-reply message_sent/message:sent parity work, but it is not merge-ready and this dedupe-only job blocks merge, fix, and raise_pr actions. |

## Needs Human

- none
