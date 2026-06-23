---
repo: "openclaw/openclaw"
cluster_id: "repair-openclaw-openclaw-64490-20260623a"
mode: "autonomous"
run_id: "27996540906"
workflow_run_id: "27996540906"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27996540906"
head_sha: "01a8ba38ad1f130f41158b2e061978d19164fe2c"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-23T01:58:10.530Z"
canonical: "https://github.com/openclaw/openclaw/pull/64490"
canonical_issue: null
canonical_pr: "https://github.com/openclaw/openclaw/pull/64490"
actions_total: 5
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 1
apply_skipped: 0
needs_human_count: 0
---

# repair-openclaw-openclaw-64490-20260623a

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27996540906](https://github.com/openclaw/clownfish/actions/runs/27996540906)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/64490

## Summary

Plan to repair the editable contributor PR #64490 in place. Current main still emits zsh option descriptions inside double-quoted `_arguments` specs without escaping `$` or backticks, and the hydrated preflight shows PR #64490 is open, branch-editable, narrow, and blocked by an actionable Greptile P2 about using a single-quote escape idiom in a double-quoted zsh context plus failing proof. No GitHub mutations were performed.

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
  "target": "#64490",
  "source_refs": [
    "#64490",
    "#76126",
    "#72267",
    "#69305"
  ],
  "repair_strategy": "repair_contributor_branch",
  "planned_actions": [
    "fix_needed",
    "build_fix_artifact"
  ],
  "summary": "Repair source PR #64490 in place by using zsh double-quoted-context escaping for option descriptions: escape backslash, double quote, dollar sign, backtick, and bracket characters, but leave single quotes literal. Add focused tests proving `$`, backticks, and single quotes render correctly in zsh option descriptions.",
  "pr_title": "CLI: escape zsh completion descriptions",
  "pr_body": "## What Problem This Solves\n\nZsh completion option descriptions are emitted inside double-quoted `_arguments` specs. Current main leaves `$` and backticks active there, so descriptions such as `$OPENCLAW_STATE_DIR/completions` or examples wrapped in backticks can be interpreted by zsh instead of displayed literally.\n\n## Why This Change Was Made\n\nThis repairs source PR https://github.com/openclaw/openclaw/pull/64490 in place and keeps the scope limited to zsh option description escaping. The repair keeps the useful `$` and backtick escaping, addresses Greptile's P2 finding by dropping the single-quote escape that only applies to single-quoted shell strings, and adds focused regression coverage for the double-quoted context.\n\n## User Impact\n\nGenerated zsh completions display CLI option descriptions with `$`, backticks, and single quotes literally instead of evaluating or corrupting the description text.\n\n## Evidence\n\n- Source PR: https://github.com/openclaw/openclaw/pull/64490, credited to @EdenKangdw.\n- Current main inspected at def4b514857392cf1767114d04ace04848f2679d: `generateZshArgs` emits double-quoted specs and does not escape `$` or backticks in option descriptions.\n- Planned validation: `pnpm test src/cli/completion-cli.test.ts`; `pnpm check:changed`.\n\nOut of scope: #compdef first-line placement from https://github.com/openclaw/openclaw/pull/72267 and positional-argument completion work from https://github.com/openclaw/openclaw/pull/69305.",
  "likely_files": [
    "src/cli/completion-cli.ts",
    "src/cli/completion-cli.test.ts"
  ],
  "validation_commands": [
    "pnpm test src/cli/completion-cli.test.ts",
    "pnpm check:changed"
  ],
  "credit_notes": [
    "Preserve @EdenKangdw's source PR #64490 and branch history when repairing the existing branch.",
    "PR body should state that Clownfish repaired the branch in place and credit @EdenKangdw for the original zsh completion description escaping fix.",
    "Do not edit CHANGELOG.md; carry release-note context in the PR body or final squash message because this is a user-facing CLI/DX fix."
  ],
  "source_job": "jobs/openclaw/inbox/repair-openclaw-openclaw-64490-20260623a.md",
  "security_sensitive": false,
  "security_routed_refs": [
    "#69305"
  ],
  "needs_human": [],
  "repair_status": "pushed",
  "terminal": true
}
```

## Fix Execution Actions

| Action | Status | Target | Branch | Reason |
| --- | --- | --- | --- | --- |
| repair_contributor_branch | pushed | https://github.com/openclaw/openclaw/pull/64490 |  |  |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #64490 | merge_canonical | blocked | fix_pr | job does not allow merge |

## Apply Audit

| Attempt | Source | Target | Action | Status | Reason |
| --- | --- | --- | --- | --- |
|  | post_flight | #64490 | merge_canonical | blocked | job does not allow merge |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #64490 | fix_needed | planned | canonical | Repair the existing contributor branch in place: keep the `$` and backtick zsh description escaping fix, remove the incorrect single-quote escaping for double-quoted option descriptions, and add focused regression coverage. |
| cluster:repair-openclaw-openclaw-64490-20260623a | build_fix_artifact | planned |  | Build a narrow repair artifact for the existing #64490 branch. |
| #69305 | route_security | planned | security_sensitive | Security-sensitive linked ref is quarantined to central OpenClaw security handling only. |
| #72267 | keep_related | planned | related | Same zsh completion area but a distinct bug and out of scope for this repair cluster. |
| #76126 | keep_closed | skipped | superseded | Already closed historical context; no closure action is valid or needed. |

## Needs Human

- none
