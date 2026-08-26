---
repo: "openclaw/openclaw"
cluster_id: "automerge-openclaw-openclaw-129782"
mode: "autonomous"
run_id: "32925012012"
workflow_run_id: "32925012012"
run_url: "https://github.com/openclaw/clownfish/actions/runs/32925012012"
head_sha: "a160082f2c64a4cb3c31cb8615b229f85cc9e6e1"
workflow_conclusion: "cancelled"
result_status: "planned"
published_at: "2026-08-26T03:09:25.629Z"
canonical: "https://github.com/openclaw/openclaw/pull/129782"
canonical_issue: null
canonical_pr: "https://github.com/openclaw/openclaw/pull/129782"
actions_total: 4
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# automerge-openclaw-openclaw-129782

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/32925012012](https://github.com/openclaw/clownfish/actions/runs/32925012012)

Workflow conclusion: cancelled

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/129782

## Summary

#129782 is the canonical repair path, but the hydrated ClawSweeper review has an actionable P2 correction and the source branch is not safely editable by Clownfish. Plan a narrow credited replacement PR that preserves #129782's package-size root-cause fix, omits the CHANGELOG.md entry, and reruns changed-file validation before re-review. #129758 remains related blocked-label context only; #129761 is already closed historical context.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 4 |
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
  "target": "#129782",
  "source_refs": [
    "#129782",
    "#129758",
    "#129761"
  ],
  "repair_strategy": "replace_uneditable_branch",
  "planned_actions": [
    "fix_needed",
    "build_fix_artifact"
  ],
  "summary": "Create a narrow credited replacement for #129782: preserve the diffs and diffs-language-pack external package build fix, keep standalone and Docker-selected static asset coverage, and remove/omit the CHANGELOG.md entry flagged by ClawSweeper.",
  "pr_title": "fix(package): externalize diffs package build outputs",
  "pr_body": "## What Problem This Solves\n\nReplaces #129782 with the same narrow package-size repair on a Clownfish-controlled branch because Clownfish cannot safely update that source branch directly.\n\nThis keeps the diffs plugins' syntax-highlighting chunks out of the core package graph so release packaging stays under the existing unpacked-size limit without raising the package budget.\n\n## What Changed\n\n- Mark `@openclaw/diffs` and `@openclaw/diffs-language-pack` as external package builds.\n- Keep standalone and explicitly Docker-selected plugin builds carrying `assets/viewer-runtime.js`.\n- Preserve the existing package budget rather than accepting a larger audited ceiling.\n- Omit the `CHANGELOG.md` entry that ClawSweeper flagged for this maintainer PR path.\n\n## Credit\n\nThis carries forward the source PR implementation from #129782 by @vincentkoc and keeps the original attribution chain intact while excluding blocked-label refs from executable repair lineage.\n\n## Validation\n\n- `pnpm check:changed`\n- Re-check package-size evidence from the release package validation path before asking ClawSweeper for a fresh exact-head review.",
  "likely_files": [
    "extensions/diffs/package.json",
    "extensions/diffs-language-pack/package.json",
    "scripts/lib/bundled-plugin-build-entries-types.d.ts",
    "scripts/lib/bundled-plugin-build-entries.mjs",
    "scripts/lib/static-extension-assets.mts",
    "test/scripts/build-external-plugin-local-dist.test.ts",
    "test/scripts/bundled-plugin-build-entries.test.ts",
    "test/scripts/runtime-postbuild.test.ts",
    "CHANGELOG.md"
  ],
  "validation_commands": [
    "pnpm check:changed"
  ],
  "credit_notes": [
    "Preserve source credit for https://github.com/openclaw/openclaw/pull/129782 by @vincentkoc.",
    "Keep attribution from the source PR intact while excluding blocked-label #129758 from executable lineage.",
    "Do not carry the CHANGELOG.md entry into the replacement; ClawSweeper flagged it as the P2 correction."
  ],
  "source_job": "jobs/openclaw/inbox/automerge-openclaw-openclaw-129782.md",
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
| #129782 | fix_needed | planned | canonical | Canonical PR needs a bounded repair, but its hydrated branch permissions set maintainer_can_modify=false, so Clownfish should create a narrow credited replacement instead of trying to push to #129782. |
| #129758 | keep_related | planned | related | Related source/reporting context with a blocked merge-risk label, but not the canonical executable repair lane for the Clownfish automerge fix loop. |
| #129761 | keep_closed | skipped | superseded | Already closed context only; no closure or mutation is valid for this item. |
| cluster:automerge-openclaw-openclaw-129782 | build_fix_artifact | planned |  | Build a replacement fix PR artifact because the canonical source PR is useful but not editable by Clownfish. |

## Needs Human

- none
