---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-173-pr-backlog-plan-20260615-a"
mode: "plan"
run_id: "27525105920"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27525105920"
head_sha: "416f3a943012e6a4f3b9e3e5baef7c4b408b4558"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T05:03:22.041Z"
canonical: "#75938"
canonical_issue: "#75938"
canonical_pr: null
actions_total: 3
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-173-pr-backlog-plan-20260615-a

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27525105920](https://github.com/openclaw/clownfish/actions/runs/27525105920)

Workflow conclusion: success

Worker result: planned

Canonical: #75938

## Summary

Plan-mode classification only. #75938 is the best live non-security canonical among the actionable refs. #76058 is explicitly listed by the job as a security-signal ref and is routed to central security handling without poisoning the unrelated issue classification. #52568 remains open context owned by an existing overlapping job, so no mutation is planned for it.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 3 |
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
| #52568 | keep_related | skipped | related | Existing-overlap context is not actionable in this cluster; kept only to explain why #75938 becomes the live non-security canonical for the remaining refs. |
| #75938 | keep_canonical | planned | canonical | Best live non-security canonical among the remaining actionable refs after excluding existing-overlap context and quarantining the security-signal PR. |
| #76058 | route_security | planned | security_sensitive | Exact job-designated security-signal item must be quarantined to central OpenClaw security handling; no close, merge, label, comment, or fix PR is planned for it. |

## Needs Human

- none
