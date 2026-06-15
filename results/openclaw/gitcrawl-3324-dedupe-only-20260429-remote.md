---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-3324-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "25135565775"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25135565775"
head_sha: "f12a87189d5d814fe7dfd1bed3ac0e65f75e8fe3"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T04:57:53.020Z"
canonical: "https://github.com/openclaw/openclaw/issues/56694"
canonical_issue: "https://github.com/openclaw/openclaw/issues/56694"
canonical_pr: null
actions_total: 4
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 1
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-3324-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25135565775](https://github.com/openclaw/clownfish/actions/runs/25135565775)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/56694

## Summary

Classified #56694 as the live canonical issue for the read-tool alias diagnostic warning. Planned one high-confidence duplicate close for #60008; kept #54882 and #55121 open as related display/alias-contract work.

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
| #60008 | close_duplicate | blocked | duplicate | target changed since worker review |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #56694 | keep_canonical | planned | canonical | #56694 is the older open issue for the exact diagnostic-warning root cause and has prior closure context pointing to it as canonical. |
| #60008 | close_duplicate | planned | duplicate | Same root cause and same user-visible failure as #56694, with no distinct remaining scope after preserving the duplicate report as linked context. |
| #54882 | keep_related | planned | related | Related display/UX alias-contract work should remain open for maintainer review rather than be folded into the diagnostic-warning duplicate closure. |
| #55121 | keep_related | planned | related | Open related implementation candidate, but not merge-ready and not actionable in this dedupe-only job. |

## Needs Human

- none
