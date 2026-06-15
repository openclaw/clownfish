---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-2428-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "25133486826"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25133486826"
head_sha: "14c5bb8a9bdcc7f06ff1432229999dc0dd88ca23"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T04:57:52.973Z"
canonical: "https://github.com/openclaw/openclaw/issues/44599"
canonical_issue: "https://github.com/openclaw/openclaw/issues/44599"
canonical_pr: "https://github.com/openclaw/openclaw/pull/44671"
actions_total: 4
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-2428-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25133486826](https://github.com/openclaw/clownfish/actions/runs/25133486826)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/44599

## Summary

Hydrated state shows #44599 remains the live canonical bug report and #44671 is the best open implementation candidate, but it is not merge-ready because review-bot findings remain unresolved and this dedupe-only job blocks merge and fix work. Closed PRs #44612 and #46614 remain historical evidence only.

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
| #44599 | keep_canonical | planned | canonical | Keep the issue open as the canonical user-facing report until #44671 or another focused Docker setup fix lands. |
| #44671 | keep_canonical | planned | canonical | Keep #44671 open as the canonical implementation candidate; do not merge or close it in this dedupe-only job because unresolved bot findings and stale layout require repair outside the allowed action set. |
| #44612 | keep_closed | skipped | superseded | Closed historical PR remains superseded evidence only. |
| #46614 | keep_closed | skipped | superseded | Closed obsolete PR remains historical evidence only. |

## Needs Human

- none
