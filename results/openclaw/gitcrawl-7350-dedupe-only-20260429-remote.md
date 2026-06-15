---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-7350-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "25136861752"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25136861752"
head_sha: "c207d367ab088fb89ca96c77cc23dd9c55875cc5"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T04:05:51.291Z"
canonical: "https://github.com/openclaw/openclaw/pull/50076"
canonical_issue: "https://github.com/openclaw/openclaw/issues/50011"
canonical_pr: "https://github.com/openclaw/openclaw/pull/50076"
actions_total: 13
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-7350-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25136861752](https://github.com/openclaw/clownfish/actions/runs/25136861752)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/50076

## Summary

Closed representative #50158 is obsolete. The live canonical denyCommands path is open issue #50011 with focused open PR #50076. No close, merge, or fix actions are planned: #50076 is not merge-gated in this job, #50160 is a separate Discord delivery subcluster, #56615 is a separate config-path subcluster, and #65745 is a related audit-vocabulary follow-up.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 13 |
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
| #48125 | keep_closed | skipped | related | Already closed in live preflight state; no mutation is valid. |
| #49978 | keep_closed | skipped | related | Already closed in live preflight state; no mutation is valid. |
| #49988 | keep_closed | skipped | independent | Already closed in live preflight state; no mutation is valid. |
| #50011 | keep_canonical | planned | canonical | This is the live canonical issue for the denyCommands write-time validation family and should remain open until #50076 or an equivalent fix lands. |
| #50012 | keep_closed | skipped | related | Already closed in live preflight state; no mutation is valid. |
| #50076 | keep_canonical | planned | canonical | #50076 is the best current canonical implementation path for #50011, but this dedupe-only job should not merge or repair it. |
| #50157 | keep_closed | skipped | independent | Already closed in live preflight state; no mutation is valid. |
| #50158 | keep_closed | skipped | superseded | Closed representative is obsolete and superseded by the #50011/#50076 canonical path. |
| #50159 | keep_closed | skipped | superseded | Already closed in live preflight state; no mutation is valid. |
| #50160 | keep_related | planned | related | Keep open as a related Discord follow-up subcluster; it is not a duplicate of the #50011/#50076 denyCommands path. |
| #50162 | keep_closed | skipped | related | Already closed in live preflight state; no mutation is valid. |
| #56615 | keep_related | planned | related | Keep open as a separate config-path validation subcluster. |
| #65745 | keep_related | planned | related | Keep open as a related denyCommands audit follow-up; do not close into #50011/#50076. |

## Needs Human

- none
