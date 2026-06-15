---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-327-plan-wave-20260615-a"
mode: "plan"
run_id: "27516748647"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27516748647"
head_sha: "6bb552b68729da7580c0ee53a6e211c17d1b2e3a"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T02:43:28.401Z"
canonical: "#83458"
canonical_issue: "#55027"
canonical_pr: "#83458"
actions_total: 4
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-327-plan-wave-20260615-a

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27516748647](https://github.com/openclaw/clownfish/actions/runs/27516748647)

Workflow conclusion: success

Worker result: planned

Canonical: #83458

## Summary

Plan-only classification from the provided preflight artifact. #48834 is already closed, so no close action is valid. #83458 is the only surviving open PR candidate for the narrow Feishu ACP topic binding work, but merge/fixed-by-candidate closeout is blocked by real behavior proof and failing checks. The linked security-sensitive #50943 is quarantined only for that item.

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
| #48834 | keep_closed | skipped | superseded | The hinted representative is already closed; #83458 is the open PR candidate for the remaining narrow Feishu ACP topic binding work. |
| #83458 | keep_related | planned | canonical | Keep as live canonical candidate, but do not recommend merge or closeout while required proof/check gates are failing. |
| #50943 | route_security | planned | security_sensitive | Quarantine only the exact security-sensitive linked ref; do not close, merge, comment on, or use it as the canonical path. |
| #55027 | keep_related | planned | related | Related Feishu delivery limitation, but separate from #83458 and should remain open. |

## Needs Human

- none
