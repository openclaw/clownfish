---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-3086-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "25134578862"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25134578862"
head_sha: "b9f5ebae325b39171f8129a731bbca8bf5b88966"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T04:57:53.015Z"
canonical: "https://github.com/openclaw/openclaw/pull/50955"
canonical_issue: null
canonical_pr: "https://github.com/openclaw/openclaw/pull/50955"
actions_total: 4
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-3086-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25134578862](https://github.com/openclaw/clownfish/actions/runs/25134578862)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/50955

## Summary

Hydrated preflight keeps #50955 as the live canonical PR for the ACP thread-bound binding and delivery-routing family. No close, merge, or fix action is safe or allowed in this dedupe-only job: #46715 and #60420 are already closed historical context, #50955 remains useful but not merge-ready, and linked #64322 is complementary rather than a duplicate.

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
| #50955 | keep_canonical | planned | canonical | #50955 is the best live canonical path for this cluster, but it is not merge-ready and this job is dedupe-only. |
| #46715 | keep_closed | skipped | related | Closed context ref; keep as historical evidence only. |
| #60420 | keep_closed | skipped | related | Closed context ref; no mutation should be planned. |
| #64322 | keep_related | planned | related | Related open PR with a distinct narrower Discord configured-binding scope; keep open and do not close as part of this cluster. |

## Needs Human

- none
