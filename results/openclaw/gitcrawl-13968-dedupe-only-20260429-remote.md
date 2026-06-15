---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-13968-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "25109786214"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25109786214"
head_sha: "7ac7590296085c93e29434b3af3e919aa257e029"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T04:57:52.760Z"
canonical: "https://github.com/openclaw/openclaw/pull/69211"
canonical_issue: null
canonical_pr: "https://github.com/openclaw/openclaw/pull/69211"
actions_total: 7
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-13968-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25109786214](https://github.com/openclaw/clownfish/actions/runs/25109786214)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/69211

## Summary

No GitHub mutations are planned: the job's only open candidate, #69211, is already closed and merged, and every other hydrated ref is closed context evidence only.

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
| #69211 | keep_closed | skipped | canonical | Already closed and merged; closed refs must not receive close/comment/label mutations. |
| #69158 | keep_closed | skipped | fixed_by_candidate | Closed linked issue already covered by landed PR #69211. |
| #69179 | keep_closed | skipped | superseded | Closed predecessor PR superseded by the landed #69211 fix. |
| #54824 | keep_closed | skipped | related | Closed historical context only; no mutation is valid. |
| #70766 | keep_closed | skipped | related | Closed related stdout-buffer context; no open canonical replacement is available in this cluster. |
| #70828 | keep_closed | skipped | related | Closed obsolete representative; no open canonical PR replaces it within the hydrated cluster. |
| #71172 | keep_closed | skipped | related | Closed related context only; no mutation is valid. |

## Needs Human

- none
