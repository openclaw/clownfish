---
repo: "openclaw/openclaw"
cluster_id: "pr-inventory-needs_proof-20260615T154534-027"
mode: "plan"
run_id: "27560323972-1-30"
workflow_run_id: "27560323972"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27560323972"
head_sha: "61d2d7a61eeb9d8fe22ed20cc15f46b2ff4a4bb2"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-19T02:31:40.801Z"
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
needs_human_count: 7
---

# pr-inventory-needs_proof-20260615T154534-027

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27560323972](https://github.com/openclaw/clownfish/actions/runs/27560323972)

Workflow conclusion: success

Worker result: planned

Canonical: unknown

## Summary

Plan-mode PR inventory classification only. The hydrated preflight artifact reports no security-sensitive items and no shared canonical; close, merge, fix, and raise-pr actions are not planned. Open hydrated PRs are kept for normal maintainer review unless a specific product/dependency decision is unresolved; already-closed PRs are recorded as skipped keep_closed actions.

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
| Needs human | 7 |

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
| #89959 | keep_independent | planned | independent | Independent open draft feature PR; leave for normal review/proof, not cluster cleanup. |
| #91309 | keep_independent | planned | independent | Small independent fix with proof; not closable or mergeable by this plan job. |
| #91407 | keep_closed | skipped | superseded | Already closed; no mutation should be emitted. |
| #91397 | keep_closed | skipped | superseded | Already closed; no mutation should be emitted. |
| #91414 | keep_independent | planned | independent | Independent open fix; keep for normal review and proof assessment. |
| #91393 | keep_independent | planned | independent | Independent open fix; keep for normal maintainer review. |
| #91443 | keep_independent | planned | independent | Independent open fix with proof gap; keep for author/maintainer follow-up. |
| #91444 | keep_independent | planned | independent | Small independent fix; keep for normal review. |
| #91446 | keep_independent | planned | independent | Independent open fix; keep for normal review. |
| #91447 | keep_independent | planned | independent | Independent open fix; keep for review outside this cleanup shard. |
| #91466 | keep_independent | planned | independent | Independent open feature/fix with proof gap; keep for normal review. |
| #91477 | needs_human | planned | needs_human | Specific product/API decision remains unresolved; human maintainer judgment is required. |
| #91474 | needs_human | planned | needs_human | Active author/dependency follow-up on the stacked base PR needs maintainer tracking rather than cleanup closure. |
| #91490 | keep_independent | planned | independent | Independent open fix with proof gap; keep for maintainer review. |
| #91493 | keep_independent | planned | independent | Independent open contract change; keep for review/proof follow-up. |
| #91511 | keep_independent | planned | independent | Independent open UI fix; keep for normal review. |
| #91515 | keep_independent | planned | independent | Independent open small fix with proof gap; keep for follow-up. |
| #91549 | needs_human | blocked | needs_human | Missing hydrated live state for this listed candidate. |
| #91545 | keep_closed | skipped | superseded | Already closed; no mutation should be emitted. |
| #91544 | keep_independent | planned | independent | Independent open fix; keep for maintainer review and review-bot follow-up. |
| #91535 | keep_independent | planned | independent | Independent open UI fix; keep for normal review. |
| #91584 | needs_human | blocked | needs_human | Missing hydrated live state for this listed candidate. |
| #91596 | needs_human | blocked | needs_human | Missing hydrated live state for this listed candidate. |
| #91603 | needs_human | blocked | needs_human | Missing hydrated live state for this listed candidate. |
| #91606 | needs_human | blocked | needs_human | Missing hydrated live state for this listed candidate. |

## Needs Human

- #91477 requires a maintainer/product decision for the draft CliBackendPlugin.estimateUsage API tied to #91282.
- #91474 is waiting on author and stacked on #90975, so dependency/author follow-up needs maintainer tracking.
- #91549 lacks hydrated live state and target_updated_at in the provided artifact.
- #91584 lacks hydrated live state and target_updated_at in the provided artifact.
- #91596 lacks hydrated live state and target_updated_at in the provided artifact.
- #91603 lacks hydrated live state and target_updated_at in the provided artifact.
- #91606 lacks hydrated live state and target_updated_at in the provided artifact.
