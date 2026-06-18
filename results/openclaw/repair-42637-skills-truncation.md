---
repo: "openclaw/openclaw"
cluster_id: "repair-42637-skills-truncation"
mode: "autonomous"
run_id: "27748392914"
workflow_run_id: "27748392914"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27748392914"
head_sha: "fc76066bff3d7b96e985ea2d21353ecc20962274"
workflow_conclusion: "failure"
result_status: "planned"
published_at: "2026-06-18T09:06:05.188Z"
canonical: "https://github.com/openclaw/openclaw/pull/42637"
canonical_issue: null
canonical_pr: "https://github.com/openclaw/openclaw/pull/42637"
actions_total: 2
fix_executed: 0
fix_failed: 1
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# repair-42637-skills-truncation

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27748392914](https://github.com/openclaw/clownfish/actions/runs/27748392914)

Workflow conclusion: failure

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/42637

## Summary

#42637 is the canonical repair path for the skills truncation defect, but it is not merge-ready and merge is blocked by job policy. Plan a narrow repair of the existing editable contributor PR branch, preserving contributor credit, addressing the current bot findings, and validating with focused skills tests plus pnpm check:changed.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 2 |
| Fix executed | 0 |
| Fix failed | 1 |
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
  "summary": "Repair the editable contributor PR #42637 so truncated skills prompts include usable omitted skill lookup keys without exceeding maxSkillsPromptChars or dropping skills unnecessarily when compact mode would fit.",
  "pr_title": "fix(skills): list omitted skill names when prompt is truncated",
  "pr_body": "## Summary\n- Repair #42637 so truncated skills prompts include exact omitted skill lookup keys the agent can pass to `openclaw skills info <name>`.\n- Keep the full rendered skills prompt within `maxSkillsPromptChars`, including remote notes, compact notices, truncation guidance, and omitted-name lines.\n- Keep prompt-visible omitted names parseable and sanitized, and prefer compact rendering before dropping skills when compact mode fits.\n\n## Credit\nThis repair carries forward #42637 from @imwyvern, with source commits from @sakaenyeniceri5, and preserves that contributor intent and attribution.\n\n## Review Items To Address\n- Fix the `check-test-types` failure around the new `SkillStatusEntry` fixture.\n- Under tight note budgets, prioritize showing at least one exact omitted lookup key over longer guidance text.\n- Prove special characters, separators/commas, and control characters do not break prompt structure or the advertised `skills info` lookup path.\n- Prove remote eligibility notes do not force avoidable truncation when the complete compact catalog fits.\n\n## Verification\n- `pnpm test src/skills/loading/compact-format.test.ts src/cli/skills-cli.test.ts`\n- `pnpm check:changed`\n\nReal behavior proof should show before/after prompt output for a truncated catalog and confirm an omitted listed key resolves through `formatSkillInfo()` / `openclaw skills info <name>`.",
  "likely_files": [
    "src/skills/loading/workspace.ts",
    "src/skills/loading/compact-format.test.ts",
    "src/cli/skills-cli.test.ts"
  ],
  "validation_commands": [
    "pnpm test src/skills/loading/compact-format.test.ts src/cli/skills-cli.test.ts",
    "pnpm check:changed"
  ],
  "credit_notes": [
    "Preserve credit for #42637 author @imwyvern in the repaired PR body/update comment.",
    "Preserve source commit attribution for @sakaenyeniceri5 where the repaired commits are reused or co-authored.",
    "OpenClaw normal PRs should carry release-note context in the PR body rather than editing CHANGELOG.md."
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
| execute_fix | failed |  |  | fatal: destination path '/tmp/projectclownfish-fix-Z5MKdL/openclaw-openclaw' already exists and is not an empty directory.
failed to run git: exit status 128 |

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
| #42637 | fix_needed | planned | canonical | Useful canonical contributor PR exists and is editable, but it needs rebase/repair and focused validation before any update or later merge consideration. |
| cluster:repair-42637-skills-truncation | build_fix_artifact | planned |  | Job allows fix and raise_pr, but merge is blocked. A complete executable repair artifact is safe and narrow. |

## Needs Human

- none
