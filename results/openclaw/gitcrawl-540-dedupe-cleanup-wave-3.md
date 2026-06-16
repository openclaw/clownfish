---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-540-dedupe-cleanup-wave-3"
mode: "autonomous"
run_id: "27610221066"
workflow_run_id: "27610221066"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27610221066"
head_sha: "aa9af7b43a4e7ef8014e3f9de64f82296378ea4c"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-16T10:16:39.438Z"
canonical: "https://github.com/openclaw/openclaw/issues/91677"
canonical_issue: "https://github.com/openclaw/openclaw/issues/91677"
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

# gitcrawl-540-dedupe-cleanup-wave-3

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27610221066](https://github.com/openclaw/clownfish/actions/runs/27610221066)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/91677

## Summary

Kept #91677 as the live canonical issue. #92340 is a hydrated open implementation candidate that fixes the same Feishu VC invite gap, but it is an existing-overlap context ref for this job and still needs maintainer review; merge, fix PR, and post-merge closeout are blocked by the job frontmatter. No close/comment/label mutation is planned.

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
| #91677 | keep_canonical | planned | canonical | The report is still live and not duplicated by any other actionable open issue in this cluster; the linked candidate PR is not merged, and this job does not allow merge, fix, or post-merge closeout. |
| #92340 | keep_related | skipped | related | #92340 is the active implementation candidate for the canonical issue, but it is excluded from this cluster's actionable refs and still needs maintainer review outside this dedupe cleanup pass. |

## Needs Human

- none
