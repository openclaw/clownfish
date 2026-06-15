---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-327-plan-wave-20260615-a"
mode: "plan"
run_id: "27525975085"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27525975085"
head_sha: "4574037aa1f27e59d5ea43eca0073b4c4dfc504c"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T05:30:14.796Z"
canonical: "#83458"
canonical_issue: null
canonical_pr: "#83458"
actions_total: 8
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

Run: [https://github.com/openclaw/clownfish/actions/runs/27525975085](https://github.com/openclaw/clownfish/actions/runs/27525975085)

Workflow conclusion: success

Worker result: planned

Canonical: #83458

## Summary

Read-only plan: original representative #48834 is already closed, so no close action is valid. #83458 is the best surviving open canonical for the narrow Feishu ACP topic conversation binding work, but merge is blocked by failed proof/check gates and merge is disallowed in this job. #55027 remains a related open issue for Feishu block streaming behavior, and #50943 is quarantined as security-sensitive.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 8 |
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
| #30663 | keep_closed | skipped | fixed_by_candidate | Already merged and closed; retain only as context. |
| #40936 | keep_closed | skipped | superseded | Already closed and superseded by later landed/narrow follow-up work. |
| #46819 | keep_closed | skipped | fixed_by_candidate | Merged historical canonical for broad Feishu ACP/session support. |
| #48834 | keep_closed | skipped | superseded | The representative is no longer open; #83458 is the best live open PR for the remaining narrow ACP topic-binding slice, not a reason to reopen #48834. |
| #50943 | route_security | planned | security_sensitive | Security-sensitive ref is out of ProjectClownfish backlog cleanup scope. |
| #55027 | keep_related | planned | related | Same Feishu ACP/message delivery area, but distinct root cause and user-visible behavior. |
| #58400 | keep_closed | skipped | related | Merged related infrastructure; no action required. |
| #83458 | keep_canonical | planned | canonical | Best live canonical for the narrow ACP topic conversation binding slice, but not merge-ready under this plan job. |

## Needs Human

- none
