---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-442-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "25135995156"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25135995156"
head_sha: "ed3c070f16b94246f3b571063f0ecb9ffa228dd1"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T04:05:51.246Z"
canonical: "https://github.com/openclaw/openclaw/pull/39126"
canonical_issue: null
canonical_pr: "https://github.com/openclaw/openclaw/pull/39126"
actions_total: 7
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-442-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25135995156](https://github.com/openclaw/clownfish/actions/runs/25135995156)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/39126

## Summary

Classified the hydrated trust-window cluster without GitHub mutations. #39126 remains the best open representative for the trust-window family, while #46956 and #47696 are related overlapping contributor PRs that should stay open for maintainer design/consolidation review rather than be closed by dedupe automation. Closed refs remain historical evidence only, and #48532 is a broader related permission-policy design issue.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 7 |
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
| #39126 | keep_canonical | planned | canonical | Best current open representative for the cluster, but only retained as canonical classification; no merge, close, comment, label, fix, or PR creation is planned. |
| #46956 | keep_related | planned | related | Related overlapping contributor PR with useful code and unresolved review/design work; it is not a high-confidence duplicate or superseded close target. |
| #47696 | keep_related | planned | related | Related narrower contributor PR with useful code and unresolved review/design work; no safe instant close path exists. |
| #47695 | keep_closed | skipped | superseded | Already closed; no closure action is valid for this target. |
| #30038 | keep_closed | skipped | superseded | Already closed historical PR; no mutation is valid. |
| #46657 | keep_closed | skipped | superseded | Already closed historical PR; no mutation is valid. |
| #48532 | keep_related | planned | related | Related broader permission-policy design issue with unique remaining scope; keep it open. |

## Needs Human

- none
