---
repo: openclaw/openclaw
cluster_id: gitcrawl-6049-dedupe-only-20260429d
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
  - "#45569"
candidates:
  - "#45569"
  - "#45602"
cluster_refs:
  - "#45569"
  - "#45602"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: false
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #45569 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 6049 on 2026-04-30."
---

# Gitcrawl Cluster 6049

Generated from local gitcrawl run cluster 6049 for `openclaw/openclaw`.

Display title:

> [Bug]: /status in the web ui needs <enter> pressed twice

Cluster shape from gitcrawl:

- total members: 2
- issues: 1
- pull requests: 1
- open candidates in local store: 2
- representative: #45569, currently open in local store
- latest member update: 2026-04-28T18:04:42.813083331Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #45569 [Bug]: /status in the web ui needs <enter> pressed twice
- #45602 fix(ui): /status slash command requires two Enter presses (#45569)
