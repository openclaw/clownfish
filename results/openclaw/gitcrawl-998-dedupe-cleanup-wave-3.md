---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-998-dedupe-cleanup-wave-3"
mode: "autonomous"
run_id: "27610226851"
workflow_run_id: "27610226851"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27610226851"
head_sha: "aa9af7b43a4e7ef8014e3f9de64f82296378ea4c"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-16T10:16:39.518Z"
canonical: "https://github.com/openclaw/openclaw/issues/65312"
canonical_issue: "https://github.com/openclaw/openclaw/issues/65312"
canonical_pr: "https://github.com/openclaw/openclaw/pull/78884"
actions_total: 2
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-998-dedupe-cleanup-wave-3

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27610226851](https://github.com/openclaw/clownfish/actions/runs/27610226851)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/65312

## Summary

Classified #65312 as the live canonical issue. The linked PR #78884 appears to be the right narrow docs fix path, but it is an existing-overlap context ref, remains open, and is not merge-ready because the hydrated ClawSweeper review reports a dirty/conflicting branch plus a release-owned CHANGELOG.md edit. No close, merge, or fix-PR action is safe or allowed in this job.

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
| #65312 | keep_canonical | planned | canonical | The issue is still reproducible on current main and the only hydrated fix path has not landed, so no close action is appropriate. |
| #78884 | keep_related | planned | related | The PR is related and likely the right fix path, but it is not merge-ready and this job blocks merge, fix, and raise_pr actions. |

## Needs Human

- none
