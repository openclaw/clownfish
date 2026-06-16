---
repo: openclaw/openclaw
cluster_id: gitcrawl-855-dedupe-cleanup-wave-3
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
canonical: []
candidates:
  - "#79681"
cluster_refs:
  - "#79681"
overlap_policy: "exclude-existing"
existing_overlap_refs:
  - "#73836"
security_policy: central_security_only
import_security_policy: "skip-any"
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #73836 is already owned by an existing job; worker must choose the best live canonical from the remaining open refs."
notes: "Generated from gitcrawl run cluster 855 on 2026-06-16. Existing-overlap refs #73836 were excluded from actionable refs and kept as context only."
---

# Gitcrawl Cluster 855

Generated from local gitcrawl run cluster 855 for `openclaw/openclaw`.

Display title:

> [Bug]: Control UI/Gateway responsiveness regression during active runs: UI reconnect stalls, Telegram typing gaps, heartbeat poll noise, and media mirror UX issues

Cluster shape from gitcrawl:

- total members: 2
- issues: 2
- pull requests: 0
- open candidates in local store: 1
- excluded existing-overlap refs: #73836
- representative: #73836, currently closed in local store
- latest member update: 2026-06-15T19:04:12.226349Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #79681 Telegram typing indicator no longer stays visible during active agent work

Existing-overlap context refs:

- #73836 [Bug]: Control UI/Gateway responsiveness regression during active runs: UI reconnect stalls, Telegram typing gaps, heartbeat poll noise, and media mirror UX issues
