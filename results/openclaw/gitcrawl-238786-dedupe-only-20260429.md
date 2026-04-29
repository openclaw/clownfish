---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-238786-dedupe-only-20260429"
mode: "autonomous"
run_id: "25104668076"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25104668076"
head_sha: "060ab197c47d0017911b7555f5dc7306282e5988"
workflow_conclusion: "failure"
result_status: "planned"
published_at: "2026-04-29T10:53:56.937Z"
canonical: "https://github.com/openclaw/openclaw/issues/72176"
canonical_issue: "https://github.com/openclaw/openclaw/issues/72176"
canonical_pr: null
actions_total: 15
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-238786-dedupe-only-20260429

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25104668076](https://github.com/openclaw/clownfish/actions/runs/25104668076)

Workflow conclusion: failure

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/72176

## Summary

Representative #58549 is already closed as implemented, so #72176 is the best live canonical for the current duplicate-delivery regression family. No new close actions are safe: #44930, #58443, and #72702 have distinct scope or insufficient hydrated fix evidence, while the remaining candidate refs are already closed and recorded as skipped keep_closed actions.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 15 |
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
| #44930 | keep_related | planned | related | Same Telegram gateway/offset area as the duplicate cluster, but not the same root symptom as #72176. |
| #51182 | keep_closed | skipped | fixed_by_candidate | Already closed; no closure action is valid. |
| #58443 | keep_related | planned | related | Related duplicate-delivery family, but broader and not a high-confidence duplicate of #72176. |
| #58549 | keep_closed | skipped | fixed_by_candidate | The original representative is obsolete as a live canonical because it is closed. |
| #58611 | keep_closed | skipped | fixed_by_candidate | Already closed; no closure action is valid. |
| #59113 | keep_closed | skipped | fixed_by_candidate | Already closed; no closure action is valid. |
| #59132 | keep_closed | skipped | fixed_by_candidate | Already closed; no closure action is valid. |
| #59331 | keep_closed | skipped | fixed_by_candidate | Already closed; no closure action is valid. |
| #59951 | keep_closed | skipped | fixed_by_candidate | Already closed; no closure action is valid. |
| #60202 | keep_closed | skipped | fixed_by_candidate | Already closed; no closure action is valid. |
| #61575 | keep_closed | skipped | fixed_by_candidate | Already closed; no closure action is valid. |
| #65701 | keep_closed | skipped | fixed_by_candidate | Already closed; no closure action is valid. |
| #72176 | keep_canonical | planned | canonical | Best live canonical issue after #58549 was closed; keep it open for the active fix-review path. |
| #72536 | keep_closed | skipped | duplicate | Already closed as duplicate of the selected live canonical; no closure action is valid. |
| #72702 | keep_related | planned | related | Related to the live duplicate-delivery canonical, but not a high-confidence duplicate under the closure policy. |

## Needs Human

- none
