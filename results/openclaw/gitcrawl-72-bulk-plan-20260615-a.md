---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-72-bulk-plan-20260615-a"
mode: "plan"
run_id: "27523240243"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27523240243"
head_sha: "2eb7becb97c14f307a0a4930f6deab62b7223dde"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T04:07:30.424Z"
canonical: null
canonical_issue: null
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

# gitcrawl-72-bulk-plan-20260615-a

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27523240243](https://github.com/openclaw/clownfish/actions/runs/27523240243)

Workflow conclusion: success

Worker result: planned

Canonical: unknown

## Summary

Plan-only classification split the Telegram stall cluster into multiple non-duplicate roots. No GitHub mutations are planned: #43549, #84653, and #91456 remain live canonical work items for distinct causes; #91564 is related but has unique restart-surviving/forum-topic evidence; #68575 and #84710 are already closed and should stay closed.

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
| #43549 | keep_canonical | planned | canonical | Best live canonical for the bad persisted session JSON/status recovery subcluster. |
| #68575 | keep_closed | skipped | superseded | Already closed stale/superseded PR; closed refs are historical evidence only. |
| #84653 | keep_canonical | planned | canonical | Distinct live canonical for the `Bot not initialized` regression-like report. |
| #84710 | keep_closed | skipped | fixed_by_candidate | Already closed as fixed by merged #91840. |
| #91456 | keep_canonical | planned | canonical | Best live canonical for the guarded Telegram lane timeout subcluster; #93040 is relevant candidate fix evidence but not a closure trigger here. |
| #91564 | keep_related | planned | related | Related Telegram lane/message-loss family with unique remaining evidence and no safe duplicate closeout. |

## Needs Human

- none
