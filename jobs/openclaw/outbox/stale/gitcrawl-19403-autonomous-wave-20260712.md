---
repo: openclaw/openclaw
cluster_id: gitcrawl-19403-autonomous-wave-20260712
mode: autonomous
allowed_actions:
  - comment
  - label
  - close
  - merge
blocked_actions:
  - fix
  - raise_pr
  - force_push
  - bypass_checks
require_human_for:
  - security_sensitive
  - failing_checks
  - conflicting_prs
  - unclear_canonical
  - broad_code_delta
canonical:
  - "#101172"
candidates:
  - "#101172"
  - "#101748"
cluster_refs:
  - "#101172"
  - "#101748"
overlap_policy: "exclude-existing"
security_policy: central_security_only
import_security_policy: "skip-any"
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: true
allow_post_merge_close: true
require_fix_before_close: true
canonical_hint: "gitcrawl representative #101172 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 19403 on 2026-07-12."
---

# Gitcrawl Cluster 19403

Generated from local gitcrawl run cluster 19403 for `openclaw/openclaw`.

Display title:

> Document the pull request workflow for Barnacle and ClawSweeper

Cluster shape from gitcrawl:

- total members: 2
- issues: 1
- pull requests: 1
- open candidates in local store: 2
- representative: #101172, currently open in local store
- latest member update: 2026-07-12T00:49:54.570272Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #101172 Document the pull request workflow for Barnacle and ClawSweeper
- #101748 docs: explain pull request automation workflow
