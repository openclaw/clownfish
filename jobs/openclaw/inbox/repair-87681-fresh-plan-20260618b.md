---
repo: "openclaw/openclaw"
cluster_id: "repair-87681-fresh-plan-20260618b"
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
  - "#87681"
candidates:
  - "#87681"
cluster_refs:
  - "#87681"
allow_instant_close: false
allow_fix_pr: true
allow_merge: false
allow_unmerged_fix_close: false
allow_post_merge_close: false
require_fix_before_close: true
security_policy: central_security_only
security_sensitive: false
target_branch: "clownfish/repair-87681-fresh-plan-20260618b"
source: repair_canary_promotion
repair_strategy: "repair_contributor_branch"
---

# Fresh Repair Plan #87681

Re-hydrate open contributor PR #87681 from current GitHub state. Its scope is
the four-file Linux exec SIGKILL/OOM diagnostic repair in
`src/agents/bash-tools.exec-runtime.*` and `src/process/linux-oom-score.*`.
Preserve sweetcornna's credit.

## Required Outcome

- If the current PR has a concrete, narrow blocker, emit a complete
  executor-ready contributor-branch repair path: `fix_needed`,
  `build_fix_artifact`, and `open_fix_pr`, with exact likely files,
  executor-supported validation commands, current blockers, and source credit.
- Otherwise keep the PR open with the exact live blocker. Do not use
  `needs_human` only because merge preflight is absent; merge is disabled here.

## Guardrails

- Re-fetch the current PR head, checks, comments, and review threads before
  planning.
- Do not comment, label, close, merge, force-push, or bypass checks.
- Keep the existing exec/OOM diagnostic behavior and four-file scope. Do not
  change general process execution, sandboxing, or Linux memory policy.
- If the current contributor branch is already being updated or the repair
  expands beyond this narrow surface, emit a blocked artifact with the exact
  reason.
- Use focused exec and Linux OOM-score coverage plus `pnpm check:changed`; do
  not include lifecycle commands, inline probes, or Codex `/review` in
  executor validation commands.
