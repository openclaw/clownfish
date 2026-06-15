---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-139-bulk-plan-20260615-a"
mode: "plan"
run_id: "27520794166"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27520794166"
head_sha: "872a0ab6af9f5f189014062d7bd0a2367b003dde"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T02:47:39.893Z"
canonical: null
canonical_issue: null
canonical_pr: null
actions_total: 4
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 1
---

# gitcrawl-139-bulk-plan-20260615-a

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27520794166](https://github.com/openclaw/clownfish/actions/runs/27520794166)

Workflow conclusion: success

Worker result: planned

Canonical: unknown

## Summary

Plan-only classification from the hydrated preflight artifact. #87828 is explicitly security-sensitive and should be routed to central security handling only. The remaining non-security work splits into two root-cause families: #87730 for source-checkout bundled legacy-root stale refresh behavior, and #89606 for policy-refresh loss of path/npm plugins. #89882 is related to #89606 but needs maintainer judgment before any merge path because the job blocks merge/fix actions and the PR is broad despite passing checks.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 4 |
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
| #87730 | keep_canonical | planned | canonical | Keep as the non-security canonical issue for the source-overlay stale refresh family. |
| #87828 | route_security | planned | security_sensitive | Security-sensitive item is out of ProjectClownfish backlog-cleanup scope and must go to central OpenClaw security handling. |
| #89606 | keep_canonical | planned | canonical | Keep as the canonical issue for the policy-refresh path/npm plugin disappearance family. |
| #89882 | needs_human | planned | related | Specific maintainer decision needed on whether the broad #89882 implementation is acceptable for #89606 before any future merge or closeout path. |

## Needs Human

- #89882 requires maintainer review for broad_code_delta before any merge or fixed-by-candidate closeout path.
