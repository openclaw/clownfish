---
repo: "openclaw/openclaw"
cluster_id: "repair-69954-autonomous-repair-wave-20260617a"
mode: "autonomous"
run_id: "27744912799"
workflow_run_id: "27744912799"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27744912799"
head_sha: "5e4579520d2c0f67afd482b6e40b12f7d4a3caa3"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-18T08:06:46.816Z"
canonical: "https://github.com/openclaw/openclaw/pull/69954"
canonical_issue: "https://github.com/openclaw/openclaw/issues/50248"
canonical_pr: "https://github.com/openclaw/openclaw/pull/69954"
actions_total: 5
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 1
apply_skipped: 0
needs_human_count: 0
---

# repair-69954-autonomous-repair-wave-20260617a

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27744912799](https://github.com/openclaw/clownfish/actions/runs/27744912799)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/69954

## Summary

Built an executable repair plan for PR #69954. Current main still has the stale sessionFile cleanup bug, PR #69954 is the useful canonical contributor PR, but it is dirty against current main and has an unresolved mutation-accounting bot finding, so the next step is repair_contributor_branch rather than merge or closeout.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 5 |
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
  "target": "#69954",
  "source_refs": [
    "#69954",
    "#50248",
    "#63897",
    "#92542"
  ],
  "repair_strategy": "repair_contributor_branch",
  "planned_actions": [
    "fix_needed",
    "build_fix_artifact"
  ],
  "summary": "Repair PR #69954 by porting its canonical transcript fallback into the current session cleanup service. Current main can still prune a valid live session entry when entry.sessionFile points at a stale missing path while <sessionId>.jsonl exists. The repair should keep the entry, update stale generated sessionFile metadata to the canonical transcript path on apply, and report repair-only runs as mutations in summaries/JSON.",
  "pr_title": "fix: preserve canonical session transcripts during cleanup",
  "pr_body": "## Summary\n- Repairs #69954 by porting the contributor's canonical transcript fallback to the current `src/config/sessions/cleanup-service.ts` path.\n- Keeps `sessions cleanup --fix-missing` from pruning a row when the persisted `sessionFile` is stale but the canonical `<sessionId>.jsonl` transcript exists.\n- Repairs stale generated `sessionFile` metadata on apply and reports repair-only cleanup runs as mutations so JSON/dry-run output is accurate.\n\n## Credit\nThis carries forward the narrow fix from https://github.com/openclaw/openclaw/pull/69954 by @Blahdude / Oliver Camp.\n\n## Verification\n- `pnpm test src/config/sessions/store.pruning.integration.test.ts`\n- `pnpm check:changed`\n- Codex `/review` after repair",
  "likely_files": [
    "src/config/sessions/cleanup-service.ts",
    "src/config/sessions/store.pruning.integration.test.ts"
  ],
  "validation_commands": [
    "pnpm test src/config/sessions/store.pruning.integration.test.ts",
    "pnpm check:changed"
  ],
  "credit_notes": [
    "Preserve source PR credit for https://github.com/openclaw/openclaw/pull/69954 by @Blahdude / Oliver Camp.",
    "PR body should state that the repair ports the contributor's narrow canonical transcript fallback to the current cleanup-service implementation and addresses the review-bot mutation-accounting gap.",
    "Release-note context belongs in the PR body or squash message, not CHANGELOG.md."
  ],
  "source_job": "jobs/openclaw/inbox/repair-69954-autonomous-repair-wave-20260617a.md",
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
| repair_contributor_branch | pushed | https://github.com/openclaw/openclaw/pull/69954 |  |  |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #69954 | merge_canonical | blocked | fix_pr | job does not allow merge |

## Apply Audit

| Attempt | Source | Target | Action | Status | Reason |
| --- | --- | --- | --- | --- |
|  | post_flight | #69954 | merge_canonical | blocked | job does not allow merge |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #50248 | keep_canonical | planned | canonical | Keep the canonical issue open until #69954 or an equivalent fix lands. |
| #69954 | fix_needed | planned | canonical | Repair the contributor branch by porting the narrow fallback/metadata-repair behavior to the current cleanup-service owner path and adding repair accounting. |
| #63897 | keep_closed | skipped | duplicate | Already closed; no mutation is valid. |
| #92542 | keep_related | planned | related | Keep separate from this narrow #69954 repair wave. |
| cluster:repair-69954-autonomous-repair-wave-20260617a | build_fix_artifact | planned |  | Provide the executor with a narrow repair artifact for the existing contributor PR branch. |

## Needs Human

- none
