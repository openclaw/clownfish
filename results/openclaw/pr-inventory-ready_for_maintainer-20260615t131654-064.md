---
repo: "openclaw/openclaw"
cluster_id: "pr-inventory-ready_for_maintainer-20260615T131654-064"
mode: "plan"
run_id: "27549048247"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27549048247"
head_sha: "e8e65d821b5c55a11a8a30d2023428743182215a"
workflow_conclusion: "success"
result_status: "needs_human"
published_at: "2026-06-15T13:28:19.792Z"
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

# pr-inventory-ready_for_maintainer-20260615T131654-064

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27549048247](https://github.com/openclaw/clownfish/actions/runs/27549048247)

Workflow conclusion: success

Worker result: needs_human

Canonical: unknown

## Summary

Blocked before full classification: the provided preflight artifact is compacted/truncated and only hydrates 20 of 40 listed PR candidates. Plan mode requires target_kind and target_updated_at from the hydrated artifact for every listed open candidate, and this worker cannot re-fetch GitHub state directly or mutate.

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
| #83517 | keep_related | planned | related | Useful independent inventory item; no canonical/duplicate close path and merge is blocked. |
| #93098 | needs_human | blocked | needs_human | Missing hydrated live state. |
| #83632 | keep_related | planned | related | Useful independent inventory item; no canonical/duplicate close path and merge is blocked. |
| #93100 | needs_human | blocked | needs_human | Missing hydrated live state. |
| #84434 | keep_related | planned | related | Ready-for-maintainer candidate, but merge is blocked by job policy and missing merge preflight. |
| #84438 | keep_related | planned | related | Failed proof blocks merge/fixed-by closeout; keep for maintainer review. |
| #84453 | keep_related | planned | related | Useful independent candidate; merge is blocked. |
| #84465 | keep_related | planned | related | Related to other apiKey/model PRs, but artifact lacks enough evidence to pick a canonical duplicate/superseded path. |
| #84485 | keep_related | planned | related | Useful independent candidate; merge is blocked. |
| #84525 | keep_related | planned | related | Related to other apiKey/model PRs, but no safe canonical/duplicate decision from the artifact. |
| #84545 | keep_related | planned | related | Failing checks block merge/fixed-by closeout. |
| #84547 | keep_related | planned | related | Failed proof blocks merge/fixed-by closeout. |
| #84554 | needs_human | blocked | needs_human | Missing hydrated live state. |
| #84557 | needs_human | blocked | needs_human | Missing hydrated live state. |
| #84573 | needs_human | blocked | needs_human | Missing hydrated live state. |
| #84584 | needs_human | blocked | needs_human | Missing hydrated live state. |
| #84589 | needs_human | blocked | needs_human | Missing hydrated live state. |
| #84636 | needs_human | blocked | needs_human | Missing hydrated live state. |
| #84645 | needs_human | blocked | needs_human | Missing hydrated live state. |
| #84708 | needs_human | blocked | needs_human | Missing hydrated live state. |
| #84728 | needs_human | blocked | needs_human | Missing hydrated live state. |
| #84738 | needs_human | blocked | needs_human | Missing hydrated live state. |
| #84772 | needs_human | blocked | needs_human | Missing hydrated live state. |
| #90749 | needs_human | blocked | needs_human | Missing hydrated live state. |
| #90750 | needs_human | blocked | needs_human | Missing hydrated live state. |
| #88872 | needs_human | blocked | needs_human | Missing hydrated live state. |
| #90799 | needs_human | blocked | needs_human | Missing hydrated live state. |
| #90836 | needs_human | blocked | needs_human | Missing hydrated live state. |
| #93113 | needs_human | blocked | needs_human | Missing hydrated live state. |
| #93051 | needs_human | blocked | needs_human | Missing hydrated live state. |
| #73704 | keep_related | planned | related | Useful independent inventory item; merge is blocked and bot review resolution is unavailable. |
| #80823 | keep_related | planned | related | Ready-for-maintainer candidate; merge is blocked. |
| #81333 | keep_related | planned | related | Useful but broad/waiting-on-author; no closure path. |
| #81341 | keep_related | planned | related | Failed proof/check blocks merge/fixed-by closeout. |
| #81714 | keep_related | planned | related | Useful but broad/waiting-on-author; no closure path. |
| #82165 | keep_related | planned | related | Useful independent feature candidate; merge is blocked. |
| #82354 | keep_related | planned | related | Failed proof blocks merge/fixed-by closeout. |
| #82950 | keep_related | planned | related | Security-shaped title is cleared by artifact posture; keep as independent candidate. Merge blocked. |
| #83244 | keep_related | planned | related | Draft and failed proof block merge/closeout. |
| #83698 | keep_related | planned | related | Failed proof blocks merge/fixed-by closeout. |

## Needs Human

- Hydrated artifact is incomplete for #93098, #93100, #84554, #84557, #84573, #84584, #84589, #84636, #84645, #84708, #84728, #84738, #84772, #90749, #90750, #88872, #90799, #90836, #93113, and #93051; target_kind and target_updated_at are unavailable from the provided artifact.
