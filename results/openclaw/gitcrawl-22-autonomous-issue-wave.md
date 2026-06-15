---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-22-autonomous-issue-wave"
mode: "autonomous"
run_id: "27566222314"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27566222314"
head_sha: "9a3d85c9b40c660c9605ee702b491a28c5368505"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T18:08:51.652Z"
canonical: "https://github.com/openclaw/openclaw/pull/92610"
canonical_issue: "https://github.com/openclaw/openclaw/issues/46252"
canonical_pr: "https://github.com/openclaw/openclaw/pull/92610"
actions_total: 1
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 1
needs_human_count: 0
---

# gitcrawl-22-autonomous-issue-wave

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27566222314](https://github.com/openclaw/clownfish/actions/runs/27566222314)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/92610

## Summary

Classified #46252 as covered by the hydrated open canonical fix PR #92610, but closeout is blocked until that fix path lands or is otherwise finalized. No GitHub mutations are planned from this worker result.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 1 |
| Fix executed | 0 |
| Fix failed | 0 |
| Fix blocked | 0 |
| Applied executions | 0 |
| Apply blocked | 0 |
| Apply skipped | 1 |
| Needs human | 0 |

## Fix Execution Actions

| Action | Status | Target | Branch | Reason |
| --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #46252 | close_fixed_by_candidate | skipped | fixed_by_candidate | action status is blocked |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #46252 | close_fixed_by_candidate | blocked | fixed_by_candidate | #46252 should stay open until the hydrated canonical fix path #92610 is merged or superseded by a landed fix; this worker should not close it first. |

## Needs Human

- none
