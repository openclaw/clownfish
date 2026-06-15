---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-2283-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "25132461396"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25132461396"
head_sha: "8b6ee7ffa77533bbae10cb97289fd78b142edfab"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T04:57:52.957Z"
canonical: "https://github.com/openclaw/openclaw/pull/60808"
canonical_issue: "https://github.com/openclaw/openclaw/issues/60652"
canonical_pr: "https://github.com/openclaw/openclaw/pull/60808"
actions_total: 4
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 2
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-2283-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25132461396](https://github.com/openclaw/clownfish/actions/runs/25132461396)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/60808

## Summary

Classified the Discord upload-file cluster from the hydrated preflight artifact. #60652 remains the canonical bug report, #60808 is the best current canonical PR path, and #61087/#61100 are planned superseded closeouts with contributor credit preserved. No merge or fix PR is planned because this dedupe-only job blocks merge, fix, and raise_pr actions.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 4 |
| Fix executed | 0 |
| Fix failed | 0 |
| Fix blocked | 0 |
| Applied executions | 0 |
| Apply blocked | 2 |
| Apply skipped | 0 |
| Needs human | 0 |

## Fix Execution Actions

| Action | Status | Target | Branch | Reason |
| --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #61087 | close_superseded | blocked | superseded | target changed since worker review |
| #61100 | close_superseded | blocked | superseded | target changed since worker review |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #60652 | keep_canonical | planned | canonical | The bug is still open and not fixed on main; keep the issue as the canonical report paired with #60808 as the candidate fix. |
| #60808 | keep_canonical | planned | canonical | #60808 is the clearest current canonical PR path, but this run is dedupe-only and cannot merge or repair it. |
| #61087 | close_superseded | planned | superseded | Superseded by the more complete and current canonical PR #60808; contributor credit is preserved in the close comment. |
| #61100 | close_superseded | planned | superseded | Superseded by the narrower, later, green canonical PR #60808; contributor credit is preserved in the close comment. |

## Needs Human

- none
