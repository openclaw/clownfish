---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-14015-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "27585128633"
workflow_run_id: "27585128633"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27585128633"
head_sha: "029567b88e02d3fb42050a9ee72b98ee92930545"
workflow_conclusion: "success"
result_status: "needs_human"
published_at: "2026-06-16T00:20:07.470Z"
canonical: null
canonical_issue: null
canonical_pr: null
actions_total: 14
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 1
---

# gitcrawl-14015-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27585128633](https://github.com/openclaw/clownfish/actions/runs/27585128633)

Workflow conclusion: success

Worker result: needs_human

Canonical: unknown

## Summary

Plan-only autonomous classification from the hydrated preflight artifact plus deterministic validation repair. The original representative #55886 is now closed, most listed candidates are already closed, #55487 and #70676 must be routed as security-sensitive, and no open non-security candidate is a safe replacement canonical for the Telegram sendChatAction family.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 14 |
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
| #40067 | keep_closed | skipped | superseded | Already closed; no mutation planned. |
| #42962 | keep_closed | skipped | superseded | Already closed; no mutation planned. |
| #48908 | keep_closed | skipped | related | Already closed; no mutation planned. |
| #54526 | keep_closed | skipped | fixed_by_candidate | Already closed; no mutation planned. |
| #55487 | route_security | planned | security_sensitive | Security-sensitive item is out of scope for ProjectClownfish mutation. |
| #55886 | keep_closed | skipped | superseded | Original representative is obsolete and already closed. |
| #60137 | keep_closed | skipped | related | Already closed; no mutation planned. |
| #60576 | keep_closed | skipped | superseded | Already closed; no mutation planned. |
| #63780 | keep_closed | skipped | related | Already closed; no mutation planned. |
| #66342 | keep_closed | skipped | fixed_by_candidate | Already closed; no mutation planned. |
| #67672 | keep_closed | skipped | fixed_by_candidate | Already closed; no mutation planned. |
| #70676 | route_security | planned | security_sensitive | Security-sensitive item is out of scope for ProjectClownfish mutation. |
| #71086 | keep_closed | skipped | superseded | Already closed; no mutation planned. |
| cluster:gitcrawl-14015-dedupe-only-20260429-remote | needs_human | planned | needs_human | Maintainer judgment is needed to select a new non-security canonical family, split this broad transient-provider cluster, or handle the routed security-sensitive refs through central security workflow before any future duplicate closeout. |

## Needs Human

- Select or split the live canonical for the non-security remainder: #55886 is closed, #55487 and #70676 are routed to security, and the remaining listed candidates are already closed historical context.
