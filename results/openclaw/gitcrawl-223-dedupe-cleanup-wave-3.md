---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-223-dedupe-cleanup-wave-3"
mode: "autonomous"
run_id: "27610220555"
workflow_run_id: "27610220555"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27610220555"
head_sha: "aa9af7b43a4e7ef8014e3f9de64f82296378ea4c"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-16T10:16:39.423Z"
canonical: "https://github.com/openclaw/openclaw/issues/91893"
canonical_issue: "https://github.com/openclaw/openclaw/issues/91893"
canonical_pr: "https://github.com/openclaw/openclaw/pull/91907"
actions_total: 3
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-223-dedupe-cleanup-wave-3

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27610220555](https://github.com/openclaw/clownfish/actions/runs/27610220555)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/91893

## Summary

No closeout is safe or needed in this pass. #91893 remains the live canonical issue for the live-test ENOSPC bug, and hydrated open PR #91907 is the current canonical landing path, but merge, fix, raise_pr, and post-merge close are blocked by job policy. Already-closed #93290 is historical evidence only.

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
| #91893 | keep_canonical | planned | canonical | The report is still valid on current main and has a live open canonical fix path, so do not close the issue in this dedupe pass. |
| #91907 | keep_canonical | planned | canonical | #91907 is the best hydrated open landing path, but this job is close/comment/label only and cannot merge or repair it. |
| #93290 | keep_closed | skipped | superseded | Already closed; retained only as context showing #91907 was previously selected over another overlapping PR. |

## Needs Human

- none
