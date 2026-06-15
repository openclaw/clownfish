---
repo: "openclaw/openclaw"
cluster_id: "ghcrawl-156987-autonomous-smoke"
mode: "autonomous"
run_id: "25102857444"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25102857444"
head_sha: "c3cc5ac35d228f419caa5b1772e20efdca99c0e6"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T03:45:26.113Z"
canonical: "https://github.com/openclaw/openclaw/issues/39500"
canonical_issue: "https://github.com/openclaw/openclaw/issues/39500"
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

# ghcrawl-156987-autonomous-smoke

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25102857444](https://github.com/openclaw/clownfish/actions/runs/25102857444)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/39500

## Summary

Hydrated preflight state shows the linked root issue and both candidate PRs are already closed. No close, comment, label, merge, or fix PR action is planned. The canonical path is the already-closed root issue #39500 and current main recovery behavior at e1fd27fb24ae81e27cf4ac1297410491009a70c0; both flat-array PRs remain historical obsolete attempts.

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
| #39500 | keep_closed | skipped | canonical | Root canonical issue is already closed; closed refs must not receive close/comment actions. |
| #39524 | keep_closed | skipped | superseded | Already closed historical PR; no merge or close action is valid, and no replacement fix is needed because the user-visible startup-wedging bug is already handled on current main. |
| #39654 | keep_closed | skipped | superseded | Already closed historical PR; no close action is valid, and the artifact does not justify a new autonomous fix PR for a maintainer-level config-contract expansion. |

## Needs Human

- none
