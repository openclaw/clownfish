---
repo: openclaw/openclaw
cluster_id: gitcrawl-86-bulk-plan-20260615-a
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
  - "#80847"
candidates:
  - "#77826"
  - "#80847"
  - "#81857"
  - "#82562"
  - "#84242"
  - "#89173"
cluster_refs:
  - "#77826"
  - "#80847"
  - "#81857"
  - "#82562"
  - "#84242"
  - "#89173"
overlap_policy: "exclude-existing"
security_policy: central_security_only
import_security_policy: "skip-full"
security_sensitive: false
security_signal_refs:
  - "#77826"
  - "#81857"
  - "#82562"
canonical_hint: "gitcrawl representative #80847 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 86 on 2026-06-15. Security-signal refs #77826, #81857, #82562 must be routed with route_security and must not block unrelated non-security work."
---

# Gitcrawl Cluster 86

Generated from local gitcrawl run cluster 86 for `openclaw/openclaw`.

Display title:

> bug(plugins): plugin tools intermittently unavailable in sub-agent sessions despite contracts.tools and compiled dist (regression from #56208)

Cluster shape from gitcrawl:

- total members: 6
- issues: 4
- pull requests: 2
- open candidates in local store: 6
- security-signal refs requiring route_security: #77826, #81857, #82562
- representative: #80847, currently open in local store
- latest member update: 2026-06-14T04:46:07.253893Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #77826 [security-signal] Runtime drops plugin web tools after config write
- #80847 bug(plugins): plugin tools intermittently unavailable in sub-agent sessions despite contracts.tools and compiled dist (regression from #56208)
- #81857 [security-signal] fix(plugins): scope tool lookup to loaded plugins
- #82562 [security-signal] fix(plugins): retain plugin tool registry after replacement
- #84242 memory-lancedb memory_store is registered but not exposed as callable agent tool
- #89173 External plugin tools (memory_store, memory_recall, etc.) not routed/exposed to the Agent in v2026.5.27+
