---
repo: "openclaw/openclaw"
cluster_id: "conflicting-branch-repair-97740-8aa5b6f9de05c84d50ae43377bb4e3577324e60f"
mode: "autonomous"
run_id: "29139561771"
workflow_run_id: "29139561771"
run_url: "https://github.com/openclaw/clownfish/actions/runs/29139561771"
head_sha: "f2ddf90e6ad2db0077eb0c254f0ae52bc278360a"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-07-11T04:56:23.575Z"
canonical: "https://github.com/openclaw/openclaw/pull/97740"
canonical_issue: "https://github.com/openclaw/openclaw/issues/97069"
canonical_pr: "https://github.com/openclaw/openclaw/pull/97740"
actions_total: 7
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 1
apply_skipped: 0
needs_human_count: 0
---

# conflicting-branch-repair-97740-8aa5b6f9de05c84d50ae43377bb4e3577324e60f

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/29139561771](https://github.com/openclaw/clownfish/actions/runs/29139561771)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/97740

## Summary

Plan repair for canonical PR #97740 only. The hydrated artifact shows #97740 is open, maintainer-editable, non-security-sensitive, exact head 8aa5b6f9de05c84d50ae43377bb4e3577324e60f, and blocked by the ClawSweeper finding that neutral exec wording was applied through a shared plugin approval helper. No GitHub mutations are proposed because comments, labels, closes, merges, and force-pushes are blocked for this job.

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
  "target": "#97740",
  "source_refs": [
    "#97740",
    "#97069",
    "#97077",
    "#97081",
    "#97106",
    "#97145"
  ],
  "repair_strategy": "repair_contributor_branch",
  "planned_actions": [
    "fix_needed",
    "build_fix_artifact"
  ],
  "summary": "Repair PR #97740 on the existing saju01 contributor branch by rebasing onto current main and addressing the exact ClawSweeper finding: the neutral exec-specific Allow Always unavailable wording must not leak through shared plugin approval rendering. Keep the PR bounded to the existing exec approval wording fix and do not broaden into the typed-reason approach used by other overlapping PRs.",
  "pr_title": "fix(exec-approval): stop misattributing Allow Always unavailability to policy",
  "pr_body": "## What Problem This Solves\n\nRepairs #97740 on the existing contributor branch for #97069. Redirected/non-persistable exec commands should not make the approval prompt falsely claim that the effective approval policy requires approval every time.\n\n## Why This Change Was Made\n\nClawSweeper found that the current PR uses neutral exec wording through a shared plugin approval helper. That helper is also used by plugin approvals, so the repair must keep exec approval wording truthful without changing plugin approval semantics or broadening the PR.\n\n## User Impact\n\nUsers keep the clearer exec approval prompt for non-persistable commands, while plugin approval prompts retain their existing policy-specific behavior.\n\n## Evidence\n\nPlanned executor validation: rebase #97740 onto current main, repair only the shared-helper leakage, run `pnpm check:changed`, run Codex `/review`, and push the maintainer-editable contributor branch. Existing hydrated evidence for the original head includes passing check-lint, build-artifacts, check-prod-types, check-test-types, checks-fast-bundled-protocol, Real behavior proof, and Mantis Telegram Desktop proof.",
  "likely_files": [
    "src/plugin-sdk/approval-reaction-runtime.ts",
    "src/plugin-sdk/approval-reaction-runtime.test.ts",
    "src/infra/exec-approval-reply.ts",
    "src/infra/exec-approval-reply.test.ts",
    "src/infra/exec-approval-forwarder.ts",
    "src/gateway/server-methods/exec-approval.ts",
    "ui/src/components/exec-approval.ts",
    "ui/src/ui/views/exec-approval.test.ts",
    "ui/src/i18n/locales/en.ts",
    "ui/src/i18n/.i18n/raw-copy-baseline.json"
  ],
  "validation_commands": [
    "pnpm check:changed"
  ],
  "credit_notes": [
    "Repair the existing contributor branch for https://github.com/openclaw/openclaw/pull/97740; preserve @saju01 as the PR author/source contributor.",
    "Do not create a replacement PR in this job.",
    "PR body should keep the original issue/fix context and mention that Clownfish only repaired the review blocker on the existing contributor branch."
  ],
  "source_job": "jobs/openclaw/inbox/conflicting-branch-repair-97740-8aa5b6f9de05c84d50ae43377bb4e3577324e60f.md",
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
| repair_contributor_branch | pushed | https://github.com/openclaw/openclaw/pull/97740 |  |  |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #97740 | merge_canonical | blocked | fix_pr | job does not allow merge |

## Apply Audit

| Attempt | Source | Target | Action | Status | Reason |
| --- | --- | --- | --- | --- |
|  | post_flight | #97740 | merge_canonical | blocked | job does not allow merge |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #97069 | keep_related | planned | related |  |
| #97077 | keep_closed | skipped | superseded | already_closed |
| #97081 | keep_closed | skipped | superseded | already_closed |
| #97106 | keep_closed | skipped | superseded | already_closed |
| #97145 | keep_related | planned | related |  |
| #97740 | fix_needed | planned | canonical | repair_contributor_branch_required |
| cluster:conflicting-branch-repair-97740-8aa5b6f9de05c84d50ae43377bb4e3577324e60f | build_fix_artifact | planned |  |  |

## Needs Human

- none
