---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-3189-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "25135550964"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25135550964"
head_sha: "f12a87189d5d814fe7dfd1bed3ac0e65f75e8fe3"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T04:57:53.017Z"
canonical: "https://github.com/openclaw/openclaw/issues/54409"
canonical_issue: "https://github.com/openclaw/openclaw/issues/54409"
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

# gitcrawl-3189-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25135550964](https://github.com/openclaw/clownfish/actions/runs/25135550964)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/54409

## Summary

Hydrated state keeps #54409 as the canonical open issue for the Feishu active-run collect batching regression. #67793 and #70133 are related Feishu queue reports with distinct idle-inbound debounce and queue-starvation failure modes, so no duplicate closeout is planned.

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
| #54409 | keep_canonical | planned | canonical | #54409 is the best surviving canonical issue for the focused Feishu active-run collect batching regression. |
| #67793 | keep_related | planned | related | #67793 is in the same Feishu batching family, but it has a distinct idle inbound debounce reproduction and should stay open rather than be closed as a duplicate of #54409. |
| #70133 | keep_related | planned | related | #70133 shares the Feishu per-chat queue surface with #54409, but its queue-starvation and indefinite-blocking failure mode is separate and should remain open. |

## Needs Human

- none
