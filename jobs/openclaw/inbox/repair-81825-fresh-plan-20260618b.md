---
repo: "openclaw/openclaw"
cluster_id: "repair-81825-fresh-plan-20260618b"
mode: execute
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
  - "#81825"
candidates:
  - "#81825"
cluster_refs:
  - "#81825"
allow_instant_close: false
allow_fix_pr: true
allow_merge: false
allow_unmerged_fix_close: false
allow_post_merge_close: false
require_fix_before_close: true
security_policy: central_security_only
security_sensitive: false
target_branch: "clownfish/repair-81825-fresh-plan-20260618b"
source: repair_canary_promotion
repair_strategy: "repair_contributor_branch"
---

# Fresh Repair Plan #81825

Re-hydrate open contributor PR #81825 from current GitHub state. Its scope is
the two-file 1Password desktop-app authentication guidance repair in
`skills/1password/SKILL.md` and `skills/1password/references/get-started.md`.
Preserve koshaji's credit.

## Required Outcome

- If current review feedback has a concrete, narrow documentation repair,
  emit a complete executor-ready contributor-branch repair path:
  `fix_needed`, `build_fix_artifact`, and `open_fix_pr`, with exact likely
  files, executor-supported validation commands, current blockers, and source
  credit.
- Otherwise keep the PR open with the exact live blocker. Do not use
  `needs_human` only because merge preflight is absent; merge is disabled here.

## Guardrails

- Re-fetch the current PR head, checks, comments, and review threads before
  planning.
- Do not comment, label, close, merge, force-push, or bypass checks.
- Keep work in the existing 1Password skill guidance. Do not alter secrets,
  credential handling, CLI authentication behavior, or the documented
  security model.
- If review requires product-policy changes beyond this documentation surface,
  emit a blocked artifact with the exact reason.
- Use repository-native documentation validation plus `pnpm check:changed`;
  do not include lifecycle commands, inline probes, or Codex `/review` in
  executor validation commands.
