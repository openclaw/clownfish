---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-247-dedupe-cleanup-wave-2"
mode: "autonomous"
run_id: "27609384173"
workflow_run_id: "27609384173"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27609384173"
head_sha: "063b91b51477b9a3958bd940d26858d243770fdf"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-16T09:58:18.474Z"
canonical: "https://github.com/openclaw/openclaw/issues/90941"
canonical_issue: "https://github.com/openclaw/openclaw/issues/90941"
canonical_pr: "https://github.com/openclaw/openclaw/pull/90942"
actions_total: 2
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-247-dedupe-cleanup-wave-2

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27609384173](https://github.com/openclaw/clownfish/actions/runs/27609384173)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/90941

## Summary

Classified the two actionable open issue candidates. #90941 remains the canonical issue for the symlinked launcher resolver bug, with hydrated PR #90942 as the existing implementation candidate/context. #90951 is related but not a duplicate: it covers the separate npm-package install gap where the sandbox setup shell scripts are not shipped. No close/comment/label actions are planned because the only non-canonical actionable item has unique remaining product/package-surface work.

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
| #90941 | keep_canonical | planned | canonical | #90941 is still the best live canonical issue for the symlinked-launcher sandbox setup script lookup bug. |
| #90951 | keep_related | planned | related | #90951 has unique remaining package/distribution work and should stay open as related follow-up, not be closed as a duplicate of #90941. |

## Needs Human

- none
