---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-147-bulk-plan-20260615-a"
mode: "plan"
run_id: "27520807487"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27520807487"
head_sha: "872a0ab6af9f5f189014062d7bd0a2367b003dde"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T02:47:39.898Z"
canonical: "#90982"
canonical_issue: "#90982"
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

# gitcrawl-147-bulk-plan-20260615-a

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27520807487](https://github.com/openclaw/clownfish/actions/runs/27520807487)

Workflow conclusion: success

Worker result: planned

Canonical: #90982

## Summary

Plan-mode classification only; no GitHub mutations. The job notes explicitly require routing #62956 and #91002 as security-signal refs, while #90982 remains the open canonical issue. Already-closed PRs are kept closed and not targeted for closure.

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
| #90982 | keep_canonical | planned | canonical |  |
| #62956 | route_security | planned | security_sensitive | Exact job-provided security-signal ref; route only this item and do not mutate it. |
| #91002 | route_security | planned | security_sensitive | Exact job-provided security-signal ref; central security handling must decide it before any normal PR disposition. |
| #91701 | keep_closed | skipped | superseded | Already closed; retain historical context only. |
| #67401 | keep_closed | skipped | related | Linked historical context only; already merged and not a duplicate of the canonical issue. |

## Needs Human

- none
