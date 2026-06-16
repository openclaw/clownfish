---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-295-dedupe-cleanup-wave-2"
mode: "autonomous"
run_id: "27609384584"
workflow_run_id: "27609384584"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27609384584"
head_sha: "063b91b51477b9a3958bd940d26858d243770fdf"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-16T10:01:21.134Z"
canonical: "https://github.com/openclaw/openclaw/issues/46520"
canonical_issue: "https://github.com/openclaw/openclaw/issues/46520"
canonical_pr: null
actions_total: 5
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-295-dedupe-cleanup-wave-2

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27609384584](https://github.com/openclaw/clownfish/actions/runs/27609384584)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/46520

## Summary

Hydrated preflight marks #46520 and #38290 as security-sensitive, and deterministic validation also requires #73511 to use security routing because the hydrated PR carries security-boundary signal. Those exact refs are routed to central OpenClaw security handling with no close/comment/label/merge/fix mutation. Current main at 55c047e77e70a7d414d6fe8cad55ecf978ebbcf2 still normalizes browser Origin with URL.origin, so the underlying custom-scheme allowlist bug remains real, but this job disallows merge, fix, and raise_pr. Closed linked PRs are historical evidence only.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 5 |
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
| #46520 | route_security | planned | security_sensitive | Security-sensitive issue is out of scope for Clownfish backlog cleanup; route the exact ref without closing or commenting. |
| #38290 | route_security | planned | security_sensitive | Security-sensitive open PR is routed to central security handling only; existing-overlap context must not be closed or merged in this job. |
| #73511 | route_security | planned | security_sensitive | Security-boundary PR is out of scope for this backlog cleanup run; route the exact ref without closing, commenting, merging, or planning a fix. |
| #46523 | keep_closed | skipped | superseded | Already-closed PR must not receive a close action. |
| #46555 | keep_closed | skipped | superseded | Already-closed PR must not receive a close action. |

## Needs Human

- none
