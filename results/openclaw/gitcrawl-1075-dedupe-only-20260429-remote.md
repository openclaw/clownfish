---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-1075-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "25109635383"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25109635383"
head_sha: "7ac7590296085c93e29434b3af3e919aa257e029"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T04:57:52.709Z"
canonical: "https://github.com/openclaw/openclaw/issues/66406"
canonical_issue: "https://github.com/openclaw/openclaw/issues/66406"
canonical_pr: "https://github.com/openclaw/openclaw/pull/66478"
actions_total: 4
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-1075-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25109635383](https://github.com/openclaw/clownfish/actions/runs/25109635383)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/66406

## Summary

Representative #69979 is already closed and the current canonical path for that raw Feishu reaction emoji failure is #66406 with open PR #66478. #34528 and PR #39558 are related but track a different Feishu reaction-suffixed message_id bug, so no duplicate closeout is planned. No merge, fix, label, or close mutation is safe or needed in this dedupe-only job.

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
| #66406 | keep_canonical | planned | canonical | #66406 is the best open canonical issue for the raw Unicode emoji to Feishu reaction type failure represented by closed #69979. |
| #66478 | keep_canonical | planned | canonical | #66478 is the canonical implementation path for #66406, but this dedupe-only job should keep it open because checks and bot review findings still need normal PR repair/review. |
| #34528 | keep_related | planned | related | Same Feishu reactions area, but different error code, API boundary, and root cause; not a true duplicate of #66406. |
| #39558 | keep_related | planned | related | Useful open PR for the related #34528 subfamily; keep open and do not merge or close in this dedupe-only cluster. |

## Needs Human

- none
