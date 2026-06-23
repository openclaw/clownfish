---
repo: openclaw/openclaw
cluster_id: repair-openclaw-openclaw-69199-20260623a
mode: autonomous
allowed_actions:
  - fix
  - raise_pr
blocked_actions:
  - comment
  - label
  - close
  - merge
  - force_push
  - bypass_checks
require_human_for:
  - security_sensitive
  - active_author_followup
  - broad_code_delta
canonical:
  - "#69199"
candidates:
  - "#69199"
cluster_refs:
  - "#69199"
allow_instant_close: false
allow_fix_pr: true
allow_merge: false
allow_unmerged_fix_close: false
allow_post_merge_close: false
require_fix_before_close: true
security_policy: central_security_only
security_sensitive: false
target_branch: clownfish/repair-openclaw-openclaw-69199-20260623a
source: external_pr_repair
repair_strategy: replace_uneditable_branch
force_fresh_repair: true
---

# Repair #69199

## Scope

Source PR: https://github.com/openclaw/openclaw/pull/69199

Title: fix(memory): improve error message when node:sqlite is unavailable

Create a credited replacement only if current live evidence still shows the contributor branch is uneditable and the repair remains narrow. Preserve source PR credit.

## Current Evidence

- Live PR snapshot on 2026-06-23: open, not draft, maintainer_can_modify=false.
- Merge state: clean.
- Worker artifact classified the PR as needing human in the mixed shard because the branch is uneditable and there is an unresolved normalization concern.
- Concrete blocker from hydrated evidence: Greptile left an actionable P2 review comment on extensions/memory-core/src/tools.shared.ts about inconsistent string normalization for sqlite-missing detection.
- Related memory-core PRs exist but are separate root causes; keep this scoped to the node:sqlite unavailable message.

## Expected Repair

- Prefer `repair_strategy: "replace_uneditable_branch"` if the branch remains uneditable.
- Preserve source PR credit in the replacement PR body.
- Address the sqlite-missing string normalization concern.
- Keep scope limited to the missing node:sqlite user-facing error path and focused tests.
- If the contributor branch becomes maintainer-editable before execution, the worker may switch to `repair_contributor_branch` after re-fetching and recording that evidence.

## Validation

- Use focused memory-core tests for touched files.
- Include `pnpm check:changed` when the executor's changed-only validation gate requires it.

## Guardrails

- Re-fetch live PR state, comments, reviews, checks, and branch editability before editing.
- Do not comment, label, close, merge, force-push, or bypass checks.
- Do not fold in separate memory-core issues or broader sqlite fallback behavior.
