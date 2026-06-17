---
repo: "openclaw/openclaw"
cluster_id: "repair-90468-single-replan-wave-20260617"
mode: "autonomous"
run_id: "27710804119"
workflow_run_id: "27710804119"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27710804119"
head_sha: "80f2057262e82e8e3a0d7a11c1b20c4711f99c85"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-17T18:51:37.355Z"
canonical: "https://github.com/openclaw/openclaw/pull/90468"
canonical_issue: null
canonical_pr: "https://github.com/openclaw/openclaw/pull/90468"
actions_total: 2
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 1
apply_skipped: 0
needs_human_count: 0
---

# repair-90468-single-replan-wave-20260617

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27710804119](https://github.com/openclaw/clownfish/actions/runs/27710804119)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/90468

## Summary

PR #90468 is the canonical repair target. It is open, maintainer-editable, narrow, non-security, and still needs a repair pass for the prompt-template argument parser before any merge path can be considered.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 2 |
| Fix executed | 0 |
| Fix failed | 0 |
| Fix blocked | 0 |
| Applied executions | 0 |
| Apply blocked | 1 |
| Apply skipped | 0 |
| Needs human | 0 |

## Repair Candidate

```json
{
  "target": "#90468",
  "source_refs": [
    "#90468"
  ],
  "repair_strategy": "repair_contributor_branch",
  "planned_actions": [
    "fix_needed",
    "build_fix_artifact"
  ],
  "summary": "Repair #90468 on the contributor branch by keeping prose apostrophes literal while preserving documented shell-style single and double quote parsing, including valid single-quote concatenation.",
  "pr_title": "fix(agents): keep apostrophes in prompt-template arguments",
  "pr_body": "## Summary\n- repair the prompt-template argument parser from #90468 so ordinary apostrophes and possessives stay literal\n- preserve shell-style single/double quoted spans and valid single-quote concatenation such as `foo'bar baz' next`\n- add focused parser regressions for contractions, plural possessives, standalone quoted spans, and concatenation\n\n## Credit\nThis repairs and carries forward @yetval's source PR: https://github.com/openclaw/openclaw/pull/90468.\n\n## Verification\n- `pnpm test packages/agent-core/src/harness/prompt-templates.test.ts`\n- `pnpm check:changed`",
  "likely_files": [
    "packages/agent-core/src/harness/prompt-template-arguments.ts",
    "packages/agent-core/src/harness/prompt-templates.test.ts"
  ],
  "validation_commands": [
    "pnpm test packages/agent-core/src/harness/prompt-templates.test.ts",
    "pnpm check:changed"
  ],
  "credit_notes": [
    "Preserve contributor credit for @yetval as the original PR author.",
    "Keep https://github.com/openclaw/openclaw/pull/90468 as the source PR and carry the apostrophe parsing fix forward on that branch.",
    "Release-note context should credit the user-facing parser fix without editing CHANGELOG.md directly."
  ],
  "source_job": "jobs/openclaw/inbox/repair-90468-single-replan-wave-20260617.md",
  "security_sensitive": false,
  "security_routed_refs": [],
  "needs_human": [],
  "repair_status": "pushed",
  "terminal": true
}
```

## Fix Execution Actions

| Action | Status | Target | Branch | Reason |
| --- | --- | --- | --- | --- |
| repair_contributor_branch | pushed | https://github.com/openclaw/openclaw/pull/90468 |  |  |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #90468 | merge_canonical | blocked | fix_pr | job does not allow merge |

## Apply Audit

| Attempt | Source | Target | Action | Status | Reason |
| --- | --- | --- | --- | --- |
|  | post_flight | #90468 | merge_canonical | blocked | job does not allow merge |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #90468 | fix_needed | planned | canonical | The PR targets a real current-main parser bug and is the best canonical path because the branch is maintainer-editable and narrow, but it still requires a repair pass plus fresh branch verification before merge. |
| cluster:repair-90468-single-replan-wave-20260617 | build_fix_artifact | planned |  | A complete executable repair artifact is safe: the affected surface is narrow, the unresolved review concern is concrete, and contributor credit can be preserved by updating the existing maintainer-editable PR branch. |

## Needs Human

- none
