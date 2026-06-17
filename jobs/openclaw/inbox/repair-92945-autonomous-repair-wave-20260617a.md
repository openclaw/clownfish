---
repo: "openclaw/openclaw"
cluster_id: "repair-92945-autonomous-repair-wave-20260617a"
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
  - "#92945"
candidates:
  - "#92945"
cluster_refs:
  - "#92945"
allow_instant_close: false
allow_fix_pr: true
allow_merge: false
allow_unmerged_fix_close: false
allow_post_merge_close: false
require_fix_before_close: true
security_policy: central_security_only
security_sensitive: false
target_branch: "clownfish/repair-92945-autonomous-repair-wave-20260617a"
source: "autonomous_repair_scout"
repair_strategy: "repair_contributor_branch"
---

# Repair Wave #92945

Repair contributor PR #92945 only if live checkout confirms that a stale local Telegram command-menu hash leaves commands empty after the remote command list is cleared.

## Likely Files

- extensions/telegram/src/bot-native-command-menu.ts
- focused command-menu regression test selected from the checkout

## Validation

- pnpm check:changed
- run the focused Telegram command-menu regression selected from the checkout
- /review

## Credit

- Preserve source PR credit for https://github.com/openclaw/openclaw/pull/92945.

## Guardrails

- Re-fetch #92945 and current main before editing.
- Do not alter Telegram command policy or remote API behavior beyond invalidating the stale local hash.
- Do not comment, label, close, merge, force-push, or bypass checks.
