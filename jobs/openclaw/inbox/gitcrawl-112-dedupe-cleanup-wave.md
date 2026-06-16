---
repo: openclaw/openclaw
cluster_id: gitcrawl-112-dedupe-cleanup-wave
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
  - "#90890"
candidates:
  - "#90890"
  - "#90931"
  - "#90932"
  - "#91447"
  - "#91533"
cluster_refs:
  - "#90890"
  - "#90931"
  - "#90932"
  - "#91447"
  - "#91533"
overlap_policy: "skip-full"
security_policy: central_security_only
import_security_policy: "skip-any"
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #90890 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 112 on 2026-06-16."
---

# Gitcrawl Cluster 112

Generated from local gitcrawl run cluster 112 for `openclaw/openclaw`.

Display title:

> [Bug]: You cannot give an avatar to a specific agent in settings

Cluster shape from gitcrawl:

- total members: 5
- issues: 1
- pull requests: 4
- open candidates in local store: 5
- representative: #90890, currently open in local store
- latest member update: 2026-06-15T19:04:12.804497Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #90890 [Bug]: You cannot give an avatar to a specific agent in settings
- #90931 fix(ui): scope local assistant avatar overrides per agent (#90890)
- #90932 fix(ui): scope local assistant avatar override to agent ID (fixes #90890)
- #91447 fix(ui): scope local assistant avatar override to agent ID (fixes #90890)
- #91533 fix(ui): scope avatar storage per agent ID
