---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-238796-dedupe-only-20260429b"
mode: "autonomous"
run_id: "25107656258"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25107656258"
head_sha: "904a86eec936498f7b09cd1b845053509b2c784e"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T04:57:52.629Z"
canonical: "https://github.com/openclaw/openclaw/pull/39551"
canonical_issue: null
canonical_pr: "https://github.com/openclaw/openclaw/pull/39551"
actions_total: 9
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-238796-dedupe-only-20260429b

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25107656258](https://github.com/openclaw/clownfish/actions/runs/25107656258)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/39551

## Summary

Closed representative #41255 is obsolete. #39551 is the best live canonical contributor branch for the sessions_send sessionKey-first fix. #74009 has hydrated security-sensitive review evidence and is routed to central security handling; other open linked issues remain related validation/context, and already-closed refs receive no close actions.

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
| #39551 | keep_canonical | planned | canonical | #41255 is closed; #39551 is the live maintained canonical PR for the same sessions_send mixed-selector behavior. |
| #41199 | keep_related | planned | related | Related umbrella issue with remaining non-sessions_send scope; not safe to close as a duplicate of #39551. |
| #41255 | keep_closed | skipped | superseded | Already closed; closed refs must not receive close actions. |
| #56193 | keep_closed | skipped | related | Closed historical linked context only. |
| #56203 | keep_closed | skipped | superseded | Already closed; no further close action is valid. |
| #59324 | keep_closed | skipped | superseded | Already closed; keep as credited historical source context. |
| #64699 | keep_related | planned | related | Related validation issue for the canonical PR; not safe to close before the canonical fix lands. |
| #64846 | keep_closed | skipped | superseded | Already closed; no further close action is valid. |
| #74009 | route_security | planned | security_sensitive | Security-sensitive review evidence requires central OpenClaw security handling for this exact PR. |

## Needs Human

- none
