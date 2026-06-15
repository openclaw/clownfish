---
repo: "openclaw/openclaw"
cluster_id: "pr-inventory-mixed-20260615T0529-034"
mode: "plan"
run_id: "27526368071"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27526368071"
head_sha: "575573c3a749b924aa260c57f419b6ec1b610ff8"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T05:44:15.351Z"
canonical: null
canonical_issue: null
canonical_pr: null
actions_total: 10
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# pr-inventory-mixed-20260615T0529-034

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27526368071](https://github.com/openclaw/clownfish/actions/runs/27526368071)

Workflow conclusion: success

Worker result: planned

Canonical: unknown

## Summary

Plan-mode PR inventory classification for 10 listed open PRs. Security-sensitive PRs are routed to central security handling; non-security PRs are classified conservatively. One clear superseded maintainer replacement PR is planned for closeout because a hydrated merged PR already landed the same fix.

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
| #86561 | route_security | planned | security_sensitive | Security-sensitive channel/tool boundary work is out of scope for Clownfish backlog cleanup. |
| #86749 | route_security | planned | security_sensitive | Sandbox image/global PATH changes were preflight-classified as security-sensitive. |
| #86554 | keep_related | planned | related | Same fix family as #86551/#86521, but no safe closeout in this inventory plan. |
| #86873 | keep_independent | planned | independent | Independent ready-for-maintainer PR; no close, merge, or fix action is allowed in this plan. |
| #86608 | keep_independent | planned | independent | Independent docs/config PR with maintainer-review and rebase gates; no inventory closeout is justified. |
| #86062 | keep_independent | planned | independent | Useful focused PR with proof, but maintainer review remains the next gate and merge is not allowed. |
| #85878 | close_superseded | planned | superseded | A hydrated merged PR already landed the same narrow fix, making the open replacement branch superseded. |
| #85793 | keep_independent | planned | independent | Independent docs PR with proof/rebase gates; no duplicate or superseded closeout is established. |
| #85745 | keep_related | planned | related | Related to overlapping Discord/gateway PRs, but it has a distinct timeout scope and is not safe to close as duplicate. |
| #85727 | keep_independent | planned | low_signal | Low-signal closure is disabled, so this stays as a non-mutating low-signal classification. |

## Needs Human

- none
