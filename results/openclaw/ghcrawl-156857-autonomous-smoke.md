---
repo: "openclaw/openclaw"
cluster_id: "ghcrawl-156857-autonomous-smoke"
mode: "autonomous"
run_id: "27585280132"
workflow_run_id: "27585280132"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27585280132"
head_sha: "5f250e096d9257d26e2a256c906e3b3aec75044a"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-16T00:25:19.300Z"
canonical: "https://github.com/openclaw/openclaw/issues/51620"
canonical_issue: "https://github.com/openclaw/openclaw/issues/51620"
canonical_pr: "https://github.com/openclaw/openclaw/pull/82572"
actions_total: 8
fix_executed: 0
fix_failed: 0
fix_blocked: 1
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# ghcrawl-156857-autonomous-smoke

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27585280132](https://github.com/openclaw/clownfish/actions/runs/27585280132)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/51620

## Summary

The original representative #51803 is closed and security-sensitive, so the live canonical path is open issue #51620 plus repairable PR #82572. Security-sensitive refs are routed item-by-item, including #51623, #51803, #52234, and #63330. Non-security repair remains scoped to #82572.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 8 |
| Fix executed | 0 |
| Fix failed | 0 |
| Fix blocked | 1 |
| Applied executions | 0 |
| Apply blocked | 0 |
| Apply skipped | 0 |
| Needs human | 0 |

## Fix Execution Actions

| Action | Status | Target | Branch | Reason |
| --- | --- | --- | --- | --- |
| execute_fix | blocked |  |  | fix artifact is too broad for autonomous execution; split into narrower jobs or explicitly set CLOWNFISH_ALLOW_BROAD_FIX_ARTIFACTS=1 |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #51620 | keep_canonical | planned | canonical | #51620 is the best open canonical issue for the restart/durable queue root cause while #82572 owns the current repair path. |
| #51623 | route_security | planned | security_sensitive | Security-sensitive item is out of ProjectClownfish cleanup scope and must be quarantined to central OpenClaw security handling. |
| #51803 | route_security | planned | security_sensitive | Security-sensitive item is out of ProjectClownfish cleanup scope and must be quarantined to central OpenClaw security handling. |
| #52234 | route_security | planned | security_sensitive | Security-sensitive item is out of ProjectClownfish cleanup scope and must be quarantined to central OpenClaw security handling. |
| #63330 | route_security | planned | security_sensitive | Open security-sensitive linked PR must be routed to central OpenClaw security handling without ProjectClownfish mutation. |
| #63637 | keep_closed | skipped | related | Already closed related context; no mutation planned. |
| #82572 | fix_needed | planned | canonical | Useful canonical contributor PR is not merge-ready; repair the existing branch rather than merge or close around it. |
| cluster:ghcrawl-156857-autonomous-smoke | build_fix_artifact | planned |  | Create an executable repair artifact for the canonical contributor PR. |

## Needs Human

- none
