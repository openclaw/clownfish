---
repo: "openclaw/openclaw"
cluster_id: "automerge-openclaw-openclaw-86062"
mode: "autonomous"
run_id: "27875510517"
workflow_run_id: "27875510517"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27875510517"
head_sha: "5fe671d12f2d113a746fb8f9700285b9e9d90b32"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-20T15:30:40.294Z"
canonical: "https://github.com/openclaw/openclaw/pull/86062"
canonical_issue: null
canonical_pr: "https://github.com/openclaw/openclaw/pull/86062"
actions_total: 11
fix_executed: 1
fix_failed: 0
fix_blocked: 1
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# automerge-openclaw-openclaw-86062

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27875510517](https://github.com/openclaw/clownfish/actions/runs/27875510517)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/86062

## Summary

PR #86062 is the canonical automerge target, but it is not merge-ready: the hydrated preflight reports mergeable=false/dirty at head 862716e2b8909ccdb5e1635da05e07d5a6b1cedc, a maintainer noted dependency-guard rebase is needed, and ClawSweeper paused for branch refresh plus exact-head review. The branch is safe to repair because maintainer_can_modify=true, no hydrated item is security_sensitive, and the current main checkout at a590f7f6901464308ed254cdbe8b96076d63806b still lacks the sessionStartedAt/display-time fallback surface that #86062 adds.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 11 |
| Fix executed | 1 |
| Fix failed | 0 |
| Fix blocked | 1 |
| Applied executions | 0 |
| Apply blocked | 0 |
| Apply skipped | 0 |
| Needs human | 0 |

## Repair Candidate

```json
{
  "target": "#86062",
  "source_refs": [
    "#86062",
    "#86040",
    "#86793",
    "#86794",
    "#86826",
    "#86954",
    "#41503",
    "#45130",
    "#50101",
    "#63975"
  ],
  "repair_strategy": "repair_contributor_branch",
  "planned_actions": [
    "fix_needed",
    "build_fix_artifact"
  ],
  "summary": "Repair PR #86062 in place by rebasing/refreshing the editable contributor branch onto current main a590f7f6901464308ed254cdbe8b96076d63806b, resolving session-state conflicts, and preserving the narrow feature: unnamed Control UI dashboard sessions display their creation time while explicit label/displayName values still win. Ensure sessionStartedAt is present in list rows and live sessions.changed row patches before rerunning review.",
  "pr_title": "feat(ui): timestamp unnamed dashboard sessions",
  "pr_body": "## What Problem This Solves\n\nNew Control UI dashboard sessions without a label or displayName currently fall back to raw session keys, which makes multiple new chats hard to distinguish. This carries forward #86062 by @davidmosiah and closes the already-routed request in #86040.\n\n## Why This Change Was Made\n\nThe repair should keep the existing narrow design: expose sessionStartedAt in gateway session rows and live session event rows, then let Control UI render an unnamed dashboard session with a local creation-time fallback. Explicit label/displayName values must keep priority, and the change must not persist synthetic labels or add rename UI.\n\n## User Impact\n\nUsers creating several dashboard chats with /new get readable creation-time labels for otherwise unnamed dashboard sessions. Existing named sessions, channel sessions, cron/subagent naming, and stored session labels should continue to display as before.\n\n## Evidence\n\nSource PR: https://github.com/openclaw/openclaw/pull/86062 by @davidmosiah. Preflight main a590f7f6901464308ed254cdbe8b96076d63806b still lacks the sessionStartedAt row field and timestamp display fallback, while the PR head 862716e2b8909ccdb5e1635da05e07d5a6b1cedc is dirty against main and needs branch refresh. Validate with focused Vitest coverage for gateway session rows, live session event patches, and Control UI display helpers, then run pnpm check:changed and a fresh ClawSweeper/Codex review on the repaired exact head.",
  "likely_files": [
    "src/gateway/server-methods/sessions.ts",
    "src/gateway/server-session-events.ts",
    "src/gateway/session-utils.ts",
    "src/gateway/session-utils.types.ts",
    "src/gateway/session-utils.test.ts",
    "ui/src/ui/controllers/sessions.ts",
    "ui/src/ui/controllers/sessions.test.ts",
    "ui/src/ui/session-display.ts",
    "ui/src/ui/types.ts",
    "ui/src/ui/app-render.helpers.node.test.ts"
  ],
  "validation_commands": [
    "node scripts/run-vitest.mjs src/gateway/session-utils.test.ts ui/src/ui/controllers/sessions.test.ts ui/src/ui/app-render.helpers.node.test.ts",
    "pnpm check:changed"
  ],
  "credit_notes": [
    "Repair the existing contributor PR rather than replacing it because maintainer_can_modify=true.",
    "Preserve author credit for @davidmosiah and source PR https://github.com/openclaw/openclaw/pull/86062 in any repair commit/PR body.",
    "Mention that #86040 is the original user-facing feature request already routed to #86062."
  ],
  "source_job": "jobs/openclaw/inbox/automerge-openclaw-openclaw-86062.md",
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
| execute_fix | blocked |  |  | fix artifact is too broad for autonomous execution; split into narrower jobs or explicitly set CLOWNFISH_ALLOW_BROAD_FIX_ARTIFACTS=1 |
| automerge_repair_outcome_comment | executed | #86062 |  |  |

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
| #86062 | fix_needed | planned | canonical | Automerge finalization is calibrated, but blocked_actions prohibit merge and the PR needs repair/rebase plus fresh review before any merge gate. |
| cluster:automerge-openclaw-openclaw-86062 | build_fix_artifact | planned |  | Build an executable repair artifact for the existing contributor branch. |
| #86793 | keep_related | planned | related | Keep open as a separate session-state PR. |
| #86826 | keep_related | planned | related | Keep open as a separate session-state bugfix. |
| #86040 | keep_closed | skipped | duplicate | Already closed; no closure action is valid. |
| #41503 | keep_closed | skipped | related | Closed historical evidence only. |
| #45130 | keep_closed | skipped | related | Closed historical evidence only. |
| #50101 | keep_closed | skipped | related | Closed historical evidence only. |
| #63975 | keep_closed | skipped | related | Closed historical evidence only. |
| #86794 | keep_closed | skipped | related | Closed historical evidence only. |
| #86954 | keep_closed | skipped | related | Closed historical evidence only. |

## Needs Human

- none
