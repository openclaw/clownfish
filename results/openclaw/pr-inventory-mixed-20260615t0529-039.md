---
repo: "openclaw/openclaw"
cluster_id: "pr-inventory-mixed-20260615T0529-039"
mode: "plan"
run_id: "27526375733"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27526375733"
head_sha: "575573c3a749b924aa260c57f419b6ec1b610ff8"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T05:44:15.388Z"
canonical: null
canonical_issue: null
canonical_pr: null
actions_total: 10
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# pr-inventory-mixed-20260615T0529-039

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27526375733](https://github.com/openclaw/clownfish/actions/runs/27526375733)

Workflow conclusion: success

Worker result: planned

Canonical: unknown

## Summary

Plan-only PR inventory classification for 10 listed candidates. No GitHub mutations are planned because this is not a dedupe cluster, merge/fix actions are blocked, low-signal closeout is disabled, and open PRs still require maintainer review, proof, author follow-up, branch refresh, or review-bot resolution. No security-sensitive hydrated items were detected.

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
| #79568 | keep_independent | planned | independent | Small useful docs rearrangement with maintainer-review and branch-refresh gates; not a duplicate, superseded, low-signal closeout, merge, or fix candidate. |
| #79398 | keep_independent | planned | independent | Substantive standalone test/eval addition awaiting maintainer review and branch refresh; no safe close or merge action is available. |
| #79378 | keep_independent | planned | independent | Narrow test guard remains standalone, but failed proof and branch-refresh gates block merge or fixed-by closeout. |
| #79186 | keep_independent | planned | independent | Standalone Slack behavior change with failed proof; not closeable as duplicate/superseded and merge/fix are blocked. |
| #79141 | keep_independent | planned | independent | Open standalone refactor/guidance PR with failed proof and pending author changes; closeout and merge are not justified. |
| #78247 | keep_related | planned | related | Related model-usage work exists, but #78247 is not a duplicate of #87861 and remains independently blocked on proof/author changes. |
| #78130 | keep_related | planned | related | Plausible candidate for hydrated issue #77831, but failed proof and related memory-core overlap mean it should stay related rather than be closed, merged, or used for fixed-by closeout. |
| #78090 | keep_related | planned | related | This PR is related to and may document the open #77930 recovery path, but maintainer-review/proof gates block fixed-by closeout or merge. |
| #78072 | keep_closed | skipped | superseded | Already closed in live hydrated state; no closure action is valid. |
| #78071 | keep_independent | planned | independent | Focused gateway regression coverage should remain independently reviewable; branch-refresh/review gates block merge and there is no duplicate/superseded basis for closure. |

## Needs Human

- none
