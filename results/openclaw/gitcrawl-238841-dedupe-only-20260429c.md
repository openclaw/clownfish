---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-238841-dedupe-only-20260429c"
mode: "autonomous"
run_id: "25107730028"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25107730028"
head_sha: "904a86eec936498f7b09cd1b845053509b2c784e"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T04:57:52.655Z"
canonical: "https://github.com/openclaw/openclaw/pull/43808"
canonical_issue: null
canonical_pr: "https://github.com/openclaw/openclaw/pull/43808"
actions_total: 10
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-238841-dedupe-only-20260429c

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25107730028](https://github.com/openclaw/clownfish/actions/runs/25107730028)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/43808

## Summary

Classified the live cluster without GitHub mutations. #43808 remains the canonical open PR for the cron delivery.threadId plumbing/failure-destination path. #49704 is related but not a duplicate because it covers Telegram forum-topic target parsing and delivery-error propagation. Live-closed refs were kept closed only.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 10 |
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
| #43469 | keep_independent | planned | independent | Open linked ref is outside this cluster's Telegram cron delivery.threadId root cause. |
| #43695 | keep_closed | skipped | fixed_by_candidate | Already-closed linked issue is historical evidence only. |
| #43808 | keep_canonical | planned | canonical | #43808 is the best surviving canonical path for the cluster's delivery.threadId plumbing/failure-destination work. |
| #49704 | keep_related | planned | related | Related open PR with unique remaining work and unresolved review-bot findings; do not close as duplicate. |
| #59069 | keep_closed | skipped | fixed_by_candidate | Already-merged linked PR is historical evidence only. |
| #64708 | keep_closed | skipped | superseded | Already-closed contributor PR was superseded by hydrated replacement #72326; no close action is valid. |
| #72326 | keep_closed | skipped | fixed_by_candidate | Already-merged linked replacement is historical evidence only. |
| #72657 | keep_closed | skipped | superseded | Already-closed related subfamily is historical evidence only. |
| #73025 | keep_closed | skipped | related | Already-closed schema-only linked PR is evidence for the schema portion of the canonical family. |
| #73030 | keep_closed | skipped | duplicate | Already-closed duplicate; no close action is valid. |

## Needs Human

- none
