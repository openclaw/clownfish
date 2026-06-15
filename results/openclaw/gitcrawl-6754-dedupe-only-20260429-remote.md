---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-6754-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "25136452447"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25136452447"
head_sha: "421ddc981e12f60cbb3ea60e4527004e3a033e79"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T04:05:51.276Z"
canonical: "https://github.com/openclaw/openclaw/pull/48283"
canonical_issue: "https://github.com/openclaw/openclaw/issues/48241"
canonical_pr: "https://github.com/openclaw/openclaw/pull/48283"
actions_total: 4
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-6754-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25136452447](https://github.com/openclaw/clownfish/actions/runs/25136452447)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/48283

## Summary

Hydrated state keeps #48283 as the canonical implementation candidate for the #48241 abort-stale-content bug. #55477 is a separate LiteLLM metadata feature PR, and #55696 is already closed historical context. No close, merge, fix, label, or comment mutations are planned.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 4 |
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
| #48241 | keep_canonical | planned | canonical | Keep the canonical bug issue open while the linked implementation candidate remains unmerged and not merge-ready. |
| #48283 | keep_canonical | planned | canonical | Keep #48283 as the canonical implementation candidate, but do not merge or close anything against it in this dedupe-only run. |
| #55477 | keep_independent | planned | independent | This is a separate feature/change family and should remain open outside this abort-stale-content dedupe cluster. |
| #55696 | keep_closed | skipped | independent | Closed context refs are evidence only; no mutation is valid for this item. |

## Needs Human

- none
