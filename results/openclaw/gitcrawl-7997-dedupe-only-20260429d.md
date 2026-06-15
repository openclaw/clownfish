---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-7997-dedupe-only-20260429d"
mode: "autonomous"
run_id: "25143018418"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25143018418"
head_sha: "409422518ec79d91a76943837b4592abd04b8a86"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T04:05:51.330Z"
canonical: "https://github.com/openclaw/openclaw/issues/52238"
canonical_issue: "https://github.com/openclaw/openclaw/issues/52238"
canonical_pr: null
actions_total: 3
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-7997-dedupe-only-20260429d

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25143018418](https://github.com/openclaw/clownfish/actions/runs/25143018418)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/52238

## Summary

Kept #52238 as the live canonical non-security issue for the Feishu topic/OpenChat inbound routing bug. Routed #52342 to central security handling because the hydrated preflight marks it security-sensitive and review evidence describes possible DM-to-group policy/session misrouting. Kept #58537 related because it tracks a distinct outbound session-key mismatch. No close, merge, or fix PR actions are planned.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 3 |
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
| #52238 | keep_canonical | planned | canonical | #52238 remains the best live non-security canonical tracker for the inbound Feishu topic/OpenChat routing bug. |
| #52342 | route_security | planned | security_sensitive | Security-sensitive PR work is out of Clownfish mutation scope and should go to central OpenClaw security handling. |
| #58537 | keep_related | planned | related | #58537 is in the same Feishu OpenChat family but is a distinct outbound routing follow-up, not a duplicate of #52238. |

## Needs Human

- none
