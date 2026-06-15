---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-135-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "25109687234"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25109687234"
head_sha: "7ac7590296085c93e29434b3af3e919aa257e029"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T04:57:52.717Z"
canonical: "https://github.com/openclaw/openclaw/pull/70029"
canonical_issue: "https://github.com/openclaw/openclaw/issues/50614"
canonical_pr: "https://github.com/openclaw/openclaw/pull/70029"
actions_total: 4
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-135-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25109687234](https://github.com/openclaw/clownfish/actions/runs/25109687234)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/70029

## Summary

Representative #50615 is obsolete: the dashboard bearer-token log leak path is already landed via #70029, and closed context refs need no mutation. The only open candidate, #56768, is related status/dashboard URL parity work, not a duplicate of the landed #70029 fix, and should stay open outside this dedupe-only closeout.

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
| #50614 | keep_closed | skipped | fixed_by_candidate | Already closed after the #70029 fix landed; no close/comment/label action is valid or needed. |
| #50615 | keep_closed | skipped | superseded | Already closed as superseded by the later merged canonical PR #70029. |
| #70029 | keep_closed | skipped | canonical | This is the canonical merged fix for the original dashboard bearer-token log leak family; no post-merge closeout is allowed by the job. |
| #56768 | keep_related | planned | related | Related but not duplicate or superseded by #70029; failing checks and unresolved bot review block any merge/fixed-by-candidate path, while dedupe-only permissions do not allow repair work. |

## Needs Human

- none
