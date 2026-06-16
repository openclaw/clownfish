---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-14003-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "27585128453"
workflow_run_id: "27585128453"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27585128453"
head_sha: "029567b88e02d3fb42050a9ee72b98ee92930545"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-16T00:20:07.460Z"
canonical: null
canonical_issue: null
canonical_pr: null
actions_total: 23
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-14003-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27585128453](https://github.com/openclaw/clownfish/actions/runs/27585128453)

Workflow conclusion: success

Worker result: planned

Canonical: unknown

## Summary

Autonomous classification only. The original representative #61807 is now closed, and the only currently open job candidates are #62157 and #63015. Both are related media/reply-delivery work but not duplicates of each other or of the closed Feishu thumbnail representative, so no close/merge/fix action is recommended. Security-shaped refs are scoped to route_security only.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 23 |
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
| #38661 | keep_closed | skipped | superseded | Already closed; historical evidence only. |
| #42294 | keep_closed | skipped | superseded | Already closed; no mutation. |
| #44281 | keep_closed | skipped | superseded | Already closed; historical context only. |
| #44391 | route_security | planned | security_sensitive | Quarantine exact security-sensitive ref only. |
| #47562 | keep_closed | skipped | related | Already closed; related cluster noise only. |
| #49967 | route_security | planned | security_sensitive | Route exact security-sensitive item; do not dedupe-close through Clownfish. |
| #50164 | keep_closed | skipped | related | Already closed. |
| #50399 | route_security | planned | security_sensitive | Quarantine exact ref. |
| #52192 | keep_closed | skipped | related | Already closed. |
| #53784 | route_security | planned | security_sensitive | Route exact security-sensitive ref. |
| #57298 | keep_closed | skipped | related | Already closed. |
| #59752 | keep_closed | skipped | related | Already closed. |
| #59801 | route_security | planned | security_sensitive | Route exact security-sensitive ref. |
| #61545 | keep_closed | skipped | related | Already closed. |
| #61807 | keep_closed | skipped | canonical | Former representative is closed and cannot receive a close/merge action. |
| #62157 | keep_related | planned | related | Related reply-delivery bug, but not a duplicate of the closed Feishu thumbnail representative and not merge-ready. |
| #63015 | keep_related | planned | related | Related media attachment delivery bug, but distinct from #62157 and #61807; keep open for normal review rather than dedupe-close. |
| #65541 | route_security | planned | security_sensitive | Route exact security-sensitive item to central handling; no close, merge, label, comment, or fix action. |
| #66117 | keep_closed | skipped | related | Already closed. |
| #67652 | keep_closed | skipped | related | Already closed. |
| #68316 | keep_closed | skipped | superseded | Already closed; relevant historical context for #62157 only. |
| #68446 | route_security | planned | security_sensitive | Route exact security-sensitive item to central handling. |
| #71141 | keep_closed | skipped | related | Already closed. |

## Needs Human

- none
