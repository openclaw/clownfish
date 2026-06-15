---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-238899-dedupe-only-20260429c"
mode: "autonomous"
run_id: "25108045834"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25108045834"
head_sha: "3ec6a205eb986741424344762fbc94babbdc2937"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T04:57:52.685Z"
canonical: "https://github.com/openclaw/openclaw/pull/66225"
canonical_issue: "https://github.com/openclaw/openclaw/issues/65867"
canonical_pr: "https://github.com/openclaw/openclaw/pull/66225"
actions_total: 3
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-238899-dedupe-only-20260429c

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25108045834](https://github.com/openclaw/clownfish/actions/runs/25108045834)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/66225

## Summary

Classified the narrow Gemini final-tag leak family without GitHub mutations. #65867 remains the live canonical issue tracker and #66225 is the best live canonical fix candidate; #48593 is an older overlapping PR that should stay open for maintainer reconciliation and contributor-credit preservation. No close, merge, fix, or label action is high-confidence for this run.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 3 |
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
| #65867 | keep_canonical | planned | canonical | Keep #65867 open as the canonical issue tracker until the canonical fix candidate #66225 is reviewed, landed, or explicitly replaced. |
| #66225 | keep_canonical | planned | canonical | #66225 is the clearest current canonical fix candidate for the narrow final-tag leak, but it is not merge-ready in this worker result because maintainer review and review-bot concerns remain outside the allowed mutation set. |
| #48593 | keep_related | planned | related | Keep #48593 open as related overlapping implementation evidence; do not close or supersede it automatically until the #66225 path is reviewed and contributor credit is preserved. |

## Needs Human

- none
