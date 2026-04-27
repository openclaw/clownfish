---
repo: "openclaw/openclaw"
cluster_id: "ghcrawl-156608-autonomous-smoke"
mode: "autonomous"
run_id: "24981378177"
run_url: "https://github.com/openclaw/clownfish/actions/runs/24981378177"
head_sha: "e0fb289dbbb528ad94fac3d2036800e925923c24"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-04-27T07:12:04.117Z"
canonical: "https://github.com/openclaw/openclaw/issues/13175"
canonical_issue: "https://github.com/openclaw/openclaw/issues/13175"
canonical_pr: null
actions_total: 16
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

Run: [https://github.com/openclaw/clownfish/actions/runs/24981378177](https://github.com/openclaw/clownfish/actions/runs/24981378177)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/13175

## Summary

Hydrated state keeps #13175 as the broad canonical Feishu interactive-card/buttons issue. The cluster is over-broad, with separate inbound parsing, outbound message-tool, fallback parsing, and exec-approval card subfamilies. No merge or close action is safe in this run because require_fix_before_close is set, no canonical fix has landed in this run, and useful PRs have failing checks, unresolved bot findings, broad churn, or need narrower repair. #42218 is quarantined as the only security-sensitive ref.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 16 |
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
| execute_fix | skipped |  |  | worker marked the fix path as non-executable; closure actions may still apply |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #13175 | keep_canonical | planned | canonical | Best broad canonical for the cluster; keep open. |
| #41607 | keep_closed | skipped | duplicate | Already closed; no closure action is valid. |
| #41609 | keep_related | planned | related | Related subfamily with unique inbound parsing scope; keep open. |
| #42218 | route_security | planned | security_sensitive | Security-sensitive linked PR must be routed to central OpenClaw security handling and not handled by ProjectClownfish mutation. |
| #45936 | keep_related | planned | related | Useful but too broad and not merge-ready; keep related instead of closing until a replacement or repaired canonical fix exists. |
| #47891 | keep_closed | skipped | superseded | Already closed; replacement PR is unhydrated evidence only. |
| #48281 | keep_closed | skipped | duplicate | Already closed; no closure action is valid. |
| #56795 | fix_needed | planned | fixed_by_candidate | Useful contributor PR should be repaired before any merge or fixed-by-candidate closeout. |
| #58298 | keep_related | planned | related | Related provider capability gap with unique outbound-tool scope; keep open. |
| #58983 | keep_closed | skipped | duplicate | Already closed; #60328 remains the related open implementation path but is not merge-ready. |
| #60328 | fix_needed | blocked | fixed_by_candidate | Real related feature path, but failing checks, unresolved bot findings, and broad_code_delta block autonomous merge or repair in this cluster. |
| #60380 | keep_related | planned | related | Related narrow bug; keep open until #60383 or another fix is repaired and validated. |
| #60383 | fix_needed | planned | fixed_by_candidate | Useful contributor PR should be repaired and revalidated before merge or closeout. |
| #63170 | keep_closed | skipped | duplicate | Already closed; no closure action is valid. |
| #69860 | keep_closed | skipped | duplicate | Already closed; no closure action is valid. |
| cluster:ghcrawl-156608-autonomous-smoke | build_fix_artifact | blocked |  | Implementation is blocked on splitting the cluster into narrow repair/fix jobs. |

## Needs Human

- none
