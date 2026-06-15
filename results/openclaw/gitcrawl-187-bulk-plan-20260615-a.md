---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-187-bulk-plan-20260615-a"
mode: "plan"
run_id: "27520825169"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27520825169"
head_sha: "872a0ab6af9f5f189014062d7bd0a2367b003dde"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T02:47:39.910Z"
canonical: "#43935"
canonical_issue: "#43935"
canonical_pr: null
actions_total: 5
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-187-bulk-plan-20260615-a

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27520825169](https://github.com/openclaw/clownfish/actions/runs/27520825169)

Workflow conclusion: success

Worker result: planned

Canonical: #43935

## Summary

Plan-only classification: keep #43935 as the live canonical for account-scoped channel config reload disruption. Keep the other hydrated open issues as related but distinct gateway/channel reload reliability work; no closure, merge, label, or fix PR action is planned because the job blocks fix/merge and the non-canonical items have distinct root causes or unresolved reproduction scope.

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
| #43935 | keep_canonical | planned | canonical | #43935 is the best surviving canonical for the account-scoped channel reload blast-radius root cause. |
| #68232 | keep_related | planned | related | Related gateway/channel hot-reload work, but not a duplicate of #43935 because it focuses on Telegram runtime state retention for broader Telegram config edits rather than account-scoped restart granularity. |
| #79487 | keep_related | planned | related | Related channel reload reliability issue, but it has a distinct lifecycle race and crash-loop root cause, so it should not be closed as a duplicate of #43935. |
| #87285 | keep_related | planned | related | Related to aggressive gateway config reload behavior but broader and multi-root, with active follow-up and non-duplicate subscopes. |
| #90865 | keep_related | planned | related | Related gateway channel reload family, but distinct plugin behavior and reproduction uncertainty make it non-duplicate. |

## Needs Human

- none
