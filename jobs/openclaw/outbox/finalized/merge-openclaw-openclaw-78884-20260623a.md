---
repo: openclaw/openclaw
cluster_id: merge-openclaw-openclaw-78884-20260623a
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
  - "#78884"
candidates:
  - "#78884"
cluster_refs:
  - "#78884"
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

# Merge Preflight #78884

Source PR: https://github.com/openclaw/openclaw/pull/78884

This PR was repaired by ProjectClownfish in `repair-openclaw-openclaw-78884-20260623a`.

Authorize only the deterministic external merge preflight workflow to re-fetch live state, validate the exact current head, run Codex review, and then let the guarded applicator squash merge if all merge preflight gates pass.

