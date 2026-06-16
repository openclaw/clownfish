---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-223-dedupe-cleanup-wave-2"
mode: "autonomous"
run_id: "27609383837"
workflow_run_id: "27609383837"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27609383837"
head_sha: "063b91b51477b9a3958bd940d26858d243770fdf"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-16T10:01:21.115Z"
canonical: "https://github.com/openclaw/openclaw/issues/91893"
canonical_issue: "https://github.com/openclaw/openclaw/issues/91893"
canonical_pr: "https://github.com/openclaw/openclaw/pull/91907"
actions_total: 3
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-223-dedupe-cleanup-wave-2

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27609383837](https://github.com/openclaw/clownfish/actions/runs/27609383837)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/91893

## Summary

Current main at 55c047e77e70a7d414d6fe8cad55ecf978ebbcf2 still stages live external auth directories through unfiltered recursive fs.cpSync, so #91893 remains the live canonical issue. #91907 is the strongest hydrated open fix path, but this job cannot merge or raise fixes and the issue is not closable before that PR or an equivalent fix lands. #93290 is already closed and remains historical evidence only.

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
| #91893 | keep_canonical | planned | canonical | #91893 is the only open actionable seed ref and the bug is still present on current main; keep it open as the canonical issue until #91907 or an equivalent hydrated fix lands. |
| #91907 | keep_related | planned | related | #91907 is the strongest hydrated open fix path for #91893, but this cluster excludes existing-overlap refs from actionable closeout and blocked_actions disallow merge, fix, and raise_pr, so no mutating PR action is planned. |
| #93290 | keep_closed | skipped | superseded | Already closed; retained only as evidence that overlapping work was previously superseded by #91907. |

## Needs Human

- none
