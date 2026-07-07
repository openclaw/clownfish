---
repo: openclaw/openclaw
cluster_id: exact-merge-retry-98505-20260707
mode: autonomous
expected_head_sha: 45ec9a485d7f17153edb5d1a243dd10f9f798606
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
notes: "Refreshed head: 45ec9a485d7f17153edb5d1a243dd10f9f798606. GitHub updated the editable contributor branch onto OpenClaw main 0e8870da7666e86bb37c4fa582bbc6008867da38 after the prior test-merge ref stayed stale. Re-fetch live state and stop if the head or merge policy changes."
---

# Exact Merge Retry: #98505

Run the deterministic external merge preflight for
https://github.com/openclaw/openclaw/pull/98505 and apply only the resulting
exact-head merge action. No comments, labels, fixes, or adjacent cluster work.
