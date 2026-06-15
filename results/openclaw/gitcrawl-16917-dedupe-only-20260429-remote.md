---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-16917-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "25130773775"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25130773775"
head_sha: "e60ec11ddea49c43b3b3d13770368f7be20dc559"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T04:57:52.867Z"
canonical: "https://github.com/openclaw/openclaw/pull/71619"
canonical_issue: null
canonical_pr: "https://github.com/openclaw/openclaw/pull/71619"
actions_total: 3
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-16917-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25130773775](https://github.com/openclaw/clownfish/actions/runs/25130773775)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/71619

## Summary

#71619 remains the best live canonical PR for the Linux hardened minimal service PATH work. Closed PRs #71964 and #72109 are historical related context for the existence-gated fallback-path sub-scope and should stay closed; no close/comment/label mutation is planned from this dedupe-only pass.

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
| #71619 | keep_canonical | planned | canonical | The representative is still the only open candidate and remains the canonical path for the Linux minimal PATH policy. It should not be closed or superseded by #71964/#72109 because those closed PRs cover the related existence-gated fallback behavior, while hydrated ClawSweeper evidence says current main still has the #71578 Linux minimal-PATH gap. |
| #71964 | keep_closed | skipped | superseded | Already closed before this run; retain only as historical context for the related fallback-path filtering sub-scope. |
| #72109 | keep_closed | skipped | superseded | Already closed before this run; it remains historical duplicate/superseded context for #71964, not a live candidate against #71619. |

## Needs Human

- none
