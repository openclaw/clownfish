---
repo: "openclaw/openclaw"
cluster_id: "automerge-openclaw-openclaw-76668"
mode: "autonomous"
run_id: "27813721256"
workflow_run_id: "27813721256"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27813721256"
head_sha: "241c318ecbd41754be08ba6578a28a48d4fc1efc"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-19T08:09:42.278Z"
canonical: "#76668"
canonical_issue: "#76664"
canonical_pr: "#76668"
actions_total: 3
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# automerge-openclaw-openclaw-76668

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27813721256](https://github.com/openclaw/clownfish/actions/runs/27813721256)

Workflow conclusion: success

Worker result: planned

Canonical: #76668

## Summary

Automerge repair planning for PR #76668. The PR is the bounded contributor branch for the docs bug report issue form, but it is not merge-ready in this worker result because ClawSweeper's latest hydrated verdict still says maintainer review is needed and one relevant check is failing. Since merge and close are blocked by the job, the safe executable output is a repair-contributor-branch fix artifact that preserves WadydX credit.

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
| Needs human | 0 |

## Repair Candidate

```json
{
  "target": "#76668",
  "source_refs": [
    "#76668",
    "#76664",
    "#76619"
  ],
  "repair_strategy": "repair_contributor_branch",
  "planned_actions": [
    "build_fix_artifact"
  ],
  "summary": "Repair contributor PR #76668 in place, limited to the existing docs issue-template change and any narrow updates required by ClawSweeper, review feedback, or relevant failing checks. Do not merge or close from this worker result.",
  "pr_title": "meta(issue-template): add dedicated docs bug report form",
  "pr_body": "Repair contributor PR #76668 in place for the Clownfish automerge loop.\n\nScope:\n- Keep the docs bug report issue form implementation bounded to `.github/ISSUE_TEMPLATE/docs_bug_report.yml`.\n- Address only actionable ClawSweeper findings, required review feedback, rebase work, or relevant failing checks.\n- Preserve WadydX credit as the source PR author.\n\nValidation:\n- `git diff --check`\n- YAML parse check for `.github/ISSUE_TEMPLATE/docs_bug_report.yml`\n- `pnpm check:changed`\n\nLinked refs:\n- Source PR: https://github.com/openclaw/openclaw/pull/76668\n- Canonical issue: https://github.com/openclaw/openclaw/issues/76664\n- Supporting historical docs bug: https://github.com/openclaw/openclaw/issues/76619",
  "likely_files": [
    ".github/ISSUE_TEMPLATE/docs_bug_report.yml"
  ],
  "validation_commands": [
    "git diff --check",
    ".github/ISSUE_TEMPLATE/docs_bug_report.yml YAML parse check",
    "pnpm check:changed"
  ],
  "credit_notes": [
    "Preserve source PR credit for WadydX.",
    "Source PR: https://github.com/openclaw/openclaw/pull/76668.",
    "The PR is a contributor-authored one-file issue-template addition; prefer repairing the contributor branch because maintainer_can_modify is true."
  ],
  "source_job": "jobs/openclaw/inbox/automerge-openclaw-openclaw-76668.md",
  "security_sensitive": false,
  "security_routed_refs": [],
  "needs_human": [],
  "repair_status": null,
  "terminal": null
}
```

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
| #76619 | keep_closed | skipped | fixed_by_candidate | Already closed context ref; closure actions are invalid for closed items. |
| #76664 | keep_related | planned | related | Issue is linked to the candidate PR but cannot be closed before an allowed landed fix path. |
| #76668 | build_fix_artifact | planned | canonical | Automerge job requests a bounded ClawSweeper repair loop; branch is safe to update, but merge is blocked and current hydrated verdict/check state is not clean. |

## Needs Human

- none
