---
repo: "openclaw/openclaw"
cluster_id: "repair-openclaw-openclaw-78884-20260623a"
mode: "autonomous"
run_id: "27996541336"
workflow_run_id: "27996541336"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27996541336"
head_sha: "01a8ba38ad1f130f41158b2e061978d19164fe2c"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-23T01:59:29.513Z"
canonical: "https://github.com/openclaw/openclaw/pull/78884"
canonical_issue: "https://github.com/openclaw/openclaw/issues/65312"
canonical_pr: "https://github.com/openclaw/openclaw/pull/78884"
actions_total: 7
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 1
apply_skipped: 0
needs_human_count: 0
---

# repair-openclaw-openclaw-78884-20260623a

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27996541336](https://github.com/openclaw/clownfish/actions/runs/27996541336)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/78884

## Summary

Plan repair of open contributor PR #78884 in place. The branch is maintainer-editable per the hydrated artifact, the docs fix is narrow and useful, and the executable repair is to refresh onto current main, keep only the two avatar docs notes, and remove the release-owned CHANGELOG.md entry before validation.

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
  "target": "#78884",
  "source_refs": [
    "#78884",
    "#65312",
    "#72172",
    "#65675",
    "#69630",
    "#70499"
  ],
  "repair_strategy": "repair_contributor_branch",
  "planned_actions": [
    "fix_needed",
    "build_fix_artifact"
  ],
  "summary": "Repair open contributor PR #78884 by refreshing the maintainer-editable branch against current main, removing the release-owned CHANGELOG.md line, and preserving the two documentation updates for the local workspace-relative avatar 2 MB limit.",
  "pr_title": "docs: document local avatar file size limit",
  "pr_body": "## What Problem This Solves\n\nLocal workspace-relative agent avatar files over 2 MB are rejected by runtime behavior, but the CLI and gateway agent config docs do not currently state that limit.\n\nFixes #65312.\n\n## Why This Change Was Made\n\nThis repairs contributor PR #78884 from @wangjieweb3-design in place, preserving the useful docs update while removing the release-owned CHANGELOG.md entry. The docs should explain that the 2 MB cap applies to local workspace-relative avatar files; HTTP(S) URLs and `data:` URI avatars are outside that local file-size check.\n\n## User Impact\n\nUsers configuring local avatar files can see the 2 MB limit before debugging a silently ignored oversized image.\n\n## Evidence\n\n- Current main defines `AVATAR_MAX_BYTES = 2 * 1024 * 1024` in `src/shared/avatar-policy.ts`.\n- Current avatar resolution returns `too_large` for local avatar files above that limit in `src/agents/identity-avatar.ts`.\n- `src/agents/identity-avatar.test.ts` covers oversized local avatars and accepts remote/data avatars.\n- Validate with `pnpm docs:list`, `pnpm docs:check-mdx`, `git diff --check`, and `pnpm check:changed`.",
  "likely_files": [
    "docs/cli/agents.md",
    "docs/gateway/config-agents.md",
    "CHANGELOG.md"
  ],
  "validation_commands": [
    "pnpm docs:list",
    "pnpm docs:check-mdx",
    "git diff --check",
    "pnpm check:changed"
  ],
  "credit_notes": [
    "Repair the existing contributor branch for #78884; preserve credit for @wangjieweb3-design as the source PR author.",
    "Keep PR body release-note context instead of adding CHANGELOG.md, because normal PRs do not edit release-owned CHANGELOG.md.",
    "Carry forward the useful docs-style feedback from closed PR #72172: place the CLI note in the existing Notes list and make the wording specific to local workspace-relative avatar files."
  ],
  "source_job": "jobs/openclaw/inbox/repair-openclaw-openclaw-78884-20260623a.md",
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
| repair_contributor_branch | pushed | https://github.com/openclaw/openclaw/pull/78884 |  |  |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #78884 | merge_canonical | blocked | fix_pr | job does not allow merge |

## Apply Audit

| Attempt | Source | Target | Action | Status | Reason |
| --- | --- | --- | --- | --- |
|  | post_flight | #78884 | merge_canonical | blocked | job does not allow merge |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #78884 | fix_needed | planned | canonical | Repair contributor branch in place: rebase/refresh against current main, remove CHANGELOG.md churn, keep the docs notes scoped to local workspace-relative avatar files and clarify that HTTP(S)/data avatars are outside the local file-size check. |
| cluster:repair-openclaw-openclaw-78884-20260623a | build_fix_artifact | planned |  | One narrow executable repair artifact covers the cluster without widening beyond docs/cli/agents.md, docs/gateway/config-agents.md, and removing the CHANGELOG.md entry. |
| #65312 | keep_related | planned | fixed_by_candidate | The issue is covered by the repair path but must not be closed before a merged fix. |
| #65675 | keep_closed | skipped | superseded | Closed context ref only; no closure action is valid. |
| #69630 | keep_closed | skipped | superseded | Closed context ref only; no closure action is valid. |
| #70499 | keep_closed | skipped | superseded | Closed context ref only; no closure action is valid. |
| #72172 | keep_closed | skipped | superseded | Closed context ref only; no closure action is valid. |

## Needs Human

- none
