---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-409-dedupe-cleanup-wave-3"
mode: "autonomous"
run_id: "27610220779"
workflow_run_id: "27610220779"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27610220779"
head_sha: "aa9af7b43a4e7ef8014e3f9de64f82296378ea4c"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-16T10:17:51.376Z"
canonical: "https://github.com/openclaw/openclaw/issues/67915"
canonical_issue: "https://github.com/openclaw/openclaw/issues/67915"
canonical_pr: null
actions_total: 4
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-409-dedupe-cleanup-wave-3

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27610220779](https://github.com/openclaw/clownfish/actions/runs/27610220779)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/67915

## Summary

Kept #67915 as the live canonical issue. No close/comment/label mutation is high-confidence: the matching open PR #78034 is context from an excluded overlap cluster, is not mergeable in this job, and has failing proof/check signals, so the issue should remain open until that PR is repaired, replaced, or landed by its owning cluster.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 4 |
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
| #67915 | keep_canonical | planned | canonical | Keep the canonical issue open until the overlapping fix PR path is resolved; closing now would bypass the active issue/PR lifecycle. |
| #78034 | keep_related | planned | related | Related open fix candidate for #67915, but excluded from actionable scope and not merge-ready. |
| #67916 | keep_closed | skipped | superseded | Historical closed PR only; no mutation is valid. |
| #64104 | keep_closed | skipped | related | Historical related context only. |

## Needs Human

- none
