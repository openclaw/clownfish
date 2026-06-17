---
repo: "openclaw/openclaw"
cluster_id: "repair-90468-single-replan-wave-20260617"
mode: "autonomous"
run_id: "27701188166"
workflow_run_id: "27701188166"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27701188166"
head_sha: "0e178d4cacf5506eccaae14801a325346a58a31a"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-17T15:51:34.925Z"
canonical: "https://github.com/openclaw/openclaw/pull/90468"
canonical_issue: null
canonical_pr: "https://github.com/openclaw/openclaw/pull/90468"
actions_total: 2
fix_executed: 0
fix_failed: 1
fix_blocked: 1
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# repair-90468-single-replan-wave-20260617

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27701188166](https://github.com/openclaw/clownfish/actions/runs/27701188166)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/90468

## Summary

PR #90468 remains the canonical repair path. The branch is useful, narrow, editable by maintainers, and scoped to the prompt-template argument parser, but it is not merge-ready because a maintainer requested parser-shape changes and the job does not allow merge/comment/close actions. Plan repair on the contributor branch and preserve @yetval credit.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 2 |
| Fix executed | 0 |
| Fix failed | 1 |
| Fix blocked | 1 |
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
  "summary": "Repair contributor PR #90468 in place so the prompt-template slash-command argument parser preserves prose apostrophes without regressing documented shell-style quote grouping and concatenation.",
  "pr_title": "fix(agents): preserve apostrophes in prompt-template arguments",
  "pr_body": "## Summary\n- Repairs #90468 in place, preserving @yetval's apostrophe parsing fix and contributor credit.\n- Keeps ordinary prose apostrophes and plural possessives literal while preserving shell-style single/double quote grouping and concatenation.\n- Adds/keeps focused regression coverage for contractions, plural possessives before quoted spans, embedded single-quote concatenation, and prompt-template substitution.\n\n## Verification\n- pnpm test packages/agent-core/src/harness/prompt-templates.test.ts\n- pnpm check:changed\n- Fresh Codex /review before merge recommendation\n\nSource PR: https://github.com/openclaw/openclaw/pull/90468",
  "likely_files": [
    "packages/agent-core/src/harness/prompt-template-arguments.ts",
    "packages/agent-core/src/harness/prompt-templates.test.ts"
  ],
  "validation_commands": [
    "pnpm test packages/agent-core/src/harness/prompt-templates.test.ts",
    "pnpm check:changed"
  ],
  "credit_notes": [
    "Repair the existing maintainer-editable contributor branch from @yetval rather than replacing it.",
    "Keep PR #90468 as the source PR and preserve @yetval attribution in the repaired PR body/squash release-note context.",
    "Mention that the repair carries forward @yetval's apostrophe parsing fix while addressing maintainer-requested parser regressions."
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
| repair_contributor_branch | failed |  |  | source PR #90468 head fetch failed after 2 attempt(s): git -c credential.interactive=false -c http.lowSpeedLimit=1 -c http.lowSpeedTime=30 fetch --no-tags https://github.com/yetval/openclaw.git refs/heads/fix/prompt-template-args-apostrophe:projectclownfish/repair-repair-90468-single-replan-wave-20260617-90468 timed out after 120000ms before fix execution deadline (strategies: base_pull_ref, fork_head_ref) |
| execute_fix | blocked |  |  | source PR #90468 head fetch failed after 2 attempt(s): git -c credential.interactive=false -c http.lowSpeedLimit=1 -c http.lowSpeedTime=30 fetch --no-tags https://github.com/yetval/openclaw.git refs/heads/fix/prompt-template-args-apostrophe:projectclownfish/repair-repair-90468-single-replan-wave-20260617-90468 timed out after 120000ms before fix execution deadline (strategies: base_pull_ref, fork_head_ref) |

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
| #90468 | fix_needed | planned | canonical | Useful contributor PR exists and is editable, but maintainer-requested parser regressions must be repaired and freshly validated before any merge path. |
| cluster:repair-90468-single-replan-wave-20260617 | build_fix_artifact | planned |  | Allowed actions include fix and raise_pr, allow_fix_pr=true, allow_merge=false. The correct next action is branch repair plus validation, not merge or closure. |

## Needs Human

- none
