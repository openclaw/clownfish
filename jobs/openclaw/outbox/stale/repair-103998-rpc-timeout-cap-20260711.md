---
repo: openclaw/openclaw
cluster_id: repair-103998-rpc-timeout-cap-20260711
mode: autonomous
expected_head_sha: 5fb33b7c0cd5df9b231fde41b3c7fb5ea61037c1
allowed_actions:
  - "fix"
  - "raise_pr"
  - "force_push"
blocked_actions:
  - "merge"
  - "comment"
  - "label"
  - "close"
  - "bypass_checks"
require_human_for:
  - "security_sensitive"
  - "unclear_canonical"
  - "broad_code_delta"
  - "active_author_followup"
maintainer_calibration:
  - "Repair only the maintainer-editable contributor branch for #103998. Keep the five-minute command-wide settle budget, but cap each usage.cost RPC at min(10 seconds, remaining budget) and update focused coverage."
canonical:
  - "#103998"
candidates:
  - "#103998"
cluster_refs:
  - "#103998"
  - "#103882"
  - "#103961"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: false
allow_fix_pr: true
allow_merge: false
require_external_merge_preflight: false
allow_post_merge_close: false
require_fix_before_close: true
canonical_hint: "Repair only the existing writable contributor branch for #103998 by separating the long cache-settle budget from the bounded per-RPC transport timeout."
notes: "Qualified on 2026-07-11 at exact head 5fb33b7c0cd5df9b231fde41b3c7fb5ea61037c1 after exact-head Codex and ClawSweeper review. The current branch fixes stale-cache polling but passes the five-minute settle remainder into each usage.cost RPC, allowing an unresponsive Gateway call to wait far longer than the prior 10-second transport cap. Re-fetch live state and stop if the head or review context changes."
---

# Repair #103998 RPC Timeout

Repair the existing contributor branch for
https://github.com/openclaw/openclaw/pull/103998 only.

## Goal

Preserve the long bounded wait for usage-cache settlement without allowing one
unresponsive Gateway RPC to consume that whole budget.

- Keep the five-minute default command-wide usage-cost settle deadline.
- Cap each `usage.cost` RPC at the smaller of 10 seconds and the remaining
  command budget.
- Preserve explicit shorter `--timeout` values as strict command-wide bounds.
- Replace the current long-per-RPC expectation with focused coverage for the
  per-RPC cap and short total-budget behavior.

## Required Validation

- Run the focused gateway CLI coverage tests for usage-cost settlement.
- Run `pnpm check:changed`.
- Run exact-head Codex review and address any actionable finding.

## Boundaries

- Expected production owner: `src/cli/gateway-cli/register.ts`.
- Expected tests: `src/cli/gateway-cli.coverage.test.ts`.
- Do not change Gateway cache behavior, add a new CLI option, or touch adjacent
  PR #103961.
- Do not merge, comment, label, close, create a replacement PR, or force-push.
