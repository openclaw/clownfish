---
repo: "openclaw/openclaw"
cluster_id: "repair-93869-qr-ci"
mode: "autonomous"
run_id: "27760140419"
workflow_run_id: "27760140419"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27760140419"
head_sha: "38f03e2bdf8f3be1982b9691fe6e20106b021d36"
workflow_conclusion: "failure"
result_status: "planned"
published_at: "2026-06-18T12:53:06.715Z"
canonical: "https://github.com/openclaw/openclaw/pull/93869"
canonical_issue: null
canonical_pr: "https://github.com/openclaw/openclaw/pull/93869"
actions_total: 2
fix_executed: 0
fix_failed: 1
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# repair-93869-qr-ci

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27760140419](https://github.com/openclaw/clownfish/actions/runs/27760140419)

Workflow conclusion: failure

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/93869

## Summary

Prepared a narrow repair for canonical PR #93869 on the existing `clownfish/repair-51868-qr-rendering` branch. The local patch changes block-art copy payloads to use an explicit encoded marker while ordinary code blocks remain raw, preserving QR quiet-zone spaces without making raw encoded-looking text ambiguous. No GitHub comments, labels, closes, merges, pushes, or new PRs were performed. The exact #93869 item is not routed as security because the hydrated preflight item explicitly marks it `security_sensitive: false`; the executable repair is kept at the cluster fix-artifact level.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 2 |
| Fix executed | 0 |
| Fix failed | 1 |
| Fix blocked | 0 |
| Applied executions | 0 |
| Apply blocked | 0 |
| Apply skipped | 0 |
| Needs human | 0 |

## Repair Candidate

```json
{
  "target": "#93869",
  "source_refs": [
    "#93869",
    "#51868"
  ],
  "repair_strategy": "repair_contributor_branch",
  "planned_actions": [
    "build_fix_artifact"
  ],
  "summary": "Repair PR #93869 so QR/block-art copy payloads preserve leading quiet-zone spaces through DOM parsing without changing ordinary code-block copy payload semantics. Encoded payloads are now explicitly marked with `data-code-format=\"json\"`, and the chat copy handler decodes only marked payloads.",
  "pr_title": "UI: render half-block QR output in web chat",
  "pr_body": "## Summary\n- Repair QR/block-art code-block copy payloads so leading quiet-zone spaces survive DOM parsing and clipboard copy.\n- Encode only block-art `data-code` payloads and mark them with `data-code-format=\"json\"`; ordinary code-block payloads remain raw.\n- Decode only marked block-art payloads in the chat copy handler, while preserving support for existing raw payloads.\n\n## Credit\nThis continues to carry forward the fix idea and reproduction from @emg110 in https://github.com/openclaw/openclaw/pull/51868. Thanks @emg110 for the original report, implementation direction, and proof.\n\n## Verification\n- `node scripts/run-vitest.mjs ui/src/ui/markdown.test.ts ui/src/ui/views/chat.test.ts ui/src/ui/chat/grouped-render.test.ts`\n- `git diff --check`\n- `.agents/skills/autoreview/scripts/autoreview --mode local`\n\n## Remaining gate\n- `corepack pnpm check:changed` currently blocks before completing because this PR branch is stale against current `main` and typecheck stops in unrelated `src/mcp/channel-shared.ts`. Rebase/refresh the branch onto current `main`, then rerun `corepack pnpm check:changed`.",
  "likely_files": [
    "ui/src/ui/markdown.ts",
    "ui/src/ui/views/chat.ts",
    "ui/src/ui/markdown.test.ts",
    "ui/src/ui/views/chat.test.ts"
  ],
  "validation_commands": [
    "node scripts/run-vitest.mjs ui/src/ui/markdown.test.ts ui/src/ui/views/chat.test.ts ui/src/ui/chat/grouped-render.test.ts",
    "git diff --check",
    "corepack pnpm check:changed"
  ],
  "credit_notes": [
    "Preserve #93869 as the credited replacement PR and keep @emg110 credited for the original report, implementation direction, and proof from https://github.com/openclaw/openclaw/pull/51868.",
    "Do not alter #51868 in this repair job."
  ],
  "source_job": "jobs/openclaw/inbox/repair-93869-qr-ci.md",
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
| execute_fix | failed |  |  | unsupported validation command: corepack pnpm check:changed |

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
| cluster:repair-93869-qr-ci | build_fix_artifact | planned | canonical | The executor should apply/push this repair to the existing credited PR branch, rebase it onto current main, then rerun the hard changed gate. |
| #51868 | keep_related | planned | superseded | Keep #51868 open as related/superseded source-credit context while #93869 remains the canonical repair branch. |

## Needs Human

- none
