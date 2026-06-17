---
repo: "openclaw/openclaw"
cluster_id: "repair-94022-live-pr-inventory-20260617t082059-005-repair-wave-20260617"
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
  - "#94022"
candidates:
  - "#94022"
  - "#93935"
  - "#93810"
  - "#94017"
  - "#93835"
cluster_refs:
  - "#94022"
  - "#93935"
  - "#93810"
  - "#94017"
  - "#93835"
allow_instant_close: false
allow_fix_pr: true
allow_merge: false
allow_broad_fix_artifacts: true
allow_unmerged_fix_close: false
allow_post_merge_close: false
require_fix_before_close: true
security_policy: central_security_only
security_sensitive: false
target_branch: "clownfish/repair-94022-live-pr-inventory-20260617t082059-005-repair-wave-20260617"
source: planner_promotion
source_result: "results/openclaw/live-pr-inventory-20260617t082059-005.md"
source_cluster_id: "live-pr-inventory-20260617T082059-005"
source_run_id: "27675728438"
repair_strategy: "repair_contributor_branch"
---

# Repair Promotion #94022

## Scope

Repair #94022 on the contributor branch so the cron startup catch-up deferral state survives all maintenance recompute callers, then rerun merge preflight before any merge recommendation.

## Provenance

- source report: results/openclaw/live-pr-inventory-20260617t082059-005.md
- source cluster: live-pr-inventory-20260617T082059-005
- source run: 27675728438
- source job: jobs/openclaw/inbox/live-pr-inventory-20260617T082059-005.md
- repair strategy: repair_contributor_branch

## Source Refs

- #94022
- #93935
- #93810
- #94017
- #93835

## Planned Repair

- proposed PR title: fix(cron): preserve startup catch-up deferrals across maintenance recomputes

Fixes #93935. Repairs the #94022 approach by keeping startup catch-up deferral ids in cron service state so read RPCs, finalize paths, empty-due timer maintenance, manual run preflight, and reservation release do not advance deferred catch-up runs to the next natural schedule before the staggered catch-up fires.

Credit: based on source PR #94022 by @Jah-xy, with #93810 by @yetval as prior related cron deferral work.

Validation plan:
- node scripts/run-vitest.mjs src/cron/service.startup-overflow-clobber.test.ts src/cron/service.restart-catchup.test.ts src/cron/service/ops.test.ts src/cron/service/ops.regression.test.ts src/cron/service/timer.regression.test.ts src/cron/service/timer.test.ts src/cron/service.jobs.test.ts
- pnpm check:changed
- scripts/pr review-validate-artifacts 94022
- scripts/pr prepare-run 94022
- /review

## Likely Files

- src/cron/service/jobs.ts
- src/cron/service/ops.ts
- src/cron/service/state.ts
- src/cron/service/timer.ts
- src/cron/service.startup-overflow-clobber.test.ts
- src/cron/service/timer.regression.test.ts
- src/cron/service/jobs.test.ts

## Validation

- node scripts/run-vitest.mjs src/cron/service.startup-overflow-clobber.test.ts src/cron/service.restart-catchup.test.ts src/cron/service/ops.test.ts src/cron/service/ops.regression.test.ts src/cron/service/timer.regression.test.ts src/cron/service/timer.test.ts src/cron/service.jobs.test.ts
- pnpm check:changed
- scripts/pr review-validate-artifacts 94022
- scripts/pr prepare-run 94022
- /review

## Credit

- Credit Jah-xy as the source PR author for #94022.
- Preserve #93810/yetval as historical context for the earlier startup-only fix and regression analysis.
- If a replacement PR becomes necessary, the PR body and any closeout comment must mention #94022 as the source PR and preserve contributor attribution.

## Guardrails

- Re-fetch #94022 and current main before editing. This promotion is evidence, not a substitute for fresh preflight.
- Do not comment, label, close, merge, force-push, or bypass checks.
- If the repair is no longer narrow, active, safe, or actionable, emit a blocked artifact with the exact reason.
