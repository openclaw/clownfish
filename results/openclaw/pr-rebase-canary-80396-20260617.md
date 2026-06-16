---
repo: "openclaw/openclaw"
cluster_id: "pr-rebase-canary-80396-20260617"
mode: "autonomous"
run_id: "27650752803"
workflow_run_id: "27650752803"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27650752803"
head_sha: "a670d7a23d085d1673cd2b428b76591fca49d375"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-16T22:07:19.143Z"
canonical: "https://github.com/openclaw/openclaw/pull/80396"
canonical_issue: "https://github.com/openclaw/openclaw/issues/41966"
canonical_pr: "https://github.com/openclaw/openclaw/pull/80396"
actions_total: 3
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 1
apply_skipped: 0
needs_human_count: 0
---

# pr-rebase-canary-80396-20260617

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27650752803](https://github.com/openclaw/clownfish/actions/runs/27650752803)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/80396

## Summary

Canonical PR #80396 is the sole repair target. The hydrated artifact shows a maintainer-editable, narrow contributor branch with passing checks and no hydrated review threads, but merge is disabled and the local checkout does not contain the PR head commit, so Clownfish should repair/rebase only if needed, validate, and run Codex /review on the existing branch before any later finalization job.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 3 |
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
| repair_contributor_branch | pushed | https://github.com/openclaw/openclaw/pull/80396 |  |  |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #80396 | merge_canonical | blocked | fix_pr | job does not allow merge |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #80396 | fix_needed | planned | canonical | Repair and review are needed as an executable branch-prep lane; merge and close are blocked by job policy, not by PR quality. |
| #41966 | keep_related | planned | fixed_by_candidate | The issue is covered by the canonical candidate PR for validation purposes, but this rebase-only canary should not close or otherwise mutate the issue. |
| cluster:pr-rebase-canary-80396-20260617 | build_fix_artifact | planned |  | Emit an executable cluster-scoped repair artifact for the deterministic executor to rebase if needed, validate, and run Codex /review on #80396. |

## Needs Human

- none
