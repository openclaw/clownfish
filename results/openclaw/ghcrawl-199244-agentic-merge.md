---
repo: "openclaw/openclaw"
cluster_id: "ghcrawl-199244-agentic-merge"
mode: "autonomous"
run_id: "24968369359"
run_url: "https://github.com/openclaw/projectclownfish/actions/runs/24968369359"
head_sha: "b954276a96b0bf4d3aab29f455f9666a10d9dd27"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-04-26T22:27:20.618Z"
canonical: "https://github.com/openclaw/openclaw/pull/38776"
canonical_issue: null
canonical_pr: "https://github.com/openclaw/openclaw/pull/38776"
actions_total: 14
apply_executed: 1
apply_blocked: 0
apply_skipped: 3
needs_human_count: 0
---

# ghcrawl-199244-agentic-merge

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/projectclownfish/actions/runs/24968369359](https://github.com/openclaw/projectclownfish/actions/runs/24968369359)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/38776

## Summary

Hydrated artifact shows no security-sensitive refs. #38776 is the best repairable canonical path for the narrow Feishu interactive-card parser gap, but it is not merge-ready because review-bot findings remain actionable and the fix-artifact check list includes failing check/check-additional. No merge or close is planned until the canonical repair path is updated and validated.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 14 |
| Applied executions | 1 |
| Apply blocked | 0 |
| Apply skipped | 3 |
| Needs human | 0 |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #42218 | close_superseded | skipped | superseded | action status is blocked |
| #45936 | close_superseded | skipped | superseded | action status is blocked |
| #60383 | close_superseded | skipped | superseded | action status is blocked |
| #72397 | merge_canonical | executed | fix_pr | merged by ProjectClownfish post-flight |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #38776 | keep_canonical | planned | canonical | Best repairable canonical contributor PR, but not merge-ready. |
| #42218 | close_superseded | blocked | superseded | Blocked on canonical fix path #38776 being repaired and landed. |
| #45936 | close_superseded | blocked | superseded | Blocked on canonical fix path #38776 being repaired and landed. |
| #56795 | keep_related | planned | related | Related but not the same narrow root cause as #38776. |
| #60380 | keep_related | planned | related | Related fallback-format bug; keep open until the canonical repair proves coverage. |
| #60383 | close_superseded | blocked | superseded | Useful related PR, but failing checks and bot P1 block merge or fixed-by-candidate closeout. |
| #41609 | keep_related | planned | related | Related open tracking issue for broader inbound-card parsing. |
| #32023 | keep_closed | skipped | superseded | Already closed. |
| #32712 | keep_closed | skipped | superseded | Already closed. |
| #39339 | keep_closed | skipped | superseded | Already closed. |
| #48281 | keep_closed | skipped | superseded | Already closed. |
| #55466 | keep_closed | skipped | related | Already closed. |
| cluster:ghcrawl-199244-agentic-merge | fix_needed | planned |  | Build a narrow repair artifact before any merge or closeout. |
| cluster:ghcrawl-199244-agentic-merge | build_fix_artifact | planned |  | Canonical path requires branch repair and validation. |

## Needs Human

- none
