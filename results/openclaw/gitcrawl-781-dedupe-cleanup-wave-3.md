---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-781-dedupe-cleanup-wave-3"
mode: "autonomous"
run_id: "27610223450"
workflow_run_id: "27610223450"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27610223450"
head_sha: "aa9af7b43a4e7ef8014e3f9de64f82296378ea4c"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-16T10:16:39.467Z"
canonical: "https://github.com/openclaw/openclaw/issues/76010"
canonical_issue: "https://github.com/openclaw/openclaw/issues/76010"
canonical_pr: null
actions_total: 2
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-781-dedupe-cleanup-wave-3

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27610223450](https://github.com/openclaw/clownfish/actions/runs/27610223450)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/76010

## Summary

Kept #76010 as the open canonical issue. The linked PR #76020 is related context and remains open, but it is excluded by overlap policy and is not merge/fix/close eligible in this job because proof/check gates are failing and fix/merge/raise_pr actions are blocked.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 2 |
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
| #76010 | keep_canonical | planned | canonical | #76010 is still the best live canonical item. No duplicate closeout, fixed-by-candidate closeout, merge, or fix PR action is allowed or safe from the hydrated state. |
| #76020 | keep_related | skipped | related | #76020 should stay open outside this cluster. It is linked to the canonical issue but excluded from actionable refs and not eligible for fixed-by-candidate closeout or merge. |

## Needs Human

- none
