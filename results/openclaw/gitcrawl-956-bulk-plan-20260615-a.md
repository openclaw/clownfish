---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-956-bulk-plan-20260615-a"
mode: "plan"
run_id: "27526246999"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27526246999"
head_sha: "df0ecb937a5f73036ef8def5c1f076a5c228a0d6"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T05:37:32.193Z"
canonical: "#85752"
canonical_issue: "#83948"
canonical_pr: "#85752"
actions_total: 2
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-956-bulk-plan-20260615-a

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27526246999](https://github.com/openclaw/clownfish/actions/runs/27526246999)

Workflow conclusion: success

Worker result: planned

Canonical: #85752

## Summary

Plan-mode classification only. The hinted representative #84633 is already closed and should stay closed; the live warning-fix canonical is the already-merged #85752, not an open candidate. The only open candidate, #91156, is explicitly listed by the job as a security-signal ref and is routed to central security handling without blocking the unrelated closed warning-fix path.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 2 |
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
| #84633 | keep_closed | skipped | superseded | Already closed; preserve the existing closeout and canonicalize the warning fix to merged #85752. |
| #91156 | route_security | planned | security_sensitive | The job explicitly marks this exact open PR as a security-signal ref; route only this item to central security handling and do not close, merge, or label it from ProjectClownfish. |

## Needs Human

- none
