---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-238894-dedupe-only-20260429c"
mode: "autonomous"
run_id: "25108035523"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25108035523"
head_sha: "3ec6a205eb986741424344762fbc94babbdc2937"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T04:57:52.682Z"
canonical: "https://github.com/openclaw/openclaw/issues/47555"
canonical_issue: "https://github.com/openclaw/openclaw/issues/47555"
canonical_pr: "https://github.com/openclaw/openclaw/pull/66000"
actions_total: 4
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-238894-dedupe-only-20260429c

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25108035523](https://github.com/openclaw/clownfish/actions/runs/25108035523)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/47555

## Summary

No closure is safe in this pass. #47555 remains the live canonical restart issue, #65643 is a related stale-launchd-label/status report that should stay open with active PR #66000, #66000 remains the canonical implementation candidate, and #65982 is already closed in hydrated state.

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
| #47555 | keep_canonical | planned | canonical | Keep #47555 open as the canonical issue for the restart/lifecycle surface until the active fix path lands or is rejected. |
| #65643 | keep_related | planned | related | Leave #65643 open as related work covered by active candidate #66000; closing would be premature before the PR lands or is rejected. |
| #66000 | keep_canonical | planned | canonical | Keep #66000 as the canonical implementation candidate, but do not emit merge or fix actions under this job's gates. |
| #65982 | keep_closed | skipped | related | No action: already closed in hydrated state and kept only as historical related evidence. |

## Needs Human

- none
