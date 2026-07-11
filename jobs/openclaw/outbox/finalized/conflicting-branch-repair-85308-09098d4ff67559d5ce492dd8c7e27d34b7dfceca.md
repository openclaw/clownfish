---
repo: openclaw/openclaw
cluster_id: conflicting-branch-repair-85308-09098d4ff67559d5ce492dd8c7e27d34b7dfceca
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
  - "#85308"
candidates:
  - "#85308"
cluster_refs:
  - "#85308"
expected_head_shas:
  - "#85308=09098d4ff67559d5ce492dd8c7e27d34b7dfceca"
allow_instant_close: false
allow_fix_pr: true
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
repair_strategy: repair_contributor_branch
rebase_only: true
security_policy: central_security_only
security_sensitive: false
canonical_hint: "#85308 is the sole canonical PR. Repair its maintainer-editable contributor branch against current main before any separate exact-head merge finalization."
notes: "Generated from live GitHub conflicting branch repair intake; profile=rebase_only; exact reviewed head=09098d4ff67559d5ce492dd8c7e27d34b7dfceca. Do not merge, close, label, comment, create a replacement PR, or expand scope."
---

# Conflicting branch repair: #85308

Re-hydrate #85308 and emit `fix_needed` plus a complete `build_fix_artifact` using `repair_strategy: repair_contributor_branch`.

Rebase the existing maintainer-editable contributor branch onto current main. Preserve the current implementation, resolve only rebase conflicts, run changed-surface validation and Codex `/review`, then push the repaired contributor branch.

Do not merge, close, label, comment, create a replacement PR, or broaden the PR.

## Inventory

### #85308 fix(subagents): preserve requester wake on visible delivery failure

- bucket: conflicting_branch_repair
- repair profile: rebase_only
- author: DolencLuka
- author association: unknown
- draft: no
- assignees: none
- labels: agents, size: M, proof: supplied, proof: sufficient, P1, rating: platinum hermit, merge-risk: compatibility, merge-risk: session-state, merge-risk: message-delivery, status: ready for maintainer look
- live updated: 2026-06-29T09:13:20Z
- live url: https://github.com/openclaw/openclaw/pull/85308
