---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-3000-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "25134569840"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25134569840"
head_sha: "b9f5ebae325b39171f8129a731bbca8bf5b88966"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T04:57:53.012Z"
canonical: "https://github.com/openclaw/openclaw/pull/48138"
canonical_issue: null
canonical_pr: "https://github.com/openclaw/openclaw/pull/48138"
actions_total: 7
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-3000-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25134569840](https://github.com/openclaw/clownfish/actions/runs/25134569840)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/48138

## Summary

Hydrated state shows this gitcrawl cluster is over-broad. #48138 remains the best open canonical PR for the Feishu document ownership-transfer subfamily, while #40747 is a separate insert-index feature and #48377/#48373/#50357 form a separate create-with-content/docs subfamily. No high-confidence close action is safe because the open items are useful, distinct, or blocked by unmerged candidates and review/check findings.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 7 |
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
| #48138 | keep_canonical | planned | canonical | #48138 is the best surviving canonical path for the ownership-transfer topic, but this dedupe-only job should keep it open rather than merge or repair it. |
| #40747 | keep_related | planned | related | Related Feishu doc work, not a duplicate or superseded by #48138. |
| #48377 | keep_related | planned | related | Separate create-with-content subfamily; useful PR should stay open and is not closable in this dedupe-only cluster. |
| #48373 | keep_related | planned | fixed_by_candidate | Covered by hydrated candidate PR #48377, but closeout must wait until a landed or clean candidate exists. |
| #50357 | keep_related | planned | related | Related alternate docs path; keep open until the create-with-content implementation decision lands or the docs are revised. |
| #39934 | keep_closed | skipped | related | Already closed historical context. |
| #53535 | keep_closed | skipped | related | Already closed historical context; not a target for this autonomous pass. |

## Needs Human

- none
