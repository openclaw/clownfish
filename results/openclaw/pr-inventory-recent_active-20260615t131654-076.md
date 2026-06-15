---
repo: "openclaw/openclaw"
cluster_id: "pr-inventory-recent_active-20260615T131654-076"
mode: "plan"
run_id: "27549048589"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27549048589"
head_sha: "e8e65d821b5c55a11a8a30d2023428743182215a"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T13:28:19.811Z"
canonical: null
canonical_issue: null
canonical_pr: null
actions_total: 40
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 2
---

# pr-inventory-recent_active-20260615T131654-076

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27549048589](https://github.com/openclaw/clownfish/actions/runs/27549048589)

Workflow conclusion: success

Worker result: planned

Canonical: unknown

## Summary

Plan-only PR inventory classification. The hydrated artifact is explicitly not a dedupe cluster and provides no shared canonical; no GitHub mutations, merges, closeouts, labels, comments, or fix PRs are planned. Hydrated open PRs are kept independently unless the artifact shows a specific maintainer/technical judgment blocker. One already-closed PR is recorded as keep_closed. Later job refs missing from the compacted preflight artifact are non-mutating keep_independent classifications with null live timestamps.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 40 |
| Fix executed | 0 |
| Fix failed | 0 |
| Fix blocked | 0 |
| Applied executions | 0 |
| Apply blocked | 0 |
| Apply skipped | 0 |
| Needs human | 2 |

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
| #92040 | needs_human | planned | needs_human | Needs maintainer technical judgment before any close, supersede, or canonical choice. |
| #92126 | keep_independent | planned | independent | Draft contributor PR should remain open for its own review path. |
| #91625 | keep_independent | planned | independent | Distinct small CLI/docs fix; no inventory cleanup action is justified. |
| #91463 | keep_independent | planned | independent | Independent browser bridge bug fix remains on its own review path. |
| #90267 | keep_independent | planned | independent | Ready-for-review independent fix; no close or merge is allowed in this plan job. |
| #92227 | keep_independent | planned | independent | Independent provider/auth bug fix with mock-only proof label; leave for normal review. |
| #90648 | keep_independent | planned | independent | Independent message-delivery fix; keep open for review-bot/maintainer handling. |
| #92237 | keep_independent | planned | independent | Independent agents settings bug fix. |
| #92261 | keep_independent | planned | independent | Non-mutating classification only because live artifact data is unavailable. |
| #90259 | keep_independent | planned | independent | Broad independent feature/fix candidate should stay open for its own proof and review path. |
| #92263 | keep_independent | planned | independent | Non-mutating classification only because live artifact data is unavailable. |
| #88796 | keep_independent | planned | independent | Independent Discord action bug fix. |
| #92283 | keep_independent | planned | independent | Non-mutating classification only because live artifact data is unavailable. |
| #91644 | keep_independent | planned | independent | Large independent feature PR remains a maintainer review item, not cleanup. |
| #91921 | keep_independent | planned | independent | Independent exec-adjacent behavior bug fix; not security-routed without a boundary-bypass claim. |
| #92339 | keep_independent | planned | independent | Non-mutating classification only because live artifact data is unavailable. |
| #92328 | keep_independent | planned | independent | Non-mutating classification only because live artifact data is unavailable. |
| #88898 | keep_independent | planned | independent | Independent small reply behavior fix. |
| #92236 | keep_independent | planned | independent | Independent WebChat progress-display fix. |
| #92363 | keep_independent | planned | independent | Non-mutating classification only because live artifact data is unavailable. |
| #92383 | keep_independent | planned | independent | Non-mutating classification only because live artifact data is unavailable. |
| #91889 | needs_human | planned | needs_human | API/product surface change requires maintainer signal before any stronger recommendation. |
| #91776 | keep_independent | planned | independent | Independent iOS bug fix. |
| #91768 | keep_independent | planned | independent | Independent iOS UI bug fix. |
| #91977 | keep_independent | planned | independent | Independent iOS UI behavior fix. |
| #92430 | keep_independent | planned | independent | Non-mutating classification only because live artifact data is unavailable. |
| #92441 | keep_independent | planned | independent | Non-mutating classification only because live artifact data is unavailable. |
| #92445 | keep_independent | planned | independent | Non-mutating classification only because live artifact data is unavailable. |
| #92456 | keep_independent | planned | independent | Non-mutating classification only because live artifact data is unavailable. |
| #92440 | keep_independent | planned | independent | Non-mutating classification only because live artifact data is unavailable. |
| #91656 | keep_independent | planned | independent | Independent test coverage PR. |
| #92541 | keep_independent | planned | independent | Non-mutating classification only because live artifact data is unavailable. |
| #92156 | keep_closed | skipped |  | Already closed in live preflight state. |
| #92556 | keep_independent | planned | independent | Non-mutating classification only because live artifact data is unavailable. |
| #92394 | keep_independent | planned | independent | Non-mutating classification only because live artifact data is unavailable. |
| #92375 | keep_independent | planned | independent | Non-mutating classification only because live artifact data is unavailable. |
| #92575 | keep_independent | planned | independent | Non-mutating classification only because live artifact data is unavailable. |
| #92287 | keep_independent | planned | independent | Non-mutating classification only because live artifact data is unavailable. |
| #92570 | keep_independent | planned | independent | Non-mutating classification only because live artifact data is unavailable. |
| #92499 | keep_independent | planned | independent | Non-mutating classification only because live artifact data is unavailable. |

## Needs Human

- #92040: hydrated review identifies overlapping unhydrated #92053 for the same issue and failing checks; canonical/technical path requires maintainer judgment.
- #91889: PR body explicitly requests maintainer decision for plugin SDK accountId API surface.
