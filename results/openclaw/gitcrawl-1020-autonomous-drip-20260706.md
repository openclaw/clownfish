---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-1020-autonomous-drip-20260706"
mode: "autonomous"
run_id: "28787203209"
workflow_run_id: "28787203209"
run_url: "https://github.com/openclaw/clownfish/actions/runs/28787203209"
head_sha: "dbd4be48464810075ab27c5b56a5e7e1fc4353c9"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-07-06T11:21:18.547Z"
canonical: "https://github.com/openclaw/openclaw/issues/87314"
canonical_issue: "https://github.com/openclaw/openclaw/issues/87314"
canonical_pr: null
actions_total: 8
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 1
apply_skipped: 0
needs_human_count: 2
---

# gitcrawl-1020-autonomous-drip-20260706

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/28787203209](https://github.com/openclaw/clownfish/actions/runs/28787203209)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/87314

## Summary

Classified the hydrated open candidates as an over-broad gateway stability cluster with separate surviving canonical lanes. #87314 remains the closest remaining memory-growth canonical after excluded #54155, #75852 and #89785 remain separate Telegram/channel reliability canonicals, #94476 has a narrow executable replacement-fix path using #94488 only as credited non-security prior art, blocked-lineage PRs #95511 and #95517 are kept related and excluded from executable repair lineage, and security-sensitive #94492 is routed only to central security handling.

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
| Needs human | 2 |

## Repair Candidate

```json
{
  "target": "#94488",
  "source_refs": [
    "#94488",
    "#94476",
    "#87314",
    "#1",
    "#28375",
    "#46347",
    "#48425",
    "#79892",
    "#84823",
    "#85788",
    "#86564",
    "#88514",
    "#89816",
    "#91997",
    "#92767",
    "#93378",
    "#93948",
    "#94016",
    "#94492",
    "#95511"
  ],
  "repair_strategy": "replace_uneditable_branch",
  "planned_actions": [
    "fix_needed",
    "build_fix_artifact"
  ],
  "summary": "Open a narrow replacement PR for #94476 so macOS PortGuardian preserves a valid launchd-managed Node gateway command line containing the OpenClaw dist entrypoint and `gateway` subcommand, with focused Swift regression coverage and contributor credit from safe prior non-security attempt #94488.",
  "pr_title": "fix(macos): preserve launchd Node gateway in PortGuardian",
  "pr_body": "## What Problem This Solves\n\nFixes #94476. On macOS, PortGuardian can terminate a valid launchd-managed local Gateway when `ps` reports the runtime command line, for example `node .../openclaw/dist/index.js gateway --port 18789`, instead of the expected process title.\n\n## Why This Change Was Made\n\nThe fix should add a conservative local-mode matcher for OpenClaw gateway entrypoint command lines and keep the older process-title checks intact. This replaces the closed, uneditable non-security attempt #94488 while carrying attribution forward: #94488 by @lsr911 is credited as the source PR for the earlier Homebrew Node/git checkout gateway allowlist approach.\n\n## User Impact\n\nA valid macOS launchd Gateway should no longer be killed mid-turn solely because it is shown as a Homebrew Node or git-checkout `dist/index.js gateway` process.\n\n## Evidence\n\nPlanned validation: `pnpm check:changed`, focused Swift matcher coverage for the Node dist Gateway command, and macOS launchd/PortGuardian behavior proof if available before merge. Security-sensitive #94492 is intentionally excluded from this replacement lineage and routed separately. Blocked-lineage PRs #95511 and #95517 are also intentionally excluded from this replacement lineage because deterministic validation reports blocked `merge-risk: 🚨 availability` labels for both refs.",
  "likely_files": [
    "apps/macos/Sources/OpenClaw/PortGuardian.swift",
    "apps/macos/Tests/OpenClawIPCTests/PortGuardianIsExpectedTests.swift",
    "CHANGELOG.md"
  ],
  "validation_commands": [
    "pnpm check:changed"
  ],
  "credit_notes": [
    "Credit @lsr911 for https://github.com/openclaw/openclaw/pull/94488 as an earlier Homebrew Node/git checkout gateway allowlist attempt.",
    "Do not use #94492 as a source PR in the replacement lineage because the hydrated preflight marks it security-sensitive and routes it separately.",
    "Do not use #95511 or #95517 as source PRs in the replacement lineage because deterministic validation reports blocked `merge-risk: 🚨 availability` labels for both refs."
  ],
  "source_job": "jobs/openclaw/inbox/gitcrawl-1020-autonomous-drip-20260706.md",
  "security_sensitive": false,
  "security_routed_refs": [
    "#94492"
  ],
  "needs_human": [
    "#87314: decide whether the remaining bug should be owned by the scheduled memory/CORE.md producer, generic read-tool directory behavior, or the broader gateway memory-leak investigation before a narrow fix PR is safe.",
    "#89785: decide the desired health-monitor restart-cascade fix shape after the prior global event-loop gate in #92767 was closed as too broad."
  ],
  "repair_status": "opened",
  "terminal": true
}
```

## Fix Execution Actions

| Action | Status | Target | Branch | Reason |
| --- | --- | --- | --- | --- |
| open_fix_pr | opened | https://github.com/openclaw/openclaw/pull/100867 | clownfish/gitcrawl-1020-autonomous-drip-20260706 |  |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #100867 | merge_canonical | blocked | fix_pr | merge_preflight base_sha does not match live pull request base |

## Apply Audit

| Attempt | Source | Target | Action | Status | Reason |
| --- | --- | --- | --- | --- |
|  | post_flight | #100867 | merge_canonical | blocked | merge_preflight base_sha does not match live pull request base |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #87314 | keep_canonical | planned | canonical | Keep open as the remaining memory-growth canonical; exact repair ownership still needs maintainer decision rather than a narrow automated fix. |
| #75852 | keep_canonical | planned | canonical | Keep open as a separate Telegram polling self-conflict canonical, not a duplicate of the memory-growth/file-read lane. |
| #89785 | keep_canonical | planned | canonical | Keep open as the canonical health-monitor restart-cascade lane; no mergeable candidate or narrow automated closure exists in this cluster. |
| #95511 | keep_related | skipped | related | Blocked repair-lineage ref; keep related for audit evidence only. |
| #95517 | keep_related | skipped | related | Blocked repair-lineage ref; keep related for audit evidence only. |
| #94476 | fix_needed | planned | canonical | A narrow replacement fix PR is appropriate because the bug has source-level proof and no open viable non-security PR remains. |
| cluster:gitcrawl-1020-autonomous-drip-20260706 | build_fix_artifact | planned |  | One narrow executable artifact covers the PortGuardian launchd Node gateway matcher gap without broadening the cluster. |
| #94492 | route_security | planned | security_sensitive | Security-sensitive exact ref must be quarantined without poisoning unrelated non-security classification. |

## Needs Human

- #87314: decide whether the remaining bug should be owned by the scheduled memory/CORE.md producer, generic read-tool directory behavior, or the broader gateway memory-leak investigation before a narrow fix PR is safe.
- #89785: decide the desired health-monitor restart-cascade fix shape after the prior global event-loop gate in #92767 was closed as too broad.
