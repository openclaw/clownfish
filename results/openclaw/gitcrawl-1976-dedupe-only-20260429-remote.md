---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-1976-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "27595848920"
workflow_run_id: "27595848920"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27595848920"
head_sha: "7a8b7ab269d4c8246a3837f1013f6d9715d17c5e"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-16T05:26:37.838Z"
canonical: null
canonical_issue: null
canonical_pr: null
actions_total: 3
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 1
---

# gitcrawl-1976-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27595848920](https://github.com/openclaw/clownfish/actions/runs/27595848920)

Workflow conclusion: success

Worker result: planned

Canonical: unknown

## Summary

Deterministic validation classifies the hydrated open targets #58822, #58823, and #72984 as security-sensitive for this run. ProjectClownfish must not close, merge, label, comment on, or select a canonical closeout path for those refs. The narrow repair is to quarantine each exact issue/PR ref with route_security and leave the dedupe/fixed-by-candidate closeout unplanned until central OpenClaw security triage clears or redirects the items.

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
| #58823 | route_security | planned | security_sensitive | Security-sensitive PR requires central OpenClaw security handling before any ProjectClownfish dedupe or closeout decision. |
| #58822 | route_security | planned | security_sensitive | Security-sensitive issue cannot be closed as fixed by #58823 until central OpenClaw security triage clears the item. |
| #72984 | route_security | planned | security_sensitive | Security-sensitive related PR requires central OpenClaw security handling before ProjectClownfish classification continues. |

## Needs Human

- Central OpenClaw security triage must decide whether #58822, #58823, and #72984 are cleared for ordinary ProjectClownfish dedupe/closeout or should remain outside this workflow.
