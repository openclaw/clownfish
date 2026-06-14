---
repo: openclaw/openclaw
cluster_id: gitcrawl-17441-autonomous-smoke
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
  - "#629"
candidates:
  - "#762"
  - "#824"
  - "#1764"
cluster_refs:
  - "#629"
  - "#762"
  - "#824"
  - "#1764"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: true
allow_merge: true
allow_post_merge_close: true
require_fix_before_close: true
canonical_hint: "gitcrawl representative #629 is closed; worker must verify whether an open canonical should replace it."
notes: "Generated from gitcrawl run cluster 17441 on 2026-06-14."
---

# Gitcrawl Cluster 17441

Generated from local gitcrawl run cluster 17441 for `openclaw/openclaw`.

Display title:

> ClawHub's `Sign in with Github` is not woking for me.

Cluster shape from gitcrawl:

- total members: 4
- issues: 4
- pull requests: 0
- open candidates in local store: 3
- representative: #629, currently closed in local store
- latest member update: 2026-04-30T10:08:29.801029228Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #629 ClawHub's `Sign in with Github` is not woking for me.

Open candidates:

- #762 ClawHub's is not woking for me.Sign in with Github
- #824 ClawHub's Sign in with Github is not woking for me
- #1764 Some people couldn't login clawhub normally over github auth.
