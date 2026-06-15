---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-2451-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "25133497098"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25133497098"
head_sha: "14c5bb8a9bdcc7f06ff1432229999dc0dd88ca23"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T04:57:52.975Z"
canonical: "https://github.com/openclaw/openclaw/issues/47079"
canonical_issue: "https://github.com/openclaw/openclaw/issues/47079"
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

# gitcrawl-2451-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25133497098](https://github.com/openclaw/clownfish/actions/runs/25133497098)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/47079

## Summary

Hydrated state shows the Mistral representative #47079 is already closed as fixed on current main, #47674 is already closed, and the only still-open candidate #43249 is not a high-confidence duplicate because it is a generic Telegram 400 report without the exact Telegram error description, failing operation, version, target shape, or logs. No close, label, merge, or fix action is planned.

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
| #47079 | keep_closed | skipped | canonical | Closed representative remains the best historical canonical for the Mistral subfamily; no open canonical replacement is needed for the remaining Telegram candidate. |
| #43249 | keep_related | planned | related | Keep open as a related Telegram follow-up candidate; closure would be premature because the report lacks enough detail to match a fixed root cause. |
| #47674 | keep_closed | skipped | related | Already closed in hydrated state; retain only as historical Telegram evidence for this cluster. |

## Needs Human

- none
