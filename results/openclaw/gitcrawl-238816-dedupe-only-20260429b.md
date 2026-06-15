---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-238816-dedupe-only-20260429b"
mode: "autonomous"
run_id: "25107689043"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25107689043"
head_sha: "904a86eec936498f7b09cd1b845053509b2c784e"
workflow_conclusion: "success"
result_status: "needs_human"
published_at: "2026-06-15T04:57:52.641Z"
canonical: "https://github.com/openclaw/openclaw/issues/47558"
canonical_issue: "https://github.com/openclaw/openclaw/issues/47558"
canonical_pr: null
actions_total: 5
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 1
---

# gitcrawl-238816-dedupe-only-20260429b

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25107689043](https://github.com/openclaw/clownfish/actions/runs/25107689043)

Workflow conclusion: success

Worker result: needs_human

Canonical: https://github.com/openclaw/openclaw/issues/47558

## Summary

No GitHub mutations planned. #47558 remains the canonical open issue because current main is only partially fixed and no PR is merge-ready. The hinted PR #59658 is focused, but the hydrated review state does not prove it is the best canonical PR; maintainer selection is needed before superseding useful contributor PRs.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 5 |
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
| #47558 | keep_canonical | planned | canonical | Original report remains open and current; no candidate PR has landed or cleared review. |
| #47935 | keep_related | planned | related | Useful overlapping repair candidate; keep open because no canonical PR has been selected and closing would risk losing contributor credit. |
| #49430 | keep_related | planned | related | Useful overlapping repair candidate; keep open pending maintainer selection of the canonical branch. |
| #56157 | keep_related | planned | related | Related to #47558 but too broad and not safe as the canonical dedupe target; keep open rather than close without a selected replacement path. |
| #59658 | needs_human | blocked | needs_human | #59658 may be repairable, but the hydrated evidence does not verify it as the best live canonical PR among #47935, #49430, and #59658. |

## Needs Human

- Choose the canonical repair path for #47558 among #47935, #49430, and #59658, or direct a replacement. #59658 is the gitcrawl hint, but hydrated review comments still flag depth policy, ACP-only streamTo, and deny-list issues; #56157 is related but broad and failing checks.
