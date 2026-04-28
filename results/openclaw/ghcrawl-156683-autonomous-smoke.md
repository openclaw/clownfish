---
repo: "openclaw/openclaw"
cluster_id: "ghcrawl-156683-autonomous-smoke"
mode: "autonomous"
run_id: "25038992235"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25038992235"
head_sha: "da036e490846162aa84e5b443cfc870a58f935a1"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-04-28T07:23:43.133Z"
canonical: "https://github.com/openclaw/openclaw/pull/57755"
canonical_issue: null
canonical_pr: "https://github.com/openclaw/openclaw/pull/57755"
actions_total: 11
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 1
apply_skipped: 0
needs_human_count: 0
---

# ghcrawl-156683-autonomous-smoke

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25038992235](https://github.com/openclaw/clownfish/actions/runs/25038992235)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/57755

## Summary

Classified the hydrated cluster into a deliveryStatus canonical path and a separate local JSON stdout subfamily. #57755 remains the canonical deliveryStatus PR, but it is draft/not merge-ready and needs branch repair through ProjectClownfish. No merge or close actions are recommended because the canonical fix has not landed and related PRs have unresolved checks or review-gate blockers.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 11 |
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
| repair_contributor_branch | pushed | https://github.com/openclaw/openclaw/pull/57755 |  |  |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #57755 | merge_canonical | blocked | fix_pr | pull request is draft |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #5 | keep_closed | skipped | independent | Already-closed linked context must not receive close/comment/merge mutations. |
| #53961 | keep_related | planned | related | Keep open as related prerequisite work; do not close or merge while draft, check state is not clean, and review-bot blockers remain. |
| #57196 | keep_closed | skipped | independent | Closed historical context only; no mutation is valid. |
| #57198 | keep_closed | skipped | independent | Closed historical context only; no mutation is valid. |
| #57730 | keep_closed | skipped | superseded | Already closed as superseded; no further close action is valid. |
| #57755 | fix_needed | planned | canonical | Canonical PR is useful and editable, but not merge-ready; ProjectClownfish should repair the contributor branch, rerun review, run pnpm check:changed, and only then consider merge. |
| #57843 | keep_related | planned | related | Keep as related prerequisite/follow-up work; it is not safe to merge or close in this deliveryStatus JSON cluster without its own repair pass. |
| #62440 | keep_related | planned | fixed_by_candidate | Keep open as a related subcluster item because #70589 is still open and has failing checks; do not close until the candidate fix lands and post-merge closeout is re-evaluated. |
| #62453 | keep_closed | skipped | superseded | Already closed as superseded; no mutation is valid. |
| #70589 | keep_related | planned | related | Separate related subcluster; keep open for its own repair/merge pass rather than folding it into the #57755 deliveryStatus canonical path. |
| cluster:ghcrawl-156683-autonomous-smoke | build_fix_artifact | planned |  | A repairable canonical contributor PR exists, but merge gates are not satisfied. |

## Needs Human

- none
