---
repo: "openclaw/openclaw"
cluster_id: "ghcrawl-156608-autonomous-smoke"
mode: "autonomous"
run_id: "24982543714"
run_url: "https://github.com/openclaw/clownfish/actions/runs/24982543714"
head_sha: "64b08445e255b22babdbfd48320457951faa2507"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-04-27T07:41:44.380Z"
canonical: "https://github.com/openclaw/openclaw/issues/13175"
canonical_issue: "https://github.com/openclaw/openclaw/issues/13175"
canonical_pr: null
actions_total: 15
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# ghcrawl-156608-autonomous-smoke

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/24982543714](https://github.com/openclaw/clownfish/actions/runs/24982543714)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/13175

## Summary

Hydrated preflight shows #13175 is still the best open canonical issue for generic Feishu interactive card button support. The cluster also contains related but distinct inbound card parsing, message-tool outbound card support, post-format fallback parsing, and exec approval card subfamilies. No close, merge, or fixed-by-candidate action is safe in this pass: require_fix_before_close applies, open PR candidates have failing checks, unresolved bot findings, broad diffs, or unhydrated replacement context. Security-sensitive linked PR #42218 is quarantined only for central security handling.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 15 |
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
| #13175 | keep_canonical | planned | canonical | Best surviving canonical for the generic Feishu interactive card buttons feature. |
| #41607 | keep_closed | skipped | duplicate | Already closed refs must not receive close actions. |
| #41609 | keep_related | planned | related | Related subfamily; keep open until its own parsing fix path is clean. |
| #42218 | route_security | planned | security_sensitive | Quarantine only the security-sensitive linked ref for central OpenClaw security handling. |
| #45936 | keep_related | planned | related | Do not merge or close; broad unrelated/generated churn and unresolved bot findings block automation. |
| #47891 | keep_closed | skipped | superseded | Already closed contributor PR; unhydrated replacement context is evidence only. |
| #48281 | keep_closed | skipped | duplicate | Already closed refs must not receive close actions. |
| #56795 | keep_related | planned | related | Useful PR, but failing checks and unresolved bot review findings block merge and fixed-by-candidate closeout. |
| #58298 | keep_related | planned | related | Related outbound capability subfamily; keep open until hydrated replacement or current-main fix evidence exists. |
| #58983 | keep_closed | skipped | superseded | Already closed refs must not receive close actions. |
| #60328 | keep_related | planned | related | Do not merge in this cluster pass; failing checks, unresolved bot findings, and broad code delta block automation. |
| #60380 | keep_related | planned | related | Related parsing bug subfamily; keep open until the candidate PR is repaired or a replacement fix is hydrated. |
| #60383 | keep_related | planned | related | Useful narrow PR, but failing checks and unresolved bot finding block merge and fixed-by-candidate closeout. |
| #63170 | keep_closed | skipped | duplicate | Already closed refs must not receive close actions. |
| #69860 | keep_closed | skipped | superseded | Already closed refs must not receive close actions. |

## Needs Human

- none
