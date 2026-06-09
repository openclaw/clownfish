---
repo: "openclaw/openclaw"
cluster_id: "clawsweeper-commit-openclaw-openclaw-1d0e9a907e6d"
mode: "autonomous"
run_id: "27242663897"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27242663897"
head_sha: "8512bac3ffbc7df198d73a84ff8939383b0cde26"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-09T23:49:36.664Z"
canonical: "new_fix_pr:clownfish/clawsweeper-commit-openclaw-openclaw-1d0e9a907e6d"
canonical_issue: null
canonical_pr: null
actions_total: 2
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 1
apply_skipped: 0
needs_human_count: 0
---

# clawsweeper-commit-openclaw-openclaw-1d0e9a907e6d

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27242663897](https://github.com/openclaw/clownfish/actions/runs/27242663897)

Workflow conclusion: success

Worker result: planned

Canonical: new_fix_pr:clownfish/clawsweeper-commit-openclaw-openclaw-1d0e9a907e6d

## Summary

Verified the ClawSweeper TTS migration finding against openclaw/openclaw main at ec0f311f7fccba8e7bbf750256462a82b5bc42e0. The unsupported-path migration is still present, so this cluster should create one narrow fix PR; no close or merge actions are allowed for this job.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 2 |
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
| open_fix_pr | opened | https://github.com/openclaw/openclaw/pull/91787 | clownfish/clawsweeper-commit-openclaw-openclaw-1d0e9a907e6d |  |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #91787 | merge_canonical | blocked | fix_pr | job does not allow merge |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| cluster:clawsweeper-commit-openclaw-openclaw-1d0e9a907e6d | fix_needed | planned |  | The ClawSweeper data-loss finding remains valid on current main and there is no hydrated canonical issue or contributor PR to repair. |
| cluster:clawsweeper-commit-openclaw-openclaw-1d0e9a907e6d | build_fix_artifact | planned |  | Create a new narrow Clownfish fix PR that limits TTS legacy migration to schema-supported locations and updates the regression tests. |

## Needs Human

- none
