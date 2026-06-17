---
repo: "openclaw/openclaw"
cluster_id: "repair-92274-autonomous-repair-wave-20260617a"
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
  - "#92274"
candidates:
  - "#92274"
cluster_refs:
  - "#92274"
allow_instant_close: false
allow_fix_pr: true
allow_merge: false
allow_unmerged_fix_close: false
allow_post_merge_close: false
require_fix_before_close: true
security_policy: central_security_only
security_sensitive: false
target_branch: "clownfish/repair-92274-autonomous-repair-wave-20260617a"
source: "autonomous_repair_scout"
repair_strategy: "repair_contributor_branch"
---

# Repair Wave #92274

Repair contributor PR #92274 only if live checkout confirms that a prompt-lock race retries subagent announce delivery and produces duplicate outbound messages.

## Likely Files

- src/agents/subagent-announce-delivery.ts
- focused delivery regression test selected from the checkout

## Validation

- pnpm check:changed
- run the focused subagent announce delivery regression selected from the checkout
- /review

## Credit

- Preserve source PR credit for https://github.com/openclaw/openclaw/pull/92274.

## Guardrails

- Re-fetch #92274 and current main before editing.
- Keep the patch to the proven delivery race and one focused regression.
- Do not alter prompt locking, retry policy, or outbound delivery semantics outside the reproduced duplicate path.
- Do not comment, label, close, merge, force-push, or bypass checks.
