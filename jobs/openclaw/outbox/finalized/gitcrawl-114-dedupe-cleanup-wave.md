---
repo: openclaw/openclaw
cluster_id: gitcrawl-114-dedupe-cleanup-wave
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
  - "#89249"
candidates:
  - "#89249"
  - "#89283"
  - "#89323"
cluster_refs:
  - "#86183"
  - "#86306"
  - "#89249"
  - "#89283"
  - "#89323"
overlap_policy: "skip-full"
security_policy: central_security_only
import_security_policy: "skip-any"
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #89249 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 114 on 2026-06-16."
---

# Gitcrawl Cluster 114

Generated from local gitcrawl run cluster 114 for `openclaw/openclaw`.

Display title:

> [Bug]: Control UI session picker un-navigable when agent has many spawn-child sessions (sessions.list returns hasMore:true with nextOffset:null; Load more is a dead-end)

Cluster shape from gitcrawl:

- total members: 5
- issues: 2
- pull requests: 3
- open candidates in local store: 3
- representative: #89249, currently open in local store
- latest member update: 2026-06-15T19:04:11.565045Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #86183 [Bug]: Control UI session picker lists sessions from all agents because sessions.list is called without agentId in v2026.5.22
- #86306 fix(ui): pass agentId filter to session picker RPC call

Open candidates:

- #89249 [Bug]: Control UI session picker un-navigable when agent has many spawn-child sessions (sessions.list returns hasMore:true with nextOffset:null; Load more is a dead-end)
- #89283 fix: include nextOffset in sessions JSON output
- #89323 fix(web-ui): skip hidden subagent picker pages
