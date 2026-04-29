---
repo: "openclaw/openclaw"
cluster_id: "ghcrawl-156675-autonomous-smoke"
mode: "autonomous"
run_id: "25101875795"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25101875795"
head_sha: "d9e3c14fa23a71b76a4116e7b20f27399c6b4825"
workflow_conclusion: "success"
result_status: "blocked"
published_at: "2026-04-29T09:59:08.648Z"
canonical: "https://github.com/openclaw/openclaw/pull/73925"
canonical_issue: null
canonical_pr: "https://github.com/openclaw/openclaw/pull/73925"
actions_total: 6
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# ghcrawl-156675-autonomous-smoke

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25101875795](https://github.com/openclaw/clownfish/actions/runs/25101875795)

Workflow conclusion: success

Worker result: blocked

Canonical: https://github.com/openclaw/openclaw/pull/73925

## Summary

The original five cluster PRs are already closed in the hydrated live state. The only open replacement/canonical candidate is #73925, but hydrated Aisle, Greptile, and ClawSweeper review evidence contains an unresolved security-shaped pre-auth DoS finding, so Clownfish must route that exact PR to central security handling and must not merge, close, or repair it in this run.

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
| #48950 | keep_closed | skipped | related | Already closed in live hydrated state; no mutation is valid. |
| #49751 | keep_closed | skipped | superseded | Already closed and superseded by the hydrated replacement candidate #73925; no further action on the closed source PR. |
| #51172 | keep_closed | skipped | related | Already closed and only related to the current handshake/auth-watchdog candidate. |
| #52142 | keep_closed | skipped | superseded | Already closed as superseded/obsolete; no mutation is valid. |
| #62060 | keep_closed | skipped | superseded | Already closed as landed via maintainer-side replacement; no mutation is valid. |
| #73925 | route_security | planned | security_sensitive | Security-sensitive review evidence blocks autonomous Clownfish repair/merge and requires central OpenClaw security handling for #73925 only. |

## Needs Human

- none
