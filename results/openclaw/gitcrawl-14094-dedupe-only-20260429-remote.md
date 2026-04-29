---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-14094-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "25129743079"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25129743079"
head_sha: "57b657bc4ce868d681ea2ae867230254e2cbce60"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-04-29T19:42:33.263Z"
canonical: "https://github.com/openclaw/openclaw/issues/55412"
canonical_issue: "https://github.com/openclaw/openclaw/issues/55412"
canonical_pr: null
actions_total: 1
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-14094-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25129743079](https://github.com/openclaw/clownfish/actions/runs/25129743079)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/55412

## Summary

The closed representative #57249 is obsolete for routing. The only open hydrated candidate, #55412, should stay open as the current canonical issue for the narrower GatewayDrainingError retry/user-facing-error path; the closed drain/embedded-run issues are useful evidence but do not fully cover that distinct request. No close, merge, fix, or GitHub mutation is planned.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 1 |
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
| #55412 | keep_canonical | planned | canonical | Keep #55412 open as the current canonical issue for the remaining narrower UX/retry behavior. Closing it against the closed drain fixes would risk losing a distinct reproduction and requested fix path. |

## Needs Human

- none
