---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-10424-dedupe-only-20260429d"
mode: "autonomous"
run_id: "25143080825"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25143080825"
head_sha: "e91d50e55815b277c0cd549de4b97aa0e0e658f4"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T04:05:51.331Z"
canonical: "https://github.com/openclaw/openclaw/issues/60335"
canonical_issue: "https://github.com/openclaw/openclaw/issues/60335"
canonical_pr: "https://github.com/openclaw/openclaw/pull/60353"
actions_total: 2
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-10424-dedupe-only-20260429d

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25143080825](https://github.com/openclaw/clownfish/actions/runs/25143080825)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/60335

## Summary

Hydrated preflight state shows one open canonical Slack issue (#60335) and one open, narrow contributor PR (#60353) that directly fixes it. No security-sensitive signal is present. No close, merge, or fix PR action is planned: the issue is the canonical tracking thread, the PR is useful and should remain open, merge/fix actions are blocked by job frontmatter, and merge preflight proof is incomplete.

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
| #60335 | keep_canonical | planned | canonical | #60335 remains the best live canonical issue for the root cause; closing it is not appropriate because the candidate PR is still open and post-merge closeout is disabled. |
| #60353 | keep_canonical | planned | canonical | #60353 is the canonical open fix candidate for #60335, but this dedupe-only job cannot merge or repair it and the merge gates are not proven. |

## Needs Human

- none
