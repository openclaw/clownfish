---
repo: "openclaw/openclaw"
cluster_id: "repair-54716-autonomous-repair-wave-20260617a"
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
  - "#54716"
candidates:
  - "#54716"
cluster_refs:
  - "#54716"
allow_instant_close: false
allow_fix_pr: true
allow_merge: false
allow_unmerged_fix_close: false
allow_post_merge_close: false
require_fix_before_close: true
security_policy: central_security_only
security_sensitive: false
target_branch: "clownfish/repair-54716-autonomous-repair-wave-20260617a"
source: "autonomous_repair_scout"
repair_strategy: "repair_contributor_branch"
---

# Repair Wave #54716

Repair contributor PR #54716 only if it can be rebased cleanly and live checkout confirms that literal per-agent stores resolve as one shared store.

## Likely Files

- src/gateway/session-utils.ts
- session-utils.subagent.test.ts

## Validation

- pnpm check:changed
- run the focused subagent session-store regression selected from the checkout
- /review

## Credit

- Preserve source PR credit for https://github.com/openclaw/openclaw/pull/54716.

## Guardrails

- Re-fetch #54716 and current main before editing.
- Rebase narrowly before repair; emit a blocked artifact if conflicts expand the scope.
- Do not change session-store ownership semantics beyond literal per-agent resolution.
- Do not comment, label, close, merge, force-push, or bypass checks.
