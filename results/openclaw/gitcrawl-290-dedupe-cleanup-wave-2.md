---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-290-dedupe-cleanup-wave-2"
mode: "autonomous"
run_id: "27609382990"
workflow_run_id: "27609382990"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27609382990"
head_sha: "063b91b51477b9a3958bd940d26858d243770fdf"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-16T10:01:21.108Z"
canonical: "https://github.com/openclaw/openclaw/issues/77344"
canonical_issue: "https://github.com/openclaw/openclaw/issues/77344"
canonical_pr: null
actions_total: 3
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-290-dedupe-cleanup-wave-2

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27609382990](https://github.com/openclaw/clownfish/actions/runs/27609382990)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/77344

## Summary

Classified the hydrated open candidates without GitHub mutation. #77344 remains the canonical issue for the Docker-published gateway port dashboard bug. #77574 is related ClawDock dashboard work, but it has a different root cause and reproduction path, so it should stay open. The excluded overlap PR #75754 is useful context for #77344 but is not an actionable target in this job and is not merge-ready due the failing Real behavior proof check and actionable ClawSweeper review note.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 3 |
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
| #77344 | keep_canonical | planned | canonical | This is the best live canonical issue for the published-port dashboard bug; keep it open for the existing repair path or maintainer follow-up. |
| #77574 | keep_related | planned | related | Related ClawDock dashboard helper area, but different root cause and user-visible failure; not a true duplicate of #77344 and should not be closed in this cluster. |
| #75754 | keep_related | skipped | related | Context-only overlap PR retained as related evidence for #77344; no mutation planned because it is outside the actionable refs for this job and merge/fix actions are blocked. |

## Needs Human

- none
