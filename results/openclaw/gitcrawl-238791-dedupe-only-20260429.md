---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-238791-dedupe-only-20260429"
mode: "autonomous"
run_id: "25107646646"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25107646646"
head_sha: "904a86eec936498f7b09cd1b845053509b2c784e"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T04:57:52.626Z"
canonical: "https://github.com/openclaw/openclaw/pull/72400"
canonical_issue: null
canonical_pr: "https://github.com/openclaw/openclaw/pull/72400"
actions_total: 8
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-238791-dedupe-only-20260429

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25107646646](https://github.com/openclaw/clownfish/actions/runs/25107646646)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/72400

## Summary

Hydrated state shows the hinted representative #63994 is already closed and was replaced by merged PR #72400. The repeated-character gateway merge bug is canonicalized to #72400. The remaining open PRs are related streaming/UI follow-up work with distinct root causes or unresolved review paths, so no high-confidence close action is planned for them.

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
| #46985 | keep_related | planned | related | Related streaming UI bug, not a true duplicate of the merged repeated-character gateway fix. |
| #47377 | keep_related | planned | related | Related WebChat/tool-interruption subfamily; keep open for maintainer review rather than closing against #72400. |
| #47399 | keep_related | planned | related | Related but not covered by #72400; broad/unresolved PR shape makes closure unsafe. |
| #54374 | keep_related | planned | related | Related architectural alternative for tool-boundary streaming duplication, not a duplicate of #72400. |
| #60063 | keep_related | planned | related | Related gateway streaming work with a distinct provider/chunk-overlap root cause. |
| #63994 | keep_closed | skipped | superseded | Already closed as superseded by the merged replacement #72400. |
| #65457 | keep_closed | skipped | superseded | Already closed as superseded by #72400. |
| #72400 | keep_closed | skipped | canonical | Merged canonical fix; no post-merge close actions are allowed by this job. |

## Needs Human

- none
