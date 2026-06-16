---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-14000-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "27599299110"
workflow_run_id: "27599299110"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27599299110"
head_sha: "3793d73ce55606bb6b35576f7153086ef86c44dd"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-16T06:53:34.559Z"
canonical: "https://github.com/openclaw/openclaw/pull/79470"
canonical_issue: "https://github.com/openclaw/openclaw/issues/47558"
canonical_pr: "https://github.com/openclaw/openclaw/pull/79470"
actions_total: 16
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-14000-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27599299110](https://github.com/openclaw/clownfish/actions/runs/27599299110)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/79470

## Summary

Live preflight shows the representative #59658 and all job-listed open candidates are now closed. No close/comment/label mutations are safe or needed. The subagents-docs family is no longer represented by an open canonical; the narrow current-main documentation correction landed via #79470, while the broader #47558 thread was closed by a maintainer as unrequired. Three hydrated security-sensitive PRs are routed to central security handling, scoped only to those refs. The linked Telegram bug #56286 remains open and related, but fix PRs are disabled for this job.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 16 |
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
| #40447 | route_security | planned | security_sensitive | Quarantine exact security-sensitive ref to central OpenClaw security handling. |
| #45228 | keep_closed | skipped | superseded | Already closed; historical subagents-docs PR is superseded by current-main docs state. |
| #47558 | keep_closed | skipped | canonical | Historical canonical issue is already closed; no mutation allowed. |
| #47935 | keep_closed | skipped | superseded | Already closed; no closeout mutation is valid. |
| #49430 | route_security | planned | security_sensitive | Quarantine exact security-sensitive ref to central OpenClaw security handling. |
| #55549 | keep_closed | skipped | independent | Already closed independent PR; no mutation needed. |
| #56157 | route_security | planned | security_sensitive | Quarantine exact security-sensitive ref to central OpenClaw security handling. |
| #56163 | keep_closed | skipped | independent | Already closed independent PR; no mutation needed. |
| #56319 | keep_closed | skipped | superseded | Already closed unmergeable Telegram PR; keep the linked issue open outside this dedupe-only job. |
| #57308 | keep_closed | skipped | related | Already closed related PR; no mutation needed. |
| #57340 | keep_closed | skipped | related | Already closed related PR; no mutation needed. |
| #59658 | keep_closed | skipped | superseded | Representative is obsolete and closed; no mutation allowed. |
| #61374 | keep_closed | skipped | related | Already closed related PR; no mutation needed. |
| #67751 | keep_closed | skipped | related | Already closed related PR; no mutation needed. |
| #68365 | keep_closed | skipped | independent | Already closed independent PR; no mutation needed. |
| #56286 | keep_related | planned | related | Open related Telegram bug remains outside the subagents-docs dedupe closeout path. |

## Needs Human

- none
