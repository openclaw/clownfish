---
repo: openclaw/openclaw
cluster_id: exact-merge-retry-89997-20260707
mode: autonomous
expected_head_sha: f3237b42d8faaab8cc0753d8268c6891bca94e90
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
  - "#89997"
candidates:
  - "#89997"
cluster_refs:
  - "#89997"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: false
allow_fix_pr: false
allow_merge: true
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "Merge only PR #89997 after the deterministic external preflight binds validation and review to its exact live head."
notes: "Refreshed after contributor update to exact head f3237b42d8faaab8cc0753d8268c6891bca94e90. One SDK-surface check also fails on current main; do not bypass checks, and stop if the head or merge policy changes."
---

# Exact Merge Retry: #89997

Run the deterministic external merge preflight for
https://github.com/openclaw/openclaw/pull/89997 and apply only the resulting
exact-head merge action. No comments, labels, fixes, or adjacent cluster work.
