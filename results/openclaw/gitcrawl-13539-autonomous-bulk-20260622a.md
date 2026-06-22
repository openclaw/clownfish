---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-13539-autonomous-bulk-20260622a"
mode: "autonomous"
run_id: "27958785765"
workflow_run_id: "27958785765"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27958785765"
head_sha: "6df12705136a41273cee813d009a7bf18ef7423f"
workflow_conclusion: "success"
result_status: "needs_human"
published_at: "2026-06-22T14:12:20.106Z"
canonical: "https://github.com/openclaw/openclaw/pull/76873"
canonical_issue: "https://github.com/openclaw/openclaw/issues/60256"
canonical_pr: "https://github.com/openclaw/openclaw/pull/76873"
actions_total: 5
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 1
needs_human_count: 2
---

# gitcrawl-13539-autonomous-bulk-20260622a

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27958785765](https://github.com/openclaw/clownfish/actions/runs/27958785765)

Workflow conclusion: success

Worker result: needs_human

Canonical: https://github.com/openclaw/openclaw/pull/76873

## Summary

Classified the live open items only. The closed representative #50414 is obsolete. The best current canonical path for #60256 is open PR #76873, which targets the shared outbound resolver bug: current main infers a target kind but passes params.preferredKind into id-like plugin resolution, while Discord normalization treats bare numeric IDs as channel targets. #76873 is narrow and green in the artifact, but it still needs maintainer acceptance of the resolver contract and a clean required review before any merge or issue closeout. #90626 is related cron default-delivery work, not the best canonical for the env-var Discord-channel report, and it has failing relevant proof/checks.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 5 |
| Fix executed | 0 |
| Fix failed | 0 |
| Fix blocked | 0 |
| Applied executions | 0 |
| Apply blocked | 0 |
| Apply skipped | 1 |
| Needs human | 2 |

## Fix Execution Actions

| Action | Status | Target | Branch | Reason |
| --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #60256 | close_fixed_by_candidate | skipped | fixed_by_candidate | action status is blocked |

## Apply Audit

| Attempt | Source | Target | Action | Status | Reason |
| --- | --- | --- | --- | --- |
| 1 | apply | #60256 | close_fixed_by_candidate | skipped | action status is blocked |
| 2 | apply | #60256 | close_fixed_by_candidate | skipped | action status is blocked |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #68170 | route_security | planned | security_sensitive | Exact hydrated item is security-sensitive; route to central OpenClaw security handling only. |
| #76873 | needs_human | blocked | canonical | Canonical PR is plausible and narrow, but merge is blocked on maintainer acceptance of the shared resolver contract, fresh required review proof, and normal merge preflight. |
| #60256 | close_fixed_by_candidate | blocked | fixed_by_candidate | High-confidence covered-by-candidate classification, but closure is blocked until #76873 is merged and validated. |
| #90626 | keep_related | planned | related | Related but not the best canonical path for #60256; keep open for its broader default-delivery/product decision. |
| #54634 | keep_independent | planned | independent | Different root cause and excluded existing-overlap context; no cluster action. |

## Needs Human

- #76873 needs maintainer acceptance of the inferred-kind shared resolver contract, fresh required review proof, and normal merge preflight before merge.
- #60256 closeout is blocked until #76873 lands; live labels also include no-new-fix-pr/product-review/live-repro gates, so this worker should not open a replacement fix PR.
