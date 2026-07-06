---
repo: "openclaw/openclaw"
cluster_id: "repair-openclaw-83630-20260706"
mode: "autonomous"
run_id: "28825323751"
workflow_run_id: "28825323751"
run_url: "https://github.com/openclaw/clownfish/actions/runs/28825323751"
head_sha: "c4e7a86d828cfb59fceacfdc6e46d68b7ef87d54"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-07-06T21:55:28.435Z"
canonical: "https://github.com/openclaw/openclaw/pull/83630"
canonical_issue: "https://github.com/openclaw/openclaw/issues/54877"
canonical_pr: "https://github.com/openclaw/openclaw/pull/83630"
actions_total: 7
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 1
apply_skipped: 0
needs_human_count: 0
---

# repair-openclaw-83630-20260706

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/28825323751](https://github.com/openclaw/clownfish/actions/runs/28825323751)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/83630

## Summary

Plan repair of editable contributor PR #83630 as the canonical fix path for the doctor missing-transcript cleanup preview mismatch. Current main e80e8a2b67307c4e83e7192f234c31522b3464b2 still prints the preview without --fix-missing, while the live PR head 539b1b8b40f7f0d0e161bd0aca70c8e32cf4487e contains the narrow intended two-file correction but is behind main and needs branch repair plus current proof refresh. No GitHub mutations, comments, closes, labels, pushes, or merges were performed.

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
  "target": "#83630",
  "source_refs": [
    "#83630",
    "#54877",
    "#54896",
    "#54925",
    "#55157",
    "#27422"
  ],
  "repair_strategy": "repair_contributor_branch",
  "planned_actions": [
    "fix_needed",
    "build_fix_artifact"
  ],
  "summary": "Repair existing contributor PR #83630 on branch fix/doctor-missing-transcript-preview. Rebase it onto current main, keep the intended doctor dry-run preview change so missing-transcript cleanup preview includes --fix-missing, tighten focused state-integrity coverage, and refresh the PR body with current real CLI proof. Do not broaden cleanup behavior and do not merge.",
  "pr_title": "fix(doctor): preview missing transcript cleanup",
  "pr_body": "## What Problem This Solves\n\n`openclaw doctor` reports recent sessions with missing transcript files, but its preview command currently omits `--fix-missing`. Running the suggested dry-run can therefore report zero missing transcript prunes even though the enforce command would prune them.\n\nFixes https://github.com/openclaw/openclaw/issues/54877.\n\n## Why This Change Was Made\n\nThe cleanup command only counts missing transcript pruning in the preview when `fixMissing` is enabled. The doctor warning should preview the same operation that the repair command performs, so the dry-run guidance needs to include `--fix-missing` while leaving cleanup behavior itself unchanged.\n\nThis repairs the existing contributor PR https://github.com/openclaw/openclaw/pull/83630 and preserves @YuanHanzhong's authorship/credit.\n\n## User Impact\n\nUsers who follow doctor guidance for missing recent session transcripts will see an accurate dry-run preview before applying cleanup. The change is limited to doctor guidance text and focused regression coverage.\n\n## Evidence\n\n- Current main e80e8a2b67307c4e83e7192f234c31522b3464b2 still prints the preview without `--fix-missing` at `src/commands/doctor-state-integrity.ts:1301`.\n- `sessions cleanup` forwards `fixMissing` into the cleanup request at `src/commands/sessions-cleanup.ts:249`, and existing cleanup coverage shows missing transcripts are counted in dry-run when `--fix-missing` is set.\n- After repair, run:\n  - `pnpm test src/commands/doctor-state-integrity.test.ts`\n  - `pnpm test src/commands/sessions-cleanup.test.ts`\n  - `pnpm check:changed`\n\nAdd the exact current CLI proof output from the repaired branch before requesting merge review.",
  "likely_files": [
    "src/commands/doctor-state-integrity.ts",
    "src/commands/doctor-state-integrity.test.ts"
  ],
  "validation_commands": [
    "pnpm test src/commands/doctor-state-integrity.test.ts",
    "pnpm test src/commands/sessions-cleanup.test.ts",
    "pnpm check:changed"
  ],
  "credit_notes": [
    "Preserve @YuanHanzhong as the contributor author of #83630; repair the existing editable branch instead of replacing it.",
    "PR body should keep the issue link to #54877 and credit #83630 as the source PR for the fix.",
    "This is user-visible CLI guidance, so include release-note context in the PR body rather than adding broad changelog churn unless the repo release process requires it."
  ],
  "source_job": "jobs/openclaw/inbox/repair-openclaw-83630-20260706.md",
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
| repair_contributor_branch | pushed | https://github.com/openclaw/openclaw/pull/83630 |  |  |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #83630 | merge_canonical | blocked | fix_pr | job does not allow merge |

## Apply Audit

| Attempt | Source | Target | Action | Status | Reason |
| --- | --- | --- | --- | --- |
|  | post_flight | #83630 | merge_canonical | blocked | job does not allow merge |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #83630 | fix_needed | planned | canonical | Repair the existing editable contributor branch instead of opening a replacement; merge is blocked by job permissions and by missing current repair proof. |
| #54877 | keep_canonical | planned | canonical | Open canonical issue remains the issue thread for validation and follow-up while #83630 is repaired. |
| #27422 | keep_closed | skipped | duplicate | Already closed duplicate/context item. |
| #54896 | keep_closed | skipped | superseded | Closed unmerged same-fix PR is superseded by the open editable canonical PR. |
| #54925 | keep_closed | skipped | superseded | Closed unmerged same-fix PR is superseded by #83630. |
| #55157 | keep_closed | skipped | superseded | Closed unmerged same-fix PR is superseded by #83630. |
| cluster:repair-openclaw-83630-20260706 | build_fix_artifact | planned |  | Fix-enabled job with allow_fix_pr=true and allow_merge=false; executor should repair the existing contributor PR branch, not open a replacement. |

## Needs Human

- none
