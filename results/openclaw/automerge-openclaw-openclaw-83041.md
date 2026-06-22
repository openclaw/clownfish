---
repo: "openclaw/openclaw"
cluster_id: "automerge-openclaw-openclaw-83041"
mode: "autonomous"
run_id: "27947538696"
workflow_run_id: "27947538696"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27947538696"
head_sha: "a1d67b7433727708f2a32ba71da70d13ad803abe"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-22T11:06:47.615Z"
canonical: "https://github.com/openclaw/openclaw/pull/83041"
canonical_issue: "https://github.com/openclaw/openclaw/issues/46797"
canonical_pr: "https://github.com/openclaw/openclaw/pull/83041"
actions_total: 6
fix_executed: 1
fix_failed: 1
fix_blocked: 1
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# automerge-openclaw-openclaw-83041

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27947538696](https://github.com/openclaw/clownfish/actions/runs/27947538696)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/83041

## Summary

Canonical path stays on PR #83041, but it is not merge-ready in this worker lane: the latest hydrated ClawSweeper review still says needs maintainer review before merge, three current-head CI shards are failing, and merge/close are blocked by job policy. The safe executable outcome is to repair contributor branch #83041 in place because maintainer_can_modify is true, preserve @xuruiray credit, rerun focused restart-sentinel proof plus pnpm check:changed, and request a fresh ClawSweeper/Codex review before the comment router considers merge.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 6 |
| Fix executed | 1 |
| Fix failed | 1 |
| Fix blocked | 1 |
| Applied executions | 0 |
| Apply blocked | 0 |
| Apply skipped | 0 |
| Needs human | 0 |

## Repair Candidate

```json
{
  "target": "#83041",
  "source_refs": [
    "#83041",
    "#46797",
    "#80823",
    "#93863",
    "#55372"
  ],
  "repair_strategy": "repair_contributor_branch",
  "planned_actions": [
    "fix_needed",
    "build_fix_artifact"
  ],
  "summary": "Repair PR #83041 in place so config.patch/config.apply restart sentinel notices carry restart-required state, pending restart notices say restart required instead of ok/completed, and consumed startup restart notices no longer tell users a completed restart is still required. Address the latest ClawSweeper review state and the failing current-head CI shards before asking for a fresh review.",
  "pr_title": "Fix config patch restart-required notices",
  "pr_body": "What Problem This Solves\n\nFixes #46797 by making config.patch/config.apply restart sentinel notices distinguish a pending required restart from a completed restart. Current main writes successful config-patch sentinels as status ok without restart-required metadata, and the startup notice formatter turns that into ok-style restart wording.\n\nWhy This Change Was Made\n\nThe repair should stay on source PR #83041 because the branch is maintainer-editable and already carries the contributor's implementation. Address the latest ClawSweeper review state, investigate the failing checks-node-core-runtime-infra-process/checks-node-core-fast/checks-node-agentic-command-support shards on head cda5e080eedf904e024cbb0c1c657ab46580f1b2, and keep the diff limited to the restart-sentinel/config-write flow plus focused tests.\n\nUser Impact\n\nUsers approving config.patch/config.apply changes that require a manual gateway restart should see restart-required wording while the restart is pending, and completed startup follow-up notices should not continue to imply the restart is still required.\n\nEvidence\n\nFocused proof to rerun after repair: node scripts/run-vitest.mjs src/infra/restart-sentinel.test.ts src/gateway/server-methods/config.shared-auth.test.ts src/gateway/server-restart-sentinel.test.ts src/gateway/server.config-patch.test.ts -- --reporter=verbose; node scripts/run-vitest.mjs test/scripts/plugin-sdk-surface-report.test.ts -- --reporter=verbose; pnpm check:changed. Source credit remains with @xuruiray and PR #83041.",
  "likely_files": [
    "src/gateway/server-methods/config-write-flow.ts",
    "src/gateway/server-methods/config.shared-auth.test.ts",
    "src/gateway/server-restart-sentinel.ts",
    "src/gateway/server-restart-sentinel.test.ts",
    "src/gateway/server.config-patch.test.ts",
    "src/infra/restart-sentinel.ts",
    "src/infra/restart-sentinel.test.ts",
    "scripts/plugin-sdk-surface-report.mjs",
    "test/scripts/plugin-sdk-surface-report.test.ts"
  ],
  "validation_commands": [
    "node scripts/run-vitest.mjs src/infra/restart-sentinel.test.ts src/gateway/server-methods/config.shared-auth.test.ts src/gateway/server-restart-sentinel.test.ts src/gateway/server.config-patch.test.ts -- --reporter=verbose",
    "node scripts/run-vitest.mjs test/scripts/plugin-sdk-surface-report.test.ts -- --reporter=verbose",
    "pnpm check:changed"
  ],
  "credit_notes": [
    "Repair the existing PR #83041 branch; do not replace it while maintainer_can_modify remains true.",
    "Preserve @xuruiray as the source contributor for https://github.com/openclaw/openclaw/pull/83041.",
    "If Clownfish adds commits, the PR body/evidence should continue to state that the contribution stays credited on #83041."
  ],
  "source_job": "jobs/openclaw/outbox/finalized/automerge-openclaw-openclaw-83041.md",
  "security_sensitive": false,
  "security_routed_refs": [],
  "needs_human": [],
  "repair_status": "executed",
  "terminal": true
}
```

## Fix Execution Actions

| Action | Status | Target | Branch | Reason |
| --- | --- | --- | --- | --- |
| repair_contributor_branch | failed |  |  | base branch advanced after validation and projectclownfish/repair-automerge-openclaw-openclaw-83041-83041 needs a fresh rebase pass: Rebasing (1/6) Rebasing (2/6) Rebasing (3/6) Rebasing (4/6) Rebasing (5/6) error: could not apply 225b8be84e... fix(ci): refresh plugin sdk surface budget hint: Resolve all conflicts manually, mark them as resolved with hint: "git add/rm <conflicted_files>", then run "git rebase --continue". hint: You can instead skip this commit: run "git rebase --skip". hint: To abort and get back to the state before "git rebase", run "git rebase --abort". hint: Disable this message with "git config set advice.mergeConflict false" Could not apply 225b8be84e... # fix(ci): refresh plugin sdk surface budget |
| repair_contributor_branch | blocked | https://github.com/openclaw/openclaw/pull/83041 |  | base branch advanced after validation and projectclownfish/repair-automerge-openclaw-openclaw-83041-83041 needs a fresh rebase pass: Rebasing (1/6) Rebasing (2/6) Rebasing (3/6) Rebasing (4/6) Rebasing (5/6) error: could not apply 225b8be84e... fix(ci): refresh plugin sdk surface budget hint: Resolve all conflicts manually, mark them as resolved with hint: "git add/rm <conflicted_files>", then run "git rebase --continue". hint: You can instead skip this commit: run "git rebase --skip". hint: To abort and get back to the state before "git rebase", run "git rebase --abort". hint: Disable this message with "git config set advice.mergeConflict false" Could not apply 225b8be84e... # fix(ci): refresh plugin sdk surface budget |
| automerge_repair_outcome_comment | executed | #83041 |  |  |

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
| #46797 | keep_canonical | planned | canonical | Keep #46797 open as the canonical issue until #83041 is repaired, reviewed, and landed by the separate merge router. |
| #55372 | keep_related | planned | related | Related restart-sentinel product request, but outside this bounded automerge repair scope. |
| #80823 | keep_independent | planned | independent | Independent fix lane; do not combine with #83041. |
| #83041 | fix_needed | planned | canonical | Repair #83041 in place, then rerun focused proof, pnpm check:changed, and a fresh review. Job policy blocks merge recommendations from this worker. |
| #93863 | keep_related | planned | superseded | Superseded by the #83041 repair lane, but #93863 has a blocked merge-risk label and no closure action is allowed in this job. |
| cluster:automerge-openclaw-openclaw-83041 | build_fix_artifact | planned |  | Executable repair artifact for the existing contributor branch is required by the automerge job when current checks/review are not clean. |

## Needs Human

- none
