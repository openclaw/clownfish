---
repo: "openclaw/openclaw"
cluster_id: "automerge-openclaw-openclaw-83041"
mode: "autonomous"
run_id: "27868634094"
workflow_run_id: "27868634094"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27868634094"
head_sha: "6446bd3d1d39bd5ffbad40cf962ce06681d50760"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-20T10:55:53.514Z"
canonical: "https://github.com/openclaw/openclaw/pull/83041"
canonical_issue: "https://github.com/openclaw/openclaw/issues/46797"
canonical_pr: "https://github.com/openclaw/openclaw/pull/83041"
actions_total: 5
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 1
apply_skipped: 0
needs_human_count: 0
---

# automerge-openclaw-openclaw-83041

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27868634094](https://github.com/openclaw/clownfish/actions/runs/27868634094)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/83041

## Summary

PR #83041 is the canonical repair path for issue #46797, but it is not merge-ready: the hydrated artifact reports mergeable_state=dirty and ClawSweeper's latest review asks for maintainer review/compatibility proof around the additive persisted restart-sentinel stats field. The branch is maintainer-editable, so the next safe action is a bounded repair of the contributor branch, not a replacement PR, merge, or close.

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
  "target": "#83041",
  "source_refs": [
    "#83041",
    "#46797",
    "#93863",
    "#55372"
  ],
  "repair_strategy": "repair_contributor_branch",
  "planned_actions": [
    "fix_needed",
    "build_fix_artifact"
  ],
  "summary": "Repair maintainer-editable PR #83041 so it is rebase-clean and explicitly proves compatibility for persisted restart sentinels that lack the new optional restart-required stats field. Keep the fix on the contributor branch and preserve @xuruiray credit.",
  "pr_title": "Repair config patch restart-required notices",
  "pr_body": "What Problem This Solves\n\nFixes #46797 by making config.patch/config.apply restart notices distinguish a pending required restart from a completed restart.\n\nWhy This Change Was Made\n\nClownfish is repairing source PR #83041 by @xuruiray rather than replacing it because the branch is maintainer-editable and the change is narrow. The repair should rebase/resolve the dirty branch state and address ClawSweeper's review blocker by proving old persisted restart sentinels remain readable when they do not contain the new optional restart-required stats metadata.\n\nUser Impact\n\nUsers should see a clear `Gateway restart required (...)` notice when a config patch requires a manual gateway restart, while completed startup follow-up notices should not keep telling them that the completed restart is still required.\n\nEvidence\n\nCurrent main still summarizes restart sentinels from kind/status/mode in `src/infra/restart-sentinel.ts` and config writes build sentinel stats without restart-required state in `src/gateway/server-methods/config-write-flow.ts`. Validate with focused restart-sentinel/config tests plus `pnpm check:changed` after the branch is repaired.",
  "likely_files": [
    "src/gateway/server-methods/config-write-flow.ts",
    "src/gateway/server-methods/config.shared-auth.test.ts",
    "src/gateway/server-restart-sentinel.ts",
    "src/gateway/server-restart-sentinel.test.ts",
    "src/infra/restart-sentinel.ts",
    "src/infra/restart-sentinel.test.ts"
  ],
  "validation_commands": [
    "node scripts/run-vitest.mjs src/infra/restart-sentinel.test.ts src/gateway/server-methods/config.shared-auth.test.ts src/gateway/server-restart-sentinel.test.ts src/gateway/server.config-patch.test.ts -- --reporter=verbose",
    "pnpm check:changed"
  ],
  "credit_notes": [
    "Repair source PR: https://github.com/openclaw/openclaw/pull/83041 by @xuruiray.",
    "Keep @xuruiray as the credited contributor for the landed behavior change.",
    "#93863 by @arkyu2077 independently identified the same wording symptom, but this automerge repair should not close or replace that PR until the canonical fix path lands and closeout is separately allowed."
  ],
  "source_job": "jobs/openclaw/inbox/automerge-openclaw-openclaw-83041.md",
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
| repair_contributor_branch | pushed | https://github.com/openclaw/openclaw/pull/83041 |  |  |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #83041 | merge_canonical | blocked | fix_pr | job does not allow merge |

## Apply Audit

| Attempt | Source | Target | Action | Status | Reason |
| --- | --- | --- | --- | --- |
|  | post_flight | #83041 | merge_canonical | blocked | job does not allow merge |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #46797 | keep_canonical | planned | canonical | Keep the canonical issue open until #83041 or another validated fix lands; close and post-merge closeout are blocked by job policy. |
| #55372 | keep_related | planned | related | Related restart-sentinel area, but independent remaining product decision outside this automerge repair scope. |
| #83041 | fix_needed | planned | canonical | Repair the contributor branch: rebase/resolve dirty state and address ClawSweeper's compatibility-proof blocker, then rerun review and validation. |
| #93863 | keep_related | planned | superseded | Superseded by the canonical repair path, but close actions are blocked in this job and require a landed canonical fix or explicit human close path. |
| cluster:automerge-openclaw-openclaw-83041 | build_fix_artifact | planned |  | Executor should repair the existing contributor branch, preserve @xuruiray credit, rerun changed checks and fresh review, then hand final merge gating back to Clownfish applicator/router. |

## Needs Human

- none
