---
repo: "openclaw/openclaw"
cluster_id: "repair-104026-zod-locale-refresh-20260711"
mode: "autonomous"
run_id: "29172429564"
workflow_run_id: "29172429564"
run_url: "https://github.com/openclaw/clownfish/actions/runs/29172429564"
head_sha: "e369e603e04980f21775563e01a758848df4a176"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-07-12T00:01:08.702Z"
canonical: "https://github.com/openclaw/openclaw/pull/104026"
canonical_issue: "https://github.com/openclaw/openclaw/issues/104014"
canonical_pr: "https://github.com/openclaw/openclaw/pull/104026"
actions_total: 5
fix_executed: 0
fix_failed: 0
fix_blocked: 1
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# repair-104026-zod-locale-refresh-20260711

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/29172429564](https://github.com/openclaw/clownfish/actions/runs/29172429564)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/104026

## Summary

Plan a narrow repair of the existing maintainer-editable contributor PR #104026. The preflight artifact identifies #104026 as the canonical writable fix for #104014, with #89445 only partially overlapping through degraded validation messages and #103956 already closed; current main is ff6dc43b8b8563f8bcc054c1430c980ecca66ae1 and still lacks the explicit Zod locale registration in src/config/zod-schema.ts.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 5 |
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
  "target": "#104026",
  "source_refs": [
    "#104026",
    "#104014",
    "#89445",
    "#103956"
  ],
  "repair_strategy": "repair_contributor_branch",
  "planned_actions": [
    "fix_needed",
    "build_fix_artifact"
  ],
  "summary": "Refresh contributor PR #104026 onto current main ff6dc43b8b8563f8bcc054c1430c980ecca66ae1, preserving the explicit Zod English-locale registration at the config-schema boundary and the focused packaged-validation-message regression proof.",
  "pr_title": "fix(config): register zod locale explicitly so packaged builds keep real validation messages",
  "pr_body": "## What Problem This Solves\nPackaged OpenClaw builds can lose Zod's English locale formatter and collapse config validation details to bare `Invalid input`, making startup/config errors unactionable.\n\n## Why This Change Was Made\nThis refresh keeps #104026's narrow fix: explicitly register the Zod English locale once at the canonical config schema boundary so packaged builds retain detailed validation messages.\n\n## User Impact\nUsers should see actionable config diagnostics such as unrecognized keys or expected/received type details instead of a generic `Invalid input` fallback.\n\n## Evidence\n- Focused locale regression: `pnpm test src/config/zod-schema.locale.test.ts`\n- Packaged proof after `pnpm build`: invalid config output must be more specific than bare `Invalid input`\n- Changed gate: `pnpm check:changed`\n\nCredit: based on @ObliviateRickLin's source PR https://github.com/openclaw/openclaw/pull/104026 for #104014.",
  "likely_files": [
    "src/config/zod-schema.ts",
    "src/config/zod-schema.locale.test.ts"
  ],
  "validation_commands": [
    "pnpm test src/config/zod-schema.locale.test.ts",
    "pnpm build",
    "pnpm check:changed"
  ],
  "credit_notes": [
    "Repair the existing contributor branch for @ObliviateRickLin's PR https://github.com/openclaw/openclaw/pull/104026; preserve the author commit where possible.",
    "PR body or final repair note should retain attribution to @ObliviateRickLin and link #104014 and #104026.",
    "Packaged CLI proof is required: after build, run an invalid packaged config through the CLI and confirm the output contains a specific Zod diagnostic such as an unrecognized key or expected/received type, not only bare Invalid input."
  ],
  "source_job": "jobs/openclaw/inbox/repair-104026-zod-locale-refresh-20260711.md",
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
| repair_contributor_branch | blocked |  |  | rebase-only repair stopped: rebase-only repair could not prove a new head based on current main |

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
| #104026 | fix_needed | planned | canonical | The canonical PR is useful and writable but must be refreshed against current main before any merge path; merge/comment/close/force-push are blocked by the job. |
| #104014 | keep_canonical | planned | canonical | Keep the root issue open as the canonical issue while #104026 is repaired. |
| #89445 | keep_related | planned | related | Related through validation-message degradation, but it may still contain a separate config/image reproduction gap. |
| #103956 | keep_closed | skipped | related | Closed context only; no action target for this repair run. |
| cluster:repair-104026-zod-locale-refresh-20260711 | build_fix_artifact | planned |  | Executor should refresh and validate the existing contributor branch; merge/comment/close/label/force-push remain blocked. |

## Needs Human

- none
