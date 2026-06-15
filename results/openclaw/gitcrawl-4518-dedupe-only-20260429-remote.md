---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-4518-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "25135999166"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25135999166"
head_sha: "ed3c070f16b94246f3b571063f0ecb9ffa228dd1"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T04:05:51.248Z"
canonical: "#40247"
canonical_issue: null
canonical_pr: "https://github.com/openclaw/openclaw/pull/40247"
actions_total: 4
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-4518-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25135999166](https://github.com/openclaw/clownfish/actions/runs/25135999166)

Workflow conclusion: success

Worker result: planned

Canonical: #40247

## Summary

Classified #40247 as the canonical open PR for the tailnet/custom-bind loopback-listener bug. #45276, #69701, and linked #50751 are related but not duplicates, so no close actions are planned.

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
| #40247 | keep_canonical | planned | canonical | Best live canonical for this cluster's tailnet/custom-bind loopback listener root cause, but not merge-ready or merge-allowed in this job. |
| #45276 | keep_related | planned | related | Same gateway address family, different root cause and user-visible scope; keep open for maintainer review rather than closing as duplicate. |
| #69701 | keep_related | planned | related | Related gateway listen-host work, but not a duplicate of the tailnet/custom-bind loopback issue; useful contributor PR should stay open. |
| #50751 | keep_related | planned | related | Related follow-up PR with overlapping client-side approach and unique auth-diagnostic scope; keep open for maintainer model choice and review. |

## Needs Human

- none
