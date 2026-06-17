---
repo: openclaw/openclaw
cluster_id: repair-86608-existing-solutions-guardrail
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
  - close
  - merge
  - security_sensitive
  - failing_checks
  - broad_code_delta
canonical:
  - "#86608"
candidates:
  - "#86608"
cluster_refs:
  - "#86608"
allow_instant_close: false
allow_fix_pr: true
allow_merge: false
allow_unmerged_fix_close: false
allow_post_merge_close: false
require_fix_before_close: true
security_policy: central_security_only
security_sensitive: false
target_branch: clownfish/repair-86608-existing-solutions-guardrail
source: planner_promotion
---

# Existing Solutions Guardrail Repair

Repair #86608 only. Re-fetch the live contributor PR, review state, and current
main before editing. The planner found a narrow five-file docs/configmap
guardrail repair path that should be recreated or rebased on current main while
preserving contributor credit.

Keep the change scoped to the existing-solutions preflight guardrail. Do not
expand it into a general documentation, configuration, or policy rewrite. Run
the narrowest relevant dependency guard checks, `pnpm check:changed`, Codex
review, and `git diff --check` before opening or updating a repair PR.

Do not merge, close, comment on, or label any GitHub item. If the live scope is
broader, security-sensitive, or no longer actionable, write a blocked artifact
with the exact reason instead of guessing.
