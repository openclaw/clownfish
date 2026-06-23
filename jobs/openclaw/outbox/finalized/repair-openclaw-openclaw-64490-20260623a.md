---
repo: openclaw/openclaw
cluster_id: repair-openclaw-openclaw-64490-20260623a
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
  - "#64490"
candidates:
  - "#64490"
cluster_refs:
  - "#64490"
allow_instant_close: false
allow_fix_pr: true
allow_merge: false
allow_unmerged_fix_close: false
allow_post_merge_close: false
require_fix_before_close: true
security_policy: central_security_only
security_sensitive: false
target_branch: clownfish/repair-openclaw-openclaw-64490-20260623a
source: external_pr_repair
repair_strategy: repair_contributor_branch
force_fresh_repair: true
---

# Repair #64490

## Scope

Source PR: https://github.com/openclaw/openclaw/pull/64490

Title: CLI: escape zsh completion descriptions

Repair the existing contributor PR if current live evidence still shows the escaping fix is narrow and branch-editable. Preserve source PR credit.

## Current Evidence

- Live PR snapshot on 2026-06-23: open, not draft, maintainer_can_modify=true.
- Merge state: unstable.
- Worker artifact classified the PR as needing human in the mixed shard because merge is blocked by failed proof and unresolved bot review evidence.
- Concrete blocker from hydrated evidence: Real behavior proof is failing, and Greptile left an actionable P2 review comment that the single-quote escape idiom is wrong for the double-quoted zsh context.

## Expected Repair

- Prefer `repair_strategy: "repair_contributor_branch"` if the branch remains editable and safe.
- Fix zsh completion description escaping in the correct double-quoted context.
- Update focused CLI completion tests.
- Keep scope limited to zsh completion description escaping.
- If the bot finding is already obsolete after live refresh, record that evidence and proceed only if validation is still narrow and clean.

## Validation

- Use focused CLI completion tests for touched files.
- Include `pnpm check:changed` when the executor's changed-only validation gate requires it.

## Guardrails

- Re-fetch live PR state, comments, reviews, checks, and branch editability before editing.
- Do not comment, label, close, merge, force-push, or bypass checks.
- Do not fold in unrelated completion issues such as #compdef placement.
