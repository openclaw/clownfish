---
repo: "openclaw/openclaw"
cluster_id: "low-signal-pr-sweep-20260615T1534-01"
mode: "plan"
run_id: "27559995968-1-0"
workflow_run_id: "27559995968"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27559995968"
head_sha: "dce8233306a90d6d52f9fcaa41728838a8e657e7"
workflow_conclusion: "success"
result_status: "needs_human"
published_at: "2026-06-18T16:59:36.092Z"
canonical: null
canonical_issue: null
canonical_pr: null
actions_total: 4
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 3
---

# low-signal-pr-sweep-20260615T1534-01

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27559995968](https://github.com/openclaw/clownfish/actions/runs/27559995968)

Workflow conclusion: success

Worker result: needs_human

Canonical: unknown

## Summary

Reviewed the four hydrated open PRs under the low-signal cleanup policy. None are boringly clear low-signal close candidates; three are focused, green PRs that require maintainer review, and one is a focused PR with proof/check gaps rather than a cleanup close.

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
| Needs human | 3 |

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
| #93025 | needs_human | planned | needs_human | Focused green PR; job requires human review for focused_bug_fix, green_checks, and technical_correctness_judgment. |
| #93222 | needs_human | planned | needs_human | Focused green PR; job requires human review for focused_bug_fix, green_checks, and technical_correctness_judgment. |
| #92946 | needs_human | planned | needs_human | Focused green PR with delivery compatibility risk; job requires human review for focused_bug_fix, green_checks, and technical_correctness_judgment. |
| #55766 | keep_independent | planned | independent | Not eligible for low-signal closure; failing proof/check gaps block closure but do not make the PR a boringly clear cleanup close. |

## Needs Human

- #93025 requires maintainer review because it is a focused green provider API/runtime change.
- #93222 requires maintainer review because it is a focused green Discord config/runtime change.
- #92946 requires maintainer review because it is a focused green Telegram message-delivery compatibility change with explicit merge-risk labels.
