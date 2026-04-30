---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-6951-dedupe-only-20260429d"
mode: "autonomous"
run_id: "25142700183"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25142700183"
head_sha: "0b2576f505f062756bdfed443c12fd6d9a764b16"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-04-30T01:36:00.843Z"
canonical: "https://github.com/openclaw/openclaw/issues/48786"
canonical_issue: "https://github.com/openclaw/openclaw/issues/48786"
canonical_pr: null
actions_total: 6
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-6951-dedupe-only-20260429d

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25142700183](https://github.com/openclaw/clownfish/actions/runs/25142700183)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/48786

## Summary

Canonical remains the open issue #48786 for Feishu fetched quoted/replied message mention placeholders. #60103 and #73469 are related Feishu mention issues but have different outbound-format and streaming-notification scopes, so they should stay open. Linked PR #48976 targets #48786 but includes security-sensitive unrelated churn and unresolved review-bot findings, so it is quarantined and no close, merge, or fix PR is executable in this dedupe-only job.

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
| #48786 | keep_canonical | planned | canonical | #48786 is still the best live canonical issue for the fetched quoted/replied message mention placeholder bug. |
| #48976 | route_security | planned | security_sensitive | The Feishu portion is related to #48786, but the hydrated PR also contains security-sensitive unrelated changes; quarantine only #48976 and continue non-security classification for the issues. |
| #60103 | keep_related | planned | related | #60103 belongs in the Feishu mention family but has a broader outbound-format root cause and should remain open as related, not duplicate of #48786. |
| #73469 | keep_related | planned | related | #73469 is related Feishu mention work but is not a duplicate of #48786 or #60103 because notification timing is a distinct product/implementation decision. |
| cluster:gitcrawl-6951-dedupe-only-20260429d | fix_needed | blocked |  | A narrow non-security fix is still needed for #48786, but implementation is blocked in this dedupe-only job by the fix/raise_pr frontmatter gates and by quarantine of the broad linked PR. |
| cluster:gitcrawl-6951-dedupe-only-20260429d | build_fix_artifact | blocked |  | Build a narrow credited fix artifact for a future fix-enabled lane; keep it blocked here because this job cannot execute fix or raise_pr actions. |

## Needs Human

- none
