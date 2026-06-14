---
repo: openclaw/openclaw
cluster_id: gitcrawl-13245-autonomous-smoke
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
  - "#69066"
candidates:
  - "#43786"
cluster_refs:
  - "#43786"
  - "#50751"
  - "#69066"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: true
allow_merge: true
allow_post_merge_close: true
require_fix_before_close: true
canonical_hint: "gitcrawl representative #69066 is closed; worker must verify whether an open canonical should replace it."
notes: "Generated from gitcrawl run cluster 13245 on 2026-06-14."
---

# Gitcrawl Cluster 13245

Generated from local gitcrawl run cluster 13245 for `openclaw/openclaw`.

Display title:

> [RFC] Separate internal service identity from user auth in OpenClaw gateway

Cluster shape from gitcrawl:

- total members: 3
- issues: 2
- pull requests: 1
- open candidates in local store: 1
- representative: #69066, currently closed in local store
- latest member update: 2026-06-13T22:29:01.758571137Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #50751 fix(cli): resolve gateway host from bind mode and surface auth hint on silent disconnect
- #69066 [RFC] Separate internal service identity from user auth in OpenClaw gateway

Open candidates:

- #43786 [Feature]: auth mode  = none is required
