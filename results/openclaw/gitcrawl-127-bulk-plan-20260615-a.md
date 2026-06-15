---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-127-bulk-plan-20260615-a"
mode: "plan"
run_id: "27520787855"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27520787855"
head_sha: "872a0ab6af9f5f189014062d7bd0a2367b003dde"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T02:47:39.888Z"
canonical: "#91931"
canonical_issue: "#91931"
canonical_pr: null
actions_total: 7
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-127-bulk-plan-20260615-a

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27520787855](https://github.com/openclaw/clownfish/actions/runs/27520787855)

Workflow conclusion: success

Worker result: planned

Canonical: #91931

## Summary

Plan-mode classification only. The job explicitly marks #90199 and #91955 as security-signal refs requiring route_security, so those exact PRs are quarantined without blocking the ordinary bootstrap-preservation bug family. For the non-security family, #91931 remains the live canonical issue; #91988 is a related candidate fix for #91931 but should not be merged or used for fixed-by-candidate closeout while the latest ClawSweeper review still says changes are needed. Closed linked refs are retained as historical context only.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 7 |
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
| #90199 | route_security | planned | security_sensitive | Exact job-listed security-signal ref; quarantine only this PR and continue classifying unrelated non-security items. |
| #91955 | route_security | planned | security_sensitive | Exact job-listed security-signal ref; do not close, merge, label, comment, or use it as the actionable canonical path in this plan. |
| #91931 | keep_canonical | planned | canonical | Best live non-security canonical issue for the BOOTSTRAP.md preseeded-workspace deletion family. |
| #91988 | keep_related | planned | related | Useful related candidate fix for #91931, but not merge-ready or closeout-ready under the hydrated review state. |
| #66820 | keep_closed | skipped | related | Already closed; historical related context only. |
| #67716 | keep_closed | skipped | related | Already closed; related to quarantined #90199, not the #91931 bootstrap file deletion family. |
| #84132 | keep_closed | skipped | related | Already closed; related historical product context but not an open duplicate target. |

## Needs Human

- none
