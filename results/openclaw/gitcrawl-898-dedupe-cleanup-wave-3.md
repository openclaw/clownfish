---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-898-dedupe-cleanup-wave-3"
mode: "autonomous"
run_id: "27610224920"
workflow_run_id: "27610224920"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27610224920"
head_sha: "aa9af7b43a4e7ef8014e3f9de64f82296378ea4c"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-16T10:16:39.490Z"
canonical: "https://github.com/openclaw/openclaw/issues/86933"
canonical_issue: "https://github.com/openclaw/openclaw/issues/86933"
canonical_pr: null
actions_total: 3
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-898-dedupe-cleanup-wave-3

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27610224920](https://github.com/openclaw/clownfish/actions/runs/27610224920)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/86933

## Summary

Classified #86933 as the live canonical issue. The linked PR #87035 is already closed as a low-signal/unmergeable attempted fix, and the merged #87476 only covers the generic external delivery-context path; hydrated evidence says current main does not prove the DingTalk group target-normalization gap is fixed. No close, merge, or fix PR action is planned because the only open actionable item should remain open for maintainer/product follow-up and this job disallows fix/raise_pr.

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
| #86933 | keep_canonical | planned | canonical | #86933 remains the best live canonical issue for the unresolved DingTalk group announce delivery behavior. |
| #87035 | keep_closed | skipped | superseded | Already closed unmerged attempted fix; use as context for #86933 only. |
| #87476 | keep_closed | skipped | related | Related merged fix on the same sessions_send announce family, but not sufficient evidence to close #86933 as fixed. |

## Needs Human

- none
