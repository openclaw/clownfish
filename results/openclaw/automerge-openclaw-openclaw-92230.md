---
repo: "openclaw/openclaw"
cluster_id: "automerge-openclaw-openclaw-92230"
mode: "autonomous"
run_id: "27897795272"
workflow_run_id: "27897795272"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27897795272"
head_sha: "791045fa62c8a83ccaf1e6118c1f6d789e9174cd"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-21T08:11:59.744Z"
canonical: "https://github.com/openclaw/openclaw/pull/92230"
canonical_issue: null
canonical_pr: "https://github.com/openclaw/openclaw/pull/92230"
actions_total: 3
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 1
apply_skipped: 0
needs_human_count: 0
---

# automerge-openclaw-openclaw-92230

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27897795272](https://github.com/openclaw/clownfish/actions/runs/27897795272)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/92230

## Summary

#92230 is the open canonical PR for adding configured model choices to /model. The PR is maintainer-editable at head 38ee9edebfc7633bb232871a0df05c3dedcd1490, but the job pins two remaining repair requirements: preserve Discord configured ACP binding readiness for bare /model before loading picker data, and prove Telegram long-model reachability through the provider browse callback to a real mdl_sel_<provider>/<model> route. Close and merge are blocked by job policy, so the executable path is to repair the existing contributor branch and preserve @clawSean's PR credit. #94067 is already closed and merged and remains only related historical context.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 3 |
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
  "target": "#92230",
  "source_refs": [
    "#92230",
    "#94067"
  ],
  "repair_strategy": "repair_contributor_branch",
  "planned_actions": [
    "fix_needed",
    "build_fix_artifact"
  ],
  "summary": "Repair #92230 in place. First route bare Discord /model through the same configured ACP binding readiness guard used by the normal native command path before loading model picker data or replying. Then strengthen Telegram tests so long model callback overflow proves the provider browse callback opens a menu containing the real provider-scoped mdl_sel_<provider>/<model> selection route, while preserving direct tgcmd behavior for short models.",
  "pr_title": "fix(clownfish): repair model menu automerge for #92230",
  "pr_body": "## What Problem This Solves\n\nRepairs the automerge candidate in #92230 so configured `/model` choices remain safe across Discord and Telegram native command surfaces.\n\n## Why This Change Was Made\n\nThe pinned Clownfish repair requirements identify two remaining defects on the current PR head `38ee9edebfc7633bb232871a0df05c3dedcd1490`: bare Discord `/model` must not bypass configured ACP binding readiness, and Telegram long-model handling must prove the provider browse path reaches a real provider-scoped `mdl_sel_<provider>/<model>` selection route instead of only asserting `mdl_prov`.\n\n## User Impact\n\nDiscord users with configured ACP bindings keep the existing unavailable-binding response when the binding cannot be prepared, without exposing picker data. Telegram users keep short-model direct callbacks, while long model names remain reachable through the provider browse menu.\n\n## Evidence\n\nPlanned focused validation:\n`pnpm test:serial extensions/discord/src/monitor/native-command.plugin-dispatch.test.ts extensions/discord/src/monitor/native-command.model-picker.test.ts extensions/telegram/src/bot-native-commands.test.ts src/auto-reply/commands-registry.test.ts`\n\nThen run `pnpm check:changed`. Treat unrelated `opencode-go` changed-check type failures as baseline evidence only and do not edit that surface.\n\nSource PR: https://github.com/openclaw/openclaw/pull/92230\nCredit: original contribution by @clawSean; Clownfish repair keeps the contributor branch as the review lane.",
  "likely_files": [
    "extensions/discord/src/monitor/native-command.ts",
    "extensions/discord/src/monitor/native-command.model-picker.test.ts",
    "extensions/discord/src/monitor/native-command.plugin-dispatch.test.ts",
    "extensions/telegram/src/bot-native-commands.ts",
    "extensions/telegram/src/bot-native-commands.test.ts",
    "extensions/telegram/src/native-command-callback-data.ts",
    "src/auto-reply/commands-registry.test.ts"
  ],
  "validation_commands": [
    "pnpm test:serial extensions/discord/src/monitor/native-command.plugin-dispatch.test.ts extensions/discord/src/monitor/native-command.model-picker.test.ts extensions/telegram/src/bot-native-commands.test.ts src/auto-reply/commands-registry.test.ts",
    "pnpm check:changed"
  ],
  "credit_notes": [
    "Preserve @clawSean as the original contributor on source PR https://github.com/openclaw/openclaw/pull/92230.",
    "Repair the contributor branch directly because maintainer_can_modify=true; do not open a replacement unless branch update fails later.",
    "PR body or final repair comment should state that Clownfish carried the existing contributor PR forward and kept credit on #92230."
  ],
  "source_job": "jobs/openclaw/inbox/automerge-openclaw-openclaw-92230.md",
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
| repair_contributor_branch | pushed | https://github.com/openclaw/openclaw/pull/92230 |  |  |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #92230 | merge_canonical | blocked | fix_pr | job does not allow merge |

## Apply Audit

| Attempt | Source | Target | Action | Status | Reason |
| --- | --- | --- | --- | --- |
|  | post_flight | #92230 | merge_canonical | blocked | job does not allow merge |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #92230 | fix_needed | planned | canonical | Repair the existing contributor PR branch; do not replace, close, or merge. |
| #94067 | keep_closed | skipped | related | Already merged related context; keep closed. |
| cluster:automerge-openclaw-openclaw-92230 | build_fix_artifact | planned |  | Build a narrow executable repair artifact for the canonical contributor branch. |

## Needs Human

- none
