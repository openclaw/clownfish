---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-1773-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "25130781175"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25130781175"
head_sha: "e60ec11ddea49c43b3b3d13770368f7be20dc559"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T04:57:52.869Z"
canonical: "https://github.com/openclaw/openclaw/pull/38502"
canonical_issue: "https://github.com/openclaw/openclaw/issues/38501"
canonical_pr: "https://github.com/openclaw/openclaw/pull/38502"
actions_total: 3
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-1773-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25130781175](https://github.com/openclaw/clownfish/actions/runs/25130781175)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/38502

## Summary

Hydrated preflight shows #38502 remains the narrow canonical PR for #38501's Ctrl+C active-run status-hint issue. #44223 is related but changes the TUI Ctrl+C contract to abort active runs, so it should stay open for maintainer review rather than be dedupe-closed. Closed context PR #38540 has a sensitive committed-log signal and is routed only to central security handling. No close, merge, or fix actions are planned.

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
| #38502 | keep_canonical | planned | canonical | #38502 is still the best live canonical path for the cluster's narrow status-text clarification, but this autonomous dedupe-only job should only keep it open. |
| #44223 | keep_related | planned | related | Keep #44223 open as a related alternative pending maintainer product decision; do not close it against the narrower #38502 canonical path. |
| #38540 | route_security | planned | security_sensitive | Route only the closed context PR #38540 to central OpenClaw security handling because its hydrated review comments describe sensitive committed-log data. |

## Needs Human

- none
