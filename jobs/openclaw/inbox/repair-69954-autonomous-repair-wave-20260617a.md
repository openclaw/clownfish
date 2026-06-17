---
repo: "openclaw/openclaw"
cluster_id: "repair-69954-autonomous-repair-wave-20260617a"
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
  - "#69954"
candidates:
  - "#69954"
cluster_refs:
  - "#69954"
allow_instant_close: false
allow_fix_pr: true
allow_merge: false
allow_unmerged_fix_close: false
allow_post_merge_close: false
require_fix_before_close: true
security_policy: central_security_only
security_sensitive: false
target_branch: "clownfish/repair-69954-autonomous-repair-wave-20260617a"
source: "autonomous_repair_scout"
repair_strategy: "repair_contributor_branch"
---

# Repair Wave #69954

Repair contributor PR #69954 only if live checkout confirms that session cleanup can delete a live session when metadata points at a stale transcript path.

## Likely Files

- src/commands/sessions-cleanup.ts
- focused sessions-cleanup regression test selected from the checkout

## Validation

- pnpm check:changed
- run the focused sessions-cleanup regression selected from the checkout
- /review

## Credit

- Preserve source PR credit for https://github.com/openclaw/openclaw/pull/69954.

## Guardrails

- Re-fetch #69954 and current main before editing.
- Keep the change to live-session detection; do not broaden cleanup behavior or retention policy.
- Do not comment, label, close, merge, force-push, or bypass checks.
