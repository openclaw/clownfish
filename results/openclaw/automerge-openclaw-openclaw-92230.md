---
repo: "openclaw/openclaw"
cluster_id: "automerge-openclaw-openclaw-92230"
mode: "autonomous"
run_id: "27893443692"
workflow_run_id: "27893443692"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27893443692"
head_sha: "1203337fbfa8bee6047d27912acf9a1324792e7c"
workflow_conclusion: "cancelled"
result_status: "planned"
published_at: "2026-06-21T04:41:48.946Z"
canonical: "https://github.com/openclaw/openclaw/pull/92230"
canonical_issue: null
canonical_pr: "https://github.com/openclaw/openclaw/pull/92230"
actions_total: 2
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# automerge-openclaw-openclaw-92230

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27893443692](https://github.com/openclaw/clownfish/actions/runs/27893443692)

Workflow conclusion: cancelled

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/92230

## Summary

#92230 is the open canonical PR for adding configured model choices to /model. The hydrated preflight marks it non-security-sensitive and maintainer-editable, but it is not merge-ready: the job pins two concrete repair requirements, the latest hydrated ClawSweeper comment reports an actionable Telegram model reachability defect, and relevant validation has been failing. Because merge/close are blocked and fix/raise_pr is allowed, the executable path is to repair the existing contributor branch and preserve @clawSean's source PR credit.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 2 |
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
  "target": "#92230",
  "source_refs": [
    "#92230"
  ],
  "repair_strategy": "repair_contributor_branch",
  "planned_actions": [
    "fix_needed",
    "build_fix_artifact"
  ],
  "summary": "Repair #92230 in place by making the Discord native-command model picker test deterministic and preserving Telegram /model model reachability for callback values that exceed Telegram limits.",
  "pr_title": "feat: add model switch choices to /model",
  "pr_body": "What Problem This Solves\n\nRepairs the existing #92230 automerge branch so configured /model choices remain available across supported native command surfaces.\n\nWhy This Change Was Made\n\nClawSweeper found that Telegram could emit a partial tgcmd menu when a configured model exceeded Telegram callback limits, making long configured models unreachable. The repair should route Telegram bare /model through the existing browse picker or compact mdl_sel callback path instead of dropping over-limit models. The Discord model picker test also needs a deterministic fixed unbound main route via the existing native-command test seam.\n\nUser Impact\n\nUsers keep the richer /model picker behavior without losing long configured Telegram models. Contributor credit remains on @clawSean's source PR.\n\nEvidence\n\nRun the focused suite: pnpm test:serial extensions/discord/src/monitor/native-command.plugin-dispatch.test.ts extensions/discord/src/monitor/native-command.model-picker.test.ts extensions/telegram/src/bot-native-commands.test.ts src/auto-reply/commands-registry.test.ts\n\nThen run pnpm check:changed. Source PR: https://github.com/openclaw/openclaw/pull/92230.",
  "likely_files": [
    "extensions/discord/src/monitor/native-command.model-picker.test.ts",
    "extensions/telegram/src/bot-native-commands.ts",
    "extensions/telegram/src/bot-native-commands.test.ts",
    "extensions/telegram/src/command-ui.ts"
  ],
  "validation_commands": [
    "pnpm test:serial extensions/discord/src/monitor/native-command.plugin-dispatch.test.ts extensions/discord/src/monitor/native-command.model-picker.test.ts extensions/telegram/src/bot-native-commands.test.ts src/auto-reply/commands-registry.test.ts",
    "pnpm check:changed"
  ],
  "credit_notes": [
    "Repair the existing PR branch so the contributor trail remains on #92230.",
    "Preserve credit for @clawSean as the original PR author and source contributor: https://github.com/openclaw/openclaw/pull/92230.",
    "Do not edit unrelated opencode-go type failures; treat them as baseline only if they appear during changed validation."
  ],
  "source_job": "jobs/openclaw/inbox/automerge-openclaw-openclaw-92230.md",
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
| #92230 | fix_needed | planned | canonical | Repair the existing maintainer-editable contributor PR branch; do not merge or close because both are blocked by job policy and the PR still has bounded actionable repair requirements. |
| cluster:automerge-openclaw-openclaw-92230 | build_fix_artifact | planned |  | A complete narrow repair artifact is safe and executable for the existing PR branch. |

## Needs Human

- none
