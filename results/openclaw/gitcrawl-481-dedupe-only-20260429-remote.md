---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-481-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "25136010763"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25136010763"
head_sha: "ed3c070f16b94246f3b571063f0ecb9ffa228dd1"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T04:05:51.255Z"
canonical: null
canonical_issue: null
canonical_pr: null
actions_total: 13
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-481-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25136010763](https://github.com/openclaw/clownfish/actions/runs/25136010763)

Workflow conclusion: success

Worker result: planned

Canonical: unknown

## Summary

The canonical hint #39306 is closed, and the hydrated open items do not share one replacement canonical. The cluster is over-broad, so the matrix splits it into avatar handling, agents model/config UI, and independent UI/cron/lazy-load items. No close, label, comment, merge, or fix action is safe in this dedupe-only run.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 13 |
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
| #39306 | keep_closed | skipped | superseded | Representative PR is already closed and obsolete as a cluster-wide canonical. |
| #38439 | keep_canonical | planned | canonical | Best open tracker for the avatar endpoint/IDENTITY.md subfamily; not closable before a clean landed fix. |
| #38923 | keep_related | planned | related | Useful avatar implementation candidate, but not a duplicate-close target and not merge-ready. |
| #62727 | keep_related | planned | related | Related avatar parser work should remain open for author/maintainer revision; it is not a duplicate or safe closeout. |
| #40052 | keep_related | planned | related | Same Agents model/config area as the closed representative, but a distinct bug and not safe to close or merge in this run. |
| #40723 | keep_related | planned | related | Related agents model UI work should stay open; no duplicate or superseded close is justified. |
| #54724 | keep_related | planned | related | Broad related Agents overview work; not a high-confidence duplicate or superseded close. |
| #57100 | keep_related | planned | related | Likely superseded by current main, but without an explicit hydrated landed candidate ref this run should not close it. |
| #42223 | keep_independent | planned | independent | Independent UI bugfix candidate; keep open, do not close as part of this cluster. |
| #49665 | keep_independent | planned | independent | Independent fixed-on-main cleanup path is blocked on linked PR resolution outside this hydrated cluster. |
| #65936 | keep_independent | planned | independent | Independent cron UI polish PR; keep open for maintainer review rather than closing in this cluster. |
| #43013 | keep_closed | skipped | related | Already closed; no mutation planned. |
| #52948 | keep_closed | skipped | related | Already closed; no mutation planned. |

## Needs Human

- none
