---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-2369-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "25132984429"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25132984429"
head_sha: "e5e8212693f31b1f59eff0d60675a97be8c33e90"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T04:57:52.970Z"
canonical: "https://github.com/openclaw/openclaw/pull/41275"
canonical_issue: "https://github.com/openclaw/openclaw/issues/41272"
canonical_pr: "https://github.com/openclaw/openclaw/pull/41275"
actions_total: 3
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 1
needs_human_count: 0
---

# gitcrawl-2369-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25132984429](https://github.com/openclaw/clownfish/actions/runs/25132984429)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/41275

## Summary

Canonical path remains open PR #41275 for the Control UI timeoutSeconds: 0 bug reported in #41272. No close, merge, or fix mutation is ready: #41275 is still open with unresolved review/check blockers, and #68753 is already closed and tracks a different cron timeout scope.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 3 |
| Fix executed | 0 |
| Fix failed | 0 |
| Fix blocked | 0 |
| Applied executions | 0 |
| Apply blocked | 0 |
| Apply skipped | 1 |
| Needs human | 0 |

## Fix Execution Actions

| Action | Status | Target | Branch | Reason |
| --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #41272 | close_fixed_by_candidate | skipped | fixed_by_candidate | Do not close the issue before the canonical fix lands; failing checks and unresolved review comments block fixed-by-candidate closeout. |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #41275 | keep_canonical | planned | canonical | Best live canonical path for this cluster, but keep it open for maintainer review and small follow-up work before any merge or issue closeout. |
| #41272 | close_fixed_by_candidate | blocked | fixed_by_candidate | Do not close the issue before the canonical fix lands; failing checks and unresolved review comments block fixed-by-candidate closeout. |
| #68753 | keep_closed | skipped | related | Historical related context only; no mutation is valid for an already-closed, different-scope PR. |

## Needs Human

- none
