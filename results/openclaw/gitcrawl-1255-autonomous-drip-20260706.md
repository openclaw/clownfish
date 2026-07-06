---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-1255-autonomous-drip-20260706"
mode: "autonomous"
run_id: "28785157361"
workflow_run_id: "28785157361"
run_url: "https://github.com/openclaw/clownfish/actions/runs/28785157361"
head_sha: "ded48f35f86504bb375987a529344c4f75145558"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-07-06T10:34:01.502Z"
canonical: "https://github.com/openclaw/openclaw/issues/14206"
canonical_issue: "https://github.com/openclaw/openclaw/issues/14206"
canonical_pr: "https://github.com/openclaw/openclaw/pull/96513"
actions_total: 6
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 1
needs_human_count: 0
---

# gitcrawl-1255-autonomous-drip-20260706

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/28785157361](https://github.com/openclaw/clownfish/actions/runs/28785157361)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/14206

## Summary

I confirmed the checkout is at the preflight main SHA and current main has Feishu reactive send retry handling but no proactive sendRateLimit/minimum-interval config or scheduler. #14206 remains the canonical issue; #96513 is the active candidate but merge is blocked on external merge preflight.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 6 |
| Fix executed | 0 |
| Fix failed | 0 |
| Fix blocked | 0 |
| Applied executions | 0 |
| Apply blocked | 0 |
| Apply skipped | 1 |
| Needs human | 0 |

## Fix Execution Actions

| Action | Status | Target | Branch | Reason |
| --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #96513 | merge_candidate | skipped | canonical | action status is blocked |

## Apply Audit

| Attempt | Source | Target | Action | Status | Reason |
| --- | --- | --- | --- | --- |
| 1 | apply | #96513 | merge_candidate | skipped | action status is blocked |
| 2 | apply | #96513 | merge_candidate | skipped | action status is blocked |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #14206 | keep_canonical | planned | canonical | Open canonical issue remains valid and current-main behavior still lacks the requested proactive Feishu outbound pacing capability. |
| #96513 | merge_candidate | blocked | canonical | external_merge_preflight_required: candidate appears repairable and likely canonical, but merge requires fresh exact-head mergeability, review-comment/bot finding resolution, Codex /review, and executor validation before any merge action. |
| #13615 | keep_related | planned | related | Related broader rate-limit product work, not a duplicate of the Feishu channel pacing issue. |
| #70879 | keep_closed | skipped | related | Already closed related context; no closure action is valid. |
| #89659 | keep_closed | skipped | related | Already merged related context; no action is needed. |
| #94614 | keep_closed | skipped | superseded | Closed unmerged prior candidate is superseded by the open, broader-coverage candidate #96513; no close action is valid. |

## Needs Human

- none
