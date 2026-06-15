---
repo: "openclaw/openclaw"
cluster_id: "pr-inventory-ready_for_maintainer-20260615T131654-068"
mode: "plan"
run_id: "27550393137"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27550393137"
head_sha: "9a903e900d3280431ae7c80464316b3e5c248188"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T13:46:46.276Z"
canonical: null
canonical_issue: null
canonical_pr: null
actions_total: 40
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 1
---

# pr-inventory-ready_for_maintainer-20260615T131654-068

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27550393137](https://github.com/openclaw/clownfish/actions/runs/27550393137)

Workflow conclusion: success

Worker result: planned

Canonical: unknown

## Summary

Plan-only PR inventory classification. No GitHub mutations are allowed. Hydrated open PRs are kept as independent maintainer-review items, #90741 is routed to central security handling, already-closed PRs are kept closed, and unavailable refs need fresh hydration before any stronger classification.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 40 |
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
| #88075 | keep_independent | planned | independent | Independent feature/hardening PR requiring maintainer review; no close, merge, or fix action is permitted in this plan job. |
| #88085 | keep_independent | planned | independent | Independent small CLI fix; no canonical PR should be chosen inside this inventory shard. |
| #88503 | keep_independent | planned | independent | Independent message-delivery PR with active review/author follow-up; not safe for inventory closeout. |
| #88098 | keep_independent | planned | independent | Independent CLI/config feature PR; keep for maintainer review. |
| #88150 | keep_independent | planned | independent | Independent config/runtime PR awaiting maintainer/check decision. |
| #88203 | keep_independent | planned | independent | Independent approval/runtime bug fix; keep for maintainer review. |
| #88206 | keep_independent | planned | independent | Independent Codex message-delivery fix; no dedupe or closure path established. |
| #90741 | route_security | planned | security_sensitive | Security-sensitive PR is out of ProjectClownfish backlog-cleanup scope and should be routed to central OpenClaw security handling. |
| #88301 | keep_independent | planned | independent | Independent broad PR with unresolved review/technical judgment; keep open for maintainer handling. |
| #88323 | keep_independent | planned | independent | Independent PR with unresolved review blocker; fix/raise_pr and close are not available in this job. |
| #88437 | keep_independent | planned | independent | Independent docs PR; no low-signal closure may be planned. |
| #88400 | keep_independent | planned | independent | Independent config/provider fix awaiting maintainer and check decision. |
| #88401 | keep_independent | planned | independent | Independent agents error-handling fix; keep for maintainer review. |
| #92930 | keep_independent | planned | independent | Independent status/cache PR with unresolved review blocker; keep open. |
| #93025 | keep_independent | planned | independent | Independent provider API compatibility PR; keep for maintainer review. |
| #93176 | keep_independent | planned | independent | Independent agents workspace fix; keep for maintainer review. |
| #93182 | keep_closed | skipped | fixed_by_candidate | Already merged/closed; no mutation should be planned. |
| #90979 | keep_independent | planned | independent | Independent session-state bug fix awaiting maintainer/check decision. |
| #91093 | keep_independent | planned | independent | Independent broad feature PR; keep for maintainer review rather than inventory closeout. |
| #91097 | keep_closed | skipped | superseded | Already closed as superseded; no further action. |
| #91117 | keep_independent | planned | independent | Independent cleanup PR; keep for maintainer review. |
| #91134 | keep_independent | planned | independent | Independent CI guard PR with blocked merge state; keep for maintainer review. |
| #91146 | keep_independent | planned | independent | Independent channel formatting PR with unresolved review-bot blocker; keep open. |
| #91193 | keep_independent | planned | independent | Related subject matter exists, but no closure/canonical recommendation is safe in this shard; keep independently reviewable. |
| #93185 | needs_human | blocked | needs_human | Needs fresh hydration before classification. |
| #93149 | needs_human | blocked | needs_human | Needs fresh hydration before classification. |
| #93189 | needs_human | blocked | needs_human | Needs fresh hydration before classification. |
| #69729 | needs_human | blocked | needs_human | Needs fresh hydration before classification. |
| #72009 | needs_human | blocked | needs_human | Needs fresh hydration before classification. |
| #72404 | needs_human | blocked | needs_human | Needs fresh hydration before classification. |
| #73163 | needs_human | blocked | needs_human | Needs fresh hydration before classification. |
| #73785 | needs_human | blocked | needs_human | Needs fresh hydration before classification. |
| #75754 | needs_human | blocked | needs_human | Needs fresh hydration before classification. |
| #75857 | needs_human | blocked | needs_human | Needs fresh hydration before classification. |
| #75860 | needs_human | blocked | needs_human | Needs fresh hydration before classification. |
| #80008 | needs_human | blocked | needs_human | Needs fresh hydration before classification. |
| #80147 | needs_human | blocked | needs_human | Needs fresh hydration before classification. |
| #80204 | needs_human | blocked | needs_human | Needs fresh hydration before classification. |
| #80396 | needs_human | blocked | needs_human | Needs fresh hydration before classification. |
| #93188 | needs_human | blocked | needs_human | Needs fresh hydration before classification. |

## Needs Human

- Fresh hydration required for unavailable candidate refs before any stronger classification: #93185, #93149, #93189, #69729, #72009, #72404, #73163, #73785, #75754, #75857, #75860, #80008, #80147, #80204, #80396, #93188.
