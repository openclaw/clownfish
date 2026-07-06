---
repo: "openclaw/openclaw"
cluster_id: "repair-openclaw-85238-20260706"
mode: "autonomous"
run_id: "28825495941"
workflow_run_id: "28825495941"
run_url: "https://github.com/openclaw/clownfish/actions/runs/28825495941"
head_sha: "3a6e00cfceaa5ca43e18222b907930e2b0fce687"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-07-06T22:40:46.587Z"
canonical: "https://github.com/openclaw/openclaw/pull/85238"
canonical_issue: "https://github.com/openclaw/openclaw/issues/80206"
canonical_pr: "https://github.com/openclaw/openclaw/pull/85238"
actions_total: 5
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 1
apply_skipped: 0
needs_human_count: 0
---

# repair-openclaw-85238-20260706

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/28825495941](https://github.com/openclaw/clownfish/actions/runs/28825495941)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/85238

## Summary

The repair lane is clear: #85238 is the editable canonical PR, but it is dirty against current main and its ClawSweeper review requires the path-env conflict to be resolved before merge. Current main still lacks the bounded pnpm 11 bin-child candidates on both service PATH and runtime bootstrap PATH surfaces, while it now contains the #87556 service identity fix and the newer path-env hardening that the repair must preserve. #87556 is retained only as closed historical conflict context and is not executable repair lineage.

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
  "target": "#85238",
  "source_refs": [
    "#85238",
    "#80206",
    "#80233",
    "#87556"
  ],
  "repair_strategy": "repair_contributor_branch",
  "planned_actions": [
    "fix_needed",
    "build_fix_artifact"
  ],
  "summary": "Repair editable contributor PR #85238 against current main by resolving the service-env/path-env conflict and adding bounded pnpm 11 package-manager bin candidates without weakening current PATH ordering, existence/current-PATH filtering, deleted-cwd hardening, or merged #87556 service identity behavior.",
  "pr_title": "fix: include pnpm 11 bins in gateway PATH",
  "pr_body": "What Problem This Solves\n\nRepairs #85238 for #80206. Gateway-managed service PATH generation and runtime PATH bootstrap can still miss pnpm 11 global shim directories, so Skills status may report required binaries such as clawhub or mcporter as missing even when pnpm installed them under PNPM_HOME/bin or ~/.local/share/pnpm/bin.\n\nWhy This Change Was Made\n\nCurrent main includes the #87556 service identity fix and newer path-env hardening. Keep those behaviors intact, then add only the bounded package-manager bin candidates after trusted system paths and behind existing existence/current-PATH filtering where that surface already requires it: PNPM_HOME/bin, ~/Library/pnpm/bin, ~/.local/share/pnpm/bin, NPM_CONFIG_PREFIX/bin, and ~/.npm-global/bin. Retain legacy pnpm locations so existing pnpm 10-style layouts keep working.\n\nUser Impact\n\nUsers running the gateway from sparse systemd/launchd service environments should see skill requirement checks find pnpm/npm-installed CLIs consistently with their package-manager global bin layout, without letting user-writable paths shadow trusted system paths.\n\nEvidence\n\n- Source PR: https://github.com/openclaw/openclaw/pull/85238 by @shbernal; preserve contributor authorship and credit.\n- Current main e80e8a2b67307c4e83e7192f234c31522b3464b2 still lacks pnpm 11 bin-child candidates in src/daemon/service-env.ts and src/infra/path-env.ts.\n- Preserve current resolvePathBootstrapBrewDirs, existingPathParts filtering, deleted-cwd hardening, and #87556 service identity behavior.\n- Validate with pnpm test src/daemon/service-env.test.ts src/infra/path-env.test.ts -- --reporter=verbose and pnpm check:changed. Include a small PATH ordering proof in the PR update showing trusted system dirs remain before user-writable package-manager candidates.",
  "likely_files": [
    "src/daemon/service-env.ts",
    "src/daemon/service-env.test.ts",
    "src/infra/path-env.ts",
    "src/infra/path-env.test.ts"
  ],
  "validation_commands": [
    "pnpm test src/daemon/service-env.test.ts src/infra/path-env.test.ts -- --reporter=verbose",
    "pnpm check:changed"
  ],
  "credit_notes": [
    "Preserve contributor authorship by repairing shbernal/openclaw:tung/pnpm11-service-path directly; source PR: https://github.com/openclaw/openclaw/pull/85238 by @shbernal.",
    "PR body or squash message should retain release-note context for #80206 and credit @shbernal for the pnpm 11 PATH fix idea and real behavior proof.",
    "Do not edit CHANGELOG.md for this normal PR; release generation owns changelog entries."
  ],
  "source_job": "jobs/openclaw/inbox/repair-openclaw-85238-20260706.md",
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
| repair_contributor_branch | pushed | https://github.com/openclaw/openclaw/pull/85238 |  |  |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #85238 | merge_canonical | blocked | fix_pr | job does not allow merge |

## Apply Audit

| Attempt | Source | Target | Action | Status | Reason |
| --- | --- | --- | --- | --- |
|  | post_flight | #85238 | merge_canonical | blocked | job does not allow merge |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #80206 | keep_canonical | planned | canonical | Keep the canonical issue open until the canonical PR repair is pushed and validated; closure is blocked by require_fix_before_close and post-merge close is disabled. |
| #85238 | fix_needed | planned | canonical | Repair the editable contributor PR branch against current main, preserving contributor authorship and the newer path/service trust behavior. Merge remains blocked by job policy. |
| cluster:repair-openclaw-85238-20260706 | build_fix_artifact | planned |  | Build a repair-contributor-branch artifact so the executor can update #85238, run review/validation, and push the same contributor branch without mutating GitHub from this worker. |
| #80233 | keep_closed | skipped | superseded | Historical evidence only; no mutation is allowed or needed. |
| #87556 | keep_closed | skipped | related | Historical merged context only; keep as non-mutating conflict evidence and exclude from candidate_fix, fix_artifact.linked_refs, and fix_artifact.source_prs. |

## Needs Human

- none
