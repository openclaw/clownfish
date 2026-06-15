---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-13766-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "25109772333"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25109772333"
head_sha: "7ac7590296085c93e29434b3af3e919aa257e029"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T04:57:52.757Z"
canonical: "https://github.com/openclaw/openclaw/pull/52751"
canonical_issue: "https://github.com/openclaw/openclaw/issues/52732"
canonical_pr: "https://github.com/openclaw/openclaw/pull/52751"
actions_total: 11
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-13766-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25109772333](https://github.com/openclaw/clownfish/actions/runs/25109772333)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/52751

## Summary

Hydrated state at main 9881a808f2fc0d5302f98a040a9efaad00336097 shows no security-sensitive refs. #52751 remains the best live PR representative for the combined per-agent compaction and contextPruning override gap, with #52732 as the open tracking issue. #69988 is a related, narrower compaction-only implementation path; the other open candidates are related per-agent configuration/session-pruning work with distinct scope, so no high-confidence close action is planned.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 11 |
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
| #52732 | keep_canonical | planned | canonical | Keep the open issue as the canonical tracking thread for the combined feature while #52751 remains under review. |
| #52751 | keep_canonical | planned | canonical | Canonical PR remains open but is not merge-ready or closeout-ready in this job. |
| #69988 | keep_related | planned | related | Keep open as related narrower implementation, not a duplicate of the combined compaction/contextPruning canonical. |
| #43238 | keep_related | planned | related | Same contextPruning area but a different feature and root cause from the per-agent override canonical. |
| #58284 | keep_related | planned | related | Related follow-up issue for rolling pruning; leave open rather than folding into the per-agent override canonical. |
| #50755 | keep_related | planned | related | Related per-agent configuration work with distinct scope; keep open for its own review path. |
| #52775 | keep_closed | skipped | superseded | Already closed; no mutation planned. |
| #53821 | keep_related | planned | related | Related per-agent session visibility work with separate user-facing behavior. |
| #59149 | keep_related | planned | related | Related session visibility/A2A tracking issue; keep open with its own PR path. |
| #59170 | keep_related | planned | related | Related but distinct per-agent access-control configuration work; keep open. |
| #60807 | keep_closed | skipped | superseded | Already closed; no mutation planned. |

## Needs Human

- none
