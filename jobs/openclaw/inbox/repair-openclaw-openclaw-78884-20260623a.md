---
repo: openclaw/openclaw
cluster_id: repair-openclaw-openclaw-78884-20260623a
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
  - "#78884"
candidates:
  - "#78884"
cluster_refs:
  - "#78884"
allow_instant_close: false
allow_fix_pr: true
allow_merge: false
allow_unmerged_fix_close: false
allow_post_merge_close: false
require_fix_before_close: true
security_policy: central_security_only
security_sensitive: false
target_branch: clownfish/repair-openclaw-openclaw-78884-20260623a
source: external_pr_repair
repair_strategy: repair_contributor_branch
force_fresh_repair: true
---

# Repair #78884

## Scope

Source PR: https://github.com/openclaw/openclaw/pull/78884

Title: docs: document local avatar file size limit

Repair the existing contributor PR if the branch is still safe and maintainer-editable. Preserve source PR credit.

## Current Evidence

- Live PR snapshot on 2026-06-23: open, not draft, maintainer_can_modify=true.
- Merge state: dirty.
- Worker artifact classified the PR as useful but blocked from deterministic merge/fix in the mixed shard.
- Concrete blocker from hydrated evidence: the branch needs refresh, and the PR includes an extra CHANGELOG.md line even though release generation owns changelog updates.
- Existing proof/check signal in the worker artifact: check-docs and Real behavior proof passed.

## Expected Repair

- Prefer `repair_strategy: "repair_contributor_branch"` if the PR branch remains editable and current review state still permits maintainer repair.
- Refresh narrowly onto current main.
- Drop or adjust release-owned changelog churn unless current OpenClaw repo rules require it.
- Keep the docs change limited to the local avatar 2 MB file-size limit surfaces.
- If the branch cannot be safely repaired, emit a blocked fix artifact with the exact reason instead of widening scope.

## Validation

- Use the narrowest repo-native documentation validation for the touched docs surface.
- Include `pnpm check:changed` when the executor's changed-only validation gate requires it.

## Guardrails

- Re-fetch live PR state, comments, reviews, checks, and branch editability before editing.
- Do not comment, label, close, merge, force-push, or bypass checks.
- Do not touch unrelated avatar, gateway, or release-note behavior.
