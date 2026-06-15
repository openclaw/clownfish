---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-112-plan-ramp"
mode: "plan"
run_id: "27519847280"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27519847280"
head_sha: "22d161e1bb6775432f7eb60a80e61685d748f60c"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T02:12:42.951Z"
canonical: "#90890"
canonical_issue: "#90890"
canonical_pr: "#91533"
actions_total: 6
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-112-plan-ramp

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27519847280](https://github.com/openclaw/clownfish/actions/runs/27519847280)

Workflow conclusion: success

Worker result: planned

Canonical: #90890

## Summary

Plan-mode classification only. #90890 remains the canonical issue for the user-visible bug. #91533 is the strongest live fix candidate, but merge is blocked by job frontmatter, so no merge action is planned. #90931, #90932, and #91447 overlap the same root cause and should remain related until a maintainer/applicator can choose or land the canonical fix path; no close actions are planned for useful contributor PRs in this read-only plan.

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
| #71639 | keep_closed | skipped | fixed_by_candidate | Historical merged context only; no mutation is valid or needed. |
| #90890 | keep_canonical | planned | canonical | Best surviving issue canonical for the root cause and user-visible reproduction. |
| #90931 | keep_related | planned | related | Same bug family as #90890 and plausibly superseded by #91533, but failing proof and useful contributor work make non-mutating related classification safer than closure in this plan. |
| #90932 | keep_related | planned | related | Overlaps the canonical issue but has broad unrelated changes and failing checks, so it should be kept related rather than closed or merged by this cluster plan. |
| #91447 | keep_related | planned | related | Valid overlapping fix candidate, but #91533 is the stronger current candidate; keep related without closing useful contributor work. |
| #91533 | keep_related | planned | fixed_by_candidate | Strongest live candidate fix for the canonical issue, retained as related/fixed_by_candidate because merge is out of scope for this plan-mode job. |

## Needs Human

- none
