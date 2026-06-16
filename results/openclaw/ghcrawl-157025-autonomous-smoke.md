---
repo: "openclaw/openclaw"
cluster_id: "ghcrawl-157025-autonomous-smoke"
mode: "autonomous"
run_id: "27598132882"
workflow_run_id: "27598132882"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27598132882"
head_sha: "3456041b23c90140b1b609eea90480f39847d880"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-16T06:19:29.373Z"
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
needs_human_count: 0
---

# ghcrawl-157025-autonomous-smoke

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27598132882](https://github.com/openclaw/clownfish/actions/runs/27598132882)

Workflow conclusion: success

Worker result: planned

Canonical: unknown

## Summary

Hydrated preflight shows both candidate PRs are already closed, unmerged, dirty, and marked security-sensitive, so no close or merge action is valid. The exact PR refs are routed to central security handling, closed context refs remain historical evidence, and a separate narrow non-security CLI fix artifact is planned because current main still emits only generic config-set success messages for model-related paths.

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
| execute_fix | skipped |  |  | fix artifact source PR #41268 is security-sensitive |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #20522 | keep_closed | skipped | related | Closed historical context only; no mutation planned. |
| #41268 | route_security | planned | security_sensitive | Exact security-sensitive ref must be quarantined to central OpenClaw security handling; no comment, close, label, merge, or branch mutation is planned for this PR. |
| #41270 | keep_closed | skipped | related | Closed historical context only; no mutation planned. |
| #47318 | route_security | planned | security_sensitive | Exact security-sensitive ref must be quarantined to central OpenClaw security handling; no comment, close, label, merge, or branch mutation is planned for this PR. |
| cluster:ghcrawl-157025-autonomous-smoke | fix_needed | planned |  | No viable canonical PR remains: both candidate PRs are closed, unmergeable, uneditable by maintainers, and security-routed as exact refs. The ordinary CLI/DX gap remains narrow enough for a credited replacement fix artifact. |
| cluster:ghcrawl-157025-autonomous-smoke | build_fix_artifact | planned |  | Fix PR creation is allowed by job frontmatter and can be scoped to the CLI config mutation path plus focused tests. |

## Needs Human

- none
