---
repo: openclaw/openclaw
cluster_id: gitcrawl-17425-autonomous-smoke
mode: autonomous
allowed_actions:
  - comment
  - label
  - close
  - merge
  - fix
  - raise_pr
blocked_actions:
  - force_push
  - bypass_checks
require_human_for:
  - security_sensitive
  - failing_checks
  - conflicting_prs
  - unclear_canonical
  - broad_code_delta
canonical:
  - "#437"
candidates:
  - "#437"
  - "#845"
  - "#1142"
cluster_refs:
  - "#281"
  - "#282"
  - "#347"
  - "#437"
  - "#845"
  - "#1142"
  - "#1588"
  - "#1674"
  - "#1745"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: true
allow_merge: true
allow_post_merge_close: true
require_fix_before_close: true
canonical_hint: "gitcrawl representative #437 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 17425 on 2026-06-14."
---

# Gitcrawl Cluster 17425

Generated from local gitcrawl run cluster 17425 for `openclaw/openclaw`.

Display title:

> Account suspended without notice - 93 legitimate AgentPMT skills removed (false positive from ClawHavoc sweep)

Cluster shape from gitcrawl:

- total members: 9
- issues: 9
- pull requests: 0
- open candidates in local store: 3
- representative: #437, currently open in local store
- latest member update: 2026-04-30T10:08:30.274464079Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #281 Account 'autogame-17' suspended/shadowbanned - Top contributor (Feishu ecosystem) locked out
- #282 Account 'autogame-17' suspended/shadowbanned - Request for Review
- #347 Account banned/blocked without notice - popular skills deleted including 2k star'd github /last30days, login refreshes infinitely
- #1588 False positive ban — `guytogay` account locked after legitimate skill publish
- #1674 Account blocked after ClawHavoc sweep — 40+ legitimate skills deleted, unable to sign in
- #1745 Account @qiji0802 banned as false positive — legitimate skill publishing blocked

Open candidates:

- #437 Account suspended without notice - 93 legitimate AgentPMT skills removed (false positive from ClawHavoc sweep)
- #845 Account banned after test skill removal — request for review
- #1142 Account banned as false positive - published a2a communication skills, GitHub OAuth returns "Unauthorized"
