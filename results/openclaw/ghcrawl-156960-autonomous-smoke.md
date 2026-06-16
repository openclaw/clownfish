---
repo: "openclaw/openclaw"
cluster_id: "ghcrawl-156960-autonomous-smoke"
mode: "autonomous"
run_id: "27598132165"
workflow_run_id: "27598132165"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27598132165"
head_sha: "3456041b23c90140b1b609eea90480f39847d880"
workflow_conclusion: "success"
result_status: "needs_human"
published_at: "2026-06-16T06:19:29.366Z"
canonical: "https://github.com/openclaw/openclaw/issues/34528"
canonical_issue: "https://github.com/openclaw/openclaw/issues/34528"
canonical_pr: "https://github.com/openclaw/openclaw/pull/77653"
actions_total: 5
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 1
---

# ghcrawl-156960-autonomous-smoke

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27598132165](https://github.com/openclaw/clownfish/actions/runs/27598132165)

Workflow conclusion: success

Worker result: needs_human

Canonical: https://github.com/openclaw/openclaw/issues/34528

## Summary

Current main at 6aa83374 still has the Feishu reaction message-id bug. #34528 remains the canonical bug report and #77653 is the only live implementation path, but #77653 is not merge-ready because the hydrated check state has a failing Real behavior proof gate and ClawSweeper explicitly requires redacted live Feishu proof or maintainer acceptance. Closed PRs #34565 and #39558 are historical evidence only.

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
| Needs human | 1 |

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
| #34528 | keep_canonical | planned | canonical | The issue is still the canonical open report for this bug; do not close it before a fix lands. |
| #77653 | keep_canonical | planned | canonical | #77653 is the surviving implementation path, but merge is blocked by the proof gate and dirty merge state. |
| #34565 | keep_closed | skipped | superseded | Already closed; no mutation is valid. |
| #39558 | keep_closed | skipped | superseded | Already closed; no mutation is valid. |
| cluster:ghcrawl-156960-autonomous-smoke | needs_human | planned | needs_human | Maintainer or contributor must provide acceptable real Feishu behavior proof, or a maintainer must explicitly waive the proof gate before merge/finalization can proceed. |

## Needs Human

- #77653 requires redacted real Feishu reaction-triggered after-fix behavior proof, or an explicit maintainer waiver of that proof gate, before Clownfish can recommend merge or close #34528.
