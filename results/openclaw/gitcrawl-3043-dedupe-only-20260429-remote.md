---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-3043-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "25134575070"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25134575070"
head_sha: "b9f5ebae325b39171f8129a731bbca8bf5b88966"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T04:57:53.014Z"
canonical: "https://github.com/openclaw/openclaw/pull/73938"
canonical_issue: null
canonical_pr: "https://github.com/openclaw/openclaw/pull/73938"
actions_total: 12
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-3043-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25134575070](https://github.com/openclaw/clownfish/actions/runs/25134575070)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/73938

## Summary

Hydrated state shows the originally open local-store candidate #49981 is now closed, with credited replacement #73938 hydrated and still open. No close actions are valid for the closed context refs. Keep #73938 as the current canonical remote-batch HTTP timeout path; it is not merge-ready because review follow-up remains and merge/fix actions are blocked for this dedupe-only job.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 12 |
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
| #49933 | keep_closed | skipped | related | Closed historical issue; evidence only. |
| #49937 | keep_closed | skipped | superseded | Closed superseded PR; no mutation. |
| #49960 | keep_closed | skipped | independent | Closed unrelated linked context. |
| #49963 | keep_closed | skipped | superseded | Closed superseded PR; no mutation. |
| #49981 | keep_closed | skipped | superseded | Already closed as superseded by hydrated replacement #73938. |
| #53820 | keep_closed | skipped | related | Closed related subfamily; no mutation. |
| #57733 | keep_closed | skipped | related | Closed related subfamily; no mutation. |
| #60856 | keep_closed | skipped | related | Closed related issue; no mutation. |
| #66822 | keep_closed | skipped | related | Closed related issue; no mutation. |
| #66931 | keep_closed | skipped | superseded | Closed superseded related PR; no mutation. |
| #67616 | keep_closed | skipped | superseded | Closed superseded related PR; no mutation. |
| #73938 | keep_canonical | planned | canonical | Current canonical open PR, but not merge-ready and no mutating action is allowed in this dedupe-only job. |

## Needs Human

- none
