---
repo: "openclaw/openclaw"
cluster_id: "ghcrawl-156822-autonomous-smoke"
mode: "autonomous"
run_id: "27486525526"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27486525526"
head_sha: "fb8f137c423b876399d9e3e4ff1a8695add173e6"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-14T03:14:19.976Z"
canonical: "https://github.com/openclaw/openclaw/pull/63321"
canonical_issue: null
canonical_pr: "https://github.com/openclaw/openclaw/pull/63321"
actions_total: 2
fix_executed: 0
fix_failed: 1
fix_blocked: 0
apply_executed: 0
apply_blocked: 1
apply_skipped: 0
needs_human_count: 0
---

# ghcrawl-156822-autonomous-smoke

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27486525526](https://github.com/openclaw/clownfish/actions/runs/27486525526)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/63321

## Summary

Classified #63321 as the canonical PR, but it is not merge-ready. No close or merge is planned; the safe path is to repair the editable contributor branch, preserve credit, address review-bot findings, rebase against current main, and validate with the OpenClaw pnpm gates.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 2 |
| Fix executed | 0 |
| Fix failed | 1 |
| Fix blocked | 0 |
| Applied executions | 0 |
| Apply blocked | 1 |
| Apply skipped | 0 |
| Needs human | 0 |

## Fix Execution Actions

| Action | Status | Target | Branch | Reason |
| --- | --- | --- | --- | --- |
| repair_contributor_branch | failed |  |  | source PR #63321 is a fork branch requiring rebase; use replacement branch because GitHub App pushes to contributor forks can be rejected when rebased upstream history includes workflow files |
| open_fix_pr | opened | https://github.com/openclaw/openclaw/pull/92849 | clownfish/ghcrawl-156822-autonomous-smoke |  |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #92849 | merge_canonical | blocked | fix_pr | merge requires CLOWNFISH_ALLOW_MERGE=1; labeled clownfish |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #63321 | fix_needed | planned | canonical | The PR is useful and editable, but failing proof, unknown mergeability, stale branch state, and unresolved review-bot semantics block merge. Because fix and raise_pr are allowed and maintainer_can_modify=true, repair_contributor_branch is the correct executable path. |
| cluster:ghcrawl-156822-autonomous-smoke | build_fix_artifact | planned |  | A narrow, contributor-credit-preserving branch repair is available and allowed by the job. |

## Needs Human

- none
