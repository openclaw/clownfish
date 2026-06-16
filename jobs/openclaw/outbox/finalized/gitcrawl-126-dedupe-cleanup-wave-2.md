---
repo: openclaw/openclaw
cluster_id: gitcrawl-126-dedupe-cleanup-wave-2
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
  - "#92684"
candidates:
  - "#92684"
cluster_refs:
  - "#92684"
overlap_policy: "exclude-existing"
existing_overlap_refs:
  - "#92691"
  - "#92692"
  - "#92731"
security_policy: central_security_only
import_security_policy: "skip-any"
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #92684 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 126 on 2026-06-16. Existing-overlap refs #92691, #92692, #92731 were excluded from actionable refs and kept as context only."
---

# Gitcrawl Cluster 126

Generated from local gitcrawl run cluster 126 for `openclaw/openclaw`.

Display title:

> doctor over-warns on an empty top-level groupAllowFrom despite populated per-account allowlists (2026.6.5)

Cluster shape from gitcrawl:

- total members: 4
- issues: 1
- pull requests: 3
- open candidates in local store: 1
- excluded existing-overlap refs: #92691, #92692, #92731
- representative: #92684, currently open in local store
- latest member update: 2026-06-15T19:04:12.667088Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #92684 doctor over-warns on an empty top-level groupAllowFrom despite populated per-account allowlists (2026.6.5)

Existing-overlap context refs:

- #92691 fix(doctor): suppress false-positive empty-group-allowlist warning when all accounts have effective group allowlists
- #92692 fix(doctor): suppress false-positive group allowlist warning for parent-only channel records (#92684)
- #92731 fix(doctor): skip top-level group-allowlist scan when sub-accounts exist
