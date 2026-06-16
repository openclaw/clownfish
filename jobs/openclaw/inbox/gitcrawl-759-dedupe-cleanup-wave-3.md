---
repo: openclaw/openclaw
cluster_id: gitcrawl-759-dedupe-cleanup-wave-3
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
  - "#88954"
candidates:
  - "#88954"
cluster_refs:
  - "#88954"
overlap_policy: "exclude-existing"
existing_overlap_refs:
  - "#89645"
security_policy: central_security_only
import_security_policy: "skip-any"
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #88954 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 759 on 2026-06-16. Existing-overlap refs #89645 were excluded from actionable refs and kept as context only."
---

# Gitcrawl Cluster 759

Generated from local gitcrawl run cluster 759 for `openclaw/openclaw`.

Display title:

> [Bug]: openclaw update --channel beta cmd couldn't get v2026.3.30 beta 4

Cluster shape from gitcrawl:

- total members: 2
- issues: 1
- pull requests: 1
- open candidates in local store: 1
- excluded existing-overlap refs: #89645
- representative: #88954, currently open in local store
- latest member update: 2026-06-15T19:04:12.810586Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #88954 [Bug]: openclaw update --channel beta cmd couldn't get v2026.3.30 beta 4

Existing-overlap context refs:

- #89645 fix(update): respect explicit beta channel without fallback to latest
