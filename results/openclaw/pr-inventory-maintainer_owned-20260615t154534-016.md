---
repo: "openclaw/openclaw"
cluster_id: "pr-inventory-maintainer_owned-20260615T154534-016"
mode: "plan"
run_id: "27560323972-1-16"
workflow_run_id: "27560323972"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27560323972"
head_sha: "61d2d7a61eeb9d8fe22ed20cc15f46b2ff4a4bb2"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-07-06T21:34:51.391Z"
canonical: null
canonical_issue: null
canonical_pr: null
actions_total: 25
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 5
---

# pr-inventory-maintainer_owned-20260615T154534-016

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27560323972](https://github.com/openclaw/clownfish/actions/runs/27560323972)

Workflow conclusion: success

Worker result: planned

Canonical: unknown

## Summary

Plan-only PR inventory classification. The hydrated artifact reports no security-sensitive items, no shared canonical, and no allowed merge/fix path; all actions are non-mutating recommendations.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 25 |
| Fix executed | 0 |
| Fix failed | 0 |
| Fix blocked | 0 |
| Applied executions | 0 |
| Apply blocked | 0 |
| Apply skipped | 0 |
| Needs human | 5 |

## Fix Execution Actions

| Action | Status | Target | Branch | Reason |
| --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |

## Apply Audit

| Attempt | Source | Target | Action | Status | Reason |
| --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |  |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #91291 | keep_independent | planned | independent | Conservative non-mutating classification only because hydrated live state is unavailable in the artifact. |
| #91506 | keep_related | planned | related | Related stacked PR; keep open pending normal stack review. |
| #86285 | keep_independent | planned | independent | Independent active fix PR; no duplicate/superseded evidence. |
| #86360 | keep_independent | planned | independent | Independent active PR waiting on author; no closure or merge path in this plan job. |
| #86540 | keep_independent | planned | independent | Independent active PR; conflicts and failing checks block merge but not non-mutating classification. |
| #86541 | keep_independent | planned | independent | Independent active fix PR; keep open for proof/review. |
| #86793 | keep_independent | planned | independent | Independent active PR; keep open for proof/review. |
| #86795 | keep_independent | planned | independent | Independent active PR; keep open for normal proof/review path. |
| #86796 | keep_independent | planned | independent | Independent active PR; keep open for proof/review. |
| #86797 | keep_independent | planned | independent | Independent active PR; keep open for proof/review. |
| #86932 | keep_independent | planned | independent | Independent draft PR; no closure or merge recommendation. |
| #84172 | needs_human | planned | needs_human | Requires maintainer technical correctness judgment; plan job blocks merge/fix actions. |
| #87433 | keep_independent | planned | independent | Independent draft PR; keep open for author/proof follow-up. |
| #87437 | keep_independent | planned | independent | Purpose-built proof head; keep open until proof workflow/maintainer cleanup, not an inventory closeout. |
| #91023 | keep_independent | planned | independent | Conservative non-mutating classification only because hydrated live state is unavailable in the artifact. |
| #93114 | needs_human | planned | needs_human | Maintainer review is required, and hydrated live state is unavailable in the artifact. |
| #93076 | needs_human | planned | needs_human | Maintainer review is required, and hydrated live state is unavailable in the artifact. |
| #87764 | keep_independent | planned | independent | Independent feature PR; keep open for proof/review. |
| #87774 | keep_independent | planned | independent | Independent draft PR; linked issue is not a hydrated close target and the PR itself says not to auto-close the broader issue. |
| #87814 | keep_independent | planned | independent | Independent active PR waiting on author; failing checks block merge. |
| #87824 | keep_related | planned | related | Related base of the feed PR stack; draft feature work should remain open for stack review. |
| #87825 | keep_related | planned | related | Related stacked feed PR; keep open for ordered stack review. |
| #87826 | needs_human | planned | needs_human | Active stacked feature work with maintainer/product judgment needed; no automated close or merge path. |
| #87827 | needs_human | planned | needs_human | Active stacked feature work with maintainer/product judgment needed; no automated close or merge path. |
| #87850 | keep_independent | planned | independent | Independent active PR waiting on author; keep open for normal follow-up. |

## Needs Human

- #84172 requires maintainer technical correctness review for a large exec authorization rewrite.
- #93114 requires maintainer review but was not hydrated in the compacted preflight artifact.
- #93076 requires maintainer review but was not hydrated in the compacted preflight artifact.
- #87826 is active stacked feed policy work requiring maintainer/product judgment.
- #87827 is active stacked feed lifecycle work requiring maintainer/product judgment.
