---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-642-dedupe-cleanup-wave-3"
mode: "autonomous"
run_id: "27610225356"
workflow_run_id: "27610225356"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27610225356"
head_sha: "aa9af7b43a4e7ef8014e3f9de64f82296378ea4c"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-16T10:16:39.494Z"
canonical: "https://github.com/openclaw/openclaw/issues/69605"
canonical_issue: "https://github.com/openclaw/openclaw/issues/69605"
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

# gitcrawl-642-dedupe-cleanup-wave-3

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27610225356](https://github.com/openclaw/clownfish/actions/runs/27610225356)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/69605

## Summary

Hydrated state supports keeping #69605 as the open canonical issue. The linked Edge clipboard issue #51664 is related but has a different browser/fallback failure mode, and closed overlap PR #73633 remains historical evidence only. No close, merge, or fix action is planned because there is no open duplicate target in this cluster and fix/raise_pr/merge are blocked by the job.

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
| #69605 | keep_canonical | planned | canonical | #69605 is the best surviving canonical issue for this cluster; it remains open and unfixed, and no actionable duplicate closeout target is present. |
| #51664 | keep_related | planned | related | Same UI area and symptom family, but the root cause and expected fix path differ, so #51664 should remain open as related context rather than be closed as a duplicate of #69605. |
| #73633 | keep_closed | skipped | superseded | Closed historical overlap refs are evidence only and must not receive another close action. |

## Needs Human

- none
