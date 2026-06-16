---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-818-dedupe-cleanup-wave-3"
mode: "autonomous"
run_id: "27610226290"
workflow_run_id: "27610226290"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27610226290"
head_sha: "aa9af7b43a4e7ef8014e3f9de64f82296378ea4c"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-16T10:16:39.507Z"
canonical: "https://github.com/openclaw/openclaw/issues/74767"
canonical_issue: "https://github.com/openclaw/openclaw/issues/74767"
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

# gitcrawl-818-dedupe-cleanup-wave-3

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27610226290](https://github.com/openclaw/clownfish/actions/runs/27610226290)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/74767

## Summary

Canonical remains #74767 for the Feishu streaming-card searchability limitation. #91384 is related but not a duplicate because it adds the post-#88276 default-rendering regression/product-direction discussion and has active maintainer input. No close, fix, PR, or merge action is safe or allowed for this job.

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
| #74767 | keep_canonical | planned | canonical | #74767 is the best live canonical issue for the broader Feishu streaming-card searchability limitation; no close action applies to the canonical issue. |
| #91384 | keep_related | planned | related | #91384 shares the Feishu streaming-card/searchability area with #74767, but it has a distinct post-#88276 default-rendering/product-direction scope and active maintainer discussion, so it should remain open as related rather than be closed as a duplicate. |
| #77685 | keep_related | planned | related | #77685 is in the same Feishu streaming-card family but tracks delivery correctness rather than the searchability/default card-rendering decision, so it should remain a related open issue and not be closed in this cluster. |

## Needs Human

- none
