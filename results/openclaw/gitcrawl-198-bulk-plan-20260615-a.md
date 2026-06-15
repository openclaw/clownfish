---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-198-bulk-plan-20260615-a"
mode: "plan"
run_id: "27520835338"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27520835338"
head_sha: "872a0ab6af9f5f189014062d7bd0a2367b003dde"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T02:47:39.913Z"
canonical: "#92287"
canonical_issue: "#92267"
canonical_pr: "#92287"
actions_total: 3
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-198-bulk-plan-20260615-a

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27520835338](https://github.com/openclaw/clownfish/actions/runs/27520835338)

Workflow conclusion: success

Worker result: planned

Canonical: #92287

## Summary

Plan-mode classification complete. #92287 remains the best live canonical PR for the non-security typingMode/Telegram room-event bug, #92267 is the linked source issue that should remain open until that PR lands or maintainers choose another implementation, and #85678 is quarantined as the exact security-sensitive ref named by the job artifact.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 3 |
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
| #85678 | route_security | planned | security_sensitive | #85678 is the exact security-sensitive item identified by the job and preflight artifact, so it is out of scope for Clownfish backlog cleanup and should be routed to central OpenClaw security handling. |
| #92267 | keep_related | planned | related | #92267 is not a duplicate to close in this plan. It is the source issue for the canonical fix path and should stay open for validation until #92287 lands or maintainers choose another path. |
| #92287 | keep_canonical | planned | canonical | #92287 is the clearest non-security canonical PR for the #92267 bug family, but this plan cannot recommend merge or closeout because merge is blocked by the job and the review/proof gate is not fully resolved. |

## Needs Human

- none
