---
repo: openclaw/openclaw
cluster_id: exact-merge-wave-85238-20260707
mode: autonomous
expected_head_sha: 16cfff03540a4e134126e737bfb3f5966d8a1286
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
require_external_merge_preflight: true
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "Merge only PR #85238 after the deterministic external preflight binds validation and review to its exact live head."
notes: "Refreshed exact head: 16cfff03540a4e134126e737bfb3f5966d8a1286. Maintainers repaired the editable contributor branch after deterministic preflight found that filesystem-root service cwd incorrectly rejected trusted PNPM_HOME and NPM_CONFIG_PREFIX paths. Focused path-env tests and the changed-surface gate passed locally. Re-run the full deterministic external preflight and stop if the head or merge policy changes."
---

# Exact Merge Wave: #85238

Run the deterministic external merge preflight for
https://github.com/openclaw/openclaw/pull/85238 and apply only the resulting
exact-head merge action. No comments, labels, fixes, or adjacent cluster work.
