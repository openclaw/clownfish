---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-13720-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "25109760877"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25109760877"
head_sha: "7ac7590296085c93e29434b3af3e919aa257e029"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T04:57:52.753Z"
canonical: "https://github.com/openclaw/openclaw/issues/46733"
canonical_issue: "https://github.com/openclaw/openclaw/issues/46733"
canonical_pr: null
actions_total: 17
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-13720-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25109760877](https://github.com/openclaw/clownfish/actions/runs/25109760877)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/46733

## Summary

Canonical hint #11057 is already closed as a duplicate of #46733. The current open canonical is #46733 for the built-in Anthropic Claude Max/OAuth 1M context provider contract gap. #41444/#41461 and #66766/#66862 are related but distinct open subthreads with active candidate PRs and unresolved blockers, so no high-confidence close action is planned. Closed refs remain historical evidence only.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 17 |
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
| #9095 | keep_closed | skipped | related | Closed historical OAuth-auth context; evidence only. |
| #11057 | keep_closed | skipped | duplicate | Canonical hint is obsolete because the representative is already closed as duplicate of #46733. |
| #19769 | keep_closed | skipped | fixed_by_candidate | Already closed by the historical merged fix #19789. |
| #19789 | keep_closed | skipped | fixed_by_candidate | Merged historical fix, not an open target. |
| #22979 | keep_closed | skipped | related | Closed historical related report; evidence only. |
| #27846 | keep_closed | skipped | related | Closed historical related report; evidence only. |
| #41444 | keep_related | planned | related | Related subthread with distinct root cause and active candidate PR; not safe to close as duplicate. |
| #41461 | keep_related | planned | related | Useful open implementation candidate for #41444, but not canonical for this broader cluster and not merge-ready. |
| #46429 | keep_closed | skipped | superseded | Closed overlapping historical PR; evidence only. |
| #46733 | keep_canonical | planned | canonical | Best surviving canonical issue for the main user-visible failure. |
| #47440 | keep_closed | skipped | superseded | Closed superseded context ref; evidence only. |
| #49939 | keep_closed | skipped | superseded | Closed superseded context ref; evidence only. |
| #49941 | keep_closed | skipped | superseded | Closed invalid broad PR; evidence only. |
| #57292 | keep_closed | skipped | related | Closed historical related report; evidence only. |
| #59445 | keep_closed | skipped | related | Closed historical related PR; evidence only. |
| #66766 | keep_related | planned | related | Related open implementation subthread with unique repro and active candidate PR; not a duplicate closeout. |
| #66862 | keep_related | planned | related | Useful open PR for #66766, but it is incomplete and not merge-ready; keep it open for repair/review. |

## Needs Human

- none
