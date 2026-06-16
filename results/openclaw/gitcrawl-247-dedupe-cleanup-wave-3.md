---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-247-dedupe-cleanup-wave-3"
mode: "autonomous"
run_id: "27610221745"
workflow_run_id: "27610221745"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27610221745"
head_sha: "aa9af7b43a4e7ef8014e3f9de64f82296378ea4c"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-16T10:17:51.378Z"
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

# gitcrawl-247-dedupe-cleanup-wave-3

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27610221745](https://github.com/openclaw/clownfish/actions/runs/27610221745)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/90941

## Summary

Classified the open candidates from the hydrated preflight artifact. #90941 remains the canonical symlinked-launcher issue, with hydrated PR #90942 as the existing implementation candidate. #90951 is related but not a duplicate because it covers the separate npm package asset/release decision where sandbox setup scripts are not shipped.

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
| #90941 | keep_canonical | planned | canonical | #90941 is still the best live canonical issue for the symlinked-launcher root cause; keep it open while #90942 is reviewed through its existing overlap path. |
| #90951 | keep_related | planned | related | #90951 is related to the same doctor sandbox-image area, but it has unique npm-package-install scope and a separate product/release decision, so duplicate closeout is not safe. |

## Needs Human

- none
