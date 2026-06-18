---
repo: "openclaw/openclaw"
cluster_id: "repair-90468-single-replan-wave-20260617"
mode: "autonomous"
run_id: "27744912745"
workflow_run_id: "27744912745"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27744912745"
head_sha: "5e4579520d2c0f67afd482b6e40b12f7d4a3caa3"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-18T08:11:44.337Z"
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

Run: [https://github.com/openclaw/clownfish/actions/runs/27744912745](https://github.com/openclaw/clownfish/actions/runs/27744912745)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/90468

## Summary

PR #90468 is the canonical repair path. It is open, maintainer-editable, narrow, and already carries the contributor's prompt-template apostrophe fix plus a later Clownfish repair commit, but it is not merge-ready in this job because merge is blocked by permissions, the hydrated review state still includes CHANGES_REQUESTED, and one CI lane is failing. Plan repair/validation on the existing contributor branch rather than replacing it.

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
  "summary": "Repair contributor PR #90468 in place so prompt-template slash-command argument parsing preserves ordinary apostrophes while retaining documented shell-style single and double quote grouping, including embedded single-quote concatenation. Rebase/refresh the branch against current main, address the maintainer review regressions, rerun focused tests plus check:changed, and leave contributor credit on the original PR.",
  "pr_title": "fix(agents): keep apostrophes in prompt-template arguments",
  "pr_body": "## Summary\n- Repairs #90468 in place so prompt-template slash-command arguments keep ordinary apostrophes in contractions and possessives.\n- Preserves shell-style quoted spans, including valid embedded single-quote concatenation such as `foo'bar baz' next`.\n- Adds/keeps regressions for contractions before later standalone quoted spans and plural possessives before quoted spans.\n\n## Credit\nThis carries forward @yetval's original fix and proof from https://github.com/openclaw/openclaw/pull/90468. Clownfish repair work should stay on that contributor PR branch when possible so attribution remains in the original PR history.\n\n## Verification\n- `pnpm test packages/agent-core/src/harness/prompt-templates.test.ts`\n- `pnpm check:changed`\n\n## Notes\nCurrent main at 70489061cab62786b794ac593f85933b3ade2063 still treats every apostrophe as a quote delimiter in `parseCommandArgs`, which corrupts examples like `don't 'quoted text' next`. The executor should re-fetch #90468 head eee751c6b3514f56a8bc18b98d92bc29acf9bbf9, rebase if needed, verify that the maintainer review regressions remain fixed, and patch only the parser/tests if not.",
  "likely_files": [
    "packages/agent-core/src/harness/prompt-template-arguments.ts",
    "packages/agent-core/src/harness/prompt-templates.test.ts"
  ],
  "validation_commands": [
    "pnpm test packages/agent-core/src/harness/prompt-templates.test.ts",
    "pnpm check:changed"
  ],
  "credit_notes": [
    "Preserve @yetval as the original contributor on https://github.com/openclaw/openclaw/pull/90468.",
    "Keep the repair on the existing PR branch when possible; do not replace the PR unless maintainer_can_modify becomes false, the branch becomes unsafe, or unrelated churn appears.",
    "PR/release-note context should credit @yetval for identifying and implementing the apostrophe parsing fix; Clownfish repair commits should be described as follow-up review repair only."
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
| #90468 | fix_needed | planned | canonical | The canonical PR is useful and maintainer-editable, but it still needs a repair/validation pass on the contributor branch before any future merge decision. |
| cluster:repair-90468-single-replan-wave-20260617 | build_fix_artifact | planned |  | Build an executable in-place repair plan for #90468; do not open a replacement PR unless the branch becomes uneditable or broad during execution. |

## Needs Human

- none
