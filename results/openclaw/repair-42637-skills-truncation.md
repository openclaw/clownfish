---
repo: "openclaw/openclaw"
cluster_id: "repair-42637-skills-truncation"
mode: "autonomous"
run_id: "27745999850"
workflow_run_id: "27745999850"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27745999850"
head_sha: "e182f75656497e4b5d6d045040c445f71ff99857"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-18T08:14:01.953Z"
canonical: "#42637"
canonical_issue: null
canonical_pr: "#42637"
actions_total: 2
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# repair-42637-skills-truncation

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27745999850](https://github.com/openclaw/clownfish/actions/runs/27745999850)

Workflow conclusion: success

Worker result: planned

Canonical: #42637

## Summary

#42637 is the canonical useful contributor PR for the skills truncation fix, but it is not merge-ready because the latest hydrated state shows a failing check-test-types lane and unresolved latest ClawSweeper/Codex review blockers. Merge is blocked by the job, so Clownfish should repair the contributor branch or open/update the configured repair branch while preserving credit.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 2 |
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
  "target": "#42637",
  "source_refs": [
    "#42637"
  ],
  "repair_strategy": "repair_contributor_branch",
  "planned_actions": [
    "fix_needed",
    "build_fix_artifact"
  ],
  "summary": "Repair #42637 by making the contributor PR landable for the omitted-skill-name truncation defect. Keep the change narrow: ensure omitted skill lookup keys are visible when truncation occurs, keep the emitted skills prompt within maxSkillsPromptChars, prioritize at least one exact lookup key under tight budgets, and fix the latest check-test-types failure without changing unrelated skills behavior.",
  "pr_title": "fix(skills): list omitted skill names when prompt is truncated",
  "pr_body": "## Summary\n- repairs #42637 so truncated skills prompts expose exact omitted skill lookup keys without exceeding the configured prompt budget\n- keeps the fix scoped to skills prompt truncation and the compact-format regression coverage\n- preserves contributor credit for @imwyvern and source PR https://github.com/openclaw/openclaw/pull/42637\n\n## Validation\n- pnpm test src/skills/loading/compact-format.test.ts\n- pnpm exec tsc -p tsconfig.core.json --noEmit\n- pnpm check:changed --base origin/main\n\nClownfish repair branch for cluster repair-42637-skills-truncation.",
  "likely_files": [
    "src/skills/loading/workspace.ts",
    "src/skills/loading/compact-format.test.ts"
  ],
  "validation_commands": [
    "pnpm test src/skills/loading/compact-format.test.ts",
    "pnpm exec tsc -p tsconfig.core.json --noEmit",
    "pnpm check:changed --base origin/main"
  ],
  "credit_notes": [
    "Credit @imwyvern as the contributor PR author/source PR in the repair PR body.",
    "Preserve source PR attribution for https://github.com/openclaw/openclaw/pull/42637.",
    "Carry forward the original fix intent: list omitted skill names/lookup keys when prompt truncation drops installed skills."
  ],
  "source_job": "jobs/openclaw/inbox/repair-42637-skills-truncation.md",
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
| #42637 | fix_needed | planned | canonical | Canonical contributor PR is useful and in scope, but it needs a narrow repair before any merge or closeout path is safe. |
| repair-42637-skills-truncation | build_fix_artifact | planned |  | An executable fix artifact is needed because the canonical PR is not merge-ready and the job explicitly asks Clownfish to create or update one implementation PR from the repair branch. |

## Needs Human

- none
