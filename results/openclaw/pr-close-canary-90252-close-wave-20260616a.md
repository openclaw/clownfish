---
repo: "openclaw/openclaw"
cluster_id: "pr-close-canary-90252-close-wave-20260616a"
mode: "execute"
run_id: "27582527762"
workflow_run_id: "27582527762"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27582527762"
head_sha: "49c3b7a7e488d8827bdcd870f37e5eaf2b5b8c63"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T23:20:40.358Z"
canonical: "#90267"
canonical_issue: null
canonical_pr: "#90267"
actions_total: 2
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 1
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# pr-close-canary-90252-close-wave-20260616a

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27582527762](https://github.com/openclaw/clownfish/actions/runs/27582527762)

Workflow conclusion: success

Worker result: planned

Canonical: #90267

## Summary

Planned one close-only cleanup action: #90252 remains open and is superseded by the open canonical PR #90267. No merge, fix, or PR-raising action is recommended.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 2 |
| Fix executed | 0 |
| Fix failed | 0 |
| Fix blocked | 0 |
| Applied executions | 1 |
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
| #90252 | close_superseded | executed | superseded | already closed with matching projectclownfish comment |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #90267 | keep_canonical | planned | canonical | Best surviving canonical PR for this close-only canary. |
| #90252 | close_superseded | planned | superseded | #90252 is an overlapping contributor PR superseded by the open canonical PR #90267; closing #90252 consolidates review without losing contributor context. |

## Needs Human

- none
