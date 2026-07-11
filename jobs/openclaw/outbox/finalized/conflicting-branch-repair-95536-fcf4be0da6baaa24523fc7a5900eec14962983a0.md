---
repo: openclaw/openclaw
cluster_id: conflicting-branch-repair-95536-fcf4be0da6baaa24523fc7a5900eec14962983a0
mode: autonomous
allowed_actions:
  - "fix"
  - "raise_pr"
blocked_actions:
  - "force_push"
  - "bypass_checks"
  - "comment"
  - "label"
  - "close"
  - "merge"
require_human_for:
  - "security_sensitive"
  - "failing_checks"
  - "unresolved_review_threads"
  - "broad_code_delta"
maintainer_calibration:
  - "Rebase the current maintainer-editable contributor branch onto current main, validate it, and run Codex /review. Preserve the existing contributor change and do not broaden the PR."
canonical:
  - "#95536"
candidates:
  - "#95536"
cluster_refs:
  - "#95536"
expected_head_shas:
  - "#95536=fcf4be0da6baaa24523fc7a5900eec14962983a0"
allow_instant_close: false
allow_fix_pr: true
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
repair_strategy: repair_contributor_branch
rebase_only: true
security_policy: central_security_only
security_sensitive: false
canonical_hint: "#95536 is the sole canonical PR. Repair its maintainer-editable contributor branch against current main before any separate exact-head merge finalization."
notes: "Generated from live GitHub conflicting branch repair intake; profile=rebase_only; exact reviewed head=fcf4be0da6baaa24523fc7a5900eec14962983a0. Do not merge, close, label, comment, create a replacement PR, or expand scope."
---

# Conflicting branch repair: #95536

Re-hydrate #95536 and emit `fix_needed` plus a complete `build_fix_artifact` using `repair_strategy: repair_contributor_branch`.

Rebase the existing maintainer-editable contributor branch onto current main. Preserve the current implementation, resolve only rebase conflicts, run changed-surface validation and Codex `/review`, then push the repaired contributor branch.

Do not merge, close, label, comment, create a replacement PR, or broaden the PR.

## Inventory

### #95536 fix(agents): add tool-activity heartbeat to keep subagent alive during tool calls

- bucket: conflicting_branch_repair
- repair profile: rebase_only
- author: xydt-tanshanshan
- author association: unknown
- draft: no
- assignees: none
- labels: agents, size: M, proof: sufficient, P1, rating: platinum hermit, merge-risk: availability, status: ready for maintainer look
- live updated: 2026-06-29T11:47:06Z
- live url: https://github.com/openclaw/openclaw/pull/95536
