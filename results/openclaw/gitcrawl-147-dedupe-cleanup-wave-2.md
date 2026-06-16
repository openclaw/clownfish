---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-147-dedupe-cleanup-wave-2"
mode: "autonomous"
run_id: "27609384060"
workflow_run_id: "27609384060"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27609384060"
head_sha: "063b91b51477b9a3958bd940d26858d243770fdf"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-16T10:01:21.119Z"
canonical: "https://github.com/openclaw/openclaw/issues/90982"
canonical_issue: "https://github.com/openclaw/openclaw/issues/90982"
canonical_pr: null
actions_total: 2
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-147-dedupe-cleanup-wave-2

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27609384060](https://github.com/openclaw/clownfish/actions/runs/27609384060)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/90982

## Summary

Hydrated state keeps #90982 as the canonical open issue. #91002 is a linked open contributor PR for the same bug, but this job cannot merge, fix, or raise a replacement PR, and the PR still has merge blockers in the artifact, so no closeout is planned.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 2 |
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
| #90982 | keep_canonical | planned | canonical | #90982 remains the best live canonical thread for the reported TUI abort-message gap; no duplicate or post-fix close action is safe because the only hydrated fix candidate is still open and merge/fix/post-merge actions are disabled. |
| #91002 | keep_related | planned | related | #91002 appears to be a related candidate fix for #90982, but it is not merge-ready under this job's gates and is not eligible for closure or replacement planning here. |

## Needs Human

- none
