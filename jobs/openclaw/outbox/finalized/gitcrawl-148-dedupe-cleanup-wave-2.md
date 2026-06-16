---
repo: openclaw/openclaw
cluster_id: gitcrawl-148-dedupe-cleanup-wave-2
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
  - "#89232"
cluster_refs:
  - "#89232"
overlap_policy: "exclude-existing"
existing_overlap_refs:
  - "#89260"
  - "#89282"
  - "#89514"
security_policy: central_security_only
import_security_policy: "skip-any"
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #89260 is already owned by an existing job; worker must choose the best live canonical from the remaining open refs."
notes: "Generated from gitcrawl run cluster 148 on 2026-06-16. Existing-overlap refs #89260, #89282, #89514 were excluded from actionable refs and kept as context only."
---

# Gitcrawl Cluster 148

Generated from local gitcrawl run cluster 148 for `openclaw/openclaw`.

Display title:

> fix(doctor): separate platform-incompatible skills from missing requirements

Cluster shape from gitcrawl:

- total members: 4
- issues: 1
- pull requests: 3
- open candidates in local store: 1
- excluded existing-overlap refs: #89260, #89282, #89514
- representative: #89260, currently open in local store
- latest member update: 2026-06-15T19:04:11.581146Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #89232 [Bug]: openclaw doctor reports platform-incompatible skills (macOS-only / Linux-only) as 'missing requirements' on incompatible hosts

Existing-overlap context refs:

- #89260 fix(doctor): separate platform-incompatible skills from missing requirements
- #89282 fix: skip platform-incompatible skills in doctor warnings
- #89514 fix(doctor): exclude platform-incompatible skills from missing requirements
