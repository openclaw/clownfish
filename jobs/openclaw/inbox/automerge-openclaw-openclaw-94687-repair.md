---
repo: openclaw/openclaw
cluster_id: automerge-openclaw-openclaw-94687-repair
mode: autonomous
allowed_actions:
  - comment
  - label
  - fix
  - raise_pr
  - merge
blocked_actions:
  - close
require_human_for:
  - close
allowed_fix_files:
  - src/cli/gateway-cli/register.ts
  - src/cli/gateway-cli/call.ts
  - src/cli/gateway-port-option.ts
  - src/commands/gateway-status.ts
  - src/commands/gateway-status/helpers.ts
  - src/commands/health.ts
  - src/gateway/call.ts
  - src/gateway/connection-details.ts
  - src/cli/gateway-cli/register.option-collisions.test.ts
  - src/cli/gateway-port-option.test.ts
  - src/commands/gateway-status.test.ts
  - src/commands/gateway-status/helpers.test.ts
  - src/gateway/call.test.ts
  - docs/cli/gateway.md
  - CHANGELOG.md
canonical:
  - #94687
candidates:
  - #94687
cluster_refs:
  - #94687
allow_instant_close: false
allow_fix_pr: true
allow_merge: true
allow_unmerged_fix_close: false
allow_post_merge_close: false
require_fix_before_close: true
security_policy: central_security_only
security_sensitive: false
target_branch: clownfish/automerge-openclaw-openclaw-94687-repair
source: pr_automerge
---

# Clownfish automerge repair candidate

Source PR: https://github.com/openclaw/openclaw/pull/94687
Title: fix(gateway): accept port for health and probe

Clownfish should use this job only for the bounded ClawSweeper review/fix loop:

- Re-fetch the current PR and `main` state. If the contributor branch remains
  safely editable, repair and refresh that branch instead of creating a duplicate.
- Limit the repair to the existing health/probe `--port` behavior, the auth
  diagnostic config propagation required by review, and focused regression tests.
- Preserve contributor credit. Create a credited fresh-main replacement only if
  the source branch becomes unsafe or cannot be updated during execution.
- Rebase onto current `main`, rerun focused validation and Codex review, and
  merge only after the deterministic merge preflight is clean. Do not close,
  remove labels, or bypass checks.
