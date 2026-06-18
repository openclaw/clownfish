---
repo: "openclaw/openclaw"
cluster_id: "repair-81190-fresh-plan-20260618b"
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
  - "#81190"
candidates:
  - "#81190"
cluster_refs:
  - "#81190"
allow_instant_close: false
allow_fix_pr: true
allow_merge: false
allow_unmerged_fix_close: false
allow_post_merge_close: false
require_fix_before_close: true
security_policy: central_security_only
security_sensitive: false
target_branch: "clownfish/repair-81190-fresh-plan-20260618b"
source: repair_canary_promotion
repair_strategy: "repair_contributor_branch"
---

# Fresh Repair Plan #81190

Re-hydrate open contributor PR #81190 from current GitHub state. Its scope is
the two-file overflow-compaction tool-result repair in
`src/agents/pi-embedded-runner/run.ts` and
`src/agents/pi-embedded-runner/run.overflow-compaction.loop.test.ts`.
Preserve LLagoon3's credit.

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
- Keep work inside the overflow-compaction runner and focused regression test;
  do not redesign tool-result truncation or compaction behavior.
- If the repair expands beyond this narrow two-file surface, emit a blocked
  artifact with the exact reason.
- Use focused overflow-compaction coverage plus `pnpm check:changed`; do not
  include lifecycle commands, inline probes, or Codex `/review` in executor
  validation commands.
