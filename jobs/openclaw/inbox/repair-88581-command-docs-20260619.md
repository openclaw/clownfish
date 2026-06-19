---
repo: "openclaw/openclaw"
cluster_id: "repair-88581-command-docs-20260619"
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
  - "#88581"
candidates:
  - "#88581"
cluster_refs:
  - "#88581"
allow_instant_close: false
allow_fix_pr: true
allow_merge: false
allow_unmerged_fix_close: false
allow_post_merge_close: false
require_fix_before_close: true
security_policy: central_security_only
security_sensitive: false
target_branch: "clownfish/repair-88581-command-docs-20260619"
source: "planner_promotion"
source_result: "results/openclaw/repair-88581-command-docs-ci-20260619.md"
source_cluster_id: "repair-88581-command-docs-ci-20260619"
source_run_id: "27799869600"
repair_strategy: "repair_contributor_branch"
allowed_fix_files:
  - "src/auto-reply/commands-registry.shared.ts"
  - "src/auto-reply/reply/commands-handlers.runtime.ts"
  - "src/auto-reply/reply/commands-name.ts"
  - "src/auto-reply/reply/commands-name.test.ts"
  - "docs/tools/slash-commands.md"
---

# Repair Promotion: #88581 Command Docs

## Scope

Repair the existing contributor branch for PR #88581 only. Preserve contributor
credit and keep the PR as the review lane.

## Required Repair

- Re-fetch PR #88581 and current `origin/main`.
- Rebase the contributor branch onto current `origin/main`.
- First run `src/docs/slash-commands-doc.test.ts` after the rebase.
- If the missing built-in alias remains, update only
  `docs/tools/slash-commands.md` to document `/name <title>` consistently with
  the command registry and existing command docs.
- Do not modify files outside `allowed_fix_files`.
- Stop with `needs_human` if rebase conflicts materially, the failure changes
  beyond docs inventory, or the repair becomes security-sensitive.

## Validation

- node scripts/run-vitest.mjs src/docs/slash-commands-doc.test.ts src/auto-reply/reply/commands-name.test.ts
- pnpm check:changed
- Run Codex `/review` and address actionable findings before pushing.

## Guardrails

- Do not comment, label, close, merge, force-push, or bypass checks.
- The prior core-utils CI failure was checkout/runner noise; do not expand the
  source scope unless fresh validation proves a source-level failure.
