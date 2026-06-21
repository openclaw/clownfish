---
repo: "openclaw/openclaw"
cluster_id: "symlink-test-repair-autonomous-20260621"
mode: "autonomous"
run_id: "27900054915"
workflow_run_id: "27900054915"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27900054915"
head_sha: "d6101aa0c2af1165777072b5842ba00b9836c8fd"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-21T09:38:00.190Z"
canonical: null
canonical_issue: null
canonical_pr: null
actions_total: 4
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 1
apply_skipped: 0
needs_human_count: 0
---

# symlink-test-repair-autonomous-20260621

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27900054915](https://github.com/openclaw/clownfish/actions/runs/27900054915)

Workflow conclusion: success

Worker result: planned

Canonical: unknown

## Summary

Current main still has the two hard platform gates the cluster targets. The source PRs are useful but their bot-review findings point to a better combined replacement: move symlink probing out of import time, gate on actual file-symlink capability, keep QQBot on skipIf and Zalo on its existing runIf convention, and credit both @aniruddhaadak80 PRs. No GitHub mutation, branch update, close, label, merge, push, or comment is planned for the source PRs.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 4 |
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
  "target": "#90223",
  "source_refs": [
    "#90223",
    "#90280"
  ],
  "repair_strategy": "replace_uneditable_branch",
  "planned_actions": [
    "fix_needed",
    "build_fix_artifact"
  ],
  "summary": "Create one replacement PR that carries forward the compatible intent from #90223 and #90280: dynamically check file-symlink capability inside test lifecycle/evaluation instead of module import time, then gate only the symlink assertions on that capability while preserving each file's Vitest style.",
  "pr_title": "test: gate symlink assertions on file symlink capability",
  "pr_body": "## What Problem This Solves\n\nCurrent main skips the QQBot and Zalo symlink safety assertions based on `process.platform`, so Windows hosts that can create file symlinks do not exercise the assertions, while restricted non-Windows hosts can still fail when symlink creation is unavailable.\n\nThis carries forward the narrow test intent from #90223 and #90280 by @aniruddhaadak80, with attribution preserved for both source PRs.\n\n## Why This Change Was Made\n\nThe replacement keeps the change limited to the two affected test files. It moves file-symlink capability probing out of module import time, gates only the symlink assertions on actual file-symlink capability, keeps QQBot's local `it.skipIf(...)` convention, and keeps Zalo's existing `it.runIf(...)` convention.\n\nThis also addresses the hydrated Copilot review findings on the source PRs: avoid import-time filesystem side effects, avoid a Windows-only capability gate for QQBot, and avoid switching the Zalo file away from its existing Vitest pattern.\n\n## User Impact\n\nNo runtime behavior changes. The test suite should exercise symlink rejection wherever the host can create file symlinks and skip only the affected assertions where file symlinks are unavailable.\n\n## Evidence\n\n- Source credit: https://github.com/openclaw/openclaw/pull/90223 by @aniruddhaadak80\n- Source credit: https://github.com/openclaw/openclaw/pull/90280 by @aniruddhaadak80\n- Current main `1435fc123f276ac2c090775c1ccd152140c63a0b` still has the QQBot platform skip in `extensions/qqbot/src/engine/utils/file-utils.test.ts` and the Zalo platform run gate in `extensions/zalo/src/token.test.ts`.\n- Validation required before opening: `pnpm -s vitest run extensions/qqbot/src/engine/utils/file-utils.test.ts extensions/zalo/src/token.test.ts`\n- Validation required before opening: `pnpm check:changed`\n- Codex `/review` must be clean before opening/merging.",
  "likely_files": [
    "extensions/qqbot/src/engine/utils/file-utils.test.ts",
    "extensions/zalo/src/token.test.ts"
  ],
  "validation_commands": [
    "pnpm -s vitest run extensions/qqbot/src/engine/utils/file-utils.test.ts extensions/zalo/src/token.test.ts",
    "pnpm check:changed"
  ],
  "credit_notes": [
    "Credit @aniruddhaadak80 for the source QQBot repair idea in https://github.com/openclaw/openclaw/pull/90223.",
    "Credit @aniruddhaadak80 for the source Zalo repair idea in https://github.com/openclaw/openclaw/pull/90280.",
    "PR body should state that the replacement preserves attribution because Clownfish was instructed not to update either source PR branch."
  ],
  "source_job": "jobs/openclaw/inbox/symlink-test-repair-autonomous-20260621.md",
  "security_sensitive": false,
  "security_routed_refs": [],
  "needs_human": [],
  "repair_status": "opened",
  "terminal": true
}
```

## Fix Execution Actions

| Action | Status | Target | Branch | Reason |
| --- | --- | --- | --- | --- |
| open_fix_pr | opened | https://github.com/openclaw/openclaw/pull/95531 | clownfish/symlink-test-repair-autonomous-20260621 |  |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #95531 | merge_canonical | blocked | fix_pr | job does not allow merge |

## Apply Audit

| Attempt | Source | Target | Action | Status | Reason |
| --- | --- | --- | --- | --- |
|  | post_flight | #95531 | merge_canonical | blocked | job does not allow merge |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #90223 | keep_related | planned | related | Useful source PR for the QQBot half of the same symlink-test repair, but not the canonical mutation target under this job. |
| #90280 | keep_related | planned | related | Useful source PR for the Zalo half of the same symlink-test repair, but not the canonical mutation target under this job. |
| cluster:symlink-test-repair-autonomous-20260621 | fix_needed | planned |  | A new credited replacement PR is the canonical path because the job forbids modifying either source PR branch. |
| cluster:symlink-test-repair-autonomous-20260621 | build_fix_artifact | planned |  | Build one narrow credited replacement PR artifact for the combined test-only repair. |

## Needs Human

- none
