---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-193-bulk-plan-20260615-a"
mode: "plan"
run_id: "27520827110"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27520827110"
head_sha: "872a0ab6af9f5f189014062d7bd0a2367b003dde"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T02:47:39.912Z"
canonical: "#91015"
canonical_issue: "#90980"
canonical_pr: "#91015"
actions_total: 3
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-193-bulk-plan-20260615-a

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27520827110](https://github.com/openclaw/clownfish/actions/runs/27520827110)

Workflow conclusion: success

Worker result: planned

Canonical: #91015

## Summary

Plan-only classification for cluster gitcrawl-193-bulk-plan-20260615-a. #91015 remains the best live canonical PR for the hung Docker exec/sandbox-init deadline work. #90980 should stay open as the related source issue while #91015 is blocked on proof/checks. #66836 is security-sensitive per the preflight artifact and should be routed to central security handling only, despite already being closed.

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
| #66836 | route_security | planned | security_sensitive | Security-sensitive PRs are out of ProjectClownfish mutation scope; route this exact item without blocking the ordinary #90980/#91015 bug classification. |
| #90980 | keep_related | planned | related | Same root cause as #91015, but the issue carries the source repro and should remain open until the canonical PR has real behavior proof and merge-ready validation. |
| #91015 | keep_canonical | planned | canonical | Best surviving live canonical for the non-security hung-Docker work, but it is not merge-ready in this plan run. |

## Needs Human

- none
