---
repo: "openclaw/openclaw"
cluster_id: "repair-88581-command-core-20260619"
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
allowed_fix_files:
  - "src/auto-reply/commands-registry.shared.ts"
  - "src/auto-reply/reply/commands-handlers.runtime.ts"
  - "src/auto-reply/reply/commands-name.ts"
  - "src/auto-reply/reply/commands-name.test.ts"
canonical:
  - "#88581"
candidates:
  - "#88581"
cluster_refs:
  - "#88581"
allow_instant_close: false
allow_fix_pr: true
allow_merge: false
allow_unmerged_fix_close: false
allow_post_merge_close: false
require_fix_before_close: true
security_policy: central_security_only
security_sensitive: false
target_branch: "clownfish/repair-88581-command-core-20260619"
source: split_broad_repair
source_result: "results/openclaw/repair-88581-live-pr-inventory-20260618t170451-007-20260619.md"
source_cluster_id: "repair-88581-live-pr-inventory-20260618t170451-007-20260619"
source_run_id: "27798111337"
repair_strategy: "repair_contributor_branch"
---

# Repair #88581 Command Core

## Scope

Repair the editable contributor branch for #88581 in a narrow command-core phase. Do not use `allow_broad_fix_artifacts` and do not update docs in this autonomous pass.

## Planned Repair

Refresh #88581 against current main and repair only the `/name` command implementation plus its focused test. Restrict edits to these four files:

- `src/auto-reply/commands-registry.shared.ts`
- `src/auto-reply/reply/commands-handlers.runtime.ts`
- `src/auto-reply/reply/commands-name.ts`
- `src/auto-reply/reply/commands-name.test.ts`

Use the existing command metadata marker/broadcast path after successful session label writes. Keep source PR attribution to BSG2000. Defer slash-command documentation changes to a separate follow-up after this command-core repair is validated.

## Validation

- `node scripts/run-vitest.mjs src/auto-reply/reply/commands-name.test.ts`
- `pnpm check:changed`

## Guardrails

- Re-fetch #88581 and current main before editing.
- Do not edit docs, config, schemas, or unrelated command surfaces.
- Do not comment, label, close, merge, force-push, or bypass checks.
- If the repair needs any fifth file or a documentation change, emit a blocked artifact with the exact reason.
