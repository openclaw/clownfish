---
repo: openclaw/openclaw
cluster_id: exact-merge-wave-101062-20260707b
mode: autonomous
expected_head_sha: b4d79c8512511a2474d9d31b1826e332c6c660c0
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
  - "#101062"
candidates:
  - "#101062"
cluster_refs:
  - "#101062"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: false
allow_fix_pr: false
allow_merge: true
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "Merge only PR #101062 after the deterministic external preflight binds validation and review to its exact live head."
notes: "Exact head b4d79c8512511a2474d9d31b1826e332c6c660c0 is Clownfish's merge refresh of reviewed head f4df8861c00d1ae7f70142c845f825905ee11e7d onto OpenClaw main 08349608f291e5c8e5f4af69ff149d864da24824. Run 28840092847 proved the effective three-file diff remained 5bf391e32d9d7167863dc33b9ad7fa30be4ee416ac9550d729e4adc000186a08. All live checks completed without failures. Exact maintainer evidence: https://github.com/openclaw/openclaw/pull/101062#issuecomment-4900063312. Re-fetch live state and stop if the head or merge policy changes."
---

# Exact Merge Wave: #101062

Run the deterministic external merge preflight for
https://github.com/openclaw/openclaw/pull/101062 and apply only the resulting
exact-head merge action. No comments, labels, fixes, or adjacent cluster work.
