---
repo: openclaw/openclaw
cluster_id: gitcrawl-818-dedupe-cleanup-wave-3
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
  - "#74767"
candidates:
  - "#74767"
  - "#91384"
cluster_refs:
  - "#74767"
  - "#91384"
overlap_policy: "exclude-existing"
security_policy: central_security_only
import_security_policy: "skip-any"
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #74767 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 818 on 2026-06-16."
---

# Gitcrawl Cluster 818

Generated from local gitcrawl run cluster 818 for `openclaw/openclaw`.

Display title:

> [Bug]: Feishu streaming card messages not searchable — interactive card content not indexed by Feishu search

Cluster shape from gitcrawl:

- total members: 2
- issues: 2
- pull requests: 0
- open candidates in local store: 2
- representative: #74767, currently open in local store
- latest member update: 2026-06-15T19:04:12.791487Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #74767 [Bug]: Feishu streaming card messages not searchable — interactive card content not indexed by Feishu search
- #91384 [Feishu] Regression since #88276: default renderMode forces plain replies into (non-searchable) streaming cards
