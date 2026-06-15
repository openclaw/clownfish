---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-222-bulk-plan-20260615-a"
mode: "plan"
run_id: "27520849240"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27520849240"
head_sha: "872a0ab6af9f5f189014062d7bd0a2367b003dde"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T02:47:39.919Z"
canonical: null
canonical_issue: null
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

# gitcrawl-222-bulk-plan-20260615-a

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27520849240](https://github.com/openclaw/clownfish/actions/runs/27520849240)

Workflow conclusion: success

Worker result: planned

Canonical: unknown

## Summary

Plan-only classification from the hydrated preflight artifact. Security-signal refs #74379 and #88075 are routed to central security handling. #92456 is related exec-approval work but not the same root cause as the denyPathPatterns path gate, so it should remain open independently of this cluster cleanup.

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
| #74379 | route_security | planned | security_sensitive | The issue is explicitly security-sensitive in the hydrated artifact and job notes, so Clownfish must not dedupe-close or fix it through backlog automation. |
| #88075 | route_security | planned | security_sensitive | Although #88075 is the representative implementation, the job explicitly routes this security-signal PR to central security handling; do not merge, close, label, or comment through Clownfish. |
| #92456 | keep_related | planned | related | Same exec policy area, but a different mechanism and product decision from path-deny secret protection; it should not be closed as duplicate or superseded by #88075. |
| #81827 | keep_closed | skipped | security_sensitive | Historical closed context only; no mutation is available or needed. |

## Needs Human

- none
