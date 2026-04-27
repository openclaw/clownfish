---
repo: "openclaw/openclaw"
cluster_id: "ghcrawl-199239-agentic-merge"
mode: "autonomous"
run_id: "24978967831"
run_url: "https://github.com/openclaw/clownfish/actions/runs/24978967831"
head_sha: "29400ea714d617de4455a11f0aa59ca745bf6cda"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-04-27T06:00:25.252Z"
canonical: "https://github.com/openclaw/openclaw/pull/72388"
canonical_issue: null
canonical_pr: "https://github.com/openclaw/openclaw/pull/72388"
actions_total: 13
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 7
needs_human_count: 0
---

# ghcrawl-199239-agentic-merge

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/24978967831](https://github.com/openclaw/clownfish/actions/runs/24978967831)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/72388

## Summary

Hydrated state shows this cluster is over-broad. #72388 is the canonical replacement PR for the Feishu filename mojibake family, #50164 is the narrow repair candidate for the Feishu iOS video download 502 family, #51196 is an independent ReadStream cleanup PR, and #61807 is related video-thumbnail work. No merge is recommended because required merge preflight is missing and several candidates have failing checks or unresolved bot findings.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 13 |
| Fix executed | 0 |
| Fix failed | 0 |
| Fix blocked | 0 |
| Applied executions | 0 |
| Apply blocked | 0 |
| Apply skipped | 7 |
| Needs human | 0 |

## Fix Execution Actions

| Action | Status | Target | Branch | Reason |
| --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #48388 | close_fixed_by_candidate | skipped | fixed_by_candidate | action status is blocked |
| #50435 | close_superseded | skipped | superseded | action status is blocked |
| #59409 | close_fixed_by_candidate | skipped | fixed_by_candidate | action status is blocked |
| #59431 | close_superseded | skipped | superseded | action status is blocked |
| #50164 | merge_candidate | skipped | canonical | action status is blocked |
| #49855 | close_fixed_by_candidate | skipped | fixed_by_candidate | action status is blocked |
| #49967 | close_superseded | skipped | superseded | action status is blocked |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #72388 | keep_canonical | planned | canonical | Canonical replacement path is explicit, but merge is blocked on failing checks, unresolved bot comment, and missing clean Codex /review preflight. |
| #48578 | keep_closed | skipped | superseded | Closed refs are historical evidence only and must not receive close actions. |
| #48388 | close_fixed_by_candidate | blocked | fixed_by_candidate | Close is blocked on the canonical fix path #72388 landing. |
| #50435 | close_superseded | blocked | superseded | Superseded close is blocked on the canonical fix path #72388 landing and credit-preserving closeout. |
| #59409 | close_fixed_by_candidate | blocked | fixed_by_candidate | Close is blocked on the canonical fix path #72388 landing. |
| #59431 | close_superseded | blocked | superseded | Superseded close is blocked on the canonical fix path #72388 landing and credit-preserving closeout. |
| #50164 | merge_candidate | blocked | canonical | Candidate is the best canonical path for the video download fallback subfamily, but merge is blocked on missing merge preflight and insufficient current validation. |
| #49855 | close_fixed_by_candidate | blocked | fixed_by_candidate | Close is blocked on the canonical fix path #50164 landing or being repaired/replaced. |
| #49967 | close_superseded | blocked | superseded | Superseded close is blocked on the canonical fix path #50164 landing or being repaired/replaced. |
| #51196 | keep_independent | planned | independent | Distinct root cause; leave open for its own single-PR review/repair path. |
| #61807 | keep_related | planned | related | Related Feishu media work, but not a duplicate of the canonical filename or download-fallback paths; merge is blocked by failing checks and unresolved bot finding. |
| #38554 | keep_closed | skipped | fixed_by_candidate | Already-closed refs must not receive close actions. |
| #38559 | keep_closed | skipped | superseded | Already-closed refs must not receive close actions. |

## Needs Human

- none
