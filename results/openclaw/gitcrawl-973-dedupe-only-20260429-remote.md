---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-973-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "27599302075"
workflow_run_id: "27599302075"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27599302075"
head_sha: "3793d73ce55606bb6b35576f7153086ef86c44dd"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-16T06:48:18.543Z"
canonical: "https://github.com/openclaw/openclaw/issues/69605"
canonical_issue: "https://github.com/openclaw/openclaw/issues/69605"
canonical_pr: null
actions_total: 9
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-973-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27599302075](https://github.com/openclaw/clownfish/actions/runs/27599302075)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/69605

## Summary

Hydrated state shows the original representative #69635 is closed and not the surviving canonical. The only live non-security canonical path in this cluster is #69605 for the Control UI code-block copy behavior. The remote-image policy lane is security-sensitive and is routed only on the exact affected refs. No close, merge, or fix PR actions are planned because all candidate PRs in the job are already closed and fix/merge/post-merge actions are blocked by the job frontmatter.

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
| #40945 | route_security | planned | security_sensitive | Route the live remote Markdown image policy issue to central OpenClaw security handling; do not mutate it through Clownfish. |
| #41025 | route_security | planned | security_sensitive | Quarantine the exact security-sensitive remote-image PR; it is already closed, but the security signal should remain routed centrally. |
| #69605 | keep_canonical | planned | canonical | Use #69605 as the current open canonical for the non-security code-block copy family after the closed representative #69635 became obsolete. |
| #69634 | keep_closed | skipped | related | Closed context only; no close action is valid for an already-closed PR. |
| #69635 | keep_closed | skipped | related | Do not treat the closed representative as canonical; keep the live canonical issue #69605 open. |
| #69689 | keep_closed | skipped | related | Closed related overlap-fix PR; no worker mutation is valid. |
| #48993 | keep_closed | skipped | related | Closed remote-image implementation context; the live policy issue #40945 is routed to security handling. |
| #47937 | keep_closed | skipped | related | Closed styling-context PR; no action required. |
| #49137 | keep_closed | skipped | independent | Closed independent markdown-performance context; no action required. |

## Needs Human

- none
