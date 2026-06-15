---
repo: "openclaw/openclaw"
cluster_id: "ghcrawl-156628-autonomous-smoke"
mode: "autonomous"
run_id: "25102360455"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25102360455"
head_sha: "9a08eb9ac982c5d395ca81610998f5f78efc9ef6"
workflow_conclusion: "success"
result_status: "blocked"
published_at: "2026-06-15T03:45:26.088Z"
canonical: "https://github.com/openclaw/openclaw/tree/d33c3f7da651f74134688a78c0d10522dd178592"
canonical_issue: "https://github.com/openclaw/openclaw/issues/62944"
canonical_pr: null
actions_total: 12
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 1
needs_human_count: 0
---

# ghcrawl-156628-autonomous-smoke

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25102360455](https://github.com/openclaw/clownfish/actions/runs/25102360455)

Workflow conclusion: success

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/tree/d33c3f7da651f74134688a78c0d10522dd178592

## Summary

Hydrated state shows the representative #63483 and the other timeout PRs are already closed after current main d33c3f7 gained the broader image-tool timeout implementation. The only open job candidate, #56454, is clearly superseded by that current-main path, but its closeout is blocked by the job's fix-first gate because there is no hydrated merged candidate PR or fix-execution report in this run. No human decision is needed.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 12 |
| Fix executed | 0 |
| Fix failed | 0 |
| Fix blocked | 0 |
| Applied executions | 0 |
| Apply blocked | 0 |
| Apply skipped | 1 |
| Needs human | 0 |

## Fix Execution Actions

| Action | Status | Target | Branch | Reason |
| --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #56454 | close_superseded | skipped | superseded | Blocked by fix-first close policy even though the superseded classification is clear; current-main evidence is present, but no merged candidate PR is hydrated for this run. |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #48625 | keep_closed | skipped | independent | Already closed and independent from the timeoutSeconds cluster target. |
| #54494 | keep_closed | skipped | related | Already closed; related timeout surface but not a live candidate in this cluster. |
| #54495 | keep_closed | skipped | related | Already closed; related image-generation timeout work, not the explicit image tool timeout canonical path. |
| #56419 | keep_related | planned | related | Likely covered by current main, but out of mutation scope for this candidate-only job. |
| #56454 | close_superseded | blocked | superseded | Blocked by fix-first close policy even though the superseded classification is clear; current-main evidence is present, but no merged candidate PR is hydrated for this run. |
| #57215 | keep_closed | skipped | independent | Already closed and independent from the timeoutSeconds canonical family. |
| #57223 | keep_closed | skipped | independent | Already closed and independent from the timeoutSeconds cluster target. |
| #62944 | keep_closed | skipped | fixed_by_candidate | Already closed as completed on current main; historical evidence for this cluster. |
| #63046 | keep_closed | skipped | superseded | Already closed as superseded; no action is valid. |
| #63483 | keep_closed | skipped | superseded | Representative is obsolete and already closed as superseded by current main. |
| #67889 | keep_closed | skipped | fixed_by_candidate | Already closed as fixed on current main; historical evidence only. |
| #67929 | keep_closed | skipped | superseded | Already closed as superseded by current main; contributor credit was preserved in the hydrated closeout. |

## Needs Human

- none
