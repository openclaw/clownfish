---
repo: "openclaw/openclaw"
cluster_id: "repair-42637-skills-truncation"
mode: "autonomous"
run_id: "27680648010"
workflow_run_id: "27680648010"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27680648010"
head_sha: "5db641f66484928ed6dcd5f0bb78f24fab1e5408"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-17T10:05:16.428Z"
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

Run: [https://github.com/openclaw/clownfish/actions/runs/27680648010](https://github.com/openclaw/clownfish/actions/runs/27680648010)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/42637

## Summary

#42637 is the canonical repair path for the omitted-skill discoverability bug, but it is not merge-ready: the PR is open, dirty against main, labeled waiting on author, and has actionable Codex/ClawSweeper review findings around prompt budgeting, exact lookup keys, and safe formatting of omitted skill names. A narrow executable repair artifact should update the contributor repair path, preserve credit, and keep #88426 open as related overlapping prompt-budget work rather than closing or merging anything.

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
  "summary": "Repair #42637 so skills omitted by prompt truncation remain discoverable by name without exceeding `maxSkillsPromptChars` or adding unsafe prompt text. Keep the change focused on the existing skills prompt truncation path and regression tests.",
  "pr_title": "fix(skills): list omitted skill names within truncation budget",
  "pr_body": "## Summary\n\nRepair the skills prompt truncation notice so omitted skills remain discoverable when the catalog is capped. This carries forward the fix from #42637 with attribution to @imwyvern / the source branch, while keeping the implementation bounded to prompt rendering and focused regression coverage.\n\nThe repair should:\n- include exact omitted skill lookup keys in the truncation note when budget allows;\n- keep the final rendered prompt within `skills.limits.maxSkillsPromptChars`;\n- avoid raw control-character or ambiguous delimiter injection in omitted-name guidance;\n- preserve current compact-mode behavior by retrying compact rendering before dropping skills where applicable.\n\nRelated prompt-budget work in #88426 should stay separate.\n\n## Verification\n\n- `pnpm test src/skills/loading/compact-format.test.ts`\n- `pnpm check:changed`\n\n## Credit\n\nBased on the useful contributor work in https://github.com/openclaw/openclaw/pull/42637. Thanks @imwyvern; source commits are credited to sakaenyeniceri5.",
  "likely_files": [
    "src/skills/loading/workspace.ts",
    "src/skills/loading/compact-format.test.ts"
  ],
  "validation_commands": [
    "pnpm test src/skills/loading/compact-format.test.ts",
    "pnpm check:changed"
  ],
  "credit_notes": [
    "Preserve credit for #42637 author @imwyvern and source commits authored by sakaenyeniceri5 in the repair PR body.",
    "Mention that the repair carries forward the omitted-skill-name discoverability approach from https://github.com/openclaw/openclaw/pull/42637.",
    "Do not close #42637 before a fix PR exists or the contributor branch is updated and validated."
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
| repair_contributor_branch | failed |  |  | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs [check:changed] lanes=core, coreTests [check:changed] src/skills/loading/compact-format.test.ts: core test [check:changed] src/skills/loading/workspace.ts: core production [check:changed] conflict markers $ node scripts/check-no-conflict-markers.mjs [check:changed] changelog attributions $ node scripts/check-changelog-attributions.mjs [check:changed] guarded extension wildcard re-exports $ node scripts/check-extension-wildcard-reexports.mjs [check:changed] plugin-sdk wildcard re-exports $ node scripts/check-plugin-sdk-wildcard-reexports.mjs [check:changed] duplicate scan target coverage $ node scripts/check-duplicates.mjs --coverage [check:changed] dependency pin guard $ node scripts/check-dependency-pins.mjs [check:changed] package patch guard $ node scripts/check-package-patches.mjs [check:changed] test temp creation report (warning-only) No new bare test temp-directory creation patterns found. [check:changed] typecheck core $ node scripts/run-tsgo.mjs -p tsconfig.core.json --incremental --tsBuildInfoFile .artifacts/tsgo-cache/core.tsbuildinfo [check:changed] typecheck core tests $ node scripts/run-tsgo.mjs -p test/tsconfig/tsconfig.core.test.j... |
| execute_fix | blocked |  |  | validation command failed (pnpm check:changed): $ node scripts/check-changed.mjs [check:changed] lanes=core, coreTests [check:changed] src/skills/loading/compact-format.test.ts: core test [check:changed] src/skills/loading/workspace.ts: core production [check:changed] conflict markers $ node scripts/check-no-conflict-markers.mjs [check:changed] changelog attributions $ node scripts/check-changelog-attributions.mjs [check:changed] guarded extension wildcard re-exports $ node scripts/check-extension-wildcard-reexports.mjs [check:changed] plugin-sdk wildcard re-exports $ node scripts/check-plugin-sdk-wildcard-reexports.mjs [check:changed] duplicate scan target coverage $ node scripts/check-duplicates.mjs --coverage [check:changed] dependency pin guard $ node scripts/check-dependency-pins.mjs [check:changed] package patch guard $ node scripts/check-package-patches.mjs [check:changed] test temp creation report (warning-only) No new bare test temp-directory creation patterns found. [check:changed] typecheck core $ node scripts/run-tsgo.mjs -p tsconfig.core.json --incremental --tsBuildInfoFile .artifacts/tsgo-cache/core.tsbuildinfo [check:changed] typecheck core tests $ node scripts/run-tsgo.mjs -p test/tsconfig/tsconfig.core.test.j... |

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
| #42637 | fix_needed | planned | canonical | Canonical PR is useful and editable, but stale/dirty and review-blocked; emit an executable repair plan instead of merge or close. |
| #88426 | keep_related | planned | related | Related overlapping prompt-budget work, not a duplicate or replacement for the omitted-skill-name repair. |
| cluster:repair-42637-skills-truncation | build_fix_artifact | planned |  | Executor should repair the existing contributor branch or update the configured Clownfish repair branch with a narrow implementation and fresh validation. |

## Needs Human

- none
