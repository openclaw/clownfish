---
repo: openclaw/openclaw
cluster_id: exact-merge-retry-98505-20260706
mode: autonomous
expected_head_sha: d70b907331cf4bae4f2b160a5660059715e93826
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
  - "#98505"
candidates:
  - "#98505"
cluster_refs:
  - "#98505"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: false
allow_fix_pr: false
allow_merge: true
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "Merge only PR #98505 after the deterministic external preflight binds validation and review to its exact live head."
notes: "Retry head: d70b907331cf4bae4f2b160a5660059715e93826. The prior source job was finalized after a blocked run. Re-fetch live state and stop if the head or merge policy changes."
---

# Exact Merge Retry: #98505

Run the deterministic external merge preflight for
https://github.com/openclaw/openclaw/pull/98505 and apply only the resulting
exact-head merge action. No comments, labels, fixes, or adjacent cluster work.
