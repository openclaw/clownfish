---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-733-plan-wave-20260615-b"
mode: "plan"
run_id: "27519032475"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27519032475"
head_sha: "30afd4b1d5fd5919294bee21d7dd4b30ef87b468"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T02:20:44.652Z"
canonical: "#92384"
canonical_issue: "#92384"
canonical_pr: "#92995"
actions_total: 6
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-733-plan-wave-20260615-b

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27519032475](https://github.com/openclaw/clownfish/actions/runs/27519032475)

Workflow conclusion: success

Worker result: planned

Canonical: #92384

## Summary

Live preflight shows the hinted representative #81723 is already closed, so #92384 is the best surviving canonical issue for the WeChat bare-target direct-vs-group outbound routing root cause. The linked open PR #92995 is related to the canonical issue but is not merge-ready in this plan: merge is blocked by job policy, missing merge preflight, unknown mergeability, one failing check, and ClawSweeper's unresolved proof/test concerns.

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
| #13332 | keep_closed | skipped | related | Already closed and only related routing-family context, not an open candidate for this cluster. |
| #69326 | keep_closed | skipped | related | Already closed and related only by broader routing area. |
| #81723 | keep_closed | skipped | duplicate | The original representative is no longer live; it was already closed as a duplicate of #92384 with #92995 named as the active repair path. |
| #92384 | keep_canonical | planned | canonical | Best surviving live canonical issue for the cluster root cause. |
| #92390 | keep_closed | skipped | superseded | Already closed unmerged PR; useful historical fix context, but no action is valid against a closed PR in plan mode. |
| #92995 | keep_related | planned | related | Open related candidate fix for #92384, but not merge-ready and merge/fix actions are disallowed in this plan job. |

## Needs Human

- none
