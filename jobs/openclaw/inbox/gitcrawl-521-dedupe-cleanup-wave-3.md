---
repo: openclaw/openclaw
cluster_id: gitcrawl-521-dedupe-cleanup-wave-3
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
  - "#58570"
candidates:
  - "#58570"
cluster_refs:
  - "#58570"
overlap_policy: "exclude-existing"
existing_overlap_refs:
  - "#58640"
security_policy: central_security_only
import_security_policy: "skip-any"
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #58570 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 521 on 2026-06-16. Existing-overlap refs #58640 were excluded from actionable refs and kept as context only."
---

# Gitcrawl Cluster 521

Generated from local gitcrawl run cluster 521 for `openclaw/openclaw`.

Display title:

> Gateway should log warning when message is dropped due to allow: false

Cluster shape from gitcrawl:

- total members: 2
- issues: 1
- pull requests: 1
- open candidates in local store: 1
- excluded existing-overlap refs: #58640
- representative: #58570, currently open in local store
- latest member update: 2026-06-15T19:04:12.504742Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #58570 Gateway should log warning when message is dropped due to allow: false

Existing-overlap context refs:

- #58640 fix(slack): add warning log when channel is dropped due to allow:false
