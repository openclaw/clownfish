---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-238880-dedupe-only-20260429c"
mode: "autonomous"
run_id: "25108009774"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25108009774"
head_sha: "3ec6a205eb986741424344762fbc94babbdc2937"
workflow_conclusion: "success"
result_status: "needs_human"
published_at: "2026-06-15T04:57:52.678Z"
canonical: null
canonical_issue: null
canonical_pr: null
actions_total: 5
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 1
---

# gitcrawl-238880-dedupe-only-20260429c

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25108009774](https://github.com/openclaw/clownfish/actions/runs/25108009774)

Workflow conclusion: success

Worker result: needs_human

Canonical: unknown

## Summary

No GitHub mutations are planned. The hydrated artifact confirms the root bug remains on main at 40f820bda2255e50bda769ba8b6d9f4fdc05e9b5, but the open PRs each carry useful, non-identical pieces: #44023 is the hinted representative, #45871 updates more current config/help surfaces, and #52400 adds tests but has unresolved bot findings, broad docs/generated churn, and one failing check. A maintainer should choose the canonical/combine path before any PR is closed as superseded.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 5 |
| Fix executed | 0 |
| Fix failed | 0 |
| Fix blocked | 0 |
| Applied executions | 0 |
| Apply blocked | 0 |
| Apply skipped | 0 |
| Needs human | 1 |

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
| #43972 | keep_closed | skipped |  | Already closed items must not receive close/comment/label actions in this worker result. |
| #44023 | needs_human | blocked | needs_human | Potential canonical PR, but it is not clearly the best surviving path because it misses useful surfaces covered by other open PRs. |
| #45871 | needs_human | blocked | needs_human | Viable alternative canonical or source of useful updates; closing it as superseded would lose contributor credit and implementation details before a maintainer chooses the canonical path. |
| #52382 | keep_related | planned | related | Related to the same cap family, but not safe to close in this dedupe-only pass while the canonical PR path is unresolved. |
| #52400 | keep_related | planned | related | Keep open as related implementation evidence; it is not merge-ready and not safe to close as superseded until a maintainer chooses how to carry forward its useful tests and generated-schema work. |

## Needs Human

- Choose the canonical/combine path for the maxPingPongTurns cap increase before closing any open PR as superseded. #44023 is the hinted representative but incomplete, #45871 covers more config/help surfaces, and #52400 adds tests but has broad churn, unresolved bot findings, and a failing check.
