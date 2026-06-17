---
repo: openclaw/openclaw
cluster_id: repair-77539-steered-task-redispatch
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
  - "#77539"
candidates:
  - "#77539"
cluster_refs:
  - "#77539"
allow_instant_close: false
allow_fix_pr: true
allow_merge: false
allow_unmerged_fix_close: false
allow_post_merge_close: false
require_fix_before_close: true
security_policy: central_security_only
security_sensitive: false
target_branch: clownfish/repair-77539-steered-task-redispatch
source: planner_promotion
---

# Steered Task Redispatch Repair

Repair #77539 only. Re-fetch the live contributor PR, its review state, and
current main. The planner identified a narrow contributor-branch repair path
for preserving steered task text when a subagent restart redispatches work.

Keep the repair confined to that restart/redispatch behavior and the directly
related tests. Address only concrete review findings, validate the focused
subagent path, run `pnpm check:changed`, Codex review, and `git diff --check`
before opening or updating a repair PR.

Do not merge, close, comment on, or label any GitHub item. If current state
shows active author work, security sensitivity, or a broader repair surface,
write a blocked artifact with the exact reason instead of guessing.
