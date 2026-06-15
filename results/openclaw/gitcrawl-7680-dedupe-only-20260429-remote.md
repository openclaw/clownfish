---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-7680-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "25136865206"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25136865206"
head_sha: "c207d367ab088fb89ca96c77cc23dd9c55875cc5"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T04:05:51.291Z"
canonical: "https://github.com/openclaw/openclaw/tree/9a3a341d93721f808d9deeae6e39c727249d2824"
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

# gitcrawl-7680-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25136865206](https://github.com/openclaw/clownfish/actions/runs/25136865206)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/tree/9a3a341d93721f808d9deeae6e39c727249d2824

## Summary

Hydrated preflight at main 9a3a341d93721f808d9deeae6e39c727249d2824 shows no open targets remain. The closed representative #51166 is obsolete, historical root-cause issue #51185 is also closed, and the only job candidate #58277 is already closed and merged as a separate abort-listener fix. No comment, label, close, merge, or fix actions are planned.

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
| #24151 | keep_closed | skipped | related | Closed context ref; closure policy forbids close actions for already-closed items. |
| #45108 | keep_closed | skipped | superseded | Already closed as superseded historical context; no mutation is allowed or needed. |
| #51099 | keep_closed | skipped | superseded | Already closed as superseded historical context; no mutation is allowed or needed. |
| #51166 | keep_closed | skipped | superseded | Closed representative PR is obsolete and already closed; keep as evidence only. |
| #51185 | keep_closed | skipped | canonical | Historical canonical issue is closed; there is no open issue to keep or close in this run. |
| #57789 | keep_closed | skipped | superseded | Already closed; no close, merge, post-merge close, or fix action is permitted by this job. |
| #58277 | keep_closed | skipped | independent | The only job candidate is already merged and closed, and it is independent from the obsolete default-image duplicate family. |

## Needs Human

- none
