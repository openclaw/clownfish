---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-238812-dedupe-only-20260429b"
mode: "autonomous"
run_id: "25107683138"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25107683138"
head_sha: "904a86eec936498f7b09cd1b845053509b2c784e"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T04:57:52.640Z"
canonical: "https://github.com/openclaw/openclaw/issues/52618"
canonical_issue: "https://github.com/openclaw/openclaw/issues/52618"
canonical_pr: "https://github.com/openclaw/openclaw/pull/73739"
actions_total: 6
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 1
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-238812-dedupe-only-20260429b

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25107683138](https://github.com/openclaw/clownfish/actions/runs/25107683138)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/52618

## Summary

Hydrated state keeps #52618 as the canonical Feishu WebSocket retry-exhaustion issue and #73739 as the current open implementation candidate. Planned one high-confidence duplicate close for #72828; kept #42354 and #55532 open as related because they carry distinct setup/backoff/token details; treated #68766 as already closed by the merged #72411 path.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 6 |
| Fix executed | 0 |
| Fix failed | 0 |
| Fix blocked | 0 |
| Applied executions | 0 |
| Apply blocked | 1 |
| Apply skipped | 0 |
| Needs human | 0 |

## Fix Execution Actions

| Action | Status | Target | Branch | Reason |
| --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #72828 | close_duplicate | blocked | duplicate | candidate fix is not listed in job refs |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #42354 | keep_related | planned | related | Same Feishu WebSocket failure family, but it includes initial connection and Lark-domain setup details that are not fully covered by the canonical runtime retry-exhaustion issue. |
| #52618 | keep_canonical | planned | canonical | Best surviving canonical issue for the runtime Feishu WebSocket retry-exhaustion and dead-client recovery failure. |
| #55532 | keep_related | planned | related | Related Feishu reconnect/backoff work remains, but the token-cache and replacement-PR details make duplicate or fixed-by closure unsafe in this run. |
| #68766 | keep_closed | skipped | fixed_by_candidate | Already closed by the merged Feishu reconnect and heartbeat repair path. |
| #72828 | close_duplicate | planned | duplicate | High-confidence duplicate of the canonical #52618 runtime retry-exhaustion failure, with no unique reproduction detail remaining in the hydrated artifact. |
| #73739 | keep_canonical | planned | canonical | Current canonical implementation candidate for #52618; keep open because this worker is not allowed to merge or repair it and the remaining review point must be resolved before any future merge action. |

## Needs Human

- none
