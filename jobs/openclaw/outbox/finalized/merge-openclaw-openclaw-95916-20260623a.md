---
repo: openclaw/openclaw
cluster_id: merge-openclaw-openclaw-95916-20260623a
mode: autonomous
allowed_actions:
  - merge
blocked_actions:
  - comment
  - label
  - close
  - fix
  - raise_pr
  - force_push
  - bypass_checks
require_human_for:
  - security_sensitive
  - unresolved_review
canonical:
  - "#95916"
candidates:
  - "#95916"
cluster_refs:
  - "#95916"
allow_instant_close: false
allow_fix_pr: false
allow_merge: true
allow_unmerged_fix_close: false
allow_post_merge_close: false
require_fix_before_close: false
security_policy: central_security_only
security_sensitive: false
source: external_merge_preflight
---

# Merge Preflight #95916

Replacement PR: https://github.com/openclaw/openclaw/pull/95916

This replacement was opened by ProjectClownfish from `repair-openclaw-openclaw-69199-20260623a` because source PR https://github.com/openclaw/openclaw/pull/69199 was uneditable. Contributor credit was preserved in the replacement PR.

Authorize only the deterministic external merge preflight workflow to re-fetch live state, validate the exact current head, run Codex review, and then let the guarded applicator squash merge if all merge preflight gates pass.

