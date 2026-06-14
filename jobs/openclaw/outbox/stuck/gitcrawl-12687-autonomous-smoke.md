---
repo: openclaw/openclaw
cluster_id: gitcrawl-12687-autonomous-smoke
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
  - "#67332"
candidates:
  - "#67331"
  - "#67332"
  - "#67333"
cluster_refs:
  - "#67331"
  - "#67332"
  - "#67333"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: true
allow_merge: true
allow_post_merge_close: true
require_fix_before_close: true
canonical_hint: "gitcrawl representative #67332 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 12687 on 2026-06-14."
---

# Gitcrawl Cluster 12687

Generated from local gitcrawl run cluster 12687 for `openclaw/openclaw`.

Display title:

> agents: wire task/team tools with owner-only authorization

Cluster shape from gitcrawl:

- total members: 3
- issues: 0
- pull requests: 3
- open candidates in local store: 3
- representative: #67332, currently open in local store
- latest member update: 2026-06-13T05:03:47.36424345Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #67331 agents: standardize fs permission_denied and harden file mutations
- #67332 agents: wire task/team tools with owner-only authorization
- #67333 doctor: add sandbox readiness probe and claw-code parity harness
