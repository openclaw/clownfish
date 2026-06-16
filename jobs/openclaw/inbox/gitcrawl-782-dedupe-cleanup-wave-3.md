---
repo: openclaw/openclaw
cluster_id: gitcrawl-782-dedupe-cleanup-wave-3
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
  - "#87753"
candidates:
  - "#90822"
cluster_refs:
  - "#87753"
  - "#90822"
overlap_policy: "exclude-existing"
security_policy: central_security_only
import_security_policy: "skip-any"
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #87753 is closed; worker must verify whether an open canonical should replace it."
notes: "Generated from gitcrawl run cluster 782 on 2026-06-16."
---

# Gitcrawl Cluster 782

Generated from local gitcrawl run cluster 782 for `openclaw/openclaw`.

Display title:

> [Bug]: Discord channel messages not working, but DMs work fine

Cluster shape from gitcrawl:

- total members: 2
- issues: 2
- pull requests: 0
- open candidates in local store: 1
- representative: #87753, currently closed in local store
- latest member update: 2026-06-15T19:04:11.316204Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #87753 [Bug]: Discord channel messages not working, but DMs work fine

Open candidates:

- #90822 [Bug]: Discord bot not delivering responses to channel
