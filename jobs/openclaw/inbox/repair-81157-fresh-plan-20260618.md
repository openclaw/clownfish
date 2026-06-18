---
repo: "openclaw/openclaw"
cluster_id: "repair-81157-fresh-plan-20260618"
mode: plan
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
  - "#81157"
candidates:
  - "#81157"
cluster_refs:
  - "#81157"
  - "#69582"
allow_instant_close: false
allow_fix_pr: true
allow_merge: false
allow_unmerged_fix_close: false
allow_post_merge_close: false
require_fix_before_close: true
security_policy: central_security_only
security_sensitive: false
target_branch: "clownfish/repair-81157-fresh-plan-20260618"
source: live_remediation_canary_promotion
source_run_id: "27786731118"
repair_strategy: "repair_contributor_branch"
---

# Fresh Repair Plan #81157

Re-hydrate open contributor PR #81157 and its parent issue #69582 from current
GitHub state. The PR is a two-file `process.action` boundary guard:
`src/agents/bash-tools.process.ts` and `src/agents/bash-tools.test.ts`.
The live remediation canary found a concrete branch-repair blocker: update
against current main so Dependency Guard can pass, then rerun the malformed
`process.action` proof and normal review preflight. Preserve adone0's credit.

## Required Outcome

- If that repair remains narrow and attributable, emit a complete
  executor-ready contributor-branch repair path: `fix_needed`,
  `build_fix_artifact`, and `open_fix_pr`, with exact likely files,
  executor-supported validation commands, current blockers, and source credit.
- Otherwise keep the PR and issue open with the exact live blocker. Do not use
  `needs_human` only because merge preflight is absent; merge is disabled here.

## Guardrails

- Re-fetch the current PR head, checks, comments, review threads, and current
  main before planning.
- Do not comment, label, close, merge, force-push, or bypass checks.
- Do not expand beyond the existing two-file process-tool guard unless a
  current review finding makes a minimal adjacent test edit necessary.
- Treat the broader edit-tool contamination reports in #69582 as out of scope;
  they are not evidence to close the issue.
- Use a focused existing process-tool test plus `pnpm check:changed`; do not
  include lifecycle commands, inline probes, or Codex `/review` in executor
  validation commands.
