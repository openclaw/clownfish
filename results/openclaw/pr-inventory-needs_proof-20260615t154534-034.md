---
repo: "openclaw/openclaw"
cluster_id: "pr-inventory-needs_proof-20260615T154534-034"
mode: "plan"
run_id: "27560323972-1-37"
workflow_run_id: "27560323972"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27560323972"
head_sha: "61d2d7a61eeb9d8fe22ed20cc15f46b2ff4a4bb2"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-21T10:51:02.350Z"
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

# pr-inventory-needs_proof-20260615T154534-034

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27560323972](https://github.com/openclaw/clownfish/actions/runs/27560323972)

Workflow conclusion: success

Worker result: planned

Canonical: unknown

## Summary

Plan-mode PR inventory classification only. The preflight artifact is the live GitHub read for hydrated refs; no shared canonical was invented. Hydrated open PRs remain non-mutating inventory items, hydrated closed PRs are skipped as already closed, and refs missing from the compacted preflight artifact are escalated only for missing live state.

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
| #52120 | keep_independent | planned | independent | Independent open PR needing proof/review; not a duplicate or closeout candidate. |
| #92847 | keep_independent | planned | independent | Independent open PR with supplied proof; no mutation allowed. |
| #92867 | keep_independent | planned | independent | Independent open PR with supplied proof; no closeout target. |
| #50454 | keep_independent | planned | independent | Independent open PR needing proof/review; keep non-mutating. |
| #92893 | needs_human | blocked | needs_human | Missing hydrated live state prevents a reliable per-PR classification. |
| #92878 | keep_independent | planned | independent | Independent non-security PR; keep for maintainer review/proof flow. |
| #92929 | needs_human | blocked | needs_human | Missing hydrated live state prevents a reliable per-PR classification. |
| #55085 | keep_closed | skipped | superseded | Already closed in live preflight state; no mutation needed. |
| #55390 | keep_independent | planned | independent | Independent broad WIP PR with failing proof/checks; not closable under current job. |
| #55742 | keep_closed | skipped | superseded | Already closed in live preflight state; no mutation needed. |
| #55861 | keep_independent | planned | independent | Independent open PR needing proof/check repair. |
| #56031 | keep_independent | planned | independent | Independent non-security PR needing proof/check repair. |
| #92932 | needs_human | blocked | needs_human | Missing hydrated live state and security-shaped title require human/security-aware hydration before classification. |
| #90833 | keep_independent | planned | independent | Independent open PR with proof; no mutation allowed. |
| #90855 | keep_independent | planned | independent | Independent open PR with proof; no mutation allowed. |
| #92545 | keep_independent | planned | independent | Independent draft PR; keep for author/maintainer proof flow. |
| #92895 | needs_human | blocked | needs_human | Missing hydrated live state prevents a reliable per-PR classification. |
| #92936 | needs_human | blocked | needs_human | Missing hydrated live state prevents a reliable per-PR classification. |
| #54862 | keep_closed | skipped | superseded | Already closed in live preflight state; no mutation needed. |
| #55770 | keep_closed | skipped | superseded | Already closed in live preflight state; no mutation needed. |
| #57364 | keep_closed | skipped | superseded | Already closed in live preflight state; no mutation needed. |
| #58434 | keep_closed | skipped | superseded | Already closed in live preflight state; no mutation needed. |
| #58805 | keep_closed | skipped | superseded | Already closed in live preflight state; no mutation needed. |
| #59170 | keep_independent | planned | independent | Independent non-security PR needing proof/check repair. |
| #59177 | keep_closed | skipped | superseded | Already closed in live preflight state; no mutation needed. |

## Needs Human

- #92893 missing from the compacted hydrated preflight artifact; live state and target_updated_at are unavailable.
- #92929 missing from the compacted hydrated preflight artifact; live state and target_updated_at are unavailable.
- #92932 missing from the compacted hydrated preflight artifact and has security-shaped plaintext API key/cache wording; hydrate and route through the normal security boundary decision before any backlog action.
- #92895 missing from the compacted hydrated preflight artifact; live state and target_updated_at are unavailable.
- #92936 missing from the compacted hydrated preflight artifact; live state and target_updated_at are unavailable.
