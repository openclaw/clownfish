---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-66-bulk-plan-20260615-a"
mode: "plan"
run_id: "27523135515"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27523135515"
head_sha: "2eb7becb97c14f307a0a4930f6deab62b7223dde"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T04:07:30.414Z"
canonical: "#88548"
canonical_issue: "#88548"
canonical_pr: "#91728"
actions_total: 7
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-66-bulk-plan-20260615-a

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27523135515](https://github.com/openclaw/clownfish/actions/runs/27523135515)

Workflow conclusion: success

Worker result: planned

Canonical: #88548

## Summary

Plan-mode classification for seven open cluster candidates. #88548 remains the best live canonical issue. #91728 is the focused structural PR path for the non-security live-catalog/static-shadowing work, but merge is blocked by job frontmatter. #72829 is quarantined because the job explicitly marks it as a security-signal ref. Per-model Claude Opus 4.8 static-bump PRs #91870 and #91875 are superseded by #91728, with contributor credit preserved in planned close comments.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 7 |
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
| #88548 | keep_canonical | planned | canonical | #88548 is open, broadest in scope, and has current comments tying the concrete Claude Opus 4.8 instance and structural PR path back to the same root cause. |
| #91728 | keep_related | planned | related | #91728 is the narrow structural candidate fix for #88548, but merge is outside this plan-mode job's allowed action set. |
| #72829 | route_security | planned | security_sensitive | The job explicitly marks #72829 as a security-signal ref requiring quarantine; route only this item and continue non-security classification. |
| #72805 | keep_related | planned | related | #72805 belongs to the same Copilot catalog family, but it retains a narrower static fallback-list/product-decision wrinkle, so it should not be closed as a duplicate in this run. |
| #91869 | keep_related | planned | related | #91869 is a concrete reproduction of #88548, but its live proof is useful canonical evidence, so keep it related instead of closing it before the structural fix lands. |
| #91870 | close_superseded | planned | superseded | #91870 is useful contributor work but is a per-model static override for the same behavior #91728 fixes structurally; planned close must preserve contributor credit and point to #91728. |
| #91875 | close_superseded | planned | superseded | #91875 overlaps the same per-model static override area and is superseded by the live-first structural fix path in #91728; planned close must preserve contributor credit. |

## Needs Human

- none
