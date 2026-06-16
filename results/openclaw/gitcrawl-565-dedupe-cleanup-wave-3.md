---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-565-dedupe-cleanup-wave-3"
mode: "autonomous"
run_id: "27610221790"
workflow_run_id: "27610221790"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27610221790"
head_sha: "aa9af7b43a4e7ef8014e3f9de64f82296378ea4c"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-16T10:16:39.447Z"
canonical: "https://github.com/openclaw/openclaw/issues/91475"
canonical_issue: "https://github.com/openclaw/openclaw/issues/91475"
canonical_pr: null
actions_total: 2
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-565-dedupe-cleanup-wave-3

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27610221790](https://github.com/openclaw/clownfish/actions/runs/27610221790)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/91475

## Summary

Kept #91475 as the open canonical tracker for the ultracode claude-cli config request. Routed linked PR #91476 to central security handling because the hydrated artifact marks it security-sensitive and its dependency graph/security-boundary gates are active. No close, merge, or fix PR actions are planned because there is no duplicate target and this job forbids merge/fix/raise_pr.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 2 |
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
| #91475 | keep_canonical | planned | canonical | #91475 remains the best live canonical issue. There is no duplicate to close, and the linked PR cannot be used for merge or fixed-by-candidate closeout in this job. |
| #91476 | route_security | planned | security_sensitive | #91476 has explicit security-sensitive and dependency-graph signals, so it must be routed to central OpenClaw security handling without close, merge, label, comment, or fix action from Clownfish. |

## Needs Human

- none
