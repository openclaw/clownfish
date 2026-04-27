---
repo: "openclaw/openclaw"
cluster_id: "ghcrawl-156666-autonomous-smoke"
mode: "autonomous"
run_id: "25023038755"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25023038755"
head_sha: "416b225d73239870f6704a4eeb6d95f026ba00e9"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-04-27T22:45:27.479Z"
canonical: "#59681"
canonical_issue: null
canonical_pr: "https://github.com/openclaw/openclaw/pull/59681"
actions_total: 6
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 1
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# ghcrawl-156666-autonomous-smoke

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25023038755](https://github.com/openclaw/clownfish/actions/runs/25023038755)

Workflow conclusion: success

Worker result: planned

Canonical: #59681

## Summary

Classified #59681 as the canonical repairable PR for the sessions_spawn model-alias bug. No merge or close actions are safe yet: the canonical PR has failing checks/unknown mergeability and unresolved bot review findings, while the other open PRs are related but separate model/session-maintenance issues with their own blockers.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 6 |
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
| repair_contributor_branch | pushed | https://github.com/openclaw/openclaw/pull/59681 |  |  |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #59681 | merge_canonical | executed | fix_pr | merged by ProjectClownfish post-flight |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #59681 | fix_needed | planned | canonical | Canonical PR is useful and editable but not merge-ready; executor should repair contributor branch, address review findings, rebase/refactor narrowly, run validation, and then re-evaluate for merge. |
| cluster:ghcrawl-156666-autonomous-smoke | build_fix_artifact | planned | canonical | Autonomous mode requires an executable fix artifact for a non-merge-ready canonical PR. |
| #43211 | keep_related | planned | related | Related model-selection/provider-normalization work, but not a duplicate of #59681 and not safe to merge or close in this cluster. |
| #59932 | keep_related | planned | related | Related subagent reliability work, but different root cause and blocked by actionable review/check failures. |
| #62100 | keep_related | planned | related | Related provider/model-resolution follow-up, not a duplicate of #59681 and not safe to merge or close. |
| #69029 | keep_closed | skipped | superseded | Already closed; no mutation planned. |

## Needs Human

- none
