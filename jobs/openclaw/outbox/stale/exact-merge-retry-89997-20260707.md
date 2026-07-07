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
notes: "Merged externally by vincentkoc at 2026-07-07T00:55:50Z as squash commit ffa6ebda4cd048e7d6d60c803d15d995af7870e7. This retry was never dispatched; do not dispatch this archived job."
---

# Exact Merge Retry: #89997

Run the deterministic external merge preflight for
https://github.com/openclaw/openclaw/pull/89997 and apply only the resulting
exact-head merge action. No comments, labels, fixes, or adjacent cluster work.
