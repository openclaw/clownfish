---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-112-dedupe-cleanup-wave"
mode: "autonomous"
run_id: "27608149875"
workflow_run_id: "27608149875"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27608149875"
head_sha: "d39befcd6309943509cd00e8e3cd0ee7c314e6be"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-16T09:36:29.398Z"
canonical: "https://github.com/openclaw/openclaw/pull/91533"
canonical_issue: "https://github.com/openclaw/openclaw/issues/90890"
canonical_pr: "https://github.com/openclaw/openclaw/pull/91533"
actions_total: 6
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-112-dedupe-cleanup-wave

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27608149875](https://github.com/openclaw/clownfish/actions/runs/27608149875)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/91533

## Summary

Classified the live hydrated cluster without planning GitHub mutations. #90890 remains the canonical issue, #91533 is the best open canonical PR path, and the older duplicate PRs are already closed as superseded. No close, merge, fix, or post-merge closeout is eligible in this job because #91533 is open with failing checks and merge/fix/post-merge actions are disabled.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 6 |
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
| #71639 | keep_closed | skipped | related | Closed linked context must not receive a close action; keep as historical related evidence. |
| #90890 | keep_canonical | planned | canonical | Keep the issue open as the canonical problem statement until the canonical PR path lands or maintainers choose a different fix path. |
| #90931 | keep_closed | skipped | superseded | Already closed as superseded by #91533; no further mutation is valid. |
| #90932 | keep_closed | skipped | superseded | Already closed as superseded by #91533; no further mutation is valid. |
| #91447 | keep_closed | skipped | superseded | Already closed as superseded by #91533; no further mutation is valid. |
| #91533 | keep_canonical | planned | canonical | #91533 is the canonical PR path, but it is not merge-ready in this run because relevant checks fail and the job disallows merge/fix actions. |

## Needs Human

- none
