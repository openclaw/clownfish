---
repo: "openclaw/openclaw"
cluster_id: "ghcrawl-156945-autonomous-smoke"
mode: "autonomous"
run_id: "25102745732"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25102745732"
head_sha: "9a08eb9ac982c5d395ca81610998f5f78efc9ef6"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T03:45:26.104Z"
canonical: "https://github.com/openclaw/openclaw/issues/14785"
canonical_issue: "https://github.com/openclaw/openclaw/issues/14785"
canonical_pr: null
actions_total: 11
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# ghcrawl-156945-autonomous-smoke

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25102745732](https://github.com/openclaw/clownfish/actions/runs/25102745732)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/14785

## Summary

Hydrated preflight shows #14785 is still the live canonical tool-schema overhead tracker. #64761 is already closed as its duplicate, and the linked open issues/PRs are related sub-scopes rather than superseding fixes. No close, merge, or fix PR action is planned for this pass.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 11 |
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
| #2 | keep_closed | skipped | independent | Already closed and unrelated; no mutation permitted. |
| #14619 | keep_related | planned | related | Related narrower sub-scope with unique remaining work; not a duplicate closeout target. |
| #14785 | keep_canonical | planned | canonical | Representative remains the best live canonical issue; no hydrated PR supersedes it. |
| #26948 | keep_closed | skipped | related | Already closed related context; no mutation permitted. |
| #28397 | keep_closed | skipped | related | Already closed related context; no mutation permitted. |
| #30004 | keep_closed | skipped | related | Already closed related context; no mutation permitted. |
| #30359 | keep_closed | skipped | related | Closed unmerged PR remains historical related work only; it cannot be used as candidate_fix. |
| #52861 | keep_related | planned | related | Related broader prompt-overhead family; it has distinct scope and should stay open. |
| #58405 | keep_related | planned | related | Related PR with failing checks and unresolved review-bot feedback; not merge-ready or canonical for this cluster. |
| #58434 | keep_related | planned | related | Related PR with failing checks; keep open but do not merge or mark fixed_by_candidate in this cluster. |
| #64761 | keep_closed | skipped | duplicate | Already closed as duplicate of #14785; retain classification only. |

## Needs Human

- none
