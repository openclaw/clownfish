---
repo: "openclaw/openclaw"
cluster_id: "automerge-openclaw-openclaw-84028"
mode: "autonomous"
run_id: "27867951086"
workflow_run_id: "27867951086"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27867951086"
head_sha: "fc257033095f9e69f0fc18763a775317ac80143c"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-20T10:37:15.874Z"
canonical: "https://github.com/openclaw/openclaw/pull/84028"
canonical_issue: null
canonical_pr: "https://github.com/openclaw/openclaw/pull/84028"
actions_total: 2
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 1
apply_skipped: 0
needs_human_count: 0
---

# automerge-openclaw-openclaw-84028

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27867951086](https://github.com/openclaw/clownfish/actions/runs/27867951086)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/84028

## Summary

PR #84028 is the canonical automerge repair target. It is open, non-security, maintainer-editable, focused to generated Arabic Control UI i18n output, and current main still has English Arabic-locale strings on the affected surfaces. Do not merge or close from this worker; run a bounded repair/finalization pass on the contributor branch, regenerate/check Arabic i18n output only if drift appears, complete validation, and preserve @aim9sour credit.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 2 |
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
  "target": "#84028",
  "source_refs": [
    "#84028"
  ],
  "repair_strategy": "repair_contributor_branch",
  "planned_actions": [
    "fix_needed",
    "build_fix_artifact"
  ],
  "summary": "Repair/finalize #84028 on the existing maintainer-editable contributor branch. Keep scope limited to Arabic Control UI generated i18n output, glossary/TM metadata, pending exact-head checks, and the required review loop. If no drift is present after rebase/refresh, leave code unchanged and report validation instead of opening a replacement PR.",
  "pr_title": "fix(ui): improve Arabic Control UI translations",
  "pr_body": "## What Problem This Solves\nArabic Control UI currently contains English strings in the Arabic locale bundle for Skills, quick settings, Workboard, overview, chat, and Cron surfaces. Because the i18n runtime uses active-locale strings before English fallback, those English values render directly when Arabic is selected.\n\n## Why This Change Was Made\nRepair/finalize the existing contributor PR #84028 rather than replacing it. The branch is maintainer-editable and the diff is focused to generated Arabic i18n output plus glossary/TM metadata. Regenerate/check the Arabic i18n output only if rebase or drift requires it.\n\n## User Impact\nArabic users see localized Control UI labels for the targeted Skills, chat, Workboard, overview, quick-settings, and Cron surfaces instead of English values or inconsistent Skills terminology.\n\n## Evidence\nSource PR: https://github.com/openclaw/openclaw/pull/84028 by @aim9sour. Current main ccc1415f6d450d24a4fa5d2e3efe48fe13681566 still shows English Arabic-locale values in ui/src/i18n/locales/ar.ts, and ui/src/i18n/lib/translate.ts falls back only for missing keys. Validate with `pnpm ui:i18n:check` and `pnpm check:changed`; the executor must also complete the required ClawSweeper/Codex review loop for exact head 2a332c7d8395e766f20d76ed1494d8c61011f342 before any later merge path.",
  "likely_files": [
    "ui/src/i18n/locales/ar.ts",
    "ui/src/i18n/.i18n/ar.tm.jsonl",
    "ui/src/i18n/.i18n/glossary.ar.json"
  ],
  "validation_commands": [
    "pnpm ui:i18n:check",
    "pnpm check:changed"
  ],
  "credit_notes": [
    "Preserve @aim9sour as the source contributor for https://github.com/openclaw/openclaw/pull/84028.",
    "Do not open a replacement PR unless the maintainer-editable branch cannot be updated safely; if replacement becomes necessary, credit @aim9sour and source PR #84028 in the PR body and release-note context.",
    "Do not edit CHANGELOG.md directly; keep user-facing release-note context in the PR body or final squash/commit message."
  ],
  "source_job": "jobs/openclaw/inbox/automerge-openclaw-openclaw-84028.md",
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
| repair_contributor_branch | pushed | https://github.com/openclaw/openclaw/pull/84028 |  |  |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #84028 | merge_canonical | blocked | fix_pr | job does not allow merge |

## Apply Audit

| Attempt | Source | Target | Action | Status | Reason |
| --- | --- | --- | --- | --- |
|  | post_flight | #84028 | merge_canonical | blocked | job does not allow merge |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #84028 | fix_needed | planned | canonical | Automerge cannot be finalized by this worker because merge is blocked by job policy and required exact-head gates were not complete in the hydrated artifact. The contributor branch is editable and the repair scope is narrow, so the executor should repair or refresh #84028 directly rather than open a replacement PR. |
| cluster:automerge-openclaw-openclaw-84028 | build_fix_artifact | planned |  | A complete executable repair artifact is available for the canonical contributor PR branch. |

## Needs Human

- none
