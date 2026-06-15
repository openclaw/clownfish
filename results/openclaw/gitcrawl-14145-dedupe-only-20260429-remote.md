---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-14145-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "25129783627"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25129783627"
head_sha: "57b657bc4ce868d681ea2ae867230254e2cbce60"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T04:57:52.839Z"
canonical: "https://github.com/openclaw/openclaw/pull/51737"
canonical_issue: null
canonical_pr: "https://github.com/openclaw/openclaw/pull/51737"
actions_total: 15
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 1
---

# gitcrawl-14145-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25129783627](https://github.com/openclaw/clownfish/actions/runs/25129783627)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/51737

## Summary

Classified 15 hydrated refs from cluster 14145. #51737 remains the canonical provider-qualified agents-overview model-picker PR. #50767 is now treated as already closed and kept closed/skipped with no mutation; the remaining open refs stay as related or independent subfamilies, with #68927 needing a maintainer product decision. No security-sensitive items were present in the preflight artifact, and no merge or fix PR actions are planned because the job blocks merge/fix/raise_pr.

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
| #38161 | keep_independent | planned | independent | Different feature area and broad diff; keep out of this model-picker dedupe cluster. |
| #41933 | keep_related | planned | related | Related session-dropdown tracker covered by an open candidate, not by current main. |
| #43211 | keep_related | planned | related | Real related provider-model bug, but not a duplicate and not closeable. |
| #46935 | keep_related | planned | related | Related open issue with an open candidate, but no landed fix to close against. |
| #48666 | keep_related | planned | superseded | Superseded by narrower #48671, but keep open rather than closing useful contributor context before the canonical path lands. |
| #48671 | keep_related | planned | related | Related subfamily canonical; keep open for its own review path. |
| #50141 | keep_related | planned | related | Related but distinct slash-command subfamily. |
| #50193 | keep_related | planned | related | Same UI area but different product/UX scope; keep open. |
| #50767 | keep_closed | skipped | superseded | Already closed before replay; no mutation planned. |
| #51737 | keep_canonical | planned | canonical | Best surviving canonical for the cluster's provider-qualified model picker ref issue. |
| #59932 | keep_independent | planned | independent | Different subsystem and root cause. |
| #61046 | keep_related | planned | related | Related model-provider inference work, but distinct from the UI picker canonical. |
| #62100 | keep_related | planned | related | Related provider-ref bug with unresolved review blockers. |
| #64181 | keep_independent | planned | independent | Different hooks/slug-generation root cause. |
| #68927 | needs_human | planned | needs_human | Maintainer product decision required before close or land. |

## Needs Human

- #68927 requires maintainer product direction: switch visible Control UI model picker labels to exact provider/model refs, or keep friendly labels and close by explicit product decision.
