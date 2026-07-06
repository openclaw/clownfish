---
repo: "openclaw/openclaw"
cluster_id: "repair-openclaw-62338-20260706"
mode: "autonomous"
run_id: "28825587489"
workflow_run_id: "28825587489"
run_url: "https://github.com/openclaw/clownfish/actions/runs/28825587489"
head_sha: "4ce89959ca60db8c67ee821209cdcaa85fd2592c"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-07-06T22:40:46.589Z"
canonical: "https://github.com/openclaw/openclaw/pull/62338"
canonical_issue: "https://github.com/openclaw/openclaw/issues/62328"
canonical_pr: "https://github.com/openclaw/openclaw/pull/62338"
actions_total: 6
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 1
apply_skipped: 0
needs_human_count: 0
---

# repair-openclaw-62338-20260706

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/28825587489](https://github.com/openclaw/clownfish/actions/runs/28825587489)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/62338

## Summary

Plan repair for editable contributor PR #62338 only. Current main still drops memory FTS availability between memory-core status and the doctor gateway/CLI path; #62338 is useful but not merge-ready because it is dirty, failed real-behavior proof, and includes release-owned/non-narrow files. No GitHub mutations, merge, close, label, or comment actions are planned.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 6 |
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
  "target": "#62338",
  "source_refs": [
    "#62338",
    "#62328",
    "#90323",
    "#93260",
    "#80723"
  ],
  "repair_strategy": "repair_contributor_branch",
  "planned_actions": [
    "fix_needed",
    "build_fix_artifact"
  ],
  "summary": "Repair PR #62338 in place to semantically port only the missing FTS5 doctor diagnostic. Forward optional validated FTS status from the active memory manager through doctor.memory.status, carry it through the private gateway memory probe shape, and emit the CLI warning through noteFn only after existing QMD/disabled exits when fts.enabled=true and fts.available=false with a trimmed optional error.",
  "pr_title": "doctor(memory): surface FTS5 unavailable state in doctor checks",
  "pr_body": "## What Problem This Solves\n\nRepairs #62338 so `openclaw doctor` can report when builtin memory FTS5 is enabled but unavailable in the running gateway, without claiming to fix the broader BM25 recall degradation tracked by #62328.\n\n## Why This Change Was Made\n\nCurrent main already records FTS status in the builtin memory manager, but `doctor.memory.status` only forwards embedding readiness and Dreaming data. The repaired branch should forward optional FTS status through the private doctor probe path and warn only when `enabled=true` and `available=false`.\n\n## User Impact\n\nUsers on Node builds where FTS5 is unavailable get a visible doctor warning with the trimmed gateway error, while disabled memory search, QMD, Dreaming diagnostics, and skipped embedding probes keep their current behavior.\n\n## Evidence\n\nPlanned focused proof:\n- `pnpm test src/gateway/server-methods/doctor.test.ts src/commands/doctor-memory-search.test.ts`\n- `pnpm check:changed`\n- `git diff --check`\n\nRequired behavior cases: FTS status forwarding, unavailable warning, disabled/no-warning, available/no-warning, malformed payload ignored, QMD behavior preserved, and supported Node runtime proof.\n\nCredit: based on the contributor work in https://github.com/openclaw/openclaw/pull/62338 by @ZanderH-code.",
  "likely_files": [
    "src/gateway/server-methods/doctor.ts",
    "src/gateway/server-methods/doctor.test.ts",
    "src/commands/doctor-gateway-health.ts",
    "src/commands/doctor-memory-search.ts",
    "src/commands/doctor-memory-search.test.ts"
  ],
  "validation_commands": [
    "pnpm test src/gateway/server-methods/doctor.test.ts src/commands/doctor-memory-search.test.ts",
    "pnpm check:changed",
    "git diff --check"
  ],
  "credit_notes": [
    "Preserve @ZanderH-code as the source PR author for https://github.com/openclaw/openclaw/pull/62338.",
    "Keep release-note context in the repaired PR body rather than CHANGELOG.md; root policy says CHANGELOG.md is release-owned.",
    "Do not close #62328; credit the diagnostic work as partial visibility for that broader user-reported FTS5 recall issue."
  ],
  "source_job": "jobs/openclaw/inbox/repair-openclaw-62338-20260706.md",
  "security_sensitive": false,
  "security_routed_refs": [
    "#90323"
  ],
  "needs_human": [],
  "repair_status": "pushed",
  "terminal": true
}
```

## Fix Execution Actions

| Action | Status | Target | Branch | Reason |
| --- | --- | --- | --- | --- |
| repair_contributor_branch | pushed | https://github.com/openclaw/openclaw/pull/62338 |  |  |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #62338 | merge_canonical | blocked | fix_pr | job does not allow merge |

## Apply Audit

| Attempt | Source | Target | Action | Status | Reason |
| --- | --- | --- | --- | --- |
|  | post_flight | #62338 | merge_canonical | blocked | job does not allow merge |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #62338 | fix_needed | planned | canonical | Repair the existing editable contributor branch with a narrow diagnostic-only patch before any future maintainer review. |
| cluster:repair-openclaw-62338-20260706 | build_fix_artifact | planned |  | Fix-enabled job with allow_fix_pr=true and editable source PR branch. |
| #62328 | keep_related | planned | related | Related canonical issue remains open for the broader memory recall fix. |
| #80723 | keep_closed | skipped | superseded | Closed historical context only; no action needed. |
| #90323 | route_security | planned | security_sensitive | Quarantine exact security-sensitive linked PR to central OpenClaw security handling. |
| #93260 | keep_related | planned | related | Adjacent memory capability work, but independent of this narrow diagnostic repair lane. |

## Needs Human

- none
