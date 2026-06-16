---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-312-dedupe-cleanup-wave-2"
mode: "autonomous"
run_id: "27609385126"
workflow_run_id: "27609385126"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27609385126"
head_sha: "063b91b51477b9a3958bd940d26858d243770fdf"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-16T10:01:21.141Z"
canonical: "https://github.com/openclaw/openclaw/pull/86503"
canonical_issue: null
canonical_pr: "https://github.com/openclaw/openclaw/pull/86503"
actions_total: 2
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 1
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-312-dedupe-cleanup-wave-2

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27609385126](https://github.com/openclaw/clownfish/actions/runs/27609385126)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/86503

## Summary

Classified the two actionable open issue candidates. #84821 is fixed by the already-merged #86503 on current main and can be closed with credit-preserving comment. #84850 stays open as related because it tracks a broader CPU/event-loop symptom with a residual exec-update emission/product-decision path not fully covered by the merged session.tool dedupe. Existing-overlap #84823 and closed linked PRs were used as evidence only.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 2 |
| Fix executed | 0 |
| Fix failed | 0 |
| Fix blocked | 0 |
| Applied executions | 0 |
| Apply blocked | 1 |
| Apply skipped | 0 |
| Needs human | 0 |

## Fix Execution Actions

| Action | Status | Target | Branch | Reason |
| --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #84821 | close_fixed_by_candidate | blocked | fixed_by_candidate | canonical is not listed in job refs |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #84821 | close_fixed_by_candidate | planned | fixed_by_candidate | The original #84821 duplicate websocket delivery root cause is covered by hydrated merged PR #86503 and is present on current main; no unique remaining reproduction path is documented for #84821. |
| #84850 | keep_related | planned | related | Related but not a true duplicate: #84850 retains distinct CPU/event-loop and residual exec-update delivery questions after the merged session.tool dedupe. |

## Needs Human

- none
