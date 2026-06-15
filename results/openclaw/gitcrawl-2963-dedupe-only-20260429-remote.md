---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-2963-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "25134562810"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25134562810"
head_sha: "b9f5ebae325b39171f8129a731bbca8bf5b88966"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T04:57:53.010Z"
canonical: "https://github.com/openclaw/openclaw/pull/47162"
canonical_issue: null
canonical_pr: "https://github.com/openclaw/openclaw/pull/47162"
actions_total: 3
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-2963-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25134562810](https://github.com/openclaw/clownfish/actions/runs/25134562810)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/47162

## Summary

No closures or merge/fix actions are safe for this cluster. #47162 remains the canonical open PR for Python/shell skill-scanner coverage, while #43469 and #60456 are related scanner-hardening PRs with distinct scopes and unresolved review/check blockers.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 3 |
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
| #47162 | keep_canonical | planned | canonical | Representative #47162 remains the best canonical path for the Python/shell coverage subcluster, but this dedupe-only job blocks merge, fix, and raise_pr actions and the PR still has check/review blockers. |
| #43469 | keep_related | planned | related | Keep open as related scanner-hardening work with a unique Markdown-specific scope; no duplicate or superseded closeout is justified. |
| #60456 | keep_related | planned | related | Keep open as related scanner-rule work with unique remaining implementation/review scope; it is not a high-confidence duplicate of the canonical Python/shell PR. |

## Needs Human

- none
