---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-220-close-canary-20260615-b"
mode: "execute"
run_id: "27525514206"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27525514206"
head_sha: "1c84b7fdf552c39e7864b9c498b17f35834a2804"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T05:16:09.243Z"
canonical: "#91914"
canonical_issue: "#91914"
canonical_pr: null
actions_total: 3
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 1
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-220-close-canary-20260615-b

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27525514206](https://github.com/openclaw/clownfish/actions/runs/27525514206)

Workflow conclusion: success

Worker result: planned

Canonical: #91914

## Summary

Classified #91914 as the canonical issue. #91964 is a high-confidence duplicate of #91914 and can be closed with a credit-preserving comment. #91963 is the related candidate fix for #91914, but merge/fixed-by closeout is not planned because merge is disabled for this job and its hydrated checks include failures.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 3 |
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
| #91964 | close_duplicate | executed | duplicate | already closed with matching projectclownfish comment |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #91914 | keep_canonical | planned | canonical | Best surviving issue thread for the root cause. |
| #91963 | keep_related | planned | related | Useful candidate fix related to the canonical issue, but not mergeable or usable as fixed-by closeout in this execute-mode closure job. |
| #91964 | close_duplicate | planned | duplicate | Same root cause and same user-visible failure as #91914, with no unique remaining work in the hydrated artifact. |

## Needs Human

- none
