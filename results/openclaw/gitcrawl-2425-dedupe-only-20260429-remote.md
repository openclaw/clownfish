---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-2425-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "25133002312"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25133002312"
head_sha: "e5e8212693f31b1f59eff0d60675a97be8c33e90"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T04:57:52.973Z"
canonical: "https://github.com/openclaw/openclaw/pull/44150"
canonical_issue: null
canonical_pr: "https://github.com/openclaw/openclaw/pull/44150"
actions_total: 5
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-2425-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25133002312](https://github.com/openclaw/clownfish/actions/runs/25133002312)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/44150

## Summary

Hydrated state shows no security-sensitive refs. #44150 remains the open canonical PR for the before_compaction messages payload change, but it is not merge-ready and merge/fix work is blocked by the job. #61447 is related compaction-hook payload work for after_compaction summary text, not a duplicate of #44150, so it should stay open. Closed context PRs are evidence only.

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
| #44150 | keep_canonical | planned | canonical | Best live canonical for the before_compaction messages subfamily, but only non-mutating classification is allowed in this dedupe-only job. |
| #61447 | keep_related | planned | related | Same compaction-hook payload area, but not the same root cause or user-visible change as #44150; no high-confidence duplicate closeout is available. |
| #44152 | keep_closed | skipped | related | Closed context ref only; no mutation is valid. |
| #44154 | keep_closed | skipped | related | Closed context ref only; no mutation is valid. |
| #44163 | keep_closed | skipped | related | Closed context ref only; useful as evidence for the related summary subfamily but not a closure or fixed-by candidate. |

## Needs Human

- none
