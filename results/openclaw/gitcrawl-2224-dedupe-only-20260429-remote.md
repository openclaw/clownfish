---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-2224-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "25132434096"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25132434096"
head_sha: "2a25e72cd9df0710ef893de8f25823a6a78be854"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T04:57:52.951Z"
canonical: "https://github.com/openclaw/openclaw/issues/42538"
canonical_issue: "https://github.com/openclaw/openclaw/issues/42538"
canonical_pr: null
actions_total: 6
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-2224-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25132434096](https://github.com/openclaw/clownfish/actions/runs/25132434096)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/42538

## Summary

Hydrated state shows #42538 is the only open item and is a distinct gateway health/runtime snapshot issue, not a duplicate of the closed WhatsApp unsupported-channel reports. No close/comment/label/merge/fix action is planned because the only apparent merged replacement for #42538 is mentioned only as unhydrated #72417 evidence.

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
| #42538 | keep_canonical | planned | canonical | Keep #42538 open as the current hydrated canonical issue for the separate health/runtime-state subfamily; closure requires a hydrated merged candidate or a later post-merge closeout job. |
| #23140 | keep_closed | skipped | related | No action for already-closed related context. |
| #42586 | keep_closed | skipped | superseded | No action for already-closed superseded PR; do not emit candidate_fix from an unhydrated replacement ref. |
| #55098 | keep_closed | skipped | fixed_by_candidate | Closed representative remains historical fixed context and should not receive a close action. |
| #55114 | keep_closed | skipped | fixed_by_candidate | No action for already-closed fixed context. |
| #56444 | keep_closed | skipped | fixed_by_candidate | No action for already-closed fixed context. |

## Needs Human

- none
