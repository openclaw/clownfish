---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-7266-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "27585130205"
workflow_run_id: "27585130205"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27585130205"
head_sha: "029567b88e02d3fb42050a9ee72b98ee92930545"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-16T00:20:07.519Z"
canonical: null
canonical_issue: null
canonical_pr: null
actions_total: 8
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-7266-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27585130205](https://github.com/openclaw/clownfish/actions/runs/27585130205)

Workflow conclusion: success

Worker result: planned

Canonical: unknown

## Summary

No close, comment, label, merge, or fix action is recommended. Deterministic validation marked #43231 and #65973 security-sensitive, so both exact refs are routed to central security handling and no ProjectClownfish canonical is selected from those refs. The obsolete representative #49862 is already closed as implemented; #66540 and the remaining hydrated context PRs/issues are already closed and retained only as evidence.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 8 |
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
| #43231 | route_security | planned | security_sensitive | Security-sensitive refs are out of ProjectClownfish dedupe scope and must be routed as exact issue/PR refs, not closed or kept as canonical. |
| #49862 | keep_closed | skipped | fixed_by_candidate | Already closed historical representative; no closure action is valid. |
| #50326 | keep_closed | skipped | fixed_by_candidate | Already closed context issue; no closure action is valid. |
| #54456 | keep_closed | skipped | superseded | Already closed context issue; no closure action is valid. |
| #63637 | keep_closed | skipped | superseded | Already closed PR; no merge or close action is valid. |
| #65973 | route_security | planned | security_sensitive | Security-sensitive refs are out of ProjectClownfish dedupe scope and must be routed as exact issue/PR refs, not classified as ordinary related evidence. |
| #66540 | keep_closed | skipped | related | Already closed listed candidate; no closure action is valid. |
| #66547 | keep_closed | skipped | related | Already closed related PR; no merge, fix, or closure action is valid. |

## Needs Human

- none
