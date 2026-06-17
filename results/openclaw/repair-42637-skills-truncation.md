---
repo: "openclaw/openclaw"
cluster_id: "repair-42637-skills-truncation"
mode: "autonomous"
run_id: "27681863520"
workflow_run_id: "27681863520"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27681863520"
head_sha: "b02edcd805e70226ce34c23c03658fc1763cd67b"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-17T10:57:29.032Z"
canonical: "https://github.com/openclaw/openclaw/pull/42637"
canonical_issue: null
canonical_pr: "https://github.com/openclaw/openclaw/pull/42637"
actions_total: 3
fix_executed: 0
fix_failed: 1
fix_blocked: 1
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# repair-42637-skills-truncation

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27681863520](https://github.com/openclaw/clownfish/actions/runs/27681863520)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/42637

## Summary

Canonical PR #42637 is a useful, editable contributor PR for the omitted-skill truncation defect, but it is not merge-ready and merge is blocked by the job. Plan repair of the existing contributor branch with a narrow fix artifact; keep #88426 open as related overlapping compact-prompt work, not part of this cluster's fix.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 3 |
| Fix executed | 0 |
| Fix failed | 1 |
| Fix blocked | 1 |
| Applied executions | 0 |
| Apply blocked | 0 |
| Apply skipped | 0 |
| Needs human | 0 |

## Repair Candidate

```json
{
  "target": "#42637",
  "source_refs": [
    "#42637",
    "#88426"
  ],
  "repair_strategy": "repair_contributor_branch",
  "planned_actions": [
    "fix_needed",
    "build_fix_artifact"
  ],
  "summary": "Repair PR #42637 in place so truncated skills prompts list recoverable omitted skill lookup names without exceeding maxSkillsPromptChars or introducing prompt-format ambiguity. Keep the scope to omitted-skill discoverability, not compact-description preservation from #88426.",
  "pr_title": "fix(skills): list omitted skill names when prompt is truncated",
  "pr_body": "## Summary\n- Repair #42637 so a truncated skills prompt includes compact, exact lookup keys for omitted skills.\n- Keep the final rendered prompt within `skills.limits.maxSkillsPromptChars`, including the truncation note and recovery guidance.\n- Address Codex/ClawSweeper review findings for escaping, control-character normalization, quoted names, tail visibility, tight budgets, and remote-note compact retry without taking on #88426's compact-description behavior.\n\nCredit: carries forward @imwyvern's source PR https://github.com/openclaw/openclaw/pull/42637.\n\n## Verification\n- `pnpm test src/skills/loading/compact-format.test.ts`\n- `pnpm check:changed`\n- Fresh Codex `/review` before any merge recommendation.",
  "likely_files": [
    "src/skills/loading/workspace.ts",
    "src/skills/loading/compact-format.test.ts"
  ],
  "validation_commands": [
    "pnpm test src/skills/loading/compact-format.test.ts",
    "pnpm check:changed"
  ],
  "credit_notes": [
    "Preserve contributor credit for @imwyvern and PR https://github.com/openclaw/openclaw/pull/42637 in the repaired PR body.",
    "Keep existing contributor commit attribution where the executor can safely update the contributor branch.",
    "Do not add CHANGELOG.md for this normal PR; capture release-note context in the PR body instead."
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
| repair_contributor_branch | failed |  |  | git fetch --no-tags origin refs/pull/42637/head:projectclownfish/repair-repair-42637-skills-truncation-42637 timed out after 2298093ms before fix execution deadline |
| execute_fix | blocked |  |  | git fetch --no-tags origin refs/pull/42637/head:projectclownfish/repair-repair-42637-skills-truncation-42637 timed out after 2298093ms before fix execution deadline |

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
| #42637 | fix_needed | planned | canonical | Open canonical PR is useful and editable, but review-bot findings and stale merge-readiness gates require repair before any merge or closeout action. |
| #88426 | keep_related | planned | related | Related same-surface compact-prompt work, but not the same omitted-skill-name truncation fix and not merge-ready. |
| cluster:repair-42637-skills-truncation | build_fix_artifact | planned |  | A complete narrow repair path exists for the canonical PR, and the job allows fix/raise_pr but blocks merge. |

## Needs Human

- none
