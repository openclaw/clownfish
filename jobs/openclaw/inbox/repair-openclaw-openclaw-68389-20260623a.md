---
repo: openclaw/openclaw
cluster_id: repair-openclaw-openclaw-68389-20260623a
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
  - "#68389"
candidates:
  - "#68389"
cluster_refs:
  - "#68389"
allow_instant_close: false
allow_fix_pr: true
allow_merge: false
allow_unmerged_fix_close: false
allow_post_merge_close: false
require_fix_before_close: true
security_policy: central_security_only
security_sensitive: false
target_branch: clownfish/repair-openclaw-openclaw-68389-20260623a
source: external_pr_repair
repair_strategy: repair_contributor_branch
force_fresh_repair: true
---

# Repair #68389

## Scope

Source PR: https://github.com/openclaw/openclaw/pull/68389

Title: plugins: clarify allowlist warning when entries don't match discovered ids

Repair the existing contributor PR if current review state still shows only narrow plugin warning/readiness work. Preserve source PR credit.

## Current Evidence

- Live PR snapshot on 2026-06-23: open, not draft, maintainer_can_modify=true.
- Merge state: unstable.
- Worker artifact classified the PR as useful but blocked from merge by missing merge preflight and live readiness issues.
- Concrete blocker from hydrated evidence: maintainer comment requires branch refresh before Dependency Guard can pass.
- Prior Codex bot findings were acknowledged by the contributor; re-fetch review comments before deciding whether any remain actionable.

## Expected Repair

- Prefer `repair_strategy: "repair_contributor_branch"` if the branch remains editable and safe.
- Refresh narrowly onto current main.
- Address any still-actionable review-bot comments about bundled plugin id matching.
- Keep scope limited to plugin allowlist warning clarity in loader provenance and tests.
- If comments or linked security refs make the canonical path unclear, emit a blocked artifact with the exact maintainer decision needed.

## Validation

- Use focused plugin loader provenance tests for touched files.
- Include `pnpm check:changed` when the executor's changed-only validation gate requires it.

## Guardrails

- Re-fetch live PR state, comments, reviews, checks, linked refs, and branch editability before editing.
- Do not comment, label, close, merge, force-push, or bypass checks.
- Do not broaden this into plugin trust-boundary or security-policy work.
