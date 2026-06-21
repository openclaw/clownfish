---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-1109-intake-20260621"
mode: "plan"
run_id: "27893347853"
workflow_run_id: "27893347853"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27893347853"
head_sha: "5fab7ab68745edec7ccb5bdb036f71a154fd266b"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-21T04:24:00.104Z"
canonical: "#94426"
canonical_issue: "#94426"
canonical_pr: "#94471"
actions_total: 8
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-1109-intake-20260621

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27893347853](https://github.com/openclaw/clownfish/actions/runs/27893347853)

Workflow conclusion: success

Worker result: planned

Canonical: #94426

## Summary

Plan-mode classification only. #94426 is the live canonical issue for the isPortBusy IPv4-only loopback occupant bug. The linked open PRs are related candidate fixes, but no merge, fix PR, or closure is planned because the job is read-only, merge/fix actions are blocked, and several PRs still have proof or check/review blockers.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 8 |
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

## Apply Audit

| Attempt | Source | Target | Action | Status | Reason |
| --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |  |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #94379 | keep_closed | skipped | related | Already closed historical context; keep as related evidence only. |
| #94415 | keep_closed | skipped | related | Already closed related PR for the sibling root-cause family. |
| #94426 | keep_canonical | planned | canonical | This is the best live canonical for the remaining non-overlap cluster; it should stay open until a focused linked fix lands. |
| #94448 | keep_related | planned | fixed_by_candidate | Related candidate fix for #94426, but not the clearest canonical fix because the bot review still flags proof and unknown-status behavior concerns. |
| #94456 | keep_related | planned | fixed_by_candidate | Related candidate fix for #94426, but failing checks and bot findings block merge or fixed-by-candidate closeout. |
| #94463 | keep_related | planned | fixed_by_candidate | Related candidate fix for #94426, but failing checks and proof gap block merge or issue closeout. |
| #94471 | keep_related | planned | fixed_by_candidate | Best hydrated candidate fix for #94426 because it addresses the unknown-status fail-open concern and includes proof evidence, but this run cannot merge or close. |
| #94949 | keep_related | planned | fixed_by_candidate | Related candidate fix for #94426, but it is not the canonical fix candidate while #94471 has addressed the fail-closed concern and proof comment. |

## Needs Human

- none
