---
repo: "openclaw/openclaw"
cluster_id: "automerge-openclaw-openclaw-94452"
mode: "autonomous"
run_id: "27875624306"
workflow_run_id: "27875624306"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27875624306"
head_sha: "32e970431dee24accb5db04523031c9cff04f7b3"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-20T15:43:42.196Z"
canonical: "https://github.com/openclaw/openclaw/pull/94452"
canonical_issue: "https://github.com/openclaw/openclaw/issues/94040"
canonical_pr: "https://github.com/openclaw/openclaw/pull/94452"
actions_total: 8
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 1
apply_skipped: 0
needs_human_count: 0
---

# automerge-openclaw-openclaw-94452

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27875624306](https://github.com/openclaw/clownfish/actions/runs/27875624306)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/94452

## Summary

Canonical path is the open, maintainer-editable PR #94452 for issue #94040. It is not merge-actionable in this worker because merge is blocked by job policy and the latest ClawSweeper/Codex comment still says maintainer review is needed before merge, so the executable next step is a bounded repair/review pass on the contributor branch. Security-sensitive linked PRs #94055 and #94532 are routed item-by-item without blocking the non-security repair lane.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 8 |
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
  "target": "#94452",
  "source_refs": [
    "#94452",
    "#94040",
    "#94115",
    "#95001",
    "#94055",
    "#94337",
    "#94532"
  ],
  "repair_strategy": "repair_contributor_branch",
  "planned_actions": [
    "fix_needed",
    "build_fix_artifact"
  ],
  "summary": "Repair the existing maintainer-editable contributor PR #94452 for the nodes approve unknown-requestId UX fix, then rerun ClawSweeper/Codex review and changed checks. Do not replace the branch unless fresh execution proves it cannot be repaired safely.",
  "pr_title": "fix(nodes): explain stale approval request ids",
  "pr_body": "## What Problem This Solves\n`openclaw nodes approve <requestId>` can surface a raw `GatewayClientRequestError: unknown requestId` when an operator uses a stale or no-longer-pending node pairing request id. That leaves the operator without a clear recovery path during companion/node onboarding.\n\n## Why This Change Was Made\nThis continues the focused fix path from #94452. The CLI should translate the specific `node.pair.approve` `INVALID_REQUEST` / `unknown requestId` failure into an actionable message, show current pending node request ids when available, and point operators to `openclaw nodes pending` rather than changing gateway pairing semantics.\n\n## User Impact\nOperators get a clear stale-request explanation and a next command instead of a raw gateway exception. The gateway approval/token boundary remains unchanged.\n\n## Evidence\nSource proof on current main: `src/gateway/server-methods/nodes.ts` returns `INVALID_REQUEST` / `unknown requestId` for missing node pairing requests, and `src/cli/nodes-cli/register.pairing.ts` currently allows the nodes CLI wrapper to render that raw error. Validate with `node scripts/run-vitest.mjs src/cli/nodes-cli.coverage.test.ts src/cli/program.nodes-basic.e2e.test.ts` and `pnpm check:changed`, then request a fresh ClawSweeper/Codex review on the exact repaired head.\n\nCredit: continues contributor PR #94452 by @mushuiyu886 and fixes report #94040 from @xrow.",
  "likely_files": [
    "src/cli/nodes-cli/register.pairing.ts",
    "src/cli/nodes-cli.coverage.test.ts"
  ],
  "validation_commands": [
    "node scripts/run-vitest.mjs src/cli/nodes-cli.coverage.test.ts src/cli/program.nodes-basic.e2e.test.ts",
    "pnpm check:changed"
  ],
  "credit_notes": [
    "Preserve #94452 as @mushuiyu886's contributor PR; repair the branch directly because maintainer_can_modify=true.",
    "Credit issue reporter @xrow for #94040 in PR/merge release-note context.",
    "Mention related superseded attempts #94115 by @Monkey-wusky and #95001 by @lsr911 only as historical related work if needed; do not reopen or close them."
  ],
  "source_job": "jobs/openclaw/inbox/automerge-openclaw-openclaw-94452.md",
  "security_sensitive": false,
  "security_routed_refs": [
    "#94532",
    "#94055"
  ],
  "needs_human": [],
  "repair_status": "pushed",
  "terminal": true
}
```

## Fix Execution Actions

| Action | Status | Target | Branch | Reason |
| --- | --- | --- | --- | --- |
| repair_contributor_branch | pushed | https://github.com/openclaw/openclaw/pull/94452 |  |  |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #94452 | merge_canonical | blocked | fix_pr | job does not allow merge |

## Apply Audit

| Attempt | Source | Target | Action | Status | Reason |
| --- | --- | --- | --- | --- |
|  | post_flight | #94452 | merge_canonical | blocked | job does not allow merge |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #94040 | keep_canonical | planned | canonical | Keep the canonical issue open while #94452 is repaired and reviewed. |
| #94452 | fix_needed | planned | canonical | Repair/review the existing contributor branch rather than replacing it; the branch is safe to update and the diff is narrow. |
| cluster:automerge-openclaw-openclaw-94452 | build_fix_artifact | planned |  | Job allows fix/raise_pr, branch is maintainer-editable, and merge is blocked for this worker. |
| #94532 | route_security | planned | security_sensitive | Security-sensitive item must be quarantined to central OpenClaw security handling. |
| #94055 | route_security | planned | security_sensitive | Security-sensitive hydrated item is quarantined even though it is historical/closed context. |
| #94115 | keep_closed | skipped | superseded | Historical closed superseded PR; no action needed. |
| #95001 | keep_closed | skipped | superseded | Historical closed superseded PR; no action needed. |
| #94337 | keep_closed | skipped | independent | Closed independent context ref; no action needed. |

## Needs Human

- none
