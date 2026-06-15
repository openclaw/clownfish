---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-1915-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "25130809708"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25130809708"
head_sha: "e60ec11ddea49c43b3b3d13770368f7be20dc559"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T04:57:52.890Z"
canonical: "https://github.com/openclaw/openclaw/pull/47069"
canonical_issue: "https://github.com/openclaw/openclaw/issues/46894"
canonical_pr: "https://github.com/openclaw/openclaw/pull/47069"
actions_total: 12
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-1915-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25130809708](https://github.com/openclaw/clownfish/actions/runs/25130809708)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/47069

## Summary

Autonomous classification only. The representative #51536 is no longer live, no security-sensitive refs were detected, and no merge/fix actions are allowed by the job. #47069 is the clearest live canonical PR for the WebUI /model status/list/info root cause tracked by #46894. Other open PRs are useful but either distinct subclusters or not close-ready because they have failing checks, actionable review items, or separate scope.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 12 |
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
| #46894 | keep_canonical | planned | canonical | Keep the live issue open as the canonical issue for the WebUI /model command subcluster. |
| #47069 | keep_canonical | planned | canonical | Best live canonical PR for the WebUI /model status/list/info root cause, but not mergeable in this job. |
| #46895 | keep_related | planned | related | Related overlapping implementation; keep open rather than close or supersede before #47069 lands. |
| #51270 | keep_related | planned | related | Same command family, different TUI surface and still review-gated; keep open. |
| #47083 | keep_related | planned | related | Related context/token display work with unresolved review findings; not a duplicate or close candidate. |
| #65381 | keep_related | planned | related | Separate cache-cost status subcluster with a useful open PR; keep open for its own validation path. |
| #65109 | keep_related | planned | related | Keep as a related open issue for the cache-cost subcluster. |
| #66485 | keep_related | planned | related | Related but not duplicate; it needs its own repair/validation path and should stay open. |
| #55645 | keep_independent | planned | independent | Distinct status wording/product behavior work; keep independent of this dedupe cluster. |
| #45270 | keep_closed | skipped | fixed_by_candidate | Already closed; no mutation planned. |
| #51536 | keep_closed | skipped | related | Representative is already closed; current live canonical selection moved to open issue #46894 and PR #47069 for the WebUI /model command subcluster. |
| #61024 | keep_closed | skipped | fixed_by_candidate | Already closed; no mutation planned. |

## Needs Human

- none
