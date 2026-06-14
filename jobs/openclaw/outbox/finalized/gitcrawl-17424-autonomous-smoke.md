---
repo: openclaw/openclaw
cluster_id: gitcrawl-17424-autonomous-smoke
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
  - "#1603"
candidates:
  - "#1431"
  - "#1635"
  - "#1814"
  - "#1840"
cluster_refs:
  - "#167"
  - "#168"
  - "#1303"
  - "#1304"
  - "#1344"
  - "#1388"
  - "#1431"
  - "#1562"
  - "#1603"
  - "#1604"
  - "#1635"
  - "#1814"
  - "#1840"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: true
allow_merge: true
allow_post_merge_close: true
require_fix_before_close: true
canonical_hint: "gitcrawl representative #1603 is closed; worker must verify whether an open canonical should replace it."
notes: "Generated from gitcrawl run cluster 17424 on 2026-06-14."
---

# Gitcrawl Cluster 17424

Generated from local gitcrawl run cluster 17424 for `openclaw/openclaw`.

Display title:

> feat: add org support to skill ownership transfers

Cluster shape from gitcrawl:

- total members: 13
- issues: 4
- pull requests: 9
- open candidates in local store: 4
- representative: #1603, currently closed in local store
- latest member update: 2026-04-30T10:08:30.228217432Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #167 RFC: Skill ownership, transfer, and orphan handling
- #168 feat: add skill ownership transfer
- #1303 Skill transfer doesn't update ownerPublisherId, causing redirect to old owner
- #1304 fix: update ownerPublisherId and slug aliases on skill transfer
- #1344 fix: align transferred skill publisher ownership
- #1388 feat: add ownership transfer for packages and extend skill transfers with org support
- #1562 fix: allow skill owner to move skill to an org acct while publishing existing skill
- #1603 feat: add org support to skill ownership transfers
- #1604 feat: add package ownership transfers

Open candidates:

- #1431 Cannot change an existing skill's publisher/owner to an organization
- #1635 feat: synthesize ownership transfer support for skills, packages, and orgs
- #1814 Allow publishing new versions of org-owned skills via REST/CLI
- #1840 fix: support org-owned skill publishes via API
