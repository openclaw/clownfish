---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-11867-dedupe-only-20260429d"
mode: "autonomous"
run_id: "25143138777"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25143138777"
head_sha: "a2bff82d05ec1e93ecfbfdca9074f10f1f9b53ad"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T04:05:51.334Z"
canonical: "https://github.com/openclaw/openclaw/issues/64783"
canonical_issue: "https://github.com/openclaw/openclaw/issues/64783"
canonical_pr: "https://github.com/openclaw/openclaw/pull/64820"
actions_total: 2
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-11867-dedupe-only-20260429d

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25143138777](https://github.com/openclaw/clownfish/actions/runs/25143138777)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/64783

## Summary

Canonical issue #64783 remains the live issue thread for the Feishu group-mention TDZ crash. PR #64820 is the open canonical repair candidate, but it is not merge-ready because hydrated bot review comments remain actionable, relevant checks are failing, mergeability is unknown, and this dedupe-only job does not allow merge or fix actions. No close, label, merge, or fix-PR action is planned.

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
| #64783 | keep_canonical | planned | canonical | Keep #64783 as the canonical issue; the linked fix candidate has not landed and no closeout gate is satisfied. |
| #64820 | keep_canonical | planned | canonical | Keep #64820 open as the canonical repair candidate, but do not merge or mark #64783 fixed by it until review findings are addressed, the branch is refreshed, and relevant checks pass. |

## Needs Human

- none
