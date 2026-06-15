---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-2719-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "25134068718"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25134068718"
head_sha: "d0688cc86ec05c840c9f64b264bd897e9b409ff3"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T04:57:52.997Z"
canonical: "https://github.com/openclaw/openclaw/pull/40464"
canonical_issue: null
canonical_pr: "https://github.com/openclaw/openclaw/pull/40464"
actions_total: 6
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-2719-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25134068718](https://github.com/openclaw/clownfish/actions/runs/25134068718)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/40464

## Summary

Autonomous classification only. No GitHub mutations are planned. #40464 remains the live representative for the startup config data-loss PR family, but it is not merge-ready because current-main review found unresolved contract and rebase work. #43244, #44997, #43367, and #64973 are related config-write or orchestration follow-ups with distinct surfaces, so they should stay open. #55706 is closed context only.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 6 |
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
| #40464 | keep_canonical | planned | canonical | Keep #40464 as the canonical PR for this subfamily. Do not merge, close, or mark fixed because the PR has unresolved review findings and merge/fix actions are blocked by the job. |
| #43244 | keep_related | planned | related | Not a duplicate of #40464 and not safe to close. Keep open as a related implementation candidate for the gateway RPC config-write race. |
| #44997 | keep_related | planned | related | Not a duplicate of #40464 and not safe to close. Keep open as a related implementation candidate for concurrent agents-add config writes. |
| #43367 | keep_related | planned | related | Keep open as related follow-up scope. It is broader than the canonical startup config data-loss PR and should not be closed in this dedupe-only cluster. |
| #64973 | keep_related | planned | related | Keep open as related follow-up scope. It is not a duplicate and is not fully covered by the open PR candidates in this cluster. |
| #55706 | keep_closed | skipped | fixed_by_candidate | Historical evidence only; already closed. |

## Needs Human

- none
