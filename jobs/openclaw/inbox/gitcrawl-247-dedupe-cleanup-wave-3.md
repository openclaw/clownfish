---
repo: openclaw/openclaw
cluster_id: gitcrawl-247-dedupe-cleanup-wave-3
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
  - "#90941"
candidates:
  - "#90941"
  - "#90951"
cluster_refs:
  - "#90941"
  - "#90951"
overlap_policy: "exclude-existing"
existing_overlap_refs:
  - "#90942"
security_policy: central_security_only
import_security_policy: "skip-any"
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #90941 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 247 on 2026-06-16. Existing-overlap refs #90942 were excluded from actionable refs and kept as context only."
---

# Gitcrawl Cluster 247

Generated from local gitcrawl run cluster 247 for `openclaw/openclaw`.

Display title:

> doctor: sandbox setup script not found when launched via a symlinked bin

Cluster shape from gitcrawl:

- total members: 3
- issues: 2
- pull requests: 1
- open candidates in local store: 2
- excluded existing-overlap refs: #90942
- representative: #90941, currently open in local store
- latest member update: 2026-06-15T19:04:12.803833Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #90941 doctor: sandbox setup script not found when launched via a symlinked bin
- #90951 doctor: sandbox image auto-build unavailable for npm-package installs (setup scripts not shipped)

Existing-overlap context refs:

- #90942 [security-signal] fix(doctor): follow symlinked launcher when locating sandbox setup scripts
