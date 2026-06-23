---
repo: openclaw/openclaw
cluster_id: repair-openclaw-openclaw-78105-20260623a
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
  - "#78105"
candidates:
  - "#78105"
cluster_refs:
  - "#78105"
allow_instant_close: false
allow_fix_pr: true
allow_merge: false
allow_unmerged_fix_close: false
allow_post_merge_close: false
require_fix_before_close: true
security_policy: central_security_only
security_sensitive: false
target_branch: clownfish/repair-openclaw-openclaw-78105-20260623a
source: external_pr_repair
repair_strategy: repair_contributor_branch
force_fresh_repair: true
---

# Repair #78105

## Scope

Source PR: https://github.com/openclaw/openclaw/pull/78105

Title: fix(plugins): make empty-allowlist actionable for new users

Repair the existing contributor PR if current live evidence still shows a narrow, safe plugin warning/docs fix. Preserve source PR credit.

## Current Evidence

- Live PR snapshot on 2026-06-23: open, not draft, maintainer_can_modify=true.
- Merge state: dirty.
- Worker artifact classified the PR as related/useful but not mergeable from the mixed shard.
- Concrete blockers from hydrated evidence: branch is dirty, release-owned CHANGELOG.md is involved, and ClawSweeper says changes are needed before merge.
- The linked security-sensitive issue #68780 must remain central-security-only. This repair job is for the non-security PR surface only.

## Expected Repair

- Prefer `repair_strategy: "repair_contributor_branch"` if the contributor branch remains editable and safe.
- Refresh narrowly onto current main.
- Resolve the ClawSweeper-requested changes for empty allowlist warning copy, docs, and tests.
- Remove or avoid release-owned changelog churn unless current repo rules require it.
- If refreshed evidence makes the work security-sensitive, emit a blocked artifact and route only by the central security policy.

## Validation

- Use focused plugin loader/doc tests for touched files.
- Include `pnpm check:changed` when the executor's changed-only validation gate requires it.

## Guardrails

- Re-fetch live PR state, comments, reviews, checks, linked refs, and branch editability before editing.
- Do not comment, label, close, merge, force-push, or bypass checks.
- Do not broaden this into plugin trust-boundary or security-policy work.
