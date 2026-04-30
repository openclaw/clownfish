---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-10968-dedupe-only-20260429d"
mode: "autonomous"
run_id: "25143100892"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25143100892"
head_sha: "e91d50e55815b277c0cd549de4b97aa0e0e658f4"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-04-30T01:49:11.658Z"
canonical: "https://github.com/openclaw/openclaw/issues/62099"
canonical_issue: "https://github.com/openclaw/openclaw/issues/62099"
canonical_pr: "https://github.com/openclaw/openclaw/pull/67077"
actions_total: 2
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-10968-dedupe-only-20260429d

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25143100892](https://github.com/openclaw/clownfish/actions/runs/25143100892)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/62099

## Summary

Hydrated preflight state keeps #62099 as the live canonical issue and #67077 as the focused open canonical PR for the same Windows auth-profiles EPERM cascade. No close, merge, fix, or post-merge actions are planned: the issue should remain open until #67077 or an equivalent fix lands, and this job disables merge and fix PR execution.

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
| #62099 | keep_canonical | planned | canonical | #62099 remains the canonical tracking issue for the root cause; keep it open while the focused fix PR is reviewed and not yet merged. |
| #67077 | keep_canonical | planned | canonical | #67077 is the best focused canonical PR for the issue, but this job is classification-only for merge/fix purposes and lacks merge preflight authority. |

## Needs Human

- none
