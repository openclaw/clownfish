---
repo: openclaw/openclaw
cluster_id: exact-merge-wave-98505-20260707b
mode: autonomous
expected_head_sha: 7c0278ea0a36cd1d4b52cb9159a24e6c781a73a4
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
notes: "Refreshed exact head: 7c0278ea0a36cd1d4b52cb9159a24e6c781a73a4. Maintainers rebased the editable contributor branch onto OpenClaw main 82106a18b3beaaff085ca3258a6f09cd19348d03 after its GitHub test-merge ref lagged the live base. Re-fetch live state and stop if the head or merge policy changes."
---

# Exact Merge Wave: #98505

Run the deterministic external merge preflight for
https://github.com/openclaw/openclaw/pull/98505 and apply only the resulting
exact-head merge action. No comments, labels, fixes, or adjacent cluster work.
