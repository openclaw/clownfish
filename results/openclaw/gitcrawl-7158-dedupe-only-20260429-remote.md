---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-7158-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "25136851780"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25136851780"
head_sha: "c207d367ab088fb89ca96c77cc23dd9c55875cc5"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T04:05:51.282Z"
canonical: "https://github.com/openclaw/openclaw/issues/55412"
canonical_issue: "https://github.com/openclaw/openclaw/issues/55412"
canonical_pr: null
actions_total: 6
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-7158-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25136851780](https://github.com/openclaw/clownfish/actions/runs/25136851780)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/55412

## Summary

Autonomous classification only; no GitHub mutations performed. #55412 is the best open non-security canonical issue for the GatewayDrainingError user-facing restart failure family; #46303 is quarantined to central security handling; #69121 remains open as related active restart-shutdown drain work. Closed refs remain evidence only.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 6 |
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
| #55412 | keep_canonical | planned | canonical | Best surviving open non-security canonical thread for this cluster's GatewayDrainingError user-facing restart failure family; keep open, do not close or label. |
| #46303 | route_security | planned | security_sensitive | Security-sensitive PR is out of scope for backlog dedupe automation; route only to central OpenClaw security handling. |
| #69121 | keep_related | planned | related | Related active implementation candidate with unique scope; not a duplicate of #55412 or the closed #49457/#55470 PRs and not safe to close or supersede. |
| #30643 | keep_closed | skipped | related | Already closed; no close/comment/label action is valid for this ref. |
| #49457 | keep_closed | skipped | superseded | Already closed and superseded by the current-main implementation path; historical evidence only. |
| #55470 | keep_closed | skipped | superseded | Already closed and superseded by current-main behavior; historical evidence only. |

## Needs Human

- none
