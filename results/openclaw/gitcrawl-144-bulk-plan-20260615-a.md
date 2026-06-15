---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-144-bulk-plan-20260615-a"
mode: "plan"
run_id: "27520804021"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27520804021"
head_sha: "872a0ab6af9f5f189014062d7bd0a2367b003dde"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T02:47:39.896Z"
canonical: "#84865"
canonical_issue: "#84865"
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

# gitcrawl-144-bulk-plan-20260615-a

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27520804021](https://github.com/openclaw/clownfish/actions/runs/27520804021)

Workflow conclusion: success

Worker result: planned

Canonical: #84865

## Summary

Plan-only classification for cluster gitcrawl-144-bulk-plan-20260615-a. #84865 remains the non-security canonical issue for the user-switched model fallback product decision. #84867 is explicitly security-sensitive in the hydrated artifact and should be routed to central security handling only. #92672 and #92676 are related rate-limit/user-visible-notification work, not duplicates of the #84865 model override fallback-chain issue.

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
| #84865 | keep_canonical | planned | canonical | #84865 is still open, hydrated, and best represents the non-security canonical product/root-cause decision for user-switched model fallback behavior. |
| #84867 | route_security | planned | security_sensitive | The job and hydrated artifact explicitly classify this exact PR as security-sensitive; central OpenClaw security handling should own it. |
| #92672 | keep_related | planned | related | #92672 belongs to the same provider-failure symptom family, but it tracks broader user-visible failover notification behavior rather than the specific user-switched model fallback-chain root cause in #84865. |
| #92676 | keep_related | planned | related | #92676 is a related PR for #92672's broader notification scope, not a duplicate or replacement for #84865, and its failing proof check blocks any merge/fixed-by-candidate recommendation. |

## Needs Human

- none
