---
repo: openclaw/openclaw
cluster_id: gitcrawl-19509-autonomous-wave-20260712
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
  - "#103346"
candidates:
  - "#103346"
  - "#103348"
cluster_refs:
  - "#103346"
  - "#103348"
overlap_policy: "exclude-existing"
security_policy: central_security_only
import_security_policy: "skip-any"
security_sensitive: false
allow_instant_close: true
allow_fix_pr: true
allow_merge: true
allow_post_merge_close: true
require_fix_before_close: true
canonical_hint: "gitcrawl representative #103346 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 19509 on 2026-07-12."
---

# Gitcrawl Cluster 19509

Generated from local gitcrawl run cluster 19509 for `openclaw/openclaw`.

Display title:

> [Feedback]: 用户要求退还因AI未能完成桌面操控任务而消耗的积分

Cluster shape from gitcrawl:

- total members: 2
- issues: 2
- pull requests: 0
- open candidates in local store: 2
- representative: #103346, currently open in local store
- latest member update: 2026-07-12T00:49:53.472231Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #103346 [Feedback]: 用户要求退还因AI未能完成桌面操控任务而消耗的积分
- #103348 [Feedback] MuMuClaw积分退还请求 - AI桌面操控任务未完成
