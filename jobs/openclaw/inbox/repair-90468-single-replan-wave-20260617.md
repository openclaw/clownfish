---
repo: "openclaw/openclaw"
cluster_id: "repair-90468-single-replan-wave-20260617"
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
  - "#90468"
candidates:
  - "#90468"
cluster_refs:
  - "#90468"
allow_instant_close: false
allow_fix_pr: true
allow_merge: false
allow_unmerged_fix_close: false
allow_post_merge_close: false
require_fix_before_close: true
security_policy: central_security_only
security_sensitive: false
target_branch: "clownfish/repair-90468-single-replan-wave-20260617"
source: isolated_inventory_replan
source_result: "results/openclaw/live-pr-inventory-20260617t015524-132.md"
source_cluster_id: "live-pr-inventory-20260617T015524-132"
repair_strategy: "repair_contributor_branch"
---

# Repair Replan #90468

## Scope

Re-plan contributor PR #90468 as an isolated repair. Preserve its apostrophe parsing fix while addressing the concrete parser regressions from maintainer review.

## Provenance

- source report: results/openclaw/live-pr-inventory-20260617t015524-132.md
- source cluster: live-pr-inventory-20260617T015524-132
- repair strategy: repair_contributor_branch

## Guardrails

- Re-fetch #90468, current main, checks, and review threads before editing.
- Keep valid shell-style single-quote concatenation working and prevent pluralization/parser regressions.
- Do not comment, label, close, merge, force-push, or bypass checks.
- If the current repair is no longer narrow, safe, or actionable, emit a blocked artifact with the exact reason.
