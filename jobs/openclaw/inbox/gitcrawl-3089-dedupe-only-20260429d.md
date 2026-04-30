---
repo: openclaw/openclaw
cluster_id: gitcrawl-3089-dedupe-only-20260429d
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
  - "#51124"
candidates:
  - "#51124"
  - "#68850"
cluster_refs:
  - "#51124"
  - "#68850"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: false
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #51124 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 3089 on 2026-04-30."
---

# Gitcrawl Cluster 3089

Generated from local gitcrawl run cluster 3089 for `openclaw/openclaw`.

Display title:

> fix(ui): clean up session selector labels for Telegram sessions

Cluster shape from gitcrawl:

- total members: 2
- issues: 0
- pull requests: 2
- open candidates in local store: 2
- representative: #51124, currently open in local store
- latest member update: 2026-04-28T18:04:42.601446835Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #51124 fix(ui): clean up session selector labels for Telegram sessions
- #68850 fix(ui): clean synthetic session selector labels
