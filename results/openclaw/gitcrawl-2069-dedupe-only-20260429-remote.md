---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-2069-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "25131888953"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25131888953"
head_sha: "d8a032e46d7a5449946bb8a8f542719694995636"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T04:57:52.930Z"
canonical: "https://github.com/openclaw/openclaw/issues/65326"
canonical_issue: "https://github.com/openclaw/openclaw/issues/65326"
canonical_pr: null
actions_total: 3
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-2069-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25131888953](https://github.com/openclaw/clownfish/actions/runs/25131888953)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/65326

## Summary

Autonomous dedupe classification only. #65326 remains the open canonical Google Chat Add-ons compatibility issue. #51694 is related but has distinct config/schema/docs scope, and #47264 is an independent LINE multi-account route-registration bug. No close, merge, fix, or PR actions are planned.

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
| #65326 | keep_canonical | planned | canonical | The representative is still open and remains the best live canonical for the Google Chat Add-ons compatibility family. |
| #51694 | keep_related | planned | related | Related to the #65326 Google Chat Add-ons family, but not a true duplicate because it carries distinct config-contract and docs/schema scope. |
| #47264 | keep_independent | planned | independent | This is a separate LINE multi-account bug and should not be closed or routed under the Google Chat canonical. |

## Needs Human

- none
