---
repo: openclaw/openclaw
cluster_id: gitcrawl-1079-small-dedupe-wave
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
  - "#82250"
candidates:
  - "#82250"
  - "#88309"
cluster_refs:
  - "#82250"
  - "#88309"
overlap_policy: "skip-any"
security_policy: central_security_only
import_security_policy: "skip-any"
security_sensitive: false
canonical_hint: "gitcrawl representative #82250 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 1079 on 2026-06-19."
---

# Gitcrawl Cluster 1079

Generated from local gitcrawl run cluster 1079 for `openclaw/openclaw`.

Display title:

> macOS LaunchAgent KeepAlive=true restarts after clean already-running gateway exit

Cluster shape from gitcrawl:

- total members: 2
- issues: 2
- pull requests: 0
- open candidates in local store: 2
- representative: #82250, currently open in local store
- latest member update: 2026-06-19T02:13:01.018047Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #82250 macOS LaunchAgent KeepAlive=true restarts after clean already-running gateway exit
- #88309 Restart race condition with LaunchAgent KeepAlive causes shutdown instead of restart
