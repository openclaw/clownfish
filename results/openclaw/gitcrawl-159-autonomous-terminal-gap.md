---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-159-autonomous-terminal-gap"
mode: "autonomous"
run_id: "27621559480"
workflow_run_id: "27621559480"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27621559480"
head_sha: "5c1cfa936860dd59b65eecce00e5079b5bfc9d4a"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-16T13:56:45.467Z"
canonical: "https://github.com/openclaw/openclaw/pull/80386"
canonical_issue: "https://github.com/openclaw/openclaw/issues/80387"
canonical_pr: "https://github.com/openclaw/openclaw/pull/80386"
actions_total: 3
fix_executed: 0
fix_failed: 1
fix_blocked: 0
apply_executed: 1
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-159-autonomous-terminal-gap

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27621559480](https://github.com/openclaw/clownfish/actions/runs/27621559480)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/80386

## Summary

Hydrated state shows #80387 is still the live canonical bug report and #80386 is the linked, useful contributor PR for the same root cause. #80386 is not merge-ready because mergeability is unknown and no clean Codex /review merge preflight is present, but maintainer_can_modify is true and the diff is narrow enough for a repair-contributor-branch fix path.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 3 |
| Fix executed | 0 |
| Fix failed | 1 |
| Fix blocked | 0 |
| Applied executions | 1 |
| Apply blocked | 0 |
| Apply skipped | 0 |
| Needs human | 0 |

## Fix Execution Actions

| Action | Status | Target | Branch | Reason |
| --- | --- | --- | --- | --- |
| repair_contributor_branch | failed |  |  | source PR #80386 is a fork branch requiring rebase; use replacement branch because GitHub App pushes to contributor forks can be rejected when rebased upstream history includes workflow files |
| open_fix_pr | opened | https://github.com/openclaw/openclaw/pull/93650 | clownfish/gitcrawl-159-autonomous-terminal-gap |  |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #93650 | merge_canonical | executed | fix_pr | merged by ProjectClownfish post-flight |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #80387 | keep_canonical | planned | canonical | Keep the bug report open as the canonical tracking issue until the linked repair PR is validated and merged. |
| #80386 | fix_needed | planned | canonical | Repair the existing contributor PR branch before any merge recommendation: rebase if needed, drop or move the release-owned changelog edit, rerun validation, run Codex /review, and address any findings. |
| cluster:gitcrawl-159-autonomous-terminal-gap | build_fix_artifact | planned |  | Create an executable repair artifact for Clownfish to make #80386 landable without opening a competing replacement PR. |

## Needs Human

- none
