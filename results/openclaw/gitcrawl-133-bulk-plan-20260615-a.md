---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-133-bulk-plan-20260615-a"
mode: "plan"
run_id: "27520790826"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27520790826"
head_sha: "872a0ab6af9f5f189014062d7bd0a2367b003dde"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T02:47:39.891Z"
canonical: "#90267"
canonical_issue: "#90213"
canonical_pr: "#90267"
actions_total: 5
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-133-bulk-plan-20260615-a

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27520790826](https://github.com/openclaw/clownfish/actions/runs/27520790826)

Workflow conclusion: success

Worker result: planned

Canonical: #90267

## Summary

Plan keeps #90267 as the live canonical PR for the narrow plugin install-index migration fix, keeps the broader related issues open, recommends superseding the weaker overlapping PR #90252, and routes #90474 to central security handling per the job security-signal override.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 5 |
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
| #90267 | keep_canonical | planned | canonical | Best live canonical PR for the narrow non-security plugin install-index conflict-warning fix. |
| #90252 | close_superseded | planned | superseded | Overlapping contributor PR is superseded by the narrower live canonical PR and has a failing proof gate. |
| #90213 | keep_related | planned | related | Related umbrella issue should stay open because it carries broader non-plugin-index reproductions. |
| #90418 | keep_related | planned | related | Related issue with unique reproduction/platform/plugin details; keep open rather than closing as duplicate. |
| #90474 | route_security | planned | security_sensitive | Job-scoped security signal requires central security routing for this exact item. |

## Needs Human

- none
