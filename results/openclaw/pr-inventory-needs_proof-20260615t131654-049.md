---
repo: "openclaw/openclaw"
cluster_id: "pr-inventory-needs_proof-20260615T131654-049"
mode: "plan"
run_id: "27549045653"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27549045653"
head_sha: "e8e65d821b5c55a11a8a30d2023428743182215a"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T13:28:19.677Z"
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

# pr-inventory-needs_proof-20260615T131654-049

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27549045653](https://github.com/openclaw/clownfish/actions/runs/27549045653)

Workflow conclusion: success

Worker result: planned

Canonical: unknown

## Summary

Plan-only PR inventory classification. The cluster preflight artifact is compacted and hydrates 20 of 40 listed PRs; hydrated open PRs are kept non-mutating because merge/fix/raise_pr are blocked and proof/check/review gates are incomplete. Already-closed hydrated PRs are kept closed. Unhydrated refs need a fresh preflight before any reliable action.

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
| #91279 | needs_human | planned | needs_human | Missing hydrated live state. |
| #91280 | needs_human | planned | needs_human | Missing hydrated live state. |
| #91286 | needs_human | planned | needs_human | Missing hydrated live state. |
| #91288 | needs_human | planned | needs_human | Missing hydrated live state. |
| #93226 | needs_human | planned | needs_human | Missing hydrated live state. |
| #39102 | keep_related | planned | related | Useful scoped work, but merge/review gates are not satisfied. |
| #92700 | needs_human | planned | needs_human | Missing hydrated live state. |
| #91943 | needs_human | planned | needs_human | Missing hydrated live state. |
| #82540 | needs_human | planned | needs_human | Missing hydrated live state. |
| #50483 | keep_related | planned | related | Potentially useful fix, but proof/review gates are incomplete. |
| #54585 | keep_closed | skipped | superseded | Already closed items must not receive close actions. |
| #55341 | keep_related | planned | related | Substantive work, but checks and proof block stronger action. |
| #93271 | needs_human | planned | needs_human | Missing hydrated live state. |
| #93266 | needs_human | planned | needs_human | Missing hydrated live state. |
| #89238 | needs_human | planned | needs_human | Missing hydrated live state. |
| #55927 | keep_related | planned | related | Needs proof and review; no mutating action is supported. |
| #56357 | keep_related | planned | related | Narrow useful candidate, but proof/check gates are incomplete. |
| #56398 | keep_related | planned | related | Narrow candidate, but proof failed and branch cannot be repaired by maintainers. |
| #56706 | keep_closed | skipped | superseded | Already closed items must not receive close actions. |
| #56720 | keep_related | planned | related | Useful narrow fix, but proof/core failure blocks stronger action. |
| #60229 | keep_closed | skipped | superseded | Already closed items must not receive close actions. |
| #60485 | keep_closed | skipped | superseded | Already closed items must not receive close actions. |
| #60630 | keep_closed | skipped | superseded | Already closed items must not receive close actions. |
| #93273 | needs_human | planned | needs_human | Missing hydrated live state. |
| #60683 | keep_closed | skipped | superseded | Already closed items must not receive close actions. |
| #60698 | keep_closed | skipped | superseded | Already closed items must not receive close actions. |
| #60868 | keep_closed | skipped | superseded | Already closed items must not receive close actions. |
| #60934 | keep_closed | skipped | superseded | Already closed items must not receive close actions. |
| #60981 | keep_related | planned | related | Broad risky hardening/feature work needs maintainer review and proof; no mutating action is supported. |
| #61242 | keep_closed | skipped | superseded | Already closed items must not receive close actions. |
| #61322 | keep_related | planned | related | Narrow useful candidate, but proof/check gates are incomplete. |
| #61576 | keep_related | planned | related | Large product/architecture contribution needs maintainer judgment and proof. |
| #61624 | needs_human | planned | needs_human | Missing hydrated live state. |
| #93267 | needs_human | planned | needs_human | Missing hydrated live state. |
| #61675 | needs_human | planned | needs_human | Missing hydrated live state. |
| #61973 | needs_human | planned | needs_human | Missing hydrated live state. |
| #62021 | needs_human | planned | needs_human | Missing hydrated live state. |
| #62157 | needs_human | planned | needs_human | Missing hydrated live state. |
| #62201 | needs_human | planned | needs_human | Missing hydrated live state. |
| #62338 | needs_human | planned | needs_human | Missing hydrated live state. |

## Needs Human

- Fresh cluster preflight is required for unhydrated refs: #91279, #91280, #91286, #91288, #93226, #92700, #91943, #82540, #93271, #93266, #89238, #93273, #61624, #93267, #61675, #61973, #62021, #62157, #62201, #62338.
