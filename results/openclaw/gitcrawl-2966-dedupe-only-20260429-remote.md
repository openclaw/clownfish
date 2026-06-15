---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-2966-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "25134566435"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25134566435"
head_sha: "b9f5ebae325b39171f8129a731bbca8bf5b88966"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T04:57:53.012Z"
canonical: "https://github.com/openclaw/openclaw/pull/47243"
canonical_issue: "https://github.com/openclaw/openclaw/issues/47120"
canonical_pr: "https://github.com/openclaw/openclaw/pull/47243"
actions_total: 5
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-2966-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25134566435](https://github.com/openclaw/clownfish/actions/runs/25134566435)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/47243

## Summary

Hydrated preflight state shows no security-sensitive items. #47120/#47243 are the best canonical path for the timestamp plus last-message preview request, but #47243 is not merge-ready. #48396 is overlapping related contributor work, not safe to close while the canonical PR still needs repair. #53088/#53445 are a related but distinct full date-time subfamily and should stay open.

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
| #47120 | keep_canonical | planned | canonical | Keep the original feature request open as the canonical issue until #47243 or an equivalent corrected implementation lands. |
| #47243 | keep_canonical | planned | canonical | Keep as canonical, but do not merge, close other useful PRs against it, or plan a branch repair in this job because review findings and failing checks remain. |
| #48396 | keep_related | planned | related | Keep related for maintainer coordination with #47120/#47243 rather than closing a useful but flawed contributor PR. |
| #53088 | keep_related | planned | related | Keep as a related full-date-time subfamily; it is not a duplicate of the timestamp-plus-preview request. |
| #53445 | keep_related | planned | related | Keep related as the canonical PR for the #53088 full-date-time subfamily; do not close or merge it from this dedupe-only cluster. |

## Needs Human

- none
