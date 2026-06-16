---
repo: openclaw/openclaw
cluster_id: gitcrawl-69-dedupe-cleanup-wave
mode: autonomous
allowed_actions:
  - comment
  - label
  - close
blocked_actions:
  - force_push
  - bypass_checks
  - merge
  - fix
  - raise_pr
require_human_for:
  - security_sensitive
  - failing_checks
  - conflicting_prs
  - unclear_canonical
  - broad_code_delta
canonical:
  - "#90975"
candidates:
  - "#84527"
  - "#90975"
  - "#91282"
  - "#91295"
  - "#91473"
  - "#91474"
  - "#91477"
cluster_refs:
  - "#84527"
  - "#90975"
  - "#91282"
  - "#91295"
  - "#91473"
  - "#91474"
  - "#91477"
overlap_policy: "skip-full"
security_policy: central_security_only
import_security_policy: "skip-any"
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #90975 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 69 on 2026-06-16."
---

# Gitcrawl Cluster 69

Generated from local gitcrawl run cluster 69 for `openclaw/openclaw`.

Display title:

> feat(google): add Antigravity CLI backend

Cluster shape from gitcrawl:

- total members: 7
- issues: 3
- pull requests: 4
- open candidates in local store: 7
- representative: #90975, currently open in local store
- latest member update: 2026-06-15T19:04:12.013255Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #84527 [Feature]: Add Antigravity CLI (agy) as CLI backend to replace deprecated google-gemini-cli
- #90975 feat(google): add Antigravity CLI backend
- #91282 feat(plugin-sdk): add optional CliBackendPlugin.estimateUsage hook for text-output backends
- #91295 feat(plugin-sdk): add optional CliBackendPlugin.transformAssistantText hook for post-parse text rewrites
- #91473 feat(google): filter English "I will"/"I am" pre-tool narration from antigravity-cli
- #91474 feat(google): enable raw-transcript reseed for antigravity-cli (multi-turn context fix)
- #91477 feat(plugin-sdk): add optional CliBackendPlugin.estimateUsage hook for text-output backends
