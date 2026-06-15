---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-371-bulk-plan-20260615-a"
mode: "plan"
run_id: "27525991776"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27525991776"
head_sha: "4574037aa1f27e59d5ea43eca0073b4c4dfc504c"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T05:30:14.802Z"
canonical: "#42106"
canonical_issue: "#42106"
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

# gitcrawl-371-bulk-plan-20260615-a

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27525991776](https://github.com/openclaw/clownfish/actions/runs/27525991776)

Workflow conclusion: success

Worker result: planned

Canonical: #42106

## Summary

No mutating action is available or appropriate in this plan job. The only job candidate, #73981, is already closed as stale/conflicting cleanup. The live canonical remains #42106, which is open and explicitly tracks the still-unresolved block-streaming paragraph separator loss; closed table-related PRs/issues remain historical context only.

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
| #42106 | keep_canonical | planned | canonical | #42106 is the best live canonical because it is open, source-reproducible in the hydrated comments, and the prior candidate fix was closed without landing. |
| #73981 | keep_closed | skipped | superseded | Already closed PRs must not receive closure actions; keep it as historical failed/superseded fix context for #42106. |
| #66344 | keep_closed | skipped | superseded | Closed historical PR; do not mutate. Its table-protection work remains related context, not the live canonical path. |
| #66568 | keep_closed | skipped | superseded | Closed contributor PR; preserve as source-credit evidence only. |
| #66605 | keep_closed | skipped | related | Closed related test-coverage issue; no closure action is valid. |
| #66614 | keep_closed | skipped | related | Closed related table-splitting issue; keep as context only and do not mutate. |

## Needs Human

- none
