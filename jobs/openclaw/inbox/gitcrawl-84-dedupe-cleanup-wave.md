---
repo: openclaw/openclaw
cluster_id: gitcrawl-84-dedupe-cleanup-wave
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
  - "#90271"
candidates:
  - "#90215"
  - "#90217"
  - "#90266"
  - "#90271"
  - "#90273"
  - "#90275"
cluster_refs:
  - "#90215"
  - "#90217"
  - "#90266"
  - "#90271"
  - "#90273"
  - "#90275"
overlap_policy: "skip-full"
security_policy: central_security_only
import_security_policy: "skip-any"
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #90271 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 84 on 2026-06-16."
---

# Gitcrawl Cluster 84

Generated from local gitcrawl run cluster 84 for `openclaw/openclaw`.

Display title:

> test: make fs-safe symlink tests compatible with Windows

Cluster shape from gitcrawl:

- total members: 6
- issues: 0
- pull requests: 6
- open candidates in local store: 6
- representative: #90271, currently open in local store
- latest member update: 2026-06-15T19:04:12.247142Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #90215 test: detect file symlink support dynamically in canvas tool test
- #90217 test: make doctor state integrity symlink test robust on Windows
- #90266 test: detect file symlink support dynamically in json-file tests
- #90271 test: make fs-safe symlink tests compatible with Windows
- #90273 test: make fs-safe hardlink tests compatible with Windows
- #90275 test: make install-safe-path symlink tests compatible with Windows
