---
repo: "openclaw/openclaw"
cluster_id: "automerge-openclaw-openclaw-89323"
mode: "autonomous"
run_id: "27956860994"
workflow_run_id: "27956860994"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27956860994"
head_sha: "ef0f5696aba4579a264930969a690eda2deebc85"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-22T13:47:52.572Z"
canonical: "https://github.com/openclaw/openclaw/pull/89323"
canonical_issue: "https://github.com/openclaw/openclaw/issues/89249"
canonical_pr: "https://github.com/openclaw/openclaw/pull/89323"
actions_total: 7
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 1
apply_skipped: 0
needs_human_count: 0
---

# automerge-openclaw-openclaw-89323

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27956860994](https://github.com/openclaw/clownfish/actions/runs/27956860994)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/89323

## Summary

#89323 is the canonical repair path for the Control UI hidden subagent session picker pagination bug tracked by #89249. The PR branch is maintainer-editable and clean in the preflight artifact, but the latest ClawSweeper state is needs-human/protected-label handling rather than a merge-ready verdict, so this worker plans a bounded repair/refresh artifact for the existing contributor branch and emits no close or merge actions.

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
  "target": "#89323",
  "source_refs": [
    "#89323",
    "#89249",
    "#89258",
    "#89283",
    "#89196",
    "#89774"
  ],
  "repair_strategy": "repair_contributor_branch",
  "planned_actions": [
    "fix_needed",
    "build_fix_artifact"
  ],
  "summary": "Repair and refresh the existing #89323 contributor branch for the Control UI chat session picker hidden-subagent pagination bug. Keep scope to the current UI picker implementation and tests; address only fresh ClawSweeper/Codex findings, stale branch work, or relevant check failures.",
  "pr_title": "fix(web-ui): skip hidden subagent picker pages",
  "pr_body": "What Problem This Solves\n\nFixes the Control UI chat session picker dead-end tracked in #89249, where hidden spawned/subagent rows can consume a raw sessions.list page so Load More appears to do nothing and the picker shows misleading raw counts.\n\nWhy This Change Was Made\n\nThe picker filters inactive subagent/spawnedBy sessions from the visible UI, but current main still loads one raw page at a time and renders the raw total count. The repair should keep #89323's narrow UI-owned approach: advance through hidden-only pages until visible rows are found or pagination is exhausted, and avoid presenting raw totals as visible totals when rows are filtered.\n\nUser Impact\n\nUsers with many spawned/subagent sessions can keep navigating ordinary chat sessions from the Control UI picker without a dead-end Load More state or confusing visible/raw count mismatch.\n\nEvidence\n\nCurrent main d3781cc4 still has the one-page Load More path in ui/src/ui/chat/session-controls.ts and filters subagent rows later from picker options. Existing #89323 head c6b0342f48c4a67d475d40e35edd40110a95cbcc is maintainer-editable, has Real behavior proof SUCCESS in the hydrated artifact, and includes focused unit plus browser E2E coverage. Run focused chat picker tests and pnpm check:changed after any refresh or repair.",
  "likely_files": [
    "ui/src/ui/chat/session-controls.ts",
    "ui/src/ui/views/chat.test.ts",
    "ui/src/ui/e2e/chat-picker-pagination.e2e.test.ts"
  ],
  "validation_commands": [
    "node scripts/run-vitest.mjs ui/src/ui/views/chat.test.ts -t \"chat session picker\" --reporter=dot",
    "node scripts/run-vitest.mjs ui/src/ui/e2e/chat-picker-pagination.e2e.test.ts --reporter=dot",
    "pnpm check:changed"
  ],
  "credit_notes": [
    "Preserve @giodl73-repo as the source PR author for https://github.com/openclaw/openclaw/pull/89323.",
    "If any replacement becomes necessary later, credit @giodl73-repo and source PR #89323 in the PR body and release-note context.",
    "Do not use #89258 as the replacement source path in this job; it is closed, uneditable, and takes a different API shape."
  ],
  "source_job": "jobs/openclaw/outbox/finalized/automerge-openclaw-openclaw-89323.md",
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
| repair_contributor_branch | pushed | https://github.com/openclaw/openclaw/pull/89323 |  |  |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #89323 | merge_canonical | blocked | fix_pr | job does not allow merge |

## Apply Audit

| Attempt | Source | Target | Action | Status | Reason |
| --- | --- | --- | --- | --- |
|  | post_flight | #89323 | merge_canonical | blocked | job does not allow merge |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #89323 | fix_needed | planned | canonical | Repair the existing contributor branch only if the executor can refresh/revalidate the exact PR and address any fresh ClawSweeper/Codex findings; merge remains blocked by job policy. |
| cluster:automerge-openclaw-openclaw-89323 | build_fix_artifact | planned |  | Build an executable repair artifact for the existing PR branch so the executor can refresh, validate, run review, and return the branch to the comment router. |
| #89249 | keep_related | planned | fixed_by_candidate | Keep the issue open and related to the canonical fix PR. |
| #89283 | keep_related | planned | related | Related but not a duplicate or replacement for #89323. |
| #89774 | keep_related | planned | related | Related product follow-up; not part of this automerge repair. |
| #89196 | keep_closed | skipped | superseded | Historical evidence only. |
| #89258 | keep_closed | skipped | superseded | Closed historical candidate only. |

## Needs Human

- none
