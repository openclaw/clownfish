---
repo: "openclaw/openclaw"
cluster_id: "pr-inventory-needs_proof-20260615T131654-048"
mode: "plan"
run_id: "27549045729"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27549045729"
head_sha: "e8e65d821b5c55a11a8a30d2023428743182215a"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T13:28:19.683Z"
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
needs_human_count: 0
---

# pr-inventory-needs_proof-20260615T131654-048

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27549045729](https://github.com/openclaw/clownfish/actions/runs/27549045729)

Workflow conclusion: success

Worker result: planned

Canonical: unknown

## Summary

Plan-mode inventory classification only. The hydrated preflight covers the first 20 open PRs with live timestamps; remaining listed PRs are non-mutating classifications because no hydrated preflight timestamp was provided. No shared canonical was selected because the job explicitly says this is not a dedupe cluster.

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
| #84763 | keep_independent | planned | independent | Distinct open PR needing proof. |
| #85664 | keep_independent | planned | independent | Distinct feature PR with supplied proof but no allowed merge action. |
| #74411 | keep_independent | planned | independent | Distinct open PR with failing proof/checks. |
| #85696 | keep_independent | planned | independent | Draft PR remains an independent work item. |
| #93184 | keep_independent | planned | independent | No hydrated timestamp is available for mutation; non-mutating classification only. |
| #88738 | keep_independent | planned | independent | Distinct docs PR needing proof. |
| #88961 | keep_independent | planned | independent | Draft PR remains an independent work item. |
| #88962 | keep_independent | planned | independent | Distinct but not merge/closure-ready PR. |
| #88971 | keep_independent | planned | independent | Distinct open PR with proof. |
| #88980 | keep_independent | planned | independent | Distinct PR needing proof. |
| #89014 | keep_independent | planned | independent | Related area, but no clear supersession. |
| #89033 | keep_independent | planned | independent | Distinct feature PR needing proof. |
| #93262 | keep_independent | planned | independent | Unhydrated refs cannot be used as canonical/supersession targets. |
| #89083 | keep_independent | planned | independent | Related Feishu fix, but not safe to close/supersede. |
| #89086 | keep_independent | planned | independent | Distinct open PR with proof. |
| #93256 | keep_independent | planned | independent | No hydrated timestamp or canonical proof is available. |
| #89099 | keep_independent | planned | independent | Distinct open PR needing proof. |
| #89107 | keep_independent | planned | independent | Distinct non-security PR needing proof. |
| #89117 | keep_independent | planned | independent | Distinct provider catalog PR needing proof. |
| #89190 | keep_independent | planned | independent | No hydrated timestamp is available; non-mutating classification only. |
| #89209 | keep_independent | planned | independent | No hydrated timestamp is available; non-mutating classification only. |
| #89211 | keep_independent | planned | independent | No hydrated timestamp is available; non-mutating classification only. |
| #89214 | keep_independent | planned | independent | No hydrated timestamp is available; non-mutating classification only. |
| #89234 | route_security | planned | security_sensitive | Env-secret material flowing into browser actions should be routed to central security handling. |
| #89236 | keep_independent | planned | independent | No hydrated timestamp is available; non-mutating classification only. |
| #89239 | keep_independent | planned | independent | No hydrated timestamp is available; non-mutating classification only. |
| #57889 | keep_independent | planned | independent | Distinct non-security PR needing proof/review resolution. |
| #59285 | keep_independent | planned | independent | Closeout disabled; keep as independent open PR. |
| #93264 | keep_independent | planned | independent | No hydrated timestamp is available; non-mutating classification only. |
| #91222 | keep_independent | planned | independent | No hydrated timestamp is available; non-mutating classification only. |
| #91229 | route_security | planned | security_sensitive | Token handoff/auth boundary work should be quarantined to central security handling. |
| #91237 | keep_independent | planned | independent | No hydrated timestamp is available; non-mutating classification only. |
| #91239 | keep_independent | planned | independent | No hydrated timestamp is available; non-mutating classification only. |
| #87589 | keep_independent | planned | independent | Distinct open PR needing proof. |
| #91249 | keep_independent | planned | independent | No hydrated timestamp is available; non-mutating classification only. |
| #91250 | keep_independent | planned | independent | No hydrated timestamp is available; non-mutating classification only. |
| #89074 | keep_independent | planned | independent | Distinct open PR needing proof. |
| #91271 | keep_independent | planned | independent | No hydrated timestamp is available; non-mutating classification only. |
| #91273 | keep_independent | planned | independent | No hydrated timestamp is available; non-mutating classification only. |
| #91276 | keep_independent | planned | independent | No hydrated timestamp is available; non-mutating classification only. |

## Needs Human

- none
