---
repo: openclaw/openclaw
cluster_id: gitcrawl-12738-dedupe-only-20260429d
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
  - "#67488"
candidates:
  - "#67488"
  - "#67551"
cluster_refs:
  - "#67488"
  - "#67551"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: false
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #67488 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 12738 on 2026-04-30."
---

# Gitcrawl Cluster 12738

Generated from local gitcrawl run cluster 12738 for `openclaw/openclaw`.

Display title:

> Cron job result serialization fails on special characters in edit tool arguments

Cluster shape from gitcrawl:

- total members: 2
- issues: 1
- pull requests: 1
- open candidates in local store: 2
- representative: #67488, currently open in local store
- latest member update: 2026-04-28T07:04:52.104213682Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #67488 Cron job result serialization fails on special characters in edit tool arguments
- #67551 Fix #67488: Handle Unicode smart quotes in tool call argument JSON
