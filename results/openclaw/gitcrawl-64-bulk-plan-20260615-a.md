---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-64-bulk-plan-20260615-a"
mode: "plan"
run_id: "27523127403"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27523127403"
head_sha: "2eb7becb97c14f307a0a4930f6deab62b7223dde"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T04:07:30.410Z"
canonical: "#77378"
canonical_issue: "#77378"
canonical_pr: "#77442"
actions_total: 5
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-64-bulk-plan-20260615-a

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27523127403](https://github.com/openclaw/clownfish/actions/runs/27523127403)

Workflow conclusion: success

Worker result: planned

Canonical: #77378

## Summary

Plan-only classification. The live ordinary canonical among actionable refs is #77378, with #77442 as the related non-merge-ready fix PR. #45082 stays related rather than closable because it mixes already-fixed message-tool thread fallback with the still-open non-direct delivery-context gap. Security-signaled refs are quarantined only at the item level.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 5 |
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
| #45082 | keep_related | planned | related | Related mixed-scope issue; not safe to close because it carries unique cron/wake reproduction detail and the non-direct delivery-context path is still open. |
| #73060 | route_security | planned | security_sensitive | Item-level security-signal quarantine only; continue ordinary classification for unrelated non-security items. |
| #77378 | keep_canonical | planned | canonical | Best live canonical issue for the remaining non-direct Mattermost delivery-context root cause. |
| #77442 | keep_related | planned | related | Plausible fix PR for #77378, but merge or fixed-by closeout is blocked by dirty merge state and missing merge preflight. |
| #69010 | route_security | planned | security_sensitive | Security-sensitive linked context ref routed to central OpenClaw security handling only. |

## Needs Human

- none
