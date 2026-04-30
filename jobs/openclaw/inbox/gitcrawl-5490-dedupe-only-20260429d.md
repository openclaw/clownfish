---
repo: openclaw/openclaw
cluster_id: gitcrawl-5490-dedupe-only-20260429d
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
  - "#43658"
candidates:
  - "#43658"
  - "#43659"
cluster_refs:
  - "#43658"
  - "#43659"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: false
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #43658 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 5490 on 2026-04-30."
---

# Gitcrawl Cluster 5490

Generated from local gitcrawl run cluster 5490 for `openclaw/openclaw`.

Display title:

> GitHub Copilot auth profile rotation ineffective — all profiles share single cached API token

Cluster shape from gitcrawl:

- total members: 2
- issues: 1
- pull requests: 1
- open candidates in local store: 2
- representative: #43658, currently open in local store
- latest member update: 2026-04-28T18:04:42.83754573Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #43658 GitHub Copilot auth profile rotation ineffective — all profiles share single cached API token
- #43659 fix: copilot token cache ignores profile rotation on rate limit
