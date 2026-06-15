---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-14005-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "25110386105"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25110386105"
head_sha: "7d2adb9c59b8750974f50f0d9103e76d18fa9122"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T04:57:52.784Z"
canonical: "https://github.com/openclaw/openclaw/issues/61502"
canonical_issue: "https://github.com/openclaw/openclaw/issues/61502"
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

# gitcrawl-14005-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25110386105](https://github.com/openclaw/clownfish/actions/runs/25110386105)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/61502

## Summary

Classified the hydrated open items without GitHub mutations. The closed representative #56455 is historical/fixed-on-main evidence only. #61502 is the surviving open canonical for the Slack interactive click-routing subfamily; #46647 is related but distinct; #70623 is independent and should remain open for the unresolved Discord inbound-blackout evidence path. No high-confidence close/comment/label mutations are planned.

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
| #56455 | keep_closed | skipped | fixed_by_candidate | Representative is obsolete because it is already closed and implemented; no mutation is valid for a closed target. |
| #61502 | keep_canonical | planned | canonical | Best surviving open canonical for the Slack interactive button click-routing subfamily. |
| #46647 | keep_related | planned | related | Related Slack interactive-reply issue, not a duplicate of the click-routing canonical. |
| #70623 | keep_independent | planned | independent | Independent mixed Telegram/Discord report with the Telegram half fixed and the Discord inbound blackout still intentionally open. |

## Needs Human

- none
