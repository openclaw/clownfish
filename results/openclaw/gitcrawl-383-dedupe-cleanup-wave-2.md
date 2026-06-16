---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-383-dedupe-cleanup-wave-2"
mode: "autonomous"
run_id: "27609384415"
workflow_run_id: "27609384415"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27609384415"
head_sha: "063b91b51477b9a3958bd940d26858d243770fdf"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-16T10:01:21.124Z"
canonical: null
canonical_issue: null
canonical_pr: null
actions_total: 6
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 1
---

# gitcrawl-383-dedupe-cleanup-wave-2

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27609384415](https://github.com/openclaw/clownfish/actions/runs/27609384415)

Workflow conclusion: success

Worker result: planned

Canonical: unknown

## Summary

Deterministic validation classifies #41744 and linked PR #50359 as security-sensitive, so both exact refs are quarantined with route_security actions for central OpenClaw security handling. No close, merge, fix, or cluster-scoped security action is emitted. Closed historical refs remain non-mutating evidence only.

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
| #41744 | route_security | planned | security_sensitive | Quarantine #41744 to central OpenClaw security triage. ProjectClownfish should not close, label, comment on, or fix this security-sensitive item. |
| #50359 | route_security | planned | security_sensitive | Quarantine #50359 to central OpenClaw security triage. ProjectClownfish should not close, label, comment on, merge, or repair this security-sensitive PR. |
| #41782 | keep_closed | skipped | superseded | Closed historical PR evidence only; it should not be mutated by this worker. |
| #46268 | keep_closed | skipped | superseded | Closed historical PR evidence only; it should not be mutated by this worker. |
| #48979 | keep_closed | skipped | duplicate | Closed historical duplicate evidence only; it should not be mutated by this worker. |
| #78470 | keep_closed | skipped | related | Closed adjacent context only; it is not a true duplicate target for this cluster's read-tool media promotion issue. |

## Needs Human

- Central OpenClaw security triage is required for #41744 and #50359 before ProjectClownfish can classify, close, merge, or repair those refs.
