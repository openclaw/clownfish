---
repo: "openclaw/openclaw"
cluster_id: "pr-rebase-canary-81312-20260617"
mode: "autonomous"
run_id: "27703239276"
workflow_run_id: "27703239276"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27703239276"
head_sha: "3d1c6e80508f4f0169e7d61190672f06031166e6"
workflow_conclusion: "failure"
result_status: "planned"
published_at: "2026-06-17T16:26:12.625Z"
canonical: "https://github.com/openclaw/openclaw/pull/81312"
canonical_issue: "https://github.com/openclaw/openclaw/issues/77982"
canonical_pr: "https://github.com/openclaw/openclaw/pull/81312"
actions_total: 3
fix_executed: 0
fix_failed: 1
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# pr-rebase-canary-81312-20260617

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27703239276](https://github.com/openclaw/clownfish/actions/runs/27703239276)

Workflow conclusion: failure

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/81312

## Summary

Canonical PR #81312 is a maintainer-editable contributor branch that still owns the linked #77982 fix, but it is stale against current main. I locally replayed the two contributor commits onto main baa389ebed without conflicts, preserved author credit, ran focused Vitest proof, and ran Codex autoreview clean. No GitHub comments, labels, branch pushes, closes, PR creation, or merges were performed.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 3 |
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
  "target": "#81312",
  "source_refs": [
    "#81312",
    "#77982"
  ],
  "repair_strategy": "repair_contributor_branch",
  "planned_actions": [
    "fix_needed",
    "build_fix_artifact"
  ],
  "summary": "Repair PR #81312 by rebasing the maintainer-editable contributor branch yfge/openclaw:fix/issue-77982 onto current main baa389ebed1a85258b2ff7f4a61d0746280edf61, preserving the two contributor commits and credit, then push the existing branch and rerun validation plus Codex review. Do not broaden the PR, merge it, close anything, label anything, or open a replacement PR.",
  "pr_title": "fix(plugins): preserve bundled capability manifest contracts",
  "pr_body": "## Summary\n- rebase the existing maintainer-editable #81312 branch onto current main\n- keep manifest contracts on bundled capability plugin records\n- keep focused regression coverage for bundled capability runtime and loader records\n\n## Verification\n- pnpm check:changed\n- node scripts/run-vitest.mjs src/plugins/bundled-capability-runtime.test.ts src/plugins/loader-records.test.ts\n- pnpm build\n- .agents/skills/autoreview/scripts/autoreview --mode branch --base origin/main\n\n## Credit\nThis repairs and carries forward @yfge's source PR https://github.com/openclaw/openclaw/pull/81312 for the bug reported in #77982 by @pangxianyu-pixel.",
  "likely_files": [
    "src/plugins/bundled-capability-runtime.ts",
    "src/plugins/bundled-capability-runtime.test.ts",
    "src/plugins/loader-records.test.ts"
  ],
  "validation_commands": [
    "pnpm check:changed",
    "node scripts/run-vitest.mjs src/plugins/bundled-capability-runtime.test.ts src/plugins/loader-records.test.ts",
    "pnpm build",
    ".agents/skills/autoreview/scripts/autoreview --mode branch --base origin/main"
  ],
  "credit_notes": [
    "Preserve @yfge as the PR author and commit author when rebasing/pushing the existing branch.",
    "Keep #81312 as the source PR for contributor credit: https://github.com/openclaw/openclaw/pull/81312.",
    "Credit issue reporter @pangxianyu-pixel for #77982 when release-note context is written."
  ],
  "source_job": "jobs/openclaw/inbox/pr-rebase-canary-81312-20260617.md",
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
| execute_fix | failed |  |  | unsupported validation command: .agents/skills/autoreview/scripts/autoreview --mode branch --base origin/main |

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
| #81312 | fix_needed | planned | canonical | Repair the existing maintainer-editable contributor branch by rebasing onto current main, then push the repaired branch and run the required broad changed gate before any later merge finalization. |
| #77982 | keep_related | planned | fixed_by_candidate | Linked issue remains covered by canonical PR #81312 but should not be closed in this rebase-only job. |
| cluster:pr-rebase-canary-81312-20260617 | build_fix_artifact | planned |  | Build a repair artifact for the applicator/executor to rebase and push the existing contributor branch, then run broad changed validation. |

## Needs Human

- none
