---
repo: openclaw/openclaw
cluster_id: automerge-openclaw-openclaw-74067
mode: autonomous
allowed_actions:
  - comment
  - label
  - fix
  - raise_pr
blocked_actions:
  - close
  - merge
require_human_for:
  - close
  - merge
canonical:
  - #74067
candidates:
  - #74067
cluster_refs:
  - #74067
allow_instant_close: false
allow_fix_pr: true
allow_merge: false
allow_unmerged_fix_close: false
allow_post_merge_close: false
require_fix_before_close: true
security_policy: central_security_only
security_sensitive: false
target_branch: clownfish/automerge-openclaw-openclaw-74067
source: pr_automerge
---

# Clownfish automerge repair candidate

Maintainer opted #74067 into Clownfish automerge.

Source PR: https://github.com/openclaw/openclaw/pull/74067
Title: fix: Found one bug in the new compile-cache prune path: it removes a d

Clownfish should use this job only for the bounded ClawSweeper review/fix loop:

- If ClawSweeper requests changes, returns `needs-human`, or finds failing checks/rebase work, and the PR branch is safe to update, emit a fix artifact with `repair_strategy: "repair_contributor_branch"` and `source_prs: ["https://github.com/openclaw/openclaw/pull/74067"]`.
- If the PR branch cannot be safely updated, emit a narrow credited replacement only when the artifact can preserve the original contributor credit; otherwise return `needs_human`.
- Do not merge, close, or bypass review gates from the worker. The comment router owns final merge only after a passing ClawSweeper verdict for the exact current head.
- Keep repair scope limited to actionable ClawSweeper findings, failing relevant checks, and required review feedback on this PR.
