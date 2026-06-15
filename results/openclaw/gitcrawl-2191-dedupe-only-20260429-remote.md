---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-2191-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "25132413184"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25132413184"
head_sha: "2a25e72cd9df0710ef893de8f25823a6a78be854"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T04:57:52.943Z"
canonical: "https://github.com/openclaw/openclaw/pull/39245"
canonical_issue: null
canonical_pr: "https://github.com/openclaw/openclaw/pull/39245"
actions_total: 2
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-2191-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25132413184](https://github.com/openclaw/clownfish/actions/runs/25132413184)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/39245

## Summary

Hydrated preflight shows #39245 remains the best open canonical PR for the functions-space/functions-dot tool-call ID and prefixed tool-name normalization bug. #64301 is related agent/tool-name normalization work, but it covers a distinct embedded-runner malformed-name recovery path and should remain open for its own maintainer review. No close, merge, fix, or security-route action is planned.

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
| #39245 | keep_canonical | planned | canonical | Keep #39245 open as the canonical PR; merge/fix are disallowed in this dedupe-only autonomous job and no duplicate closeout target is safe to close against an unmerged PR. |
| #64301 | keep_related | planned | related | Keep #64301 open as related follow-up work; closing it as a duplicate of #39245 would lose a distinct embedded-runner dispatch-normalization problem and active review context. |

## Needs Human

- none
