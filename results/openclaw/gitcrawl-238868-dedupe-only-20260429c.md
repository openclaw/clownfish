---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-238868-dedupe-only-20260429c"
mode: "autonomous"
run_id: "25107753754"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25107753754"
head_sha: "904a86eec936498f7b09cd1b845053509b2c784e"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T04:57:52.661Z"
canonical: "https://github.com/openclaw/openclaw/pull/73976"
canonical_issue: null
canonical_pr: "https://github.com/openclaw/openclaw/pull/73976"
actions_total: 3
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-238868-dedupe-only-20260429c

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25107753754](https://github.com/openclaw/clownfish/actions/runs/25107753754)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/73976

## Summary

Canonical drift resolved without mutation: #39555 is already closed and has a hydrated replacement path in open PR #73976. #73976 remains the canonical repair PR for the per-keyword hybrid FTS bug; #48112 stays open as related but distinct hybrid fallback scoring work.

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
| #39555 | keep_closed | skipped | superseded | The representative canonical hint is obsolete because #39555 is already closed; keep it as historical superseded evidence and use hydrated open replacement #73976 as the canonical path. |
| #73976 | keep_canonical | planned | canonical | #73976 is the best live canonical path for the #39484/#39555 per-keyword hybrid FTS bug, but it is not merge-ready in this dedupe-only job. |
| #48112 | keep_related | planned | related | #48112 belongs to the same hybrid memory-search family but is not the same root cause as #73976; keep it open as related follow-up work. |

## Needs Human

- none
