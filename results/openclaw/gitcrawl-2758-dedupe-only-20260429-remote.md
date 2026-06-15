---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-2758-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "25134527723"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25134527723"
head_sha: "b9f5ebae325b39171f8129a731bbca8bf5b88966"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T04:57:53.002Z"
canonical: "https://github.com/openclaw/openclaw/issues/52662"
canonical_issue: "https://github.com/openclaw/openclaw/issues/52662"
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

# gitcrawl-2758-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25134527723](https://github.com/openclaw/clownfish/actions/runs/25134527723)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/52662

## Summary

Classified the live open candidates from the hydrated preflight artifact. The closed representative #41437 is obsolete as a canonical PR; #52662 is the best surviving open canonical issue for the non-Docker sandbox-browser endpoint gap. #64383 is related but distinct and should remain open. The linked security-sensitive PR #41320 is quarantined for central security triage only. No close, merge, or fix-PR actions are planned.

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
| #52662 | keep_canonical | planned | canonical | Best open canonical for the non-Docker sandbox-browser endpoint gap; keep open for maintainer follow-up. |
| #64383 | keep_related | planned | related | Related architecture tracker with unique remaining maintainer decision; keep open rather than close as duplicate. |
| #41320 | route_security | planned | security_sensitive | Security-sensitive linked PR must be routed to central OpenClaw security handling only. |

## Needs Human

- none
