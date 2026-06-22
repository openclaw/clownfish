---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-1378-autonomous-bulk-20260622b"
mode: "autonomous"
run_id: "27961720358"
workflow_run_id: "27961720358"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27961720358"
head_sha: "cbf4207a7692d7b1b364a892069127245a796578"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-22T14:56:41.085Z"
canonical: "https://github.com/openclaw/openclaw/issues/94176"
canonical_issue: "https://github.com/openclaw/openclaw/issues/94176"
canonical_pr: null
actions_total: 7
fix_executed: 0
fix_failed: 0
fix_blocked: 1
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-1378-autonomous-bulk-20260622b

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27961720358](https://github.com/openclaw/clownfish/actions/runs/27961720358)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/94176

## Summary

Classified #94176 as the surviving canonical non-security issue. Current main e66aa357f85b46b5d370efe181cd005a75fbab22 still records non_deliverable_terminal_turn in embedded-run trajectory metadata, but the reply layer has no matching propagated meta/failure-copy path, so a narrow credited replacement fix PR is planned. #94848 is routed exactly to security because the preflight marks that PR security_sensitive=true; related Feishu and Discord reports stay open as separate channel-specific work.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 7 |
| Fix executed | 0 |
| Fix failed | 0 |
| Fix blocked | 1 |
| Applied executions | 0 |
| Apply blocked | 0 |
| Apply skipped | 0 |
| Needs human | 0 |

## Repair Candidate

```json
{
  "target": "#94187",
  "source_refs": [
    "#94187",
    "#94176",
    "#88574",
    "#94848",
    "#92100",
    "#94747"
  ],
  "repair_strategy": "replace_uneditable_branch",
  "planned_actions": [
    "fix_needed",
    "build_fix_artifact"
  ],
  "summary": "Open a narrow credited replacement PR for #94176 that propagates the existing non_deliverable_terminal_turn marker from embedded attempt classification into embedded run metadata/lifecycle error handling, then maps that reason to specific user-facing retry guidance instead of the generic /new fallback. Do not add auto-retry/replay behavior in this PR.",
  "pr_title": "fix(agent): surface non-deliverable terminal turns with specific copy",
  "pr_body": "## What Problem This Solves\n\nFixes #94176. Current main records `non_deliverable_terminal_turn` in embedded-run trajectory/session metadata, but the reply path still falls back to the generic external-run failure text that tells users to try `/new` without exposing the known terminal reason.\n\n## Why This Change Was Made\n\nThis keeps the fix narrow: propagate the existing terminal marker into embedded run metadata/lifecycle handling and map that marker to specific retry guidance. It deliberately does not add an automatic full-turn retry/replay policy; #94848 is routed separately for security review and should not be repaired through this Clownfish lane.\n\nThis replacement carries forward the useful implementation direction from source PR #94187. Thanks @lsr911 for the original diagnostic surfacing PR and @giodl73-repo for the follow-up terminalError propagation and regression-test work.\n\n## User Impact\n\nUsers who hit a non-deliverable terminal turn should see specific guidance explaining that the model stopped before producing a deliverable reply, instead of the generic `/new` fallback. Existing session state and retry/replay behavior should remain unchanged.\n\n## Evidence\n\nCurrent main: `src/agents/embedded-agent-runner/run/attempt-trajectory-status.ts` defines and returns `non_deliverable_terminal_turn`; `src/agents/embedded-agent-runner/run/attempt.ts` records it only into trajectory/session events; `src/auto-reply/reply/agent-runner-failure-copy.ts` still defines the generic external-run failure copy.\n\nPlanned validation: `node scripts/run-vitest.mjs src/auto-reply/reply/agent-runner-execution.test.ts src/agents/embedded-agent-runner/run/attempt-trajectory-status.test.ts --reporter=verbose` and `pnpm check:changed`.",
  "likely_files": [
    "src/agents/embedded-agent-runner/run/types.ts",
    "src/agents/embedded-agent-runner/types.ts",
    "src/agents/embedded-agent-runner/run/attempt.ts",
    "src/agents/embedded-agent-runner/run.ts",
    "src/auto-reply/reply/agent-lifecycle-terminal.ts",
    "src/auto-reply/reply/agent-runner-execution.ts",
    "src/auto-reply/reply/agent-runner-failure-copy.ts",
    "src/auto-reply/reply/agent-runner-execution.test.ts",
    "src/agents/embedded-agent-runner/run/attempt-trajectory-status.test.ts"
  ],
  "validation_commands": [
    "node scripts/run-vitest.mjs src/auto-reply/reply/agent-runner-execution.test.ts src/agents/embedded-agent-runner/run/attempt-trajectory-status.test.ts --reporter=verbose",
    "pnpm check:changed"
  ],
  "credit_notes": [
    "Credit @lsr911 for the original #94187 diagnostic surfacing PR and user-facing copy direction.",
    "Credit @giodl73-repo for the #94187 follow-up commit that threaded terminalError through embedded-run result/meta and added focused regression coverage.",
    "Do not use #94848 as a source branch in the automated repair path because it is security-routed by preflight and adds auto-retry behavior outside this narrow fix."
  ],
  "source_job": "jobs/openclaw/inbox/gitcrawl-1378-autonomous-bulk-20260622b.md",
  "security_sensitive": false,
  "security_routed_refs": [
    "#94848"
  ],
  "needs_human": [],
  "repair_status": null,
  "terminal": null
}
```

## Fix Execution Actions

| Action | Status | Target | Branch | Reason |
| --- | --- | --- | --- | --- |
| execute_fix | blocked |  |  | fix artifact is too broad for autonomous execution; split into narrower jobs or explicitly set CLOWNFISH_ALLOW_BROAD_FIX_ARTIFACTS=1 |

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
| #94176 | fix_needed | planned | canonical | The bug remains real on current main and no non-security mergeable canonical PR is available in this cluster. |
| cluster:gitcrawl-1378-autonomous-bulk-20260622b | build_fix_artifact | planned |  | Build a replacement PR that propagates the terminal marker to reply-layer meta and surfaces specific retry guidance, without adding automatic replay/retry policy. |
| #94848 | route_security | planned | security_sensitive | Central OpenClaw security triage owns this exact PR; no comment, close, merge, or branch repair should be applied by Clownfish. |
| #92100 | keep_related | planned | related | Related channel-specific fallback work remains open and should not be closed as a duplicate of the generic terminal-marker issue. |
| #94747 | keep_related | planned | related | This is a related channel delivery guard problem, not a true duplicate of #94176. |
| #94187 | keep_closed | skipped | superseded | Historical source PR only; keep closed and carry attribution into the replacement fix artifact. |
| #88574 | keep_closed | skipped | related | Closed historical context only. |

## Needs Human

- none
