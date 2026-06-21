---
repo: openclaw/openclaw
cluster_id: repair-89897-autonomous-20260621
mode: autonomous
allowed_actions:
  - "fix"
  - "raise_pr"
blocked_actions:
  - "merge"
  - "comment"
  - "label"
  - "close"
  - "force_push"
  - "bypass_checks"
require_human_for:
  - "security_sensitive"
  - "unclear_canonical"
  - "broad_code_delta"
  - "active_author_followup"
canonical:
  - "#89897"
candidates:
  - "#89897"
cluster_refs:
  - "#89897"
  - "#83902"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: false
allow_fix_pr: true
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: true
canonical_hint: "Repair only the existing writable contributor branch for #89897. Do not create a replacement PR, merge, comment, label, or close any GitHub item."
notes: "Fresh live plan produced a complete bounded repair artifact for the CLI command-path terminator. Re-fetch the exact branch head and latest ClawSweeper finding before any write."
---

# Repair #89897

Repair the canonical contributor branch for #89897 only.

## Goal

Address the latest actionable ClawSweeper finding on the focused CLI fix, preserve contributor credit, and retain #89897 as the implementation lane for #83902.

## Required Validation

- pnpm -s vitest run src/cli/argv.test.ts
- pnpm check:changed

## Boundaries

- Likely files: `src/cli/argv.ts`, `src/cli/argv.test.ts`
- Preserve the intended `FLAG_TERMINATOR` command-path behavior and focused argv regression coverage.
- Do not modify related PRs or issues.
- Do not merge #89897. Fresh green CI and maintainer review remain required.
