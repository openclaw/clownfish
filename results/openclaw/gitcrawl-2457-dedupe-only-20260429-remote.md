---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-2457-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "25133499547"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25133499547"
head_sha: "70c8a777fa9eb04b416c45f07c80bfc38f2df21b"
workflow_conclusion: "success"
result_status: "needs_human"
published_at: "2026-06-15T04:57:52.975Z"
canonical: null
canonical_issue: null
canonical_pr: null
actions_total: 3
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 1
---

# gitcrawl-2457-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25133499547](https://github.com/openclaw/clownfish/actions/runs/25133499547)

Workflow conclusion: success

Worker result: needs_human

Canonical: unknown

## Summary

No GitHub mutations planned. Hydrated state shows two open, useful, overlapping contributor PRs for the same web UI draft-preservation family. #47992 is narrow but has failing checks and unresolved bot review findings; #54655 has passing checks but unresolved Codex/Greptile P2 findings and broader display-name churn. The canonical/consolidation path needs maintainer judgment before any closeout.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 3 |
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
| #47992 | needs_human | blocked | needs_human | Cannot choose #47992 as canonical or close it as superseded without maintainer direction because it is useful contributor work, has failing checks, has unresolved review findings, and conflicts with another useful open PR. |
| #54655 | needs_human | blocked | needs_human | #54655 may be the better canonical branch by checks and coverage, but unresolved P2 review findings and broader unrelated display-name changes prevent treating it as an obvious canonical or closing #47992 against it without maintainer judgment. |
| #54649 | keep_closed | skipped | superseded | Already closed before this run; no mutation is allowed or needed for this context issue. |

## Needs Human

- Choose the canonical path for the overlapping useful PRs #47992 and #54655: repair/rebase #47992, repair/narrow #54655, or create a credited replacement/consolidation path in a separate fix-enabled job. Do not close either contributor PR until that path is explicit and contributor credit is preserved.
