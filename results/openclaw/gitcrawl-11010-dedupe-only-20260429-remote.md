---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-11010-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "25109637762"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25109637762"
head_sha: "7ac7590296085c93e29434b3af3e919aa257e029"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T04:57:52.709Z"
canonical: "https://github.com/openclaw/openclaw/issues/62267"
canonical_issue: "https://github.com/openclaw/openclaw/issues/62267"
canonical_pr: null
actions_total: 7
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-11010-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25109637762](https://github.com/openclaw/clownfish/actions/runs/25109637762)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/62267

## Summary

Hydrated state leaves #62267 as the only live in-scope canonical issue. The older Ollama overflow reports are already closed/fixed context, #45505 is a related but separate compaction reconciliation follow-up, and no close, label, merge, post-merge, or fix action is safe or needed for this cluster.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 7 |
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
| #62267 | keep_canonical | planned | canonical | #62267 remains the best live canonical issue for the current qwen3:14b long-context prompt-ingestion performance investigation. |
| #45505 | keep_related | planned | related | Related compaction/session-state follow-up, but not the same root cause or closeout path as #62267. |
| #34005 | keep_closed | skipped | fixed_by_candidate | Already closed; no mutation is valid. The old overflow-classification symptom is covered by hydrated merged PR #34019. |
| #34019 | keep_closed | skipped | related | Closed merged historical fix; no action is available in this dedupe-only cluster. |
| #41486 | keep_closed | skipped | related | Already closed and distinct enough to remain historical context only. |
| #45558 | keep_closed | skipped | related | Already closed; keep as historical related evidence only. |
| #45597 | keep_closed | skipped | fixed_by_candidate | Already closed; the overflow-classification/reporting symptom is fixed by hydrated merged PR #34019 and is not the current #62267 performance canonical. |

## Needs Human

- none
