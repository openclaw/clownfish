---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-238874-dedupe-only-20260429c"
mode: "autonomous"
run_id: "25107997395"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25107997395"
head_sha: "3ec6a205eb986741424344762fbc94babbdc2937"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T04:57:52.675Z"
canonical: "https://github.com/openclaw/openclaw/pull/41265"
canonical_issue: "https://github.com/openclaw/openclaw/issues/41256"
canonical_pr: "https://github.com/openclaw/openclaw/pull/41265"
actions_total: 4
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-238874-dedupe-only-20260429c

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25107997395](https://github.com/openclaw/clownfish/actions/runs/25107997395)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/41265

## Summary

Hydrated state shows #41265 remains the canonical repair PR for the open Discord media MIME/WebP bug in #41256. #41419 and #41714 are already closed as superseded by #41265, so no new close/comment/label mutations are planned. #41265 is not merge-ready in this dedupe-only job because merge/fix actions are blocked and the hydrated checks/review evidence still requires merge preflight before any landing decision.

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
| #41256 | keep_canonical | planned | canonical | Keep the root issue open as the canonical issue while the selected fix PR remains under review. |
| #41265 | keep_canonical | planned | canonical | #41265 is the best surviving canonical PR, but only keep-open classification is safe in this dedupe-only run. |
| #41419 | keep_closed | skipped | superseded | Already closed as superseded by #41265; no further mutation is valid. |
| #41714 | keep_closed | skipped | superseded | Already closed as superseded by #41265; no further mutation is valid. |

## Needs Human

- none
