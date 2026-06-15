---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-23-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "25132948853"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25132948853"
head_sha: "e5e8212693f31b1f59eff0d60675a97be8c33e90"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T04:57:52.960Z"
canonical: null
canonical_issue: null
canonical_pr: null
actions_total: 5
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-23-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25132948853](https://github.com/openclaw/clownfish/actions/runs/25132948853)

Workflow conclusion: success

Worker result: planned

Canonical: unknown

## Summary

Hydrated preflight shows the closed representative #39206 should not be replaced by a single open canonical. The three open PRs are related plugin-hook work but cover different capabilities, so no close/comment/label mutation is planned.

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
| #18860 | keep_related | planned | related | Related open implementation with unique remaining work; keep open and do not close as duplicate or superseded in this dedupe-only job. |
| #58360 | keep_related | planned | related | Related model-call hook implementation with its own scope and validation path; not a duplicate of #18860, #68734, or the closed #39206/#39207 context. |
| #68734 | keep_related | planned | related | Related prompt/tool-surface hook work with unique active discussion and unresolved review/CI work; keep open. |
| #39206 | keep_closed | skipped | superseded | Already closed representative; retained only as historical evidence for why no open canonical replacement is selected. |
| #39207 | keep_closed | skipped | related | Already closed context item; no mutation planned. |

## Needs Human

- none
