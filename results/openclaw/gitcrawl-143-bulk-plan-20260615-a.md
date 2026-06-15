---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-143-bulk-plan-20260615-a"
mode: "plan"
run_id: "27520803072"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27520803072"
head_sha: "872a0ab6af9f5f189014062d7bd0a2367b003dde"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T02:47:39.895Z"
canonical: "#63112"
canonical_issue: null
canonical_pr: "#63112"
actions_total: 3
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-143-bulk-plan-20260615-a

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27520803072](https://github.com/openclaw/clownfish/actions/runs/27520803072)

Workflow conclusion: success

Worker result: planned

Canonical: #63112

## Summary

Read-only plan: keep #63112 as the live canonical PR for #63107's main-session systemEvent shell-command warning. Keep #63107 open and related to that candidate fix. Split #72677 out as a related but separate ghost-run/heartbeat-handoff fix path tied to #63106, not a duplicate of #63112.

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
| #63112 | keep_canonical | planned | canonical | Best live canonical for the #63107 shell-command warning root cause, but only a non-mutating keep-canonical classification is allowed in this job. |
| #63107 | keep_related | planned | related | Same root-cause family as #63112, but should remain open until the candidate PR lands or maintainers explicitly choose a different disposition. |
| #72677 | keep_related | planned | related | Related cron/main-session warning work, but a different root cause and implementation scope from #63112; split it rather than closing, merging, or treating it as duplicate. |

## Needs Human

- none
