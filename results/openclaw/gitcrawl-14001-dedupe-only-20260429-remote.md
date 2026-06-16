---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-14001-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "27585128425"
workflow_run_id: "27585128425"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27585128425"
head_sha: "029567b88e02d3fb42050a9ee72b98ee92930545"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-16T00:20:07.443Z"
canonical: "#59816"
canonical_issue: null
canonical_pr: "#59816"
actions_total: 26
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-14001-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27585128425](https://github.com/openclaw/clownfish/actions/runs/27585128425)

Workflow conclusion: success

Worker result: planned

Canonical: #59816

## Summary

Autonomous classification plan only. The hydrated preflight shows #59816 remains the best live canonical for the narrow Discord allowBots=mentions dropped-history gap, but it is not merge-ready and merge/fix actions are blocked by this job. No close actions are planned because most candidates are already closed, security-sensitive items are routed to central security handling, and the remaining open items are related or independent rather than duplicates of #59816.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 26 |
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
| #59816 | keep_canonical | planned | canonical | Best live canonical for this cluster's narrow root cause, but not merge-ready. |
| #20321 | route_security | planned | security_sensitive | Security-sensitive open item; quarantine this ref only and continue non-security classification. |
| #44502 | keep_related | planned | related | Same Discord mention-gating family, different root cause and product scope. |
| #51534 | keep_independent | planned | independent | Different user-visible behavior and implementation surface. |
| #52568 | keep_related | planned | related | Related Discord mention-gating area, but not a duplicate of the canonical PR. |
| #53467 | keep_related | planned | related | Related channel mention-filter work, but different provider and not mergeable in this cluster. |
| #8295 | keep_closed | skipped | superseded | Already closed; no close action is valid. |
| #23896 | keep_closed | skipped | superseded | Already closed; no close action is valid. |
| #38346 | route_security | planned | security_sensitive | Security-sensitive route-only item; quarantine this exact ref with no GitHub mutation. |
| #39661 | keep_closed | skipped | superseded | Already closed; no close action is valid. |
| #40530 | route_security | planned | security_sensitive | Security-sensitive route-only PR; quarantine this exact ref with no GitHub mutation. |
| #40895 | keep_closed | skipped | superseded | Already closed; no close action is valid. |
| #42222 | keep_closed | skipped | fixed_by_candidate | Already closed as covered on main; no close action is valid. |
| #43512 | route_security | planned | security_sensitive | Security-sensitive route-only PR; quarantine this exact ref with no GitHub mutation. |
| #43588 | route_security | planned | security_sensitive | Security-sensitive route-only PR; quarantine this exact ref with no GitHub mutation. |
| #45803 | keep_closed | skipped | independent | Already closed and independent from #59816's inbound history gap. |
| #48945 | keep_closed | skipped | superseded | Already closed Feishu thread policy PR; no close action is valid. |
| #49962 | route_security | planned | security_sensitive | Security-sensitive route-only PR; quarantine this exact ref with no GitHub mutation. |
| #54414 | keep_closed | skipped | superseded | Already closed Slack feature PR; no close action is valid. |
| #57229 | keep_closed | skipped | fixed_by_candidate | Already closed as implemented on main; no close action is valid. |
| #57464 | keep_closed | skipped | fixed_by_candidate | Already closed as implemented on main; no close action is valid. |
| #57476 | keep_closed | skipped | fixed_by_candidate | Already closed as implemented on main; no close action is valid. |
| #62066 | keep_closed | skipped | related | Already closed; no close action is valid. |
| #63148 | keep_closed | skipped | independent | Already closed and independent from the canonical root cause. |
| #63230 | keep_closed | skipped | superseded | Already closed; no close action is valid. |
| #68325 | keep_closed | skipped | superseded | Already closed; no close action is valid. |

## Needs Human

- none
