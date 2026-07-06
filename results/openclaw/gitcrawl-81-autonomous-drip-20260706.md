---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-81-autonomous-drip-20260706"
mode: "autonomous"
run_id: "28785157469"
workflow_run_id: "28785157469"
run_url: "https://github.com/openclaw/clownfish/actions/runs/28785157469"
head_sha: "ded48f35f86504bb375987a529344c4f75145558"
workflow_conclusion: "cancelled"
result_status: "planned"
published_at: "2026-07-06T10:47:31.556Z"
canonical: "https://github.com/openclaw/openclaw/issues/89423"
canonical_issue: "https://github.com/openclaw/openclaw/issues/89423"
canonical_pr: null
actions_total: 2
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-81-autonomous-drip-20260706

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/28785157469](https://github.com/openclaw/clownfish/actions/runs/28785157469)

Workflow conclusion: cancelled

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/89423

## Summary

Autonomous classification used the hydrated preflight artifact at main 17777b3a9ff18e0262e55815d46c168933c82b8e. The only actionable non-overlap candidate, #89423, is a real open macOS app node.invoke/system.run report with no merge-ready canonical PR in this cluster; it overlaps the broader macOS app node stability family but is not safe to close because #83980 is broad/failing and #89702/#92149/#74848 are security-routed context. Plan a narrow new fix artifact for the macOS app node invoke/system.run disconnect path while preserving nearby context as evidence.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 2 |
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
  "target": "#89423",
  "source_refs": [
    "#89423",
    "#58378",
    "#70224",
    "#75038",
    "#75228",
    "#79438",
    "#81609",
    "#83490",
    "#83976",
    "#83980",
    "#88374",
    "#89702",
    "#92149",
    "#40527",
    "#50642",
    "#61569",
    "#74484",
    "#74848",
    "#80853",
    "#83958"
  ],
  "repair_strategy": "new_fix_pr",
  "planned_actions": [
    "fix_needed",
    "build_fix_artifact"
  ],
  "summary": "Fix the macOS app node.invoke/system.run disconnect path so gateway invokes against the macOS app node return a structured unsupported/handled response instead of tearing down the WebSocket and marking the node offline. Keep the change scoped to the macOS app node runtime/invoke handling and the gateway-side tests that prove the node stays connected after an unsupported system.run request.",
  "pr_title": "fix(macos): keep app node connected after system.run invoke",
  "pr_body": "## What Problem This Solves\n\nFixes #89423. The macOS app node can disconnect its WebSocket when the gateway invokes `system.run` through `node.invoke`, leaving the gateway to mark the app node offline instead of receiving a handled result.\n\n## Why This Change Was Made\n\nThe fix should keep this scoped to the macOS app node invoke path: unsupported or app-unavailable `system.run` requests should produce a structured handled response/error and must not close the gateway WebSocket. Broader macOS stale TLS pin, platform metadata refresh, custom node-id signing, and remote bin-probe caching work are intentionally out of scope for this PR.\n\n## User Impact\n\nUsers running the macOS app as a node should no longer see a single `system.run` invoke disconnect the app node. Follow-up macOS node stability reports can stay separate if they involve TLS pin repair, platform refresh pairing, custom node ids, or general flapping unrelated to this invoke path.\n\n## Evidence\n\nPlanned validation:\n- `pnpm check:changed`\n- `pnpm test src/gateway/server-methods/nodes.invoke-wake.test.ts`\n\nClownfish attribution: this fix carries forward the reproduction from #89423 by @Lvan185.",
  "likely_files": [
    "apps/macos/Sources/OpenClaw/NodeMode/MacNodeModeCoordinator.swift",
    "apps/shared/OpenClawKit/Sources/OpenClawKit/GatewayNodeSession.swift",
    "apps/macos/Tests/OpenClawIPCTests/MacNodeModeCoordinatorTests.swift",
    "src/gateway/server-methods/nodes.invoke-wake.test.ts"
  ],
  "validation_commands": [
    "pnpm check:changed",
    "pnpm test src/gateway/server-methods/nodes.invoke-wake.test.ts"
  ],
  "credit_notes": [
    "Credit #89423 and @Lvan185 for the macOS app node.invoke/system.run reproduction.",
    "Mention related context from #83958/#83980 only as background; do not mark them fixed unless the executor proves the broader flapping/invoke timeout path is covered.",
    "Do not include security-routed refs #74848, #89702, or #92149 in the fix lineage."
  ],
  "source_job": "jobs/openclaw/inbox/gitcrawl-81-autonomous-drip-20260706.md",
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
| #89423 | fix_needed | planned | canonical | #89423 remains a live, narrow non-security bug report with no safe canonical merge candidate in the cluster; require a new narrow fix path before any closure. |
| cluster:gitcrawl-81-autonomous-drip-20260706 | build_fix_artifact | planned |  | Build a focused replacement fix PR for #89423 rather than trying to land broad or security-routed context PRs. |

## Needs Human

- none
