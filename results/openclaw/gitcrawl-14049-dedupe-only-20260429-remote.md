---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-14049-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "25129109931"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25129109931"
head_sha: "c6792f0250a6710fb4bca0bf6ba7777e5c4f0fbc"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T04:57:52.823Z"
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

# gitcrawl-14049-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25129109931](https://github.com/openclaw/clownfish/actions/runs/25129109931)

Workflow conclusion: success

Worker result: planned

Canonical: unknown

## Summary

No cluster-wide open canonical was selected: the hydrated open refs split into separate filesystem-roots and dmPolicy-audit subfamilies, while the original web-search representative is already closed as implemented and the dangerous-command candidate was already replaced by merged #73915. No close/comment/label mutation is safe for the remaining open PRs; security-sensitive linked issues are routed only.

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
| #45862 | keep_closed | skipped | fixed_by_candidate | Representative is obsolete and already closed; no open duplicate target remains in this subfamily. |
| #43565 | keep_related | planned | related | Keep open as a related filesystem-roots implementation; not a duplicate of the obsolete audit canonical and not safe to close. |
| #52951 | keep_related | planned | related | Keep open as a related filesystem-roots subcluster candidate; no high-confidence duplicate or superseded closure is available. |
| #55726 | keep_related | planned | related | Keep open; the PR is useful but not merge-ready, and linked security-sensitive issue #55612 is routed separately. |
| #55612 | route_security | planned | security_sensitive | Route only this security-sensitive issue to central OpenClaw security handling. |
| #55578 | route_security | planned | security_sensitive | Quarantine the linked security-sensitive ref while leaving unrelated non-security classification intact. |
| #56923 | keep_closed | skipped | fixed_by_candidate | No action on already-closed #56923; the replacement fix path is already merged in hydrated state. |

## Needs Human

- none
