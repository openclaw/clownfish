---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-368-dedupe-cleanup-wave-2"
mode: "autonomous"
run_id: "27609384462"
workflow_run_id: "27609384462"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27609384462"
head_sha: "063b91b51477b9a3958bd940d26858d243770fdf"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-16T10:01:21.127Z"
canonical: null
canonical_issue: null
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

# gitcrawl-368-dedupe-cleanup-wave-2

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27609384462](https://github.com/openclaw/clownfish/actions/runs/27609384462)

Workflow conclusion: success

Worker result: planned

Canonical: unknown

## Summary

Classified hydrated closed refs as historical context, routed the live #92760 item to central security handling because deterministic validation marked it security-sensitive, and kept the hydrated open PR #92930 as a related non-mutating candidate path. No closure is planned because #92930 is still open, merge/fix/post-merge actions are disallowed for this job, and the latest hydrated ClawSweeper review for #92930 did not complete cleanly.

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
| #39857 | keep_closed | skipped | fixed_by_candidate | Already closed historical context ref. |
| #90889 | keep_closed | skipped | fixed_by_candidate | Already merged historical context PR; no mutation allowed or needed. |
| #92424 | keep_closed | skipped | related | Closed related context ref, not an actionable duplicate in this cluster. |
| #92709 | keep_closed | skipped | superseded | Already closed superseded PR; historical evidence only. |
| #92760 | route_security | planned | security_sensitive | Route the exact security-sensitive issue to central OpenClaw security handling; do not mutate this item in ProjectClownfish. |
| #92772 | keep_closed | skipped | superseded | Already closed superseded PR; no close or comment action is valid. |
| #92930 | keep_related | planned | related | Related open candidate fix, but not merge-ready in this worker result and no mutating merge/fix path is permitted. |

## Needs Human

- none
