---
repo: "openclaw/openclaw"
cluster_id: "automerge-openclaw-openclaw-84794"
mode: "autonomous"
run_id: "27956860951"
workflow_run_id: "27956860951"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27956860951"
head_sha: "ef0f5696aba4579a264930969a690eda2deebc85"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-22T13:50:17.577Z"
canonical: "https://github.com/openclaw/openclaw/pull/84794"
canonical_issue: "https://github.com/openclaw/openclaw/issues/84707"
canonical_pr: "https://github.com/openclaw/openclaw/pull/84794"
actions_total: 7
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 1
apply_skipped: 0
needs_human_count: 0
---

# automerge-openclaw-openclaw-84794

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27956860951](https://github.com/openclaw/clownfish/actions/runs/27956860951)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/84794

## Summary

PR #84794 remains the canonical repair path for isolated cron deleteAfterRun session cleanup, but ClawSweeper paused it for human review on the current head. The branch is maintainer-editable, focused, and has passing relevant checks, so the safe next action is a repair-contributor-branch fix artifact rather than merge or close.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 7 |
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
  "target": "#84794",
  "source_refs": [
    "#84794",
    "#84707",
    "#67718",
    "#10253",
    "#56488",
    "#88197"
  ],
  "repair_strategy": "repair_contributor_branch",
  "planned_actions": [
    "fix_needed",
    "build_fix_artifact"
  ],
  "summary": "Repair the existing contributor PR #84794 branch for the ClawSweeper automerge loop. The branch should keep the narrow isolated cron deleteAfterRun cleanup fix, add or strengthen any compatibility/review proof needed for the human-review gate, rerun focused cron validation plus pnpm check:changed, then request a fresh ClawSweeper/Codex review. Do not merge from this worker result.",
  "pr_title": "Clean up isolated cron sessions after runs",
  "pr_body": "What Problem This Solves\n\nIsolated cron jobs with deleteAfterRun: true can finish through terminal paths where delivery cleanup is not reached, especially delivery.mode: \"none\", leaving run sessions and transcripts behind.\n\nWhy This Change Was Made\n\nThis keeps PR #84794 as the canonical contributor repair path from @TurboTheTurtle and carries the cleanup through the isolated runner final path while preserving the existing delivery-dispatch cleanup behavior. The repair pass should address ClawSweeper's current human-review/compatibility proof gate for session-state cleanup before any merge decision.\n\nUser Impact\n\nCron users with isolated deleteAfterRun jobs should no longer accumulate completed run sessions and transcript files for terminal no-delivery paths.\n\nEvidence\n\nSource PR: https://github.com/openclaw/openclaw/pull/84794\nFixes: https://github.com/openclaw/openclaw/issues/84707\nRelated closed report: https://github.com/openclaw/openclaw/issues/67718\nValidation to run after repair: node scripts/run-vitest.mjs src/cron/isolated-agent/run.fast-mode.test.ts src/cron/isolated-agent/delivery-dispatch.double-announce.test.ts src/cron/service.delivery-plan.test.ts src/cron/service.session-reaper-in-finally.test.ts; pnpm check:changed.",
  "likely_files": [
    "src/cron/isolated-agent/run.ts",
    "src/cron/isolated-agent/delivery-dispatch.ts",
    "src/cron/isolated-agent/session-cleanup.ts",
    "src/cron/isolated-agent/run.fast-mode.test.ts",
    "src/cron/isolated-agent/run.test-harness.ts"
  ],
  "validation_commands": [
    "node scripts/run-vitest.mjs src/cron/isolated-agent/run.fast-mode.test.ts src/cron/isolated-agent/delivery-dispatch.double-announce.test.ts src/cron/service.delivery-plan.test.ts src/cron/service.session-reaper-in-finally.test.ts",
    "pnpm check:changed"
  ],
  "credit_notes": [
    "Preserve contributor credit for @TurboTheTurtle as the author of https://github.com/openclaw/openclaw/pull/84794.",
    "Any repair commit pushed to the contributor branch should keep the original PR as the source PR and avoid replacing the branch unless it becomes unsafe or uneditable."
  ],
  "source_job": "jobs/openclaw/outbox/finalized/automerge-openclaw-openclaw-84794.md",
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
| repair_contributor_branch | pushed | https://github.com/openclaw/openclaw/pull/84794 |  |  |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #84794 | merge_canonical | blocked | fix_pr | job does not allow merge |

## Apply Audit

| Attempt | Source | Target | Action | Status | Reason |
| --- | --- | --- | --- | --- |
|  | post_flight | #84794 | merge_canonical | blocked | job does not allow merge |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #84794 | fix_needed | planned | canonical | Automerge is blocked by the ClawSweeper human-review gate, but the branch is safe to update and narrow enough for repair_contributor_branch. |
| cluster:automerge-openclaw-openclaw-84794 | build_fix_artifact | planned |  | The job explicitly allows fix/raise_pr and asks for repair_contributor_branch when ClawSweeper returns needs-human on a safe editable branch. |
| #84707 | keep_related | planned | fixed_by_candidate | Keep open until the canonical PR is repaired, reviewed, and landed by the applicator/maintainer flow. |
| #10253 | keep_related | planned | related | Related lifecycle area, but not the same root cause or a closeable duplicate of #84794. |
| #56488 | keep_related | planned | related | Adjacent deleteAfterRun behavior, but distinct root cause and active canonical issue. |
| #88197 | keep_related | planned | related | Related cron cleanup theme, but not covered by this PR and not safe to close or fold into the repair artifact. |
| #67718 | keep_closed | skipped | related | Already closed; no closure action is valid. |

## Needs Human

- none
