---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-60-dedupe-cleanup-wave-2"
mode: "autonomous"
run_id: "27609384502"
workflow_run_id: "27609384502"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27609384502"
head_sha: "063b91b51477b9a3958bd940d26858d243770fdf"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-16T10:01:21.131Z"
canonical: "https://github.com/openclaw/openclaw/issues/90866"
canonical_issue: "https://github.com/openclaw/openclaw/issues/90866"
canonical_pr: null
actions_total: 5
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-60-dedupe-cleanup-wave-2

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27609384502](https://github.com/openclaw/clownfish/actions/runs/27609384502)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/90866

## Summary

Classified the hydrated open candidates without planning any GitHub mutations. #90866 remains the canonical Discord placeholder/heartbeat product-decision issue. #84276, #87665, and #90017 are related but not duplicates because they cover different root causes or providers. #86149 is already closed and remains historical context only.

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
| #90866 | keep_canonical | planned | canonical | Best surviving canonical for the Discord placeholder/heartbeat request. |
| #84276 | keep_related | planned | related | Related Discord typing UX area, but different root cause and not a true duplicate of the placeholder request. |
| #87665 | keep_related | planned | related | Related perceived-progress problem in Discord, but the task notification policy root cause is distinct. |
| #90017 | keep_related | planned | related | Related cross-provider placeholder UX, but Slack and Discord need separate canonical tracking. |
| #86149 | keep_closed | skipped | fixed_by_candidate | Already closed; retained only as context for the Discord typing-heartbeat family. |

## Needs Human

- none
