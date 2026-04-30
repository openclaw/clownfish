---
repo: openclaw/openclaw
cluster_id: gitcrawl-4849-dedupe-only-20260429d
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
  - "#41446"
candidates:
  - "#55644"
  - "#64257"
cluster_refs:
  - "#41446"
  - "#55644"
  - "#64257"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: false
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #41446 is closed; worker must verify whether an open canonical should replace it."
notes: "Generated from gitcrawl run cluster 4849 on 2026-04-30."
---

# Gitcrawl Cluster 4849

Generated from local gitcrawl run cluster 4849 for `openclaw/openclaw`.

Display title:

> security: add config/ to .gitignore to prevent credential leaks

Cluster shape from gitcrawl:

- total members: 3
- issues: 0
- pull requests: 3
- open candidates in local store: 2
- representative: #41446, currently closed in local store
- latest member update: 2026-04-26T00:46:52.358Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #41446 security: add config/ to .gitignore to prevent credential leaks

Open candidates:

- #55644 chore: add .history/ to .gitignore
- #64257 build: ignore generated docker-compose.sandbox.yml
