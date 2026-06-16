---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-336-dedupe-cleanup-wave-2"
mode: "autonomous"
run_id: "27609382768"
workflow_run_id: "27609382768"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27609382768"
head_sha: "063b91b51477b9a3958bd940d26858d243770fdf"
workflow_conclusion: "failure"
result_status: "planned"
published_at: "2026-06-16T10:04:56.993Z"
canonical: "https://github.com/openclaw/openclaw/issues/48045"
canonical_issue: "https://github.com/openclaw/openclaw/issues/48045"
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

# gitcrawl-336-dedupe-cleanup-wave-2

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27609382768](https://github.com/openclaw/clownfish/actions/runs/27609382768)

Workflow conclusion: failure

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/48045

## Summary

Classified #48045 as the surviving canonical issue. The open overlap PR #89416 carries a security-boundary signal and is quarantined with route_security instead of ordinary backlog classification. No close, merge, or fix action is safe or allowed: #89416 is routed to central security handling, the historical PRs are already closed, and the job blocks merge, fix, and raise_pr actions.

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
| #48045 | keep_canonical | planned | canonical | #48045 remains the best live canonical issue; no duplicate target exists in this cluster and the available open PR context is quarantined for security handling. |
| #89416 | route_security | planned | security_sensitive | #89416 carries a security-boundary signal, so this exact PR is quarantined for central OpenClaw security handling; Clownfish should not close, merge, comment on, or use it as an actionable fix path in this run. |
| #48132 | keep_closed | skipped | superseded | Historical closed PR only; retained as evidence for why the older implementation is not canonical. |
| #64558 | keep_closed | skipped | superseded | Historical closed PR only; useful as context, but it does not provide a current landed closeout for #48045. |

## Needs Human

- none
