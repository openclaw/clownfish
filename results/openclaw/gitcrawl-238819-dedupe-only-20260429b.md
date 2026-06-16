---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-238819-dedupe-only-20260429b"
mode: "autonomous"
run_id: "27590650074"
workflow_run_id: "27590650074"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27590650074"
head_sha: "159a259d79f651da526767c13ba1f27b40151479"
workflow_conclusion: "failure"
result_status: "planned"
published_at: "2026-06-16T10:04:56.986Z"
canonical: null
canonical_issue: null
canonical_pr: null
actions_total: 6
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 1
---

# gitcrawl-238819-dedupe-only-20260429b

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27590650074](https://github.com/openclaw/clownfish/actions/runs/27590650074)

Workflow conclusion: failure

Worker result: planned

Canonical: unknown

## Summary

No GitHub mutations planned. The original representative #67544 is already closed. The hydrated linked issue #90158 is quarantined for central OpenClaw security triage because deterministic validation marked it security-sensitive. The open job refs #56284, #63491, and #68493 overlap the Windows restart family but each carries distinct unresolved scope, so they should remain open as related follow-up issues rather than be dedupe-closed.

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
| #90158 | route_security | planned | security_sensitive | Quarantine exact security-sensitive issue ref for central OpenClaw security triage; do not classify it as canonical in ProjectClownfish cleanup. |
| #56284 | keep_related | planned | related | Related unresolved Windows restart behavior with distinct active-task drain and session-state scope; not safe to close as a duplicate. |
| #63491 | keep_related | planned | related | Related, but not a true duplicate because it combines restart-health, probe, and session-state symptoms that need separate maintainer follow-up. |
| #68493 | keep_related | planned | related | Related Windows restart recovery issue with a distinct hot-reload/config-edit and port rebind failure mode; not safe to dedupe-close. |
| #67544 | keep_closed | skipped | fixed_by_candidate | Historical representative is already closed as implemented; retain as evidence only. |
| #67416 | keep_closed | skipped | fixed_by_candidate | Already closed as implemented by the Windows SIGUSR1 restart fix; retain as evidence only. |

## Needs Human

- #90158 was routed to central OpenClaw security handling after deterministic validation marked it security-sensitive; ProjectClownfish should not choose it as a dedupe canonical until security triage clears the item or provides an override.
