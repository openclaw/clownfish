---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-170-dedupe-cleanup-wave-2"
mode: "autonomous"
run_id: "27609384302"
workflow_run_id: "27609384302"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27609384302"
head_sha: "063b91b51477b9a3958bd940d26858d243770fdf"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-16T10:01:21.122Z"
canonical: "https://github.com/openclaw/openclaw/pull/66985"
canonical_issue: "https://github.com/openclaw/openclaw/issues/87213"
canonical_pr: "https://github.com/openclaw/openclaw/pull/66985"
actions_total: 8
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-170-dedupe-cleanup-wave-2

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27609384302](https://github.com/openclaw/clownfish/actions/runs/27609384302)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/66985

## Summary

Canonical selector-canonicalization bug is already fixed by merged PR #66985 on current main; closed context refs stay closed, security-sensitive linked refs are routed to central security, and #92141 remains open as a related but distinct WebChat/Codex node-exec tool-surface report.

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
| #61009 | route_security | planned | security_sensitive | Security-sensitive exec-routing documentation item must be routed to central OpenClaw security handling, not dedupe cleanup. |
| #72858 | route_security | planned | security_sensitive | Security-sensitive browser-surface host exec semantics belong in central security/product handling. |
| #66985 | keep_closed | skipped | canonical | Merged canonical fix is already closed; no worker mutation is valid. |
| #87213 | keep_closed | skipped | fixed_by_candidate | Original canonical issue is already closed by the merged canonical fix; do not emit close actions for closed items. |
| #61229 | keep_closed | skipped | fixed_by_candidate | Closed historical issue remains closed and is covered by the merged canonical fix. |
| #87236 | keep_closed | skipped | superseded | Closed superseded PR remains historical evidence only. |
| #87242 | keep_closed | skipped | superseded | Closed superseded PR remains historical evidence only. |
| #92141 | keep_related | planned | related | Same exec/node area, but different user-visible failure and likely different root cause; no high-confidence duplicate or fixed-by-candidate closeout. |

## Needs Human

- none
