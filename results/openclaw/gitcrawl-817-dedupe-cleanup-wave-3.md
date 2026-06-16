---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-817-dedupe-cleanup-wave-3"
mode: "autonomous"
run_id: "27610223974"
workflow_run_id: "27610223974"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27610223974"
head_sha: "aa9af7b43a4e7ef8014e3f9de64f82296378ea4c"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-16T10:16:39.473Z"
canonical: "https://github.com/openclaw/openclaw/issues/75380"
canonical_issue: "https://github.com/openclaw/openclaw/issues/75380"
canonical_pr: null
actions_total: 6
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-817-dedupe-cleanup-wave-3

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27610223974](https://github.com/openclaw/clownfish/actions/runs/27610223974)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/75380

## Summary

Hydrated preflight shows the only open actionable seed, #75380, is security-sensitive because it involves raw provider/cache diagnostic payloads, secret-bearing prompt/system content at rest, and the issue is already labeled for security review. The hydrated overlapping PR #76407 is also security-sensitive and has a security-boundary merge-risk label plus failing real-behavior-proof checks, so both open refs are routed to central OpenClaw security handling. Closed linked refs are retained only as historical context and no close, merge, label, fix, or PR-opening action is planned.

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
| #41676 | keep_closed | skipped | related | Already closed context ref; no mutation planned. |
| #58583 | keep_closed | skipped | related | Already closed context ref; no mutation planned. |
| #73655 | keep_closed | skipped | related | Already closed context ref; no mutation planned. |
| #74801 | keep_closed | skipped | related | Already closed context ref; no mutation planned. |
| #75380 | route_security | planned | security_sensitive | Open issue contains sensitive-data-at-rest/security-review signals; central OpenClaw security handling is required and ProjectClownfish must not close, comment, label, fix, or merge it. |
| #76407 | route_security | planned | security_sensitive | Open PR is explicitly security-sensitive in the preflight and has unresolved proof/security-boundary signals; route only this exact PR to central security handling. |

## Needs Human

- none
