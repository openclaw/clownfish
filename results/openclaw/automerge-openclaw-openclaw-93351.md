---
repo: "openclaw/openclaw"
cluster_id: "automerge-openclaw-openclaw-93351"
mode: "autonomous"
run_id: "27950444360"
workflow_run_id: "27950444360"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27950444360"
head_sha: "4dfd787641c4817e5ed2dde8946c6b48b63bbf54"
workflow_conclusion: "cancelled"
result_status: "planned"
published_at: "2026-06-22T12:15:33.739Z"
canonical: "https://github.com/openclaw/openclaw/pull/93351"
canonical_issue: null
canonical_pr: "https://github.com/openclaw/openclaw/pull/93351"
actions_total: 5
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# automerge-openclaw-openclaw-93351

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27950444360](https://github.com/openclaw/clownfish/actions/runs/27950444360)

Workflow conclusion: cancelled

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/93351

## Summary

PR #93351 is the canonical automerge repair target for the bounded `openclaw agent --message-file` work. Current main at 362c26a986cf6ade880d4c99faca09f300cee5c2 still has required inline `--message` only, while the maintainer-editable PR branch has a failing exact-head check and the latest repair outcome reports Codex /review did not pass on a changed-surface regression. The safe autonomous path is to repair the contributor branch, not merge or close; #79182/#79200 are the separate `openclaw message send --message-file` family and #94423 is broader related stdin+file agent input work.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 5 |
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
  "target": "#93351",
  "source_refs": [
    "#93351",
    "#79200",
    "#94423",
    "#79182"
  ],
  "repair_strategy": "repair_contributor_branch",
  "planned_actions": [
    "fix_needed",
    "build_fix_artifact"
  ],
  "summary": "Repair PR #93351 in place by preserving inline `--message` semantics while keeping the new file-backed input path. The latest blocker is a Codex /review changed-surface regression around inline message behavior, so the repair should focus on message resolution before Gateway/local dispatch and add regression proof for inline whitespace plus file-backed slash-command handling.",
  "pr_title": "feat(cli): add --message-file to openclaw agent",
  "pr_body": "## What Problem This Solves\n`openclaw agent` still requires inline `--message` on main, which makes long Markdown, JSON, code blocks, and multiline prompts fragile to pass through shell quoting.\n\n## Why This Change Was Made\nThis repairs the existing maintainer-editable contributor PR #93351 instead of replacing it. The repair scope is limited to the latest review blocker: preserve existing inline `--message` behavior while keeping the new file-backed message path for Gateway and local dispatch.\n\n## User Impact\nUsers can pass a UTF-8 prompt file to `openclaw agent --message-file <path>` without changing existing inline `--message` behavior.\n\n## Evidence\nPlanned validation: `pnpm check:changed`. The executor must rerun Codex /review after the repair and address any remaining findings before merge routing.",
  "likely_files": [
    "src/commands/agent-via-gateway.ts",
    "src/commands/agent-via-gateway.test.ts",
    "src/cli/program/register.agent.test.ts"
  ],
  "validation_commands": [
    "pnpm check:changed"
  ],
  "credit_notes": [
    "Repair the maintainer-editable contributor branch for source PR https://github.com/openclaw/openclaw/pull/93351 by @ooiuuii; preserve contributor attribution in the PR history and final merge message.",
    "Do not edit `CHANGELOG.md`; release-note context belongs in the PR body or squash/merge message for this normal user-facing PR."
  ],
  "source_job": "jobs/openclaw/outbox/finalized/automerge-openclaw-openclaw-93351.md",
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
| #93351 | fix_needed | planned | canonical | Repair the canonical contributor branch because the branch is safe to update but not merge-ready. |
| cluster:automerge-openclaw-openclaw-93351 | build_fix_artifact | planned |  | Create a repair artifact for the existing canonical PR branch. |
| #79182 | keep_related | planned | related | Related CLI message-file ergonomics, but a different command and canonical family. |
| #79200 | keep_related | planned | related | Related but independent message-send implementation path. |
| #94423 | keep_related | planned | related | Related broader follow-up, not the executable repair target for this cluster. |

## Needs Human

- none
