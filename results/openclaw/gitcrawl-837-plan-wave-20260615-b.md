---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-837-plan-wave-20260615-b"
mode: "plan"
run_id: "27519075288"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27519075288"
head_sha: "de7a4a9553b0a32003b8f88f0a5f7a5512c403ce"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T02:20:44.674Z"
canonical: "#76077"
canonical_issue: null
canonical_pr: "#76077"
actions_total: 4
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-837-plan-wave-20260615-b

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27519075288](https://github.com/openclaw/clownfish/actions/runs/27519075288)

Workflow conclusion: success

Worker result: planned

Canonical: #76077

## Summary

Plan-only classification: the original representative #75895 is already closed, and the only live cluster item is PR #76077. #76077 remains the best live canonical path for the message-send timeout/SIGTERM work, but merge/fix actions are blocked by job mode, failing proof/checks, and ClawSweeper's request for real behavior proof.

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
| #75895 | keep_closed | skipped | fixed_by_candidate | Already closed; use as historical canonical evidence only. The open PR #76077 is the live work item for the same message-send timeout/SIGTERM root cause. |
| #76077 | keep_canonical | planned | canonical | Best live canonical, but not merge-ready. Keep the PR open for proof/check repair and maintainer review. |
| #16491 | keep_closed | skipped | related | Closed related historical fix; not a live canonical for this cluster. |
| #45689 | keep_closed | skipped | related | Closed related gateway timeout fix; useful context but a different scope from the live message-send CLI work. |

## Needs Human

- none
