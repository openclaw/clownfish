---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-238812-dedupe-only-20260429b"
mode: "autonomous"
run_id: "25102864554"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25102864554"
head_sha: "c3cc5ac35d228f419caa5b1772e20efdca99c0e6"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T03:45:26.115Z"
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

Run: [https://github.com/openclaw/clownfish/actions/runs/25102864554](https://github.com/openclaw/clownfish/actions/runs/25102864554)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/52618

## Summary

Classified the live Feishu WebSocket recovery cluster with #52618 as the open canonical issue and #73739 as the current implementation candidate. Planned one high-confidence duplicate close for #72828; kept #42354 and #55532 open as related but not duplicate; skipped already-closed #68766.

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
| #52618 | keep_canonical | planned | canonical | Best surviving canonical issue for the post-start Feishu WebSocket retry-exhaustion recovery root cause. |
| #73739 | keep_canonical | planned | canonical | Current canonical implementation candidate, but merge/fix are out of scope and the hydrated review-bot concern still requires the normal PR review path. |
| #42354 | keep_related | planned | related | Related Feishu WebSocket symptom family, but the initial connection/domain-routing details are unique enough that duplicate closure would be unsafe. |
| #55532 | keep_related | planned | related | Related Feishu reconnect/backoff work, but the token-cache and backoff-specific scope leaves unique remaining work outside a clean duplicate of #52618. |
| #72828 | close_duplicate | planned | duplicate | Same root cause and user-visible failure as #52618, with no unique remaining scope beyond the canonical issue and implementation candidate. |
| #68766 | keep_closed | skipped | fixed_by_candidate | Already closed before this run; no mutation should be planned. |

## Needs Human

- none
