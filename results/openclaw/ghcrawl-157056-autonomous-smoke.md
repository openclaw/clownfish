---
repo: "openclaw/openclaw"
cluster_id: "ghcrawl-157056-autonomous-smoke"
mode: "autonomous"
run_id: "27598134284"
workflow_run_id: "27598134284"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27598134284"
head_sha: "3456041b23c90140b1b609eea90480f39847d880"
workflow_conclusion: "success"
result_status: "blocked"
published_at: "2026-06-16T06:19:29.390Z"
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

# ghcrawl-157056-autonomous-smoke

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27598134284](https://github.com/openclaw/clownfish/actions/runs/27598134284)

Workflow conclusion: success

Worker result: blocked

Canonical: unknown

## Summary

Hydrated preflight shows both cluster PRs are already closed. #42861 is historical/superseded context only. #49044 is explicitly security-sensitive and must be routed to central security handling rather than used for closure, merge, or fix automation. No executable fix artifact is safe from this run because the provided target checkout is not a usable OpenClaw source checkout and the remaining per-account SOUL feature spans broad config, CLI, onboarding, bootstrap/runtime, docs, and tests work.

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
| #42861 | keep_closed | skipped | superseded | Already closed; retain as historical superseded context only. |
| #49044 | route_security | planned | security_sensitive | Exact security-sensitive ref is routed to central OpenClaw security handling; unrelated closed historical context remains non-mutating. |
| cluster:ghcrawl-157056-autonomous-smoke | needs_human | blocked | needs_human | Implementation is blocked for this run. A maintainer should rehydrate with a usable OpenClaw target checkout and split the per-account SOUL feature into narrower non-security follow-up work before Clownfish opens a fix PR. |

## Needs Human

- Implementation only: rehydrate this cluster with a usable openclaw/openclaw target checkout, then split the broad per-account SOUL feature into narrower fix jobs or provide explicit maintainer calibration for the intended scope. Do not reuse #49044 through Clownfish because it is security-sensitive in the hydrated artifact.
