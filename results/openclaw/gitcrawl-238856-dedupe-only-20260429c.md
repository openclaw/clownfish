---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-238856-dedupe-only-20260429c"
mode: "autonomous"
run_id: "25105234648"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25105234648"
head_sha: "195790bbe8a80284a2d1f7ba4ba947b141428867"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-04-29T11:19:47.392Z"
canonical: "https://github.com/openclaw/openclaw/issues/72578"
canonical_issue: "https://github.com/openclaw/openclaw/issues/72578"
canonical_pr: "https://github.com/openclaw/openclaw/pull/72004"
actions_total: 8
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 1
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-238856-dedupe-only-20260429c

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25105234648](https://github.com/openclaw/clownfish/actions/runs/25105234648)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/72578

## Summary

Hydrated state splits into related but distinct Control UI duplicate-message families. #72578 is the best live canonical for the history/optimistic-message merge duplicate covered by #72963; #71992 is covered by the open focused PR #72004 but should stay open until that lands; #63956 is a separate streaming layout issue. Planned one high-confidence duplicate close and a narrow non-mutating fix artifact for the #72578/#72963 subfamily because no viable hydrated PR exists and this job cannot open one.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 8 |
| Fix executed | 0 |
| Fix failed | 0 |
| Fix blocked | 0 |
| Applied executions | 0 |
| Apply blocked | 1 |
| Apply skipped | 0 |
| Needs human | 0 |

## Fix Execution Actions

| Action | Status | Target | Branch | Reason |
| --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #72963 | close_duplicate | blocked | duplicate | target changed since worker review |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #72578 | keep_canonical | planned | canonical | Best live canonical issue for the history/optimistic-message merge duplicate subfamily; leave open for fix and validation. |
| #72963 | close_duplicate | planned | duplicate | True duplicate of the open #72578 canonical subfamily with no unique remaining reproduction path after accounting for the separate closed TTS path. |
| #71992 | keep_related | planned | fixed_by_candidate | Covered by candidate PR #72004, but not safe to close before the fix lands because current main is still affected and the hydrated review context says to keep the issue open until landing. |
| #72004 | keep_canonical | planned | canonical | Canonical PR candidate for the #71992 race subfamily; no merge action is emitted because allow_merge is false for this job. |
| #63956 | keep_related | planned | related | Related Control UI duplicate-message family, but not a true duplicate of #72578 or fixed by #72004; keep open for a separate narrow follow-up. |
| #69208 | keep_related | planned | related | Broader related umbrella, not the canonical issue for this narrow duplicate-close decision. |
| cluster:gitcrawl-238856-dedupe-only-20260429c | fix_needed | planned |  | A narrow follow-up fix is needed for the #72578/#72963 subfamily, but this job blocks direct fix and PR creation. |
| cluster:gitcrawl-238856-dedupe-only-20260429c | build_fix_artifact | planned |  | Non-mutating artifact captures the narrow repair path without opening or pushing a PR. |

## Needs Human

- none
