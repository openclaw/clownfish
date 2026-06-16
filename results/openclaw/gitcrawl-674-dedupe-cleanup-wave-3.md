---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-674-dedupe-cleanup-wave-3"
mode: "autonomous"
run_id: "27610224388"
workflow_run_id: "27610224388"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27610224388"
head_sha: "aa9af7b43a4e7ef8014e3f9de64f82296378ea4c"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-16T10:16:39.480Z"
canonical: "https://github.com/openclaw/openclaw/issues/67177"
canonical_issue: "https://github.com/openclaw/openclaw/issues/67177"
canonical_pr: null
actions_total: 6
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-674-dedupe-cleanup-wave-3

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27610224388](https://github.com/openclaw/clownfish/actions/runs/27610224388)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/67177

## Summary

Classified the live cluster without GitHub mutation. #67177 remains the canonical open issue for the MSTeams file.download.info downloadUrl Graph-shares rewrite gap. Current main 4fee34876462a577b1ed825ecbf7ce807f298a17 still returns the raw file.download.info downloadUrl in resolveDownloadCandidate, while hydrated context #85845 is an open draft linked PR for the exact narrow fix and is excluded from this job as existing-overlap context. No close, merge, label, or fix action is safe or needed in this cluster.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 6 |
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
| #24797 | keep_closed | skipped | related | Already closed linked context; no mutation planned. |
| #28014 | keep_closed | skipped | related | Already closed related context; no mutation planned. |
| #55383 | keep_closed | skipped | related | Already closed predecessor issue; #67177 remains open for the remaining file.download.info branch. |
| #63942 | keep_closed | skipped | related | Already merged historical PR; it does not eliminate the remaining canonical issue. |
| #67177 | keep_canonical | planned | canonical | Canonical issue is live, still reproducible from current source, and should stay open until #85845 lands or is intentionally replaced. |
| #85845 | keep_related | skipped | related | Linked candidate fix is context for #67177 but belongs to an existing overlap lane and cannot be acted on by this close/comment/label-only job. |

## Needs Human

- none
