---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-123-plan-ramp"
mode: "plan"
run_id: "27518753132"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27518753132"
head_sha: "bde7630054b9beb03f7c7699a1f6d7426b906c50"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T02:27:57.094Z"
canonical: "#92819"
canonical_issue: "#92776"
canonical_pr: "#92819"
actions_total: 10
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-123-plan-ramp

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27518753132](https://github.com/openclaw/clownfish/actions/runs/27518753132)

Workflow conclusion: success

Worker result: planned

Canonical: #92819

## Summary

Plan-mode classification only. #92819 remains the best live canonical PR for the stale auto-fallback origin selection fix. No close, merge, label, comment, fix, or raise-PR mutations are planned; #92776 should stay open as the root issue until the canonical PR lands or maintainers decide otherwise.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 10 |
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
| openclaw/openclaw#92819 | keep_canonical | planned | canonical | Best hydrated live canonical for the cluster; merge is blocked by job mode/actions and maintainer-review gate. |
| openclaw/openclaw#92776 | keep_related | planned | related | Root issue should remain open and linked to the canonical PR until the fix lands or maintainers explicitly accept issue closure. |
| openclaw/openclaw#75270 | keep_related | planned | related | Related but not the canonical close/merge path for this cluster; useful contributor work should not be closed or superseded in this plan without a mergeable replacement outcome. |
| openclaw/openclaw#92821 | keep_closed | skipped | superseded | Already closed; no mutation is valid. |
| openclaw/openclaw#92790 | keep_closed | skipped | superseded | Closed historical predecessor; keep as evidence for why #92819 is canonical. |
| openclaw/openclaw#82676 | keep_closed | skipped | related | Already merged historical context; not a live candidate for this cluster. |
| openclaw/openclaw#82544 | keep_closed | skipped | related | Already closed related history; no closure action is valid. |
| openclaw/openclaw#87484 | keep_closed | skipped | related | Already merged related fix; no live mutation target. |
| openclaw/openclaw#92486 | keep_closed | skipped | related | Closed related context; no closure action is valid. |
| openclaw/openclaw#92573 | keep_closed | skipped | related | Already merged related fix; no live mutation target. |

## Needs Human

- none
