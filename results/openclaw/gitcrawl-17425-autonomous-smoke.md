---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-17425-autonomous-smoke"
mode: "autonomous"
run_id: "27488709655"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27488709655"
head_sha: "a975481a4e4fa45b6bcfc62032034df3e50f2da9"
workflow_conclusion: "success"
result_status: "needs_human"
published_at: "2026-06-14T04:56:04.440Z"
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
needs_human_count: 1
---

# gitcrawl-17425-autonomous-smoke

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27488709655](https://github.com/openclaw/clownfish/actions/runs/27488709655)

Workflow conclusion: success

Worker result: needs_human

Canonical: unknown

## Summary

Hydrated live state materially disagrees with the gitcrawl inventory: the job describes account-suspension reports, but the hydrated primary refs #437, #845, and #1142 are unrelated OpenClaw browser/provider/tool items and all are already closed. No close, merge, label, comment, or fix PR action is safe from this cluster; one closed context PR (#282) carries a credential/token-shaped review signal and is quarantined as historical security context only.

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
| cluster:gitcrawl-17425-autonomous-smoke | needs_human | planned | needs_human | Cluster identity/canonical choice is materially unclear; a maintainer should regenerate or repair the gitcrawl cluster mapping before any cleanup is applied. |
| #282 | route_security | skipped | security_sensitive | Closed historical context only; no ProjectClownfish mutation is valid, but the exact ref is quarantined as security-sensitive evidence. |
| #437 | keep_closed | skipped | fixed_by_candidate | Already closed in live state; keep as historical fixed-by-candidate evidence only and do not emit any close/comment action. |
| #439 | keep_closed | skipped | fixed_by_candidate | Already closed linked fix evidence; no merge, close, or repair action is valid. |
| #845 | keep_closed | skipped | independent | Already closed independent PR; no cluster mutation is valid. |
| #1142 | keep_closed | skipped | independent | Already closed independent feature/tool PR; keep as historical context only. |

## Needs Human

- Regenerate or repair gitcrawl cluster 17425 before applying cleanup: the job inventory/title describes account-suspension reports, while hydrated live refs are unrelated closed OpenClaw browser/provider/tool items.
