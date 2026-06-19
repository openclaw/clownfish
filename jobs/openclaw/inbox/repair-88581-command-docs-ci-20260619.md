---
repo: "openclaw/openclaw"
cluster_id: "repair-88581-command-docs-ci-20260619"
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
target_branch: "clownfish/repair-88581-command-docs-ci-20260619"
source: "ci_followup"
repair_strategy: "repair_contributor_branch"
---

# Repair Plan: #88581 Command Docs CI

## Scope

Plan a bounded contributor-branch repair for PR #88581 only. Do not mutate the
PR, comment, label, close, merge, or bypass checks in this plan job.

## Current Evidence

- PR #88581's current head is `09f23a804ca5601b072414379729da2c807b923f`.
- CI run `27799409731` failed
  `src/docs/slash-commands-doc.test.ts` because a built-in chat command alias
  is not documented.
- The same CI run's `checks-node-core-runtime-infra-core-utils` job completed
  after checkout without a test/build failure log; treat it as runner evidence
  unless fresh reproduction identifies a source-level failure.
- The prior repair job was intentionally restricted to four command/runtime
  files. Do not change its historical scope or use it to add documentation.

## Required Plan

- Re-fetch #88581, its current base, all review comments, and current CI state.
- Identify the exact alias introduced by the PR and the canonical documentation
  source required by `src/docs/slash-commands-doc.test.ts`.
- Prove whether a current-main rebase changes either failure before proposing
  source edits.
- Emit a repair artifact only for a contributor-branch repair with exact
  likely files, targeted command/docs tests, `pnpm check:changed`, and a
  Codex `/review` requirement.
- Preserve contributor credit and retain #88581 as the canonical PR.
- If the complete repair would exceed the autonomous narrow-file limit,
  encounters security-sensitive scope, or conflicts materially, return
  `needs_human` with the exact blocker.
