---
repo: "openclaw/openclaw"
cluster_id: "repair-94022-fresh-plan-20260618"
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
  - "#94022"
candidates:
  - "#94022"
cluster_refs:
  - "#94022"
allow_instant_close: false
allow_fix_pr: true
allow_merge: false
allow_unmerged_fix_close: false
allow_post_merge_close: false
require_fix_before_close: true
security_policy: central_security_only
security_sensitive: false
target_branch: "clownfish/repair-94022-fresh-plan-20260618"
source: fresh_replan_after_executor_calibration
repair_strategy: "repair_contributor_branch"
---

# Fresh Repair Plan #94022

Re-hydrate open contributor PR #94022 from live GitHub state. It changes the
cron startup catch-up deferral path across six files. Determine whether the
existing branch has a concrete, bounded repair need and preserve Jah-xy's
credit. Do not rely on the previous broad repair promotion or its historical
commands.

## Guardrails

- Re-fetch the current PR head, checks, comments, review threads, and current
  main before planning any repair.
- Do not comment, label, close, merge, force-push, or bypass checks.
- Treat a repair crossing beyond the existing six-file cron deferral surface as
  broad and block it.
- Do not include PR lifecycle commands, inline probes, or Codex `/review` in
  executor validation commands.
- If a repair is justified, use focused existing cron tests and
  `pnpm check:changed`; otherwise emit the exact block reason.
