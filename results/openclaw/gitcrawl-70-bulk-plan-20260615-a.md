---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-70-bulk-plan-20260615-a"
mode: "plan"
run_id: "27523190335"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27523190335"
head_sha: "2eb7becb97c14f307a0a4930f6deab62b7223dde"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T04:07:30.421Z"
canonical: "#90786"
canonical_issue: "#90786"
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

# gitcrawl-70-bulk-plan-20260615-a

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27523190335](https://github.com/openclaw/clownfish/actions/runs/27523190335)

Workflow conclusion: success

Worker result: planned

Canonical: #90786

## Summary

Plan-mode classification only. The hydrated artifact keeps #90786 as the canonical issue for the explicit Google/gemini provider-id regression. Related memory-index/provider upgrade issues remain open because they carry distinct upgrade, watcher, local-provider, or live-manager recovery scope. #91183 is quarantined per the job security-signal note even though the preflight marked it already closed/non-security. No merge, fix, or GitHub mutation is planned.

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
| #90786 | keep_canonical | planned | canonical | Best surviving canonical issue for the explicit Google provider-id mismatch; still open and source-reproduced in hydrated comments. |
| #90787 | keep_related | planned | related | Related provider/upgrade family, but not a true duplicate of #90786 because it includes default migration and stale identity behavior beyond explicit google provider lookup. |
| #90801 | keep_related | planned | related | Same memory upgrade symptom family, but distinct watcher/status behavior; not cleanup-safe as a duplicate of #90786. |
| #91183 | route_security | planned | security_sensitive | Explicit job-level security-signal override requires quarantining this exact ref; unrelated non-security items continue to be classified. |
| #91310 | keep_related | planned | related | Useful candidate fix for the canonical #90786 path, but it is not merge-ready and the job disallows merge/fix actions. |
| #91444 | keep_related | planned | related | Overlaps the canonical issue and likely competes with #91310, but contributor code should not be closed or superseded in this plan because the preferred fix path is not merge-ready and proof remains requested. |
| #92808 | keep_related | planned | related | Related memory provider upgrade family, but distinct local-provider migration/model-identity scope; keep open for separate maintainer follow-up. |

## Needs Human

- none
