---
repo: "openclaw/openclaw"
cluster_id: "automerge-openclaw-openclaw-93351"
mode: "autonomous"
run_id: "27875426653"
workflow_run_id: "27875426653"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27875426653"
head_sha: "b9ea876fdcb5ab9314b59cc4dc4a84d155c81760"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-20T15:26:43.093Z"
canonical: "https://github.com/openclaw/openclaw/pull/93351"
canonical_issue: null
canonical_pr: "https://github.com/openclaw/openclaw/pull/93351"
actions_total: 4
fix_executed: 1
fix_failed: 0
fix_blocked: 1
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# automerge-openclaw-openclaw-93351

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27875426653](https://github.com/openclaw/clownfish/actions/runs/27875426653)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/93351

## Summary

PR #93351 is the canonical automerge repair target. It is a useful, narrow contributor PR for `openclaw agent --message-file`, but it is not merge-ready because the hydrated preflight reports a dirty merge state and a fresh ClawSweeper review with issues before merge. The branch is maintainer-editable, so the safe path is to repair the contributor branch rather than replace it. Linked #79182/#79200 are a related but separate `openclaw message send --message-file` family and should stay open/out of this automerge cluster.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 4 |
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
  "target": "#93351",
  "source_refs": [
    "#93351",
    "#79182",
    "#79200"
  ],
  "repair_strategy": "repair_contributor_branch",
  "planned_actions": [
    "fix_needed",
    "build_fix_artifact"
  ],
  "summary": "Repair PR #93351 in place: rebase/resolve the dirty branch, address the current ClawSweeper merge-readiness findings for the new `openclaw agent --message-file` public input path, preserve exact file-body semantics across Gateway and `--local`, and rerun changed checks plus a fresh review.",
  "pr_title": "feat(cli): add --message-file to openclaw agent",
  "pr_body": "## What Problem This Solves\n\n`openclaw agent` currently requires inline `--message`, which is fragile for long prompts, Markdown/code blocks, JSON, and multiline shell or PowerShell content. This repair keeps @ooiuuii's contributor PR #93351 as the canonical path and makes the branch landable.\n\n## Why This Change Was Made\n\nThe branch is maintainer-editable but currently dirty against `main`, and the latest ClawSweeper review still reports merge-readiness work for the new public Agent CLI input contract. The repair should stay bounded to #93351: rebase/resolve conflicts, confirm `--message-file` is mutually exclusive with inline `--message`, preserve exact UTF-8 file content for Gateway and `--local`, keep existing inline `--message` behavior unchanged, and update docs/tests only for the agent command.\n\n## User Impact\n\nUsers can pass multiline agent prompts from a file without shell interpolation while existing inline `--message` calls continue to work. This does not change `openclaw message send`, channel delivery limits, Gateway protocol shape, or transport adapters.\n\n## Evidence\n\nCurrent main still requires `-m, --message <text>` in `src/cli/program/register.agent-turn.ts` and `src/commands/agent-via-gateway.ts` reads only `opts.message`, so the feature is not already present. Hydrated PR #93351 is open, maintainer-editable, and dirty; hydrated checks on the existing head were green before the branch became dirty, but fresh `pnpm check:changed` and a fresh review are required after repair.",
  "likely_files": [
    "src/cli/program/register.agent-turn.ts",
    "src/commands/agent-via-gateway.ts",
    "src/cli/program/register.agent.test.ts",
    "src/commands/agent-via-gateway.test.ts",
    "docs/cli/agent.md",
    "docs/tools/agent-send.md"
  ],
  "validation_commands": [
    "pnpm check:changed"
  ],
  "credit_notes": [
    "Repair the existing contributor PR by @ooiuuii: https://github.com/openclaw/openclaw/pull/93351.",
    "Keep the PR body/release-note context crediting @ooiuuii for the `openclaw agent --message-file` feature.",
    "Do not fold in #79200/#79182 work; that is the separate `openclaw message send --message-file` surface."
  ],
  "source_job": "jobs/openclaw/inbox/automerge-openclaw-openclaw-93351.md",
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
| automerge_repair_outcome_comment | executed | #93351 |  |  |

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
| #93351 | fix_needed | planned | canonical | Repair the maintainer-editable contributor branch because it is the canonical automerge PR but is dirty and has actionable ClawSweeper merge-readiness work. |
| cluster:automerge-openclaw-openclaw-93351 | build_fix_artifact | planned |  | Build an executable repair artifact for the existing contributor branch rather than opening a replacement PR. |
| #79182 | keep_related | planned | related | Same message-file ergonomics family, but not the same root cause or command surface as #93351. |
| #79200 | keep_related | planned | related | Related sibling feature surface, not a duplicate or candidate fix for #93351. |

## Needs Human

- none
