---
repo: "openclaw/openclaw"
cluster_id: "pr-inventory-mixed-20260615T0529-027"
mode: "plan"
run_id: "27526359183"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27526359183"
head_sha: "575573c3a749b924aa260c57f419b6ec1b610ff8"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T05:44:15.323Z"
canonical: null
canonical_issue: null
canonical_pr: null
actions_total: 11
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 2
---

# pr-inventory-mixed-20260615T0529-027

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27526359183](https://github.com/openclaw/clownfish/actions/runs/27526359183)

Workflow conclusion: success

Worker result: planned

Canonical: unknown

## Summary

Plan-mode PR inventory classification only. No GitHub mutations, merges, or fix PRs are recommended. Security-sensitive open refs are routed to central security handling; already-closed PRs are kept closed; remaining open PRs are kept open for their existing review/proof paths.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 11 |
| Fix executed | 0 |
| Fix failed | 0 |
| Fix blocked | 0 |
| Applied executions | 0 |
| Apply blocked | 0 |
| Apply skipped | 0 |
| Needs human | 2 |

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
| #81154 | keep_independent | planned | independent |  |
| #84703 | keep_closed | skipped | fixed_by_candidate |  |
| #84479 | route_security | planned | security_sensitive |  |
| #85176 | keep_closed | skipped | fixed_by_candidate |  |
| #85183 | keep_related | planned | related |  |
| #85229 | needs_human | planned | needs_human | Maintainer/product judgment is required on the host mutation policy approach before any close or merge-style recommendation. |
| #85235 | keep_independent | planned | independent |  |
| #85241 | needs_human | planned | needs_human | Specific maintainer decision needed on whether to override the real-behavior proof gate. |
| #85292 | keep_independent | planned | independent |  |
| #85317 | route_security | planned | security_sensitive |  |
| #85359 | route_security | planned | security_sensitive |  |

## Needs Human

- #85229 needs maintainer/product judgment on whether the host mutation deny-policy approach is acceptable given review concerns about exec/Codex bypass paths.
- #85241 needs maintainer decision on the author's requested real-behavior proof override.
