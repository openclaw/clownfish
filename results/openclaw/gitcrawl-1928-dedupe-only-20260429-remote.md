---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-1928-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "25130814563"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25130814563"
head_sha: "e60ec11ddea49c43b3b3d13770368f7be20dc559"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T04:57:52.895Z"
canonical: "https://github.com/openclaw/openclaw/pull/65301"
canonical_issue: null
canonical_pr: "https://github.com/openclaw/openclaw/pull/65301"
actions_total: 9
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-1928-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25130814563](https://github.com/openclaw/clownfish/actions/runs/25130814563)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/65301

## Summary

Hydrated state shows representative #49612 and candidate #51967 are already closed after current main fixed the zero/default poll-duration misclassification. The remaining open work is the broader message.send poll-intent family; #65301 is the current best open canonical candidate, while #46455, #46904, and linked issues stay open because they contain unique scope or behavior tradeoffs. No close, merge, or fix action is safe in this dedupe-only job.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 9 |
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
| #65301 | keep_canonical | planned | canonical | Best current canonical PR for the remaining non-zero/non-empty message.send poll-intent cleanup, but not merge-ready and not actionable in this job. |
| #46455 | keep_related | planned | related | Related broader implementation candidate with unresolved bot findings and distinct Discord component scope. |
| #46904 | keep_related | planned | related | Keep open as a related alternative until maintainers choose the desired behavior; no high-confidence superseded closeout. |
| #51967 | keep_closed | skipped | fixed_by_candidate | Already closed; no mutation planned. |
| #49612 | keep_closed | skipped | fixed_by_candidate | Representative is obsolete and already closed; no mutation planned. |
| #39551 | keep_independent | planned | independent | Independent linked sessions_send repair, not part of this poll-param cleanup cluster. |
| #41199 | keep_related | planned | related | Related umbrella issue with unique sessions_send scope; keep open. |
| #42820 | keep_related | planned | related | Related open issue; do not close before a canonical fix lands and is revalidated against its reproduction. |
| #43015 | keep_related | planned | related | Related open issue with distinct components/modal scope; keep open. |

## Needs Human

- none
