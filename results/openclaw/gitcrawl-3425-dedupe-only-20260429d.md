---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-3425-dedupe-only-20260429d"
mode: "autonomous"
run_id: "25142577313"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25142577313"
head_sha: "635e49e8d0f5f1f39d5a829d2a709a0e61ee5f73"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-04-30T01:29:02.310Z"
canonical: "https://github.com/openclaw/openclaw/issues/65168"
canonical_issue: "https://github.com/openclaw/openclaw/issues/65168"
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

# gitcrawl-3425-dedupe-only-20260429d

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25142577313](https://github.com/openclaw/clownfish/actions/runs/25142577313)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/65168

## Summary

Hydrated refs #65168 and #65169 are open and tightly linked, with #65168 as the canonical family ref. The hydrated issue and PR bodies frame the report as a security-specific approval-boundary bypass, so both refs are routed to central OpenClaw security handling. No close, comment, label, merge, fix, or replacement PR action is planned.

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
| #65168 | route_security | planned | security_sensitive | Security-sensitive approval-boundary claim must be handled by central OpenClaw security triage, not dedupe cleanup. |
| #65169 | route_security | planned | security_sensitive | The PR is the implementation candidate for the security-shaped report and must be routed with the issue rather than merged, closed, or repaired by Clownfish cleanup. |

## Needs Human

- none
