---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-600-bulk-plan-20260615-a"
mode: "plan"
run_id: "27526092810"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27526092810"
head_sha: "7c0d763bbddbff1e92b14814010fc1ad12cf245a"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T05:33:03.556Z"
canonical: "#85238"
canonical_issue: null
canonical_pr: "#85238"
actions_total: 3
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-600-bulk-plan-20260615-a

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27526092810](https://github.com/openclaw/clownfish/actions/runs/27526092810)

Workflow conclusion: success

Worker result: planned

Canonical: #85238

## Summary

Plan-only classification from the hydrated cluster artifact. #85238 is the best live canonical for the remaining actionable cluster because it directly fixes the pnpm 11 gateway PATH gap behind #80206, has focused source/test changes, and has passing checks. No close or merge action is planned: merge is blocked by job frontmatter and the PR still has review/conflict follow-up evidence; #80206 should remain open until the canonical fix lands or is replaced.

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
| #85238 | keep_canonical | planned | canonical | Best surviving live canonical for the actionable cluster, but plan mode and merge blockers prevent mutation. |
| #80206 | keep_related | planned | related | Same failure family as #85238, but the issue should remain open until the active canonical fix lands or is superseded. |
| #87556 | keep_closed | skipped | superseded | Already closed merged context ref; no mutation is valid. |

## Needs Human

- none
