---
repo: "openclaw/openclaw"
cluster_id: "ghcrawl-157058-autonomous-smoke"
mode: "autonomous"
run_id: "27589609050"
workflow_run_id: "27589609050"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27589609050"
head_sha: "6a654d1757156670f15b7d53c36c840c3e903935"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-16T02:24:07.957Z"
canonical: "https://github.com/openclaw/openclaw/tree/main"
canonical_issue: "https://github.com/openclaw/openclaw/issues/43015"
canonical_pr: null
actions_total: 7
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 1
apply_skipped: 0
needs_human_count: 0
---

# ghcrawl-157058-autonomous-smoke

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27589609050](https://github.com/openclaw/clownfish/actions/runs/27589609050)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/tree/main

## Summary

Live preflight shows the original representative #43015 and duplicate #65849 are already closed. Current main at 11a0ad10 contains the narrow poll-intent fix: send-side poll detection now only treats content-bearing pollQuestion/pollOption as poll intent, and pollDurationSeconds metadata is covered by tests as non-intent. The remaining open source PR #65301 is superseded by current main/replacement work and can be closed with credit preserved; #79681 is an independent Telegram typing issue.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 7 |
| Fix executed | 0 |
| Fix failed | 0 |
| Fix blocked | 0 |
| Applied executions | 0 |
| Apply blocked | 1 |
| Apply skipped | 0 |
| Needs human | 0 |

## Fix Execution Actions

| Action | Status | Target | Branch | Reason |
| --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #65301 | close_superseded | blocked | superseded | close requires Clownfish fix PR opened/pushed, merged candidate fix, or merge executed first |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #43015 | keep_closed | skipped | fixed_by_candidate | Already closed after the current-main fix path; keep as historical canonical evidence only. |
| #65849 | keep_closed | skipped | fixed_by_candidate | Already closed as implemented; no further action in this run. |
| #65301 | close_superseded | planned | superseded | The useful contributor PR is superseded by current-main behavior and the credited replacement lane; closeout preserves attribution and avoids leaving a dirty, failing source branch as the active fix path. |
| #79681 | keep_independent | planned | independent | Different root cause and user-visible failure; leave open outside this message.send poll/modal cleanup cluster. |
| #56039 | keep_closed | skipped | fixed_by_candidate | Closed historical context only; no mutation target. |
| #88853 | keep_closed | skipped | superseded | Already closed mixed PR; no further action. |
| #89601 | keep_closed | skipped | fixed_by_candidate | Already merged partial fix; keep as closed evidence. |

## Needs Human

- none
