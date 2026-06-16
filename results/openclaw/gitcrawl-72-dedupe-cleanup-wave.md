---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-72-dedupe-cleanup-wave"
mode: "autonomous"
run_id: "27608148768"
workflow_run_id: "27608148768"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27608148768"
head_sha: "d39befcd6309943509cd00e8e3cd0ee7c314e6be"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-16T09:36:29.372Z"
canonical: "https://github.com/openclaw/openclaw/issues/80520"
canonical_issue: "https://github.com/openclaw/openclaw/issues/80520"
canonical_pr: null
actions_total: 8
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-72-dedupe-cleanup-wave

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27608148768](https://github.com/openclaw/clownfish/actions/runs/27608148768)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/80520

## Summary

Closed representative #68494 is obsolete. The hydrated cluster is over-broad rather than duplicate-clean: #80520 remains the best open canonical for the Telegram no-send/preview-disappears lane, while #43549, #84653, #91456, and #91564 each carry distinct remaining work. No close, merge, or fix PR action is safe or permitted for this job; #38520 is routed to security only as the exact security-sensitive linked ref.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 8 |
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
| #38520 | route_security | planned | security_sensitive | Security-sensitive linked feature/trust-boundary discussion is outside ProjectClownfish backlog cleanup. |
| #80520 | keep_canonical | planned | canonical | Best surviving open canonical for the no-send/preview-disappears subfamily. |
| #83161 | keep_related | planned | related | Useful candidate PR for #80520, but not mergeable within this job. |
| #43549 | keep_related | planned | related | Related Telegram session-state bug with unique diagnostic/recovery scope; not safe to close as duplicate. |
| #84653 | keep_related | planned | related | Related Telegram ingress symptom, but not proven duplicate of closed #81973. |
| #91456 | keep_related | planned | related | Keep open until the candidate fix lands or maintainers choose another recovery policy. |
| #93040 | keep_related | planned | related | Useful candidate for the guarded-lane subfamily, preserved for maintainer/merge workflow outside this cleanup job. |
| #91564 | keep_related | planned | related | Related Telegram delivery-loss report with unique forum-topic persistence evidence; keep open. |

## Needs Human

- none
