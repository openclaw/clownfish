---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-7344-dedupe-only-20260429d"
mode: "autonomous"
run_id: "25142719568"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25142719568"
head_sha: "8a3c4b53d7ee7d2fb198d1574bbacd17ea63af32"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T04:05:51.330Z"
canonical: "https://github.com/openclaw/openclaw/issues/50145"
canonical_issue: "https://github.com/openclaw/openclaw/issues/50145"
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

# gitcrawl-7344-dedupe-only-20260429d

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25142719568](https://github.com/openclaw/clownfish/actions/runs/25142719568)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/50145

## Summary

#50145 remains the live canonical issue. #50147 is a same-author implementation candidate for #50145, but it is not merge-ready because Codex bot review found timeout and compaction regressions, mergeability is unknown, and several checks are failing. No close/comment/label mutations are planned.

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
| #50145 | keep_canonical | planned | canonical | The canonical issue is still open and represents the root user-visible failure; no duplicate closeout is available in this two-item cluster. |
| #50147 | keep_related | planned | related | #50147 is related implementation work for the canonical issue, but unresolved bot review findings and failing/unknown checks block merge or fixed-by-candidate closeout. |

## Needs Human

- none
