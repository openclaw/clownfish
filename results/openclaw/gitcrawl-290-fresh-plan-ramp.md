---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-290-fresh-plan-ramp"
mode: "plan"
run_id: "27659257780-1-20"
workflow_run_id: "27659257780"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27659257780"
head_sha: "d478a8869dca49e522a4036503c0f850a3b41509"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-17T01:50:03.807Z"
canonical: null
canonical_issue: null
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

# gitcrawl-290-fresh-plan-ramp

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27659257780](https://github.com/openclaw/clownfish/actions/runs/27659257780)

Workflow conclusion: success

Worker result: planned

Canonical: unknown

## Summary

Plan-mode classification only. The hinted representative #77344 is already closed, so it must not receive any closure action and should not remain the live open canonical. The only open candidate, #77574, is related to the clawdock-dashboard area but describes a different failure mode from #77344 and should stay open as its own issue rather than being closed into the closed representative.

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
| #77344 | keep_closed | skipped | canonical | Already closed in hydrated live state; closure actions are invalid for closed refs. It remains historical canonical evidence for the published-port bug but is not a live open canonical. |
| #77574 | keep_related | planned | related | Same clawdock-dashboard surface, different failure mode and reproduction scope. Keep #77574 open for its own validation/fix path rather than promoting it as canonical for #77344 or closing it as a duplicate. |

## Needs Human

- none
