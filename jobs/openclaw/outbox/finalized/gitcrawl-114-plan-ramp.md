---
repo: openclaw/openclaw
cluster_id: gitcrawl-114-plan-ramp
mode: plan
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
  - "#86183"
  - "#86306"
  - "#89249"
  - "#89283"
  - "#89323"
cluster_refs:
  - "#86183"
  - "#86306"
  - "#89249"
  - "#89283"
  - "#89323"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "gitcrawl representative #89249 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 114 on 2026-06-14."
---

# Gitcrawl Cluster 114

Generated from local gitcrawl run cluster 114 for `openclaw/openclaw`.

Display title:

> [Bug]: Control UI session picker un-navigable when agent has many spawn-child sessions (sessions.list returns hasMore:true with nextOffset:null; Load more is a dead-end)

Cluster shape from gitcrawl:

- total members: 5
- issues: 2
- pull requests: 3
- open candidates in local store: 5
- representative: #89249, currently open in local store
- latest member update: 2026-06-14T04:46:07.002908Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #86183 [Bug]: Control UI session picker lists sessions from all agents because sessions.list is called without agentId in v2026.5.22
- #86306 fix(ui): pass agentId filter to session picker RPC call
- #89249 [Bug]: Control UI session picker un-navigable when agent has many spawn-child sessions (sessions.list returns hasMore:true with nextOffset:null; Load more is a dead-end)
- #89283 fix: include nextOffset in sessions JSON output
- #89323 fix(web-ui): skip hidden subagent picker pages
