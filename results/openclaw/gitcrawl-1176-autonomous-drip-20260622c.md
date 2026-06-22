---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-1176-autonomous-drip-20260622c"
mode: "autonomous"
run_id: "27983586740"
workflow_run_id: "27983586740"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27983586740"
head_sha: "8f5a178996ca1745872c585f718ed05b69e9d7ac"
workflow_conclusion: "cancelled"
result_status: "planned"
published_at: "2026-06-22T21:14:06.224Z"
canonical: "https://github.com/openclaw/openclaw/issues/93568"
canonical_issue: "https://github.com/openclaw/openclaw/issues/93568"
canonical_pr: null
actions_total: 7
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-1176-autonomous-drip-20260622c

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27983586740](https://github.com/openclaw/clownfish/actions/runs/27983586740)

Workflow conclusion: cancelled

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/93568

## Summary

Current main at 3d787b51812cf2883524fa8413acf09d647564ec still has the Weixin restrictive plugins.allow bootstrap bug: enableExplicitlySelectedPluginInConfig only auto-appends clickclack, while channel setup and onboarding both route selected plugins through that helper. #93568 remains the non-security canonical issue. The open overlapping PR is explicitly security-sensitive in the preflight artifact, so that exact PR is routed to central security handling instead of being merged or repaired here. A narrow replacement fix artifact is planned from the non-security issue and closed non-security source PR #93593, preserving contributor/reporting credit.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 7 |
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
  "target": "#93593",
  "source_refs": [
    "#93593",
    "#93568",
    "#92084",
    "#93582",
    "#93603",
    "#93684"
  ],
  "repair_strategy": "replace_uneditable_branch",
  "planned_actions": [
    "fix_needed",
    "build_fix_artifact"
  ],
  "summary": "Generalize explicit selected-plugin enablement so a user-selected plugin can be appended to an existing restrictive plugins.allow before retrying enablement, while preserving global plugin disablement and plugins.deny behavior. This fixes the Weixin/channel setup bootstrap failure tracked by #93568 without mutating or relying on the security-routed overlapping PR.",
  "pr_title": "fix(plugins): allowlist explicitly selected setup plugins",
  "pr_body": "## What Problem This Solves\n\nFixes #93568. When a user explicitly selects Weixin / WeChat through channel setup with a restrictive `plugins.allow`, OpenClaw installs or resolves the selected plugin but then fails enablement because only the older ClickClack path can append itself to the allowlist.\n\n## Why This Change Was Made\n\nCurrent main at `3d787b51812cf2883524fa8413acf09d647564ec` still special-cases `clickclack` in `enableExplicitlySelectedPluginInConfig`. Channel setup and onboarding both call that helper for explicit user selections, so the trust gesture is already known at the owner boundary. The narrow fix should generalize that helper for explicitly selected plugins while keeping `plugins.enabled=false` and `plugins.deny` authoritative.\n\nThis carries forward the non-security implementation direction from source PR https://github.com/openclaw/openclaw/pull/93593 by @ZOOWH and credits the #93568 report from @Kambrian plus the confirming setup-flow note from @neo-fusheng. The open overlapping PR is routed to central security handling by Clownfish and is not used or mutated by this replacement fix.\n\n## User Impact\n\nUsers with restrictive `plugins.allow` can complete guided setup for explicitly selected channel plugins such as Weixin without manually editing config after the install/selection step. Denylisted plugins and globally disabled plugins remain blocked.\n\n## Evidence\n\n- Source inspection: `src/plugins/enable.ts` currently auto-appends only `clickclack` after `blocked by allowlist`.\n- Caller inspection: `src/flows/channel-setup.ts` and `src/commands/onboarding-plugin-install.ts` both route explicit selections through that helper.\n- Planned validation: `node scripts/run-vitest.mjs run src/plugins/enable.test.ts src/flows/channel-setup.test.ts src/commands/onboarding-plugin-install.test.ts` and `pnpm check:changed`.",
  "likely_files": [
    "src/plugins/enable.ts",
    "src/plugins/enable.test.ts",
    "src/flows/channel-setup.test.ts",
    "src/commands/onboarding-plugin-install.test.ts"
  ],
  "validation_commands": [
    "node scripts/run-vitest.mjs run src/plugins/enable.test.ts src/flows/channel-setup.test.ts src/commands/onboarding-plugin-install.test.ts",
    "pnpm check:changed"
  ],
  "credit_notes": [
    "Fixes #93568 reported by @Kambrian; note @neo-fusheng's confirming setup-flow comment in the PR body.",
    "Credit @ZOOWH and source PR https://github.com/openclaw/openclaw/pull/93593 for the earlier non-security implementation direction and regression coverage.",
    "Do not close, supersede, repair, or merge the security-routed overlapping PR in this lane; central security handling owns that exact ref and any separate contributor attribution there."
  ],
  "source_job": "jobs/openclaw/inbox/gitcrawl-1176-autonomous-drip-20260622c.md",
  "security_sensitive": false,
  "security_routed_refs": [
    "#93603",
    "#93582",
    "#93684",
    "#92084"
  ],
  "needs_human": [],
  "repair_status": "opened",
  "terminal": true
}
```

## Fix Execution Actions

| Action | Status | Target | Branch | Reason |
| --- | --- | --- | --- | --- |
| open_fix_pr | opened | https://github.com/openclaw/openclaw/pull/95863 | clownfish/gitcrawl-1176-autonomous-drip-20260622c |  |

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
| #93568 | fix_needed | planned | canonical | No mergeable non-security canonical PR exists; build a narrow credited fix PR for the still-open canonical issue. |
| #93603 | route_security | planned | security_sensitive | Exact hydrated PR is marked security-sensitive; route only this PR and continue the non-security issue fix lane. |
| #93593 | keep_closed | skipped | superseded | Already closed context/source PR; preserve as credited evidence only. |
| #93582 | keep_closed | skipped | security_sensitive | Closed security-sensitive context item; leave untouched. |
| #93684 | keep_closed | skipped | security_sensitive | Closed security-sensitive context item; leave untouched. |
| #92084 | keep_closed | skipped | security_sensitive | Closed security-sensitive historical PR; no action in this cluster. |
| cluster:gitcrawl-1176-autonomous-drip-20260622c | build_fix_artifact | planned |  | Build one narrow credited replacement fix PR for the non-security canonical issue. |

## Needs Human

- none
