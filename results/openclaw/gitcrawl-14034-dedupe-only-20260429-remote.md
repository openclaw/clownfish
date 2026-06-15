---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-14034-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "25129091444"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25129091444"
head_sha: "c6792f0250a6710fb4bca0bf6ba7777e5c4f0fbc"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T04:57:52.802Z"
canonical: "https://github.com/openclaw/openclaw/issues/40839"
canonical_issue: "https://github.com/openclaw/openclaw/issues/40839"
canonical_pr: "https://github.com/openclaw/openclaw/pull/40850"
actions_total: 5
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-14034-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25129091444](https://github.com/openclaw/clownfish/actions/runs/25129091444)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/40839

## Summary

Hydrated state shows the representative multi-Node installer family (#40839/#40850) is already closed as implemented on current main, with no open replacement canonical needed. The live open PRs are separate installer subfamilies or independent work, so no high-confidence close/comment/label mutation is planned.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 5 |
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
| #50479 | keep_closed | skipped | superseded | Already closed live; keep as historical evidence and route any ongoing prefix-warning work through hydrated replacement #73890. |
| #44986 | keep_related | planned | related | Keep open as a related installer PR with a unique feature scope and unresolved review blocker; it is not a duplicate of the closed multi-Node canonical family. |
| #58340 | keep_independent | planned | independent | This is independent product/copy work in the installer, not a duplicate or superseded fix for the canonical installer bug family. |
| #67795 | keep_related | planned | related | Keep open as related installer compatibility work with a unique reproduction path; failing install-smoke blocks merge, not classification. |
| #73890 | keep_related | planned | related | Keep open as a related replacement PR for a separate npm-prefix-warning subfamily; no merge or post-merge close action is allowed in this job. |

## Needs Human

- none
