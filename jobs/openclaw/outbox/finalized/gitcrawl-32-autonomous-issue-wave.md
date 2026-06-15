---
repo: openclaw/openclaw
cluster_id: gitcrawl-32-autonomous-issue-wave
mode: autonomous
allowed_actions:
  - comment
  - label
  - close
  - merge
  - fix
  - raise_pr
blocked_actions:
  - force_push
  - bypass_checks
require_human_for:
  - security_sensitive
  - failing_checks
  - conflicting_prs
  - unclear_canonical
  - broad_code_delta
canonical: []
candidates:
  - "#67419"
  - "#75184"
  - "#75189"
  - "#80289"
  - "#86819"
cluster_refs:
  - "#67419"
  - "#75184"
  - "#75189"
  - "#80289"
  - "#86819"
overlap_policy: "exclude-existing"
existing_overlap_refs:
  - "#22438"
  - "#22439"
  - "#39120"
  - "#72495"
  - "#73401"
  - "#73917"
  - "#74735"
  - "#75187"
  - "#75212"
  - "#75217"
  - "#78031"
  - "#84424"
  - "#88935"
  - "#89894"
security_policy: central_security_only
import_security_policy: "skip-full"
security_sensitive: false
allow_instant_close: true
allow_fix_pr: true
allow_merge: true
allow_post_merge_close: true
require_fix_before_close: true
canonical_hint: "gitcrawl representative #74735 is already owned by an existing job; worker must choose the best live canonical from the remaining open refs."
notes: "Generated from gitcrawl run cluster 32 on 2026-06-15. Existing-overlap refs #22438, #22439, #39120, #72495, #73401, #73917, #74735, #75187, #75212, #75217, #78031, #84424, #88935, #89894 were excluded from actionable refs and kept as context only."
---

# Gitcrawl Cluster 32

Generated from local gitcrawl run cluster 32 for `openclaw/openclaw`.

Display title:

> feat(bootstrap): support session-scoped extra files

Cluster shape from gitcrawl:

- total members: 19
- issues: 8
- pull requests: 11
- open candidates in local store: 5
- excluded existing-overlap refs: #22438, #22439, #39120, #72495, #73401, #73917, #74735, #75187, #75212, #75217, #78031, #84424, #88935, #89894
- representative: #74735, currently open in local store
- latest member update: 2026-06-15T11:49:41.30752Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #67419 Session context bloat: bootstrap files re-injected every turn, wasting 20-30% tokens
- #75184 [Bug]: `agents.defaults.skipBootstrap: true` is a no-op for workspace bootstrap files
- #75189 [Bug]: Default `bootstrapMaxChars=20000` + verbose auto-generated bootstrap content degrades tool dispatch on small/mid models
- #80289 Performance: Telegram skill invocations (e.g. /weather) pay full workspace bootstrap cost on every turn — 30s+ on Haiku 4.5
- #86819 [Bug]: /context detail shows ~62k untracked provider/runtime overhead on fresh OpenAI Codex gpt-5.5 session

Existing-overlap context refs:

- #22438 feat: Tiered bootstrap file loading for progressive context control
- #22439 feat(workspace): add tiered bootstrap loading with configurable bootstrapTier
- #39120 [Feature]: Support arbitrary workspace files in bootstrap context injection
- #72495 fix(agents): harden workspace bootstrap cache identity
- #73401 [security-signal] fix(agents): load symlinked workspace bootstrap files
- #73917 [security-signal] feat(bootstrap): allow arbitrary extra bootstrap files
- #74735 [security-signal] feat(bootstrap): support session-scoped extra files
- #75187 [Bug]: Auto-generated `AGENTS.md` puts load-bearing tool-use rules at the bottom; head-truncation by `bootstrapMaxChars` strips them
- #75212 [security-signal] feat(agents): add minimal bootstrap tier
- #75217 [security-signal] fix(agents): honor skipBootstrap at runtime injection path (#75184)
- #78031 feat(bootstrap): teach compact writing style for workspace templates
- #84424 [security-signal] fix(doctor): honor per-agent bootstrap profile in size check
- #88935 [security-signal] fix(agent): load shared tools bootstrap instructions
- #89894 fix(docs): reorder AGENTS.md template to protect critical rules from truncation
