---
repo: "openclaw/openclaw"
cluster_id: "live-pr-inventory-20260621T1430-002"
mode: "plan"
run_id: "27907383737"
workflow_run_id: "27907383737"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27907383737"
head_sha: "366a80239ced7494a64c3f420f9e1eb37c44239f"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-21T14:30:41.098Z"
canonical: null
canonical_issue: null
canonical_pr: null
actions_total: 13
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# live-pr-inventory-20260621T1430-002

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27907383737](https://github.com/openclaw/clownfish/actions/runs/27907383737)

Workflow conclusion: success

Worker result: planned

Canonical: unknown

## Summary

Plan-only result. No GitHub mutations are recommended directly. One security-sensitive linked issue is routed centrally, the already merged/closed PRs are retained as closed, draft or unrelated PRs are retained, and one narrow CLI repair artifact is proposed around #89897 because it is the strongest open candidate for #83902 but still lacks merge preflight and has a latest ClawSweeper needs-changes review.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 13 |
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
  "target": "#89897",
  "source_refs": [
    "#89897",
    "#83902",
    "#84438",
    "#85710",
    "#84066",
    "#90906",
    "#75248",
    "#89894",
    "#89907",
    "#89917",
    "#95483",
    "#75187"
  ],
  "repair_strategy": "repair_contributor_branch",
  "planned_actions": [
    "fix_needed",
    "build_fix_artifact"
  ],
  "summary": "Repair PR #89897 in place as the canonical CLI fix for #83902, then rerun validation and Codex review before any merge recommendation. The intended patch remains narrow: replace getCommandPathInternal's hardcoded terminator comparison with FLAG_TERMINATOR and keep focused argv regression coverage. Address the latest ClawSweeper needs-changes finding and do not alter unrelated CLI behavior.",
  "pr_title": "fix(cli): use FLAG_TERMINATOR in command-path parsing",
  "pr_body": "Clownfish repair for https://github.com/openclaw/openclaw/pull/89897 and https://github.com/openclaw/openclaw/issues/83902.\n\nThis keeps the contributor's narrow CLI fix path: getCommandPathInternal should compare against FLAG_TERMINATOR instead of a hardcoded \"--\" literal, with focused argv regression coverage. Before merge, address the latest ClawSweeper needs-changes review, rerun the narrow argv test, run pnpm check:changed, and run Codex /review cleanly.\n\nCredit: source PR #89897 by @whiteyzy. Related overlapping prior/open PRs are #84438, #85710, #84066, and #90906.",
  "likely_files": [
    "src/cli/argv.ts",
    "src/cli/argv.test.ts"
  ],
  "validation_commands": [
    "pnpm -s vitest run src/cli/argv.test.ts",
    "pnpm check:changed"
  ],
  "credit_notes": [
    "Repair source PR: https://github.com/openclaw/openclaw/pull/89897 by @whiteyzy; preserve contributor attribution in any repair commits or replacement PR body.",
    "Related overlapping CLI work for context only: https://github.com/openclaw/openclaw/pull/84438, https://github.com/openclaw/openclaw/pull/85710, https://github.com/openclaw/openclaw/pull/84066, and https://github.com/openclaw/openclaw/pull/90906."
  ],
  "source_job": "jobs/openclaw/inbox/live-pr-inventory-20260621T1430-002.md",
  "security_sensitive": false,
  "security_routed_refs": [
    "#75187"
  ],
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
| #75187 | route_security | planned | security_sensitive | Exact hydrated issue is security-sensitive and must be routed to central OpenClaw security handling. |
| #75248 | keep_closed | skipped |  | Already closed. |
| #83902 | keep_related | planned | related | Root issue should remain open until a repaired candidate lands. |
| #84066 | keep_closed | skipped |  | Already closed overlapping CLI fix. |
| #84438 | keep_related | planned | superseded | Superseded by the stronger CLI repair path, but retained because closure is blocked and no mutation is permitted. |
| #85710 | keep_related | planned | superseded | Superseded by the stronger CLI repair path, but retained because closure is blocked and no mutation is permitted. |
| #89894 | keep_related | planned | related | Related docs PR lacks complete merge preflight and is tied to a routed security-sensitive issue. |
| #89897 | fix_needed | planned | canonical | Repair the useful contributor branch before any merge recommendation. |
| #89907 | keep_independent | planned | independent | Independent draft PR retained for a separate finalization path. |
| #89917 | keep_independent | planned | independent | Independent draft PR retained for a separate finalization path. |
| #90906 | keep_closed | skipped |  | Already closed overlapping CLI fix. |
| #95483 | keep_closed | skipped | canonical | Already merged before this plan run; no further action permitted. |
| cluster:live-pr-inventory-20260621T1430-002 | build_fix_artifact | planned | fixed_by_candidate | Emit one bounded executable repair artifact for the strongest open CLI candidate; retain unrelated draft/docs PRs. |

## Needs Human

- none
