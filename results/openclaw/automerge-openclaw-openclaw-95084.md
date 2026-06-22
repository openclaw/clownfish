---
repo: "openclaw/openclaw"
cluster_id: "automerge-openclaw-openclaw-95084"
mode: "autonomous"
run_id: "27926698234"
workflow_run_id: "27926698234"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27926698234"
head_sha: "48c97992ba2331b28c73d7fa7193c9ef8c995193"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-22T03:07:24.132Z"
canonical: "https://github.com/openclaw/openclaw/pull/95084"
canonical_issue: "https://github.com/openclaw/openclaw/issues/90684"
canonical_pr: "https://github.com/openclaw/openclaw/pull/95084"
actions_total: 7
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 1
apply_skipped: 0
needs_human_count: 0
---

# automerge-openclaw-openclaw-95084

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27926698234](https://github.com/openclaw/clownfish/actions/runs/27926698234)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/95084

## Summary

PR #95084 is the non-security canonical automerge repair target for the Google Chat sanitizer slice. It is safe to repair the existing contributor branch because maintainer_can_modify is true, but merge is blocked by job policy and the PR still needs a fresh repair/rebase/check loop after the automerge pause and unstable check state. Security-sensitive linked refs are quarantined individually without blocking the Google Chat repair lane, and blocked-label sibling PRs are kept out of the executable repair target set.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 7 |
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
  "target": "#95084",
  "source_refs": [
    "#95084",
    "#90684",
    "#84441",
    "#89125",
    "#87610",
    "#88332"
  ],
  "repair_strategy": "repair_contributor_branch",
  "planned_actions": [
    "fix_needed",
    "build_fix_artifact"
  ],
  "summary": "Repair the existing #95084 contributor branch in place: keep the Google Chat outbound sanitizer change narrow, rebase/refresh if needed, address the automerge pause, rerun focused Google Chat proof and changed gate, then request fresh ClawSweeper review for the exact repaired head.",
  "pr_title": "fix(googlechat): sanitize internal tool-trace lines from outbound text (#90684)",
  "pr_body": "## What Problem This Solves\nGoogle Chat outbound text on current main only applies plain text sanitization, so assistant-visible internal tool-trace lines can still reach users. This keeps the focused #95084 Google Chat fix moving without taking over the broader security-routed cross-channel umbrella in #90684.\n\n## Why This Change Was Made\nRepair the existing contributor branch for #95084 instead of opening a replacement because the branch is narrow and maintainers can modify it. The expected code shape is to compose `sanitizeAssistantVisibleText()` before `sanitizeForPlainText()` in `extensions/googlechat/src/channel.adapters.ts`, with focused regression coverage in `extensions/googlechat/src/channel.test.ts`.\n\n## User Impact\nGoogle Chat users should no longer see internal `failed` tool-trace banners for benign non-zero shell exits when the assistant's final visible content is otherwise normal. Ordinary prose should remain unchanged. This does not close #90684 or change the Codex-native warning taxonomy in #88332.\n\n## Evidence\n- Source PR: https://github.com/openclaw/openclaw/pull/95084 by @jailbirt.\n- Current main `a1828110704fade5281dde8b0d2e305d5b23dd54` still shows Google Chat using only `sanitizeForPlainText(text)` in `extensions/googlechat/src/channel.adapters.ts`.\n- ClawSweeper review on the hydrated PR passed for head `9449e1557490b3229c939c1f9f16598cbeaac281`, but the automerge loop later paused and the PR has unstable check state, so the executor should refresh and rerun proof.\n- Validation: `node scripts/run-vitest.mjs extensions/googlechat/src/channel.test.ts`; `pnpm check:changed`.",
  "likely_files": [
    "extensions/googlechat/src/channel.adapters.ts",
    "extensions/googlechat/src/channel.test.ts"
  ],
  "validation_commands": [
    "node scripts/run-vitest.mjs extensions/googlechat/src/channel.test.ts",
    "pnpm check:changed"
  ],
  "credit_notes": [
    "Repair source PR https://github.com/openclaw/openclaw/pull/95084 in place so @jailbirt keeps contributor credit.",
    "PR body and final squash/merge message should preserve that this is the Google Chat slice of #90684 and does not close the broader cross-channel/security-routed umbrella.",
    "Security-sensitive linked refs #84441, #88332, and #90684 stay routed to central OpenClaw security handling; the repair must not expand into those scopes.",
    "Closed historical PR #89125 remains attribution-preserved context only and is not part of the executable Google Chat repair target."
  ],
  "source_job": "jobs/openclaw/inbox/automerge-openclaw-openclaw-95084.md",
  "security_sensitive": false,
  "security_routed_refs": [
    "#84441",
    "#88332",
    "#90684"
  ],
  "needs_human": [],
  "repair_status": "pushed",
  "terminal": true
}
```

## Fix Execution Actions

| Action | Status | Target | Branch | Reason |
| --- | --- | --- | --- | --- |
| repair_contributor_branch | pushed | https://github.com/openclaw/openclaw/pull/95084 |  |  |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #95084 | merge_canonical | blocked | fix_pr | job does not allow merge |

## Apply Audit

| Attempt | Source | Target | Action | Status | Reason |
| --- | --- | --- | --- | --- |
|  | post_flight | #95084 | merge_canonical | blocked | job does not allow merge |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #84441 | route_security | planned | security_sensitive | Exact hydrated item is security-sensitive; route to central OpenClaw security handling. |
| #87610 | keep_closed | skipped | related | Closed context ref; no mutation is valid or needed. |
| #88332 | route_security | planned | security_sensitive | Exact hydrated item is security-sensitive; route to central OpenClaw security handling. |
| #89125 | keep_closed | skipped | related | Closed historical fix; no mutation is valid or needed. |
| #90684 | route_security | planned | security_sensitive | Exact hydrated item is security-sensitive; route to central OpenClaw security handling. |
| #95084 | fix_needed | planned | canonical | Repair the existing contributor branch, rerun the focused Google Chat test plus changed gate, and re-enter ClawSweeper review. Merge remains disallowed by the job. |
| cluster:automerge-openclaw-openclaw-95084 | build_fix_artifact | planned |  | Create a repair plan for the automerge executor rather than merging or closing directly. |

## Needs Human

- none
