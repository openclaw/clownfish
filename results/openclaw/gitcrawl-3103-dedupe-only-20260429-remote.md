---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-3103-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "25135537011"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25135537011"
head_sha: "f12a87189d5d814fe7dfd1bed3ac0e65f75e8fe3"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T04:57:53.016Z"
canonical: "https://github.com/openclaw/openclaw/tree/83267e99b052563f7c8092a157c5248b25e009e4"
canonical_issue: null
canonical_pr: null
actions_total: 3
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-3103-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25135537011](https://github.com/openclaw/clownfish/actions/runs/25135537011)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/tree/83267e99b052563f7c8092a157c5248b25e009e4

## Summary

Hydrated preflight shows no security-sensitive items. The closed representative #51560/#52812 should remain historical evidence only; current main already covers the generic ACP plugin-channel binding path. Open PR #43170 is useful related follow-up work, not a duplicate or high-confidence close target, because it still carries QQ Bot/defaultChannels/catch-all/acpx auto-enable scope that main has not fully adopted.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 3 |
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
| #43170 | keep_related | planned | related | #43170 is related follow-up work with useful contributor context and unresolved product/implementation scope, not a true duplicate or superseded PR suitable for cleanup closeout. |
| #51560 | keep_closed | skipped | superseded | Already closed by maintainer; kept only as historical evidence and no close/comment/label mutation is planned. |
| #52812 | keep_closed | skipped | superseded | Already closed by maintainer; kept only as historical evidence and no close/comment/label mutation is planned. |

## Needs Human

- none
