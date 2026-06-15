---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-238888-dedupe-only-20260429c"
mode: "autonomous"
run_id: "25108023056"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25108023056"
head_sha: "3ec6a205eb986741424344762fbc94babbdc2937"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T04:57:52.680Z"
canonical: "https://github.com/openclaw/openclaw/pull/73949"
canonical_issue: null
canonical_pr: "https://github.com/openclaw/openclaw/pull/73949"
actions_total: 5
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-238888-dedupe-only-20260429c

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25108023056](https://github.com/openclaw/clownfish/actions/runs/25108023056)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/73949

## Summary

Hydrated state shows all three seed PRs are already closed. #58216 is obsolete as the representative; open replacement #73949 is the current canonical path for the reconnect-exhausted stale-socket crash. #45712 belongs to a related reconnect-grace family now owned by open #73989. #58988 is already closed and superseded by current main shutdown/lifecycle work. No close, merge, or fix action is planned.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 5 |
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
| #58216 | keep_closed | skipped | superseded | Seed PR is closed and has an open hydrated replacement; preserve it as historical credit/source only. |
| #45712 | keep_closed | skipped | superseded | Closed source PR was replaced by a separate open reconnect-grace path; it is not a duplicate close target in this representative cluster. |
| #58988 | keep_closed | skipped | superseded | Already closed and superseded by current main lifecycle/shutdown work; historical evidence only. |
| #73949 | keep_canonical | planned | canonical | Best live canonical path for the representative #58216 family; no mutation planned. |
| #73989 | keep_related | planned | related | Separate but related health-monitor reconnect-grace family; keep open for its own calibrated/automerge workflow. |

## Needs Human

- none
