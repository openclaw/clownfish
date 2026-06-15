---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-2234-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "25132438084"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25132438084"
head_sha: "8b6ee7ffa77533bbae10cb97289fd78b142edfab"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T04:57:52.952Z"
canonical: "https://github.com/openclaw/openclaw/pull/48887"
canonical_issue: null
canonical_pr: "https://github.com/openclaw/openclaw/pull/48887"
actions_total: 7
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 1
needs_human_count: 0
---

# gitcrawl-2234-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25132438084](https://github.com/openclaw/clownfish/actions/runs/25132438084)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/48887

## Summary

Closed representative #44824 is no longer canonical. The best current canonical path is open PR #48887 for the native PowerShell docs formatter fix; #44293 is covered by that path but closeout is blocked until the PR lands cleanly. #44291 remains a broader PowerShell CI-smoke follow-up, #54275 is an independent docs-reference cleanup, and closed context refs remain closed.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 7 |
| Fix executed | 0 |
| Fix failed | 0 |
| Fix blocked | 0 |
| Applied executions | 0 |
| Apply blocked | 0 |
| Apply skipped | 1 |
| Needs human | 0 |

## Fix Execution Actions

| Action | Status | Target | Branch | Reason |
| --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #44293 | close_fixed_by_candidate | skipped | fixed_by_candidate | The issue is covered by the canonical PR path, but fixed-by-candidate closure must wait for #48887 or an equivalent landed fix. |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #3460 | keep_closed | skipped | independent | Already-closed unrelated linked context; no mutation planned. |
| #44291 | keep_related | planned | related | Same PowerShell contributor-workflow area, but broader scope and distinct remaining CI coverage work. |
| #44293 | close_fixed_by_candidate | blocked | fixed_by_candidate | The issue is covered by the canonical PR path, but fixed-by-candidate closure must wait for #48887 or an equivalent landed fix. |
| #44824 | keep_closed | skipped | superseded | Closed representative is obsolete and superseded by the open #48887 canonical path; no action on an already-closed PR. |
| #48887 | keep_canonical | planned | canonical | Best surviving canonical implementation path, but it remains open for maintainer review and clean checks. |
| #49913 | keep_closed | skipped | superseded | Already-closed overlapping PR remains historical evidence only. |
| #54275 | keep_independent | planned | independent | Separate docs-reference cleanup with its own unresolved generated-docs review concern; keep it out of this formatter PowerShell cluster. |

## Needs Human

- none
