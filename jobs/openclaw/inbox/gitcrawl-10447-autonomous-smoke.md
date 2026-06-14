---
repo: openclaw/openclaw
cluster_id: gitcrawl-10447-autonomous-smoke
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
canonical:
  - "#60409"
candidates:
  - "#45003"
cluster_refs:
  - "#45003"
  - "#56131"
  - "#60409"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: true
allow_merge: true
allow_post_merge_close: true
require_fix_before_close: true
canonical_hint: "gitcrawl representative #60409 is closed; worker must verify whether an open canonical should replace it."
notes: "Generated from gitcrawl run cluster 10447 on 2026-06-14."
---

# Gitcrawl Cluster 10447

Generated from local gitcrawl run cluster 10447 for `openclaw/openclaw`.

Display title:

> fix(session): fall back to reset archive in chat.history when primary transcript is missing

Cluster shape from gitcrawl:

- total members: 3
- issues: 2
- pull requests: 1
- open candidates in local store: 1
- representative: #60409, currently closed in local store
- latest member update: 2026-06-14T04:21:17.844914661Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #56131 Bug: session reset archives are not discoverable via sessions_history, breaking context recovery after reset
- #60409 fix(session): fall back to reset archive in chat.history when primary transcript is missing

Open candidates:

- #45003 [Feature]: Script to restore session history archived by new daily-reset mechanism (introduced v2026.2+)
