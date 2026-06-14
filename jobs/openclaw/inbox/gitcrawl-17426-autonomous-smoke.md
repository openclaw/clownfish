---
repo: openclaw/openclaw
cluster_id: gitcrawl-17426-autonomous-smoke
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
  - "#72"
candidates:
  - "#72"
  - "#99"
  - "#100"
  - "#115"
  - "#702"
cluster_refs:
  - "#41"
  - "#72"
  - "#73"
  - "#99"
  - "#100"
  - "#101"
  - "#115"
  - "#121"
  - "#702"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: true
allow_merge: true
allow_post_merge_close: true
require_fix_before_close: true
canonical_hint: "gitcrawl representative #72 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 17426 on 2026-06-14."
---

# Gitcrawl Cluster 17426

Generated from local gitcrawl run cluster 17426 for `openclaw/openclaw`.

Display title:

> clawhub login --token returns Unauthorized for valid tokens

Cluster shape from gitcrawl:

- total members: 9
- issues: 6
- pull requests: 3
- open candidates in local store: 5
- representative: #72, currently open in local store
- latest member update: 2026-04-30T10:08:30.408687853Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #41 CLI login returns Unauthorized despite successful browser auth
- #73 fix(cli): use www.clawhub.ai as default registry
- #101 fix: use www.clawhub.ai as default registry to prevent auth header stripping on redirect
- #121 fix: use www.clawhub.ai in well-known discovery config

Open candidates:

- #72 clawhub login --token returns Unauthorized for valid tokens
- #99 clawhub login fails with 'Unauthorized' after browser auth completes
- #100 CLI: Auth fails due to redirect from clawhub.ai to www.clawhub.ai
- #115 Unauthorized error when publishing despite successful login
- #702 Publish returns Unauthorized after successful login (CLI v0.7.0)
