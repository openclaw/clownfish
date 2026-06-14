---
repo: openclaw/openclaw
cluster_id: ghcrawl-156962-autonomous-smoke
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
  - "#36630"
candidates:
  - "#36630"
cluster_refs:
  - "#36630"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: true
allow_merge: true
allow_post_merge_close: true
require_fix_before_close: true
canonical_hint: "Live refresh on 2026-06-14 found #36630 open and mergeable; #56791 is closed context only. Worker must verify #36630 is still the best live canonical."
notes: "Generated from ghcrawl run cluster 156962 on 2026-04-26; live refreshed and promoted on 2026-06-14."
---

# GHCrawl Cluster 156962

Generated from local ghcrawl run cluster 156962 for `openclaw/openclaw`.

Display title:

> fix(signal): complete bidirectional quote-reply support

Cluster shape from ghcrawl:

- total members: 2
- issues: 0
- pull requests: 2
- open candidates in local store: 2
- open candidates after live refresh: 1
- representative: #36630, currently open after live refresh
- latest member update: 2026-04-24T18:56:19.672Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #56791 fix(signal): forward quote metadata to agent context

Open candidates:

- #36630 fix(signal): complete bidirectional quote-reply support
