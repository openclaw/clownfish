---
repo: "openclaw/openclaw"
cluster_id: "clawsweeper-commit-openclaw-openclaw-6a4c866b6a8b"
mode: "autonomous"
run_id: "27191848638"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27191848638"
head_sha: "6c128b8ae5a7903210b51ab54a24e9e9b1ac064c"
workflow_conclusion: "failure"
result_status: "planned"
published_at: "2026-06-09T08:23:50.385Z"
canonical: null
canonical_issue: null
canonical_pr: null
actions_total: 2
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# clawsweeper-commit-openclaw-openclaw-6a4c866b6a8b

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27191848638](https://github.com/openclaw/clownfish/actions/runs/27191848638)

Workflow conclusion: failure

Worker result: planned

Canonical: unknown

## Summary

Verified the ClawSweeper commit finding against current main c5171625369e8362ed97e5cae303ec884044b61e. The release guide still describes direct manual CI as including Android and still shows direct CI examples without include_android=true, while ci.yml keeps Android opt-in for workflow_dispatch. This is a narrow non-security docs fix suitable for a new Clownfish fix PR.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 2 |
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

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| cluster:clawsweeper-commit-openclaw-openclaw-6a4c866b6a8b | fix_needed | planned |  | Latest main still contains the release-process documentation regression reported by ClawSweeper, and no hydrated issue or PR already owns the fix. |
| cluster:clawsweeper-commit-openclaw-openclaw-6a4c866b6a8b | build_fix_artifact | planned |  | Build one narrow docs-only fix PR artifact for the executor; close and merge are blocked by job frontmatter. |

## Needs Human

- none
