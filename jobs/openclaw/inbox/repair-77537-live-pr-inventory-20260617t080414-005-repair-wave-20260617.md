---
repo: "openclaw/openclaw"
cluster_id: "repair-77537-live-pr-inventory-20260617t080414-005-repair-wave-20260617"
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
  - "#77537"
candidates:
  - "#77537"
  - "#77432"
  - "#77904"
  - "#78606"
  - "#78747"
cluster_refs:
  - "#77537"
  - "#77432"
  - "#77904"
  - "#78606"
  - "#78747"
allow_instant_close: false
allow_fix_pr: true
allow_merge: false
allow_unmerged_fix_close: false
allow_post_merge_close: false
require_fix_before_close: true
security_policy: central_security_only
security_sensitive: false
target_branch: "clownfish/repair-77537-live-pr-inventory-20260617t080414-005-repair-wave-20260617"
source: planner_promotion
source_result: "results/openclaw/live-pr-inventory-20260617t080414-005.md"
source_cluster_id: "live-pr-inventory-20260617T080414-005"
source_run_id: "27674868914-1-4"
repair_strategy: "repair_contributor_branch"
---

# Repair Promotion #77537

## Scope

Repair contributor PR #77537 by investigating and fixing the current Real behavior proof failure for TUI commentary progress rendering, then rerun the narrow TUI validation and required pre-merge review gates on the repaired branch.

## Provenance

- source report: results/openclaw/live-pr-inventory-20260617t080414-005.md
- source cluster: live-pr-inventory-20260617T080414-005
- source run: 27674868914-1-4
- source job: jobs/openclaw/inbox/live-pr-inventory-20260617T080414-005.md
- repair strategy: repair_contributor_branch

## Source Refs

- #77537
- #77432
- #77904
- #78606
- #78747

## Planned Repair

- proposed PR title: Repair TUI commentary progress proof for #77537

Repairs the current Real behavior proof failure on #77537 while preserving the contributor's original TUI commentary progress implementation and attribution.

Source PR: https://github.com/openclaw/openclaw/pull/77537
Credit: @grosen / Greg Rosen

Validation plan:
- pnpm test src/tui/tui-event-handlers.test.ts src/tui/tui-command-handlers.test.ts src/tui/embedded-backend.test.ts
- OPENCLAW_LOCAL_CHECK=1 OPENCLAW_LOCAL_CHECK_MODE=throttled pnpm check:changed
- pnpm exec oxfmt --check --threads=1 src/tui/tui-event-handlers.ts src/tui/tui-event-handlers.test.ts src/tui/tui-command-handlers.ts src/tui/tui-command-handlers.test.ts
- git diff --check origin/main..HEAD
- Real behavior proof workflow
- Codex /review with all findings addressed

## Likely Files

- src/tui/tui-event-handlers.ts
- src/tui/tui-event-handlers.test.ts
- src/tui/tui-command-handlers.ts
- src/tui/tui-command-handlers.test.ts
- src/tui/embedded-backend.test.ts
- CHANGELOG.md

## Validation

- pnpm test src/tui/tui-event-handlers.test.ts src/tui/tui-command-handlers.test.ts src/tui/embedded-backend.test.ts
- OPENCLAW_LOCAL_CHECK=1 OPENCLAW_LOCAL_CHECK_MODE=throttled pnpm check:changed
- pnpm exec oxfmt --check --threads=1 src/tui/tui-event-handlers.ts src/tui/tui-event-handlers.test.ts src/tui/tui-command-handlers.ts src/tui/tui-command-handlers.test.ts
- git diff --check origin/main..HEAD
- Run or replay the PR's Real behavior proof workflow after the repair
- Run Codex /review and address every finding before any merge recommendation

## Credit

- Preserve source PR credit for @grosen / Greg Rosen from https://github.com/openclaw/openclaw/pull/77537.
- Keep the repair on the contributor branch when possible because maintainer_can_modify=true.
- Any replacement path must mention #77537 as the source PR and carry attribution in the PR body and changelog plan.

## Guardrails

- Re-fetch #77537 and current main before editing. This promotion is evidence, not a substitute for fresh preflight.
- Do not comment, label, close, merge, force-push, or bypass checks.
- If the repair is no longer narrow, active, safe, or actionable, emit a blocked artifact with the exact reason.
