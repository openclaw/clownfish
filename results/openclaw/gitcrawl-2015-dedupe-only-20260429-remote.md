---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-2015-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "27594231209"
workflow_run_id: "27594231209"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27594231209"
head_sha: "8364aec238559663a0a8644042702a5c6ccea4db"
workflow_conclusion: "success"
result_status: "needs_human"
published_at: "2026-06-16T04:34:46.699Z"
canonical: null
canonical_issue: null
canonical_pr: null
actions_total: 9
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 1
---

# gitcrawl-2015-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27594231209](https://github.com/openclaw/clownfish/actions/runs/27594231209)

Workflow conclusion: success

Worker result: needs_human

Canonical: unknown

## Summary

No GitHub mutations are safe for this run. The obsolete representative #53547 is closed but must be routed as security-sensitive per deterministic validation, the surviving open work is split across security-sensitive agentDir bootstrap semantics (#29387) and symlink/boundary bootstrap semantics (#38622, linked #64472), and #40210 is already closed as a duplicate of #38622. I routed only exact issue refs and left other closed context refs untouched.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 9 |
| Fix executed | 0 |
| Fix failed | 0 |
| Fix blocked | 0 |
| Applied executions | 0 |
| Apply blocked | 0 |
| Apply skipped | 0 |
| Needs human | 1 |

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
| #29387 | route_security | planned | security_sensitive | Quarantine exact security-sensitive issue for central OpenClaw security handling; do not close, label, comment, merge, or fix through Clownfish. |
| #38622 | route_security | planned | security_sensitive | Quarantine exact security-sensitive issue for central OpenClaw security handling; do not close, label, comment, merge, or fix through Clownfish. |
| #64472 | route_security | planned | security_sensitive | Quarantine exact linked security-sensitive issue for central OpenClaw security handling; keep it out of dedupe cleanup. |
| #40210 | keep_closed | skipped | duplicate | Historical duplicate already closed; no mutation planned. |
| #43528 | keep_closed | skipped | related | Closed context ref only; no mutation planned. |
| #53547 | route_security | planned | security_sensitive | Quarantine exact security-sensitive issue ref for central OpenClaw security handling; no close, label, comment, merge, or fix action is planned. |
| #64173 | keep_closed | skipped | related | Closed context ref only; no mutation planned. |
| #69994 | keep_closed | skipped | related | Closed context ref only; no mutation planned. |
| cluster:gitcrawl-2015-dedupe-only-20260429-remote | needs_human | blocked | needs_human | Maintainer/security triage must split or own the surviving security-sensitive subfamilies before any future dedupe or fix-lane work. |

## Needs Human

- Central OpenClaw security triage should split or own the surviving open subfamilies: #29387 for agentDir bootstrap semantics, and #38622/#64472 for symlink boundary behavior. #53547 is closed, obsolete as canonical, and routed exactly because deterministic validation marks it security-sensitive.
