---
repo: openclaw/openclaw
cluster_id: exact-merge-wave-85238-20260707
mode: autonomous
expected_head_sha: 7ec70049e5278491c9842ab92c52e04044c82b56
allowed_actions:
  - "merge"
blocked_actions:
  - "comment"
  - "label"
  - "close"
  - "fix"
  - "raise_pr"
  - "force_push"
  - "bypass_checks"
require_human_for:
  - "security_sensitive"
  - "unresolved_review"
  - "unclear_canonical"
canonical:
  - "#85238"
candidates:
  - "#85238"
cluster_refs:
  - "#85238"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: false
allow_fix_pr: false
allow_merge: true
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "Merge only PR #85238 after the deterministic external preflight binds validation and review to its exact live head."
notes: "Refreshed exact head: 7ec70049e5278491c9842ab92c52e04044c82b56. Maintainers updated the contributor branch onto OpenClaw main c1b9e3622162483d544131f04ce7665f8ad169c6, recorded as the merge commit's second parent. Re-fetch live state and stop if the head or merge policy changes."
---

# Exact Merge Wave: #85238

Run the deterministic external merge preflight for
https://github.com/openclaw/openclaw/pull/85238 and apply only the resulting
exact-head merge action. No comments, labels, fixes, or adjacent cluster work.
