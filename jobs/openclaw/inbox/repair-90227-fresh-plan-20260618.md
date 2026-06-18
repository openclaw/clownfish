---
repo: "openclaw/openclaw"
cluster_id: "repair-90227-fresh-plan-20260618"
mode: plan
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
  - "#90227"
candidates:
  - "#90227"
cluster_refs:
  - "#90227"
allow_instant_close: false
allow_fix_pr: true
allow_merge: false
allow_unmerged_fix_close: false
allow_post_merge_close: false
require_fix_before_close: true
security_policy: central_security_only
security_sensitive: false
target_branch: "clownfish/repair-90227-fresh-plan-20260618"
source: live_remediation_canary_promotion
source_run_id: "27786731118"
repair_strategy: "repair_contributor_branch"
---

# Fresh Repair Plan #90227

Re-hydrate open contributor PR #90227 from current GitHub state. It is a
one-file Windows compatibility repair in
`extensions/zalouser/src/zalo-js.credentials.test.ts`. The live remediation
canary found concrete, bounded Copilot findings: make symlink skipping
capability-based, guard symlink-probe setup and cleanup failures, and clarify
or split the Windows private-permissions assertions. Preserve
aniruddhaadak80's credit.

## Required Outcome

- If those findings remain actionable and within the test file, emit a complete
  executor-ready contributor-branch repair path: `fix_needed`,
  `build_fix_artifact`, and `open_fix_pr`, with exact likely files,
  executor-supported validation commands, current blockers, and source credit.
- Otherwise keep the PR open with the exact live blocker. Do not use
  `needs_human` only because merge preflight is absent; merge is disabled here.

## Guardrails

- Re-fetch the current PR head, checks, comments, and review threads before
  planning.
- Do not comment, label, close, merge, force-push, or bypass checks.
- Keep the work inside the existing Zalo credential test surface; do not expand
  into production credential/runtime changes.
- If the target test is no longer the right proof lane or the repair grows
  beyond a narrow test change, emit a blocked artifact with the exact reason.
- Use the focused Zalo credential test plus `pnpm check:changed`; do not
  include lifecycle commands, inline probes, or Codex `/review` in executor
  validation commands.
