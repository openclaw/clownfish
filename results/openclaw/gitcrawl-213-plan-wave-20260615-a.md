---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-213-plan-wave-20260615-a"
mode: "plan"
run_id: "27519876854"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27519876854"
head_sha: "22d161e1bb6775432f7eb60a80e61685d748f60c"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T02:12:42.968Z"
canonical: "#84486"
canonical_issue: "#84486"
canonical_pr: null
actions_total: 3
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-213-plan-wave-20260615-a

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27519876854](https://github.com/openclaw/clownfish/actions/runs/27519876854)

Workflow conclusion: success

Worker result: planned

Canonical: #84486

## Summary

Plan-only classification: keep #84486 as the live canonical for the Feishu streaming-card pre-tool text loss. Keep #84501 and #92199 related but not closable or mergeable in this cluster because they cover ACP/WeChat final_only behavior rather than the Feishu dispatcher root cause, and the job disallows merge/fix work.

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
| #84486 | keep_canonical | planned | canonical | #84486 remains the best live canonical for the Feishu streaming-card pre-tool text loss root cause. |
| #84501 | keep_related | planned | related | #84501 is in the same message-loss symptom family but is not the canonical Feishu dispatcher fix for #84486 and should stay related pending maintainer coordination. |
| #92199 | keep_related | planned | related | #92199 is related by symptom family, but it has a different channel/runtime scope and insufficient evidence to close as a duplicate of the Feishu canonical. |

## Needs Human

- none
