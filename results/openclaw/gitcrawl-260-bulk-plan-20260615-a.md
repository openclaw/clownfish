---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-260-bulk-plan-20260615-a"
mode: "plan"
run_id: "27520876016"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27520876016"
head_sha: "872a0ab6af9f5f189014062d7bd0a2367b003dde"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T02:47:39.931Z"
canonical: null
canonical_issue: null
canonical_pr: null
actions_total: 4
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-260-bulk-plan-20260615-a

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27520876016](https://github.com/openclaw/clownfish/actions/runs/27520876016)

Workflow conclusion: success

Worker result: planned

Canonical: unknown

## Summary

Plan-mode classification only. The hydrated preflight marks #90364 and #91462 as security-sensitive route-only items, so they are quarantined to central OpenClaw security handling. The only non-security open candidate, #91309, is a narrow related TTS reasoning-tag cleanup PR; it is not a safe merge or closeout target in this cluster because merge/fix actions are blocked, it does not cover the broader prompt/source echo surface, and its check state includes failures/unknown mergeability. #90423 is already closed and remains historical evidence only.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 4 |
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
| #90364 | route_security | planned | security_sensitive | Security-sensitive issue must be routed to central OpenClaw security handling and not closed, labeled, merged, or fixed by this worker. |
| #91309 | keep_related | planned | related | Keep as a related narrow non-security PR in the same TTS summary-leak family; do not close it against a closed PR or merge it with failing/unknown gates. |
| #91462 | route_security | planned | security_sensitive | Security-sensitive PR must be routed to central OpenClaw security handling and excluded from Clownfish close, merge, label, comment, or fix actions. |
| #90423 | keep_closed | skipped | superseded | Already closed; included only to make the historical context explicit. |

## Needs Human

- none
