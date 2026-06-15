---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-496-bulk-plan-20260615-a"
mode: "plan"
run_id: "27526064914"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27526064914"
head_sha: "150815b50791d4135faf2d65f72f30e14c8a168b"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T05:33:03.549Z"
canonical: "#63216"
canonical_issue: "#63216"
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

# gitcrawl-496-bulk-plan-20260615-a

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27526064914](https://github.com/openclaw/clownfish/actions/runs/27526064914)

Workflow conclusion: success

Worker result: planned

Canonical: #63216

## Summary

Plan-only classification completed from the hydrated preflight artifact. The original representative #47668 is already closed, and #63216 is the best live canonical for the remaining hard-reset/context-recovery issue family. The strikethrough PR #70605 and recovery-order/tool-loop issues are related but should not be merged, closed, or fixed in this job.

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
| #47668 | keep_closed | skipped | superseded | Already closed representative; keep as historical context and promote the hydrated open issue #63216 as the live canonical for the remaining recovery-loop family. |
| #63216 | keep_canonical | planned | canonical | Best live canonical for the broad context-overflow reset/recovery loop after the original representative closed. |
| #70605 | keep_related | planned | related | Related narrow prompt-context sanitizer PR, but not the canonical reset/recovery issue and not mergeable or actionable in this plan-only excluded-overlap job. |
| #78562 | keep_related | planned | related | Same session-state/context-overflow family as #63216, but with distinct tool-loop and usage-accounting evidence that should stay open as related follow-up rather than be collapsed into a duplicate. |
| #80594 | keep_closed | skipped | related | Already closed related proactive-budget feature request; retain as historical context only. |
| #81182 | keep_related | planned | related | Related narrow overflow recovery-order issue with an unhydrated linked implementation candidate; keep open and do not close or mark fixed in this cluster. |

## Needs Human

- none
