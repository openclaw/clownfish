---
repo: openclaw/openclaw
cluster_id: gitcrawl-188-dedupe-cleanup-wave-2
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
  - "#41609"
candidates:
  - "#41609"
cluster_refs:
  - "#41609"
overlap_policy: "exclude-existing"
existing_overlap_refs:
  - "#60383"
  - "#73203"
security_policy: central_security_only
import_security_policy: "skip-any"
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #41609 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 188 on 2026-06-16. Existing-overlap refs #60383, #73203 were excluded from actionable refs and kept as context only."
---

# Gitcrawl Cluster 188

Generated from local gitcrawl run cluster 188 for `openclaw/openclaw`.

Display title:

> [Feishu] Interactive Card message content parsing missing

Cluster shape from gitcrawl:

- total members: 3
- issues: 1
- pull requests: 2
- open candidates in local store: 1
- excluded existing-overlap refs: #60383, #73203
- representative: #41609, currently open in local store
- latest member update: 2026-06-15T19:04:12.641835Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #41609 [Feishu] Interactive Card message content parsing missing

Existing-overlap context refs:

- #60383 fix(feishu): parse interactive card post-format fallback content
- #73203 fix(feishu): support text tag and nested arrays in interactive card parsing
