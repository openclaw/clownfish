---
repo: "openclaw/openclaw"
cluster_id: "automerge-openclaw-openclaw-85899"
mode: "autonomous"
run_id: "27868634023"
workflow_run_id: "27868634023"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27868634023"
head_sha: "6446bd3d1d39bd5ffbad40cf962ce06681d50760"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-20T10:41:34.421Z"
canonical: "https://github.com/openclaw/openclaw/pull/85899"
canonical_issue: null
canonical_pr: "https://github.com/openclaw/openclaw/pull/85899"
actions_total: 7
fix_executed: 1
fix_failed: 0
fix_blocked: 1
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# automerge-openclaw-openclaw-85899

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27868634023](https://github.com/openclaw/clownfish/actions/runs/27868634023)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/85899

## Summary

Canonical PR #85899 is the maintainer-opted automerge candidate. It is useful, narrow, non-security, and maintainer-editable, but it is not merge-ready because the hydrated PR state is dirty against main. Plan a repair of the contributor branch, then rerun review and changed checks. No close or merge actions are planned because the job blocks both.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 7 |
| Fix executed | 1 |
| Fix failed | 0 |
| Fix blocked | 1 |
| Applied executions | 0 |
| Apply blocked | 0 |
| Apply skipped | 0 |
| Needs human | 0 |

## Repair Candidate

```json
{
  "target": "#85899",
  "source_refs": [
    "#85899",
    "#60048",
    "#72748",
    "#81802",
    "#86701",
    "#92745"
  ],
  "repair_strategy": "repair_contributor_branch",
  "planned_actions": [
    "fix_needed",
    "build_fix_artifact"
  ],
  "summary": "Repair contributor PR #85899 by rebasing/updating its maintainer-editable branch against current main, preserving the narrow recursive `memory/**/*.md` docs and descriptor alignment, then rerun changed checks and a fresh review. Do not merge from this worker result.",
  "pr_title": "docs(memory): align descriptors and docs with recursive memory/**/*.md",
  "pr_body": "What Problem This Solves\n\nThe memory runtime already indexes nested files under `memory/`, but several user-facing tool descriptions and docs still say `memory/*.md`. That flat-glob wording can mislead agents and users into thinking nested daily memory files are not searched.\n\nWhy This Change Was Made\n\nThis repairs the existing maintainer-editable contributor PR #85899 rather than replacing it. Current main still recursively lists memory files through `packages/memory-host-sdk/src/host/internal.ts`, while descriptors/docs on main still contain stale `memory/*.md` wording. The branch only needs to be refreshed against current main and revalidated.\n\nUser Impact\n\nUsers and agents see consistent recursive `memory/**/*.md` wording for memory search/get behavior without any runtime behavior change.\n\nEvidence\n\n- Source proof: `collectMemoryFilesFromDir` recursively walks `memory/` and `listMemoryFiles` calls it for the default memory directory and directory extraPaths.\n- Hydrated PR #85899 proof: Real behavior proof, check-docs, check-lint, check-test-types, check-dependencies, and security-fast are passing on the preflight artifact, but the PR is dirty against main.\n- Required executor validation: `pnpm docs:list`, `pnpm check:changed`, and fresh Codex/ClawSweeper review before any merge routing.\n\nCredit\n\nThis repair carries forward @leafbird's source PR: https://github.com/openclaw/openclaw/pull/85899.",
  "likely_files": [
    "extensions/memory-core/index.ts",
    "extensions/memory-core/src/tools.ts",
    "extensions/memory-core/src/prompt-section.ts",
    "src/config/schema.help.ts",
    "docs/concepts/memory-builtin.md",
    "docs/concepts/memory.md",
    "docs/concepts/system-prompt.md",
    "docs/gateway/config-agents.md",
    "docs/reference/token-use.md",
    "docs/.generated/config-baseline.sha256"
  ],
  "validation_commands": [
    "pnpm docs:list",
    "pnpm check:changed"
  ],
  "credit_notes": [
    "Preserve original PR credit for @leafbird from https://github.com/openclaw/openclaw/pull/85899.",
    "Keep @steipete co-author attribution already present on the current PR head if the rebase retains that commit or equivalent change.",
    "No changelog entry is required for this docs/descriptor wording repair."
  ],
  "source_job": "jobs/openclaw/inbox/automerge-openclaw-openclaw-85899.md",
  "security_sensitive": false,
  "security_routed_refs": [],
  "needs_human": [],
  "repair_status": "executed",
  "terminal": true
}
```

## Fix Execution Actions

| Action | Status | Target | Branch | Reason |
| --- | --- | --- | --- | --- |
| execute_fix | blocked |  |  | fix artifact is too broad for autonomous execution; split into narrower jobs or explicitly set CLOWNFISH_ALLOW_BROAD_FIX_ARTIFACTS=1 |
| automerge_repair_outcome_comment | executed | #85899 |  |  |

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
| #85899 | fix_needed | planned | canonical | Repair the canonical contributor PR branch because it is the narrow opted-in fix path and only needs rebase/review validation before the applicator can consider final merge routing. |
| cluster:automerge-openclaw-openclaw-85899 | build_fix_artifact | planned |  | Automerge job allows fix and raise_pr, blocks merge/close, and requires a contributor-branch repair artifact when the useful canonical PR is stale or dirty. |
| #60048 | keep_related | planned | related | Same memory docs area, different deliverable and unresolved review findings; keep open outside this cluster. |
| #72748 | keep_closed | skipped | related | Closed historical context only. |
| #81802 | keep_closed | skipped | independent | Closed merged runtime fix, independent of this docs repair cluster. |
| #86701 | keep_closed | skipped | independent | Closed merged runtime fix, independent of this docs repair cluster. |
| #92745 | keep_closed | skipped | independent | Closed merged diagnostic fix, independent of this docs repair cluster. |

## Needs Human

- none
