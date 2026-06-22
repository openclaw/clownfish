---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-1362-autonomous-bulk-20260622b"
mode: "autonomous"
run_id: "27961714636"
workflow_run_id: "27961714636"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27961714636"
head_sha: "cbf4207a7692d7b1b364a892069127245a796578"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-22T14:55:30.363Z"
canonical: "https://github.com/openclaw/openclaw/issues/93556"
canonical_issue: "https://github.com/openclaw/openclaw/issues/93556"
canonical_pr: null
actions_total: 5
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 1
needs_human_count: 0
---

# gitcrawl-1362-autonomous-bulk-20260622b

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27961714636](https://github.com/openclaw/clownfish/actions/runs/27961714636)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/93556

## Summary

Classified #93556 as the live canonical issue for the manifest account-ID normalization startup bug. #93686 is the hydrated candidate fix, but it is an existing-overlap context PR and is not merge-ready under this job because mergeability is unknown and required merge preflight/Codex review proof is missing. No close, merge, or replacement PR is planned in this cluster.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 5 |
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
| #93686 | merge_candidate | skipped | fixed_by_candidate | action status is blocked |

## Apply Audit

| Attempt | Source | Target | Action | Status | Reason |
| --- | --- | --- | --- | --- |
| 1 | apply | #93686 | merge_candidate | skipped | action status is blocked |
| 2 | apply | #93686 | merge_candidate | skipped | action status is blocked |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #63172 | keep_closed | skipped | related | Closed context evidence only; not an actionable target for this cluster. |
| #86314 | keep_related | planned | related | Same Weixin startup family, but different root cause and canonical thread; keep open. |
| #91129 | keep_related | planned | related | Related Weixin account-startup report with unique product/live-repro follow-up; keep open. |
| #93556 | keep_canonical | planned | canonical | #93556 remains the best live canonical issue for the manifest account-ID normalization startup bug. |
| #93686 | merge_candidate | blocked | fixed_by_candidate | Candidate fix is useful but cannot be recommended for merge in this result without mergeability, maintainer/Codex review preflight, and overlap ownership clearance. |

## Needs Human

- none
