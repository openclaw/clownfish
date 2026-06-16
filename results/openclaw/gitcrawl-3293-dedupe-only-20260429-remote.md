---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-3293-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "27599300982"
workflow_run_id: "27599300982"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27599300982"
head_sha: "3793d73ce55606bb6b35576f7153086ef86c44dd"
workflow_conclusion: "success"
result_status: "needs_human"
published_at: "2026-06-16T06:48:18.538Z"
canonical: "https://github.com/openclaw/openclaw/issues/58537"
canonical_issue: "https://github.com/openclaw/openclaw/issues/58537"
canonical_pr: null
actions_total: 10
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 1
---

# gitcrawl-3293-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27599300982](https://github.com/openclaw/clownfish/actions/runs/27599300982)

Workflow conclusion: success

Worker result: needs_human

Canonical: https://github.com/openclaw/openclaw/issues/58537

## Summary

Hydrated state shows the hinted canonical #58537 is now closed by stale automation, so no close/comment/label mutation is safe for that target. The deterministic validator identifies #34528 as security-sensitive, so it is routed to central security handling along with security-sensitive #52342. No open non-security same-root target remains for this dedupe-only, no-fix job.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 10 |
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
| #58537 | keep_closed | skipped | canonical | Already closed items must not receive close actions; keep #58537 as the historical canonical and escalate only the reopen/follow-up decision. |
| #34528 | route_security | planned | security_sensitive | Validator-identified security-sensitive issue must be routed to central OpenClaw security handling only. |
| #52342 | route_security | planned | security_sensitive | Security-sensitive linked PR must be routed to central OpenClaw security handling only. |
| #58314 | keep_closed | skipped | related | Closed context ref; evidence only. |
| #59009 | keep_closed | skipped | related | Closed context ref; evidence only. |
| #31652 | keep_closed | skipped | independent | Closed linked ref with independent scope. |
| #33948 | keep_closed | skipped | independent | Closed linked ref with independent scope. |
| #52787 | keep_closed | skipped | independent | Closed linked ref with independent scope. |
| #58287 | keep_closed | skipped | independent | Closed linked ref with independent scope. |
| cluster:gitcrawl-3293-dedupe-only-20260429-remote | needs_human | planned | needs_human | The canonical issue changed materially from open to closed after job generation, and the allowed action set cannot create or repair the canonical path. |

## Needs Human

- Decide whether to reopen #58537 or seed a new follow-up cluster for the Feishu OpenChat `oc_` duplicate direct/group session bug; this run cannot fix or raise a PR and no open same-root non-security canonical remains.
