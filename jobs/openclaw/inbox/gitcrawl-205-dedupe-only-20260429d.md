---
repo: openclaw/openclaw
cluster_id: gitcrawl-205-dedupe-only-20260429d
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
  - "#70371"
candidates:
  - "#70371"
  - "#70394"
cluster_refs:
  - "#70371"
  - "#70394"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: false
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #70371 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 205 on 2026-04-30."
---

# Gitcrawl Cluster 205

Generated from local gitcrawl run cluster 205 for `openclaw/openclaw`.

Display title:

> openclaw boot: invalid plugin config crashes the whole worker (no graceful degradation)

Cluster shape from gitcrawl:

- total members: 2
- issues: 1
- pull requests: 1
- open candidates in local store: 2
- representative: #70371, currently open in local store
- latest member update: 2026-04-24T18:56:17.891Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #70371 openclaw boot: invalid plugin config crashes the whole worker (no graceful degradation)
- #70394 fix(plugins): degrade gracefully instead of crashing worker on invalid config
