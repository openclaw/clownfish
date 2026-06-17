---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-167-fresh-plan-ramp"
mode: "plan"
run_id: "27659257780-1-9"
workflow_run_id: "27659257780"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27659257780"
head_sha: "d478a8869dca49e522a4036503c0f850a3b41509"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-17T01:50:03.850Z"
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

# gitcrawl-167-fresh-plan-ramp

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27659257780](https://github.com/openclaw/clownfish/actions/runs/27659257780)

Workflow conclusion: success

Worker result: planned

Canonical: unknown

## Summary

Plan-mode classification only. The closed attachment-loss candidate #77702 should stay closed. The only remaining open hydrated item, #91383, should be kept as an independent Telegram message-loss report rather than promoted as canonical for the excluded attachment-loss family, because its reported failure is Markdown-link text truncation rather than dropped MEDIA attachments.

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
| #77702 | keep_closed | skipped | superseded | Already closed in live preflight state, so no closure mutation is valid. |
| #91383 | keep_independent | planned | independent | The issue is in the same Telegram/message-loss area but has a different user-visible failure and likely root cause from the attachment-loss family, so it should not be closed or forced under the excluded canonical. |

## Needs Human

- none
