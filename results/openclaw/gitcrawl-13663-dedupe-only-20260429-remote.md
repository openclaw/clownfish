---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-13663-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "25109745037"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25109745037"
head_sha: "7ac7590296085c93e29434b3af3e919aa257e029"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T04:57:52.747Z"
canonical: "https://github.com/openclaw/openclaw/issues/45269"
canonical_issue: "https://github.com/openclaw/openclaw/issues/45269"
canonical_pr: null
actions_total: 2
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-13663-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25109745037](https://github.com/openclaw/clownfish/actions/runs/25109745037)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/45269

## Summary

Hydrated preflight state shows no security-sensitive refs. The closed representative #46071 is historical evidence, not a live canonical. Open #45269 is the best current canonical for the remaining apply_patch/provider-routing tool-availability behavior; #62516 is related tools.profile/plugin-tool behavior but not a high-confidence duplicate, so no close actions are planned.

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
| #45269 | keep_canonical | planned | canonical | Closed representative #46071 should not remain the live canonical. Keep #45269 open as the canonical thread for the remaining routed apply_patch availability/policy behavior rather than closing a report with unique reproduction details. |
| #62516 | keep_related | planned | related | Keep #62516 open as related because it has a distinct plugin-tool/profile interaction and no hydrated evidence proving the same root cause or a landed fix. |

## Needs Human

- none
