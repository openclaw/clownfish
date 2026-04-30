---
repo: openclaw/openclaw
cluster_id: gitcrawl-17200-dedupe-only-20260429d
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
  - "#63941"
candidates:
  - "#59666"
  - "#63877"
  - "#63941"
cluster_refs:
  - "#59666"
  - "#63877"
  - "#63941"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: false
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #63941 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 17200 on 2026-04-30."
---

# Gitcrawl Cluster 17200

Generated from local gitcrawl run cluster 17200 for `openclaw/openclaw`.

Display title:

> Fix: allow self-hosted Firecrawl baseUrl with http on private networks (Resolves #63877)

Cluster shape from gitcrawl:

- total members: 3
- issues: 1
- pull requests: 2
- open candidates in local store: 3
- representative: #63941, currently open in local store
- latest member update: 2026-04-28T03:19:26.019473548Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #59666 fix(firecrawl): allow self-hosted Firecrawl instances via baseUrl
- #63877 [Bug]: firecrawl_search fails with local, self-hosted Firecrawl service using http
- #63941 Fix: allow self-hosted Firecrawl baseUrl with http on private networks (Resolves #63877)
