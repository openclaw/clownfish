---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-95-plan-ramp"
mode: "plan"
run_id: "27516234778"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27516234778"
head_sha: "55c1d70c5da8da84c47be43e492f5bca34739d4e"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T04:05:51.357Z"
canonical: "#92147"
canonical_issue: "#92400"
canonical_pr: "#92147"
actions_total: 6
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 2
---

# gitcrawl-95-plan-ramp

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27516234778](https://github.com/openclaw/clownfish/actions/runs/27516234778)

Workflow conclusion: success

Worker result: planned

Canonical: #92147

## Summary

Plan-only classification for the Responses system-prompt cluster. The hydrated artifact reports no security-sensitive items. #92147 is the best live canonical PR because it preserves default behavior behind compat.systemPromptPlacement and carries runtime, provider, config, catalog, docs, and regression-test coverage. #92400 should remain the issue-side discussion thread pending maintainer/product decision. #92436, #92437, and #92439 overlap the same root cause and are planned as superseded by #92147 with credit-preserving close comments; no GitHub mutation is executed in plan mode.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 6 |
| Fix executed | 0 |
| Fix failed | 0 |
| Fix blocked | 0 |
| Applied executions | 0 |
| Apply blocked | 0 |
| Apply skipped | 0 |
| Needs human | 2 |

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
| #92147 | keep_canonical | planned | canonical |  |
| #92400 | keep_related | planned | related | Keep #92400 open as the issue-side product and maintainer decision thread until the canonical fix lands or maintainers decide the default Responses behavior should change. |
| #92436 | close_superseded | planned | superseded |  |
| #92437 | close_superseded | planned | superseded |  |
| #92439 | close_superseded | planned | superseded |  |
| #60385 | keep_closed | skipped | related |  |

## Needs Human

- #92400 requires maintainer/product decision before issue closure because it is labeled clawsweeper:needs-product-decision and the canonical fix path is still draft/unmerged.
- #92147 requires maintainer review before merge because it is draft and this job blocks merge/fix/raise_pr actions.
