---
repo: "openclaw/openclaw"
cluster_id: "pr-inventory-ready_for_maintainer-20260615T154534-106"
mode: "plan"
run_id: "27560323972-1-108"
workflow_run_id: "27560323972"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27560323972"
head_sha: "61d2d7a61eeb9d8fe22ed20cc15f46b2ff4a4bb2"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-22T05:48:03.960Z"
canonical: null
canonical_issue: null
canonical_pr: null
actions_total: 24
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# pr-inventory-ready_for_maintainer-20260615T154534-106

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27560323972](https://github.com/openclaw/clownfish/actions/runs/27560323972)

Workflow conclusion: success

Worker result: planned

Canonical: unknown

## Summary

Plan-mode PR inventory classification only. The job explicitly says this is not a dedupe cluster and provides no shared canonical; merges, fixes, low-signal closeout, and post-merge closeout are disabled. Each open PR is therefore kept as an independent maintainer-review item with no GitHub mutations planned.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 24 |
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

## Apply Audit

| Attempt | Source | Target | Action | Status | Reason |
| --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |  |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #86608 | keep_independent | planned | independent | Independent docs/scripts PR for maintainer review; not closable or mergeable in this cluster. |
| #86649 | keep_independent | planned | independent | Independent implementation PR awaiting maintainer/author review, not a duplicate or low-signal closeout. |
| #86670 | keep_independent | planned | independent | Independent feature/provider PR; checks are incompletely hydrated and merge/fix actions are blocked. |
| #86674 | keep_independent | planned | independent | Independent UI PR with failing check evidence; not eligible for closure or merge in this plan. |
| #86676 | keep_independent | planned | independent | Independent gateway/config PR that should remain in maintainer review. |
| #86776 | keep_independent | planned | independent | Independent provider behavior PR awaiting maintainer review. |
| #86893 | keep_independent | planned | independent | Independent availability fix PR for maintainer review. |
| #86900 | keep_independent | planned | independent | Independent compaction/session-state fix PR; no closeout or merge action available in this job. |
| #86913 | keep_independent | planned | independent | Independent gateway API PR with failing checks; maintainers should review outside this inventory plan. |
| #87061 | keep_independent | planned | independent | Independent small agents logging PR; no mutation is appropriate in this shard. |
| #87121 | keep_independent | planned | independent | Independent test/helper PR for maintainer review. |
| #87205 | keep_independent | planned | independent | Independent gateway/doctor fix PR; incomplete check hydration blocks stronger recommendation. |
| #87231 | keep_independent | planned | independent | Independent Feishu message-delivery PR; keep for maintainer review. |
| #87343 | keep_independent | planned | independent | Independent broad availability PR; bot-review/check state needs normal maintainer handling. |
| #87414 | keep_independent | planned | independent | Independent draft PR; not eligible for closeout or merge recommendation. |
| #87449 | keep_independent | planned | independent | Independent active channel fix PR; fresh re-review state should stay with maintainers. |
| #88908 | keep_independent | planned | independent | Independent gateway availability fix PR; maintainers can review, but this worker cannot merge. |
| #88935 | keep_independent | planned | independent | Independent broad bootstrap PR requiring normal maintainer review. |
| #89154 | keep_independent | planned | independent | Independent broad hooks/session-state PR; not suitable for automated closeout. |
| #90970 | keep_independent | planned | independent | Independent low-signal/docs candidate; closeout is disabled by this job. |
| #90975 | keep_independent | planned | independent | Independent provider/runtime PR; maintainers should review outside this inventory cleanup. |
| #90986 | keep_independent | planned | independent | Independent fs/workspace-boundary PR; no vulnerability routing evidence, but not suitable for automated mutation. |
| #90989 | keep_independent | planned | independent | Independent gateway/message-delivery fix PR; keep for maintainer/author follow-up. |
| #92340 | keep_independent | planned | independent | Independent Feishu feature PR; no duplicate or closeout basis in this shard. |

## Needs Human

- none
