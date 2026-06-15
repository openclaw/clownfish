---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-106-bulk-plan-20260615-a"
mode: "plan"
run_id: "27520779210"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27520779210"
head_sha: "872a0ab6af9f5f189014062d7bd0a2367b003dde"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T02:47:39.880Z"
canonical: "#84674"
canonical_issue: "#84674"
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

# gitcrawl-106-bulk-plan-20260615-a

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27520779210](https://github.com/openclaw/clownfish/actions/runs/27520779210)

Workflow conclusion: success

Worker result: planned

Canonical: #84674

## Summary

Read-only plan for five hydrated open candidates. #84674 remains the live canonical for the Telegram isolated spool stale .processing claim family. #84158 is related but distinct. #84690 is quarantined because the job explicitly marks it as the security-signal ref. #90945 and #90989 form a separate channel_ingress_events stale-claim subcluster, with #90989 the candidate fix path for #90945 but no merge or close planned in this plan-only job.

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
| #84674 | keep_canonical | planned | canonical | #84674 is the clearest live issue for the Telegram isolated ingress stale .processing claim root cause. |
| #84158 | keep_related | planned | related | Same Telegram isolated ingress recovery area, but the reproduction and likely trigger differ enough that it should stay open as related rather than be closed as a duplicate. |
| #84690 | route_security | planned | security_sensitive | The job explicitly requires quarantine for this exact security-signal ref; no close, merge, label, comment, or fix action should be planned for it. |
| #90945 | keep_related | planned | related | This is a separate channel_ingress_events stale-claim subcluster, related by symptom family but not a duplicate of the Telegram spool canonical. |
| #90989 | keep_related | planned | related | #90989 appears to be the candidate fix for the separate #90945 channel_ingress_events subcluster, but merge is blocked by job frontmatter and no closure is planned in read-only plan mode. |

## Needs Human

- none
