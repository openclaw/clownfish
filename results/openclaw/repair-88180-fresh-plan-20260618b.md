---
repo: "openclaw/openclaw"
cluster_id: "repair-88180-fresh-plan-20260618b"
mode: "plan"
run_id: "27788597205"
workflow_run_id: "27788597205"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27788597205"
head_sha: "7f41b2e7f526831f314ee6eca2a9d0ce587bfca7"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-18T20:55:32.408Z"
canonical: "#88180"
canonical_issue: null
canonical_pr: "#88180"
actions_total: 6
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# repair-88180-fresh-plan-20260618b

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27788597205](https://github.com/openclaw/clownfish/actions/runs/27788597205)

Workflow conclusion: success

Worker result: planned

Canonical: #88180

## Summary

Plan-only repair result for open canonical PR #88180. The PR is the current scoped contributor-branch candidate for the IDENTITY.md system-prompt defaults fix, but it still has narrow repair blockers: one out-of-scope pull request template edit, a failing checks-node-core-tooling check, a failing Real behavior proof check, and a read-only Codex review note requiring maintainer review of the added model-visible prompt instruction before merge. Merge and close actions are disabled by the job; the executor should repair the writable contributor branch and preserve yozu's credit.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 6 |
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
  "target": "#88180",
  "source_refs": [
    "#88180",
    "#62953",
    "#65777",
    "#94397"
  ],
  "repair_strategy": "repair_contributor_branch",
  "planned_actions": [
    "fix_needed",
    "build_fix_artifact",
    "open_fix_pr"
  ],
  "summary": "Repair open contributor PR #88180 in place. Keep the IDENTITY.md system-prompt guidance fix and focused regression test, remove the unrelated pull request template edit unless it is directly required, then validate the branch with focused system-prompt coverage and pnpm check:changed. Do not merge, close, comment, label, force-push, or bypass checks in this job.",
  "pr_title": "fix(prompt): preserve IDENTITY defaults in system prompt",
  "pr_body": "Repair path for Clownfish cluster repair-88180-fresh-plan-20260618b.\n\nSource PR: https://github.com/openclaw/openclaw/pull/88180\nCanonical PR: https://github.com/openclaw/openclaw/pull/88180\nCredited author: @yozu / Yoshikazu Terashi\n\nScope:\n- Keep the IDENTITY.md-specific system-prompt guidance in src/agents/system-prompt.ts.\n- Keep focused regression coverage in src/agents/system-prompt.test.ts.\n- Revert .github/pull_request_template.md unless the executor proves it is directly required for this repair.\n\nValidation:\n- pnpm -s vitest run src/agents/system-prompt.test.ts\n- pnpm check:changed\n\nNotes:\n- Merge is disabled for this job.\n- Do not comment, label, close, force-push, or bypass checks.\n- #65777 is security-routed context only and should not be mutated by this repair.",
  "likely_files": [
    "src/agents/system-prompt.ts",
    "src/agents/system-prompt.test.ts",
    ".github/pull_request_template.md"
  ],
  "validation_commands": [
    "pnpm -s vitest run src/agents/system-prompt.test.ts",
    "pnpm check:changed"
  ],
  "credit_notes": [
    "Preserve @yozu / Yoshikazu Terashi as the source contributor for #88180.",
    "Keep #88180 as the source PR URL in any repair notes or PR body.",
    "Earlier same-author attempts #62953 and #65777 are historical context only; #65777 remains security-routed and must not be mutated by Clownfish."
  ],
  "source_job": "jobs/openclaw/inbox/repair-88180-fresh-plan-20260618b.md",
  "security_sensitive": false,
  "security_routed_refs": [
    "#65777"
  ],
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
| #62953 | keep_closed | skipped | superseded | Already closed historical source PR; no closure or mutation is valid in this plan. |
| #65777 | route_security | planned | security_sensitive | Security-sensitive linked ref must be quarantined to central OpenClaw security handling without blocking the unrelated narrow #88180 repair. |
| #88180 | fix_needed | planned | canonical | Repair the writable contributor branch narrowly before any future merge consideration: drop the out-of-scope template edit if not required, keep only the IDENTITY.md prompt guidance and focused test, and re-run the required focused validation. |
| #94397 | keep_closed | skipped | related | Already closed and only related by agent prompt area; it is not the same narrow repair path as #88180. |
| cluster:repair-88180-fresh-plan-20260618b | build_fix_artifact | planned |  | Create an executor-ready repair artifact for the existing contributor branch rather than a broad replacement. |
| #88180 | open_fix_pr | planned | canonical | Use the fix executor path to repair the existing PR branch; no GitHub mutation is performed by this plan-mode worker. |

## Needs Human

- none
