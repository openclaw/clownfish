---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-242-plan-wave-20260615-a"
mode: "plan"
run_id: "27519888236"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27519888236"
head_sha: "22d161e1bb6775432f7eb60a80e61685d748f60c"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T02:12:42.973Z"
canonical: "#91095"
canonical_issue: "#91095"
canonical_pr: null
actions_total: 3
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 1
---

# gitcrawl-242-plan-wave-20260615-a

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27519888236](https://github.com/openclaw/clownfish/actions/runs/27519888236)

Workflow conclusion: success

Worker result: planned

Canonical: #91095

## Summary

Plan-only classification for three open hydrated refs. #91095 remains the canonical issue. #91315 and #91446 are overlapping non-security PR candidates for the same sessions_spawn TUI exposure bug, but neither should be closed or merged from this plan because the job blocks merge/fix actions and hydrated bot reviews still request stronger proof/product review.

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
| Needs human | 1 |

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
| #91095 | keep_canonical | planned | canonical | Best surviving canonical because it is the open user-facing report tying both PR candidates to the same root behavior. |
| #91315 | keep_related | planned | related | Related candidate fix for the canonical issue, but not a closure or merge target in this plan because proof/product concerns remain and merge/fix actions are blocked. |
| #91446 | keep_related | planned | related | Related candidate fix for the canonical issue, currently the strongest hydrated PR path, but not merge-ready under the provided gates. |

## Needs Human

- Maintainer/product decision remains for the intended TUI boundary: whether local embedded TUI should expose sessions_spawn based on configured subagents.allowAgents, and whether per-agent allowAgents must be included before choosing a fix PR.
