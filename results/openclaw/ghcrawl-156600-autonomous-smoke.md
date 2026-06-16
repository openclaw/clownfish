---
repo: "openclaw/openclaw"
cluster_id: "ghcrawl-156600-autonomous-smoke"
mode: "autonomous"
run_id: "27597848772"
workflow_run_id: "27597848772"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27597848772"
head_sha: "f28ffb87eae946384c35a92da08de8c8b8ab38e8"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-16T06:22:30.930Z"
canonical: "https://github.com/openclaw/openclaw/pull/72308"
canonical_issue: null
canonical_pr: "https://github.com/openclaw/openclaw/pull/72308"
actions_total: 11
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 1
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# ghcrawl-156600-autonomous-smoke

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27597848772](https://github.com/openclaw/clownfish/actions/runs/27597848772)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/72308

## Summary

All job-seed PRs are already closed in the hydrated state. The original representative #43589 is obsolete and was superseded by merged watcher repairs, chiefly #72308 with later bounded skills watcher hardening in #79095. The only hydrated open item is linked draft PR #71497 for a separate stale skills snapshot restart bug; current main still has the relevant zero-version initializer, but #71497 targets stale paths, is draft, and has a failed real-behavior proof, so this result emits a narrow replacement fix artifact instead of merge or closure actions.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 11 |
| Fix executed | 0 |
| Fix failed | 0 |
| Fix blocked | 0 |
| Applied executions | 1 |
| Apply blocked | 0 |
| Apply skipped | 0 |
| Needs human | 0 |

## Fix Execution Actions

| Action | Status | Target | Branch | Reason |
| --- | --- | --- | --- | --- |
| open_fix_pr | opened | https://github.com/openclaw/openclaw/pull/93513 | clownfish/ghcrawl-156600-autonomous-smoke |  |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #93513 | merge_canonical | executed | fix_pr | merged by ProjectClownfish post-flight |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #41655 | keep_closed | skipped | superseded | Already closed and superseded by hydrated merged watcher repair #72308. |
| #41858 | keep_closed | skipped | superseded | Already closed and superseded by hydrated merged watcher repair #72308. |
| #43056 | keep_closed | skipped | superseded | Already closed; useful watcher work is covered by the later merged watcher repair path. |
| #43589 | keep_closed | skipped | superseded | Original representative is obsolete; replacement #72308 is the canonical landed watcher repair. |
| #48500 | keep_closed | skipped | superseded | Already closed; the remaining restart-snapshot work belongs to the open #71497 family or a replacement fix PR. |
| #51733 | keep_closed | skipped | fixed_by_candidate | Already closed and covered by later current-main grouped/nested skills work. |
| #54927 | keep_closed | skipped | superseded | Already closed and superseded by hydrated merged watcher repair #72308. |
| #55495 | keep_closed | skipped | superseded | Already closed; the live restart-snapshot work should be handled by a current-path replacement fix. |
| #66617 | keep_closed | skipped | fixed_by_candidate | Already closed and covered by merged watcher repair and hardening work. |
| #71497 | fix_needed | planned | canonical | The stale skills snapshot restart bug is still real, but the open draft PR is not merge-ready and targets stale paths; build a narrow replacement fix artifact against current main. |
| cluster:ghcrawl-156600-autonomous-smoke | build_fix_artifact | planned |  | Build a current-main replacement fix PR for the live restart-snapshot subfamily. |

## Needs Human

- none
