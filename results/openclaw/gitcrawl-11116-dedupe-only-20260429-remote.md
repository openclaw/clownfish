---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-11116-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "25109642175"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25109642175"
head_sha: "7ac7590296085c93e29434b3af3e919aa257e029"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T04:57:52.710Z"
canonical: "https://github.com/openclaw/openclaw/issues/63905"
canonical_issue: "https://github.com/openclaw/openclaw/issues/63905"
canonical_pr: "https://github.com/openclaw/openclaw/pull/64022"
actions_total: 6
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-11116-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25109642175](https://github.com/openclaw/clownfish/actions/runs/25109642175)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/63905

## Summary

Closed representative #62551 is obsolete for the live work. The current open canonical path is issue #63905 with candidate PR #64022. #41657, #50200, and #62792 are related Slack attachment work but are not safe duplicate closures in this dedupe-only job. No GitHub mutations, merge, or fix PR actions are planned.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 6 |
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
| #62551 | keep_closed | skipped | fixed_by_candidate | Closed historical representative only; use as evidence and replace the active canonical path with #63905/#64022. |
| #63905 | keep_canonical | planned | canonical | Best open issue canonical for the live dispatcher conflict subfamily; keep open and route validation through #64022. |
| #64022 | keep_canonical | planned | canonical | Canonical candidate PR for #63905, but this run can only classify and keep it open. |
| #41657 | keep_related | planned | related | Same Slack attachment area, but different product scope from the #63905 dispatcher failure; not a duplicate closure candidate. |
| #50200 | keep_related | planned | related | Related Slack attachment fix path, not a duplicate of the dispatcher canonical path and not merge-ready in this dedupe-only job. |
| #62792 | keep_related | planned | related | Useful but broad related PR; keep open for separate maintainer review rather than closing or merging as part of this cluster. |

## Needs Human

- none
