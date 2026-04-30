---
repo: openclaw/openclaw
cluster_id: gitcrawl-3399-dedupe-only-20260429d
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
  - "#63481"
candidates:
  - "#63475"
  - "#63481"
  - "#67466"
cluster_refs:
  - "#63475"
  - "#63481"
  - "#67466"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: false
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #63481 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 3399 on 2026-04-30."
---

# Gitcrawl Cluster 3399

Generated from local gitcrawl run cluster 3399 for `openclaw/openclaw`.

Display title:

> fix(feishu): serialise startup bot-info probes across concurrent accounts

Cluster shape from gitcrawl:

- total members: 3
- issues: 1
- pull requests: 2
- open candidates in local store: 3
- representative: #63481, currently open in local store
- latest member update: 2026-04-28T07:04:52.106215404Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #63475 [Bug] Feishu multi-account startup: bot info probe timeout due to concurrent API requests
- #63481 fix(feishu): serialise startup bot-info probes across concurrent accounts
- #67466 fix(feishu): reduce startup latency by parallelizing probe and capping timeouts
