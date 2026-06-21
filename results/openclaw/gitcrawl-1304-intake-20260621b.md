---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-1304-intake-20260621b"
mode: "plan"
run_id: "27893689141"
workflow_run_id: "27893689141"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27893689141"
head_sha: "e446e7d79e74bd9bb902ecb1186dfa1f3693af84"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-21T04:40:09.292Z"
canonical: "#78177"
canonical_issue: "#78177"
canonical_pr: "#94112"
actions_total: 3
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-1304-intake-20260621b

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27893689141](https://github.com/openclaw/clownfish/actions/runs/27893689141)

Workflow conclusion: success

Worker result: planned

Canonical: #78177

## Summary

Plan-mode classification only. #78177 remains the open canonical issue for the reply-scaffolding and bare `(no output)` leak. The hydrated active PR #94112 is context from an excluded existing-overlap cluster and is the current fix candidate, but this job does not allow merge, fix, or raise_pr actions. The closed earlier PR #78189 stays closed as historical superseded context.

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

## Apply Audit

| Attempt | Source | Target | Action | Status | Reason |
| --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |  |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #78177 | keep_canonical | planned | canonical | The representative issue is still open, hydrated, non-security-sensitive, and remains the best canonical thread. |
| #78189 | keep_closed | skipped | superseded | Already-closed refs must not receive closure actions; #78189 is historical superseded context only. |
| #94112 | keep_related | planned | fixed_by_candidate | #94112 is the active fix candidate for the canonical issue, but it is an excluded existing-overlap context ref and mutating merge/fix work is blocked in this plan job. |

## Needs Human

- none
