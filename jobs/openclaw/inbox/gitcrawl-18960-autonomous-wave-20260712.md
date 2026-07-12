---
repo: openclaw/openclaw
cluster_id: gitcrawl-18960-autonomous-wave-20260712
mode: autonomous
allowed_actions:
  - comment
  - label
  - close
  - merge
  - fix
  - raise_pr
  - force_push
blocked_actions:
  - bypass_checks
require_human_for:
  - security_sensitive
  - failing_checks
  - conflicting_prs
  - unclear_canonical
  - broad_code_delta
canonical:
  - "#79859"
candidates:
  - "#79859"
  - "#97601"
cluster_refs:
  - "#79859"
  - "#97601"
overlap_policy: "exclude-existing"
security_policy: central_security_only
import_security_policy: "skip-any"
security_sensitive: false
allow_instant_close: true
allow_fix_pr: true
allow_merge: true
allow_post_merge_close: true
require_fix_before_close: true
canonical_hint: "gitcrawl representative #79859 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 18960 on 2026-07-12."
---

# Gitcrawl Cluster 18960

Generated from local gitcrawl run cluster 18960 for `openclaw/openclaw`.

Display title:

> feat(tui): add recording-friendly quiet status mode

Cluster shape from gitcrawl:

- total members: 2
- issues: 2
- pull requests: 0
- open candidates in local store: 2
- representative: #79859, currently open in local store
- latest member update: 2026-07-12T00:49:56.292805Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #79859 feat(tui): add recording-friendly quiet status mode
- #97601 Add config toggle to suppress chat-visible fast auto-mode status updates
