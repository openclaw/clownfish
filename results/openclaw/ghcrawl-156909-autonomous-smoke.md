---
repo: "openclaw/openclaw"
cluster_id: "ghcrawl-156909-autonomous-smoke"
mode: "autonomous"
run_id: "27486519036"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27486519036"
head_sha: "fb8f137c423b876399d9e3e4ff1a8695add173e6"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-14T03:27:46.235Z"
canonical: "https://github.com/openclaw/openclaw/pull/63644"
canonical_issue: null
canonical_pr: "https://github.com/openclaw/openclaw/pull/63644"
actions_total: 2
fix_executed: 0
fix_failed: 1
fix_blocked: 0
apply_executed: 0
apply_blocked: 1
apply_skipped: 0
needs_human_count: 0
---

# ghcrawl-156909-autonomous-smoke

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27486519036](https://github.com/openclaw/clownfish/actions/runs/27486519036)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/63644

## Summary

#63644 is the only hydrated open item and remains the canonical repair path. It is narrow and maintainer-editable, but it is not merge-ready because real behavior proof failed, mergeability is unknown, and merge preflight has not produced a clean Codex /review. Plan an in-place repair of the contributor branch; do not close, merge, or route anything to security.

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
| repair_contributor_branch | failed |  |  | source PR #63644 is a fork branch requiring rebase; use replacement branch because GitHub App pushes to contributor forks can be rejected when rebased upstream history includes workflow files |
| open_fix_pr | opened | https://github.com/openclaw/openclaw/pull/92855 | clownfish/ghcrawl-156909-autonomous-smoke |  |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #92855 | merge_canonical | blocked | fix_pr | merge requires CLOWNFISH_ALLOW_MERGE=1; labeled clownfish |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #63644 | fix_needed | planned | canonical | Canonical PR is useful and editable but not merge-ready; repair the contributor branch, rerun proof/review, and only then consider merge. |
| cluster:ghcrawl-156909-autonomous-smoke | build_fix_artifact | planned |  | Job allows fix and raise_pr; the safe path is an in-place branch repair followed by validation and fresh review. |

## Needs Human

- none
