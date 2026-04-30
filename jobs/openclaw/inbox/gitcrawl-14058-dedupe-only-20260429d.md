---
repo: openclaw/openclaw
cluster_id: gitcrawl-14058-dedupe-only-20260429d
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
  - "#9256"
candidates:
  - "#9256"
  - "#18677"
  - "#23926"
  - "#45031"
  - "#57535"
cluster_refs:
  - "#9256"
  - "#18677"
  - "#23926"
  - "#45031"
  - "#57535"
  - "#61557"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: false
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #9256 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 14058 on 2026-04-30."
---

# Gitcrawl Cluster 14058

Generated from local gitcrawl run cluster 14058 for `openclaw/openclaw`.

Display title:

> Proposal: Security Gateway Framework for Third-Party Skill Installation

Cluster shape from gitcrawl:

- total members: 6
- issues: 6
- pull requests: 0
- open candidates in local store: 5
- representative: #9256, currently open in local store
- latest member update: 2026-04-29T22:37:45.881545762Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #61557 Feature Request: skill:install Hook for Pre-Install Security Vetting

Open candidates:

- #9256 Proposal: Security Gateway Framework for Third-Party Skill Installation
- #18677 Feature Proposal: Security Scan Hook API for skill:install
- #23926 [Feature]: skill:pre-install and skill:post-install Hook Events
- #45031 Feature: Built-in security scanning for skill installation
- #57535 Proposal: Add security warning for untrusted skills loaded from local sources
