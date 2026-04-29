---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-2282-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "25132458580"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25132458580"
head_sha: "8b6ee7ffa77533bbae10cb97289fd78b142edfab"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-04-29T20:41:36.630Z"
canonical: "https://github.com/openclaw/openclaw/pull/63581"
canonical_issue: null
canonical_pr: "https://github.com/openclaw/openclaw/pull/63581"
actions_total: 4
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 1
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-2282-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25132458580](https://github.com/openclaw/clownfish/actions/runs/25132458580)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/63581

## Summary

Representative #59386 is already closed and obsolete. The current open canonical for the remaining NUL-prefix echo-cache work is #63581; #66169 is covered by already-merged #73942 and can be closed with contributor credit. Closed #59386 and #62191 stay evidence-only.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 4 |
| Fix executed | 0 |
| Fix failed | 0 |
| Fix blocked | 0 |
| Applied executions | 0 |
| Apply blocked | 1 |
| Apply skipped | 0 |
| Needs human | 0 |

## Fix Execution Actions

| Action | Status | Target | Branch | Reason |
| --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #66169 | close_fixed_by_candidate | blocked | fixed_by_candidate | candidate fix is not listed in job refs |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #59386 | keep_closed | skipped | superseded | Closed broad PR remains historical evidence only; no mutation is valid for an already-closed target. |
| #62191 | keep_closed | skipped | fixed_by_candidate | Already closed and later covered by the merged canonical fix #73942. |
| #63581 | keep_canonical | planned | canonical | Keep #63581 open as the canonical PR for the remaining NUL-prefix echo-cache normalization path; this job does not allow merge. |
| #66169 | close_fixed_by_candidate | planned | fixed_by_candidate | Already-merged #73942 owns the same attributed/replacement-prefix fix path; close #66169 with credit instead of keeping an overlapping failing branch open. |

## Needs Human

- none
