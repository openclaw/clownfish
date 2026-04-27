---
repo: "openclaw/openclaw"
cluster_id: "ghcrawl-156624-autonomous-smoke"
mode: "autonomous"
run_id: "24987096453"
run_url: "https://github.com/openclaw/clownfish/actions/runs/24987096453"
head_sha: "3e2fd13363b486f8485ca909bf84ab36ee9ff77c"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-04-27T09:38:32.699Z"
canonical: "https://github.com/openclaw/openclaw/pull/72662"
canonical_issue: "https://github.com/openclaw/openclaw/issues/61279"
canonical_pr: "https://github.com/openclaw/openclaw/pull/72662"
actions_total: 12
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 1
apply_skipped: 2
needs_human_count: 0
---

# ghcrawl-156624-autonomous-smoke

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/24987096453](https://github.com/openclaw/clownfish/actions/runs/24987096453)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/72662

## Summary

Canonical path is the maintainer replacement PR #72662 for the Docker named-volume state directory ownership bug. It is not merge-ready from the hydrated artifact because relevant checks are failing and no clean Codex /review merge preflight is present, so the executable path is to repair #72662, rerun pnpm check:changed and /review, then merge only after gates pass. Related Docker PRs are left open; closed refs are historical evidence only.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 12 |
| Fix executed | 0 |
| Fix failed | 0 |
| Fix blocked | 0 |
| Applied executions | 0 |
| Apply blocked | 1 |
| Apply skipped | 2 |
| Needs human | 0 |

## Fix Execution Actions

| Action | Status | Target | Branch | Reason |
| --- | --- | --- | --- | --- |
| repair_contributor_branch | pushed | https://github.com/openclaw/openclaw/pull/72662 |  |  |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #61279 | close_fixed_by_candidate | skipped | fixed_by_candidate | action status is blocked |
| #63959 | close_superseded | skipped | superseded | action status is blocked |
| #72662 | merge_canonical | blocked | fix_pr | merge state status is UNSTABLE |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #41624 | keep_related | planned | related | Same Docker permission family, different root cause and path from the named-volume state directory bug. |
| #43846 | keep_closed | skipped | duplicate | Already closed refs must not receive closure actions. |
| #47660 | keep_independent | planned | independent | Different product direction and broad Dockerfile refactor; not a duplicate or merge candidate for this cluster. |
| #48072 | keep_closed | skipped | superseded | Already closed source PR; replacement path is hydrated as #72662. |
| #52176 | keep_independent | planned | independent | Separate feature/support gap with unresolved review findings; keep out of the named-volume fix path. |
| #55933 | keep_related | planned | related | Same Dockerfile area but distinct build-performance root cause; leave open for a separate follow-up path. |
| #59601 | keep_closed | skipped | independent | Already closed linked issue with a different root cause. |
| #60052 | keep_closed | skipped | superseded | Already closed obsolete npm-global permissions PR; not part of the named-volume state directory fix. |
| #61279 | close_fixed_by_candidate | blocked | fixed_by_candidate | Blocked by require_fix_before_close because #72662 is open and not merge-ready yet. |
| #63959 | close_superseded | blocked | superseded | Superseded by #72662, but closure is blocked until the canonical replacement fix lands. |
| #72662 | fix_needed | planned | canonical | Canonical PR is approved for finalization but not merge-ready; repair the branch, rerun pnpm check:changed and /review, then merge only after gates pass. |
| cluster:ghcrawl-156624-autonomous-smoke | build_fix_artifact | planned | canonical | Autonomous calibrated canonical PR needs executable branch repair before merge. |

## Needs Human

- none
