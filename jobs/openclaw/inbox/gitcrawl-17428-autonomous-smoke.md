---
repo: openclaw/openclaw
cluster_id: gitcrawl-17428-autonomous-smoke
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
  - "#23"
candidates:
  - "#23"
  - "#33"
  - "#51"
cluster_refs:
  - "#23"
  - "#24"
  - "#25"
  - "#33"
  - "#46"
  - "#47"
  - "#51"
  - "#57"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: true
allow_merge: true
allow_post_merge_close: true
require_fix_before_close: true
canonical_hint: "gitcrawl representative #23 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 17428 on 2026-06-14."
---

# Gitcrawl Cluster 17428

Generated from local gitcrawl run cluster 17428 for `openclaw/openclaw`.

Display title:

> Missing undici dependency causes ERR_MODULE_NOT_FOUND on Node.js

Cluster shape from gitcrawl:

- total members: 8
- issues: 5
- pull requests: 3
- open candidates in local store: 3
- representative: #23, currently open in local store
- latest member update: 2026-04-30T10:08:30.44392918Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #24 fix: add missing undici dependency
- #25 Missing undici dependency causes ERR_MODULE_NOT_FOUND
- #46 Missing undici dependency in package.json causes ERR_MODULE_NOT_FOUND on fresh install
- #47 docs: document undici dependency fix in CHANGELOG
- #57 accidental PR creation by moltbot being too eager to get this fixed

Open candidates:

- #23 Missing undici dependency causes ERR_MODULE_NOT_FOUND on Node.js
- #33 Missing 'undici' dependency causes ERR_MODULE_NOT_FOUND
- #51 clawdhub@0.3.0 on npm missing dependency 'undici' (ERR_MODULE_NOT_FOUND)
