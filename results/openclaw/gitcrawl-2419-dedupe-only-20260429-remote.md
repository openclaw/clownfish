---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-2419-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "25133000451"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25133000451"
head_sha: "e5e8212693f31b1f59eff0d60675a97be8c33e90"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T04:57:52.973Z"
canonical: "https://github.com/openclaw/openclaw/pull/44023"
canonical_issue: null
canonical_pr: "https://github.com/openclaw/openclaw/pull/44023"
actions_total: 5
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-2419-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25133000451](https://github.com/openclaw/clownfish/actions/runs/25133000451)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/44023

## Summary

Kept #44023 as the canonical open PR for the simple maxPingPongTurns cap increase family. No close actions are planned: the other open PRs contain useful contributor work or linked issue scope that is not safely disposable in a dedupe-only run.

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
| #43972 | keep_closed | skipped | superseded | Already closed before this run; no mutation is valid for this target. |
| #44023 | keep_canonical | planned | canonical | Best surviving representative for the simple cap-increase PR family, but merge/fix actions are blocked by the job and review findings remain unresolved. |
| #45871 | keep_related | planned | related | Related overlapping contributor PR; leave open rather than close useful code without a concrete credited replacement or maintainer-chosen merge path. |
| #52382 | keep_related | planned | related | Same area, but unique incident details and product-scope choices remain; not a duplicate close candidate. |
| #52400 | keep_related | planned | related | Related implementation PR with useful contributor work and unresolved review/check blockers; keep open for maintainer/fix-path review instead of closing as duplicate or superseded. |

## Needs Human

- none
