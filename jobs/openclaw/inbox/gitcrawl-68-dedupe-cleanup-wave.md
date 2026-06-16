---
repo: openclaw/openclaw
cluster_id: gitcrawl-68-dedupe-cleanup-wave
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
  - "#88713"
candidates:
  - "#81786"
  - "#83874"
  - "#88639"
  - "#88713"
  - "#88875"
  - "#89157"
  - "#89295"
cluster_refs:
  - "#81786"
  - "#83874"
  - "#88639"
  - "#88713"
  - "#88875"
  - "#89157"
  - "#89295"
overlap_policy: "skip-full"
security_policy: central_security_only
import_security_policy: "skip-any"
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #88713 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 68 on 2026-06-16."
---

# Gitcrawl Cluster 68

Generated from local gitcrawl run cluster 68 for `openclaw/openclaw`.

Display title:

> docs: document agent helper comments

Cluster shape from gitcrawl:

- total members: 7
- issues: 0
- pull requests: 7
- open candidates in local store: 7
- representative: #88713, currently open in local store
- latest member update: 2026-06-15T19:04:12.8123Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #81786 chore(agent): port audit guardrails to mainline
- #83874 feat: add agent architecture runtime contracts
- #88639 docs: document gateway method types
- #88713 docs: document agent helper comments
- #88875 docs: document markdown and shared helpers
- #89157 docs: document reusable helper contracts
- #89295 docs: document command auth compatibility contracts
