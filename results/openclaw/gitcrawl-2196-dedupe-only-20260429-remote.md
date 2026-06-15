---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-2196-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "25132414968"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25132414968"
head_sha: "2a25e72cd9df0710ef893de8f25823a6a78be854"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T04:57:52.943Z"
canonical: "https://github.com/openclaw/openclaw/issues/59806"
canonical_issue: "https://github.com/openclaw/openclaw/issues/59806"
canonical_pr: null
actions_total: 8
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-2196-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25132414968](https://github.com/openclaw/clownfish/actions/runs/25132414968)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/59806

## Summary

Kept #59806 as the live canonical for the generic Feishu tenant_access_token destructuring failure. No close actions are planned because the original duplicate context refs are already closed, #48949 is a distinct proxy-specific Feishu token issue, and #44640 is a broad related PR with failing checks and unresolved bot-review findings.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 8 |
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
| #39794 | keep_closed | skipped | related | Already closed and useful only as historical proxy/redirect-loop evidence for the Feishu token symptom family. |
| #44572 | keep_closed | skipped | related | Already closed; keep as historical redirect/proxy context rather than a live target. |
| #44640 | keep_related | planned | related | Related Feishu work, but broad bundled scope, failing checks, and unresolved bot-review findings block merge or fixed-by-candidate closeout in this dedupe-only job. |
| #44677 | keep_closed | skipped | duplicate | Already closed duplicate of the live canonical #59806; no further close action is valid. |
| #44751 | keep_closed | skipped | related | Closed unmerged PR remains historical discussion evidence only. |
| #48949 | keep_related | planned | related | Keep open as a related proxy-specific Feishu token subcluster. |
| #57536 | keep_closed | skipped | duplicate | Already closed duplicate of the proxy-specific #48949 subcluster; no further close action is valid. |
| #59806 | keep_canonical | planned | canonical | #59806 remains the best live canonical for the generic Feishu tenant_access_token destructuring failure in this cluster. |

## Needs Human

- none
