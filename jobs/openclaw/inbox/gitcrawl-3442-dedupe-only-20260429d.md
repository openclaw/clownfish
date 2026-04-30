---
repo: openclaw/openclaw
cluster_id: gitcrawl-3442-dedupe-only-20260429d
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
  - "#65785"
candidates:
  - "#65785"
  - "#65828"
cluster_refs:
  - "#65785"
  - "#65828"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: false
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #65785 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 3442 on 2026-04-30."
---

# Gitcrawl Cluster 3442

Generated from local gitcrawl run cluster 3442 for `openclaw/openclaw`.

Display title:

> fix(minimax): allow web_search to use MINIMAX_OAUTH_TOKEN

Cluster shape from gitcrawl:

- total members: 2
- issues: 0
- pull requests: 2
- open candidates in local store: 2
- representative: #65785, currently open in local store
- latest member update: 2026-04-28T22:51:07.237175895Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #65785 fix(minimax): allow web_search to use MINIMAX_OAUTH_TOKEN
- #65828 fix(minimax): include MINIMAX_API_KEY in web search auto-detection and onboarding
