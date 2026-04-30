---
repo: openclaw/openclaw
cluster_id: gitcrawl-11247-dedupe-only-20260429d
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
  - "#62981"
candidates:
  - "#62981"
  - "#66646"
cluster_refs:
  - "#62981"
  - "#66646"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: false
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #62981 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 11247 on 2026-04-30."
---

# Gitcrawl Cluster 11247

Generated from local gitcrawl run cluster 11247 for `openclaw/openclaw`.

Display title:

> session file locked when gateway times out and falls back to embedded runner

Cluster shape from gitcrawl:

- total members: 2
- issues: 2
- pull requests: 0
- open candidates in local store: 2
- representative: #62981, currently open in local store
- latest member update: 2026-04-28T19:37:21.879687975Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #62981 session file locked when gateway times out and falls back to embedded runner
- #66646 [Bug]: Session file lock errors cascade through model fallback chain
