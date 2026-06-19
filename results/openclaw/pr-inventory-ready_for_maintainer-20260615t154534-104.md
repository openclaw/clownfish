---
repo: "openclaw/openclaw"
cluster_id: "pr-inventory-ready_for_maintainer-20260615T154534-104"
mode: "plan"
run_id: "27560323972-1-106"
workflow_run_id: "27560323972"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27560323972"
head_sha: "61d2d7a61eeb9d8fe22ed20cc15f46b2ff4a4bb2"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-19T05:41:39.300Z"
canonical: null
canonical_issue: null
canonical_pr: null
actions_total: 25
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# pr-inventory-ready_for_maintainer-20260615T154534-104

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27560323972](https://github.com/openclaw/clownfish/actions/runs/27560323972)

Workflow conclusion: success

Worker result: planned

Canonical: unknown

## Summary

Plan-only PR inventory classification shard. No canonical was selected because the job explicitly says this is not a dedupe cluster. Open PRs are kept as independent maintainer-review items unless already closed; no merge, fix, low-signal close, comment, label, or close mutation is planned.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 25 |
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

## Apply Audit

| Attempt | Source | Target | Action | Status | Reason |
| --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |  |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #85112 | keep_independent | planned | independent | Independent maintainer-review PR; no close or merge action is allowed or justified in plan mode. |
| #85155 | keep_independent | planned | independent | Independent maintainer-review PR; no duplicate, superseded, or low-signal close evidence is present. |
| #85166 | keep_independent | planned | independent | Independent maintainer-review PR; no security routing or closure is supported by the hydrated evidence. |
| #93006 | keep_closed | skipped | superseded | Already closed in hydrated state; no action is planned. |
| #85238 | keep_independent | planned | independent | Independent maintainer-review PR; no shared canonical or close path applies. |
| #85292 | keep_independent | planned | independent | Independent PR needing maintainer/review follow-up; merge is blocked and not allowed by job frontmatter. |
| #85296 | keep_independent | planned | independent | Independent maintainer-review PR; failing checks prevent merge recommendation and no closure action is supported. |
| #85308 | keep_independent | planned | independent | Independent maintainer-review PR; no dedupe, supersession, or close evidence is present. |
| #85316 | keep_independent | planned | independent | Independent maintainer-review PR; no close action is justified. |
| #85368 | keep_independent | planned | independent | Independent maintainer-review PR; no canonical/duplicate relationship applies in this inventory shard. |
| #85381 | keep_independent | planned | independent | Independent draft PR; keep open for author/maintainer continuation. |
| #85394 | keep_independent | planned | independent | Independent open PR with waiting-on-author signal; no closure or merge action is appropriate in this plan job. |
| #85396 | keep_independent | planned | independent | Independent maintainer-review PR; no dedupe or low-signal close evidence applies. |
| #85400 | keep_independent | planned | independent | Independent maintainer-review PR; no closure action is supported. |
| #90412 | keep_independent | planned | independent | Independent maintainer-review PR; no duplicate or superseding target is hydrated in this shard. |
| #90870 | keep_independent | planned | independent | Independent maintainer-review PR; no closure action applies. |
| #90876 | keep_independent | planned | low_signal | Low-signal closeout is disabled by job frontmatter, so keep the PR open as an independent maintainer-review item. |
| #90882 | keep_independent | planned | independent | Independent maintainer-review PR; no duplicate/superseded evidence is present. |
| #90893 | keep_closed | skipped | fixed_by_candidate | Already merged/closed in live hydrated state; no action is planned. |
| #90924 | keep_independent | planned | independent | Independent open PR; partial check hydration is not a maintainer decision, and conservative non-mutating classification is appropriate. |
| #90933 | keep_independent | planned | independent | Independent open PR; keep for maintainer review with no mutation planned. |
| #90942 | keep_independent | planned | independent | Independent open PR; no close, merge, or fix action is allowed or evidenced. |
| #90946 | keep_independent | planned | independent | Independent open PR; keep for maintainer review. |
| #85464 | keep_closed | skipped | superseded | Already closed in live hydrated state; no action is planned. |
| #85466 | keep_independent | planned | independent | Independent maintainer-review PR; keep open. |

## Needs Human

- none
