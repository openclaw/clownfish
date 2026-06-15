---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-642-plan-wave-20260615-a"
mode: "plan"
run_id: "27516899412"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27516899412"
head_sha: "756c7e01926673fc4be49b47719fc3f2b097892a"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T02:27:57.070Z"
canonical: "#69605"
canonical_issue: "#69605"
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

# gitcrawl-642-plan-wave-20260615-a

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27516899412](https://github.com/openclaw/clownfish/actions/runs/27516899412)

Workflow conclusion: success

Worker result: planned

Canonical: #69605

## Summary

Plan-only classification: keep #69605 as the live canonical issue for the Control UI code-block copy payload bug. #73633 is already closed and should receive no closure action. Linked issue #51664 is a different Edge clipboard failure and should stay related, not folded into this duplicate family.

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
| #69605 | keep_canonical | planned | canonical | #69605 is the best surviving live canonical for the Control UI rendered code-block copy payload bug. |
| #73633 | keep_closed | skipped | superseded | Already-closed PRs must not receive closure actions; keep it as historical closed context for #69605. |
| #51664 | keep_related | planned | related | Same WebChat code-block copy area, but different failure mode and likely root cause; do not close it as a duplicate of #69605. |

## Needs Human

- none
