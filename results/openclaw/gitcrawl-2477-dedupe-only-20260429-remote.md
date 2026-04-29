---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-2477-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "25133514336"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25133514336"
head_sha: "70c8a777fa9eb04b416c45f07c80bfc38f2df21b"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-04-29T21:01:06.358Z"
canonical: "https://github.com/openclaw/openclaw/pull/73915"
canonical_issue: null
canonical_pr: "https://github.com/openclaw/openclaw/pull/73915"
actions_total: 7
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 1
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-2477-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25133514336](https://github.com/openclaw/clownfish/actions/runs/25133514336)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/73915

## Summary

Hydrated preflight shows the audit false-positive bug is fixed on current main by merged PR #73915. Plan to close open issue #65745 as fixed by that candidate, keep the separate write-time validation work around #50011/#50076 open as related, and skip already closed context refs.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 7 |
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
| #65745 | close_fixed_by_candidate | blocked | fixed_by_candidate | candidate fix is not listed in job refs |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #65745 | close_fixed_by_candidate | planned | fixed_by_candidate | The representative issue is now covered by the hydrated, merged candidate fix #73915; require_fix_before_close is false and instant close is allowed. |
| #50011 | keep_related | planned | related | #50011 is related denyCommands work but not a duplicate of the audit false-positive fixed by #73915. |
| #50076 | keep_related | planned | related | Useful related implementation candidate for #50011; keep open outside this audit-false-positive closeout. |
| #50320 | keep_related | planned | related | Related broad PR with unresolved review findings; not safe to close, merge, or use as the canonical fix for this dedupe-only cluster. |
| #51865 | keep_closed | skipped | fixed_by_candidate | Already closed refs must not receive close actions. |
| #50158 | keep_closed | skipped | superseded | Closed historical PR; no mutation is valid. |
| #73915 | keep_closed | skipped | canonical | Merged canonical PR is evidence only for this worker result. |

## Needs Human

- none
