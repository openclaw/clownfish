---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-2367-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "25132982496"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25132982496"
head_sha: "e5e8212693f31b1f59eff0d60675a97be8c33e90"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T04:57:52.970Z"
canonical: "https://github.com/openclaw/openclaw/pull/66278"
canonical_issue: "https://github.com/openclaw/openclaw/issues/54405"
canonical_pr: "https://github.com/openclaw/openclaw/pull/66278"
actions_total: 4
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-2367-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25132982496](https://github.com/openclaw/clownfish/actions/runs/25132982496)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/66278

## Summary

Classified the hydrated open refs without mutations. Closed usage representative #54624 remains historical; the active open canonical path is #54405/#66278 for Chat Completions tool protocol, while #55210 is related but distinct streaming wire-format work and should stay open.

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
| #54624 | keep_closed | skipped | superseded | Already closed historical representative; not an open mutation target. |
| #54405 | keep_canonical | planned | canonical | Canonical issue for the Chat Completions tool-protocol subfamily; not closeable until #66278 or an equivalent successor lands. |
| #66278 | keep_canonical | planned | canonical | Canonical open PR for the tool-protocol subfamily, but not merge-ready because actionable review findings remain and merge/fix actions are blocked for this job. |
| #55210 | keep_related | planned | related | Distinct streaming compatibility PR with unresolved checks and review findings; keep open and do not close as duplicate or superseded in this cluster. |

## Needs Human

- none
