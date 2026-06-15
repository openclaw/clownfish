---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-13767-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "25109774723"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25109774723"
head_sha: "7ac7590296085c93e29434b3af3e919aa257e029"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T04:57:52.757Z"
canonical: "https://github.com/openclaw/openclaw/issues/53685"
canonical_issue: "https://github.com/openclaw/openclaw/issues/53685"
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

# gitcrawl-13767-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25109774723](https://github.com/openclaw/clownfish/actions/runs/25109774723)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/53685

## Summary

No close/comment/label mutation is planned. The closed representative #53685 remains the historical canonical for the plugin-SDK alias resolution family, and the only open candidate #62595 should stay open as related but not duplicate because it reports TS2883 type portability failures rather than plugin-SDK alias/subpath module resolution.

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
| #53685 | keep_closed | skipped | canonical | Historical canonical is already closed; keep it as evidence only. |
| #62595 | keep_related | planned | related | Related to the broader `pnpm check` and plugin-SDK-adjacent area, but not a true duplicate of the closed alias-resolution canonical family. |

## Needs Human

- none
