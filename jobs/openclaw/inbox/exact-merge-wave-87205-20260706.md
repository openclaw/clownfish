---
repo: openclaw/openclaw
cluster_id: exact-merge-wave-87205-20260706
mode: autonomous
expected_head_sha: 1fa4470fa0b3ec8c4bae65be6bae51f3a3762511
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
  - "#87205"
candidates:
  - "#87205"
cluster_refs:
  - "#87205"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: false
allow_fix_pr: false
allow_merge: true
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "Merge only PR #87205 after the deterministic external preflight binds validation and review to its exact live head."
notes: "Prepared head: 1fa4470fa0b3ec8c4bae65be6bae51f3a3762511. Re-fetch live state and stop if the head or merge policy changes."
---

# Exact Merge Wave: #87205

Run the deterministic external merge preflight for
https://github.com/openclaw/openclaw/pull/87205 and apply only the resulting
exact-head merge action. No comments, labels, fixes, or adjacent cluster work.
