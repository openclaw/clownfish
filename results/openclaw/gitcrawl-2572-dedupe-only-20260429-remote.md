---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-2572-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "25134026246"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25134026246"
head_sha: "d0688cc86ec05c840c9f64b264bd897e9b409ff3"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T04:57:52.988Z"
canonical: "https://github.com/openclaw/openclaw/issues/63930"
canonical_issue: "https://github.com/openclaw/openclaw/issues/63930"
canonical_pr: "https://github.com/openclaw/openclaw/pull/64064"
actions_total: 5
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-2572-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25134026246](https://github.com/openclaw/clownfish/actions/runs/25134026246)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/63930

## Summary

Canonical issue #63930 replaces closed representative #68006. Linked PR #64064 remains the active implementation candidate, but this dedupe-only job cannot merge, fix, or raise a PR, and the duplicate context refs are already closed, so no mutating close/comment/label action is planned.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 5 |
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
| #63930 | keep_canonical | planned | canonical | Keep #63930 open as the canonical issue for the advisor support work. |
| #64064 | keep_canonical | planned | canonical | Keep #64064 open as the canonical implementation candidate, with merge/fixed-by-candidate closeout blocked outside this dedupe-only job. |
| #64363 | keep_closed | skipped | duplicate | Already closed duplicate/superseded context; no close action is valid for a closed item. |
| #68006 | keep_closed | skipped | duplicate | Closed representative is historical evidence only; #63930 is the current canonical issue. |
| #27 | keep_closed | skipped | independent | Closed unrelated first-hop context; no action needed. |

## Needs Human

- none
