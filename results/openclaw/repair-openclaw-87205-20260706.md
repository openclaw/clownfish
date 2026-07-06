---
repo: "openclaw/openclaw"
cluster_id: "repair-openclaw-87205-20260706"
mode: "autonomous"
run_id: "28825495829"
workflow_run_id: "28825495829"
run_url: "https://github.com/openclaw/clownfish/actions/runs/28825495829"
head_sha: "3a6e00cfceaa5ca43e18222b907930e2b0fce687"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-07-06T22:40:46.585Z"
canonical: "https://github.com/openclaw/openclaw/pull/87205"
canonical_issue: null
canonical_pr: "https://github.com/openclaw/openclaw/pull/87205"
actions_total: 5
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 1
apply_skipped: 0
needs_human_count: 0
---

# repair-openclaw-87205-20260706

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/28825495829](https://github.com/openclaw/clownfish/actions/runs/28825495829)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/87205

## Summary

Plan repair of editable contributor PR #87205 on branch fix/doctor-repair-stale-gateway-service. Current main at e80e8a2b67307c4e83e7192f234c31522b3464b2 still lacks a typed protocol-mismatch path from checkGatewayHealth into the daemon repair flow, while #87205 is open, editable, dirty against main, and contains an obsolete stale-service-definition repair commit that should be dropped.

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
  "target": "#87205",
  "source_refs": [
    "#87205",
    "#82908",
    "#88311",
    "#87156"
  ],
  "repair_strategy": "repair_contributor_branch",
  "planned_actions": [
    "fix_needed",
    "build_fix_artifact"
  ],
  "summary": "Repair PR #87205 in place by rebasing its editable contributor branch onto current main, dropping the stale service-definition repair commit, and keeping a narrow protocol-mismatch daemon-repair guard. The implementation should preserve checkGatewayHealth authenticated semantics, expose a typed protocolMismatch signal only for GatewayTransportError(kind=closed, reason=\"protocol mismatch\"), carry that through DoctorHealthFlowContext, and make maybeRepairGatewayDaemon run diagnostics before skipping service bootstrap/install/start/restart mutations for that mismatch state.",
  "pr_title": "fix: avoid gateway daemon repair on protocol mismatch",
  "pr_body": "## What Problem This Solves\n\nRepairs the existing #87205 branch so `openclaw doctor` does not treat a running but protocol-incompatible Gateway as dead and then mutate the daemon/service state.\n\n## Why This Change Was Made\n\nCurrent main still turns a Gateway close with reason `protocol mismatch` into `healthOk=false`, and the daemon repair flow only sees `healthOk`/`healthSkipped`. The repaired branch should add a typed `protocolMismatch` signal for `GatewayTransportError` with `kind: \"closed\"` and reason `protocol mismatch`, propagate it through `DoctorHealthFlowContext`, run diagnostics first, then skip launchd bootstrap/install/start/restart mutations for that mismatch state.\n\nThe stale service-definition repair commit from the original PR should be dropped; broader Windows fallback migration remains separate in #87156/#88311.\n\n## User Impact\n\nUsers with an older/newer running Gateway get protocol-mismatch diagnostics without doctor attempting daemon repair, reinstall, start, or restart actions against a live incompatible Gateway.\n\n## Evidence\n\n- Focused tests: `pnpm test src/commands/doctor-gateway-health.test.ts src/flows/doctor-health-contributions.test.ts src/commands/doctor-gateway-daemon-flow.test.ts -- --run`\n- Gate: `pnpm check:changed`\n- Manual proof plan: N-1 Gateway protocol mismatch shows diagnostics and no daemon mutation; unreachable-gateway negative control still follows the normal repair/diagnostic path.\n\nCredit: repaired in place from @rifachnia's source PR https://github.com/openclaw/openclaw/pull/87205.",
  "likely_files": [
    "src/commands/doctor-gateway-health.ts",
    "src/flows/doctor-health-contributions.ts",
    "src/commands/doctor-gateway-daemon-flow.ts",
    "src/commands/doctor-gateway-health.test.ts",
    "src/flows/doctor-health-contributions.test.ts",
    "src/commands/doctor-gateway-daemon-flow.test.ts"
  ],
  "validation_commands": [
    "pnpm test src/commands/doctor-gateway-health.test.ts src/flows/doctor-health-contributions.test.ts src/commands/doctor-gateway-daemon-flow.test.ts -- --run",
    "pnpm check:changed"
  ],
  "credit_notes": [
    "Preserve contributor authorship for @rifachnia on PR #87205 and keep the repaired work on the existing editable contributor branch.",
    "PR body should state that Clownfish repaired the original contributor branch in place and removed the obsolete stale-service-definition portion while retaining the credited protocol-mismatch fix idea from https://github.com/openclaw/openclaw/pull/87205.",
    "Do not claim #87156 is fully fixed by this narrow repair; keep it scoped to the protocol-mismatch daemon-repair subcase."
  ],
  "source_job": "jobs/openclaw/inbox/repair-openclaw-87205-20260706.md",
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
| repair_contributor_branch | pushed | https://github.com/openclaw/openclaw/pull/87205 |  |  |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #87205 | merge_canonical | blocked | fix_pr | job does not allow merge |

## Apply Audit

| Attempt | Source | Target | Action | Status | Reason |
| --- | --- | --- | --- | --- |
|  | post_flight | #87205 | merge_canonical | blocked | job does not allow merge |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #87205 | fix_needed | planned | canonical | Repair the existing editable contributor branch rather than opening a replacement; the job explicitly asks to drop the obsolete service-definition commit and keep only the still-missing protocol-mismatch guard. |
| cluster:repair-openclaw-87205-20260706 | build_fix_artifact | planned |  | Fix PRs are allowed, merge/close/comment/label are blocked, and the artifact covers one narrow executable repair. |
| #87156 | keep_related | planned | related | Related but not fully covered by the narrow #87205 repair. |
| #88311 | keep_related | planned | related | Related broader Windows migration work, outside the narrow protocol-mismatch daemon-repair guard. |
| #82908 | keep_closed | skipped | related | Already closed refs must not receive close actions. |

## Needs Human

- none
