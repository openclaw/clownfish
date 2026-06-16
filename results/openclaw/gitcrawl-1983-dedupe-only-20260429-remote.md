---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-1983-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "27585129646"
workflow_run_id: "27585129646"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27585129646"
head_sha: "029567b88e02d3fb42050a9ee72b98ee92930545"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-16T00:20:07.512Z"
canonical: "#50621"
canonical_issue: "#50621"
canonical_pr: null
actions_total: 4
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-1983-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27585129646](https://github.com/openclaw/clownfish/actions/runs/27585129646)

Workflow conclusion: success

Worker result: planned

Canonical: #50621

## Summary

Planned non-mutating classification only. #50621 remains the canonical open timeout tracker; #44922 is already closed and must not receive a close action; #63106 is related cron main-session status work with its own open PR path, not a duplicate of #50621.

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
| #50621 | keep_canonical | planned | canonical | #50621 is still the best live canonical for the long-running main-session systemEvent cron timeout root cause. |
| #44922 | keep_closed | skipped | related | Already-closed primary candidate; closure actions are invalid, and the report is related but not the same timeout root cause. |
| #63106 | keep_related | planned | related | Related cron status/reporting issue with its own open PR path; not a duplicate of the #50621 timeout tracker. |
| #72677 | keep_related | planned | related | Keep as the active related fix lane for #63106; no merge action is allowed or preflight-complete in this cluster. |

## Needs Human

- none
