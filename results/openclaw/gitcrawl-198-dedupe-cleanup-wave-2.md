---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-198-dedupe-cleanup-wave-2"
mode: "autonomous"
run_id: "27609383239"
workflow_run_id: "27609383239"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27609383239"
head_sha: "063b91b51477b9a3958bd940d26858d243770fdf"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-16T10:01:21.112Z"
canonical: "https://github.com/openclaw/openclaw/pull/92287"
canonical_issue: "https://github.com/openclaw/openclaw/issues/92267"
canonical_pr: "https://github.com/openclaw/openclaw/pull/92287"
actions_total: 2
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-198-dedupe-cleanup-wave-2

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27609383239](https://github.com/openclaw/clownfish/actions/runs/27609383239)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/92287

## Summary

Hydrated state shows #92267 is the live source issue and #92287 is the open PR that directly fixes it. Current main at 55c047e77e70a7d414d6fe8cad55ecf978ebbcf2 still has the reported source-level gaps. No close, merge, or fix PR should be planned here: #92287 is an existing-overlap canonical PR owned by another job, merge/fix actions are blocked by job frontmatter, and its native Telegram proof check is failing, so #92267 should remain open as related to that canonical fix path until the PR lands or maintainers choose a different implementation.

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
| #92287 | keep_canonical | planned | canonical | Canonical fix path is the existing open PR #92287, but this job does not allow merge/fix actions and the PR is already owned by an existing overlap job. |
| #92267 | keep_related | planned | related | #92267 appears covered by #92287, but the canonical PR has not landed and has a failing native Telegram proof gate, so this run keeps the issue open as related to the canonical fix path instead of planning a close. |

## Needs Human

- none
