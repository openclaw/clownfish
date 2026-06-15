---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-3216-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "25135554314"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25135554314"
head_sha: "f12a87189d5d814fe7dfd1bed3ac0e65f75e8fe3"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T04:57:53.018Z"
canonical: "https://github.com/openclaw/openclaw/issues/55512"
canonical_issue: "https://github.com/openclaw/openclaw/issues/55512"
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

# gitcrawl-3216-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25135554314](https://github.com/openclaw/clownfish/actions/runs/25135554314)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/55512

## Summary

#55512 remains the canonical open issue for CJK markdown table misalignment. #55596 is a useful but draft, unmerged contributor PR tied to #55512 and should stay open. #59562 overlaps with #55512 on CJK table alignment but also reports a distinct Telegram paragraph-break problem, so it should stay open as related. #6652 is closed linked context only. No close, label, merge, or fix action is planned.

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
| #6652 | keep_closed | skipped |  | Already closed linked context, not an open cluster target. |
| #55512 | keep_canonical | planned | canonical | Best live canonical issue for the CJK markdown table alignment problem. |
| #55596 | keep_related | planned | related | Useful candidate PR for the canonical issue, but not merge-ready and not safe to close or supersede in this dedupe-only job. |
| #59562 | keep_related | planned | related | Related to #55512, but not a true duplicate because it includes a separate paragraph-break formatting issue. |

## Needs Human

- none
