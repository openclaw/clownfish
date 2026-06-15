---
repo: "openclaw/openclaw"
cluster_id: "pr-inventory-ready_for_maintainer-20260615T131654-052"
mode: "plan"
run_id: "27549045835"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27549045835"
head_sha: "e8e65d821b5c55a11a8a30d2023428743182215a"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T13:28:19.695Z"
canonical: null
canonical_issue: null
canonical_pr: null
actions_total: 40
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 1
---

# pr-inventory-ready_for_maintainer-20260615T131654-052

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27549045835](https://github.com/openclaw/clownfish/actions/runs/27549045835)

Workflow conclusion: success

Worker result: planned

Canonical: unknown

## Summary

Plan-mode PR inventory classification. The hydrated preflight artifact marks the shard as non-dedupe, with no shared canonical and no security-sensitive hydrated items. No close, merge, fix, or PR-raising action is planned because this job blocks merge/fix/raise_pr and low-signal/instant close is disabled.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 40 |
| Fix executed | 0 |
| Fix failed | 0 |
| Fix blocked | 0 |
| Applied executions | 0 |
| Apply blocked | 0 |
| Apply skipped | 0 |
| Needs human | 1 |

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
| #91963 | needs_human | blocked | needs_human | Cannot classify this candidate from live artifact data. |
| #88504 | keep_independent | planned | independent | Independent feature PR requiring normal maintainer review outside this inventory shard. |
| #88550 | keep_independent | planned | independent | Independent PR with failing proof and bot-review context; no close or merge is safe in this plan. |
| #88551 | keep_independent | planned | independent | Independent maintainer-ready PR; no dedupe or closure action applies. |
| #88683 | keep_independent | planned | independent | Independent dirty PR; keep open for normal maintainer/author path. |
| #88709 | keep_independent | planned | independent | Independent substantial auth fix requiring ordinary maintainer review. |
| #88726 | keep_independent | planned | independent | Independent PR waiting on author; no close-style action is justified. |
| #91376 | keep_independent | planned | independent | Independent open PR; keep open for normal maintainer/author flow. |
| #91427 | keep_independent | planned | independent | Independent maintainer-ready fix; no mutation planned. |
| #92037 | needs_human | blocked | needs_human | Cannot classify this candidate from live artifact data. |
| #92147 | needs_human | blocked | needs_human | Cannot classify this candidate from live artifact data. |
| #92165 | needs_human | blocked | needs_human | Cannot classify this candidate from live artifact data. |
| #92174 | needs_human | blocked | needs_human | Cannot classify this candidate from live artifact data. |
| #91693 | keep_independent | planned | independent | Independent PR with proof blocker; keep open. |
| #92196 | needs_human | blocked | needs_human | Cannot classify this candidate from live artifact data. |
| #92176 | needs_human | blocked | needs_human | Cannot classify this candidate from live artifact data. |
| #92376 | needs_human | blocked | needs_human | Cannot classify this candidate from live artifact data. |
| #91923 | needs_human | blocked | needs_human | Cannot classify this candidate from live artifact data. |
| #91967 | needs_human | blocked | needs_human | Cannot classify this candidate from live artifact data. |
| #88581 | keep_independent | planned | independent | Independent feature PR; keep open for normal maintainer review. |
| #92477 | needs_human | blocked | needs_human | Cannot classify this candidate from live artifact data. |
| #91828 | keep_independent | planned | independent | Independent memory-wiki hardening PR; keep open. |
| #90089 | keep_independent | planned | independent | Independent focused fix; no mutation planned. |
| #91807 | keep_independent | planned | independent | Independent CLI feature/fix PR; keep open. |
| #92178 | needs_human | blocked | needs_human | Cannot classify this candidate from live artifact data. |
| #91499 | keep_independent | planned | independent | Independent high-risk cron/tool-policy PR; keep open for maintainer review. |
| #92484 | needs_human | blocked | needs_human | Cannot classify this candidate from live artifact data. |
| #92594 | needs_human | blocked | needs_human | Cannot classify this candidate from live artifact data. |
| #88180 | keep_independent | planned | independent | Independent focused PR with proof blocker; keep open. |
| #88885 | keep_independent | planned | independent | Independent infra/message-delivery fix; keep open. |
| #91481 | keep_independent | planned | independent | Independent gateway approval-delivery fix; keep open. |
| #91600 | keep_independent | planned | independent | Independent logging/session-state fix; keep open. |
| #91870 | keep_independent | planned | independent | Independent provider metadata PR with proof blocker; keep open. |
| #92491 | needs_human | blocked | needs_human | Cannot classify this candidate from live artifact data. |
| #92495 | needs_human | blocked | needs_human | Cannot classify this candidate from live artifact data. |
| #92521 | needs_human | blocked | needs_human | Cannot classify this candidate from live artifact data. |
| #92574 | needs_human | blocked | needs_human | Cannot classify this candidate from live artifact data. |
| #91408 | keep_independent | planned | independent | Independent dirty PR waiting on author; no close or merge action is safe. |
| #91955 | needs_human | blocked | needs_human | Cannot classify this candidate from live artifact data. |
| #92610 | needs_human | blocked | needs_human | Cannot classify this candidate from live artifact data. |

## Needs Human

- Hydrated artifact is compacted/truncated and contains live item data for only 20 of 40 listed candidates. The missing candidates require a fresh preflight artifact before target_kind, target_updated_at, and conservative classification can be completed.
