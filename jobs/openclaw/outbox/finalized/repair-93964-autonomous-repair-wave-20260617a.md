---
repo: "openclaw/openclaw"
cluster_id: "repair-93964-autonomous-repair-wave-20260617a"
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
  - "#93964"
candidates:
  - "#93964"
cluster_refs:
  - "#93964"
allow_instant_close: false
allow_fix_pr: true
allow_merge: false
allow_unmerged_fix_close: false
allow_post_merge_close: false
require_fix_before_close: true
security_policy: central_security_only
security_sensitive: false
target_branch: "clownfish/repair-93964-autonomous-repair-wave-20260617a"
source: "autonomous_repair_scout"
repair_strategy: "repair_contributor_branch"
---

# Repair Wave #93964

Repair contributor PR #93964 only if live checkout confirms that volatile failed-exec output is included in tool-loop detection hashing, preventing the loop breaker from recognizing repeated calls.

## Likely Files

- src/agents/tool-loop-detection.ts
- src/agents/tool-loop-detection.test.ts

## Validation

- pnpm check:changed
- run the focused loop-detection regression selected from the checkout
- /review

## Credit

- Preserve source PR credit for https://github.com/openclaw/openclaw/pull/93964.

## Guardrails

- Re-fetch #93964 and current main before editing.
- Keep the change to loop-detection normalization and minimal regression coverage.
- Do not comment, label, close, merge, force-push, or bypass checks.
- Emit a blocked artifact if the live defect is not narrow and reproducible.
