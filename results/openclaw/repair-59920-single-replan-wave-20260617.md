---
repo: "openclaw/openclaw"
cluster_id: "repair-59920-single-replan-wave-20260617"
mode: "autonomous"
run_id: "27703237155"
workflow_run_id: "27703237155"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27703237155"
head_sha: "3d1c6e80508f4f0169e7d61190672f06031166e6"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-17T16:39:28.022Z"
canonical: "https://github.com/openclaw/openclaw/pull/59920"
canonical_issue: "https://github.com/openclaw/openclaw/issues/59918"
canonical_pr: "https://github.com/openclaw/openclaw/pull/59920"
actions_total: 8
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 1
apply_skipped: 0
needs_human_count: 0
---

# repair-59920-single-replan-wave-20260617

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27703237155](https://github.com/openclaw/clownfish/actions/runs/27703237155)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/59920

## Summary

PR #59920 remains the canonical repair path, but it is not merge-ready in this worker lane because merge is disallowed and the branch still needs a current-main rebase/port plus fresh Codex /review proof. The hydrated artifact shows maintainer_can_modify=true, so the executable path is to repair the contributor branch while preserving mySebbe credit. Security-sensitive umbrella issue #25592 is quarantined separately and does not block the narrow non-security parser repair.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 8 |
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
  "target": "#59920",
  "source_refs": [
    "#59920",
    "#59918",
    "#61463",
    "#66081",
    "#92092",
    "#93646",
    "#25592"
  ],
  "repair_strategy": "repair_contributor_branch",
  "planned_actions": [
    "fix_needed",
    "build_fix_artifact"
  ],
  "summary": "Repair contributor PR #59920 in place: rebase/port the terminal-priority CLI JSONL parser change onto current main, preserve current Claude/Gemini dialect behavior, and add focused full-buffer plus streaming regression coverage for Codex/OpenAI-style task_complete.last_agent_message, final_answer, commentary-phase skip, and structured-empty fallback behavior.",
  "pr_title": "fix(agents): prefer terminal CLI JSONL reply fields",
  "pr_body": "## Summary\n- Repair #59920 on the existing contributor branch instead of replacing it.\n- Port the terminal-priority JSONL parsing onto current main: prefer `task_complete.last_agent_message`, then `phase: \"final_answer\"`, then non-commentary generic item text.\n- Apply the same priority to `createCliJsonlStreamingParser().getOutput()` and keep structured commentary-only output as `{ text: \"\" }` so `parseCliOutput()` does not fall back to raw JSONL.\n- Preserve current Claude stream-json and Gemini stream-json behavior added on main.\n\n## Credit\nThis carries forward mySebbe's original #59920 fix and prior branch repair attribution.\n\n## Review blockers to address\n- Old Codex P2: commentary-phase item text must not make successful structured runs fall through to raw JSONL.\n- Fresh Codex `/review` must run after the repair and all findings must be addressed or proven non-actionable.\n\n## Codex contract proof\n- `../codex/codex-rs/protocol/src/protocol.rs:1257` / `:1933` define turn completion and `last_agent_message`.\n- `../codex/codex-rs/protocol/src/models.rs:926` defines optional output-message phase such as `commentary` and `final_answer`.\n- `../codex/codex-rs/exec/src/cli.rs:72` and `../codex/codex-rs/exec/src/event_processor.rs:31` confirm the explicit last-message artifact path.\n\n## Verification\n- `pnpm test src/agents/cli-output.test.ts`\n- `pnpm check:changed`\n- Fresh `/review` clean before merge consideration.",
  "likely_files": [
    "src/agents/cli-output.ts",
    "src/agents/cli-output.test.ts"
  ],
  "validation_commands": [
    "pnpm test src/agents/cli-output.test.ts",
    "pnpm check:changed"
  ],
  "credit_notes": [
    "Preserve mySebbe's original commit and authorship on PR #59920 where possible.",
    "Keep existing co-author/maintainer repair attribution from vincentkoc in branch history and PR context.",
    "PR body should state this is a Clownfish repair of mySebbe's narrow parser fix and that contributor credit is preserved.",
    "Do not edit CHANGELOG.md; include release-note context in the PR body or final squash/merge message."
  ],
  "source_job": "jobs/openclaw/inbox/repair-59920-single-replan-wave-20260617.md",
  "security_sensitive": false,
  "security_routed_refs": [
    "#25592"
  ],
  "needs_human": [],
  "repair_status": "pushed",
  "terminal": true
}
```

## Fix Execution Actions

| Action | Status | Target | Branch | Reason |
| --- | --- | --- | --- | --- |
| repair_contributor_branch | pushed | https://github.com/openclaw/openclaw/pull/59920 |  |  |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #59920 | merge_canonical | blocked | fix_pr | job does not allow merge |

## Apply Audit

| Attempt | Source | Target | Action | Status | Reason |
| --- | --- | --- | --- | --- |
|  | post_flight | #59920 | merge_canonical | blocked | job does not allow merge |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #25592 | route_security | planned | security_sensitive | Exact linked issue is security-sensitive and must route to central OpenClaw security handling. |
| #59918 | keep_closed | skipped | superseded | Already closed; no close action is valid. |
| #59920 | fix_needed | planned | canonical | Canonical contributor branch is useful and editable, but repair execution must rebase/port onto current main, resolve review-bot proof blockers, run fresh /review, and validate before any future merge decision. |
| #61463 | keep_closed | skipped | related | Closed related sibling evidence only; no mutation is valid or needed. |
| #66081 | keep_closed | skipped | related | Already closed related context; no action beyond preserving #59920 as canonical. |
| #92092 | keep_closed | skipped | related | Closed merged sibling evidence only. |
| #93646 | keep_closed | skipped | independent | Already closed independent context; no mutation is valid. |
| cluster:repair-59920-single-replan-wave-20260617 | build_fix_artifact | planned |  | Executable repair artifact is needed for the applicator/executor to rebase and fix the existing contributor PR branch. |

## Needs Human

- none
