---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-372-dedupe-cleanup-wave-2"
mode: "autonomous"
run_id: "27609384639"
workflow_run_id: "27609384639"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27609384639"
head_sha: "063b91b51477b9a3958bd940d26858d243770fdf"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-16T10:03:25.541Z"
canonical: null
canonical_issue: null
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

# gitcrawl-372-dedupe-cleanup-wave-2

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27609384639](https://github.com/openclaw/clownfish/actions/runs/27609384639)

Workflow conclusion: success

Worker result: planned

Canonical: unknown

## Summary

Routed #42461 and #73338 to central OpenClaw security handling. No close, merge, label, comment, or fix action is planned because deterministic validation classifies both hydrated refs as security-sensitive, and this job must not mutate or repair security-sensitive items.

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
| #42461 | route_security | planned | security_sensitive | Route the exact issue ref to central OpenClaw security handling; ProjectClownfish must not classify, close, or repair a validator-identified security-sensitive item. |
| #73338 | route_security | planned | security_sensitive | Route the exact pull request ref to central OpenClaw security handling; the prior related/candidate-fix classification is not validator-safe for a security-sensitive item. |

## Needs Human

- none
