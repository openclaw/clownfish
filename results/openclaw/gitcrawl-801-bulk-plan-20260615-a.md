---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-801-bulk-plan-20260615-a"
mode: "plan"
run_id: "27523352803"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27523352803"
head_sha: "7085a31ba476fe810cf6138882445a069aabed15"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T04:10:12.113Z"
canonical: "#77307"
canonical_issue: "#77307"
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

# gitcrawl-801-bulk-plan-20260615-a

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27523352803](https://github.com/openclaw/clownfish/actions/runs/27523352803)

Workflow conclusion: success

Worker result: planned

Canonical: #77307

## Summary

Plan-mode classification only. #77307 remains the open canonical issue for the Google Chat unsupported_grant_type regression. #78554 is a job-declared security-signal ref and is routed to central security handling without blocking #77307. Closed linked issues #76742 and #76880 are retained only as historical context.

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
| #76742 | keep_closed | skipped |  | Already closed; no closure action is valid. |
| #76880 | keep_closed | skipped |  | Already closed; no closure action is valid. |
| #77307 | keep_canonical | planned | canonical | Best live canonical for the unresolved non-security Google Chat regression. |
| #78554 | route_security | planned | security_sensitive | Job-declared security-signal PR must be quarantined to central OpenClaw security handling. |

## Needs Human

- none
