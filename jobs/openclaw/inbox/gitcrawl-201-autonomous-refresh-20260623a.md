---
repo: openclaw/openclaw
cluster_id: gitcrawl-201-autonomous-refresh-20260623a
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
  - "#92474"
candidates:
  - "#92474"
cluster_refs:
  - "#92474"
overlap_policy: "exclude-existing"
existing_overlap_refs:
  - "#92484"
  - "#92491"
security_policy: central_security_only
import_security_policy: "skip-full"
security_sensitive: false
allow_instant_close: true
allow_fix_pr: true
allow_merge: true
allow_post_merge_close: true
require_fix_before_close: true
canonical_hint: "gitcrawl representative #92474 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 201 on 2026-06-23. Existing-overlap refs #92484, #92491 were excluded from actionable refs and kept as context only."
---

# Gitcrawl Cluster 201

Generated from local gitcrawl run cluster 201 for `openclaw/openclaw`.

Display title:

> [Bug]: PYTHONPATH in MCP stdio env config floods gateway journal with per-spawn warnings

Cluster shape from gitcrawl:

- total members: 3
- issues: 1
- pull requests: 2
- open candidates in local store: 1
- excluded existing-overlap refs: #92484, #92491
- representative: #92474, currently open in local store
- latest member update: 2026-06-19T02:13:00.741144Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #92474 [Bug]: PYTHONPATH in MCP stdio env config floods gateway journal with per-spawn warnings

Existing-overlap context refs:

- #92484 fix(mcp): reject blocked stdio env keys at write time and warn once per server
- #92491 fix(mcp): reject blocked stdio env keys at MCP config write time (fixes #92474)
