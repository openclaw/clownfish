---
repo: openclaw/openclaw
cluster_id: exact-merge-wave-98505-20260707b
mode: autonomous
expected_head_sha: e29e65f4f309529622f262fd7ec993b4a91fecdb
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
require_external_merge_preflight: true
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "Merge only PR #98505 after the deterministic external preflight binds validation and review to its exact live head."
notes: "Refreshed exact head: e29e65f4f309529622f262fd7ec993b4a91fecdb. During the prior exact authorization, Clownfish merged OpenClaw main 3175d8e7423de21235cc34c49080c9df83c3af2b into the editable contributor branch and correctly revoked the stale authorization after the head changed. The refreshed head preserves effective diff SHA-256 4f360bb04e9d6b2196daf69fcca6065f0f5c5d1d6245ee5d6209968b2c6234fa across the same six files. Maintainer decision: https://github.com/openclaw/openclaw/pull/98505#issuecomment-4899396688. Require refreshed checks and current-head review, re-fetch live state, and stop if the head or merge policy changes."
---

# Exact Merge Wave: #98505

Run the deterministic external merge preflight for
https://github.com/openclaw/openclaw/pull/98505 and apply only the resulting
exact-head merge action. No comments, labels, fixes, or adjacent cluster work.
