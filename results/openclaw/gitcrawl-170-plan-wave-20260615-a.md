---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-170-plan-wave-20260615-a"
mode: "plan"
run_id: "27519865132"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27519865132"
head_sha: "22d161e1bb6775432f7eb60a80e61685d748f60c"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T02:12:42.962Z"
canonical: "#87213"
canonical_issue: "#87213"
canonical_pr: "#66985"
actions_total: 9
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-170-plan-wave-20260615-a

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27519865132](https://github.com/openclaw/clownfish/actions/runs/27519865132)

Workflow conclusion: success

Worker result: planned

Canonical: #87213

## Summary

Plan-mode classification only. Route security-sensitive exec-policy refs #61009 and #72858 to central security handling; keep #87213 as the canonical issue for the node-selector canonicalization bug; treat #66985 as the best hydrated canonical fix path; mark #87236 as superseded by #66985; keep #92141 related but separate because it is a WebChat/Codex tool-surface exposure issue, not the same selector-comparison root cause.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 9 |
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
| #61009 | route_security | planned | security_sensitive | Exec-routing documentation with security-sensitive labels and bot review belongs in central security handling, not backlog dedupe cleanup. |
| #72858 | route_security | planned | security_sensitive | Hydrated linked ref is security-sensitive and should be quarantined without blocking unrelated non-security classification. |
| #87213 | keep_canonical | planned | canonical | #87213 remains the clearest open issue canonical for the selector-canonicalization bug. |
| #66985 | keep_canonical | planned | canonical | #66985 is the strongest hydrated fix path, but this plan-mode job cannot merge. |
| #87236 | close_superseded | planned | superseded | The PR is an overlapping contributor fix for the same root cause, but the hydrated canonical fix #66985 is better proven and cleaner. |
| #92141 | keep_related | planned | related | Same exec/node area, but different user-visible failure and likely different root cause; do not close as duplicate. |
| #61229 | keep_closed | skipped | superseded | Historical closed context only; no closure action is valid for an already-closed issue. |
| #87242 | keep_closed | skipped | superseded | Historical closed context only; no closure action is valid for an already-closed PR. |
| #89439 | keep_closed | skipped | independent | Historical closed context only and belongs to the routed security-sensitive docs mismatch path, not this non-security selector canonicalization family. |

## Needs Human

- none
