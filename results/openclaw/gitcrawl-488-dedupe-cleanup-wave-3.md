---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-488-dedupe-cleanup-wave-3"
mode: "autonomous"
run_id: "27610223817"
workflow_run_id: "27610223817"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27610223817"
head_sha: "aa9af7b43a4e7ef8014e3f9de64f82296378ea4c"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-16T10:16:39.473Z"
canonical: "https://github.com/openclaw/openclaw/issues/92100"
canonical_issue: "https://github.com/openclaw/openclaw/issues/92100"
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

# gitcrawl-488-dedupe-cleanup-wave-3

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27610223817](https://github.com/openclaw/clownfish/actions/runs/27610223817)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/92100

## Summary

Kept #92100 as the live canonical issue. Current main still has the hardcoded English Feishu no-visible fallback, and the linked PR #92172 is useful implementation context but is excluded from this job's actionable refs and cannot be merged or repaired here because fix, raise_pr, and merge are blocked.

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
| #92100 | keep_canonical | planned | canonical | #92100 remains the best open canonical report for this root cause; no duplicate or close action is available in this cluster. |
| #92172 | keep_related | skipped | related | Useful linked implementation path, but excluded from this dedupe cleanup wave and not merge-ready under this job's gates. |

## Needs Human

- none
