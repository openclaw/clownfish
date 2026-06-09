---
repo: "openclaw/openclaw"
cluster_id: "clawsweeper-commit-openclaw-openclaw-6a4c866b6a8b"
mode: "autonomous"
run_id: "27193815000"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27193815000"
head_sha: "3e159c60f4a0d18e3b15d25ce3cf4493cc4fdeae"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-09T08:38:34.673Z"
canonical: null
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

# clawsweeper-commit-openclaw-openclaw-6a4c866b6a8b

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27193815000](https://github.com/openclaw/clownfish/actions/runs/27193815000)

Workflow conclusion: success

Worker result: planned

Canonical: unknown

## Summary

ClawSweeper's release-process finding remains valid on current main. Manual CI still defaults Android off unless include_android=true, while docs/reference/RELEASING.md still claims direct manual CI includes Android and shows direct ci.yml dispatch examples without the opt-in flag. No issue/PR refs were hydrated for this commit-finding job, so the canonical path is a new narrow docs fix PR.

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
| open_fix_pr | opened | https://github.com/openclaw/openclaw/pull/91665 | clownfish/clawsweeper-commit-openclaw-openclaw-6a4c866b6a8b |  |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #91665 | merge_canonical | blocked | fix_pr | job does not allow merge |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| cluster:clawsweeper-commit-openclaw-openclaw-6a4c866b6a8b | fix_needed | planned |  | The reported regression is still present on current main, no viable canonical PR exists in the hydrated artifact, and the job allows a narrow non-security fix PR. |
| cluster:clawsweeper-commit-openclaw-openclaw-6a4c866b6a8b | build_fix_artifact | planned |  | Build a cluster-scoped artifact for the Clownfish executor to open one narrow docs fix PR. |

## Needs Human

- none
