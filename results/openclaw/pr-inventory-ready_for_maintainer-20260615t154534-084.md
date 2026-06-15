---
repo: "openclaw/openclaw"
cluster_id: "pr-inventory-ready_for_maintainer-20260615T154534-084"
mode: "plan"
run_id: "27560323972"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27560323972"
head_sha: "61d2d7a61eeb9d8fe22ed20cc15f46b2ff4a4bb2"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T16:28:29.393Z"
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

# pr-inventory-ready_for_maintainer-20260615T154534-084

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27560323972](https://github.com/openclaw/clownfish/actions/runs/27560323972)

Workflow conclusion: success

Worker result: planned

Canonical: unknown

## Summary

Plan-only PR inventory classification. Hydrated preflight covered 20 of 25 listed candidates; no mutating actions are planned. One token/secrets-handling PR is routed to central security handling because its hydrated body describes token exposure via query strings. The 5 candidates missing hydrated live state are scoped needs_human decisions only.

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

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #92521 | keep_independent | planned | independent | Independent ready-for-maintainer PR; no duplicate/supersession evidence and no allowed merge/fix action. |
| #92574 | keep_independent | planned | independent | Independent test-coverage PR with passing checks; keep for maintainer review. |
| #91408 | keep_independent | planned | independent | Independent broad feature PR with a failing targeted check and waiting-on-author signal; keep open. |
| #91955 | keep_independent | planned | independent | Independent bugfix PR blocked by author/proof state; keep open. |
| #92610 | keep_independent | planned | independent | Independent large session-state PR with passing checks; keep for maintainer review. |
| #88743 | keep_independent | planned | independent | Low-signal closeout is disabled, so keep this independent docs PR for maintainer review. |
| #92230 | keep_independent | planned | independent | Independent small feature PR with passing checks; keep for maintainer review. |
| #92694 | keep_independent | planned | independent | Independent docs PR with proof failure; keep open for maintainer or author follow-up. |
| #92649 | keep_independent | planned | independent | Independent provider feature PR with passing checks; keep for maintainer review. |
| #92584 | route_security | planned | security_sensitive | Token/secret exposure language crosses the security-sensitive routing boundary; route only this item. |
| #92647 | keep_independent | planned | independent | Independent memory-core bugfix with waiting-on-author signal; keep open. |
| #92733 | needs_human | blocked | needs_human | Hydrated live state is unavailable for this listed candidate. |
| #92251 | keep_independent | planned | independent | Independent agents/session-state PR; keep for maintainer review. |
| #90633 | keep_independent | planned | independent | Independent draft PR with unresolved review-bot/preflight detail; keep open rather than route/close/merge. |
| #92817 | needs_human | blocked | needs_human | Hydrated live state is unavailable for this listed candidate. |
| #88899 | keep_independent | planned | independent | Independent Android UI PR with author-followup signal; keep open. |
| #88905 | keep_independent | planned | independent | Independent memory-core feature/docs PR with passing checks; keep for maintainer review. |
| #88919 | keep_independent | planned | independent | Independent focused session-lock fix; keep for maintainer review. |
| #88953 | keep_independent | planned | independent | Independent exec hardening/compatibility PR; keep for maintainer review. |
| #88681 | keep_independent | planned | independent | Independent runtime diagnostics PR with passing checks; keep for maintainer review. |
| #88916 | keep_independent | planned | independent | Independent draft Telegram/secret-ref compatibility PR with active author/draft signal; keep open. |
| #91457 | keep_independent | planned | independent | Independent Control UI bugfix PR with passing checks; keep for maintainer review. |
| #92877 | needs_human | blocked | needs_human | Hydrated live state is unavailable for this listed candidate. |
| #92873 | needs_human | blocked | needs_human | Hydrated live state is unavailable for this listed candidate. |
| #92819 | needs_human | blocked | needs_human | Hydrated live state is unavailable for this listed candidate. |

## Needs Human

- #92733 lacks hydrated live state in the provided preflight artifact, so target_kind and target_updated_at cannot be populated.
- #92817 lacks hydrated live state in the provided preflight artifact, so target_kind and target_updated_at cannot be populated.
- #92877 lacks hydrated live state in the provided preflight artifact, so target_kind and target_updated_at cannot be populated.
- #92873 lacks hydrated live state in the provided preflight artifact, so target_kind and target_updated_at cannot be populated.
- #92819 lacks hydrated live state in the provided preflight artifact, so target_kind and target_updated_at cannot be populated.
