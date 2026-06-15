---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-14182-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "25129791317"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25129791317"
head_sha: "57b657bc4ce868d681ea2ae867230254e2cbce60"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T04:57:52.846Z"
canonical: "#56783"
canonical_issue: null
canonical_pr: "https://github.com/openclaw/openclaw/pull/56783"
actions_total: 3
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-14182-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25129791317](https://github.com/openclaw/clownfish/actions/runs/25129791317)

Workflow conclusion: success

Worker result: planned

Canonical: #56783

## Summary

Kept #56783 as the canonical Control UI chat-history character-budget PR. Kept #42636 open as related, not duplicate, because it targets the distinct hydration/render-window limit. Kept #65575 open as independent from this history-budget cluster because it belongs to the separate #65538 screen-reader streaming accessibility family. No close, label, merge, or fix actions are planned.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 3 |
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
| #56783 | keep_canonical | planned | canonical | #56783 is the best surviving canonical PR for the chat-history character-budget root cause, but this dedupe-only job should leave it open for review and validation. |
| #42636 | keep_related | planned | related | Related Control UI chat-load work, but not a true duplicate of #56783 and not safe to close under the contributor-credit closure policy. |
| #65575 | keep_independent | planned | independent | Independent from this history-budget dedupe cluster; leave it open for the separate #65538 accessibility triage path. |

## Needs Human

- none
