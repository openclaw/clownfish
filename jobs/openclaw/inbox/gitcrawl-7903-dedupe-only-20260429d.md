---
repo: openclaw/openclaw
cluster_id: gitcrawl-7903-dedupe-only-20260429d
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
  - "#51911"
candidates:
  - "#51911"
  - "#52912"
cluster_refs:
  - "#51911"
  - "#52912"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: false
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #51911 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 7903 on 2026-04-30."
---

# Gitcrawl Cluster 7903

Generated from local gitcrawl run cluster 7903 for `openclaw/openclaw`.

Display title:

> Anthropic setup-token onboarding path has multiple failure modes (docs gap, credential propagation, multi-agent sync)

Cluster shape from gitcrawl:

- total members: 2
- issues: 1
- pull requests: 1
- open candidates in local store: 2
- representative: #51911, currently open in local store
- latest member update: 2026-04-29T23:07:50.589967729Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #51911 Anthropic setup-token onboarding path has multiple failure modes (docs gap, credential propagation, multi-agent sync)
- #52912 Fix Anthropic setup-token sibling auth sync
