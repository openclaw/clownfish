---
repo: "openclaw/openclaw"
cluster_id: "repair-90468-single-replan-wave-20260617"
mode: "autonomous"
run_id: "27705471753"
workflow_run_id: "27705471753"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27705471753"
head_sha: "11055a7e49bd4d7a4f5c6d331788c99e8595d963"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-17T16:55:15.258Z"
canonical: "#90468"
canonical_issue: null
canonical_pr: "#90468"
actions_total: 3
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# repair-90468-single-replan-wave-20260617

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27705471753](https://github.com/openclaw/clownfish/actions/runs/27705471753)

Workflow conclusion: success

Worker result: planned

Canonical: #90468

## Summary

PR #90468 remains the canonical repair candidate for the prompt-template apostrophe parser bug. The hydrated state shows a narrow two-file contributor PR, maintainer_can_modify=true, no security-sensitive signal, passing checks, and contributor follow-up addressing the concrete maintainer parser regressions. Merge, close, comment, label, and force-push are blocked by the job, so the safe autonomous path is to build an executable repair artifact for Clownfish to refresh/repair the contributor branch, preserve @yetval credit, validate the parser cases, and open/prepare the target fix path without merging.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 3 |
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
  "target": "#90468",
  "source_refs": [
    "#90468"
  ],
  "repair_strategy": "repair_contributor_branch",
  "planned_actions": [
    "fix_needed",
    "build_fix_artifact"
  ],
  "summary": "Repair and validate contributor PR #90468's prompt-template argument parser fix. Preserve prose apostrophes in contractions and possessives while retaining documented shell-style single and double quote grouping, including bare single-quote concatenation. Keep the patch scoped to the parser and regression tests, preserve @yetval authorship/credit, and do not merge or close anything in this run.",
  "pr_title": "fix(agents): preserve apostrophes in prompt-template arguments",
  "pr_body": "## Summary\n\nRepair the prompt-template slash-command argument parser so prose apostrophes remain literal without regressing documented shell-style quote behavior.\n\nThis carries forward @yetval's source PR #90468 and preserves attribution for the original apostrophe parsing fix.\n\n## Scope\n\n- keep contractions and prose apostrophes literal, including `don't`, `it's`, `users'`, `O'Brien's`, and `rock'n'roll`\n- preserve shell-style single/double quoted spans and bare single-quote concatenation such as `foo'bar baz' next`\n- prevent contractions or plural possessives from consuming later standalone quoted spans\n\n## Validation\n\n- `pnpm -s vitest run packages/agent-core/src/harness/prompt-templates.test.ts`\n- `pnpm check:changed`\n\nSource PR: https://github.com/openclaw/openclaw/pull/90468\nCredited author: @yetval",
  "likely_files": [
    "packages/agent-core/src/harness/prompt-template-arguments.ts",
    "packages/agent-core/src/harness/prompt-templates.test.ts"
  ],
  "validation_commands": [
    "pnpm -s vitest run packages/agent-core/src/harness/prompt-templates.test.ts",
    "pnpm check:changed"
  ],
  "credit_notes": [
    "Preserve contributor credit for @yetval as the source PR author.",
    "Reference source PR https://github.com/openclaw/openclaw/pull/90468 in any replacement or repair PR body.",
    "If user-facing release notes mention the parser fix, include attribution to @yetval/source PR #90468."
  ],
  "source_job": "jobs/openclaw/inbox/repair-90468-single-replan-wave-20260617.md",
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
| #90468 | keep_canonical | planned | canonical | Canonical PR is narrow, editable, credited, and relevant, but job blocks merge/comment/close and requires a repair/fix artifact path rather than direct mutation. |
| #90468 | fix_needed | planned | canonical | Executor should perform the narrow branch repair/revalidation loop and prepare the fix path while preserving contributor authorship. |
| repair-90468-single-replan-wave-20260617 | build_fix_artifact | planned |  | A cluster-scoped executable fix artifact is permitted and appropriate for the autonomous repair path. |

## Needs Human

- none
