---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-147-autonomous-terminal-gap"
mode: "autonomous"
run_id: "27705467201"
workflow_run_id: "27705467201"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27705467201"
head_sha: "11055a7e49bd4d7a4f5c6d331788c99e8595d963"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-17T16:55:15.247Z"
canonical: "#90982"
canonical_issue: "#90982"
canonical_pr: "#91002"
actions_total: 3
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-147-autonomous-terminal-gap

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27705467201](https://github.com/openclaw/clownfish/actions/runs/27705467201)

Workflow conclusion: success

Worker result: planned

Canonical: #90982

## Summary

Keep #90982 as the canonical open bug. #91002 is a useful contributor fix for the same root cause, but it is not merge-ready from the hydrated preflight because mergeability is unknown, two checks are failing, and no complete merge_preflight/Codex /review proof is present. Plan repair of the contributor branch with credit preserved.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 3 |
| Fix executed | 0 |
| Fix failed | 0 |
| Fix blocked | 0 |
| Applied executions | 0 |
| Apply blocked | 0 |
| Apply skipped | 0 |
| Needs human | 0 |

## Repair Candidate

```json
{
  "target": "#91002",
  "source_refs": [
    "#91002",
    "#90982"
  ],
  "repair_strategy": "repair_contributor_branch",
  "planned_actions": [
    "fix_needed",
    "build_fix_artifact"
  ],
  "summary": "Repair contributor PR #91002 so the TUI abort surface can show a sanitized last tool-call validation error summary for #90982 without expanding into provider retry policy, parser changes, config, or broader Gateway behavior.",
  "pr_title": "fix(tui): show tool validation error on aborted runs",
  "pr_body": "## Summary\n\nRepair and land the focused fix from source PR #91002 for #90982. The TUI should keep the existing plain `run aborted` fallback, but when the agent has a sanitized last tool-error summary for an abort/error terminal state, the abort line should include that summary so users can distinguish a tool schema validation loop from other abort causes.\n\n## Scope\n\n- Reuse existing `lastToolError` / `ToolErrorSummary` plumbing.\n- Keep model/tool argument payloads stripped from the terminal surface.\n- Keep the patch limited to lifecycle metadata, embedded TUI backend forwarding, abort rendering, and focused tests.\n- Do not add provider retry policy, parser changes, config, broad Gateway rewrites, or new persistent data model behavior beyond the existing PR intent.\n\n## Credit\n\nBased on source PR https://github.com/openclaw/openclaw/pull/91002 by @wsyjh8. Clownfish preserves attribution for the original diagnosis and implementation path.\n\n## Validation\n\n- `pnpm -s vitest run src/agents/embedded-agent-subscribe.handlers.lifecycle.test.ts src/agents/tool-error-summary.test.ts src/tui/embedded-backend.test.ts src/tui/tui-event-handlers.test.ts`\n- `pnpm check:changed`\n- Codex `/review` before merge, with findings addressed.",
  "likely_files": [
    "src/agents/embedded-agent-subscribe.handlers.lifecycle.ts",
    "src/agents/embedded-agent-subscribe.handlers.lifecycle.test.ts",
    "src/agents/tool-error-summary.ts",
    "src/agents/tool-error-summary.test.ts",
    "src/tui/embedded-backend.ts",
    "src/tui/embedded-backend.test.ts",
    "src/tui/tui-event-handlers.ts",
    "src/tui/tui-event-handlers.test.ts"
  ],
  "validation_commands": [
    "pnpm -s vitest run src/agents/embedded-agent-subscribe.handlers.lifecycle.test.ts src/agents/tool-error-summary.test.ts src/tui/embedded-backend.test.ts src/tui/tui-event-handlers.test.ts",
    "pnpm check:changed"
  ],
  "credit_notes": [
    "Preserve contributor credit for @wsyjh8 as the author of source PR https://github.com/openclaw/openclaw/pull/91002.",
    "If Clownfish opens or updates a repair PR, include source PR attribution in the PR body and changelog note because the user-facing TUI behavior changes."
  ],
  "source_job": "jobs/openclaw/inbox/gitcrawl-147-autonomous-terminal-gap.md",
  "security_sensitive": false,
  "security_routed_refs": [],
  "needs_human": [],
  "repair_status": null,
  "terminal": null
}
```

## Fix Execution Actions

| Action | Status | Target | Branch | Reason |
| --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |

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
| #90982 | keep_canonical | planned | canonical | #90982 remains the best canonical issue for the root cause and should stay open until a fix lands. |
| #91002 | fix_needed | planned | related | The PR is a plausible useful fix, but failing checks and missing merge preflight block merge. Because maintainer_can_modify is true, the next safe action is repairing the contributor branch rather than replacing or closing it. |
| cluster:gitcrawl-147-autonomous-terminal-gap | build_fix_artifact | planned |  | Emit an executable repair artifact for the contributor branch so the guarded executor can rebase/repair, validate, run review, and preserve source PR credit. |

## Needs Human

- none
