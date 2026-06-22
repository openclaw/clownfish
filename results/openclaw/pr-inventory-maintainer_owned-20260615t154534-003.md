---
repo: "openclaw/openclaw"
cluster_id: "pr-inventory-maintainer_owned-20260615T154534-003"
mode: "plan"
run_id: "27560323972-1-3"
workflow_run_id: "27560323972"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27560323972"
head_sha: "61d2d7a61eeb9d8fe22ed20cc15f46b2ff4a4bb2"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-22T06:55:47.115Z"
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

# pr-inventory-maintainer_owned-20260615T154534-003

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27560323972](https://github.com/openclaw/clownfish/actions/runs/27560323972)

Workflow conclusion: success

Worker result: planned

Canonical: unknown

## Summary

Plan-only PR inventory classification. The hydrated preflight artifact covers 20 open PRs from the shard, all non-security-sensitive, with no shared canonical. Job permissions disable merge, fix PRs, instant close, and low-signal closeout, so every item is kept as an independent PR requiring normal maintainer review or author/proof follow-up rather than dedupe closure.

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
| #88713 | keep_independent | planned | independent | Independent maintainer-review PR; no closure or merge action allowed in this plan shard. |
| #88732 | keep_independent | planned | independent | Draft feature branch with active-author/work-in-progress signal; keep independent for maintainer/author path. |
| #92014 | keep_independent | planned | independent | Useful standalone maintainer-owned fix; no duplicate/superseded evidence. |
| #88793 | keep_independent | planned | independent | Independent documentation/comment PR for maintainer review; no close condition is met. |
| #88835 | keep_independent | planned | independent | Draft but useful focused hardening PR; keep independent rather than route or close. |
| #91903 | keep_independent | planned | independent | Independent feature PR needing normal maintainer product/API review, not dedupe cleanup. |
| #92119 | keep_independent | planned | independent | Independent candidate fix with failing checks; no closure action because alternative/canonical state is not hydrated. |
| #92114 | keep_independent | planned | independent | Independent small fix requiring check repair or maintainer review; not a duplicate/superseded target. |
| #92107 | keep_independent | planned | independent | Independent focused fix; failing checks and unhydrated linked issue block fixed-by-candidate closeout. |
| #92160 | keep_independent | planned | independent | Draft PR with proof failures and explicit proof-needed labels; keep independent, no closure. |
| #92161 | keep_independent | planned | independent | Independent draft feature with proof failure; not eligible for close or merge in this shard. |
| #88841 | keep_independent | planned | independent | Independent contributor PR with useful code and sufficient proof; keep for maintainer review. |
| #92190 | keep_independent | planned | independent | Broad independent draft requiring maintainer/security-boundary design review; no route_security because preflight found no security-sensitive item. |
| #92111 | keep_independent | planned | independent | Independent high-priority availability fix for maintainer review; no fixed-by-candidate closeout without hydrated issue target. |
| #47263 | keep_independent | planned | independent | Independent broad contributor PR with failing proof/checks and bot-review history; keep for maintainer decision, no close. |
| #92288 | needs_human | blocked | needs_human | Missing hydrated live state for listed candidate. |
| #92011 | keep_independent | planned | independent | Independent contributor fix; keep for maintainer correctness review. |
| #92016 | keep_independent | planned | independent | Independent maintainer-owned candidate fix; no issue closeout without hydrated issue target and no merge allowed. |
| #92520 | needs_human | blocked | needs_human | Missing hydrated live state for listed candidate. |
| #92557 | needs_human | blocked | needs_human | Missing hydrated live state for listed candidate. |
| #88633 | keep_independent | planned | independent | Independent draft maintainer-owned CI fix; keep for maintainer/author path. |
| #92667 | needs_human | blocked | needs_human | Missing hydrated live state for listed candidate. |
| #92681 | needs_human | blocked | needs_human | Missing hydrated live state for listed candidate. |
| #89991 | keep_independent | planned | independent | Independent focused draft fix; keep for maintainer/author review. |
| #90262 | keep_independent | planned | independent | Independent draft/waiting-on-author fix; keep for author or maintainer review. |

## Needs Human

- #92288 missing hydrated live state in compacted artifact despite being listed in job candidates.
- #92520 missing hydrated live state in compacted artifact despite being listed in job candidates.
- #92557 missing hydrated live state in compacted artifact despite being listed in job candidates.
- #92667 missing hydrated live state in compacted artifact despite being listed in job candidates.
- #92681 missing hydrated live state in compacted artifact despite being listed in job candidates.
