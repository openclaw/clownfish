---
repo: openclaw/openclaw
cluster_id: gitcrawl-11370-dedupe-only-20260429d
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
  - "#63308"
candidates:
  - "#63308"
  - "#64699"
cluster_refs:
  - "#63308"
  - "#64699"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: false
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #63308 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 11370 on 2026-04-30."
---

# Gitcrawl Cluster 11370

Generated from local gitcrawl run cluster 11370 for `openclaw/openclaw`.

Display title:

> sessions_send schema encourages invalid sessionKey+label calls

Cluster shape from gitcrawl:

- total members: 2
- issues: 2
- pull requests: 0
- open candidates in local store: 2
- representative: #63308, currently open in local store
- latest member update: 2026-04-27T22:51:29.097667663Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #63308 sessions_send schema encourages invalid sessionKey+label calls
- #64699 [Bug]: sessions_send unexpectedly injects label, causing mutual-exclusion error with sessionKey
