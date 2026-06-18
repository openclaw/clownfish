---
repo: "openclaw/openclaw"
cluster_id: "repair-53920-fresh-plan-20260618"
mode: execute
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
  - "#53920"
candidates:
  - "#53920"
cluster_refs:
  - "#53920"
allow_instant_close: false
allow_fix_pr: true
allow_merge: false
allow_unmerged_fix_close: false
allow_post_merge_close: false
require_fix_before_close: true
security_policy: central_security_only
security_sensitive: false
target_branch: "clownfish/repair-53920-fresh-plan-20260618"
source: fresh_replan_after_executor_calibration
repair_strategy: "repair_contributor_branch"
---

# Fresh Repair Execute #53920

Execute the fresh approved repair path for contributor PR #53920. It changes
one auth-monitor setup script and has an outstanding `checks-node-core-tooling`
failure. Re-hydrate live state before editing, then repair that failure only if
it remains attributable and narrowly repairable on the contributor branch.
Preserve contributor credit and keep the scope to the current script change and
concrete review findings.

## Guardrails

- Do not use stale worker artifacts or historical validation commands as
  authority; emit a fresh plan from the current PR head, checks, comments, and
  review threads.
- Do not comment, label, close, merge, force-push, or bypass checks.
- Do not expand into unrelated auth-monitor or service-management work.
- If the failing check is unrelated, security-sensitive, broad, or requires an
  active contributor decision, emit a blocked artifact with the exact reason.
- If a repair is justified, emit only an executor-supported focused test and
  `pnpm check:changed`; do not include inline probes or lifecycle commands.
