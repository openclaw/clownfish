---
repo: "openclaw/openclaw"
cluster_id: "ghcrawl-199239-agentic-merge"
mode: "autonomous"
run_id: "24977057428"
run_url: "https://github.com/openclaw/clownfish/actions/runs/24977057428"
head_sha: "50a0b51ad3e3cfffa74443fc81bf0c842f9747bf"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-04-27T04:50:12.808Z"
canonical: "https://github.com/openclaw/openclaw/pull/72388"
canonical_issue: "https://github.com/openclaw/openclaw/issues/48388"
canonical_pr: "https://github.com/openclaw/openclaw/pull/72388"
actions_total: 13
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 4
needs_human_count: 0
---

# ghcrawl-199239-agentic-merge

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/24977057428](https://github.com/openclaw/clownfish/actions/runs/24977057428)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/72388

## Summary

Classified the hydrated cluster into three subfamilies. The filename mojibake path now has an explicit canonical replacement PR (#72388), but merge and fix-first closeout are blocked by unresolved review-bot feedback and failing checks. The Feishu video download and video thumbnail PRs are related follow-up work, and the ReadStream leak PR is independent.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 13 |
| Fix executed | 0 |
| Fix failed | 0 |
| Fix blocked | 0 |
| Applied executions | 0 |
| Apply blocked | 0 |
| Apply skipped | 4 |
| Needs human | 0 |

## Fix Execution Actions

| Action | Status | Target | Branch | Reason |
| --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #48388 | close_fixed_by_candidate | skipped | fixed_by_candidate | action status is blocked |
| #59409 | close_fixed_by_candidate | skipped | fixed_by_candidate | action status is blocked |
| #50435 | close_superseded | skipped | superseded | action status is blocked |
| #59431 | close_superseded | skipped | superseded | action status is blocked |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #72388 | keep_canonical | planned | canonical | Canonical replacement PR exists, but merge is blocked until failing checks and the remaining bot review comment are resolved and a clean /review merge preflight is available. |
| #48578 | keep_closed | skipped | superseded | Already closed; historical source PR for canonical replacement #72388. |
| #48388 | close_fixed_by_candidate | blocked | fixed_by_candidate | Blocked on canonical fix path #72388 merging. |
| #59409 | close_fixed_by_candidate | blocked | fixed_by_candidate | Blocked on canonical fix path #72388 merging. |
| #50435 | close_superseded | blocked | superseded | Blocked on canonical fix path #72388 merging and preserving contributor credit. |
| #59431 | close_superseded | blocked | superseded | Blocked on canonical fix path #72388 merging and preserving contributor credit. |
| #49855 | keep_related | planned | related | Related Feishu media subcluster; keep open for a separate fix/merge decision. |
| #49967 | keep_related | planned | related | Related video-download fallback PR; not a duplicate of the filename fix and not merge-ready. |
| #50164 | keep_related | planned | related | Related follow-up PR for Feishu media downloads; keep open for a separate merge/fix pass. |
| #51196 | keep_independent | planned | independent | Independent Feishu media resource-leak fix; should not be closed or merged as part of this filename cluster. |
| #61807 | keep_related | planned | related | Related video-thumbnail follow-up; keep open for a separate repair pass. |
| #38554 | keep_closed | skipped | fixed_by_candidate | Already closed; no mutation valid. |
| #38559 | keep_closed | skipped | superseded | Already closed; historical video-thumbnail attempt only. |

## Needs Human

- none
