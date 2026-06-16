---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-566-dedupe-cleanup-wave-3"
mode: "autonomous"
run_id: "27610223721"
workflow_run_id: "27610223721"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27610223721"
head_sha: "aa9af7b43a4e7ef8014e3f9de64f82296378ea4c"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-16T10:16:39.471Z"
canonical: "https://github.com/openclaw/openclaw/issues/78754"
canonical_issue: "https://github.com/openclaw/openclaw/issues/78754"
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

# gitcrawl-566-dedupe-cleanup-wave-3

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27610223721](https://github.com/openclaw/clownfish/actions/runs/27610223721)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/78754

## Summary

Kept #78754 as the live canonical issue. The hydrated artifact shows #78754 is open with current source-level reproduction evidence, while the focused linked PR #78978 is closed unmerged and failed real-behavior proof. No close, merge, or fix action is safe or allowed for this job.

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
| #78754 | keep_canonical | planned | canonical | #78754 remains the best live canonical thread; there is no landed or mergeable hydrated fix that covers it. |
| #73230 | keep_closed | skipped | related | Closed related context only. |
| #77799 | keep_closed | skipped | related | Closed merged related context, not a complete candidate fix for #78754. |
| #78978 | keep_closed | skipped | related | Closed unmerged overlapping PR; no action because it is an excluded existing-overlap context ref. |
| #91300 | keep_closed | skipped | related | Closed related context with a distinct silent false-success failure mode. |

## Needs Human

- none
