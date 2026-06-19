---
repo: "openclaw/openclaw"
cluster_id: "pr-inventory-ready_for_maintainer-20260615T154534-082"
mode: "plan"
run_id: "27560323972-1-84"
workflow_run_id: "27560323972"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27560323972"
head_sha: "61d2d7a61eeb9d8fe22ed20cc15f46b2ff4a4bb2"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-19T01:31:38.076Z"
canonical: null
canonical_issue: null
canonical_pr: null
actions_total: 25
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 5
---

# pr-inventory-ready_for_maintainer-20260615T154534-082

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27560323972](https://github.com/openclaw/clownfish/actions/runs/27560323972)

Workflow conclusion: success

Worker result: planned

Canonical: unknown

## Summary

Plan-mode PR inventory classification only. No shared canonical was selected because the job explicitly says this is not a dedupe cluster. Hydrated open PRs are kept independent for maintainer review; already-closed PRs are recorded as skipped; refs missing from the compacted preflight artifact are scoped needs_human hydration gaps.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 25 |
| Fix executed | 0 |
| Fix failed | 0 |
| Fix blocked | 0 |
| Applied executions | 0 |
| Apply blocked | 0 |
| Apply skipped | 0 |
| Needs human | 5 |

## Fix Execution Actions

| Action | Status | Target | Branch | Reason |
| --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |

## Apply Audit

| Attempt | Source | Target | Action | Status | Reason |
| --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |  |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #91663 | keep_independent | planned | independent | Independent open PR; keep for maintainer review. |
| #90500 | keep_independent | planned | independent | Independent open PR with maintainer technical correctness judgment still required. |
| #91706 | keep_independent | planned | independent | Independent PR with failing proof and waiting-on-author signal; keep open. |
| #90367 | keep_independent | planned | independent | Independent UI PR; proof failure blocks merge recommendation. |
| #91758 | keep_independent | planned | independent | Independent open PR with author follow-up signal. |
| #91674 | keep_independent | planned | independent | Independent open PR; keep for maintainer review. |
| #91803 | needs_human | blocked | needs_human | Missing hydrated live state in the supplied artifact for this candidate. |
| #91797 | keep_independent | planned | independent | Independent open PR with author follow-up signal. |
| #91438 | keep_independent | planned | independent | Independent broad feature PR; keep for maintainer review. |
| #91810 | needs_human | blocked | needs_human | Missing hydrated live state in the supplied artifact for this candidate. |
| #91907 | needs_human | blocked | needs_human | Missing hydrated live state in the supplied artifact for this candidate. |
| #87627 | keep_independent | planned | independent | Independent draft docs PR; keep open. |
| #87681 | keep_independent | planned | independent | Independent open PR; keep for maintainer review. |
| #87702 | keep_independent | planned | independent | Independent open PR; keep for maintainer review. |
| #88442 | keep_independent | planned | independent | Independent automation/safety PR with author follow-up signal; keep open. |
| #91963 | needs_human | blocked | needs_human | Missing hydrated live state in the supplied artifact for this candidate. |
| #88504 | keep_independent | planned | independent | Independent broad feature PR; keep for maintainer review. |
| #88550 | keep_independent | planned | independent | Independent PR with failing proof and unresolved bot-review context; keep open. |
| #88551 | keep_independent | planned | independent | Independent open PR; keep for maintainer review. |
| #88683 | keep_independent | planned | independent | Independent open PR; keep for maintainer review. |
| #88709 | keep_independent | planned | independent | Independent auth-provider behavior PR; keep for maintainer review. |
| #88726 | keep_independent | planned | independent | Independent open PR with author follow-up signal; keep open. |
| #91376 | keep_closed | skipped | superseded | Already closed in hydrated state. |
| #91427 | keep_closed | skipped | superseded | Already closed in hydrated state. |
| #92037 | needs_human | blocked | needs_human | Missing hydrated live state in the supplied artifact for this candidate. |

## Needs Human

- #91803 missing hydrated live state in compacted preflight artifact; cannot provide target_updated_at or classify from live PR data.
- #91810 missing hydrated live state in compacted preflight artifact; cannot provide target_updated_at or classify from live PR data.
- #91907 missing hydrated live state in compacted preflight artifact; cannot provide target_updated_at or classify from live PR data.
- #91963 missing hydrated live state in compacted preflight artifact; cannot provide target_updated_at or classify from live PR data.
- #92037 missing hydrated live state in compacted preflight artifact; cannot provide target_updated_at or classify from live PR data.
