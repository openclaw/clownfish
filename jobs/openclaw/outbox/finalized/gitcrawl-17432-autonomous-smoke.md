---
repo: openclaw/openclaw
cluster_id: gitcrawl-17432-autonomous-smoke
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
  - "#131"
candidates:
  - "#131"
  - "#134"
cluster_refs:
  - "#131"
  - "#132"
  - "#134"
  - "#148"
  - "#150"
  - "#274"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: true
allow_merge: true
allow_post_merge_close: true
require_fix_before_close: true
canonical_hint: "gitcrawl representative #131 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 17432 on 2026-06-14."
---

# Gitcrawl Cluster 17432

Generated from local gitcrawl run cluster 17432 for `openclaw/openclaw`.

Display title:

> Skill disappeared from search after update - Server Error on publish

Cluster shape from gitcrawl:

- total members: 6
- issues: 5
- pull requests: 1
- open candidates in local store: 2
- representative: #131, currently open in local store
- latest member update: 2026-04-30T10:08:30.423874785Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #132 Skill disappeared
- #148 Skill repeatedly soft-deleted after version updates (email-to-calendar)
- #150 Skill soft-deleted after name field change
- #274 fix: preserve moderation status when updating existing skills

Open candidates:

- #131 Skill disappeared from search after update - Server Error on publish
- #134 Published skill disappears immediately - skills:publishVersion Server Error
