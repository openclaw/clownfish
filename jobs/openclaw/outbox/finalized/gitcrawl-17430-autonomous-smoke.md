---
repo: openclaw/openclaw
cluster_id: gitcrawl-17430-autonomous-smoke
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
  - "#187"
candidates:
  - "#170"
cluster_refs:
  - "#170"
  - "#179"
  - "#187"
  - "#293"
  - "#301"
  - "#303"
  - "#311"
  - "#312"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: true
allow_merge: true
allow_post_merge_close: true
require_fix_before_close: true
canonical_hint: "gitcrawl representative #187 is closed; worker must verify whether an open canonical should replace it."
notes: "Generated from gitcrawl run cluster 17430 on 2026-06-14."
---

# Gitcrawl Cluster 17430

Generated from local gitcrawl run cluster 17430 for `openclaw/openclaw`.

Display title:

> Publishing fails with "Server Error Called by client" and/or ClawHub shows a mismatched GitHub username.

Cluster shape from gitcrawl:

- total members: 8
- issues: 4
- pull requests: 4
- open candidates in local store: 1
- representative: #187, currently closed in local store
- latest member update: 2026-04-30T10:08:30.384051948Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #179 bugfix: #170 Sign-in broken after GitHub username change
- #187 Publishing fails with "Server Error Called by client" and/or ClawHub shows a mismatched GitHub username.
- #293 fix: sync handle on user ensure
- #301 Feature request: allow updating skill summary/description after publish
- #303 Bug: 'GitHub account lookup failed' after GitHub username rename
- #311 fix: sync GitHub profile on login to handle username renames (#303)
- #312 Devin/1771112524 skill metadata update

Open candidates:

- #170 Sign-in broken after GitHub username change
