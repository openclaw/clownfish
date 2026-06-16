---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-906-dedupe-cleanup-wave-3"
mode: "autonomous"
run_id: "27610226978"
workflow_run_id: "27610226978"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27610226978"
head_sha: "aa9af7b43a4e7ef8014e3f9de64f82296378ea4c"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-16T10:16:39.520Z"
canonical: "https://github.com/openclaw/openclaw/issues/80428"
canonical_issue: "https://github.com/openclaw/openclaw/issues/80428"
canonical_pr: null
actions_total: 2
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-906-dedupe-cleanup-wave-3

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27610226978](https://github.com/openclaw/clownfish/actions/runs/27610226978)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/80428

## Summary

Classified #80428 as the live canonical issue. Current target main 4fee34876462a577b1ed825ecbf7ce807f298a17 still contains the reported Discord route-state aliases, and hydrated linked PR #80473 is the narrow fix candidate, but its latest hydrated state includes unknown mergeability/conflict evidence and a failing check-lint job, so no fixed-by-candidate closeout is safe. No GitHub mutations, merge, fix, or PR creation are planned because the job forbids merge/fix/raise_pr and there is no duplicate to close.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 2 |
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
| #80428 | keep_canonical | planned | canonical | #80428 remains the canonical live issue because the reported lint/type state is still present on current main and the only hydrated fixing PR is not landed or clean enough to support closure. |
| #80473 | keep_related | planned | related | #80473 is related as the active narrow fix candidate for the canonical issue, but it is an excluded overlap context ref and current hydrated check/merge evidence blocks using it for closure or merge planning in this run. |

## Needs Human

- none
