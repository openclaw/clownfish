---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-278-bulk-plan-20260615-a"
mode: "plan"
run_id: "27520879440"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27520879440"
head_sha: "872a0ab6af9f5f189014062d7bd0a2367b003dde"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T02:47:39.932Z"
canonical: "#91784"
canonical_issue: null
canonical_pr: "#91784"
actions_total: 4
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-278-bulk-plan-20260615-a

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27520879440](https://github.com/openclaw/clownfish/actions/runs/27520879440)

Workflow conclusion: success

Worker result: planned

Canonical: #91784

## Summary

Plan-mode classification only. Security-sensitive #79918 and linked #79575 are quarantined to central security handling. Among the non-security route-boundary PRs, #91784 is the best live canonical candidate because it covers the same realtime WebSocket path-boundary root cause as #79919, includes the root stream-path regression coverage that #79919's Codex review identified as a blocker, has maintainer re-review activity, has sufficient proof, and has passing checks. No close, merge, label, comment, fix, or PR-raising action is executed or planned as executable mutation in this result.

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
| #79575 | route_security | planned | security_sensitive | Security-sensitive linked ref is out of ProjectClownfish cleanup scope and should be routed to central OpenClaw security handling. |
| #79918 | route_security | planned | security_sensitive | The issue contains an explicit security-sensitive boundary claim and labels; it must be quarantined rather than closed or deduped by ProjectClownfish. |
| #91784 | keep_canonical | planned | canonical | #91784 is the clearest surviving non-security canonical PR for the shared route-boundary fix and addresses the root-path regression proof gap present in #79919. |
| #79919 | close_superseded | planned | superseded | #79919 is useful contributor work but is superseded by the newer canonical #91784, which incorporates the same fix direction and resolves the known root-path regression coverage gap. |

## Needs Human

- none
