---
repo: "openclaw/openclaw"
cluster_id: "repair-70056-autonomous-repair-wave-20260617a"
mode: autonomous
allowed_actions:
  - fix
  - raise_pr
blocked_actions:
  - comment
  - label
  - close
  - merge
  - force_push
  - bypass_checks
require_human_for:
  - security_sensitive
  - active_author_followup
  - broad_code_delta
canonical:
  - "#70056"
candidates:
  - "#70056"
cluster_refs:
  - "#70056"
allow_instant_close: false
allow_fix_pr: true
allow_merge: false
allow_unmerged_fix_close: false
allow_post_merge_close: false
require_fix_before_close: true
security_policy: central_security_only
security_sensitive: false
target_branch: "clownfish/repair-70056-autonomous-repair-wave-20260617a"
source: "autonomous_repair_scout"
repair_strategy: "repair_contributor_branch"
---

# Repair Wave #70056

Repair contributor PR #70056 only if live checkout confirms that a channel stop timeout leaves task or abort state that blocks a later channel start.

## Likely Files

- src/gateway/server-channels.ts
- focused gateway channel lifecycle test selected from the checkout

## Validation

- pnpm check:changed
- run the focused gateway channel lifecycle regression selected from the checkout
- /review

## Credit

- Preserve source PR credit for https://github.com/openclaw/openclaw/pull/70056.

## Guardrails

- Re-fetch #70056 and current main before editing.
- Preserve existing timeout and retry policy; repair only stale stop-state cleanup.
- Do not comment, label, close, merge, force-push, or bypass checks.
